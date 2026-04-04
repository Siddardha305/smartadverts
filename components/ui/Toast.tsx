"use client";

import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { CheckCircle2, AlertTriangle } from "lucide-react";

export type ToastType = "success" | "error";

export interface ToastProps {
    message: string;
    type?: ToastType;
}

interface ToastComponentProps {
    toast: ToastProps | null;
}

export const Toast = ({ toast }: ToastComponentProps) => {
    return (
        <AnimatePresence>
            {toast && (
                <motion.div 
                    initial={{ opacity: 0, y: 50, scale: 0.9 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 20, scale: 0.9 }}
                    className={`fixed bottom-10 right-10 md:bottom-12 md:right-12 z-[1000] px-8 py-4 rounded-full font-black uppercase tracking-widest text-[10px] shadow-2xl flex items-center gap-4 backdrop-blur-xl border ${
                        toast.type === 'success' 
                        ? 'bg-orange-500/90 border-orange-400 text-white' 
                        : 'bg-rose-600/90 border-rose-500 text-white'
                    }`}
                >
                    <span className="flex items-center justify-center">
                        {toast.type === 'success' ? <CheckCircle2 className="w-5 h-5" strokeWidth={3} /> : <AlertTriangle className="w-5 h-5" strokeWidth={3} />}
                    </span>
                    {toast.message}
                </motion.div>
            )}
        </AnimatePresence>
    );
};
