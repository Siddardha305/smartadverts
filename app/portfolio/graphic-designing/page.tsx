"use client";

import React, { useEffect } from "react";
import { projects } from "@/components/Works/worksData";
import { motion, useScroll, useTransform } from "framer-motion";
import { Navbar } from "@/components/Navbar/Navbar";
import { Contact } from "@/components/Contact/Contact";
import Link from "next/link";
import Lenis from "lenis";

import { BeforeAfterSlider } from "@/components/Works/BeforeAfterSlider";

export default function GraphicDesigningPage() {
    // Find the current project
    const project = projects.find((p) => p.slug === "graphic-designing");

    const { scrollYProgress } = useScroll();
    const yHero = useTransform(scrollYProgress, [0, 1], [0, 300]);

    useEffect(() => {
        const lenis = new Lenis({
            duration: 1.2,
            easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
        });

        function raf(time: number) {
            lenis.raf(time);
            requestAnimationFrame(raf);
        }
        requestAnimationFrame(raf);

        return () => {
            lenis.destroy();
        };
    }, []);

    if (!project) return null;

    return (
        <main className="bg-zinc-950 text-white min-h-screen overflow-hidden">
            <Navbar />

            {/* Hero Section */}
            <section className="relative h-[80vh] w-full flex items-end justify-center overflow-hidden">
                <motion.div style={{ y: yHero }} className="absolute inset-0 z-0 opacity-50">
                    <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-full object-cover"
                    />
                </motion.div>

                {/* Gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/60 to-transparent z-10" />

                <div className="relative z-20 max-w-7xl mx-auto w-full px-4 md:px-16 pb-24">
                    <motion.div
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="flex flex-col md:flex-row md:items-end justify-between gap-8"
                    >
                        <div>
                            <Link href="/#works" className="inline-block text-orange-500 mb-6 uppercase tracking-widest text-sm font-bold hover:text-white transition-colors">
                                &larr; Back to Works
                            </Link>
                            <h1 className="text-5xl md:text-8xl font-black uppercase tracking-tighter leading-none text-white drop-shadow-xl">
                                {project.title}
                            </h1>
                        </div>
                        <div className="flex gap-12 font-mono text-zinc-400 pb-2">
                            <div>
                                <p className="text-xs uppercase tracking-widest text-zinc-500 mb-1">Client</p>
                                <p className="text-white">{project.client}</p>
                            </div>
                            <div>
                                <p className="text-xs uppercase tracking-widest text-zinc-500 mb-1">Year</p>
                                <p className="text-orange-500">{project.year}</p>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Content Section */}
            <section className="max-w-7xl mx-auto px-4 md:px-16 py-32 z-20 relative bg-zinc-950">

                {/* Before/After Thumbnails section */}
                {(project as any).beforeAfterGallery && (
                    <div className="mt-8">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16">
                            {(project as any).beforeAfterGallery.map((item: any, idx: number) => (
                                <motion.div
                                    key={`ba-${item.before}`}
                                    initial={{ opacity: 0, y: 30 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true, margin: "-100px" }}
                                    transition={{ duration: 0.6, delay: idx * 0.2 }}
                                    className="w-full"
                                >
                                    <BeforeAfterSlider beforeImage={item.before} afterImage={item.after} />
                                </motion.div>
                            ))}
                        </div>
                    </div>
                )}


            </section>

            <Contact />
        </main>
    );
}
