"use client";

import React from "react";
import { motion } from "framer-motion";
import { Clock } from "lucide-react";
import { AboutHeader } from "./AboutHeader";
import { AboutMarquee } from "./AboutMarquee";

export const About = () => {
    return (
        <section id="about" className="py-32 px-6 bg-[var(--bg-main)]">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="mb-20">
            <span className="text-brand text-[10px] uppercase tracking-[0.5em] font-black italic block mb-6">About the Studio</span>
            <h2 className="text-5xl md:text-7xl font-black italic uppercase tracking-tighter leading-none mb-8">
                Engineering <br /> <span className="text-brand">Visual Excellence</span>
            </h2>
            <p className="max-w-2xl text-[var(--text-muted)] text-lg font-medium leading-relaxed">
                We are a next-generation creative studio dedicated to scaling brands through high-impact design and precision video editing.
            </p>
        </div>

        {/* Bento Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
            {/* Main Stats Card */}
            <div className="md:col-span-8 bento-card flex flex-col justify-between group overflow-hidden">
                <div className="relative z-10">
                    <h3 className="text-8xl md:text-[10rem] font-black italic tracking-tighter text-brand leading-none mb-4 group-hover:scale-105 transition-transform duration-700">340+</h3>
                    <p className="text-2xl font-bold italic uppercase tracking-tight text-[var(--text-main)]">Successful Deliveries</p>
                </div>
                <div className="mt-12 flex items-center gap-4">
                    <div className="flex -space-x-4">
                        {[1,2,3,4].map(i => (
                            <div key={i} className="w-12 h-12 rounded-full border-4 border-[var(--bg-surface)] bg-zinc-800" />
                        ))}
                    </div>
                    <span className="text-xs font-bold uppercase tracking-widest text-[var(--text-muted)]">Joined by 100+ Brands</span>
                </div>
            </div>

            {/* Turnaround Card */}
            <div className="md:col-span-4 bento-card bg-black text-white border-none flex flex-col justify-center items-center text-center">
                <Clock className="w-16 h-16 text-brand mb-6 animate-pulse" />
                <h3 className="text-4xl font-black italic uppercase mb-2">24H</h3>
                <p className="text-sm font-bold tracking-[0.2em] opacity-40 uppercase">Turnaround Time</p>
            </div>

            {/* Creative Vision Card */}
            <div className="md:col-span-4 bento-card flex flex-col justify-between">
                <h3 className="text-2xl font-black italic uppercase mb-6 leading-tight">Creative <br /> Vision</h3>
                <p className="text-sm text-[var(--text-muted)] leading-relaxed">
                    Every pixel is placed with purpose. We don't just design; we build identities that convert.
                </p>
            </div>

            {/* Image Showcase Card */}
            <div className="md:col-span-8 bento-card p-0 overflow-hidden relative group">
                <img 
                    src="https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&q=80" 
                    alt="Abstract Design"
                    className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-1000"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex items-end p-10">
                    <span className="text-white text-xs font-bold uppercase tracking-[0.4em]">Design Excellence</span>
                </div>
            </div>
        </div>
      </div>
    </section>
    );
};
