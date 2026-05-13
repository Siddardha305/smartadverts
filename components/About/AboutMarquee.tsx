"use client";

import React from "react";
import { motion, MotionValue } from "framer-motion";

interface AboutMarqueeProps {
    x1: MotionValue<string>;
    x2: MotionValue<string>;
}

export const AboutMarquee: React.FC<AboutMarqueeProps> = ({ x1, x2 }) => {
    return (
        <div className="mt-32 border-t border-white/5 pt-16 opacity-20">
            <div className="flex flex-col gap-8 overflow-hidden">
                <motion.div style={{ x: x1 }} className="flex whitespace-nowrap gap-12 text-5xl md:text-8xl font-black italic uppercase tracking-tighter">
                    <span>Branding</span>
                    <span className="text-orange-500">Video Editing</span>
                    <span>Thumbnails</span>
                    <span className="text-orange-500">Social Media</span>
                    <span>Strategy</span>
                    <span className="text-orange-500">Growth</span>
                </motion.div>
                <motion.div style={{ x: x2 }} className="flex whitespace-nowrap gap-12 text-5xl md:text-8xl font-black italic uppercase tracking-tighter">
                    <span className="text-orange-500">Creativity</span>
                    <span>Performance</span>
                    <span className="text-orange-500">Logic</span>
                    <span>Design</span>
                    <span className="text-orange-500">Aesthetics</span>
                    <span>Result</span>
                </motion.div>
            </div>
        </div>
    );
};
