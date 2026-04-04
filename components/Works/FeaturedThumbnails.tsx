"use client";

import React, { useRef, useState, useEffect } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { BeforeAfterSlider } from "@/components/Works/BeforeAfterSlider";
import { BeforeAfterCard } from "@/components/Works/BeforeAfterCard";
import { db } from "@/lib/firebase";
import { collection, query, orderBy, limit, onSnapshot } from "firebase/firestore";
import Link from "next/link";

interface PortfolioItem {
    id: string;
    title: string;
    description: string;
    before: string;
    after: string;
}

/**
 * FeaturedThumbnails Component (Home Page Version)
 * Shows a selection of Before/After comparisons from the dynamic portfolio.
 */
export const FeaturedThumbnails = () => {
    const [displayWorks, setDisplayWorks] = useState<PortfolioItem[]>([]);
    const ref = useRef(null);
    
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start end", "end start"],
    });

    const y1 = useTransform(scrollYProgress, [0, 1], [0, 200]);
    const y2 = useTransform(scrollYProgress, [0, 1], [0, -200]);

    useEffect(() => {
        const q = query(
            collection(db, "portfolio"), 
            orderBy("timestamp", "desc"), 
            limit(4)
        );
        
        const unsubscribe = onSnapshot(q, (snapshot) => {
            const fetched = snapshot.docs.map(doc => ({
                id: doc.id,
                ...doc.data()
            } as PortfolioItem));
            setDisplayWorks(fetched);
        });

        return () => unsubscribe();
    }, []);

    return (
        <section ref={ref} className="relative py-32 px-4 md:px-16 overflow-hidden bg-black text-white border-none">
            <div className="relative z-10 max-w-7xl mx-auto">
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

                <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                    {displayWorks.map((item, idx) => (
                        <BeforeAfterCard 
                            key={item.id}
                            index={idx}
                            title={item.title}
                            description={item.description}
                            before={item.before}
                            after={item.after}
                            span="col-span-1"
                        />
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
