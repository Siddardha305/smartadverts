"use client";

import React from "react";
import { motion, AnimatePresence } from "framer-motion";

export interface ConfirmDialogData {
    isOpen: boolean;
    title: string;
    message: string;
    onConfirm: () => void;
}

interface ConfirmModalProps {
    dialog: ConfirmDialogData | null;
    onClose: () => void;
}

export const ConfirmModal = ({ dialog, onClose }: ConfirmModalProps) => {
    return (
        <AnimatePresence>
            {dialog && dialog.isOpen && (
                <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="fixed inset-0 bg-black/98 z-[1000] flex items-center justify-center p-4 backdrop-blur-xl">
                    <motion.div initial={{ scale: 0.9, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} exit={{ scale: 0.9, opacity: 0 }} className="bg-zinc-950 max-w-sm w-full p-10 rounded-[2.5rem] border border-white/10 shadow-[0_30px_100px_rgba(234,88,12,0.15)] text-center">
                        <h3 className="text-2xl font-black italic uppercase tracking-tighter text-orange-500 mb-2">{dialog.title}</h3>
                        <p className="text-zinc-400 text-sm italic mb-8 leading-relaxed font-semibold">{dialog.message}</p>
                        <div className="flex gap-4">
                            <button onClick={onClose} className="flex-1 py-5 bg-white/5 hover:bg-white/10 border border-white/5 text-white rounded-full text-[9px] font-black uppercase tracking-widest transition-all">Cancel</button>
                            <button onClick={dialog.onConfirm} className="flex-1 py-5 bg-rose-600 hover:bg-rose-500 text-white rounded-full text-[9px] font-black uppercase tracking-widest shadow-2xl transition-all">Confirm</button>
                        </div>
                    </motion.div>
                </motion.div>
            )}
        </AnimatePresence>
    );
};
