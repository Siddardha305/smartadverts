"use client";

import { useEffect } from "react";
import { Navbar } from "@/components/Navbar/Navbar";
import { Services } from "@/components/Services/Services";
import { Contact } from "@/components/Contact/Contact";
import Lenis from "lenis";

export default function ServicesPage() {
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
        <main className="bg-black text-white min-h-screen">
            <Navbar />
            <div className="pt-32">
                <Services />
            </div>
            <Contact />
        </main>
    );
}
