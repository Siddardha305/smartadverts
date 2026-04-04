"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { usePathname } from "next/navigation";
import { NavLogo } from "./NavLogo";
import { NavLinks } from "./NavLinks";
import { NavCTA } from "./NavCTA";
import Link from "next/link";

/**
 * Navbar Component (Integrated Centered Design - PILL STYLE)
 * Features the signature floating pill with the CTA inside for perfect balance.
 */
export const Navbar = () => {
    const [scrolled, setScrolled] = useState(false);
    const [mobileOpen, setMobileOpen] = useState(false);
    const pathname = usePathname();

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <nav className="fixed top-0 left-0 right-0 z-[100] px-4 py-8 pointer-events-none">
            <div className="max-w-7xl mx-auto flex items-center justify-center pointer-events-auto">
                <div className={`flex items-center gap-8 md:gap-12 px-6 md:px-8 py-3 rounded-full transition-all duration-500 border ${
                    scrolled 
                        ? "bg-black/90 border-white/10 backdrop-blur-xl shadow-2xl" 
                        : "bg-black/40 border-transparent backdrop-blur-md"
                }`}>
                    <NavLogo />
                    <NavLinks />
                    
                    {/* Integrated CTA Button */}
                    <div className="hidden md:block border-l border-white/10 pl-8">
                        <NavCTA />
                    </div>
                </div>

                {/* Mobile Menu Toggle (Only visible on small screens) */}
                <div className="absolute right-8 md:hidden pointer-events-auto">
                    <button 
                        onClick={() => setMobileOpen(!mobileOpen)}
                        className="w-12 h-12 bg-white rounded-full flex flex-col items-center justify-center gap-1 shadow-lg"
                    >
                        <div className={`w-6 h-0.5 bg-black transition-all ${mobileOpen ? "rotate-45 translate-y-1.5" : ""}`} />
                        <div className={`w-6 h-0.5 bg-black transition-all ${mobileOpen ? "opacity-0" : ""}`} />
                        <div className={`w-6 h-0.5 bg-black transition-all ${mobileOpen ? "-rotate-45 -translate-y-1.5" : ""}`} />
                    </button>
                </div>
            </div>

            {/* Mobile Portal */}
            <AnimatePresence>
                {mobileOpen && (
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.95 }}
                        className="md:hidden absolute top-full inset-x-4 mt-4 bg-zinc-900 border border-white/10 rounded-[2rem] p-8 shadow-2xl"
                    >
                        <div className="flex flex-col gap-6">
                            <Link href="/" onClick={() => setMobileOpen(false)} className="text-2xl font-black italic text-white uppercase">Home</Link>
                            <Link href="/services" onClick={() => setMobileOpen(false)} className="text-2xl font-black italic text-white uppercase">Services</Link>
                            <Link href="/portfolio" onClick={() => setMobileOpen(false)} className="text-2xl font-black italic text-white uppercase">Portfolio</Link>
                            <Link href="/contact" onClick={() => setMobileOpen(false)} className="text-2xl font-black italic text-white uppercase">Contact</Link>
                            <div className="pt-6 border-t border-white/5">
                                <NavCTA />
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
};
