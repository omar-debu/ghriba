"use client";

import ArtSection from "@/components/ArtSection";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export default function Home() {
  const heroRef = useRef(null);
  const { scrollYProgress } = useScroll({ target: heroRef });
  const heroScale = useTransform(scrollYProgress, [0, 1], [1, 1.1]);
  const heroTextY = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);

  return (
    <div className="relative min-h-screen overflow-x-hidden">
      {/* Global Grain Overlay */}
      <div className="texture-overlay" />
      <div className="vignette-overlay" />

      <main>
        {/* PARALLAX HERO - The Hook */}
        <section ref={heroRef} className="relative h-screen w-full overflow-hidden flex items-center justify-center px-4 md:px-0">
          {/* Background Layer */}
          <motion.div style={{ scale: heroScale }} className="absolute inset-0 z-0">
            <Image
              src="/images/mi-fatima-sketch.jpg"
              alt="Soul"
              fill
              className="object-cover opacity-80 grayscale contrast-125"
              priority
            />
            <div className="absolute inset-0 bg-[#3E2b26]/40 mix-blend-multiply" />

            {/* TATTOO INTEGRATION 1: Subtle Hero Overlay */}
            <div className="absolute inset-0 bg-berber-diamond mix-blend-overlay opacity-30" />
          </motion.div>

          {/* Floating Arabic Slogan */}
          <motion.div
            style={{ y: heroTextY }}
            className="relative z-10 text-center space-y-4 md:space-y-8"
          >
            <div className="relative">
              <Image
                src="/images/arabic-quote-styled.png"
                alt="Khat"
                width={800}
                height={300}
                className="mx-auto filter invert drop-shadow-[0_10px_20px_rgba(0,0,0,0.5)] opacity-90 relative z-10 w-[85vw] sm:w-[70vw] md:w-[800px]"
              />
              {/* Artistic Ink Splatter Behind */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-black/20 blur-3xl rounded-full z-0" />
            </div>

            <motion.h1
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.5, duration: 1 }}
              className="font-mega text-2xl sm:text-3xl md:text-5xl text-[#2C4F3A] tracking-widest backdrop-blur-md inline-block px-6 sm:px-8 py-2 md:py-3 transform -rotate-1 border-2 border-[#2C4F3A]/30 bg-[#E7D2A9]/90 shadow-2xl"
            >
              L'Art de la Dignité
            </motion.h1>
          </motion.div>

          {/* Scroll Indicator */}
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ repeat: Infinity, duration: 2 }}
            className="absolute bottom-8 md:bottom-12 left-1/2 -translate-x-1/2 z-20 text-[#E7D2A9]"
          >
            <span className="font-heading text-xs tracking-[0.3em] uppercase writing-vertical">Scroll</span>
          </motion.div>
        </section>

        {/* ART SECTIONS - The Exhibition */}

        {/* TATTOO INTEGRATION 2: Background for Text Blocks */}
        <div className="relative">
          {/* Pattern Strip running behind text */}
          <div className="absolute top-0 right-0 w-1/3 h-full bg-berber-zigzag opacity-30 -z-10" />

          <ArtSection
            index={1}
            image="/images/collage-medina.jpg"
            title="ORIGINS"
            subtitle="MEDINA QUEDIMA"
            text="Tanger, 1974. Dans les entrailles de la vieille ville, là où les murs murmurent des siècles d'histoires, Mi Fatima a posé ses mains sur la pâte pour la première fois. Ce n'était pas un choix, c'était un destin."
            arabic="الدار الكبيرة"
          />
        </div>

        <ArtSection
          index={2}
          image="/images/panel-kitchen.jpg"
          title="TEXTURES"
          subtitle="CRAQUELÉ UNIQUE"
          text="La Ghriba n'est pas lisse, elle est vivante. Elle est comme la vie : imparfaite, fissurée, belle. Chaque craquelure de la 'Behla' est une respiration, une signature de la chaleur et du temps."
          arabic="الصبر والنية"
        />

        {/* INTEGRATION 2: CULTURAL BANNER - Full Width Image After 2 Sections */}
        {/* INTEGRATION 2: CULTURAL BANNER - Full Width Image After 2 Sections */}
        <section className="relative w-screen max-w-full m-0 p-0 left-[50%] -translate-x-[50%] overflow-hidden">
          <div className="relative w-full">
            <Image
              src="/images/collage-cultural-banner.png"
              alt="Culture Ghriba - Tanger Heritage"
              width={3840} // Explicit 4K width to help layout
              height={1080}
              quality={100}
              unoptimized // Force original quality
              className="w-full h-auto object-cover block" // block prevents descender gaps
              priority
            />
            {/* Subtle overlay to blend with site palette */}
            <div className="absolute inset-0 bg-[#F5F0E6]/10 mix-blend-multiply pointer-events-none" />
          </div>
        </section>

        <div className="relative">
          <div className="absolute top-0 left-0 w-1/3 h-full bg-berber-cross opacity-20 -z-10" />
          <ArtSection
            index={3}
            image="/images/collage-new.jpg"
            title="SACRED"
            subtitle="HALWA D'OR"
            text="Amandes de l'Atlas. Fleur d'oranger distillée à la main. Sucre brut. Nous ne faisons pas de la pâtisserie, nous assemblons des matières nobles pour honorer ceux qui les goûtent."
            arabic="البركة"
          />
        </div>

        {/* INTEGRATION 1: LOGO COLLAGE - New 4th Section */}
        <div className="relative">
          <div className="absolute top-0 right-0 w-1/3 h-full bg-berber-diamond opacity-20 -z-10" />
          <ArtSection
            index={4}
            image="/images/collage-logo-design.jpg"
            title="IDENTITY"
            subtitle="L'ÂME GRAPHIQUE"
            text="Chaque courbe de notre calligraphie raconte une histoire. Le logo Ghriba n'est pas qu'un symbole, c'est l'empreinte visuelle de 50 ans de tradition, dessinée à la main, gravée dans le temps."
            arabic="الهوية"
          />
        </div>

      </main>
    </div>
  );
}
