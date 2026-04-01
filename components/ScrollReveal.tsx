"use client";

import React, { ReactNode } from "react";
import { motion } from "framer-motion";

interface ScrollRevealProps {
    children: ReactNode;
    direction?: "up" | "down" | "left" | "right" | "none";
    delay?: number;
    duration?: number;
    distance?: number;
    className?: string;
    once?: boolean;
    scale?: number;
}

/**
 * ScrollReveal Component
 * A highly versatile and dynamic scroll-triggered animation wrapper.
 * Can be wrapped around any component or text to provide professional motion.
 */
export const ScrollReveal = ({
    children,
    direction = "up",
    delay = 0,
    duration = 0.8,
    distance = 40,
    className = "",
    once = true,
    scale = 1
}: ScrollRevealProps) => {
    // Determine the initial position based on the requested direction
    const directions = {
        up: { y: distance, x: 0 },
        down: { y: -distance, x: 0 },
        left: { x: distance, y: 0 },
        right: { x: -distance, y: 0 },
        none: { x: 0, y: 0 }
    };

    const initialPos = directions[direction];

    return (
        <motion.div
            initial={{ 
                opacity: 0, 
                ...initialPos,
                scale: scale !== 1 ? scale : 1
            }}
            whileInView={{ 
                opacity: 1, 
                x: 0, 
                y: 0,
                scale: 1
            }}
            viewport={{ 
                once, 
                margin: "-100px" 
            }}
            transition={{
                duration: duration,
                delay: delay,
                ease: [0.22, 1, 0.36, 1] // Custom premium cubic-bezier easing
            }}
            className={className}
        >
            {children}
        </motion.div>
    );
};
