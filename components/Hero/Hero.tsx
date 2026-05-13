"use client";

import React, { useRef, useState, useEffect } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Link from "next/link";
import { HeroBadge } from "./HeroBadge";
import { GridBackground } from "@/components/GridBackground";
import { Zap } from "lucide-react";


export const Hero = () => {
    const ref = useRef(null);
    const [settings, setSettings] = useState({
        heroHeadline: "Professional Designs for Your Business",
        heroSubheadline: "We create everything from social media posts and banners to highly-converting thumbnails — so you can focus on building your business.",
        pricingStartingFrom: "₹8k/mo"
    });

    useEffect(() => {
        const fetchSettings = async () => {
            try {
                const response = await fetch("/api/settings");
                if (response.ok) {
                    const data = await response.json();
                    setSettings(data);
                }
            } catch (error) {
                console.error("Error fetching hero settings:", error);
            }
        };

        fetchSettings();
    }, []);

    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start start", "end start"],
    });

    const y1 = useTransform(scrollYProgress, [0, 1], [0, 500]);
    const y2 = useTransform(scrollYProgress, [0, 1], [0, -500]);
    const scale = useTransform(scrollYProgress, [0, 0.5], [1, 0.95]);
    const opacityHero = useTransform(scrollYProgress, [0, 0.3], [1, 0]);

    return (
        <section
            ref={ref}
            id="home"
            className="relative min-h-screen w-full flex flex-col items-center justify-center pt-32 pb-20 px-6 overflow-hidden"
        >
            {/* Background Architecture */}
            <div className="absolute inset-0 z-0 pointer-events-none opacity-40">
                <div className="absolute top-[10%] left-[5%] w-[30%] h-[30%] bg-brand/5 rounded-full blur-[100px]" />
                <div className="absolute bottom-[10%] right-[5%] w-[40%] h-[40%] bg-blue-500/5 rounded-full blur-[120px]" />
                <GridBackground />
            </div>

            <motion.div
                style={{ y: y1, opacity: opacityHero, scale }}
                className="relative z-10 w-full max-w-7xl mx-auto flex flex-col items-center"
            >
                {/* 2026 Style Badge */}
                <motion.div 
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="mb-10 px-6 py-2 bg-brand/10 border border-brand/20 rounded-full text-brand text-[10px] uppercase tracking-[0.3em] font-black italic shadow-sm"
                >
                    Design Engineered for 2026
                </motion.div>

                {/* Main Headline - The 2026 Statement */}
                <div className="overflow-visible flex flex-col items-center text-center">
                    <motion.h1
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
                        className="heading-huge mb-12 text-balance"
                    >
                         <span className="block opacity-90">
                            {settings.heroHeadline.split(' ').slice(0, 3).join(' ')} 
                        </span>
                        <span className="block text-brand">
                            Studio
                        </span>
                    </motion.h1>
                </div>

                {/* Sub Headline - Clean Modern Weight */}
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, delay: 0.3 }}
                    className="max-w-2xl text-center text-[var(--text-muted)] text-lg md:text-2xl font-medium leading-relaxed mb-16 text-balance"
                >
                    {settings.heroSubheadline}
                </motion.p>
                
                {/* 2026 CTA Actions */}
                <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, delay: 0.5 }}
                    className="flex flex-col sm:flex-row gap-6 items-center justify-center w-full"
                >
                    <Link href="/services" className="btn-2026 btn-2026-primary w-full sm:w-auto px-16 group italic">
                        <span>Get Started</span>
                        <Zap className="w-5 h-5 fill-white group-hover:scale-125 transition-transform" />
                    </Link>
                    <Link href="/portfolio" className="btn-2026 btn-2026-secondary w-full sm:w-auto px-16 italic">
                        <span>The Portfolio</span>
                    </Link>
                </motion.div>

                {/* Social Proof Bar - 2026 Style */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1, duration: 1.5 }}
                    className="mt-32 pt-12 border-t border-[var(--border)] w-full flex flex-col md:flex-row items-center justify-between gap-8 opacity-40 grayscale hover:grayscale-0 transition-all duration-700"
                >
                    <span className="text-[10px] uppercase tracking-[0.4em] font-black italic">Trusted by Visionary Brands</span>
                    <div className="flex gap-12 items-center overflow-hidden">
                        <span className="text-2xl font-black italic tracking-tighter">NIKE</span>
                        <span className="text-2xl font-black italic tracking-tighter">APPLE</span>
                        <span className="text-2xl font-black italic tracking-tighter">TESLA</span>
                        <span className="text-2xl font-black italic tracking-tighter">ADIDAS</span>
                    </div>
                </motion.div>
            </motion.div>
        </section>
    );
};
