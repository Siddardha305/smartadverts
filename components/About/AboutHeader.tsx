"use client";

import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { Users, Zap, Award, Globe } from "lucide-react";

const stats = [
    { label: "Happy Clients", value: "200+", icon: <Users className="w-5 h-5" /> },
    { label: "Designs Made", value: "1.5k+", icon: <Zap className="w-5 h-5" /> },
    { label: "Awards Won", value: "12", icon: <Award className="w-5 h-5" /> },
    { label: "Global Reach", value: "15+", icon: <Globe className="w-5 h-5" /> },
];

export const AboutHeader = () => {
    return (
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
            {/* Visual Side */}
            <div className="relative order-2 lg:order-1 px-4 md:px-0">
                <div className="grid grid-cols-2 gap-3 md:gap-6">
                    <motion.div 
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.8 }}
                        className="aspect-[3/4] rounded-2xl md:rounded-[2.5rem] bg-zinc-900 border border-white/5 overflow-hidden"
                    >
                        <img src="https://images.unsplash.com/photo-1558655146-d09347e92766?auto=format&fit=crop&q=80" alt="Creative" className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700" />
                    </motion.div>
                    <motion.div 
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="aspect-square rounded-2xl md:rounded-[2.5rem] bg-zinc-900 border border-white/5 overflow-hidden mt-8 md:mt-16"
                    >
                        <img src="https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&q=80" alt="Design" className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700" />
                    </motion.div>
                </div>
                
                {/* Floating Stats Card - Scaled for mobile */}
                <motion.div 
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.5 }}
                    className="absolute -bottom-6 -right-2 md:-bottom-8 md:-right-8 glass p-6 md:p-8 rounded-2xl md:rounded-[2rem] border border-orange-500/20 shadow-2xl scale-90 md:scale-100"
                >
                    <div className="text-3xl md:text-4xl font-black italic text-orange-500 leading-none">24H</div>
                    <div className="text-[8px] md:text-[10px] font-black uppercase tracking-widest text-zinc-400 mt-1">Average Turnaround</div>
                </motion.div>
            </div>

            {/* Content Side */}
            <div className="order-1 lg:order-2 text-left">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-orange-500/10 border border-orange-500/20 text-orange-500 text-[10px] font-black uppercase tracking-widest mb-6 md:mb-8"
                >
                    <span className="w-2 h-2 rounded-full bg-orange-500 animate-pulse" />
                    Our Story
                </motion.div>

                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 }}
                    className="text-3xl md:text-5xl lg:text-6xl font-black uppercase italic leading-[0.95] mb-6 md:mb-8"
                >
                    We Build <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-rose-500">Brands</span> <br />
                    That Demand <span className="text-glow">Attention.</span>
                </motion.h2>

                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                    className="text-zinc-400 text-sm md:text-lg leading-relaxed mb-10 md:mb-12 max-w-xl"
                >
                    SmartAdverts was born from a simple observation: Most small businesses can&apos;t afford a full-time creative team, yet the digital world demands high-end visuals daily. We bridged that gap with a subscription that gives you unlimited access to elite design talent.
                </motion.p>

                {/* Stats Grid */}
                <div className="grid grid-cols-2 gap-6 md:gap-8 mb-10 md:mb-12">
                    {stats.map((stat, i) => (
                        <motion.div 
                            key={i}
                            initial={{ opacity: 0, y: 10 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.3 + (i * 0.1) }}
                            className="flex flex-col gap-1 md:gap-2"
                        >
                            <div className="flex items-center gap-2 md:gap-3 text-orange-500">
                                {stat.icon}
                                <span className="text-xl md:text-2xl font-black italic">{stat.value}</span>
                            </div>
                            <span className="text-zinc-500 text-[8px] md:text-[10px] font-black uppercase tracking-widest">{stat.label}</span>
                        </motion.div>
                    ))}
                </div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5 }}
                >
                    <Link href="/contact" className="group flex items-center gap-4 text-white font-black uppercase tracking-widest text-xs italic">
                        <span className="pb-1 border-b-2 border-orange-500 group-hover:border-white transition-all">Start Your Journey</span>
                        <Zap className="w-4 h-4 text-orange-500 group-hover:translate-x-2 transition-transform" />
                    </Link>
                </motion.div>
            </div>
        </div>
    );
};
