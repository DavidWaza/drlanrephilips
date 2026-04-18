"use client";

import { motion } from "framer-motion";
import Image from "next/image";

// Replace these paths with your actual logo image paths
const logos = [
  { name: "British Council", src: "/logos/british-council.jpeg" },
  { name: "MTN", src: "/logos/mtn.jpg" },
  { name: "Wema Bank", src: "/logos/wema-bank.jpeg" },
  { name: "GAIN", src: "/logos/gain.jpg" },
  { name: "DTM", src: "/logos/DTM.png" },
  // { name: "Elpee Consults", src: "/logos/Elpee-consults.png" },
  { name: "NCAA", src: "/logos/NCAA.png" },
  { name: "Stanbic", src: "/logos/Stanbic.png" },
  { name: "Evidence Action", src: "/logos/evidence-action.png" },
  { name: "NEITI", src: "/logos/neiti.png" },
  { name: "Ventures Park", src: "/logos/ventures-park.png" },
  { name: "YouWin", src: "/logos/youwin.png" },
  { name: "Zenith Medica", src: "/logos/zenith-medica.png" },
  { name: "Enterprise Development Center", src: "/logos/edc-1.webp" },
  { name: "Nigerian Federation", src: "/logos/niger.png" },
  { name: "Hewlett packard", src: "/logos/hp.png" },
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
        <div className="relative mt-20 overflow-hidden">
          <div className="flex w-max animate-marquee gap-0 items-center">
            {/* First set of logos */}
            {logos.map((logo, idx) => (
              <div
                key={`${logo.name}-${idx}`}
                className="flex-shrink-0 h-20 w-44 flex items-center justify-center transition-all duration-300 hover:scale-110 relative hover:grayscale"
              >
                <Image
                  src={logo.src}
                  alt={logo.name}
                  fill
                  className="object-contain"
                  sizes="(max-width: 768px) 100vw, 200px"
                />
              </div>
            ))}
            {/* Duplicate set of logos for seamless loop */}
            {logos.map((logo, idx) => (
              <div
                key={`${logo.name}-clone-${idx}`}
                className="flex-shrink-0 h-20 w-44 flex items-center justify-center transition-all duration-300 hover:scale-110 relative hover:grayscale"
              >
                <Image
                  src={logo.src}
                  alt={logo.name}
                  fill
                  className="object-contain"
                  sizes="(max-width: 768px) 100vw, 200px"
                />
              </div>
            ))}
          </div>

          {/* Gradient Masks for fade effect */}
          <div className="pointer-events-none absolute inset-y-0 left-0 w-32 bg-linear-to-r from-neutral-200 to-transparent z-10" />
          <div className="pointer-events-none absolute inset-y-0 right-0 w-32 bg-linear-to-l from-neutral-200 to-transparent z-10" />
        </div>
      </div>

      {/* Marquee animation */}
    </section>
  );
}
