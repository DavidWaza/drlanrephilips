"use client";

import { motion } from "framer-motion";

export default function About() {
  return (
    <section id="about" className="relative overflow-hidden bg-neutral-50">
      {/* Subtle background pattern */}
      <div
        className="absolute inset-0 opacity-[0.25]"
        style={{
          backgroundImage: `
            radial-gradient(
              circle at 1px 1px,
              rgba(0,0,0,0.06) 1px,
              transparent 0
            )
          `,
          backgroundSize: "28px 28px",
        }}
      />

      {/* Soft edge fade */}
      <div className="absolute inset-0 bg-gradient-to-b from-white via-transparent to-white" />

      {/* Content */}
      <div className="relative mx-auto max-w-6xl px-6 py-24 md:py-32">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-start">
          {/* ================= LEFT: TITLE ================= */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: "easeOut" }}
          >
            <h2
              className="
              font-changa-one
              text-4xl sm:text-5xl md:text-6xl
              leading-[1.05]
              tracking-tight
              text-neutral-900
            "
            >
              Inspiring Impact <br />
              for over <span className="text-neutral-500">Two Decades</span>
            </h2>

            {/* Accent line */}
            <div className="mt-6 h-[3px] w-16 bg-neutral-900/70 rounded-full" />
          </motion.div>

          {/* ================= RIGHT: CONTENT ================= */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.1 }}
            className="flex flex-col"
          >
            <p
              className="
              font-inter
              text-base sm:text-lg md:text-xl
              leading-relaxed
              text-neutral-700
            "
            >
              For over <strong>25 years</strong>, Dr. Lanre Phillips has helped
              motivated individuals and organisations achieve breakthrough
              results. Through customized coaching, workshops, and training
              programs, he provides the tools and strategies needed to overcome
              obstacles and sharpen leadership capacity.
            </p>

            <p
              className="
              mt-6
              font-inter
              text-base sm:text-lg md:text-xl
              leading-relaxed
              text-neutral-700
            "
            >
              Let Dr. Phillips’ battle-tested expertise inspire your journey of
              self-improvement, team building, and sustainable success. It is
              time to gain the perspective of a true mentor.
            </p>

            {/* CTA */}
            <motion.button
              whileHover={{ x: 6 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
              className="
                mt-10 w-fit
                font-montserrat
                text-sm uppercase tracking-[0.25em]
                text-neutral-900
                flex items-center gap-2
              "
            >
              Read More
              <span className="inline-block h-px w-10 bg-neutral-900" />
            </motion.button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
