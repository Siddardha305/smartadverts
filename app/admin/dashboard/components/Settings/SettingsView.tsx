"use client";

import React from "react";
import { motion } from "framer-motion";
import { Send } from "lucide-react";
import { SiteSettings } from "../../types";

interface SettingsViewProps {
    settings: SiteSettings;
    setSettings: (settings: SiteSettings) => void;
    onSave: (e: React.FormEvent) => void;
    isSaving: boolean;
}

export const SettingsView = ({ settings, setSettings, onSave, isSaving }: SettingsViewProps) => {
    return (
        <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} className="max-w-3xl">
            <div className="mb-10 text-left">
                <h2 className="text-4xl font-black uppercase tracking-tighter italic leading-none">
                    SITE<br/><span className="text-orange-500">IDENTITY</span>
                </h2>
            </div>
            <form onSubmit={onSave} className="bg-[#111] p-10 rounded-[3rem] border border-white/5 space-y-8 shadow-[0_30px_100px_rgba(0,0,0,0.5)]">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="space-y-2">
                        <label className="text-[8px] uppercase font-black tracking-widest text-zinc-700 block ml-6 underline">Agency Name</label>
                        <input value={settings.agencyName} onChange={e => setSettings({...settings, agencyName: e.target.value})} className="w-full bg-black border border-white/5 rounded-full px-8 py-4 focus:border-orange-500 outline-none block text-sm font-black italic" />
                    </div>
                    <div className="space-y-2">
                        <label className="text-[8px] uppercase font-black tracking-widest text-zinc-700 block ml-6 underline">Pricing Start</label>
                        <input value={settings.pricingStartingFrom} onChange={e => setSettings({...settings, pricingStartingFrom: e.target.value})} className="w-full bg-black border border-white/5 rounded-full px-8 py-4 focus:border-orange-500 outline-none block text-sm font-black italic" />
                    </div>
                </div>
                <div className="space-y-2">
                    <label className="text-[8px] uppercase font-black tracking-widest text-zinc-700 block ml-6 underline">Main Headline</label>
                    <textarea value={settings.heroHeadline} onChange={e => setSettings({...settings, heroHeadline: e.target.value})} className="w-full bg-black border border-white/5 rounded-[2rem] px-8 py-6 focus:border-orange-500 outline-none h-24 block text-sm font-black italic leading-tight" />
                </div>
                <div className="space-y-2">
                    <label className="text-[8px] uppercase font-black tracking-widest text-zinc-700 block ml-6 underline">Sub-Copy</label>
                    <textarea value={settings.heroSubheadline} onChange={e => setSettings({...settings, heroSubheadline: e.target.value})} className="w-full bg-black border border-white/5 rounded-[2rem] px-8 py-8 focus:border-orange-500 outline-none h-40 block text-xs font-bold text-zinc-500 italic leading-relaxed" />
                </div>
                <button disabled={isSaving} type="submit" className="w-full py-6 bg-white text-black font-black uppercase tracking-widest rounded-full hover:bg-orange-500 hover:text-white transition-all shadow-2xl flex items-center justify-center gap-4 text-[10px] italic">
                    {isSaving ? "Syncing..." : "Update Website Evolution"} <Send className="w-4 h-4 ml-2" />
                </button>
            </form>
        </motion.div>
    );
};
