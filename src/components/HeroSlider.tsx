"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade, Pagination } from "swiper/modules";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/pagination";

const slides = [
    {
        image: "/images/ghriba.jpg",
        titleFr: "Ghriba",
        titleAr: "غْرَيبَة",
        subtitle: "L'authenticité marocaine depuis 1974",
    },
    {
        image: "/images/mi fatiima.jpeg",
        titleFr: "Mi Fatima",
        titleAr: "مِي فَاطِمَة",
        subtitle: "50 ans de passion et de savoir-faire",
    },
    {
        image: "/images/tasty ghriba.jpeg",
        titleFr: "L'Art de la Tradition",
        titleAr: "فَنُّ التُّرَاث",
        subtitle: "Chaque biscuit raconte une histoire",
    },
];

export default function HeroSlider() {
    return (
        <section className="hero-section">
            <Swiper
                modules={[Autoplay, EffectFade, Pagination]}
                effect="fade"
                speed={1500}
                autoplay={{
                    delay: 6000,
                    disableOnInteraction: false,
                }}
                pagination={{
                    clickable: true,
                    bulletClass: "swiper-pagination-bullet !bg-ghriba-beige !opacity-50",
                    bulletActiveClass: "!opacity-100 !scale-125",
                }}
                loop={true}
                className="w-full h-full absolute inset-0"
            >
                {slides.map((slide, index) => (
                    <SwiperSlide key={index}>
                        <div className="relative w-full h-full">
                            {/* Background Image */}
                            <Image
                                src={slide.image}
                                alt={slide.titleFr}
                                fill
                                priority={index === 0}
                                className="object-cover"
                            />

                            {/* Overlay with Berber Pattern */}
                            <div className="hero-overlay berber-pattern-hero" />

                            {/* Content */}
                            <div className="absolute inset-0 flex items-center justify-center">
                                <div className="text-center px-6 max-w-4xl">
                                    <motion.div
                                        initial={{ opacity: 0, y: 30 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ duration: 0.8, delay: 0.3 }}
                                    >
                                        {/* Decorative */}
                                        <div className="decorative-line-center bg-ghriba-beige mb-8" />

                                        {/* Arabic Title */}
                                        <h2 className="text-arabic-hero mb-4">{slide.titleAr}</h2>

                                        {/* French Title */}
                                        <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-ghriba-cream mb-6">
                                            {slide.titleFr}
                                        </h1>

                                        {/* Subtitle */}
                                        <p className="text-xl md:text-2xl text-ghriba-beige/90 mb-10 font-light">
                                            {slide.subtitle}
                                        </p>

                                        {/* CTA */}
                                        <Link href="/histoire" className="btn-light">
                                            Découvrir Notre Histoire
                                        </Link>
                                    </motion.div>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>

            {/* Scroll Indicator */}
            <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.5, duration: 0.8 }}
                className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10"
            >
                <motion.div
                    animate={{ y: [0, 10, 0] }}
                    transition={{ repeat: Infinity, duration: 2 }}
                    className="w-6 h-10 border-2 border-ghriba-beige/50 rounded-full flex justify-center pt-2"
                >
                    <div className="w-1 h-3 bg-ghriba-beige rounded-full" />
                </motion.div>
            </motion.div>
        </section>
    );
}
