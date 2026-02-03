"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import { useRef } from "react";

interface ArtSectionProps {
    image: string;
    title: string;
    subtitle: string;
    text: string;
    index: number;
    arabic?: string;
}

export default function ArtSection({ image, title, subtitle, text, index, arabic }: ArtSectionProps) {
    const ref = useRef(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start end", "end start"]
    });

    // Parallax Effects
    const yImage = useTransform(scrollYProgress, [0, 1], ["-10%", "10%"]);
    const yText = useTransform(scrollYProgress, [0, 1], ["20%", "-20%"]);
    const rotate = useTransform(scrollYProgress, [0, 1], index % 2 === 0 ? [-5, 5] : [5, -5]);
    const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);

    const isEven = index % 2 === 0;

    return (
        <section ref={ref} className="min-h-screen relative flex items-center justify-center py-12 md:py-24 overflow-hidden">

            {/* Background Text (Massive) - Hidden on mobile for cleaner look */}
            <div className="absolute inset-0 hidden md:flex items-center justify-center pointer-events-none opacity-5 overflow-hidden">
                <h1 className="font-mega text-[20vw] whitespace-nowrap text-[#4E342E]">{title}</h1>
            </div>

            <div className={`relative z-10 w-full max-w-[1600px] px-4 md:px-6 grid grid-cols-1 lg:grid-cols-12 gap-6 md:gap-12 items-center`}>

                {/* Image Block (Floating) */}
                <motion.div
                    style={{ y: yImage, rotate }}
                    className={`col-span-1 lg:col-span-7 relative h-[50vh] md:h-[70vh] w-full ${isEven ? 'lg:order-1' : 'lg:order-2 lg:col-start-6'}`}
                >
                    <div className="absolute inset-0 bg-[#E7D2A9] transform translate-x-2 translate-y-2 md:translate-x-4 md:translate-y-4 shadow-2xl skew-x-1 md:skew-x-2" />
                    <div className="relative h-full w-full overflow-hidden border-2 md:border-4 border-[#FDFBF7] shadow-2xl">
                        <Image src={image} alt={title} fill className="object-cover" />
                    </div>

                    {/* Floating Stamp/Deco - Smaller on mobile */}
                    <motion.div
                        animate={{ y: [0, -20, 0] }}
                        transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
                        className="absolute -top-6 -right-4 md:-top-12 md:-right-12 w-20 h-20 md:w-32 md:h-32 lg:w-48 lg:h-48 z-20 drop-shadow-xl"
                    >
                        <svg viewBox="0 0 100 100" className="w-full h-full text-[#8B2E24] opacity-80 animate-spin-slow">
                            <path id="curve" d="M 50, 50 m -37, 0 a 37,37 0 1,1 74,0 a 37,37 0 1,1 -74,0" fill="transparent" />
                            <text fill="currentColor" fontSize="14">
                                <textPath href="#curve">
                                    • HALWA DYAL L'KERAMA • GHRIBA •
                                </textPath>
                            </text>
                        </svg>
                        <div className="absolute inset-0 flex items-center justify-center">
                            <div className="w-12 h-12 md:w-16 md:h-16 lg:w-20 lg:h-20 bg-[#E7D2A9] rounded-full flex items-center justify-center border-2 border-[#8B2E24]">
                                <span className="font-heading font-black text-[#8B2E24] text-lg md:text-xl lg:text-2xl">1974</span>
                            </div>
                        </div>
                    </motion.div>
                </motion.div>

                {/* Text Block (Overlapping) - No negative margins on mobile */}
                <motion.div
                    style={{ y: yText, opacity }}
                    className={`col-span-1 lg:col-span-5 z-20 ${isEven ? 'lg:order-2 lg:-ml-12' : 'lg:order-1 lg:-mr-12 lg:text-right'}`}
                >
                    <div className="bg-[#F5F0E6]/90 p-6 md:p-12 shadow-xl backdrop-blur-sm border-2 border-[#4E342E]/10">
                        {arabic && <h3 className="font-arabic text-4xl md:text-6xl text-[#E7D2A9] mb-2 md:mb-4 drop-shadow-md">{arabic}</h3>}
                        <h2 className="font-mega text-3xl sm:text-4xl md:text-6xl lg:text-8xl text-[#4E342E] leading-[0.85] mb-4 md:mb-8">{subtitle}</h2>
                        <p className="font-serif text-base md:text-xl lg:text-2xl leading-relaxed text-[#4E342E] font-medium">
                            {text}
                        </p>
                    </div>
                </motion.div>

            </div>
        </section>
    );
}

