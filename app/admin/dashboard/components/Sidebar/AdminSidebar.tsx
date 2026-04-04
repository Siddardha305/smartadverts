"use client";

import React from "react";
import { NavLogo } from "@/components/Navbar/NavLogo";

interface AdminSidebarProps {
    activeTab: "leads" | "portfolio" | "settings";
    setActiveTab: (tab: "leads" | "portfolio" | "settings") => void;
    navItems: { id: string; label: string; icon: React.ReactNode; count?: number }[];
    onLogout: () => void;
}

export const AdminSidebar = ({ activeTab, setActiveTab, navItems, onLogout }: AdminSidebarProps) => {
    return (
        <aside className="w-full md:w-72 bg-zinc-950 border-r border-white/5 flex flex-col p-8 h-auto md:h-screen sticky top-0 z-[100] shadow-[30px_0_100px_rgba(0,0,0,0.5)]">
            <div className="mb-12 flex justify-center md:justify-start">
                <NavLogo />
            </div>

            <nav className="flex-1 flex flex-col gap-2">
                {navItems.map((item) => (
                    <button
                        key={item.id}
                        onClick={() => setActiveTab(item.id as any)}
                        className={`group flex items-center justify-between px-6 py-4 rounded-2xl text-[10px] font-black uppercase tracking-widest transition-all border ${
                            activeTab === item.id 
                            ? "bg-white text-black border-transparent shadow-[0_15px_40px_rgba(255,255,255,0.05)]" 
                            : "text-zinc-600 border-transparent hover:border-white/5 hover:bg-white/[0.02] hover:text-white"
                        }`}
                    >
                        <div className="flex items-center gap-3">
                            <span className={`transition-transform ${activeTab === item.id ? "grayscale-0" : "grayscale opacity-50"}`}>
                                {item.icon}
                            </span>
                            {item.label}
                        </div>
                        {item.count !== undefined && (
                            <span className={`px-2 py-0.5 rounded-full text-[8px] ${activeTab === item.id ? "bg-black text-white" : "bg-white/10 text-zinc-500"}`}>
                                {item.count}
                            </span>
                        )}
                    </button>
                ))}
            </nav>

            <div className="mt-auto pt-6 border-t border-white/5 flex flex-col gap-3">
                <button onClick={onLogout} className="flex items-center gap-3 px-6 py-4 rounded-2xl text-[9px] font-black uppercase tracking-widest text-rose-500 hover:bg-rose-500/10 transition-all active:scale-95 border border-rose-500/10 text-center justify-center">
                    Sign Out
                </button>
            </div>
        </aside>
    );
};
