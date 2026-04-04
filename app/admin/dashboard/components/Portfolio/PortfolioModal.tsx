"use client";

import React from "react";
import { motion, AnimatePresence } from "framer-motion";

interface PortfolioModalProps {
    isOpen: boolean;
    editingId: string | null;
    newProject: { title: string; description: string };
    setNewProject: (project: { title: string; description: string }) => void;
    beforeFile: File | null;
    setBeforeFile: (file: File | null) => void;
    afterFile: File | null;
    setAfterFile: (file: File | null) => void;
    isUploading: boolean;
    uploadProgress: number;
    onSubmit: (e: React.FormEvent) => void;
    onClose: () => void;
}

export const PortfolioModal = ({
    isOpen,
    editingId,
    newProject,
    setNewProject,
    beforeFile,
    setBeforeFile,
    afterFile,
    setAfterFile,
    isUploading,
    uploadProgress,
    onSubmit,
    onClose
}: PortfolioModalProps) => {
    return (
        <AnimatePresence>
            {isOpen && (
                <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="fixed inset-0 bg-black/98 z-[500] flex items-center justify-center p-4 backdrop-blur-xl pt-20 pb-20">
                    <motion.div initial={{ y: 50, opacity: 0 }} animate={{ y: 0, opacity: 1 }} exit={{ y: 50, opacity: 0 }} className="bg-zinc-950 w-full max-w-xl p-8 rounded-[2.5rem] border border-white/10 relative shadow-2xl my-auto">
                        <button onClick={onClose} className="absolute top-6 right-8 text-zinc-700 hover:text-white uppercase font-black text-[9px] tracking-widest transition-colors">
                            Close
                        </button>
                        <h3 className="text-2xl font-black italic uppercase tracking-tighter mb-6 text-orange-500">
                            {editingId ? "Refine" : "Publish"} <span className="text-white">Case Study</span>
                        </h3>
                        <form onSubmit={onSubmit} className="space-y-6">
                            <div className="space-y-2">
                                <label className="text-[8px] uppercase font-black tracking-widest text-zinc-700 block ml-6">Title</label>
                                <input required value={newProject.title} onChange={e => setNewProject({...newProject, title: e.target.value})} className="w-full bg-white/5 border border-white/5 rounded-full px-8 py-4 focus:border-orange-500 outline-none text-sm font-black italic uppercase" />
                            </div>
                            <div className="space-y-2">
                                <label className="text-[8px] uppercase font-black tracking-widest text-zinc-700 block ml-6">Details</label>
                                <textarea required value={newProject.description} onChange={e => setNewProject({...newProject, description: e.target.value})} className="w-full bg-white/5 border border-white/5 rounded-[2rem] px-8 py-6 focus:border-orange-500 outline-none h-24 text-zinc-400 italic text-sm" />
                            </div>
                            <div className="grid grid-cols-2 gap-4">
                                <label className="group h-32 bg-black border-2 border-dashed border-white/5 rounded-[1.5rem] flex flex-col items-center justify-center cursor-pointer hover:border-orange-500/30 transition-all overflow-hidden relative shadow-inner">
                                    {beforeFile ? <img src={URL.createObjectURL(beforeFile)} alt="Before Upload" className="w-full h-full object-cover" /> : <span className="text-[8px] font-black uppercase text-zinc-700 text-center">Optional<br/>Before Image</span>}
                                    <input type="file" accept="image/*" className="hidden" onChange={e => setBeforeFile(e.target.files?.[0] || null)} />
                                </label>
                                <label className="group h-32 bg-black border-2 border-dashed border-white/5 rounded-[1.5rem] flex flex-col items-center justify-center cursor-pointer hover:border-orange-500/30 transition-all overflow-hidden relative shadow-inner">
                                    {afterFile ? <img src={URL.createObjectURL(afterFile)} alt="After Upload" className="w-full h-full object-cover" /> : <span className="text-[8px] font-black uppercase text-zinc-700 text-center">Main / After<br/>Image</span>}
                                    <input type="file" accept="image/*" className="hidden" onChange={e => setAfterFile(e.target.files?.[0] || null)} />
                                </label>
                            </div>
                            {isUploading && (
                                <div className="space-y-4">
                                    <div className="h-2 bg-zinc-900 rounded-full overflow-hidden">
                                        <motion.div 
                                            initial={{ width: 0 }}
                                            animate={{ width: `${uploadProgress}%` }}
                                            className="h-full bg-gradient-to-r from-orange-600 via-rose-600 to-orange-500" 
                                        />
                                    </div>
                                    <p className="text-[10px] font-black uppercase text-center text-orange-500 tracking-[0.3em] italic animate-pulse">Syncing encrypted data... {uploadProgress}%</p>
                                </div>
                            )}
                            <button disabled={isUploading} type="submit" className="w-full py-6 bg-white text-black font-black uppercase tracking-widest rounded-full hover:bg-orange-500 hover:text-white transition-all text-[10px] italic shadow-2xl">
                                {isUploading ? "TRANSMITTING..." : (editingId ? "Save Changes" : "Publish Project")}
                            </button>
                        </form>
                    </motion.div>
                </motion.div>
            )}
        </AnimatePresence>
    );
};
