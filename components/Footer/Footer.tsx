"use client";

import React from "react";

/**
 * Footer Component (Original Starting Version)
 * Clean, minimalist design with branded top border.
 */
export const Footer = () => {
    return (
        <footer className="w-full bg-zinc-950 border-t border-orange-600 py-12 px-6 md:px-16 flex flex-col md:flex-row items-center justify-between text-zinc-500 font-medium">
            {/* Copyright Section */}
            <p className="text-sm md:text-base mb-6 md:mb-0">
                &copy; {new Date().getFullYear()} SmartAdverts. All rights reserved.
            </p>

            {/* Branded Social Links */}
            <div className="flex items-center gap-8 text-xs font-black uppercase tracking-[0.2em]">
                <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">Instagram</a>
                <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">Twitter</a>
                <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">Linkedin</a>
            </div>
        </footer>
    );
};
