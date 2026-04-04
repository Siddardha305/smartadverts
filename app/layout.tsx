import type { Metadata } from "next";
import { Outfit } from "next/font/google";
import "./globals.css";

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
  weight: ["300", "400", "500", "600", "700", "800", "900"],
});

import Script from "next/script";
import "@/lib/firebase"; // Initialize Firebase immediately


const siteConfig = {
  name: "SmartAdverts | Creative Design Studio",
  description: "Professional graphic design and video editing subscription for businesses. High-quality designs for social media, YouTube thumbnails, and marketing materials delivered in 24 hours.",
  url: "https://smartadverts.in",
  ogImage: "https://smartadverts.in/og-image.jpg",
  keywords: [
    "graphic design subscription",
    "video editing services",
    "YouTube thumbnail maker",
    "social media design agency",
    "unlimited design subscription",
    "marketing design for small business",
    "logo design services",
    "SmartAdverts",
    "creative studio India"
  ],
  googleAnalyticsId: "G-NE0HZLY33B" // Firebase Measurement ID
};

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: siteConfig.name,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  keywords: siteConfig.keywords,
  authors: [
    {
      name: "SmartAdverts Team",
      url: "https://smartadverts.in",
    },
  ],
  creator: "SmartAdverts",
  publisher: "SmartAdverts",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteConfig.url,
    title: siteConfig.name,
    description: siteConfig.description,
    siteName: siteConfig.name,
    images: [
      {
        url: siteConfig.ogImage,
        width: 1200,
        height: 630,
        alt: siteConfig.name,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.name,
    description: siteConfig.description,
    images: [siteConfig.ogImage],
    creator: "@smartadverts_",
  },
  icons: {
    icon: "/logo/smartadvertslogo.png",
    apple: "/logo/smartadvertslogo.png",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth" suppressHydrationWarning>
      <head>
        {/* Google Analytics */}
        <Script
          strategy="afterInteractive"
          src={`https://www.googletagmanager.com/gtag/js?id=${siteConfig.googleAnalyticsId}`}
        />
        <Script
          id="gtag-init"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', '${siteConfig.googleAnalyticsId}', {
                page_path: window.location.pathname,
              });
            `,
          }}
        />
      </head>
      <body className={`${outfit.variable} font-sans antialiased bg-black text-white`} suppressHydrationWarning={true}>
        {children}
      </body>
    </html>
  );
}
