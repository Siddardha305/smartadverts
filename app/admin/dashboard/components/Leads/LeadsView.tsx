"use client";

import React from "react";
import { motion } from "framer-motion";
import { Lead } from "../../types";

interface LeadsViewProps {
    leads: Lead[];
}

export const LeadsView = ({ leads }: LeadsViewProps) => {
    return (
        <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }}>
            <div className="mb-10">
                <h2 className="text-4xl font-black uppercase tracking-tighter italic leading-none">
                    <span className="text-orange-500">CLIENT</span><br/>INQUIRIES
                </h2>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 pb-12">
                {leads.map((lead, idx) => (
                    <motion.div 
                        initial={{ opacity: 0, y: 20 }} 
                        animate={{ opacity: 1, y: 0 }} 
                        transition={{ delay: idx * 0.05 }} 
                        key={lead.id} 
                        className="bg-zinc-900/40 p-8 rounded-[2.5rem] border border-white/5 flex flex-col justify-between hover:border-orange-500/20 transition-all group relative overflow-hidden"
                    >
                        <div className="relative z-10">
                            <p className="text-[8px] font-black uppercase tracking-widest text-zinc-700 mb-3">
                                {lead.timestamp?.toDate()?.toLocaleString()}
                            </p>
                            <h3 className="text-2xl font-black uppercase tracking-tighter mb-1 italic select-all">
                                {lead.name}
                            </h3>
                            <p className="text-orange-500 font-black text-[10px] uppercase tracking-[0.2em] mb-6 select-all">
                                {lead.email}
                            </p>
                            <div className="bg-black/40 p-6 rounded-[1.5rem] border border-white/5 text-zinc-400 text-sm italic leading-relaxed group-hover:text-zinc-200 transition-colors shadow-inner">
                                &quot;{lead.message}&quot;
                            </div>
                        </div>
                        <div className="mt-6 z-10">
                            <a href={`mailto:${lead.email}`} className="inline-block px-8 py-4 bg-white text-black rounded-full text-[9px] font-black uppercase tracking-widest hover:bg-orange-500 hover:text-white transition-all shadow-xl active:scale-95 text-center">
                                Reply
                            </a>
                        </div>
                    </motion.div>
                ))}
            </div>
        </motion.div>
    );
};
