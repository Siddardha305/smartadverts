"use client";

import React, { useState, useRef } from "react";
import Image from "next/image";

interface BeforeAfterSliderProps {
    beforeImage: string;
    afterImage: string;
}

export const BeforeAfterSlider: React.FC<BeforeAfterSliderProps> = ({ beforeImage, afterImage }) => {
    const [sliderPosition, setSliderPosition] = useState(50);
    const containerRef = useRef<HTMLDivElement>(null);

    const handleMove = (clientX: number) => {
        if (!containerRef.current) return;
        const rect = containerRef.current.getBoundingClientRect();
        const x = clientX - rect.left;
        const percent = Math.max(0, Math.min(100, (x / rect.width) * 100));
        setSliderPosition(percent);
    };

    const handleMouseMove = (e: React.MouseEvent) => {
        handleMove(e.clientX);
    };

    const handleTouchMove = (e: React.TouchEvent) => {
        handleMove(e.touches[0].clientX);
    };

    return (
        <div
            ref={containerRef}
            className="relative w-full h-full rounded-xl overflow-hidden cursor-ew-resize group shadow-2xl bg-zinc-900"
            onMouseMove={handleMouseMove}
            onTouchMove={handleTouchMove}
            role="slider"
            aria-valuenow={sliderPosition}
            aria-valuemin={0}
            aria-valuemax={100}
            tabIndex={0}
        >
            {/* Before Image (Background) */}
            <div className="absolute inset-0">
                <Image
                    src={beforeImage}
                    alt="Before"
                    fill
                    className="object-cover select-none pointer-events-none"
                    draggable={false}
                    sizes="(max-width: 768px) 100vw, 50vw"
                />
                <span className="absolute top-4 left-4 z-10 bg-black/60 text-white text-xs font-bold uppercase tracking-widest px-3 py-1 rounded-md backdrop-blur-sm">Before</span>
            </div>

            {/* After Image (Clipped Foreground) */}
            <div
                className="absolute inset-0 z-10"
                style={{ clipPath: `inset(0 ${100 - sliderPosition}% 0 0)` }}
            >
                <Image
                    src={afterImage}
                    alt="After"
                    fill
                    className="object-cover select-none pointer-events-none"
                    draggable={false}
                    sizes="(max-width: 768px) 100vw, 50vw"
                />
                <span className="absolute top-4 right-4 z-20 bg-orange-500/80 text-white text-xs font-bold uppercase tracking-widest px-3 py-1 rounded-md backdrop-blur-sm">After</span>
            </div>

            {/* Slider Line & Handle */}
            <div
                className="absolute top-0 bottom-0 z-20 w-0.5 bg-white shadow-[0_0_10px_rgba(0,0,0,0.5)] pointer-events-none"
                style={{ left: `${sliderPosition}%`, transform: 'translateX(-50%)' }}
            >
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white flex items-center justify-center shadow-lg transition-transform group-hover:scale-110">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-zinc-900">
                        <path d="M11 9l-3 3 3 3"></path>
                        <path d="M13 9l3 3-3 3"></path>
                    </svg>
                </div>
            </div>
        </div>
    );
};
