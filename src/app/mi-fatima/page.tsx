"use client";

import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export default function MiFatima() {
    const containerRef = useRef(null);
    const { scrollYProgress } = useScroll({ target: containerRef });

    // Parallax for Background Patterns
    const patternY = useTransform(scrollYProgress, [0, 1], [0, -200]);

    return (
        <div className="bg-[#3E2b26] min-h-screen text-[#F5F0E6] overflow-x-hidden" ref={containerRef}>
            {/* GLOBAL TEXTURE & PATTERN */}
            <div className="texture-overlay opacity-20" />
            <div className="fixed inset-0 pointer-events-none z-0">
                <motion.div style={{ y: patternY }} className="absolute inset-0 opacity-10 bg-[url('/images/berber-tattoos-sheet.jpg')] bg-repeat bg-[length:400px]" />
            </div>

            <main className="relative z-10">

                {/* ---------------------------------------------------------
            HERO: THE PORTRAIT
           --------------------------------------------------------- */}
                {/* Adjusted padding: pb-0 */}
                <section className="relative min-h-screen flex items-center px-4 md:px-12 overflow-hidden pb-16 md:pb-32 pt-20 md:pt-0">
                    <div className="absolute inset-x-0 top-0 h-[50vh] bg-gradient-to-b from-black/60 to-transparent z-10" />

                    <div className="grid grid-cols-1 lg:grid-cols-12 w-full relative z-20 items-center gap-8">

                        {/* Text Block */}
                        <div className="lg:col-span-7 relative z-30 lg:-mr-24 mb-8 lg:mb-0 order-2 lg:order-1">
                            <motion.div
                                initial={{ width: 0 }}
                                animate={{ width: "100px" }}
                                transition={{ duration: 1.5 }}
                                className="h-1.5 md:h-2 bg-[#8B2E24] mb-4 md:mb-8"
                            />
                            <motion.h1
                                initial={{ opacity: 0, x: -50 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ duration: 1 }}
                                className="font-mega text-5xl sm:text-6xl md:text-[10rem] text-[#E7D2A9] leading-[0.8]"
                            >
                                MI<br />FATIMA
                            </motion.h1>
                            <div className="mt-4 md:mt-8 bg-[#3E2b26]/90 backdrop-blur-sm p-4 md:p-6 border-l-4 border-[#E7D2A9] max-w-xl shadow-2xl">
                                <p className="font-serif text-lg md:text-2xl italic text-white/90 leading-relaxed">
                                    "73 ans. 50 ans de patience. Des mains qui ont façonné l'histoire d'une famille, une ghriba à la fois."
                                </p>
                            </div>
                        </div>

                        {/* Image Block */}
                        <div className="lg:col-span-5 relative h-[40vh] md:h-[70vh] w-full rotate-1 md:rotate-3 hover:rotate-0 transition-transform duration-1000 origin-center order-1 lg:order-2">
                            <div className="absolute inset-0 bg-[#E7D2A9] transform translate-x-2 translate-y-2 md:translate-x-4 md:translate-y-4">
                                <div className="bg-berber-diamond w-full h-full opacity-20" />
                            </div>
                            <div className="relative h-full w-full grayscale contrast-125 border-2 md:border-4 border-[#F5F0E6] shadow-[0_30px_60px_rgba(0,0,0,0.5)]">
                                <Image src="/images/sketch-smile.jpg" alt="Portrait" fill className="object-cover" priority />
                            </div>
                        </div>
                    </div>
                </section>

                {/* ---------------------------------------------------------
            QUOTE BREAKER (ALIGNED & JAGGED)
           --------------------------------------------------------- */}
                {/* Removed 'clip-torn-paper' class to use SVG divider instead */}
                <section className="relative pt-0 pb-56 bg-[#F5F0E6] text-[#3E2b26] z-20 -mt-32 shadow-[0_-20px_50px_rgba(0,0,0,0.3)]">
                    <div className="absolute inset-0 bg-berber-zigzag opacity-5" />
                    <div className="max-w-4xl mx-auto px-6 text-center relative z-10">

                        {/* CONTAINER FOR LOCKED ALIGNMENT */}
                        <div className="relative inline-block w-full">
                            {/* 1974 - Hidden on mobile */}
                            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-[60%] text-[80px] md:text-[150px] text-[#3E2b26]/5 font-mega leading-none select-none z-0 hidden sm:block">
                                1974
                            </div>

                            {/* Quote Image */}
                            <div className="relative z-10 flex justify-center transform hover:scale-105 transition-transform duration-700">
                                <Image src="/images/quote-dignity.png" alt="Quote" width={750} height={300} className="object-contain drop-shadow-xl w-full max-w-[90vw] md:max-w-none" />
                            </div>
                        </div>

                        {/* French Quote */}
                        <p className="font-serif text-lg md:text-2xl italic text-[#8B2E24] max-w-2xl mx-auto bg-[#F5F0E6]/80 px-4 md:px-8 py-3 md:py-4 backdrop-blur-sm rounded-organic shadow-sm relative z-20 mt-4 md:mt-8">
                            "Une nécessité devenue un art. Une survie devenue une légende."
                        </p>

                    </div>

                    {/* CUSTOM HIGH-AMPLITUDE ZIGZAG DIVIDER - TEXTURED & BROWN */}
                    {/* Moroccan Architectural Silhouette: Evenly spaced peaks, variable heights & inclinations */}
                    <div className="absolute bottom-0 left-0 w-full h-[80px] md:h-[120px] z-30 translate-y-[1px] overflow-hidden">
                        <div
                            className="relative w-full h-full bg-[#3E2b26]"
                            style={{
                                clipPath: "polygon(0% 100%, 7.14% 0%, 14.28% 100%, 21.42% 45%, 28.56% 100%, 35.7% 15%, 42.84% 100%, 49.98% 35%, 57.12% 100%, 64.26% 5%, 71.4% 100%, 78.54% 40%, 85.68% 100%, 92.82% 10%, 100% 100%)"
                            }}
                        >
                            {/* Engraved Texture: Tattoos overlay + Subtle Gradient */}
                            <div className="absolute inset-0 bg-[url('/images/berber-tattoos-sheet.jpg')] opacity-20 bg-repeat bg-[length:300px] mix-blend-overlay" />
                            <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/10 mix-blend-multiply" />
                        </div>
                    </div>
                </section>

                {/* ---------------------------------------------------------
            NARRATIVE ARC
           --------------------------------------------------------- */}

                {/* CHAPTER 1: COLLABORATION */}
                {/* Ensure no top margin overlap conflicts with SVG */}
                <section className="py-12 md:py-24 bg-[#E7D2A9] relative z-20 overflow-visible mt-0">
                    <div className="absolute inset-0 bg-berber-cross opacity-10 mix-blend-multiply" />

                    <div className="max-w-6xl mx-auto px-4 md:px-6 relative pt-0">
                        {/* Visual Anchor */}
                        <div className="relative w-full md:w-2/3 h-[300px] md:h-[600px] shadow-2xl border-4 md:border-8 border-white rotate-0 md:rotate-1 z-10">
                            <Image src="/images/sketch-collaboration.jpg" alt="Collaboration" fill className="object-cover grayscale" />
                        </div>

                        {/* Text Overlay Card */}
                        <div className="relative md:absolute md:top-20 md:right-0 md:w-1/2 bg-[#F5F0E6] p-6 md:p-12 shadow-collage rotate-0 md:-rotate-1 z-20 border-l-4 md:border-l-8 border-[#3E2b26] mt-6 md:mt-0">
                            <div className="absolute -top-4 md:-top-6 left-4 md:-left-6 bg-[#8B2E24] text-[#E7D2A9] px-4 md:px-6 py-1.5 md:py-2 font-mega text-lg md:text-2xl shadow-lg">LE DUO</div>
                            <h2 className="font-heading text-2xl md:text-4xl mb-4 md:mb-6 text-[#3E2b26] mt-4 md:mt-0">La Main et la Parole</h2>
                            <p className="font-serif text-base md:text-lg leading-relaxed text-[#3E2b26]/90 mb-3 md:mb-4">
                                Pendant des décennies, ils formaient un seul corps. Lui s'occupait de la vente, portant les plateaux à travers les ruelles de Tanger, tandis qu'elle orchestrait la magie dans la cuisine.
                            </p>
                            <p className="font-serif text-base md:text-lg leading-relaxed text-[#3E2b26]/90">
                                Aujourd'hui, une douleur lancinante aux pieds a forcé son mari à s'arrêter. Il regarde désormais ces gestes qu'il connaît par cœur, impuissant mais admiratif.
                            </p>
                        </div>
                    </div>
                </section>

                {/* CHAPTER 2: STRUGGLE */}
                <section className="py-16 md:py-32 bg-[#3E2b26] relative z-20 overflow-hidden">
                    <div className="absolute top-0 right-0 w-1/2 h-full bg-berber-diamond opacity-5" />

                    <div className="max-w-6xl mx-auto px-4 md:px-6 relative flex flex-col md:flex-row items-center justify-end gap-6">

                        <div className="order-2 md:order-1 relative md:absolute md:left-0 md:top-32 md:w-1/2 bg-[#4E342E] p-6 md:p-12 shadow-2xl rotate-0 md:rotate-1 z-30 border-l-4 md:border-r-8 md:border-l-0 border-[#E7D2A9]">
                            <div className="absolute -top-4 md:-top-6 right-4 md:-right-6 bg-[#E7D2A9] text-[#3E2b26] px-4 md:px-6 py-1.5 md:py-2 font-mega text-lg md:text-2xl shadow-lg">LE LABEUR</div>
                            <h2 className="font-heading text-2xl md:text-4xl mb-4 md:mb-6 text-[#E7D2A9] mt-4 md:mt-0">L'Épreuve Quotidienne</h2>
                            <p className="font-serif text-base md:text-lg leading-relaxed text-[#F5F0E6]/90 mb-3 md:mb-4">
                                Le loyer augmente, les factures s'accumulent. Leur fils, chauffeur de taxi, lutte aussi contre la ville. C'est un combat invisible qui se joue derrière chaque porte de la médina.
                            </p>
                            <blockquote className="border-l-4 border-[#8B2E24] pl-4 italic text-[#E7D2A9] text-lg md:text-xl">
                                "Je rêve juste d'un toit stable. De fermer les yeux sans la peur du lendemain."
                            </blockquote>
                        </div>

                        <div className="order-1 md:order-2 relative w-full md:w-2/3 h-[300px] md:h-[600px] shadow-2xl border-4 md:border-8 border-white/10 rotate-0 md:-rotate-1 z-10">
                            <Image src="/images/sketch-stairs.jpg" alt="Struggle" fill className="object-cover grayscale contrast-125" />
                            <div className="absolute inset-0 bg-[#3E2b26]/20 mix-blend-multiply" />
                        </div>
                    </div>
                </section>

                {/* CHAPTER 3: PHILOSOPHY */}
                <section className="py-24 bg-[#F5F0E6] relative z-20 clip-torn-paper-top">
                    <div className="absolute inset-0 bg-berber-zigzag opacity-10" />

                    <div className="max-w-5xl mx-auto px-6 text-center space-y-12">
                        <div className="inline-block relative">
                            <h2 className="font-mega text-6xl md:text-8xl text-[#3E2b26] opacity-90 relative z-10">SINCÉRITÉ</h2>
                            <div className="absolute bottom-4 left-0 w-full h-8 bg-[#E7D2A9] -z-0 -rotate-1" />
                        </div>

                        <p className="font-serif text-2xl md:text-3xl leading-loose text-[#3E2b26] max-w-4xl mx-auto">
                            <span className="text-[#8B2E24] font-bold text-5xl mr-2">"</span>
                            L'amour ne vit pas dans le porte-monnaie, il vit dans le cœur. C'est la patience qui fait tenir un couple pendant 50 ans. Nous sommes faits de granit et de miel.
                            <span className="text-[#8B2E24] font-bold text-5xl ml-2">"</span>
                        </p>

                        <div className="w-full flex justify-center items-center gap-4 opacity-60">
                            <div className="h-[1px] w-24 bg-[#3E2b26]" />
                            <div className="font-heading uppercase tracking-widest text-[#3E2b26]">Mi Fatima</div>
                            <div className="h-[1px] w-24 bg-[#3E2b26]" />
                        </div>
                    </div>
                </section>

                {/* GALLERY: THE LEGACY */}
                <section className="py-24 bg-[#3E2b26] relative z-10">
                    <div className="absolute inset-0 bg-[url('/images/collage-souk.jpg')] opacity-20 bg-fixed bg-cover mix-blend-overlay" />

                    <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-6 relative z-10">
                        <motion.div whileHover={{ y: -10 }} className="aspect-[3/4] relative border-4 border-[#F5F0E6] shadow-2xl group cursor-pointer">
                            <Image src="/images/love.jpeg" alt="Complicité" fill className="object-cover grayscale group-hover:grayscale-0 transition-all duration-700" />
                            <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-black/80 to-transparent p-6 pt-24 text-center">
                                <span className="font-mega text-[#E7D2A9] text-xl tracking-widest">COMPLICITÉ</span>
                            </div>
                        </motion.div>

                        <motion.div whileHover={{ y: -10 }} className="aspect-[3/4] relative border-4 border-[#F5F0E6] shadow-2xl group cursor-pointer mt-0 md:-mt-12">
                            <Image src="/images/sketch-smile.jpg" alt="Espoir" fill className="object-cover grayscale group-hover:grayscale-0 transition-all duration-700" />
                            <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-black/80 to-transparent p-6 pt-24 text-center">
                                <span className="font-mega text-[#E7D2A9] text-xl tracking-widest">ESPOIR</span>
                            </div>
                        </motion.div>

                        <motion.div whileHover={{ y: -10 }} className="aspect-[3/4] relative border-4 border-[#F5F0E6] shadow-2xl group cursor-pointer">
                            <Image src="/images/mi-fatima-sketch.jpg" alt="Mémoire" fill className="object-cover grayscale group-hover:grayscale-0 transition-all duration-700" />
                            <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-black/80 to-transparent p-6 pt-24 text-center">
                                <span className="font-mega text-[#E7D2A9] text-xl tracking-widest">MÉMOIRE</span>
                            </div>
                        </motion.div>
                    </div>
                </section>

            </main>
        </div>
    );
}
