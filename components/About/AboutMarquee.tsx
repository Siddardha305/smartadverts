import React from "react";
import { motion, MotionValue } from "framer-motion";

interface AboutMarqueeProps {
    x1: MotionValue<string>;
    x2: MotionValue<string>;
}

export const AboutMarquee: React.FC<AboutMarqueeProps> = ({ x1, x2 }) => {
    return (
        <>
            <div className="absolute top-10 w-max overflow-hidden whitespace-nowrap opacity-5 pointer-events-none">
                <motion.div style={{ x: x1 }} className="flex text-[15rem] font-black uppercase leading-none gap-8">
                    <span>CREATIVITY LIVES HERE</span>
                    <span>CREATIVITY LIVES HERE</span>
                </motion.div>
            </div>
            <div className="absolute bottom-10 w-max overflow-hidden whitespace-nowrap opacity-5 pointer-events-none">
                <motion.div style={{ x: x2 }} className="flex text-[15rem] font-black uppercase leading-none gap-8 text-orange-500">
                    <span>INNOVATION DESIGNED</span>
                    <span>INNOVATION DESIGNED</span>
                </motion.div>
            </div>
        </>
    );
};
