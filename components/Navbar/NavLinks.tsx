"use client";

import React from "react";
import { motion } from "framer-motion";
import { usePathname } from "next/navigation";
import Link from "next/link";

const links = [
    { name: "Home", href: "/" },
    { name: "Services", href: "/services" },
    { name: "Portfolio", href: "/portfolio" },
    { name: "Contact", href: "/contact" },
];

const RollingLink = ({ href, title }: { href: string; title: string }) => {
    const pathname = usePathname();
    const isActive = pathname === href;

    return (
        <Link 
            href={href} 
            className={`relative flex overflow-hidden px-3 py-2 text-sm font-bold tracking-wide transition-colors cursor-pointer ${
                isActive ? "text-orange-500" : "text-zinc-300"
            }`}
        >
            <motion.div
                initial="initial"
                whileHover="hovered"
                className="flex items-center"
            >
                {title.split("").map((char, i) => (
                    <div key={`${char}-${i}`} className="relative flex overflow-hidden">
                        {/* Original Character moving up */}
                        <motion.span
                            variants={{
                                initial: { y: 0 },
                                hovered: { y: "-100%" },
                            }}
                            transition={{
                                duration: 0.5,
                                ease: [0.76, 0, 0.24, 1],
                                delay: i * 0.03, // Stagger effect
                            }}
                            className="inline-block"
                        >
                            {char === " " ? "\u00A0" : char}
                        </motion.span>

                        {/* Clone Character coming from bottom */}
                        <motion.span
                            variants={{
                                initial: { y: "100%" },
                                hovered: { y: 0 },
                            }}
                            transition={{
                                duration: 0.5,
                                ease: [0.76, 0, 0.24, 1],
                                delay: i * 0.03, // Same stagger
                            }}
                            className="absolute left-0 inline-block text-orange-500"
                        >
                            {char === " " ? "\u00A0" : char}
                        </motion.span>
                    </div>
                ))}
            </motion.div>
        </Link>
    );
};


export const NavLinks = () => {
    return (
        <div className="hidden md:flex items-center gap-1">
            {links.map((link) => (
                <RollingLink key={link.name} href={link.href} title={link.name} />
            ))}
        </div>
    );
};
