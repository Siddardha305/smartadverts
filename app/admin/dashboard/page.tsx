"use client";

import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { auth } from "@/lib/firebase";
import { onAuthStateChanged, signOut } from "firebase/auth";

import { Mailbox, PaintBucket, Settings } from "lucide-react";

import { Toast, ToastType } from "@/components/ui/Toast";
import { ConfirmModal, ConfirmDialogData } from "@/components/ui/ConfirmModal";

// Import Custom Views
import { AdminSidebar } from "./components/Sidebar/AdminSidebar";
import { LeadsView } from "./components/Leads/LeadsView";
import { PortfolioView } from "./components/Portfolio/PortfolioView";
import { SettingsView } from "./components/Settings/SettingsView";
import { PortfolioModal } from "./components/Portfolio/PortfolioModal";
import { Lead, PortfolioItem, SiteSettings } from "./types";

export default function AdminDashboard() {
    const router = useRouter();
    const [user, setUser] = useState<any>(null);
    const [loading, setLoading] = useState(true);
    const [activeTab, setActiveTab] = useState<"leads" | "portfolio" | "settings">("leads");

    // Leads State
    const [leads, setLeads] = useState<Lead[]>([]);
    
    // Portfolio State
    const [portfolio, setPortfolio] = useState<PortfolioItem[]>([]);
    const [isAddingProject, setIsAddingProject] = useState(false);
    const [editingId, setEditingId] = useState<string | null>(null);
    const [newProject, setNewProject] = useState({ title: "", description: "" });
    const [beforeFile, setBeforeFile] = useState<File | null>(null);
    const [afterFile, setAfterFile] = useState<File | null>(null);
    const [uploadProgress, setUploadProgress] = useState(0);
    const [isUploading, setIsUploading] = useState(false);

    // Overlay States (Theme Popups)
    const [toast, setToast] = useState<{ message: string; type: ToastType } | null>(null);
    const [confirmDialog, setConfirmDialog] = useState<ConfirmDialogData | null>(null);

    const showToast = (message: string, type: ToastType = "success") => {
        setToast({ message, type });
        setTimeout(() => setToast(null), 3000);
    };

    // Settings State
    const [settings, setSettings] = useState<SiteSettings>({
        agencyName: "SmartAdverts",
        heroHeadline: "Professional Designs for Your Business",
        heroSubheadline: "We create everything from social media posts and banners to highly-converting thumbnails.",
        instagramUrl: "https://www.instagram.com/smartadverts_/",
        email: "professionalthumbnaileditor@gmail.com",
        pricingStartingFrom: "₹8k/mo"
    });
    const [isSavingSettings, setIsSavingSettings] = useState(false);

    // Auth Check
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            if (!currentUser) router.push("/admin/login");
            else { setUser(currentUser); setLoading(false); }
        });
        return () => unsubscribe();
    }, [router]);

    // Data Fetching
    useEffect(() => {
        if (!user) return;
        
        // Fetch Leads from MongoDB
        const fetchLeads = async () => {
            try {
                const response = await fetch("/api/contact");
                if (response.ok) {
                    const data = await response.json();
                    setLeads(data.map((item: any) => ({ ...item, id: item._id })));
                }
            } catch (error) {
                console.error("Error fetching leads:", error);
            }
        };

        // Fetch Portfolio from MongoDB
        const fetchPortfolio = async () => {
            try {
                const response = await fetch("/api/portfolio");
                if (response.ok) {
                    const data = await response.json();
                    setPortfolio(data.map((item: any) => ({ ...item, id: item._id })));
                }
            } catch (error) {
                console.error("Error fetching portfolio:", error);
            }
        };

        // Fetch Settings from MongoDB
        const fetchSettings = async () => {
            try {
                const response = await fetch("/api/settings");
                if (response.ok) {
                    const data = await response.json();
                    setSettings(data);
                }
            } catch (error) {
                console.error("Error fetching settings:", error);
            }
        };

        fetchLeads();
        fetchPortfolio();
        fetchSettings();
    }, [user]);

    // Image to Base64 Logic
    const fileToBase64 = (file: File | Blob): Promise<string> => {
        return new Promise((resolve, reject) => {
            const reader = new FileReader();
            reader.readAsDataURL(file);
            reader.onload = () => resolve(reader.result as string);
            reader.onerror = (error) => reject(error);
        });
    };

    const compressImage = async (file: File): Promise<Blob | File> => {
        return new Promise((resolve) => {
            const url = URL.createObjectURL(file);
            const img = new window.Image();
            img.src = url;
            img.onload = () => {
                URL.revokeObjectURL(url);
                const canvas = document.createElement('canvas');
                const MAX_WIDTH = 1200;
                let width = img.width; let height = img.height;
                const aspect = width / height;
                if (width > MAX_WIDTH) { width = MAX_WIDTH; height = width / aspect; }
                canvas.width = width; canvas.height = height;
                const ctx = canvas.getContext('2d');
                if (!ctx) return resolve(file);
                ctx.drawImage(img, 0, 0, width, height);
                canvas.toBlob((blob) => {
                    if (blob) resolve(blob);
                    else resolve(file);
                }, 'image/jpeg', 0.8);
            };
            img.onerror = () => {
                URL.revokeObjectURL(url);
                resolve(file);
            };
        });
    };

    const handleAddPortfolio = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!editingId && !beforeFile && !afterFile) return showToast("Please select at least one image!", "error");
        setIsUploading(true); 
        setUploadProgress(5);
        
        try {
            // 1. SEQUENTIAL COMPRESSION (STABLE)
            setUploadProgress(10);
            const beforeBlob = beforeFile ? await compressImage(beforeFile) : null;
            setUploadProgress(20);
            const afterBlob = afterFile ? await compressImage(afterFile) : null;
            setUploadProgress(30);

            // 2. CONVERT TO BASE64 (SAVE DIRECTLY IN MONGODB)
            let bu = ""; 
            let au = "";

            if (beforeBlob) {
                bu = await fileToBase64(beforeBlob);
                setUploadProgress(60);
            }

            if (afterBlob) {
                au = await fileToBase64(afterBlob);
                setUploadProgress(90);
            }

            if (editingId) {
                const updateData: any = { title: newProject.title, description: newProject.description };
                if (bu) updateData.before = bu; 
                if (au) updateData.after = au;
                
                const res = await fetch(`/api/portfolio/${editingId}`, {
                    method: "PUT",
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify(updateData),
                });
                
                if (!res.ok) throw new Error("Failed to update project");
                setEditingId(null);
            } else {
                const res = await fetch("/api/portfolio", {
                    method: "POST",
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify({ 
                        title: newProject.title, 
                        description: newProject.description, 
                        before: bu, 
                        after: au 
                    }),
                });

                if (!res.ok) {
                    const errorData = await res.json();
                    throw new Error(errorData.error || "Failed to save project");
                }
            }

            // RE-FETCH DATA IMMEDIATELY
            const refreshRes = await fetch("/api/portfolio");
            if (refreshRes.ok) {
                const data = await refreshRes.json();
                setPortfolio(data.map((item: any) => ({ ...item, id: item._id })));
            }

            setUploadProgress(100);
            setTimeout(() => {
                setIsAddingProject(false); 
                setNewProject({ title: "", description: "" }); 
                setBeforeFile(null); 
                setAfterFile(null); 
                setUploadProgress(0);
                setIsUploading(false);
            }, 500);
            
        } catch (err: any) { 
            console.error(err);
            showToast(`Error: ${err.message || "Upload failed. Please try again."}`, "error"); 
            setIsUploading(false);
            setUploadProgress(0);
        }
    };

    const handleEditProject = (item: PortfolioItem) => {
        setNewProject({ title: item.title, description: item.description });
        setEditingId(item.id);
        setIsAddingProject(true);
    };

    const handleDeleteProject = (id: string) => { 
        setConfirmDialog({
            isOpen: true,
            title: "Delete Case Study",
            message: "Are you sure you want to delete this project? This action cannot be undone.",
            onConfirm: async () => {
                await fetch(`/api/portfolio/${id}`, {
                    method: "DELETE",
                });
                showToast("Project Deleted", "success");
                setConfirmDialog(null);
                // Trigger re-fetch or manual update
                setPortfolio(prev => prev.filter(p => p.id !== id));
            }
        });
    };
    
    const handleSaveSettings = async (e: React.FormEvent) => { 
        e.preventDefault(); 
        setIsSavingSettings(true); 
        try { 
            const response = await fetch("/api/settings", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(settings),
            });
            if (response.ok) {
                showToast("Website Config Updated!"); 
            } else {
                throw new Error("Failed to save settings");
            }
        } catch (err: any) { 
            showToast(err.message || "Error updating settings!", "error"); 
        } finally { 
            setIsSavingSettings(false); 
        } 
    };
    
    const handleLogout = async () => { await signOut(auth); router.push("/admin/login"); };

    if (loading) return <div className="min-h-screen bg-black flex items-center justify-center font-black italic text-orange-500 uppercase tracking-widest animate-pulse">Igniting Admin...</div>;

    const navItems = [
        { id: "leads", label: "Inquiries", icon: <Mailbox className="w-5 h-5" />, count: leads.length },
        { id: "portfolio", label: "Work CMS", icon: <PaintBucket className="w-5 h-5" />, count: portfolio.length },
        { id: "settings", label: "Branding", icon: <Settings className="w-5 h-5" /> },
    ];

    return (
        <div className="flex flex-col md:flex-row min-h-screen bg-zinc-950 text-white selection:bg-orange-500/30">
            {/* Componentized Sidebar */}
            <AdminSidebar activeTab={activeTab} setActiveTab={setActiveTab} navItems={navItems} onLogout={handleLogout} />

            {/* Main Content Area */}
            <main className="flex-1 p-6 md:p-12 overflow-y-auto max-h-screen custom-scrollbar">
                {activeTab === "leads" && <LeadsView leads={leads} />}
                
                {activeTab === "portfolio" && (
                    <PortfolioView 
                        portfolio={portfolio} 
                        onAdd={() => setIsAddingProject(true)} 
                        onEdit={handleEditProject} 
                        onDelete={handleDeleteProject} 
                    />
                )}

                {activeTab === "settings" && (
                    <SettingsView 
                        settings={settings} 
                        setSettings={setSettings} 
                        onSave={handleSaveSettings} 
                        isSaving={isSavingSettings} 
                    />
                )}
            </main>

            {/* Componentized Portfolio Upload Modal */}
            <PortfolioModal 
                isOpen={isAddingProject}
                editingId={editingId}
                newProject={newProject}
                setNewProject={setNewProject}
                beforeFile={beforeFile}
                setBeforeFile={setBeforeFile}
                afterFile={afterFile}
                setAfterFile={setAfterFile}
                isUploading={isUploading}
                uploadProgress={uploadProgress}
                onSubmit={handleAddPortfolio}
                onClose={() => {
                    setIsAddingProject(false);
                    setEditingId(null);
                    setNewProject({ title: "", description: "" });
                    setBeforeFile(null);
                    setAfterFile(null);
                }}
            />

            {/* Custom Theme Popups */}
            <Toast toast={toast} />
            <ConfirmModal dialog={confirmDialog} onClose={() => setConfirmDialog(null)} />
        </div>
    );
}
