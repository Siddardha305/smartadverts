"use client";

import React from "react";
import { motion } from "framer-motion";

const steps = [
    {
        num: "1",
        title: "Share Your Requirement",
        desc: "Tell us what you need — a social media post, banner, flyer, or anything else. Share your brand colors, logo, and any reference you have. Takes less than 5 minutes."
    },
    {
        num: "2",
        title: "We Design It",
        desc: "Our professional designers get to work immediately. Your design is ready within 24–48 hours, made specifically for your brand — every single time."
    },
    {
        num: "3",
        title: "Approve & Download",
        desc: "Review your design. Love it? Download it instantly. Want a change? We revise it for free until you're 100% happy. No back-and-forth headaches."
    }
];

export const HowItWorks = () => {
    return (
        <section className="bg-black py-32 px-4 md:px-16 text-white overflow-hidden relative border-none">
            <div className="max-w-7xl mx-auto relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="text-center mb-24"
                >
                    <h2 className="text-4xl md:text-5xl lg:text-7xl font-black uppercase tracking-tighter">
                        How It Works<br />
                        <span className="text-orange-500">Simple as 1, 2, 3</span>
                    </h2>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8 lg:gap-16 relative">
                    {/* Decorative connecting line for desktop */}
                    <div className="hidden md:block absolute top-[40px] left-[10%] w-[80%] h-[1px] bg-zinc-900 z-0"></div>
                    
                    {steps.map((step, index) => (
                        <motion.div
                            key={step.num}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-100px" }}
                            transition={{ duration: 0.6, delay: 0.2 * index }}
                            className="relative z-10 flex flex-col items-center text-center group"
                        >
                            <div className="w-20 h-20 rounded-full bg-zinc-950 border border-zinc-800 flex items-center justify-center text-3xl font-black text-orange-500 mb-8 shadow-xl group-hover:bg-orange-500 group-hover:text-black transition-colors duration-300">
                                {step.num}
                            </div>
                            <h3 className="text-2xl font-bold mb-4">{step.title}</h3>
                            <p className="text-zinc-400 font-light leading-relaxed max-w-sm">
                                {step.desc}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};
