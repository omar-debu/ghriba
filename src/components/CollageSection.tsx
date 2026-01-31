"use client";

import Image from "next/image";
import { motion } from "framer-motion";

interface CollageSectionProps {
    mainImage: string;
    secondaryImage?: string;
    title: string;
    description: string;
    arabicAnnotation?: string; // "SVG Text" simulation 
    reversed?: boolean;
    pattern?: "diamond" | "cross" | "lines";
}

export default function CollageSection({
    mainImage,
    secondaryImage,
    title,
    description,
    arabicAnnotation,
    reversed = false,
    pattern = "diamond"
}: CollageSectionProps) {
    return (
        <section className="py-32 relative overflow-hidden">
            <div className={`max-w-[1400px] mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-20 items-center ${reversed ? '' : ''}`}>

                {/* Visual Side (Collage) */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8 }}
                    className={`relative h-[600px] w-full ${reversed ? 'order-2 lg:order-1' : 'order-1 lg:order-2'}`}
                >
                    {/* Background Pattern Blot */}
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[110%] h-[110%] bg-[#E7D2A9]/10 rounded-full blur-3xl -z-10" />

                    {/* Main Image (The Render/Collage) */}
                    <div className="absolute inset-4 z-10 rounded-organic overflow-hidden shadow-collage rotate-1 transition-transform duration-700 hover:rotate-0 border-4 border-[#FDFBF7]">
                        <Image src={mainImage} alt={title} fill className="object-cover" />
                    </div>

                    {/* Secondary Image (Floating Card - Only if provided) */}
                    {secondaryImage && (
                        <motion.div
                            initial={{ y: 50, opacity: 0 }}
                            whileInView={{ y: 0, opacity: 1 }}
                            transition={{ delay: 0.3, duration: 0.8 }}
                            className={`absolute ${reversed ? '-right-4 -bottom-4' : '-left-4 -bottom-4'} w-48 h-64 rounded-organic overflow-hidden shadow-2xl border-4 border-[#FDFBF7] z-20 -rotate-3 hover:rotate-0 transition-transform duration-500`}
                        >
                            <Image src={secondaryImage} alt="Detail" fill className="object-cover" />
                        </motion.div>
                    )}

                    {/* Decoration: Berber Symbol (SVG) */}
                    <div className={`absolute -top-16 ${reversed ? '-left-16' : '-right-16'} w-40 h-40 text-[#9E3B2F] opacity-15 z-0`}>
                        <img src="/images/arabic-quote-styled.png" className="w-full h-full object-contain opacity-20" alt="pattern" />
                    </div>
                </motion.div>

                {/* Text Side */}
                <div className={`space-y-8 ${reversed ? 'order-1 lg:order-2 text-right lg:text-left' : 'order-2 lg:order-1'}`}>
                    {arabicAnnotation && (
                        <div className="relative inline-block">
                            <h3 className="font-arabic text-7xl text-[#E7D2A9]/80 leading-none drop-shadow-md">{arabicAnnotation}</h3>
                        </div>
                    )}

                    <h2 className="font-heading text-5xl md:text-6xl text-[#4E342E] leading-tight uppercase tracking-wide">
                        {title}
                    </h2>

                    <p className="font-serif text-xl text-[#4E342E]/70 leading-relaxed font-light">
                        {description}
                    </p>

                    <div className="pt-4">
                        <div className={`w-24 h-2 bg-[#38634A] rounded-full ${reversed ? 'ml-auto lg:ml-0' : ''}`} />
                    </div>
                </div>

            </div>
        </section>
    );
}
