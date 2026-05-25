import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono, Inter, Space_Grotesk } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import NewHeader from "@/components/NewHeader";

const spaceGroteskHeading = Space_Grotesk({ subsets: ['latin'], variable: '--font-heading' });

const inter = Inter({ subsets: ['latin'], variable: '--font-sans' });

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
    { media: "(prefers-color-scheme: dark)", color: "#0a0a0a" },
  ],
};

export const metadata: Metadata = {
  metadataBase: new URL("https://www.jilanigemsandminerals.com"),
  title: {
    default: "Jilani International | Gems, Minerals & More",
    template: "%s | Jilani International",
  },
  description: "Wholesale supplier of rare gems and minerals including rubies, emeralds, sapphires, and gold ore. We also offer premium rugs, bags, and shoes from Pakistan.",
  keywords: ["gems", "minerals", "rubies", "emeralds", "sapphire", "gold ore", "wholesale gemstones", "rare minerals in Pakistan", "rough gemstones", "rugs", "bags", "shoes", "Jilani International"],
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://www.jilanigemsandminerals.com",
    siteName: "Jilani International",
    title: "Jilani International | Premium Gems, Minerals & Accessories",
    description: "Discover rare gems, minerals, rubies, emeralds, and sapphires from Pakistan. Explore our collection of premium rugs, bags, and shoes.",
    images: [
      {
        url: "/opengraph.png",
        width: 1200,
        height: 630,
        alt: "Jilani International Preview",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Jilani International | Gems, Minerals & More",
    description: "Discover rare gems, minerals, and more from Pakistan.",
    images: ["/opengraph.png"],
  },
  alternates: {
    canonical: "/",
  },
  robots: {
    index: true,
    follow: true,
  },
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={cn("h-full", "antialiased", geistSans.variable, geistMono.variable, "font-sans", inter.variable, spaceGroteskHeading.variable)}
    >
      <body className="min-h-dvh flex flex-col">
        {children}
      </body>
    </html>
  );
}
