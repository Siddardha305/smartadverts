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
            className="relative flex h-screen w-full items-center justify-center bg-black overflow-hidden liquid-mesh"
        >
            {/* Cybernetic Background Elements */}
            <div className="absolute inset-0 z-0">
                <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-orange-600/10 rounded-full blur-[120px] animate-pulse" />
                <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-orange-500/5 rounded-full blur-[150px] animate-pulse" style={{ animationDelay: "3s" }} />
            </div>

            <motion.div
                style={{ y: y1, opacity: opacityHero, scale }}
                className="absolute inset-0 flex flex-col items-center justify-center z-10 p-4 mt-16"
            >
                {/* Floating Modern Badge */}
                <motion.div 
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="mb-10 px-8 py-3 bg-white/5 border border-white/10 rounded-full text-[10px] uppercase tracking-[0.4em] font-black italic animate-float-slow"
                >
                    Premium Creative Engine
                </motion.div>

                {/* Main Headline - Ultra Wide & Glowing */}
                <div className="overflow-visible flex flex-col items-center">
                    <motion.h1
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
                        className="text-center text-7xl md:text-9xl lg:text-[13rem] font-black tracking-[-0.05em] leading-[0.8] text-white uppercase italic max-w-7xl mb-12 drop-shadow-[0_0_50px_rgba(255,255,255,0.1)]"
                    >
                         <span className="block mb-4">
                            {settings.heroHeadline.split(' ').slice(0, 3).join(' ')} 
                        </span>
                        <span className="block text-orange-500 glow-text">
                            Studio
                        </span>
                    </motion.h1>
                </div>

                {/* Sub Headline - Minimalist Silver */}
                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 0.6 }}
                    transition={{ duration: 1, delay: 0.6 }}
                    className="max-w-2xl text-center text-white text-sm md:text-lg font-light tracking-widest leading-relaxed px-6 uppercase"
                >
                    {settings.heroSubheadline}
                </motion.p>
                
                {/* CTA Container - Glass Neon CTAs */}
                <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, delay: 0.8 }}
                    className="mt-20 flex flex-col sm:flex-row gap-8 items-center justify-center w-full px-6"
                >
                    <Link href="/services" className="group relative overflow-hidden flex items-center gap-6 px-14 py-7 bg-orange-600 text-white rounded-[2rem] font-black uppercase tracking-widest text-[11px] transition-all hover:scale-105 active:scale-95 italic shadow-[0_0_60px_rgba(234,88,12,0.4)]">
                        <span>Get Started</span>
                        <Zap className="w-4 h-4 fill-white" />
                    </Link>
                    <Link href="/portfolio" className="group flex items-center gap-6 px-14 py-7 glass-neon text-white rounded-[2rem] font-black uppercase tracking-widest text-[11px] transition-all hover:bg-white/10 hover:scale-105 active:scale-95 italic">
                        <span>The Work</span>
                    </Link>
                </motion.div>
            </motion.div>
        </section>
    );
};
