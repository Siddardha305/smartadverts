import React, { useRef } from "react";
import { useScroll, useTransform } from "framer-motion";

import { AboutHeader } from "./AboutHeader";
import { AboutMarquee } from "./AboutMarquee";

export const About = () => {
    const ref = useRef(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start end", "end start"],
    });

    const x1 = useTransform(scrollYProgress, [0, 1], ["-20%", "20%"]);
    const x2 = useTransform(scrollYProgress, [0, 1], ["20%", "-20%"]);

    return (
        <section ref={ref} id="about" className="relative bg-zinc-950 py-32 px-4 md:px-16 text-white overflow-hidden min-h-screen flex flex-col">
            <div className="max-w-7xl mx-auto w-full relative z-10 my-auto">
                <AboutHeader />
            </div>

            <AboutMarquee x1={x1} x2={x2} />
        </section>
    );
};
