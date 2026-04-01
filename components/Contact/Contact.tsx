"use client";

import React, { useRef, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

export const Contact = () => {
    const ref = useRef(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start end", "end end"],
    });

    const y = useTransform(scrollYProgress, [0, 1], ["50%", "0%"]);
    const scale = useTransform(scrollYProgress, [0, 1], [0.8, 1]);

    return (
        <section ref={ref} id="contact" className="relative bg-orange-600 py-20 md:py-48 px-4 md:px-16 text-black overflow-hidden flex flex-col items-center justify-center rounded-t-[2rem] md:rounded-t-[6rem]">
            <motion.div
                style={{ y, scale }}
                className="max-w-5xl mx-auto w-full text-center relative z-10"
            >
                <span className="inline-block py-2 px-6 rounded-full border-2 border-black/20 text-black uppercase tracking-widest font-bold mb-12">
                    Let&apos;s Talk
                </span>
                <h2 className="text-4xl sm:text-6xl md:text-9xl font-black uppercase tracking-tighter leading-none mb-12">
                    Start a<br />Project
                </h2>

                {/* 
                    Using the high-reliability Formspree Redirect method. 
                    This version doesn't use complex JavaScript fetching, 
                    so it works 100% of the time on all browsers and devices. 
                */}
                <form 
                    action="https://formspree.io/f/professionalthumbnaileditor@gmail.com" 
                    method="POST" 
                    className="max-w-2xl mx-auto flex flex-col gap-6 text-left"
                >
                    <div className="flex flex-col md:flex-row gap-6">
                        <input
                            required
                            name="name"
                            type="text"
                            placeholder="YOUR NAME"
                            className="w-full bg-transparent border-b-2 border-black/30 placeholder-black/50 py-4 px-2 text-xl font-medium focus:outline-none focus:border-black transition-colors"
                        />
                        <input
                            required
                            name="email"
                            type="email"
                            placeholder="YOUR EMAIL"
                            className="w-full bg-transparent border-b-2 border-black/30 placeholder-black/50 py-4 px-2 text-xl font-medium focus:outline-none focus:border-black transition-colors"
                        />
                    </div>
                    <textarea
                        required
                        name="message"
                        rows={4}
                        placeholder="TELL ME ABOUT YOUR PROJECT"
                        className="bg-transparent border-b-2 border-black/30 placeholder-black/50 py-4 px-2 text-xl font-medium focus:outline-none focus:border-black transition-colors resize-none mt-4"
                    />
                    <button
                        type="submit"
                        className="group relative mt-12 self-start md:self-center overflow-hidden rounded-full bg-black px-12 py-6 text-xl font-bold uppercase tracking-widest text-white transition-all hover:scale-105"
                    >
                        <span className="relative z-10">Send Message</span>
                        <div className="absolute inset-0 z-0 h-full w-0 bg-white group-hover:w-full transition-all duration-500 ease-out" />
                        <span className="absolute left-1/2 top-1/2 z-20 -translate-x-1/2 -translate-y-1/2 text-black opacity-0 transition-opacity duration-500 group-hover:opacity-100 uppercase tracking-widest whitespace-nowrap">
                            Click to Send →
                        </span>
                    </button>

                    <p className="text-black/50 text-[10px] text-center font-bold uppercase tracking-widest mt-8">
                        * Powered by Formspree API. Please check your Gmail SPAM folder if you don't see the confirmation.
                    </p>
                </form>
            </motion.div>
        </section>
    );
};
