"use client";

import React from "react";
import { motion } from "framer-motion";
import { BeforeAfterSlider } from "./BeforeAfterSlider";
import { ScrollReveal } from "@/components/ScrollReveal";

interface BeforeAfterCardProps {
    title: string;
    description: string;
    before: string;
    after: string;
    span: string; // Tailwind grid span classes
    index: number;
}

/**
 * BeforeAfterCard
 * A premium portfolio card specifically designed for comparison photography/design.
 * Features:
 * - Interactive Before/After Slider
 * - Clean editorial typography
 * - Responsive sizing (Bento-style)
 * - Professional ScrollReveal reveal animations
 */
export const BeforeAfterCard: React.FC<BeforeAfterCardProps> = ({ 
    title, 
    description, 
    before, 
    after, 
    span, 
    index 
}) => {
    return (
        <ScrollReveal 
            direction={index % 2 === 0 ? "left" : "right"}
            distance={50}
            delay={index * 0.1}
            className={`${span} flex flex-col group h-full`}
        >
            <div className="relative flex-1 flex flex-col gap-6 bg-transparent md:bg-zinc-950 p-0 md:p-8 rounded-[3rem] border border-transparent md:border-white/5 transition-all duration-700 hover:border-orange-500/20 hover:shadow-[0_40px_120px_rgba(234,88,12,0.1)]">
                
                {/* Image Container (Flush but slightly rounded inside) */}
                <div className="relative aspect-video rounded-[2.5rem] overflow-hidden shadow-2xl bg-black border border-white/5 group-hover:border-orange-500/10 transition-colors duration-500 flex-shrink-0">
                    <BeforeAfterSlider beforeImage={before} afterImage={after} />
                </div>

                {/* Text Content Area */}
                <div className="px-2 pb-2">
                    <div className="flex justify-between items-end gap-4">
                        <div className="flex-1">
                            <motion.h3 
                                className="text-3xl lg:text-4xl font-black uppercase tracking-tighter text-white leading-none mb-4 italic"
                                initial={{ opacity: 0.8 }}
                                whileInView={{ opacity: 1 }}
                            >
                                {title}
                            </motion.h3>
                            <p className="text-zinc-500 text-sm md:text-lg font-medium leading-relaxed line-clamp-2 italic">
                                {description}
                            </p>
                        </div>
                        
                        {/* Circular Action Icon */}
                        <div className="w-12 h-12 md:w-14 md:h-14 rounded-full border border-white/10 flex items-center justify-center group-hover:bg-orange-500 group-hover:border-orange-500 transition-all duration-500 group-hover:rotate-[360deg]">
                            <svg className="w-5 h-5 md:w-6 md:h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                            </svg>
                        </div>
                    </div>
                </div>
                
                {/* Modern subtle line separator that grows on hover */}
                <motion.div 
                    className="absolute bottom-12 left-12 right-12 h-px bg-gradient-to-r from-transparent via-orange-500/0 to-transparent"
                    whileHover={{ scaleX: 1, opacity: 0.2, backgroundColor: "rgb(249 115 22)" }}
                />
            </div>
        </ScrollReveal>
    );
};
