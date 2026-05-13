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

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-end">
          {plans.map((plan, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
              viewport={{ once: true }}
              className={`relative group p-1 w-full rounded-[3.5rem] overflow-hidden transition-all duration-700 ${
                plan.popular ? "md:scale-105 z-20" : "scale-95 opacity-80 hover:opacity-100 hover:scale-100 z-10"
              }`}
            >
                {/* Animated Gradient Border for Popular Plan */}
                {plan.popular && (
                    <div className="absolute inset-0 bg-gradient-to-r from-orange-500 via-rose-500 to-orange-500 animate-spin-slow opacity-50" />
                )}
                {!plan.popular && (
                    <div className="absolute inset-0 bg-white/10" />
                )}

                <div className={`relative h-full w-full bg-zinc-950 rounded-[3.4rem] p-10 md:p-12 flex flex-col gap-8`}>
                    {plan.popular && (
                        <div className="absolute top-8 right-10 flex items-center gap-2 px-4 py-1.5 bg-orange-500 text-white text-[9px] font-black uppercase tracking-widest rounded-full shadow-[0_10px_20px_rgba(234,88,12,0.3)]">
                           <Rocket className="w-3 h-3" /> Most Popular
                        </div>
                    )}

                    <div className="flex flex-col gap-4">
                        <div className="mb-2 group-hover:scale-110 transition-transform duration-500">{plan.icon}</div>
                        <h3 className="text-3xl font-black uppercase italic tracking-tighter leading-none">{plan.name}</h3>
                        <p className="text-zinc-500 text-sm font-medium italic leading-relaxed">{plan.description}</p>
                    </div>

                    <div className="flex items-baseline gap-2">
                        <span className="text-5xl md:text-6xl font-black italic tracking-tighter">{plan.price}</span>
                        <span className="text-zinc-600 text-sm font-bold uppercase tracking-widest">/ Month</span>
                    </div>

                    <div className="w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />

                    <div className="space-y-5 flex-1">
                        {plan.features.map((feature, i) => (
                            <div key={i} className="flex items-center gap-4 group/item">
                                <div className={`flex-shrink-0 w-5 h-5 rounded-full flex items-center justify-center transition-colors ${plan.popular ? "bg-orange-500 shadow-[0_0_15px_rgba(234,88,12,0.3)]" : "bg-zinc-800 group-hover/item:bg-white/20"}`}>
                                    <Check className={`w-3 h-3 ${plan.popular ? "text-white" : "text-zinc-400"}`} strokeWidth={3} />
                                </div>
                                <span className="text-zinc-400 text-sm font-semibold tracking-tight">{feature}</span>
                            </div>
                        ))}
                    </div>

                    <Link 
                        href="/contact" 
                        className={`w-full py-6 rounded-[2rem] font-black uppercase tracking-widest text-[10px] transition-all duration-500 flex items-center justify-center gap-4 shadow-2xl ${
                        plan.popular 
                        ? "bg-orange-500 text-white hover:bg-white hover:text-black hover:scale-[1.02] active:scale-95" 
                        : "bg-white/5 text-white border border-white/10 hover:bg-white hover:text-black hover:scale-[1.02] active:scale-95"
                        }`}
                    >
                        <span>{plan.buttonText}</span>
                        <ArrowRight className="w-4 h-4" />
                    </Link>
                </div>
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
