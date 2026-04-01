"use client";

import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { BeforeAfterSlider } from "@/components/Works/BeforeAfterSlider";
import { beforeAfterWorks } from "@/components/Works/worksData";
import Link from "next/link";

/**
 * FeaturedThumbnails Component (Home Page Version)
 * Shows a selection of Before/After comparisons from the dynamic portfolio.
 */
export const FeaturedThumbnails = () => {
    const ref = useRef(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start end", "end start"],
    });

    const y1 = useTransform(scrollYProgress, [0, 1], [0, 200]);
    const y2 = useTransform(scrollYProgress, [0, 1], [0, -200]);

    // Use the first few items from the main dynamic beforeAfterWorks array
    const displayWorks = beforeAfterWorks.slice(0, 4);

    return (
        <section ref={ref} className="relative py-32 px-4 md:px-16 overflow-hidden bg-black text-white border-none">
            <div className="relative z-10 max-w-1100px mx-auto">
                <div className="flex flex-col md:flex-row items-start md:items-end justify-between mb-16 gap-6">
                    <div>
                        <motion.h2
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                            className="text-4xl md:text-7xl font-black uppercase tracking-tighter text-white"
                        >
                            Featured<br />
                            <span className="text-orange-500">Works</span>
                        </motion.h2>
                        <motion.p
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                            className="text-zinc-400 mt-4 max-w-sm"
                        >
                            Select highlights from our visual branding experiments and strategic thumbnail engineering.
                        </motion.p>
                    </div>

                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.4 }}
                    >
                        <Link href="/portfolio" className="inline-block px-8 py-4 border border-zinc-700 hover:border-orange-500 hover:bg-orange-500/10 rounded-full text-white uppercase tracking-widest text-sm font-bold transition-all">
                            View All Works
                        </Link>
                    </motion.div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
                    {displayWorks.map((item, idx) => (
                        <motion.div
                            key={item.id}
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-100px" }}
                            transition={{ duration: 0.6, delay: idx * 0.1 }}
                            className="w-full aspect-video rounded-3xl overflow-hidden border border-white/5"
                        >
                            <BeforeAfterSlider beforeImage={item.before} afterImage={item.after} />
                        </motion.div>
                    ))}
                </div>
            </div>

            {/* Abstract Background Elements */}
            <motion.div
                style={{ y: y2 }}
                className="absolute -top-[20%] -right-[10%] h-[600px] w-[600px] rounded-full bg-orange-600/10 blur-[120px] pointer-events-none"
            />
            <motion.div
                style={{ y: y1 }}
                className="absolute -bottom-[20%] -left-[10%] h-[500px] w-[500px] rounded-full bg-rose-600/10 blur-[120px] pointer-events-none"
            />
        </section>
    );
};
