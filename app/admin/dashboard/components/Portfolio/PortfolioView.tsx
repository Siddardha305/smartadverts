"use client";

import React from "react";
import { motion } from "framer-motion";
import { PortfolioItem } from "../../types";
import { BeforeAfterSlider } from "@/components/Works/BeforeAfterSlider";

interface PortfolioViewProps {
    portfolio: PortfolioItem[];
    onAdd: () => void;
    onEdit: (item: PortfolioItem) => void;
    onDelete: (id: string) => void;
}

export const PortfolioView = ({ portfolio, onAdd, onEdit, onDelete }: PortfolioViewProps) => {
    return (
        <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }}>
            <div className="flex flex-col md:flex-row items-start md:items-end justify-between mb-10 gap-6 bg-orange-600/5 p-8 rounded-[2.5rem] border border-orange-500/10">
                <div>
                    <h2 className="text-4xl font-black uppercase tracking-tighter italic leading-none">
                        WORK<br/><span className="text-orange-500">SHOWCASE</span>
                    </h2>
                </div>
                <button onClick={onAdd} className="px-10 py-4 bg-white text-black rounded-full text-[9px] font-black uppercase tracking-widest shadow-2xl hover:bg-orange-500 hover:text-white transition-all active:scale-95 italic">
                    Publish +
                </button>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {portfolio.length === 0 ? (
                    <div className="col-span-full py-20 text-center border-2 border-dashed border-white/5 rounded-[2rem]">
                        <p className="text-zinc-600 font-black uppercase text-[10px] tracking-widest italic animate-pulse">
                            No works found in database.<br/>Ready for your first upload.
                        </p>
                    </div>
                ) : (
                    portfolio.map(item => (
                        <div key={item.id} className="group bg-zinc-950 p-4 rounded-[2rem] border border-white/5 transition-all hover:border-orange-500/20 shadow-xl flex flex-col">
                            <div className="relative aspect-video rounded-2xl overflow-hidden mb-4 bg-zinc-900 border border-white/5 group-hover:border-orange-500/20 transition-all">
                                <div className="w-full h-full opacity-60 group-hover:opacity-100 transition-opacity duration-500">
                                    <BeforeAfterSlider beforeImage={item.before} afterImage={item.after} />
                                </div>
                                <div className="absolute inset-x-0 bottom-0 p-4 flex items-center justify-center gap-2 bg-gradient-to-t from-black to-transparent opacity-0 group-hover:opacity-100 transition-all translate-y-3 group-hover:translate-y-0 z-50 duration-300">
                                    <button onClick={() => onEdit(item)} className="px-6 py-3 bg-white text-black rounded-full font-black uppercase tracking-widest text-[8px] shadow-2xl transition-colors font-bold">Edit</button>
                                    <button onClick={() => onDelete(item.id)} className="px-6 py-3 bg-rose-600 text-white rounded-full font-black uppercase tracking-widest text-[8px] shadow-2xl transition-colors font-bold">Delete</button>
                                </div>
                            </div>
                            <div className="px-2 pb-2 uppercase tracking-tighter leading-none">
                                <h3 className="text-lg font-black italic text-zinc-300 group-hover:text-white transition-colors">{item.title}</h3>
                            </div>
                        </div>
                    ))
                )}
            </div>
        </motion.div>
    );
};
