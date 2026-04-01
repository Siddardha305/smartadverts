import React, { useRef } from "react";
import { WorksHeader } from "./WorksHeader";
import { WorksGrid } from "./WorksGrid";

export const Works = () => {
    const containerRef = useRef(null);

    return (
        <section ref={containerRef} id="works" className="relative min-h-screen bg-black py-32 px-4 md:px-16 text-white">
            <div className="max-w-7xl mx-auto">
                <WorksHeader />
                <WorksGrid />
            </div>
        </section>
    );
};
