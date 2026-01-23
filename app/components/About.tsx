"use client";

import { motion } from "framer-motion";

export default function About() {
  return (
    <section id="about" className="relative overflow-hidden bg-white">
      {/* Animated gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-50 via-white to-blue-50/30" />

      {/* Geometric accents */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-slate-500/5 rounded-full blur-3xl" />

      {/* Subtle grid pattern */}
      <div
        className="absolute inset-0 opacity-[0.015]"
        style={{
          backgroundImage: `
            linear-gradient(rgba(0,0,0,0.05) 1px, transparent 1px),
            linear-gradient(90deg, rgba(0,0,0,0.05) 1px, transparent 1px)
          `,
          backgroundSize: "64px 64px",
        }}
      />

      {/* Content */}
      <div className="relative mx-auto max-w-7xl px-6 py-20 md:py-32 lg:py-40">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* ================= LEFT: TITLE & STATS ================= */}
          <div className="lg:col-span-5">
            <div className="flex items-center gap-3 mb-6">
              <div className="h-px w-12 bg-blue-600" />
              <span className="font-montserrat text-xs uppercase tracking-[0.2em] text-blue-600 font-semibold">
                About Dr. Phillips
              </span>
            </div>
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
          </div>


          {/* ================= RIGHT: CONTENT ================= */}
          <div className="lg:col-span-7">
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
              className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 md:p-12 border border-slate-200/50 shadow-xl"
            >
              {/* Content text */}
              <div className="space-y-6">
                <p
                  className="
                  font-inter
                  text-lg md:text-xl
                  leading-relaxed
                  text-slate-700
                "
                >
                  For over <span className="font-semibold text-slate-900">25 years</span>, Dr. Lanre Phillips has helped
                  motivated individuals and organisations achieve breakthrough
                  results. Through customized coaching, workshops, and training
                  programs, he provides the tools and strategies needed to overcome
                  obstacles and sharpen leadership capacity.
                </p>

                <p
                  className="
                  font-inter
                  text-lg md:text-xl
                  leading-relaxed
                  text-slate-700
                "
                >
                  Let Dr. Phillips' battle-tested expertise inspire your journey of
                  self-improvement, team building, and sustainable success. It is
                  time to gain the perspective of a true mentor.
                </p>
              </div>

              {/* Key areas */}
              <div className="mt-10 grid grid-cols-2 gap-4">
                {["Leadership Development", "Team Excellence", "Strategic Growth", "Sustainable Results"].map((item, i) => (
                  <motion.div
                    key={item}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3 + i * 0.1, duration: 0.4 }}
                    className="flex items-center gap-2"
                  >
                    <div className="w-1.5 h-1.5 rounded-full bg-blue-600" />
                    <span className="font-inter text-sm text-slate-600">{item}</span>
                  </motion.div>
                ))}
              </div>

              {/* CTA Button */}
              <motion.button
                whileHover={{ scale: 1.02, x: 4 }}
                whileTap={{ scale: 0.98 }}
                transition={{ type: "spring", stiffness: 400, damping: 17 }}
                className="
                  mt-10
                  group
                  relative
                  inline-flex items-center gap-3
                  px-8 py-4
                  bg-slate-900
                  text-white
                  font-montserrat
                  text-sm
                  uppercase
                  tracking-[0.15em]
                  rounded-full
                  overflow-hidden
                  shadow-lg
                  hover:shadow-xl
                "
              >
                <span className="relative z-10">Discover More</span>
                <motion.span
                  className="relative z-10"
                  animate={{ x: [0, 4, 0] }}
                  transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
                >
                  →
                </motion.span>

                {/* Hover effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-slate-700 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300" />
              </motion.button>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}