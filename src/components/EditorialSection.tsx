"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

interface EditorialSectionProps {
    image: string;
    title: string;
    subtitle: string;
    description: string;
    reversed?: boolean;
    ctaText?: string;
    ctaLink?: string;
    pattern?: "cross" | "diamond" | "lines";
}

export default function EditorialSection({
    image,
    title,
    subtitle,
    description,
    reversed = false,
    ctaText,
    ctaLink,
    pattern = "diamond"
}: EditorialSectionProps) {

    return (
        <section className="relative py-32 overflow-hidden">
            {/* Background Tattoo - Floating */}
            <div className={`absolute top-1/2 ${reversed ? 'right-0' : 'left-0'} -translate-y-1/2 w-[500px] h-[500px] opacity-[0.02] pointer-events-none`}>
                {/* Simple SVG Shape depending on pattern prop - creating reusable Svg would be better but simple inline for now */}
                {pattern === "diamond" && (
                    <svg viewBox="0 0 100 100" fill="currentColor" className="w-full h-full text-[#4E342E]">
                        <path d="M50 0L100 50L50 100L0 50Z" />
                    </svg>
                )}
                {pattern === "cross" && (
                    <svg viewBox="0 0 100 100" fill="currentColor" className="w-full h-full text-[#38634A]">
                        <rect x="40" y="0" width="20" height="100" />
                        <rect x="0" y="40" width="100" height="20" />
                    </svg>
                )}
            </div>

            <div className={`grid-editorial ${reversed ? 'reversed' : ''}`}>

                {/* Image Side */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 1, ease: "easeOut" }}
                    viewport={{ once: true }}
                    className="image relative h-[600px] w-full"
                >
                    <div className="reveal-image-container h-full w-full relative z-10">
                        <Image
                            src={image}
                            alt={title}
                            fill
                            className="reveal-image object-cover"
                        />
                    </div>

                    {/* Decorative Offset Border */}
                    <div className={`absolute top-8 ${reversed ? '-left-8' : '-right-8'} w-full h-full border border-[#4E342E]/20 z-0`} />
                </motion.div>

                {/* Content Side */}
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    viewport={{ once: true }}
                    className="content space-y-8"
                >
                    <span className="text-overline tracking-[0.5em] block">{subtitle}</span>

                    <h2 className="heading-lg text-[#2A1D1A]">
                        {title}
                    </h2>

                    <p className="text-lg text-[#4E342E]/80 leading-relaxed font-light max-w-md">
                        {description}
                    </p>

                    {ctaLink && (
                        <Link href={ctaLink} className="inline-block pt-4">
                            <span className="btn-luxe">
                                {ctaText || "Découvrir"}
                            </span>
                        </Link>
                    )}
                </motion.div>
            </div>
        </section>
    );
}
