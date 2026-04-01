"use client";

import React from "react";
import { beforeAfterWorks } from "./worksData";
import { BeforeAfterCard } from "./BeforeAfterCard";

/**
 * WorksMasonry (Uniform Grid Comparison Edition)
 * A clean, high-performance portfolio grid showcasing before/after works 
 * in a perfectly consistent, uniform size for better visual scanning.
 */
export const WorksMasonry = () => {
    return (
        <section className="py-24 px-4 md:px-16 bg-black">
            <div className="max-w-[1400px] mx-auto">
                {/* Standard Uniform Grid: 1 Col (Mobile) -> 2 Col (Tablet) -> 3 Col (Desktop) */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-8 md:gap-12 lg:gap-10">
                    {beforeAfterWorks.map((work, idx) => (
                        <BeforeAfterCard 
                            key={work.id}
                            index={idx}
                            title={work.title}
                            description={work.description}
                            before={work.before}
                            after={work.after}
                            span="col-span-1" // All cards now take Exactly 1 column
                        />
                    ))}
                </div>
            </div>
            
            {/* Minimal Ambient Background Lights */}
            <div className="relative pointer-events-none z-0">
                <div className="absolute top-1/2 left-1/4 -translate-y-1/2 h-[500px] w-[500px] bg-orange-600/5 blur-[150px] opacity-30" />
                <div className="absolute bottom-0 right-1/4 h-[600px] w-[600px] bg-rose-600/5 blur-[150px] opacity-30" />
            </div>
        </section>
    );
};
