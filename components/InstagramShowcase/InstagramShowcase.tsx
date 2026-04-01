"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { GridBackground } from "@/components/GridBackground";

export const InstagramShowcase = () => {
    // Array of mock posts (gradient backgrounds to simulate designs)
    const posts = Array.from({ length: 9 }).map((_, i) => i);

    // State for live Instagram data
    const [stats, setStats] = useState({
        posts: "...",
        followers: "...",
        following: "..."
    });

    useEffect(() => {
        // Fetch live stats from our own secure backend route
        fetch("/api/instagram")
            .then(res => res.json())
            .then(data => {
                if(data.followers) setStats(data);
            })
            .catch(error => console.error("Could not fetch IG stats:", error));
    }, []);

    return (
        <section className="bg-zinc-950 py-32 px-4 md:px-16 text-white overflow-hidden relative border-t border-zinc-900">
            <GridBackground />
            <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-16 relative z-10">
                
                {/* Text Content */}
                <div className="w-full lg:w-1/2 text-center lg:text-left">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                    >
                        <h2 className="text-4xl md:text-5xl lg:text-6xl font-black uppercase tracking-tighter mb-6">
                            Follow Our <br />
                            <span className="text-orange-500">Design Journey</span>
                        </h2>
                        <p className="text-zinc-400 text-lg leading-relaxed mb-8 max-w-lg mx-auto lg:mx-0">
                            We constantly update our Instagram with our latest designs, client projects, and creative experiments. Follow us to see exactly what we can do for your brand!
                        </p>
                        <a 
                            href="https://www.instagram.com/smartadverts_/" 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="inline-flex flex-row items-center gap-3 px-8 py-4 bg-gradient-to-tr from-yellow-500 via-pink-500 to-purple-600 rounded-full font-bold uppercase tracking-widest text-sm transition-transform hover:scale-105 shadow-[0_0_30px_rgba(236,72,153,0.3)]"
                        >
                            <svg className="w-5 h-5 fill-white" viewBox="0 0 24 24">
                                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/>
                            </svg>
                            Follow @smartadverts_
                        </a>
                    </motion.div>
                </div>

                {/* Mobile Phone Mockup */}
                <motion.div 
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="w-full lg:w-1/2 flex justify-center"
                >
                    {/* The Phone Frame */}
                    <div className="relative w-[280px] sm:w-[320px] h-[560px] sm:h-[640px] bg-black rounded-[40px] sm:rounded-[45px] border-[8px] sm:border-[10px] border-zinc-900 shadow-[0_20px_60px_rgba(234,88,12,0.1)] overflow-hidden">
                        {/* Notch */}
                        <div className="absolute top-0 inset-x-0 h-7 bg-zinc-900 rounded-b-2xl w-36 mx-auto z-20 flex justify-center items-end pb-1.5">
                            <div className="w-16 h-1.5 rounded-full bg-zinc-800"></div>
                        </div>
                        
                        {/* IG Header */}
                        <div className="pt-10 pb-3 px-4 flex items-center justify-between bg-black z-10 relative">
                            <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                            </svg>
                            <span className="font-bold text-base tracking-wide flex items-center gap-1">
                                smartadverts_
                                <svg className="w-3.5 h-3.5 text-blue-500 fill-current" viewBox="0 0 24 24"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 15l-4-4 1.41-1.41L11 14.17l6.59-6.59L19 9l-8 8z"/></svg>
                            </span>
                            <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 5v.01M12 12v.01M12 19v.01M12 6a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z" />
                            </svg>
                        </div>

                        {/* Profile Info */}
                        <div className="p-4 pt-1 bg-black">
                            <div className="flex items-center justify-between mb-4">
                                <div className="w-20 h-20 rounded-full bg-gradient-to-tr from-yellow-500 via-pink-500 to-purple-600 p-[3px]">
                                    <div className="w-full h-full bg-zinc-950 rounded-full border-2 border-black overflow-hidden flex items-center justify-center relative">
                                        <Image 
                                            src="/insta-profile.jpg" 
                                            alt="Profile" 
                                            fill 
                                            className="object-cover"
                                            sizes="80px"
                                        />
                                    </div>
                                </div>
                                <div className="flex gap-4 text-center pr-2">
                                    <div className="flex flex-col items-center min-w-[36px]">
                                        <div className="font-bold text-lg leading-tight">{stats.posts}</div>
                                        <div className="text-[11px] text-zinc-300">Posts</div>
                                    </div>
                                    <div className="flex flex-col items-center min-w-[36px]">
                                        <div className="font-bold text-lg leading-tight">{stats.followers}</div>
                                        <div className="text-[11px] text-zinc-300">Followers</div>
                                    </div>
                                    <div className="flex flex-col items-center min-w-[36px]">
                                        <div className="font-bold text-lg leading-tight">{stats.following}</div>
                                        <div className="text-[11px] text-zinc-300">Following</div>
                                    </div>
                                </div>
                            </div>

                            <div className="text-sm mb-4">
                                <div className="font-bold">SmartAdverts | Creative Partner</div>
                                <div className="text-zinc-400 text-xs mt-1 space-y-0.5">
                                    <p>🎨 High-converting designs for startups</p>
                                    <p>🚀 Subscriptions from ₹8k/mo</p>
                                    <p>👇 We build brands.</p>
                                </div>
                                <a href="https://smartadverts.in" className="text-blue-400 text-xs font-semibold mt-1 inline-block">🔗 smartadverts.in</a>
                            </div>

                            <div className="flex gap-2">
                                <div className="flex-[2] bg-zinc-800 text-center py-2 rounded-lg text-sm font-bold shadow-sm">Following</div>
                                <div className="flex-[2] bg-zinc-800 text-center py-2 rounded-lg text-sm font-bold shadow-sm">Message</div>
                                <div className="px-3 bg-zinc-800 flex flex-col justify-center rounded-lg shadow-sm">
                                    <svg className="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18 9v3m0 0v3m0-3h3m-3 0h-3m-2-5a4 4 0 11-8 0 4 4 0 018 0zM3 20a6 6 0 0112 0v1H3v-1z" />
                                    </svg>
                                </div>
                            </div>
                        </div>

                        {/* Story Highlights */}
                        <div className="px-4 pb-4 flex gap-5 overflow-x-hidden">
                            {['Designs', 'Clients', 'Process', 'Reviews'].map((title, i) => (
                                <div key={i} className="flex flex-col items-center gap-1.5">
                                    <div className="w-14 h-14 rounded-full border border-zinc-700 bg-zinc-900 flex items-center justify-center p-0.5">
                                        <div className="w-full h-full bg-zinc-800 rounded-full flex items-center justify-center overflow-hidden">
                                           <span className="text-xl opacity-50">✨</span>
                                        </div>
                                    </div>
                                    <span className="text-[11px] font-medium tracking-wide">{title}</span>
                                </div>
                            ))}
                        </div>

                        {/* Grid Toggle */}
                        <div className="flex border-t border-zinc-800 mt-1">
                            <div className="flex-1 border-t-2 border-white pb-3 flex justify-center pt-3 -mt-[1px]">
                                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M4 4h4v4H4zm6 0h4v4h-4zm6 0h4v4h-4zM4 10h4v4H4zm6 0h4v4h-4zm6 0h4v4h-4zM4 16h4v4H4zm6 0h4v4h-4zm6 0h4v4h-4z"/></svg>
                            </div>
                            <div className="flex-1 pb-3 flex justify-center pt-3 text-zinc-500">
                                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M2.25 4.5A2.25 2.25 0 014.5 2.25h15A2.25 2.25 0 0121.75 4.5v15a2.25 2.25 0 01-2.25 2.25h-15A2.25 2.25 0 012.25 19.5v-15zM4.5 3.75a.75.75 0 00-.75.75v15c0 .414.336.75.75.75h15a.75.75 0 00.75-.75v-15a.75.75 0 00-.75-.75h-15zm3.75 3a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM6 14.25a.75.75 0 01.75-.75h10.5a.75.75 0 01.75.75v3.75a.75.75 0 01-.75.75H6.75a.75.75 0 01-.75-.75v-3.75z"/></svg>
                            </div>
                        </div>

                        {/* Posts */}
                        <div className="grid grid-cols-3 gap-0.5">
                            {posts.map((post) => (
                                <div key={post} className="aspect-square bg-zinc-900 relative group overflow-hidden">
                                     {/* Fake image gradient to simulate nice designs */}
                                     {post % 3 === 0 && <div className="absolute inset-0 bg-gradient-to-br from-orange-500/80 to-rose-600/80"></div>}
                                     {post % 3 === 1 && <div className="absolute inset-0 bg-gradient-to-tr from-zinc-800 to-zinc-700"></div>}
                                     {post % 3 === 2 && <div className="absolute inset-0 bg-gradient-to-tl from-yellow-600/80 to-orange-500/80"></div>}
                                     
                                     {/* Hover Icon (Like/Comment) - just for visuals */}
                                     <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-2">
                                        <div className="flex items-center gap-1 font-bold text-xs"><svg className="w-3 h-3 fill-white" viewBox="0 0 24 24"><path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/></svg>24</div>
                                     </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </motion.div>

            </div>
        </section>
    );
};
