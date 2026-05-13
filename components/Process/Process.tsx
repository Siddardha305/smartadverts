"use client";

import React from "react";
import { motion } from "framer-motion";
import { CheckCircle2, Zap, Rocket, Palette } from "lucide-react";

const steps = [
  {
    title: "Subscribe & Submit",
    description: "Choose a plan and submit as many design requests as you want.",
    icon: <Zap className="w-8 h-8 text-orange-500" />,
  },
  {
    title: "We Design",
    description: "Our world-class designers start working on your request immediately.",
    icon: <Palette className="w-8 h-8 text-rose-500" />,
  },
  {
    title: "Revise & Perfect",
    description: "Get your designs back in 24-48 hours. Not happy? We revise until it's perfect.",
    icon: <CheckCircle2 className="w-8 h-8 text-emerald-500" />,
  },
  {
    title: "Scale Your Brand",
    description: "Download your source files and watch your business grow.",
    icon: <Rocket className="w-8 h-8 text-blue-500" />,
  },
];

export const Process = () => {
  return (
    <section id="process" className="relative py-24 bg-black overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="text-center mb-20">
          <motion.span 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-orange-500 font-bold tracking-widest uppercase text-sm"
          >
            How it works
          </motion.span>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-6xl font-black mt-4 uppercase italic"
          >
            Our Simple <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-rose-500">Workflow</span>
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              className="relative p-8 rounded-[2.5rem] bg-zinc-900/30 border border-white/5 hover:border-orange-500/20 group transition-all"
            >
              <div className="absolute top-4 right-8 text-8xl font-black text-white/5 group-hover:text-orange-500/10 transition-colors">
                0{index + 1}
              </div>
              <div className="mb-6 p-4 bg-black/50 rounded-2xl w-fit border border-white/5 group-hover:scale-110 transition-transform">
                {step.icon}
              </div>
              <h3 className="text-xl font-bold mb-4 uppercase tracking-tight">{step.title}</h3>
              <p className="text-zinc-400 leading-relaxed text-sm">{step.description}</p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Decorative Blur */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-orange-600/5 rounded-full blur-[120px] pointer-events-none" />
    </section>
  );
};
