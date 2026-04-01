"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { usePathname } from "next/navigation";
import { NavLogo } from "./NavLogo";
import { NavLinks } from "./NavLinks";
import { NavCTA } from "./NavCTA";
import Link from "next/link";

const mobileLinks = [
    { name: "Home", href: "/" },
    { name: "Services", href: "/services" },
    { name: "Portfolio", href: "/portfolio" },
    { name: "Contact", href: "/contact" },
];

export const Navbar = () => {
    const [scrolled, setScrolled] = useState(false);
    const [mobileOpen, setMobileOpen] = useState(false);
    const pathname = usePathname();

    React.useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <>
            <div className="fixed top-6 left-0 right-0 z-50 flex justify-center w-full px-4 pointer-events-none">
                <motion.nav
                    initial={{ y: -100, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                    className={`pointer-events-auto flex items-center justify-between gap-4 md:gap-16 px-5 md:px-6 py-3 rounded-full border transition-colors duration-500 w-full max-w-3xl ${scrolled
                        ? "bg-black/80 border-white/10 backdrop-blur-xl shadow-2xl shadow-black/50"
                        : "bg-black/30 border-transparent backdrop-blur-md"
                        }`}
                >
                    <NavLogo />
                    <NavLinks />
                    <NavCTA />

                    {/* Mobile Hamburger Button */}
                    <button
                        onClick={() => setMobileOpen(!mobileOpen)}
                        className="md:hidden flex flex-col items-center justify-center w-8 h-8 gap-1.5 pointer-events-auto"
                        aria-label="Toggle menu"
                    >
                        <motion.span
                            animate={mobileOpen ? { rotate: 45, y: 5 } : { rotate: 0, y: 0 }}
                            className="block w-5 h-[2px] bg-white rounded-full"
                        />
                        <motion.span
                            animate={mobileOpen ? { opacity: 0 } : { opacity: 1 }}
                            className="block w-5 h-[2px] bg-white rounded-full"
                        />
                        <motion.span
                            animate={mobileOpen ? { rotate: -45, y: -5 } : { rotate: 0, y: 0 }}
                            className="block w-5 h-[2px] bg-white rounded-full"
                        />
                    </button>
                </motion.nav>
            </div>

            {/* Mobile Menu Overlay */}
            <AnimatePresence>
                {mobileOpen && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="fixed inset-0 z-40 bg-black/95 backdrop-blur-xl flex flex-col items-center justify-center gap-8 md:hidden"
                    >
                        {mobileLinks.map((link, i) => (
                            <motion.div
                                key={link.name}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: 20 }}
                                transition={{ duration: 0.4, delay: i * 0.1 }}
                            >
                                <Link
                                    href={link.href}
                                    onClick={() => setMobileOpen(false)}
                                    className={`text-3xl font-bold uppercase tracking-widest transition-colors ${
                                        pathname === link.href ? "text-orange-500" : "text-white hover:text-orange-500"
                                    }`}
                                >
                                    {link.name}
                                </Link>
                            </motion.div>
                        ))}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: 20 }}
                            transition={{ duration: 0.4, delay: 0.4 }}
                        >
                            <a
                                href="#contact"
                                onClick={() => setMobileOpen(false)}
                                className="mt-4 px-8 py-4 bg-orange-500 text-white rounded-full font-bold uppercase tracking-widest text-sm"
                            >
                                Hire Me
                            </a>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
};
