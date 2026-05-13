"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus } from "lucide-react";

const faqs = [
  {
    question: "How fast will I receive my designs?",
    answer: "Most simple requests (like thumbnails or social media posts) are delivered within 24 hours. More complex projects like video editing or multi-page brochures may take 48-72 hours.",
  },
  {
    question: "What software do you use for designing?",
    answer: "We primarily use the Adobe Creative Suite (Photoshop, Illustrator, After Effects, Premiere Pro) and Figma to ensure professional, industry-standard results.",
  },
  {
    question: "Is there a limit to how many requests I can make?",
    answer: "No! You can add as many design requests to your queue as you like, and we will work through them one by one.",
  },
  {
    question: "Can I cancel my subscription anytime?",
    answer: "Yes, SmartAdverts is a month-to-month service. You can pause or cancel your subscription at any time with no hidden fees.",
  },
];

export const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section id="faq" className="py-24 bg-zinc-950/50">
      <div className="container mx-auto px-6 max-w-4xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-black uppercase italic mb-4">
            Common <span className="text-orange-500">Questions</span>
          </h2>
          <p className="text-zinc-400">Everything you need to know about the subscription.</p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div key={index} className="overflow-hidden">
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full flex items-center justify-between p-6 bg-zinc-900/50 hover:bg-zinc-900 border border-white/5 rounded-3xl transition-all"
              >
                <span className="text-left font-bold uppercase tracking-tight italic">{faq.question}</span>
                {openIndex === index ? <Minus className="w-5 h-5 text-orange-500" /> : <Plus className="w-5 h-5 text-zinc-500" />}
              </button>
              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                  >
                    <div className="p-8 text-zinc-400 text-sm leading-relaxed bg-zinc-900/20 border-x border-b border-white/5 rounded-b-3xl">
                      {faq.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
