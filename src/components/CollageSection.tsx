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
        <section className="py-16 md:py-32 relative overflow-hidden">
            <div className={`max-w-[1400px] mx-auto px-4 md:px-6 grid grid-cols-1 lg:grid-cols-2 gap-10 md:gap-20 items-center`}>

                {/* Visual Side (Collage) */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8 }}
                    className={`relative h-[350px] md:h-[500px] lg:h-[600px] w-full ${reversed ? 'order-1 lg:order-1' : 'order-1 lg:order-2'}`}
                >
                    {/* Background Pattern Blot */}
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[110%] h-[110%] bg-[#E7D2A9]/10 rounded-full blur-3xl -z-10" />

                    {/* Main Image (The Render/Collage) */}
                    <div className="absolute inset-2 md:inset-4 z-10 rounded-organic overflow-hidden shadow-collage rotate-1 transition-transform duration-700 hover:rotate-0 border-2 md:border-4 border-[#FDFBF7]">
                        <Image src={mainImage} alt={title} fill className="object-cover" />
                    </div>

                    {/* Secondary Image (Floating Card - Only if provided) */}
                    {secondaryImage && (
                        <motion.div
                            initial={{ y: 50, opacity: 0 }}
                            whileInView={{ y: 0, opacity: 1 }}
                            transition={{ delay: 0.3, duration: 0.8 }}
                            className={`absolute ${reversed ? '-right-2 -bottom-2 md:-right-4 md:-bottom-4' : '-left-2 -bottom-2 md:-left-4 md:-bottom-4'} w-32 h-40 md:w-48 md:h-64 rounded-organic overflow-hidden shadow-2xl border-2 md:border-4 border-[#FDFBF7] z-20 -rotate-3 hover:rotate-0 transition-transform duration-500`}
                        >
                            <Image src={secondaryImage} alt="Detail" fill className="object-cover" />
                        </motion.div>
                    )}

                    {/* Decoration: Berber Symbol (SVG) - Hidden on small mobile */}
                    <div className={`absolute -top-8 md:-top-16 ${reversed ? '-left-8 md:-left-16' : '-right-8 md:-right-16'} w-24 h-24 md:w-40 md:h-40 text-[#9E3B2F] opacity-15 z-0 hidden sm:block`}>
                        <img src="/images/arabic-quote-styled.png" className="w-full h-full object-contain opacity-20" alt="pattern" />
                    </div>
                </motion.div>

                {/* Text Side */}
                <div className={`space-y-4 md:space-y-8 ${reversed ? 'order-2 lg:order-2' : 'order-2 lg:order-1'}`}>
                    {arabicAnnotation && (
                        <div className="relative inline-block">
                            <h3 className="font-arabic text-5xl md:text-7xl text-[#E7D2A9]/80 leading-none drop-shadow-md">{arabicAnnotation}</h3>
                        </div>
                    )}

                    <h2 className="font-heading text-3xl md:text-5xl lg:text-6xl text-[#4E342E] leading-tight uppercase tracking-wide">
                        {title}
                    </h2>

                    <p className="font-serif text-base md:text-xl text-[#4E342E]/70 leading-relaxed font-light">
                        {description}
                    </p>

                    <div className="pt-2 md:pt-4">
                        <div className={`w-16 md:w-24 h-1.5 md:h-2 bg-[#38634A] rounded-full`} />
                    </div>
                </div>

            </div>
        </section>
    );
}

