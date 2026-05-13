"use client";

import React, { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
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
        <header
            className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
                scrolled ? "py-4" : "py-8"
            }`}
        >
            <div className="container mx-auto px-6">
                <nav className={`flex items-center justify-between px-8 py-4 rounded-full border transition-all duration-500 ${
                    scrolled 
                        ? "bg-white/80 backdrop-blur-xl border-zinc-200 shadow-lg" 
                        : "bg-transparent border-transparent"
                }`}>
                    <NavLogo />

                    {/* Desktop Navigation */}
                    <div className="hidden md:flex items-center gap-10">
                        <NavLinks />
                    </div>

                    {/* CTA Action - 2026 Style */}
                    <div className="hidden md:block">
                        <Link 
                            href="/contact" 
                            className="px-8 py-3 bg-black text-white rounded-xl text-[10px] font-black uppercase tracking-widest italic hover:bg-zinc-800 transition-all hover:scale-105 active:scale-95 shadow-lg"
                        >
                            Get Started
                        </Link>
                    </div>

                    {/* Mobile Menu Toggle */}
                    <button
                        className={`md:hidden p-2 rounded-xl transition-colors ${
                            scrolled ? "text-black bg-zinc-100" : "text-white bg-white/10"
                        }`}
                        onClick={() => setMobileOpen(!mobileOpen)}
                    >
                        {mobileOpen ? <X /> : <Menu />}
                    </button>
                </nav>
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
        </header>
    );
};
