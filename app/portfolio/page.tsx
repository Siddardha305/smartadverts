"use client";

import { useEffect } from "react";
import { Navbar } from "@/components/Navbar/Navbar";
import { WorksMasonry } from "@/components/Works/WorksMasonry";
import { Contact } from "@/components/Contact/Contact";
import { Footer } from "@/components/Footer/Footer";
import Lenis from "lenis";

export default function WorksPage() {
    useEffect(() => {
        const lenis = new Lenis({
            duration: 1.2,
            easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
        });

        function raf(time: number) {
            lenis.raf(time);
            requestAnimationFrame(raf);
        }
        requestAnimationFrame(raf);

        return () => {
            lenis.destroy();
        };
    }, []);

    return (
        <main className="bg-black text-white min-h-screen selection:bg-orange-500 selection:text-white overflow-x-hidden">
            <Navbar />
            
            <article className="pt-32">
                {/* Dynamic Masonry Grid with Reveals */}
                <WorksMasonry />
                
                {/* Call to Action & Footer */}
                <Contact />
                <Footer />
            </article>
        </main>
    );
}
