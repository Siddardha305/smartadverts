"use client";

import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { auth, db } from "@/lib/firebase";
import { signInWithEmailAndPassword, onAuthStateChanged, signOut } from "firebase/auth";
import { collection, query, orderBy, onSnapshot, Timestamp } from "firebase/firestore";
import { motion, AnimatePresence } from "framer-motion";

interface Lead {
    id: string;
    name: string;
    email: string;
    message: string;
    timestamp: any;
}

export default function AdminDashboard() {
    const router = useRouter();
    const [user, setUser] = useState<any>(null);
    const [loading, setLoading] = useState(true);
    const [leads, setLeads] = useState<Lead[]>([]);
    
    // Auth Check
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            if (!currentUser) {
                // If not logged in, redirect to login page
                router.push("/admin/login");
            } else {
                setUser(currentUser);
                setLoading(false);
            }
        });

        return () => unsubscribe();
    }, [router]);

    // Fetch Leads once logged in
    useEffect(() => {
        if (!user) return;

        const q = query(collection(db, "leads"), orderBy("timestamp", "desc"));
        const unsubLeads = onSnapshot(q, (snapshot) => {
            const fetchedLeads = snapshot.docs.map(doc => ({
                id: doc.id,
                ...doc.data()
            } as Lead));
            setLeads(fetchedLeads);
        });

        return () => unsubLeads();
    }, [user]);

    const handleLogout = async () => {
        await signOut(auth);
        router.push("/admin/login");
    };

    if (loading) {
        return (
            <div className="min-h-screen bg-black flex items-center justify-center">
                <div className="w-12 h-12 border-4 border-orange-500 border-t-transparent rounded-full animate-spin"></div>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-zinc-950 text-white selection:bg-orange-500 selection:text-white">
            {/* Header */}
            <header className="fixed top-0 inset-x-0 bg-black/80 backdrop-blur-xl border-b border-white/5 z-50 py-4 px-4 md:px-8 flex items-center justify-between">
                <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-orange-600 flex items-center justify-center font-black text-xl italic">SA</div>
                    <h1 className="font-bold text-xl uppercase tracking-tighter">Admin Dashboard</h1>
                </div>
                <div className="flex items-center gap-6">
                    <div className="hidden md:block text-right">
                        <p className="text-xs text-zinc-500 uppercase font-black">Logged in as</p>
                        <p className="text-sm font-bold text-zinc-300">{user?.email}</p>
                    </div>
                    <button 
                        onClick={handleLogout}
                        className="px-6 py-2.5 bg-zinc-900 hover:bg-rose-950/30 border border-white/10 hover:border-rose-500/50 rounded-full text-xs font-black uppercase tracking-widest transition-all"
                    >
                        Logout
                    </button>
                </div>
            </header>

            {/* Main Content */}
            <main className="pt-32 pb-20 px-4 md:px-8 max-w-7xl mx-auto">
                
                <div className="flex flex-col md:flex-row items-center justify-between mb-12 gap-6">
                    <div>
                        <h2 className="text-4xl md:text-5xl font-black uppercase tracking-tighter">Client <br /><span className="text-orange-500">Inquiries</span></h2>
                        <p className="text-zinc-500 mt-2 font-medium">Total messages: {leads.length}</p>
                    </div>
                    <div className="flex gap-4">
                         <div className="p-4 bg-zinc-900/50 border border-white/5 rounded-3xl min-w-[140px] text-center">
                            <p className="text-[10px] text-orange-500 font-bold uppercase tracking-widest mb-1">Active Leads</p>
                            <p className="text-3xl font-black">{leads.length}</p>
                         </div>
                    </div>
                </div>

                {/* Leads List */}
                <div className="grid grid-cols-1 gap-6 relative">
                    <AnimatePresence mode="popLayout">
                        {leads.length === 0 ? (
                            <motion.div 
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                className="py-20 text-center bg-zinc-900/20 rounded-[3rem] border border-dashed border-white/10"
                            >
                                <p className="text-zinc-500 font-bold uppercase tracking-widest text-sm">No messages yet. They will appear here when someone fills the form!</p>
                            </motion.div>
                        ) : (
                            leads.map((lead, idx) => (
                                <motion.div
                                    key={lead.id}
                                    layout
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: idx * 0.05 }}
                                    className="group relative bg-zinc-900/40 hover:bg-zinc-900/60 p-6 md:p-8 rounded-[2.5rem] border border-white/5 hover:border-orange-500/20 transition-all duration-500"
                                >
                                    <div className="flex flex-col md:flex-row justify-between gap-6">
                                        <div className="flex-1">
                                            <div className="flex items-center gap-3 mb-4">
                                                <span className="px-3 py-1 bg-orange-600/10 text-orange-500 text-[10px] font-black uppercase tracking-widest rounded-full border border-orange-500/20">NEW LEAD</span>
                                                <span className="text-[10px] text-zinc-500 uppercase font-black">
                                                    {lead.timestamp instanceof Timestamp ? lead.timestamp.toDate().toLocaleString() : "Just now"}
                                                </span>
                                            </div>
                                            <h3 className="text-2xl md:text-3xl font-black uppercase tracking-tighter mb-2 group-hover:text-orange-500 transition-colors">{lead.name}</h3>
                                            <p className="text-orange-500/80 font-bold text-sm mb-6 pb-6 border-b border-white/5">{lead.email}</p>
                                            
                                            <div className="relative">
                                                <p className="text-zinc-300 text-lg leading-relaxed relative z-10 italic">
                                                    &quot;{lead.message}&quot;
                                                </p>
                                            </div>
                                        </div>
                                        <div className="flex flex-col justify-between items-end">
                                            <a 
                                                href={`mailto:${lead.email}?subject=Response from SmartAdverts`} 
                                                className="px-8 py-4 bg-white text-black hover:bg-orange-500 hover:text-white rounded-full font-black uppercase tracking-widest text-xs transition-all flex items-center gap-2 group-hover:scale-105"
                                            >
                                                Reply Now
                                                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                                                </svg>
                                            </a>
                                        </div>
                                    </div>
                                </motion.div>
                            ))
                        )}
                    </AnimatePresence>
                </div>
            </main>
        </div>
    );
}
