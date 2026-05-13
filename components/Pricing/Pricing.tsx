"use client";

import React from "react";
import { motion } from "framer-motion";
import { Check, Zap, Sparkles } from "lucide-react";
import Link from "next/link";

const plans = [
  {
    name: "Design Basic",
    price: "₹8,000",
    description: "Perfect for small startups needing regular high-quality designs.",
    features: [
      "1 design at a time",
      "Unlimited revisions",
      "24-48 hour delivery",
      "Source files included",
      "Stock photos included",
    ],
    buttonText: "Get Started",
    popular: false,
  },
  {
    name: "Design Pro",
    price: "₹15,000",
    description: "The most popular choice for growing businesses and creators.",
    features: [
      "2 designs at a time",
      "Priority support",
      "Custom illustrations",
      "Social media kit",
      "Everything in Basic",
    ],
    buttonText: "Most Popular",
    popular: true,
  },
  {
    name: "Full Studio",
    price: "₹25,000",
    description: "Your complete design and video editing team in one subscription.",
    features: [
      "Unlimited requests",
      "Video editing included",
      "Motion graphics",
      "Dedicated art director",
      "Everything in Pro",
    ],
    buttonText: "Go Full Studio",
    popular: false,
  },
];

export const Pricing = () => {
  return (
    <section id="pricing" className="py-24 bg-black relative noise-bg overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-20">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-7xl font-black uppercase italic mb-4"
          >
            Membership <span className="text-orange-500">Levels</span>
          </motion.h2>
          <p className="text-zinc-400 max-w-xl mx-auto">Choose a plan that fits your business stage. Pause or cancel anytime.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              className={`relative p-10 rounded-[3rem] border transition-all duration-500 flex flex-col h-full ${
                plan.popular 
                ? "bg-orange-600/10 border-orange-500/30 shadow-[0_30px_100px_rgba(234,88,12,0.1)]" 
                : "bg-zinc-900/40 border-white/5 hover:border-white/10"
              }`}
            >
              {plan.popular && (
                <div className="absolute top-0 right-10 -translate-y-1/2 px-4 py-1 bg-orange-500 text-white text-[10px] font-black uppercase tracking-widest rounded-full">
                  Popular Choice
                </div>
              )}
              
              <div className="mb-8">
                <h3 className="text-2xl font-black uppercase italic mb-2">{plan.name}</h3>
                <div className="flex items-baseline gap-1 mb-4">
                  <span className="text-4xl font-black">{plan.price}</span>
                  <span className="text-zinc-500 text-sm">/mo</span>
                </div>
                <p className="text-zinc-400 text-sm leading-relaxed">{plan.description}</p>
              </div>

              <div className="space-y-4 mb-10 flex-1">
                {plan.features.map((feature, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <div className={`p-1 rounded-full ${plan.popular ? "bg-orange-500" : "bg-white/10"}`}>
                      <Check className="w-3 h-3 text-black" />
                    </div>
                    <span className="text-zinc-300 text-sm font-medium">{feature}</span>
                  </div>
                ))}
              </div>

              <Link 
                href="/contact" 
                className={`w-full py-5 rounded-full font-black uppercase tracking-widest text-xs transition-all flex items-center justify-center gap-3 ${
                  plan.popular 
                  ? "bg-orange-500 text-white shadow-xl hover:scale-105 active:scale-95" 
                  : "bg-white text-black hover:bg-orange-500 hover:text-white"
                }`}
              >
                <span>{plan.buttonText}</span>
                <Sparkles className="w-4 h-4" />
              </Link>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Decorative Blur */}
      <div className="absolute -bottom-[10%] -left-[10%] w-[500px] h-[500px] bg-rose-600/10 rounded-full blur-[120px] pointer-events-none" />
    </section>
  );
};
