import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const services = [
    {
        id: "01",
        slug: "video-editing",
        title: "Video Editing",
        description:
            "Transforming raw footage into compelling visual narratives. I craft dynamic, engaging video content tailored for social media, YouTube, and brand campaigns to captivate your audience.",
    },
    {
        id: "02",
        slug: "graphic-designing",
        title: "Graphic Designing",
        description:
            "Creating bold visual identities. I specialize in high-converting YouTube Thumbnail making, as well as logos, brand kits, and stunning marketing materials. Every asset speaks your brand's unique language.",
    },
];

export const Services = () => {
    const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

    return (
        <section id="services" className="relative min-h-screen bg-black py-32 px-4 md:px-16 text-white border-none">
            <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-16 lg:gap-12">
                {/* Left Side: Sticky Header */}
                <div className="w-full lg:w-1/3">
                    <div className="lg:sticky lg:top-32">
                        <motion.h2
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                            className="text-4xl md:text-5xl lg:text-7xl font-black uppercase tracking-tighter"
                        >
                            My<br />
                            <span className="text-orange-500">Expertise</span>
                        </motion.h2>
                        <motion.p
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                            className="mt-6 text-zinc-400 text-lg max-w-sm"
                        >
                            Specializing in crafting end-to-end digital solutions that define your brand and captivate your audience.
                        </motion.p>
                    </div>
                </div>

                {/* Right Side: Interactive Service List */}
                <div className="w-full lg:w-2/3 flex flex-col gap-4 relative">
                    {services.map((service, index) => (
                        <motion.div
                            key={service.id}
                            initial={{ opacity: 0, x: 50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true, margin: "-100px" }}
                            transition={{ duration: 0.6, delay: index * 0.1 }}
                            onMouseEnter={() => setHoveredIndex(index)}
                            onMouseLeave={() => setHoveredIndex(null)}
                            onClick={() => setHoveredIndex(hoveredIndex === index ? null : index)}
                            className="group relative border-b border-zinc-800 py-10 md:py-12 cursor-pointer transition-colors hover:border-orange-500/50"
                        >
                            <div className="flex flex-col md:flex-row items-start md:items-center justify-between z-10 relative pointer-events-none">
                                <div className="flex items-center gap-4 md:gap-6">
                                    <span className="text-lg md:text-xl font-mono text-zinc-600 transition-colors group-hover:text-orange-500">
                                        {service.id}
                                    </span>
                                    <h3 className="text-2xl sm:text-3xl md:text-5xl font-bold tracking-tight text-zinc-300 transition-colors group-hover:text-white">
                                        {service.title}
                                    </h3>
                                </div>
                                <div className="mt-4 md:mt-0 h-10 w-10 rounded-full border border-zinc-700 flex items-center justify-center transition-all duration-300 group-hover:bg-orange-500 group-hover:border-orange-500">
                                    <motion.svg
                                        animate={{ rotate: hoveredIndex === index ? 45 : 0 }}
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="16"
                                        height="16"
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        stroke="currentColor"
                                        strokeWidth="2"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        className="text-zinc-400 group-hover:text-black transition-colors"
                                    >
                                        <line x1="5" y1="12" x2="19" y2="12"></line>
                                        <polyline points="12 5 19 12 12 19"></polyline>
                                    </motion.svg>
                                </div>
                            </div>

                            {/* Expanding description on hover */}
                            <AnimatePresence>
                                {hoveredIndex === index && (
                                    <motion.div
                                        initial={{ height: 0, opacity: 0 }}
                                        animate={{ height: "auto", opacity: 1 }}
                                        exit={{ height: 0, opacity: 0 }}
                                        transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                                        className="overflow-hidden relative z-20 pointer-events-auto"
                                    >
                                        <p className="pt-6 text-zinc-400 text-lg max-w-xl pl-12 md:pl-14">
                                            {service.description}
                                        </p>
                                        <div className="pt-6 pl-12 md:pl-14 pb-2">
                                            {/* <Link href={`/works/${service.slug}`} className="inline-block px-6 py-3 border border-orange-500/50 hover:border-orange-500 hover:bg-orange-500/10 rounded-full text-white uppercase tracking-widest text-sm transition-all shadow-lg hover:shadow-orange-500/20">
                                                View Project
                                            </Link> */}
                                        </div>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};
