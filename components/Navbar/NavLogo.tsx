import React from "react";
import Link from "next/link";
import Image from "next/image";

export const NavLogo = () => {
    return (
        <Link href="/" className="inline-block">
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
