"use client";

import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { auth } from "@/lib/firebase";
import { signInWithEmailAndPassword, onAuthStateChanged } from "firebase/auth";
import { motion } from "framer-motion";

export default function AdminLogin() {
    const router = useRouter();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const [loading, setLoading] = useState(false);

    // If already logged in, go to dashboard
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            if (user) router.push("/admin/dashboard");
        });
        return () => unsubscribe();
    }, [router]);

    const handleLogin = async (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);
        setError("");
        
        try {
            await signInWithEmailAndPassword(auth, email, password);
            router.push("/admin/dashboard");
        } catch (err: any) {
            console.error("Login Error:", err);
            setError("Invalid credentials. Please check your email and password.");
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="min-h-screen bg-black text-white flex items-center justify-center p-4 selection:bg-orange-500 overflow-hidden relative">
            {/* Abstract Background */}
            <div className="absolute top-[-10%] right-[-10%] h-[500px] w-[500px] rounded-full bg-orange-600/10 blur-[150px] pointer-events-none" />
            <div className="absolute bottom-[-10%] left-[-10%] h-[500px] w-[500px] rounded-full bg-rose-600/10 blur-[150px] pointer-events-none" />

            <motion.div 
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="w-full max-w-md relative z-10"
            >
                <div className="text-center mb-12">
                    <div className="w-16 h-16 rounded-[2rem] bg-orange-600 mx-auto mb-6 flex items-center justify-center font-black text-3xl italic shadow-[0_0_40px_rgba(234,88,12,0.3)]">SA</div>
                    <h1 className="text-4xl font-black uppercase tracking-tighter mb-2">Internal Access</h1>
                    <p className="text-zinc-500 font-medium tracking-wide text-sm uppercase">SmartAdverts Creative Studio</p>
                </div>

                <div className="bg-zinc-900/40 backdrop-blur-3xl border border-white/10 rounded-[3rem] p-8 md:p-10 shadow-2xl">
                    <form onSubmit={handleLogin} className="flex flex-col gap-6">
                        <div className="flex flex-col gap-2">
                            <label className="text-[10px] uppercase tracking-widest font-black text-zinc-500 ml-4">Email Address</label>
                            <input 
                                required
                                type="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                placeholder="name@smartadverts.in"
                                className="w-full bg-white/5 border border-white/5 focus:border-orange-500/50 rounded-full px-6 py-4 transition-all focus:outline-none placeholder:text-zinc-700"
                            />
                        </div>
                        <div className="flex flex-col gap-2">
                            <label className="text-[10px] uppercase tracking-widest font-black text-zinc-500 ml-4">Access Key</label>
                            <input 
                                required
                                type="password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                placeholder="••••••••••••"
                                className="w-full bg-white/5 border border-white/5 focus:border-orange-500/50 rounded-full px-6 py-4 transition-all focus:outline-none placeholder:text-zinc-700"
                            />
                        </div>

                        {error && (
                            <motion.div 
                                initial={{ opacity: 0, height: 0 }}
                                animate={{ opacity: 1, height: "auto" }}
                                className="bg-rose-500/10 border border-rose-500/20 text-rose-500 text-xs font-bold p-4 rounded-2xl text-center"
                            >
                                {error}
                            </motion.div>
                        )}

                        <button 
                            disabled={loading}
                            type="submit"
                            className="group relative mt-4 overflow-hidden rounded-full bg-white px-10 py-5 text-black font-black uppercase tracking-widest text-xs transition-all hover:scale-[1.02] disabled:opacity-50 shadow-xl"
                        >
                            <span className="relative z-10">{loading ? "Validating..." : "Enter Dashboard →"}</span>
                            <div className="absolute inset-x-0 bottom-0 z-0 h-0 bg-orange-500 group-hover:h-full transition-all duration-300" />
                        </button>
                    </form>
                </div>
                
                <p className="mt-12 text-center text-[10px] text-zinc-600 uppercase tracking-widest font-bold">
                    System Secure • Authorized Personnel Only
                </p>
            </motion.div>
        </div>
    );
}
