"use client";

import { useEffect } from "react";
import { Navbar } from "@/components/Navbar/Navbar";
import { Hero } from "@/components/Hero/Hero";
import { HowItWorks } from "@/components/HowItWorks/HowItWorks";
import { FeaturedThumbnails } from "@/components/Works/FeaturedThumbnails";
import { InstagramShowcase } from "@/components/InstagramShowcase/InstagramShowcase";
import { Services } from "@/components/Services/Services";
import { Testimonials } from "@/components/Testimonials/Testimonials";
import { About } from "@/components/About/About";
import { Contact } from "@/components/Contact/Contact";
import { Footer } from "@/components/Footer/Footer";
import { ScrollReveal } from "@/components/ScrollReveal";
import Lenis from "lenis";

export default function Home() {
  useEffect(() => {
    // Initialize Lenis for smooth scrolling
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
    });

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    // Cleanup on unmount
    return () => {
      lenis.destroy();
    };
  }, []);

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "name": "SmartAdverts",
    "image": "https://smartadverts.in/insta-profile.jpg",
    "url": "https://smartadverts.in",
    "telephone": "",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Hyderabad, Telangana",
      "addressLocality": "Hyderabad",
      "addressRegion": "TS",
      "postalCode": "500001",
      "addressCountry": "IN"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 17.385,
      "longitude": 78.4867
    },
    "openingHoursSpecification": {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday"
      ],
      "opens": "09:00",
      "closes": "21:00"
    },
    "sameAs": [
      "https://www.instagram.com/smartadverts_/"
    ],
    "priceRange": "8000INR - 50000INR",
    "description": "Professional design and editing subscription starting for Businesses. Get high-converting YouTube thumbnails and branding."
  };

  return (
    <main className="bg-black text-white min-h-screen selection:bg-orange-500 selection:text-white overflow-x-hidden">
      {/* JSON-LD for SEO */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      
      <Navbar />
      
      {/* Hero doesn't need ScrollReveal, it has its own complex entry */}
      <Hero />
      
      {/* Dynamic Reveal: Slide Up */}
      <ScrollReveal direction="up" distance={80} delay={0.1}>
          <HowItWorks />
      </ScrollReveal>

      {/* Dynamic Reveal: Slide Left */}
      <ScrollReveal direction="left" distance={100}>
          <FeaturedThumbnails />
      </ScrollReveal>

      {/* Dynamic Reveal: Slide Right */}
      <ScrollReveal direction="right" distance={100}>
          <InstagramShowcase />
      </ScrollReveal>

      {/* Dynamic Reveal: Scaling Focus */}
      <ScrollReveal direction="none" scale={0.9} duration={1.2}>
          <Services />
      </ScrollReveal>

      {/* Dynamic Reveal: Standard Up */}
      <ScrollReveal direction="up" distance={60}>
          <Testimonials />
      </ScrollReveal>

      {/* Dynamic Reveal: Slide Left */}
      <ScrollReveal direction="left" distance={100}>
          <About />
      </ScrollReveal>

      <Contact />
      <Footer />
    </main>
  );
}
