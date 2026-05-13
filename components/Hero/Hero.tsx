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
                className="absolute inset-0 flex flex-col items-center justify-center z-10 p-4 mt-16"
            >
                {/* Elegant Badge */}
                <motion.div 
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="mb-8 px-6 py-2 border border-white/10 rounded-full text-[10px] uppercase tracking-[0.4em] font-light text-white/60"
                >
                    Aesthetically Liquid Studio
                </motion.div>

                {/* Main Headline - Liquid Elegance */}
                <div className="overflow-visible flex flex-col items-center">
                    <motion.h1
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 2, ease: [0.22, 1, 0.36, 1] }}
                        className="text-center text-6xl md:text-8xl lg:text-[10rem] font-extralight tracking-[-0.04em] leading-[0.8] max-w-7xl mb-8"
                    >
                         <span className="text-white block opacity-90">
                            {settings.heroHeadline.split(' ').slice(0, 3).join(' ')} 
                        </span>
                        <span className="block italic font-light opacity-50 mt-4">
                            Creative Studio
                        </span>
                    </motion.h1>
                </div>

                {/* Sub Headline - Elegant Spacing */}
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1.5, delay: 0.6, ease: [0.22, 1, 0.36, 1] }}
                    className="max-w-xl text-center text-white/40 text-sm md:text-base font-light tracking-[0.05em] leading-relaxed px-6"
                >
                    {settings.heroSubheadline}
                </motion.p>
                
                {/* CTA Container - Minimalist Glass */}
                <motion.div 
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 2, delay: 1 }}
                    className="mt-16 flex flex-col sm:flex-row gap-8 items-center justify-center w-full px-6"
                >
                    <Link href="/services" className="group flex items-center gap-6 text-white text-[11px] uppercase tracking-[0.5em] font-light transition-all hover:text-white hover:tracking-[0.6em] duration-700">
                        <span>Get Started</span>
                        <div className="w-12 h-px bg-white/20 group-hover:w-20 group-hover:bg-white transition-all duration-700" />
                    </Link>
                    <Link href="/portfolio" className="group flex items-center gap-6 text-white/40 text-[11px] uppercase tracking-[0.5em] font-light transition-all hover:text-white duration-700">
                        <span>Our Work</span>
                    </Link>
                </motion.div>
            </motion.div>
        </section>
    );
};
