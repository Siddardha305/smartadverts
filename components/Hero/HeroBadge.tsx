"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

export const HeroBadge = () => {
    const [status, setStatus] = useState({
        text: 'Checking availability...',
        color: 'zinc', // 'green', 'rose', 'zinc', 'orange'
        showPing: false
    });

    useEffect(() => {
        const checkStatus = () => {
            // Get current time in India (IST)
            const istDate = new Date(new Date().toLocaleString('en-US', { timeZone: 'Asia/Kolkata' }));
            const dayOfWeek = istDate.getDay(); // 0 is Sunday, 6 is Saturday
            const hour = istDate.getHours();
            
            const month = String(istDate.getMonth() + 1).padStart(2, '0');
            const day = String(istDate.getDate()).padStart(2, '0');
            const dateStr = `${month}-${day}`;

            // Major Indian Public Holidays (Fixed & Estimated)
            const holidays: Record<string, string> = {
                "01-01": "New Year's Day",
                "01-14": "Makar Sankranti",
                "01-26": "Republic Day",
                "05-01": "Labour Day",
                "08-15": "Independence Day",
                "10-02": "Gandhi Jayanti",
                "10-31": "Diwali", // Approximated
                "12-25": "Christmas"
            };

            if (holidays[dateStr]) {
                setStatus({ 
                    text: `Holiday today: ${holidays[dateStr]}`, 
                    color: 'rose', 
                    showPing: false 
                });
            } else if (dayOfWeek === 0 || dayOfWeek === 6) {
                // Weekend
                setStatus({ 
                    text: `We are closed. Returning Monday 9 AM (IST)`, 
                    color: 'zinc', 
                    showPing: false 
                });
            } else if (hour >= 9 && hour < 17) {
                // Monday - Friday, 9:00 AM - 4:59 PM
                setStatus({ 
                    text: `We are available right now`, 
                    color: 'green', 
                    showPing: true 
                });
            } else {
                // Weekday, outside of 9-5
                setStatus({ 
                    text: `Off-hours. Mon-Fri, 9AM to 5PM (IST)`, 
                    color: 'zinc', 
                    showPing: false 
                });
            }
        };

        // Run immediately on client side
        checkStatus();
        
        // Check every minute
        const interval = setInterval(checkStatus, 60000);
        return () => clearInterval(interval);
    }, []);

    // Color Maps for Dynamic Tailwind Classes
    const colorMaps: Record<string, { borderBg: string; text: string; dot: string; ping: string }> = {
        green: {
            borderBg: "border-green-500/40 bg-green-500/10",
            text: "text-green-200",
            dot: "bg-green-500",
            ping: "bg-green-400"
        },
        rose: {
            borderBg: "border-rose-500/40 bg-rose-500/10",
            text: "text-rose-200",
            dot: "bg-rose-500",
            ping: "bg-rose-400"
        },
        zinc: {
            borderBg: "border-zinc-500/40 bg-zinc-500/10",
            text: "text-zinc-300",
            dot: "bg-zinc-500",
            ping: "bg-zinc-400"
        },
        orange: {
            borderBg: "border-orange-500/40 bg-orange-500/10",
            text: "text-orange-200",
            dot: "bg-orange-500",
            ping: "bg-orange-400"
        }
    };

    const currentColors = colorMaps[status.color];

    return (
        <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className={`mb-6 inline-flex items-center gap-2 sm:gap-3 px-4 sm:px-6 py-2 sm:py-2.5 rounded-full border backdrop-blur-md shadow-[0_0_20px_rgba(234,88,12,0.1)] transition-colors duration-500 ${currentColors.borderBg}`}
        >
            <span className="relative flex h-2.5 w-2.5">
                {status.showPing && (
                    <span className={`animate-ping absolute inline-flex h-full w-full rounded-full opacity-75 ${currentColors.ping}`}></span>
                )}
                <span className={`relative inline-flex rounded-full h-2.5 w-2.5 ${currentColors.dot}`}></span>
            </span>
            <span className={`text-xs sm:text-sm font-bold uppercase tracking-widest ${currentColors.text}`}>
                {status.text}
            </span>
        </motion.div>
    );
};
