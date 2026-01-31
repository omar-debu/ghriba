"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";

export default function Navbar() {
    const [scrolled, setScrolled] = useState(false);
    const pathname = usePathname();

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const navLinks = [
        { name: "Accueil", href: "/" },
        { name: "Histoire", href: "/histoire" },
        { name: "Mi Fatima", href: "/mi-fatima" },
        { name: "Contact", href: "/contact" },
    ];

    return (
        <motion.nav
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.8 }}
            className={`fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 py-6 md:px-12 transition-all duration-700 ${scrolled ? "bg-black/80 backdrop-blur-md py-4 shadow-2xl" : "bg-transparent py-8"
                }`}
        >
            {/* 1. Logo (Pure Symbol) */}
            <Link href="/" className="relative z-50 group">
                <Image
                    src="/images/logo ghriba.png"
                    alt="Ghriba Logo"
                    width={50}
                    height={50}
                    className="brightness-0 invert opacity-80 group-hover:opacity-100 group-hover:scale-110 transition-all duration-500"
                />
            </Link>

            {/* 2. Minimal Links */}
            <div className="flex items-center gap-12">
                <div className="hidden md:flex gap-12">
                    {navLinks.map((link) => (
                        <Link
                            key={link.name}
                            href={link.href}
                            className={`font-heading text-xs uppercase tracking-[0.2em] transition-all duration-500 relative group mix-blend-difference text-white/90 hover:text-white ${pathname === link.href ? "opacity-100 font-bold" : "opacity-60 hover:opacity-100"
                                }`}
                        >
                            {link.name}
                            <span className={`absolute -bottom-2 left-1/2 -translate-x-1/2 w-1 h-1 bg-[#E7D2A9] rounded-full transition-all duration-300 ${pathname === link.href ? "opacity-100" : "opacity-0 group-hover:opacity-100"}`} />
                        </Link>
                    ))}
                </div>
            </div>
        </motion.nav>
    );
}
