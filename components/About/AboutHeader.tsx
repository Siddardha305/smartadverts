import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";

export const AboutHeader = () => {
    return (
        <div className="flex flex-col lg:flex-row items-start justify-between gap-16 lg:gap-12 w-full text-left">
            <div className="w-full lg:w-1/3 flex flex-col items-start lg:sticky lg:top-32">
                <motion.p
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.8 }}
                    className="flex items-center gap-4 text-orange-500 font-bold uppercase tracking-widest text-sm mb-6"
                >
                    <span className="w-12 h-[2px] bg-orange-500"></span>{" "}
                    About The Studio
                </motion.p>
                <motion.h3
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 1, delay: 0.2 }}
                    className="text-2xl font-light text-zinc-400 max-w-sm mb-6"
                >
                    Bridging the gap between pure visual aesthetics and high-converting performance logic.
                </motion.h3>
            </div>

            <div className="w-full lg:w-2/3">
                <motion.h2
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 1, delay: 0.4 }}
                    className="text-3xl md:text-5xl lg:text-5xl font-medium tracking-tight leading-snug md:leading-tight text-zinc-300"
                >
                    We Exist Because Good Design <span className="text-white font-black italic">Shouldn't Be Expensive</span>
                </motion.h2>

                <div className="mt-12 space-y-8 text-lg md:text-xl font-light text-zinc-400 leading-relaxed max-w-4xl">
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 1, delay: 0.5 }}
                    >
                        Most small businesses can't afford a full-time graphic designer — but they still need to look professional online. That's why we started this service. We connect local businesses with skilled designers who work behind the scenes to keep your brand looking sharp, consistent, and eye-catching every single day.
                    </motion.p>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 1, delay: 0.6 }}
                    >
                        No contracts, no complicated processes — just <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-rose-500 font-bold">great design, on time, every time.</span>
                    </motion.p>
                </div>

                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.8 }}
                    className="mt-16"
                >
                    <Link href="/about" className="inline-flex items-center gap-4 px-8 py-4 bg-white/10 hover:bg-orange-500 text-white border border-white/20 hover:border-orange-500 rounded-full font-bold uppercase tracking-wide transition-all duration-300 shadow-xl group">
                        Get to Know Us
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="transform group-hover:translate-x-1 transition-transform">
                            <line x1="5" y1="12" x2="19" y2="12"></line>
                            <polyline points="12 5 19 12 12 19"></polyline>
                        </svg>
                    </Link>
                </motion.div>
            </div>
        </div>
    );
};
