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
    <section id="pricing" className="py-32 relative overflow-hidden">
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

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 max-w-7xl mx-auto">
          {plans.map((plan, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.8 }}
              viewport={{ once: true }}
              className={`relative group h-full flex flex-col p-12 rounded-[3rem] border border-[var(--border)] transition-all duration-700 hover:-translate-y-4 ${
                plan.popular 
                ? "bg-[var(--bg-main)] shadow-premium z-20 border-brand/20" 
                : "bg-[var(--bg-surface)] z-10"
              }`}
            >
                {plan.popular && (
                    <div className="absolute top-0 right-12 -translate-y-1/2 px-6 py-2 bg-brand text-white text-[10px] font-black uppercase tracking-[0.3em] rounded-full shadow-lg">
                        Highly Recommended
                    </div>
                )}

                <div className="mb-12">
                    <span className="text-[10px] uppercase tracking-[0.4em] font-black italic text-brand mb-4 block">{plan.name}</span>
                    <div className="flex items-baseline gap-2 mb-6">
                        <span className="text-6xl font-black italic tracking-tighter text-[var(--text-main)]">{plan.price}</span>
                        <span className="text-xs font-bold text-[var(--text-muted)] opacity-50 uppercase">/ Month</span>
                    </div>
                    <p className="text-sm text-[var(--text-muted)] leading-relaxed font-medium italic">{plan.description}</p>
                </div>

                <div className="space-y-6 mb-12 flex-1">
                    {plan.features.map((feature, i) => (
                        <div key={i} className="flex items-center gap-4 group/item">
                            <div className={`w-2 h-2 rounded-full ${plan.popular ? "bg-brand animate-pulse" : "bg-[var(--text-muted)] opacity-30"}`} />
                            <span className="text-xs font-bold text-[var(--text-main)] tracking-tight opacity-70 group-hover/item:opacity-100 transition-opacity">{feature}</span>
                        </div>
                    ))}
                </div>

                <Link 
                    href="/contact" 
                    className={`btn-2026 ${
                        plan.popular 
                        ? "btn-2026-primary" 
                        : "btn-2026-secondary"
                    } italic text-[11px] uppercase tracking-[0.3em]`}
                >
                    <span>{plan.buttonText}</span>
                    <ArrowRight className="w-5 h-5" />
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
