import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Link from "next/link";

export const WorkCard = ({ project, index }: { project: any; index: number }) => {
    const ref = useRef(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start end", "end start"],
    });

    const y = useTransform(scrollYProgress, [0, 1], [100, -100]);
    const scale = useTransform(scrollYProgress, [0, 0.5, 1], [0.9, 1, 0.95]);

    // Staggered margin for visual interest
    const marginTop = index % 2 === 1 ? "md:mt-32" : "mt-0";

    return (
        <div ref={ref} className={`relative group w-full max-w-[90%] md:max-w-md mx-auto hover:cursor-pointer ${marginTop}`}>
            <Link href={`/works/${project.slug}`} className="block w-full">
                <motion.div
                    style={{ scale }}
                    className="overflow-hidden rounded-2xl bg-zinc-900 aspect-square md:aspect-[4/5]"
                >
                    <motion.img
                        style={{ y }}
                        src={project.image}
                        alt={project.title}
                        className="h-[120%] w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105 group-hover:blur-sm"
                    />
                    <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center">
                        <span className="px-6 py-3 border border-white rounded-full text-white uppercase tracking-widest text-sm translate-y-4 group-hover:translate-y-0 transition-transform duration-500 ease-out z-10">
                            View Project
                        </span>
                    </div>
                </motion.div>
                <div className="mt-8 flex justify-between items-start border-t border-zinc-800 pt-6">
                    <div>
                        <h3 className="text-2xl md:text-3xl font-bold group-hover:text-orange-500 transition-colors uppercase">{project.title}</h3>
                        <p className="text-orange-500 mt-2 font-medium tracking-wide">{project.client}</p>
                    </div>
                    <span className="text-zinc-500 font-mono">{project.year}</span>
                </div>
            </Link>
        </div>
    );
};
