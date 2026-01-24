"use client";

import { motion } from "framer-motion";
import Image from "next/image";

// Replace these paths with your actual logo image paths
const logos = [
  { name: "British Council", src: "/logos/british-council.jpeg" },
  { name: "MTN", src: "/logos/mtn.jpg" },
  { name: "Wema Bank", src: "/logos/wema-bank.jpeg" },
  { name: "GAIN", src: "/logos/gain.jpg" },
  { name: "Enterprise Development Center", src: "/logos/edc-1.webp" },
];

export default function Collaborations() {
  return (
    <section className="relative py-28 overflow-hidden">
      {/* ================= BACKGROUND ================= */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-linear-to-r from-neutral-200 via-neutral-100 to-neutral-200" />
        <div className="absolute -top-32 -left-32 h-[360px] w-[360px] rounded-full bg-neutral-300/30 blur-3xl" />
        <div className="absolute bottom-0 right-0 h-[320px] w-[320px] rounded-full bg-neutral-400/20 blur-3xl" />
      </div>

      <div className="mx-auto max-w-7xl px-6">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <p className="mb-3 text-sm font-semibold tracking-widest text-neutral-500 uppercase">
            Trusted By
          </p>
          <h2
            className="
              font-changa-one
              text-4xl md:text-5xl
              leading-[1.05]
              tracking-tight
              text-neutral-900
            "
          >
            Impactful <span className="text-neutral-500">Collaborations</span>
          </h2>
        </motion.div>

        {/* Marquee */}
        <div className="relative overflow-hidden">
          <div className="flex flex-wrap justify-center gap-8 items-center">
            {logos.map((logo, idx) => (
              <div
                key={`${logo.name}-${idx}`}
                className="flex-shrink-0 h-28 w-52 flex items-center justify-center transition-all duration-300 hover:scale-110 relative"
              >
                <Image
                  src={logo.src}
                  alt={logo.name}
                  fill
                  className="object-contain grayscale hover:grayscale-0 transition-all duration-300"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Marquee animation */}
    </section>
  );
}
