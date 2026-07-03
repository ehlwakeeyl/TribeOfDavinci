"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { HeroParallax } from "@/components/animations/HeroParallax";
import { Button } from "@/components/ui/button";

const EASE: [number, number, number, number] = [0.25, 0.74, 0.22, 0.99];

export function Hero() {
  return (
    <section id="hero" className="relative flex h-screen min-h-[640px] items-end overflow-hidden text-white">
      <HeroParallax>
        <Image
          src="/images/hero-capri.jpg"
          alt="Capri Island by Bilaad Realty"
          fill
          priority
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#14110d]/35 via-[#14110d]/35 to-[#14110d]/95" />
      </HeroParallax>

      <div className="relative z-[2] w-full px-[6vw] pb-[9vh]">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: EASE, delay: 0.2 }}
          className="mb-5 text-[0.78rem] font-bold uppercase tracking-[0.32em] text-gold-light"
        >
          Building Sustainable Cities
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: EASE, delay: 0.4 }}
          className="max-w-[16ch] font-serif text-[clamp(2.6rem,7vw,6.4rem)] font-light leading-[0.98]"
        >
          For those who dream <em className="italic text-gold-light">in colour.</em>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: EASE, delay: 0.6 }}
          className="my-7 max-w-[46ch] text-[1.05rem] font-light text-white/80"
        >
          Homes designed for more than just today. Bilaad Realty blends
          timeless architecture with eco-friendly features across 15
          signature developments in Abuja — spaces built for exceptional
          living and strong returns.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: EASE, delay: 0.8 }}
          className="flex flex-wrap gap-4"
        >
          <Button asChild variant="gold">
            <a href="#projects">Explore Our Projects</a>
          </Button>
          <Button asChild variant="outlineDark">
            <a href="#featured">Project of the Month</a>
          </Button>
        </motion.div>
      </div>

      <div className="absolute bottom-7 right-[6vw] z-[2] flex flex-col items-center gap-2.5 text-[0.68rem] uppercase tracking-[0.24em] text-white/75">
        <span>Scroll</span>
        <span className="relative h-[52px] w-px overflow-hidden bg-gradient-to-b from-white/80 to-transparent">
          <span className="animate-scroll-cue absolute left-0 top-[-52px] h-[52px] w-full bg-gold-light" />
        </span>
      </div>
    </section>
  );
}
