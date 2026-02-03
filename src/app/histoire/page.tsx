"use client";

import CollageSection from "@/components/CollageSection";
import Image from "next/image";
import { motion } from "framer-motion";

export default function Histoire() {
    return (
        <div className="bg-[#FDFBF7] min-h-screen relative overflow-x-hidden">
            {/* GLOBAL PATTERN BACKGROUND */}
            <div className="fixed inset-0 pointer-events-none z-0">
                <div className="absolute top-0 right-0 w-1/3 h-full bg-berber-zigzag opacity-5" />
                <div className="absolute bottom-0 left-0 w-1/3 h-full bg-berber-diamond opacity-5" />
                <div className="absolute inset-0 pattern-tattoo-overlay opacity-5 mix-blend-multiply" />
            </div>

            <main className="pt-20 md:pt-32 relative z-10">

                {/* HEADER - CLEAN BOOK DISPLAY */}
                <section className="relative h-[40vh] md:h-[60vh] flex items-center justify-center px-4 md:px-6">
                    {/* No Dark Background/Overlay - Pure Transparency over global textures */}

                    {/* MOROCCAN ARCH SILHOUETTE - "Magical Touch" - Hidden on mobile */}
                    <div className="absolute inset-0 hidden md:flex items-center justify-center pointer-events-none z-0">
                        <svg viewBox="0 0 200 300" className="w-full h-full max-w-md max-h-[80vh] fill-[#3E2b26] opacity-[0.03]">
                            <path d="M100 0 C 60 0 40 40 40 70 V 300 H 160 V 70 C 160 40 140 0 100 0 Z" />
                        </svg>
                    </div>

                    {/* The Book Container - Reduced Size */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 1.5, ease: "easeOut" }}
                        className="relative z-10 w-full max-w-[200px] md:max-w-sm aspect-[3/4] flex items-center justify-center"
                    >
                        {/* Book Image */}
                        <Image
                            src="/images/history-book.png"
                            alt="Livre d'Histoire"
                            fill
                            className="object-contain drop-shadow-2xl hover:scale-105 transition-transform duration-700"
                        />
                    </motion.div>
                </section>


                {/* VIDEO SECTION - Clear & Visible to All Visitors */}
                <section className="relative py-10 md:py-16 bg-[#3E2b26]">
                    {/* Decorative Pattern */}
                    <div className="absolute inset-0 bg-berber-diamond opacity-10" />

                    <div className="max-w-5xl mx-auto px-4 md:px-6 relative z-10">
                        {/* Section Title */}
                        <div className="text-center mb-6 md:mb-10">
                            <h2 className="font-heading text-2xl md:text-4xl text-[#E7D2A9] mb-2 md:mb-3">Notre Histoire en Images</h2>
                            <p className="font-serif text-base md:text-lg text-[#E7D2A9]/70 italic">Un voyage au cœur de la tradition Ghriba</p>
                        </div>

                        {/* Video Player - Cinema Style */}
                        <div className="relative aspect-video rounded-lg overflow-hidden shadow-2xl border-2 md:border-4 border-[#E7D2A9]/20">
                            <video
                                autoPlay
                                loop
                                muted
                                playsInline
                                controls
                                className="w-full h-full object-cover"
                            >
                                <source src="/videos/ghriba-story.mp4" type="video/mp4" />
                                Votre navigateur ne supporte pas la lecture vidéo.
                            </video>
                        </div>
                    </div>
                </section>

                <div className="relative">

                    {/* CONTENT SECTIONS */}

                    <div className="relative">
                        {/* Section Specific Pattern */}
                        <div className="absolute top-20 left-0 w-full h-96 bg-berber-diamond opacity-10 -z-10 clip-torn-paper" />
                        <CollageSection
                            mainImage="/images/collage-mosque.jpg"
                            title="L'Architecture du Goût"
                            description="Comme les mosaïques de nos mosquées, chaque ghriba est un assemblage précis. Un équilibre fragile entre le visible et l'invisible, le croustillant et le fondant."
                            arabicAnnotation="تُرَاث"
                            pattern="cross"
                        />
                    </div>

                    <div className="relative py-12">
                        {/* Pattern Strip */}
                        <div className="absolute top-0 right-0 w-1/4 h-full bg-berber-zigzag opacity-10 -z-10" />
                        <CollageSection
                            mainImage="/images/collage-medina.jpg"
                            title="L'Âme de la Médina"
                            description="Nous ne vendons pas seulement des gâteaux. Nous vendons l'atmosphère des ruelles de Tanger, l'odeur des fours communaux, et le bruit des conversations matinales."
                            arabicAnnotation="أَصَالَة"
                            reversed
                            pattern="diamond"
                        />
                    </div>

                    <div className="relative">
                        <div className="absolute bottom-0 left-0 w-full h-96 bg-berber-cross opacity-10 -z-10" />
                        <CollageSection
                            mainImage="/images/collage-flavors.jpg"
                            title="Le Voyage des Saveurs"
                            description="Tout commence ici. La sélection des amandes, la pureté du safran, la fraicheur du beurre. Aucun compromis sur la qualité, car c'est le respect que nous devons à nos aïeux."
                            arabicAnnotation="جَوْدَة"
                            pattern="lines"
                        />
                    </div>

                    {/* NEW SECTIONS ADDED */}

                    <div className="relative py-12">
                        <div className="absolute top-10 right-0 w-1/3 h-full bg-berber-diamond opacity-10 -z-10" />
                        <CollageSection
                            mainImage="/images/collage-hands.jpg"
                            title="Le Geste Ancestral"
                            description="Il n'y a pas de machine ici. Juste la chaleur des paumes et la mémoire des muscles. Chaque ghriba est façonnée par une main qui a appris de celle de sa mère."
                            arabicAnnotation="يَدَوِي"
                            reversed
                            pattern="diamond"
                        />
                    </div>

                    <div className="relative">
                        <div className="absolute bottom-0 left-0 w-full h-96 bg-berber-zigzag opacity-10 -z-10" />
                        <CollageSection
                            mainImage="/images/collage-secrets-famille.png"
                            title="Secrets de Famille"
                            description="Le dosage est un mystère gardé dans le carnet de Mi Fatima. Une pincée de gomme arabique, une note de cannelle... L'équilibre parfait entre la terre et le ciel."
                            arabicAnnotation="سِرّ"
                            pattern="cross"
                        />
                    </div>

                </div>{/* End of Video Background Container */}

            </main>
        </div>
    );
}
