"use client";

import { Star, ArrowRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { useEffect, useState } from "react";

const roles = [
  {
    title: "Result-Focused Mentoring",
    image: "/dr-lanre/hero-1.jpeg",
    ctaText: "Start Your Journey",
    ctaLink: "#booking",
  },
  {
    title: "Own Your Impact",
    image: "/dr-lanre/hero-2.jpeg",
    ctaText: "Discover How",
    ctaLink: "#booking",
  },
  {
    title: "Executive Speaker",
    image: "/dr-lanre/hero-3.jpeg",
    ctaText: "Book a Speaking",
    ctaLink: "#booking",
  },
  {
    title: "Leadership Mentor",
    image: "/dr-lanre/hero-4.jpeg",
    ctaText: "Get Mentorship",
    ctaLink: "#booking",
  },
];

const INTERVAL = 3600;

export default function Hero() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(
      () => setIndex((prev) => (prev + 1) % roles.length),
      INTERVAL,
    );
    return () => clearInterval(timer);
  }, []);

  const handleScroll = (
    e: React.MouseEvent<HTMLAnchorElement>,
    href: string,
  ) => {
    e.preventDefault();
    const targetId = href.replace("#", "");
    const element = document.getElementById(targetId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="home"
      className="relative min-h-screen overflow-hidden flex items-center"
    >
      {/* ================= BACKGROUND SYSTEM ================= */}

      {/* 1. Animated monochrome gradient */}
      <motion.div
        className="absolute inset-0"
        animate={{ backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"] }}
        transition={{ duration: 80, repeat: Infinity, ease: "linear" }}
        style={{
          backgroundImage: `
            linear-gradient(
              120deg,
              #020617,
              #020617,
              #0b1220,
              #020617
            )
          `,
          backgroundSize: "300% 300%",
        }}
      />

      {/* 2. Subtle radial pattern overlay */}
      <div
        className="absolute inset-0 opacity-[0.35]"
        style={{
          backgroundImage: `
            radial-gradient(
              circle at 1px 1px,
              rgba(255,255,255,0.08) 1px,
              transparent 0
            )
          `,
          backgroundSize: "32px 32px",
        }}
      />

      {/* 3. Vignette / depth overlay */}
      <div className="absolute inset-0 bg-linear-to-b from-black/20 via-black/10 to-black/40" />

      {/* ================= CONTENT ================= */}
      <div className="relative z-10 mx-auto max-w-7xl px-6 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          {/* ========== LEFT: IMAGE SLIDER ========== */}
          <div className="relative h-[320px] sm:h-[420px] md:h-[520px] lg:h-[560px] rounded-3xl overflow-hidden border border-white/10 bg-black shadow-[0_30px_80px_rgba(0,0,0,0.45)]">
            <AnimatePresence mode="wait">
              <motion.div
                key={roles[index].image}
                initial={{ opacity: 0, scale: 1.03 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.98 }}
                transition={{ duration: 0.9, ease: "easeInOut" }}
                className="absolute inset-0"
              >
                <Image
                  src={roles[index].image}
                  alt={roles[index].title}
                  fill
                  className="object-cover"
                  priority
                />
              </motion.div>
            </AnimatePresence>
          </div>

          {/* ========== RIGHT: TEXT ========== */}
          <div className="flex flex-col justify-center text-left">
            {/* Badge */}
            <div className="mb-8 inline-flex w-fit items-center gap-2 rounded-full border border-white/15 bg-white/5 px-5 py-2 backdrop-blur-md">
              <Star className="h-4 w-4 text-amber-400 fill-amber-400" />
              <span className="font-montserrat text-xs uppercase tracking-[0.25em] text-neutral-200">
                Leadership • Growth • Influence
              </span>
            </div>

            {/* Headline */}
            <div className="relative min-h-[110px] sm:min-h-[140px] md:min-h-[160px] lg:min-h-[190px]">
              <AnimatePresence mode="wait">
                <motion.h1
                  key={roles[index].title}
                  initial={{ opacity: 0, y: 28 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -28 }}
                  transition={{ duration: 0.6, ease: "easeOut" }}
                  className="
                    absolute inset-0
                    font-changa-one
                    text-[2.6rem] sm:text-[3.2rem] md:text-[3.8rem] lg:text-[4.6rem]
                    leading-[1.05]
                    tracking-tight
                    text-white
                  "
                >
                  {roles[index].title}
                </motion.h1>
              </AnimatePresence>
            </div>

            {/* Divider */}
            <div className="mt-8 h-px w-28 bg-linear-to-r from-white/40 to-white/5" />

            {/* Supporting copy */}
            <p className="mt-8 max-w-xl font-inter text-base sm:text-lg md:text-xl text-neutral-300 leading-relaxed">
              Helping leaders, executives, and high-performing professionals
              refine clarity, strengthen influence, and create measurable impact
              through mentorship and speaking.
            </p>

            {/* CTA Button */}
            <div className="mt-10 relative h-[60px]">
              <AnimatePresence mode="wait">
                <motion.a
                  key={roles[index].ctaText}
                  href={roles[index].ctaLink}
                  onClick={(e) => handleScroll(e, roles[index].ctaLink)}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.5, ease: "easeOut" }}
                  className="
                    absolute
                    inline-flex items-center gap-3
                    px-8 py-4
                    bg-white text-slate-900
                    rounded-full
                    font-inter font-semibold text-base
                    shadow-[0_8px_30px_rgba(255,255,255,0.12)]
                    hover:shadow-[0_12px_40px_rgba(255,255,255,0.2)]
                    hover:scale-105
                    transition-all duration-300
                    group
                  "
                >
                  {roles[index].ctaText}
                  <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
                </motion.a>
              </AnimatePresence>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
