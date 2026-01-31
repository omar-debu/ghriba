"use client";

import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/autoplay";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectFade, Autoplay } from "swiper/modules";

export default function HeroSection() {
    const slides = [
        { id: 1, image: "/images/mi-fatima-sketch.jpg", subtitle: "L'Héritage de Tanger" },
        { id: 2, image: "/images/collage-mosque.jpg", subtitle: "Architecture du Goût" },
        { id: 3, image: "/images/ghriba.jpg", subtitle: "La Tradition Pure" },
    ];

    return (
        <section className="relative h-screen w-full overflow-hidden bg-[#4E342E]">
            <Swiper
                modules={[EffectFade, Autoplay]}
                effect="fade"
                autoplay={{ delay: 5000, disableOnInteraction: false }}
                loop={true}
                className="h-full w-full"
            >
                {slides.map((slide) => (
                    <SwiperSlide key={slide.id}>
                        <div className="relative w-full h-full">
                            <Image
                                src={slide.image}
                                alt="Hero"
                                fill
                                className="object-cover opacity-60"
                                priority
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-[#4E342E] via-transparent to-[#4E342E]/30" />
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>

            <div className="absolute inset-0 flex flex-col items-center justify-center z-20 text-center px-4">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1.2 }}
                >
                    <Image
                        src="/images/slogan-arabic.png"
                        alt="Slogan"
                        width={700}
                        height={200}
                        className="mb-10 filter invert drop-shadow-2xl mx-auto"
                    />

                    <h2 className="font-heading text-xl md:text-3xl tracking-[0.3em] uppercase text-[#E7D2A9] mb-8 font-extrabold shadow-black drop-shadow-md">
                        Haut de Gamme Traditionnel
                    </h2>

                    <div className="w-24 h-1.5 bg-[#E7D2A9] mx-auto rounded-full shadow-lg" />
                </motion.div>
            </div>
        </section>
    );
}
