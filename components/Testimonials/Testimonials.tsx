"use client";

import React from "react";
import { motion } from "framer-motion";

const testimonials = [
    {
        id: 1,
        quote: "Before this service, I was spending hours trying to make designs myself and they never looked professional. Now I get beautiful posts every week without any stress.",
        author: "Priya M.",
        role: "Restaurant Owner, Hyderabad"
    },
    {
        id: 2,
        quote: "I was paying a freelancer who always missed deadlines. This service delivers on time, every time. My salon's Instagram has never looked better.",
        author: "Ravi K.",
        role: "Salon Owner, Secunderabad"
    },
    {
        id: 3,
        quote: "The designs perfectly match my brand. It feels like I have my own designer, but at a fraction of the cost. Highly recommend for any small business.",
        author: "Anita R.",
        role: "Clothing Boutique Owner"
    }
];

export const Testimonials = () => {
    return (
        <section className="bg-zinc-950 py-32 px-4 md:px-16 text-white overflow-hidden relative border-none">
            <div className="max-w-7xl mx-auto relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="text-center mb-20"
                >
                    <h2 className="text-4xl md:text-5xl lg:text-7xl font-black uppercase tracking-tighter">
                        What Our<br />
                        <span className="text-orange-500">Clients Say</span>
                    </h2>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {testimonials.map((item, index) => (
                        <motion.div
                            key={item.id}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-100px" }}
                            transition={{ duration: 0.6, delay: 0.2 * index }}
                            className="bg-black border border-zinc-900 rounded-3xl p-8 flex flex-col justify-between hover:border-orange-500/50 transition-colors shadow-2xl"
                        >
                            <svg className="w-10 h-10 text-orange-500/20 mb-6" fill="currentColor" viewBox="0 0 32 32" aria-hidden="true">
                                <path d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.8 3.456-8.256 9.12-8.256 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z"></path>
                            </svg>
                            <p className="text-zinc-300 font-light text-lg italic mb-8 flex-grow">
                                "{item.quote}"
                            </p>
                            <div>
                                <h4 className="font-bold text-white uppercase tracking-widest text-sm">{item.author}</h4>
                                <p className="text-zinc-500 text-sm mt-1">{item.role}</p>
                            </div>
                        </motion.div>
                    ))}
                </div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-50px" }}
                    transition={{ duration: 0.8, delay: 0.8 }}
                    className="mt-20 pt-10 border-t border-zinc-900 flex flex-wrap justify-center gap-6 md:gap-12"
                >
                    <div className="flex items-center gap-3">
                        <div className="w-8 h-8 rounded-full bg-orange-500/10 flex items-center justify-center">
                            <svg className="w-4 h-4 text-orange-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                        </div>
                        <span className="text-zinc-400 font-bold tracking-wide text-xs md:text-sm uppercase">50+ Designs Delivered</span>
                    </div>
                    <div className="flex items-center gap-3">
                        <div className="w-8 h-8 rounded-full bg-orange-500/10 flex items-center justify-center">
                            <svg className="w-4 h-4 text-orange-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                        </div>
                        <span className="text-zinc-400 font-bold tracking-wide text-xs md:text-sm uppercase">24-Hour Turnaround</span>
                    </div>
                    <div className="flex items-center gap-3">
                        <div className="w-8 h-8 rounded-full bg-orange-500/10 flex items-center justify-center">
                            <svg className="w-4 h-4 text-orange-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"></path></svg>
                        </div>
                        <span className="text-zinc-400 font-bold tracking-wide text-xs md:text-sm uppercase">100% Satisfaction Guarantee</span>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};
