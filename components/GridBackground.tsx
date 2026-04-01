import React from "react";

/**
 * GridBackground Component
 * Renders a premium, high-end dotted grid background with a radial mask
 * that fades towards the edges for a professional look.
 */
export const GridBackground = () => {
    return (
        <div 
            className="absolute inset-0 z-0 bg-[radial-gradient(circle_at_center,_rgba(255,255,255,0.15)_1px,_transparent_1px)] bg-[length:24px_24px] [mask-image:radial-gradient(ellipse_70%_60%_at_50%_50%,#000_20%,transparent_100%)] pointer-events-none"
            aria-hidden="true"
        />
    );
};
