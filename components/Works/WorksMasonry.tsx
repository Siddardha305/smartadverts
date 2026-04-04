"use client";

import React, { useState, useEffect } from "react";
import { db } from "@/lib/firebase";
import { collection, query, orderBy, onSnapshot } from "firebase/firestore";
import { BeforeAfterCard } from "./BeforeAfterCard";

interface PortfolioItem {
    id: string;
    title: string;
    description: string;
    before: string;
    after: string;
}

/**
 * WorksMasonry (Dynamic Firestore Edition)
 * Fetches all portfolio items from Firestore and displays them in a uniform grid.
 */
export const WorksMasonry = () => {
    const [works, setWorks] = useState<PortfolioItem[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const q = query(collection(db, "portfolio"), orderBy("timestamp", "desc"));
        
        const unsubscribe = onSnapshot(q, (snapshot) => {
            const fetched = snapshot.docs.map(doc => ({
                id: doc.id,
                ...doc.data()
            } as PortfolioItem));
            setWorks(fetched);
            setLoading(false);
        });

        return () => unsubscribe();
    }, []);

    if (loading) {
        return (
            <div className="py-32 flex justify-center items-center">
                <div className="w-12 h-12 border-2 border-orange-500 border-t-transparent rounded-full animate-spin" />
            </div>
        );
    }

    return (
        <section className="py-24 px-4 md:px-16 bg-black min-h-screen">
            <div className="max-w-[1400px] mx-auto">
                {works.length === 0 ? (
                    <div className="py-32 text-center text-zinc-500 uppercase font-black tracking-widest text-sm">
                        No portfolio items yet. <br/>Upload your first work in the dashboard!
                    </div>
                ) : (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-8 md:gap-12 lg:gap-10">
                        {works.map((work, idx) => (
                            <BeforeAfterCard 
                                key={work.id}
                                index={idx}
                                title={work.title}
                                description={work.description}
                                before={work.before}
                                after={work.after}
                                span="col-span-1"
                            />
                        ))}
                    </div>
                )}
            </div>
            
            {/* Minimal Ambient Background Lights */}
            <div className="relative pointer-events-none z-0">
                <div className="absolute top-1/2 left-1/4 -translate-y-1/2 h-[500px] w-[500px] bg-orange-600/5 blur-[150px] opacity-30" />
                <div className="absolute bottom-0 right-1/4 h-[600px] w-[600px] bg-rose-600/5 blur-[150px] opacity-30" />
            </div>
        </section>
    );
};
