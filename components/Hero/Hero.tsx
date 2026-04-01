import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { HeroBadge } from "./HeroBadge";
import { GridBackground } from "@/components/GridBackground";

export const Hero = () => {
    const ref = useRef(null);
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
            className="relative flex h-screen w-full items-center justify-center bg-black overflow-hidden"
        >
            {/* Abstract Background Orbs with deeper parallax */}
            <motion.div
                style={{ y: y2 }}
                className="absolute top-[-20%] left-[-15%] h-[600px] w-[600px] rounded-full bg-orange-600/10 blur-[150px] pointer-events-none"
            />
            <motion.div
                style={{ y: y1 }}
                className="absolute bottom-[-20%] right-[-15%] h-[700px] w-[700px] rounded-full bg-rose-600/10 blur-[150px] pointer-events-none"
            />

            {/* Premium Dotted Background Grid */}
            <GridBackground />

            <motion.div
                style={{ y: y1, opacity: opacityHero, scale }}
                className="absolute inset-0 flex flex-col items-center justify-center z-10 p-4 mt-16 md:mt-24"
            >
                {/* Reveal Animations */}
                <HeroBadge />

                {/* Main Headline */}
                <div className="overflow-hidden">
                    <motion.h1
                        initial={{ opacity: 0, y: 100 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1.2, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
                        className="text-center text-4xl md:text-6xl lg:text-7xl font-black tracking-tighter leading-[1.05] max-w-5xl"
                    >
                        <span className="text-white drop-shadow-sm">Professional Designs <br className="hidden md:block"/> for Your Business</span>
                        <span className="block text-3xl sm:text-5xl md:text-7xl lg:text-8xl text-transparent bg-clip-text bg-gradient-to-r from-orange-400 via-rose-400 to-orange-500 drop-shadow-xl">
                            Delivered in 24 Hours
                        </span>
                    </motion.h1>
                </div>

                {/* Sub Headline */}
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, delay: 0.6, ease: [0.22, 1, 0.36, 1] }}
                    className="mt-8 max-w-2xl text-center text-zinc-400 text-lg md:text-xl font-light leading-relaxed"
                >
                    We create everything from social media posts and banners to highly-converting thumbnails — so you can focus on building your business.
                </motion.p>
                
                {/* CTA Container */}
                <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, delay: 0.8, ease: [0.22, 1, 0.36, 1] }}
                    className="mt-12 flex flex-col sm:flex-row gap-5 items-center justify-center w-full"
                >
                    <a href="#services" className="group relative overflow-hidden flex items-center gap-3 px-10 py-5 bg-orange-500 text-white rounded-full font-bold uppercase tracking-widest text-xs sm:text-sm transition-all shadow-[0_0_30px_rgba(234,88,12,0.3)] hover:shadow-[0_0_50px_rgba(234,88,12,0.5)] hover:scale-105 active:scale-95">
                        <span className="relative z-10">Start for ₹8k/mo</span>
                        <svg className="w-5 h-5 relative z-10 transform transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                        </svg>
                    </a>
                    <a href="#works" className="group flex items-center justify-center gap-3 px-10 py-5 bg-white/5 hover:bg-white/10 text-white border border-white/10 hover:border-white/20 rounded-full font-bold uppercase tracking-widest text-xs sm:text-sm transition-all backdrop-blur-md hover:scale-105 active:scale-95">
                        <span>See Portfolio</span>
                    </a>
                </motion.div>
            </motion.div>
        </section>
    );
};
