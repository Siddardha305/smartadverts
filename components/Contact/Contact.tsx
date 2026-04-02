"use client";

import React, { useRef, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { db } from "@/lib/firebase";
import { collection, addDoc, serverTimestamp } from "firebase/firestore";

export const Contact = () => {
    const ref = useRef(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start end", "end end"],
    });

    const y = useTransform(scrollYProgress, [0, 1], ["50%", "0%"]);
    const scale = useTransform(scrollYProgress, [0, 1], [0.8, 1]);

    // Form State
    const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
    const [errorMessage, setErrorMessage] = useState("");
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: ""
    });

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setStatus("submitting");
        setErrorMessage("");

        // Timeout logic to prevent the button from hanging forever
        const timeout = setTimeout(() => {
            if (status === "submitting") {
                setStatus("error");
                setErrorMessage("Connection Timeout. Please check your network or Firebase rules.");
            }
        }, 10000); // 10 seconds timeout

        try {
            console.log("Attempting to save lead to Firebase...", formData);
            
            // Save to Firebase Firestore "leads" collection
            const docRef = await addDoc(collection(db, "leads"), {
                ...formData,
                timestamp: serverTimestamp(),
                source: "Portfolio Contact Form",
                createdAt: new Date().toISOString()
            });

            console.log("Document successfully written with ID: ", docRef.id);
            clearTimeout(timeout);
            setStatus("success");
            setFormData({ name: "", email: "", message: "" });
            
        } catch (error: any) {
            clearTimeout(timeout);
            console.error("FIREBASE ERROR:", error);
            setStatus("error");
            setErrorMessage(error.message || "Failed to connect to Database. Did you enable 'Rules' in Firebase?");
        }
    };

    return (
        <section ref={ref} id="contact" className="relative bg-orange-600 py-20 md:py-48 px-4 md:px-16 text-black overflow-hidden flex flex-col items-center justify-center rounded-t-[2rem] md:rounded-t-[6rem]">
            <motion.div
                style={{ y, scale }}
                className="max-w-5xl mx-auto w-full text-center relative z-10"
            >
                <span className="inline-block py-2 px-6 rounded-full border-2 border-black/20 text-black uppercase tracking-widest font-bold mb-12">
                    Let&apos;s Talk
                </span>
                <h2 className="text-4xl sm:text-6xl md:text-9xl font-black uppercase tracking-tighter leading-none mb-12">
                    Start a<br />Project
                </h2>

                <form onSubmit={handleSubmit} className="max-w-2xl mx-auto flex flex-col gap-6 text-left">
                    <div className="flex flex-col md:flex-row gap-6">
                        <input
                            required
                            type="text"
                            value={formData.name}
                            onChange={(e) => setFormData({...formData, name: e.target.value})}
                            placeholder="YOUR NAME"
                            className="w-full bg-transparent border-b-2 border-black/30 placeholder-black/50 py-4 px-2 text-xl font-medium focus:outline-none focus:border-black transition-colors"
                        />
                        <input
                            required
                            type="email"
                            value={formData.email}
                            onChange={(e) => setFormData({...formData, email: e.target.value})}
                            placeholder="YOUR EMAIL"
                            className="w-full bg-transparent border-b-2 border-black/30 placeholder-black/50 py-4 px-2 text-xl font-medium focus:outline-none focus:border-black transition-colors"
                        />
                    </div>
                    <textarea
                        required
                        rows={4}
                        value={formData.message}
                        onChange={(e) => setFormData({...formData, message: e.target.value})}
                        placeholder="TELL ME ABOUT YOUR PROJECT"
                        className="bg-transparent border-b-2 border-black/30 placeholder-black/50 py-4 px-2 text-xl font-medium focus:outline-none focus:border-black transition-colors resize-none mt-4"
                    />
                    
                    <button
                        disabled={status === "submitting"}
                        type="submit"
                        className="group relative mt-12 self-start md:self-center overflow-hidden rounded-full bg-black px-12 py-6 text-xl font-bold uppercase tracking-widest text-white transition-all hover:scale-105 disabled:opacity-50"
                    >
                        <span className="relative z-10">
                            {status === "idle" && "Send Message"}
                            {status === "submitting" && "Linking Database..."}
                            {status === "success" && "Sent Successfully!"}
                            {status === "error" && "Connection Error"}
                        </span>
                        <div className="absolute inset-0 z-0 h-full w-0 bg-white group-hover:w-full transition-all duration-500 ease-out" />
                        <span className="absolute left-1/2 top-1/2 z-20 -translate-x-1/2 -translate-y-1/2 text-black opacity-0 transition-opacity duration-500 group-hover:opacity-100 uppercase tracking-widest whitespace-nowrap">
                            Try Again →
                        </span>
                    </button>

                    {status === "success" && (
                        <p className="text-black text-center font-bold text-xs uppercase tracking-widest mt-8">
                            Success! Your message is securely saved in your Firebase Database. 🚀
                        </p>
                    )}

                    {status === "error" && (
                        <div className="mt-8 p-4 bg-black/10 border border-black/20 rounded-2xl text-center">
                            <p className="text-black font-bold text-xs uppercase tracking-widest mb-2">Error Details:</p>
                            <p className="text-black/70 text-xs font-mono">{errorMessage}</p>
                            <p className="text-black text-[10px] font-bold uppercase mt-4 opacity-50">Please ensure Firebase Rules are set to 'test mode' or 'write: if true'</p>
                        </div>
                    )}
                </form>
            </motion.div>
        </section>
    );
};
