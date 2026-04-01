import React from "react";
import { motion } from "framer-motion";

export const WorksHeader = () => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true, margin: "-100px" }}
            className="mb-24 flex flex-col md:flex-row md:items-end justify-between border-b border-zinc-800 pb-12"
        >
            <h2 className="text-5xl md:text-7xl font-black uppercase tracking-tighter">
                Selected<br />
                <span className="text-orange-500">Works</span>
            </h2>
            <p className="mt-6 md:mt-0 text-zinc-400 text-lg max-w-sm">
                A curated portfolio of my best design projects, showcasing brand stories and bold aesthetics.
            </p>
        </motion.div>
    );
};
