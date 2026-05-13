"use client";

import React from "react";
import { motion } from "framer-motion";
import { Check, Zap, Sparkles, Rocket, Crown } from "lucide-react";
import Link from "next/link";

const plans = [
  {
    name: "Design Basic",
    price: "₹8,000",
    description: "Perfect for small startups needing regular high-quality designs.",
    icon: <Zap className="w-10 h-10 text-orange-500" />,
    features: [
      "1 design at a time",
      "Unlimited revisions",
      "24-48 hour delivery",
      "Source files included",
      "Stock photos included",
    ],
    buttonText: "Start Basic",
    popular: false,
    color: "from-zinc-800 to-zinc-900",
  },
  {
    name: "Design Pro",
    price: "₹15,000",
    description: "The most popular choice for growing businesses and creators.",
    icon: <Sparkles className="w-10 h-10 text-rose-500" />,
    features: [
      "2 designs at a time",
      "Priority support",
      "Custom illustrations",
      "Social media kit",
      "Everything in Basic",
    ],
    buttonText: "Join the Pro",
    popular: true,
    color: "from-orange-600/20 to-rose-600/20",
  },
  {
    name: "Full Studio",
    price: "₹25,000",
    description: "Your complete design and video editing team in one subscription.",
    icon: <Crown className="w-10 h-10 text-amber-500" />,
    features: [
      "Unlimited requests",
      "Video editing included",
      "Motion graphics",
      "Dedicated art director",
      "Everything in Pro",
    ],
    buttonText: "Scale to Studio",
    popular: false,
    color: "from-zinc-800 to-zinc-900",
  },
];

export const Pricing = () => {
  return (
    <section id="pricing" className="py-32 bg-black relative noise-bg overflow-hidden">
      {/* Background Mesh Glows */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full opacity-30 pointer-events-none">
          <div className="absolute top-[10%] left-[20%] w-[400px] h-[400px] bg-orange-600/20 rounded-full blur-[120px]" />
          <div className="absolute bottom-[10%] right-[20%] w-[400px] h-[400px] bg-rose-600/20 rounded-full blur-[120px]" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-24">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            className="inline-block px-4 py-1 rounded-full border border-orange-500/20 bg-orange-500/5 text-orange-500 text-[10px] font-black uppercase tracking-[0.2em] mb-6"
          >
            Pricing Plans
          </motion.div>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-8xl font-black uppercase italic leading-none mb-6"
          >
            Membership <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 via-rose-500 to-orange-400 text-glow">Levels</span>
          </motion.h2>
          <p className="text-zinc-500 max-w-xl mx-auto text-lg font-medium italic">Choose a plan that fits your business stage. <br className="hidden md:block" /> Pause or cancel anytime.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 items-start">
          {plans.map((plan, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
              viewport={{ once: true }}
              className={`relative group h-full flex flex-col p-12 rounded-[3.5rem] glass-liquid hover:bg-white/[0.05] transition-all duration-1000 ${
                plan.popular ? "md:scale-105 border-white/20" : "scale-100 opacity-60 hover:opacity-100"
              }`}
            >
                <div className="flex flex-col gap-6 mb-12">
                    <span className="text-[10px] uppercase tracking-[0.4em] font-light text-white/40">{plan.name}</span>
                    <div className="flex items-baseline gap-2">
                        <span className="text-5xl font-extralight tracking-tighter">{plan.price}</span>
                        <span className="text-[10px] uppercase tracking-[0.2em] opacity-30">/mo</span>
                    </div>
                </div>

                <div className="space-y-6 mb-12 flex-1">
                    {plan.features.map((feature, i) => (
                        <div key={i} className="flex items-center gap-4 opacity-40 group-hover:opacity-80 transition-opacity">
                            <div className="w-1 h-1 rounded-full bg-white" />
                            <span className="text-xs font-light tracking-wide">{feature}</span>
                        </div>
                    ))}
                </div>

                <Link 
                    href="/contact" 
                    className="group/btn flex items-center justify-between w-full py-6 border-t border-white/5 text-[10px] uppercase tracking-[0.4em] font-light transition-all hover:tracking-[0.5em]"
                >
                    <span>{plan.buttonText}</span>
                    <div className="w-8 h-px bg-white/20 group-hover/btn:w-12 group-hover/btn:bg-white transition-all duration-700" />
                </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const ArrowRight = ({ className }: { className?: string }) => (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M14 5l7 7m0 0l-7 7m7-7H3" />
    </svg>
);
