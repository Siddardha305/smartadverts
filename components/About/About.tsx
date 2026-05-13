"use client";

import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { AboutHeader } from "./AboutHeader";
import { AboutMarquee } from "./AboutMarquee";

export const About = () => {
    const ref = useRef(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start end", "end start"],
    });

    const x1 = useTransform(scrollYProgress, [0, 1], ["-10%", "10%"]);
    const x2 = useTransform(scrollYProgress, [0, 1], ["10%", "-10%"]);
    const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);

    return (
        <section ref={ref} id="about" className="relative bg-black py-24 md:py-32 px-6 overflow-hidden noise-bg">
            {/* Background Glow */}
            <div className="absolute top-1/2 left-0 -translate-y-1/2 w-[500px] h-[500px] bg-orange-600/5 rounded-full blur-[120px] pointer-events-none" />
            
            <div className="max-w-7xl mx-auto relative z-10">
                <AboutHeader />
            </div>

            {/* Subtle Parallax Background Text */}
            <div className="absolute inset-0 flex flex-col justify-center pointer-events-none opacity-[0.03] select-none z-0">
                <motion.h2 style={{ x: x1 }} className="text-[30vw] md:text-[20vw] font-black uppercase italic whitespace-nowrap leading-none">
                    SMARTADVERTS
                </motion.h2>
                <motion.h2 style={{ x: x2 }} className="text-[30vw] md:text-[20vw] font-black uppercase italic whitespace-nowrap leading-none">
                    STUDIO STUDIO
                </motion.h2>
            </div>
        </section>
    );
};
