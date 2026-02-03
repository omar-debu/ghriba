"use client";

import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";

export default function Navbar() {
    const [scrolled, setScrolled] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const pathname = usePathname();

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    // Close mobile menu on route change
    useEffect(() => {
        setMobileMenuOpen(false);
    }, [pathname]);

    const navLinks = [
        { name: "Accueil", href: "/" },
        { name: "Histoire", href: "/histoire" },
        { name: "Mi Fatima", href: "/mi-fatima" },
        { name: "Contact", href: "/contact" },
    ];

    return (
        <>
            <motion.nav
                initial={{ y: -100 }}
                animate={{ y: 0 }}
                transition={{ duration: 0.8 }}
                className={`fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-4 md:px-12 transition-all duration-700 ${scrolled ? "bg-black/80 backdrop-blur-md py-3 md:py-4 shadow-2xl" : "bg-transparent py-4 md:py-8"
                    }`}
            >
                {/* Logo */}
                <Link href="/" className="relative z-50 group">
                    <Image
                        src="/images/logo ghriba.png"
                        alt="Ghriba Logo"
                        width={55}
                        height={55}
                        className="md:w-[70px] md:h-[70px] brightness-0 invert opacity-80 group-hover:opacity-100 group-hover:scale-110 transition-all duration-500"
                    />
                </Link>

                {/* Desktop Links */}
                <div className="hidden md:flex items-center gap-12">
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

                {/* Mobile Hamburger Button */}
                <button
                    onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                    className="md:hidden relative z-50 w-10 h-10 flex flex-col items-center justify-center gap-1.5"
                    aria-label="Toggle menu"
                >
                    <span className={`block w-6 h-0.5 bg-white transition-all duration-300 ${mobileMenuOpen ? "rotate-45 translate-y-2" : ""}`} />
                    <span className={`block w-6 h-0.5 bg-white transition-all duration-300 ${mobileMenuOpen ? "opacity-0" : ""}`} />
                    <span className={`block w-6 h-0.5 bg-white transition-all duration-300 ${mobileMenuOpen ? "-rotate-45 -translate-y-2" : ""}`} />
                </button>
            </motion.nav>

            {/* Mobile Menu Overlay */}
            <AnimatePresence>
                {mobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, x: "100%" }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: "100%" }}
                        transition={{ duration: 0.3, ease: "easeInOut" }}
                        className="fixed inset-0 z-40 bg-[#3E2b26] flex flex-col items-center justify-center gap-8"
                    >
                        {navLinks.map((link, index) => (
                            <motion.div
                                key={link.name}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: index * 0.1 }}
                            >
                                <Link
                                    href={link.href}
                                    className={`font-heading text-2xl uppercase tracking-[0.3em] text-[#E7D2A9] hover:text-white transition-colors ${pathname === link.href ? "text-white" : ""}`}
                                >
                                    {link.name}
                                </Link>
                            </motion.div>
                        ))}
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
}

