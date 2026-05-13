"use client";

import React from "react";
import { motion } from "framer-motion";

export const LiquidBackground = () => {
  return (
    <div className="fixed inset-0 z-[-1] bg-black overflow-hidden pointer-events-none">
      {/* Liquid Blobs */}
      <div className="absolute top-[-10%] left-[-10%] w-[60%] h-[60%] bg-orange-600/10 rounded-full liquid-blur animate-liquid" />
      <div className="absolute bottom-[-10%] right-[-10%] w-[70%] h-[70%] bg-white/5 rounded-full liquid-blur animate-liquid-slow" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[40%] h-[40%] bg-zinc-800/10 rounded-full liquid-blur" />
      
      {/* Noise Texture Overlay */}
      <div className="noise-overlay" />
    </div>
  );
};
