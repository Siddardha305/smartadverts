"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";

export const NavLogo = () => {
    const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
        if (window.location.pathname === "/") {
            e.preventDefault();
            window.scrollTo({ top: 0, behavior: "smooth" });
        }
    };

    return (
        <Link href="/" onClick={handleClick} className="inline-block">
            <Image 
                src="/logo/smartadvertslogo.png" 
                alt="SmartAdverts Logo" 
                width={160}
                height={32}
                className="h-6 md:h-8 w-auto object-contain"
                priority
            />
        </Link>
    );
};
