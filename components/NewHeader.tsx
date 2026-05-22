"use client";

import { useScroll, useTransform, motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import NavLink from "./NavLink";

const leftLinks = [
    { name: "Gems", href: "/" },
    { name: "Minerals", href: "/minerals" },
    { name: "Others", href: "#" }
];

const rightLinks = [
    { name: "Contact Us", href: "#" },
    { name: "About Us", href: "/about" }
];



export default function NewHeader() {
    const { scrollY } = useScroll();

    // ── Row 1 (logo-only row) collapses from 96px → 0px
    const logoRowHeight = useTransform(scrollY, [0, 180], [96, 0]);
    const logoRowOpacity = useTransform(scrollY, [0, 120], [1, 0]);

    // ── Logo that lives inside the collapsing row
    //    width:  240px → 0   (disappears as row collapses)
    //    This is the "big" logo shown only when at top
    const bigLogoWidth = useTransform(scrollY, [0, 180], [500, 0]);
    const bigLogoHeight = useTransform(scrollY, [0, 180], [100, 0]);

    // ── Small logo in the nav row (row 2)
    //    Starts invisible (scale 0), grows to full size as scroll progresses
    const smallLogoScale = useTransform(scrollY, [60, 180], [0, 1]);
    const smallLogoOpacity = useTransform(scrollY, [60, 180], [0, 1]);

    return (
        <header className="sticky top-0 z-50 bg-background border-b border-border hidden md:block">
            <div className="bg-foreground h-8 flex items-center justify-center">
                <p className="text-background text-sm font-extralight">Jilani International</p>
            </div>

            {/* ── ROW 1 — big logo only ─────────────────────────── */}
            <motion.div
                style={{ height: logoRowHeight, opacity: logoRowOpacity }}
                className="overflow-hidden flex items-center justify-center"
            >
                <motion.div style={{ width: bigLogoWidth, height: bigLogoHeight }} className="relative">
                    <Image src="/logo3.png" alt="Jilani" fill className="object-contain" priority />
                </motion.div>
            </motion.div>

            {/* ── ROW 2 — nav + small logo slides in ──────────────── */}
            <div className="max-w-screen-xl mx-auto px-8 h-14 flex items-center justify-between">

                {/* Left nav */}
                <nav className="flex items-center gap-6">
                    {leftLinks.map((label) => (
                        <NavLink key={label.name} href={label.href} label={label.name} />
                    ))}
                </nav>

                {/* Centre logo — grows in as row 1 disappears */}
                <motion.div
                    style={{ scale: smallLogoScale, opacity: smallLogoOpacity }}
                    className="absolute left-1/2 -translate-x-1/2"
                >
                    <div className="relative w-28 h-10">
                        <Image src="/logo3.png" alt="Jilani" fill className="object-contain" priority />
                    </div>
                </motion.div>

                {/* Right nav */}
                <nav className="flex items-center gap-6">
                    {rightLinks.map((label) => (
                        <NavLink key={label.name} href={label.href} label={label.name} />
                    ))}
                </nav>

            </div>
        </header>
    );
}