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
            className="relative flex h-screen w-full items-center justify-center bg-black overflow-hidden noise-bg"
        >
            {/* Next Level Mesh Gradients */}
            <div className="absolute inset-0 z-0">
                <div className="absolute top-[-10%] left-[-10%] w-[60%] h-[60%] bg-orange-600/20 rounded-full blur-[120px] animate-pulse" />
                <div className="absolute bottom-[-10%] right-[-10%] w-[60%] h-[60%] bg-rose-600/10 rounded-full blur-[120px] animate-pulse" style={{ animationDelay: "2s" }} />
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[40%] h-[40%] bg-orange-500/5 rounded-full blur-[150px]" />
            </div>

            {/* Premium Dotted Background Grid */}
            <GridBackground />

            <motion.div
                style={{ y: y1, opacity: opacityHero, scale }}
                className="absolute inset-0 flex flex-col items-center justify-center z-10 p-4 mt-16 md:mt-24"
            >
                <HeroBadge />

                {/* Main Headline */}
                <div className="overflow-visible">
                    <motion.h1
                        initial={{ opacity: 0, y: 100 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1.2, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
                        className="text-center text-5xl md:text-8xl lg:text-9xl font-black tracking-tighter leading-[0.9] max-w-7xl"
                    >
                         <span className="text-white drop-shadow-sm uppercase italic block mb-2">
                            {settings.heroHeadline.split(' ').slice(0, 3).join(' ')} 
                        </span>
                        <span className="block text-transparent bg-clip-text bg-gradient-to-r from-orange-500 via-rose-500 to-orange-400 drop-shadow-2xl uppercase italic text-glow">
                            Creative Studio
                        </span>
                    </motion.h1>
                </div>

                {/* Sub Headline */}
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, delay: 0.6, ease: [0.22, 1, 0.36, 1] }}
                    className="mt-10 max-w-2xl text-center text-zinc-400 text-base md:text-xl font-light leading-relaxed px-6"
                >
                    {settings.heroSubheadline}
                </motion.p>
                
                {/* CTA Container */}
                <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, delay: 0.8, ease: [0.22, 1, 0.36, 1] }}
                    className="mt-12 flex flex-col sm:flex-row gap-6 items-center justify-center w-full px-6"
                >
                    <Link href="/services" className="group relative overflow-hidden flex items-center gap-4 px-12 py-6 bg-orange-600 text-white rounded-full font-black uppercase tracking-widest text-[10px] sm:text-xs transition-all shadow-[0_0_40px_rgba(234,88,12,0.4)] hover:shadow-[0_0_60px_rgba(234,88,12,0.6)] hover:scale-105 active:scale-95 italic">
                        <span className="relative z-10">Get Started — {settings.pricingStartingFrom}</span>
                        <Zap className="w-4 h-4 fill-white relative z-10" />
                    </Link>
                    <Link href="/portfolio" className="group flex items-center justify-center gap-4 px-12 py-6 bg-white/5 hover:bg-white/10 text-white border border-white/10 hover:border-white/20 rounded-full font-black uppercase tracking-widest text-[10px] sm:text-xs transition-all backdrop-blur-xl hover:scale-105 active:scale-95 italic">
                        <span>Our Work</span>
                    </Link>
                </motion.div>
            </motion.div>
        </section>
    );
};
