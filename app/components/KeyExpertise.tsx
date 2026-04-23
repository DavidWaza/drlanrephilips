"use client";

import { motion } from "framer-motion";
import { Compass, Settings, Lightbulb, Users } from "lucide-react";

const expertise = [
  {
    title: "Strategic Leadership & Change Management",
    description:
      "Dr. Lanre Phillips is a trailblazer in guiding organizations with visionary leadership, leveraging strategic insights to navigate complexity, manage change, and propel sustainable growth.",
    icon: Compass,
  },
  {
    title: "Operational Excellence",
    description:
      "Committed to excellence, Dr. Lanre Phillips implements sound operational and financial strategies that enhance efficiency, improve outcomes, and strengthen long-term organizational performance.",
    icon: Settings,
  },
  {
    title: "Social Impact & Innovation",
    description:
      "A driving force behind transformative social advancement, Dr. Lanre Phillips collaborates with NGOs, startup ecosystems, and innovation accelerators to catalyze entrepreneurship, scale impact-driven ventures, and deliver sustainable, system-level",
    icon: Lightbulb,
  },
  {
    title: "HR and Organizational Development",
    description:
      "Dr. Lanre Phillips combines strategic insights with human capital development by leading talent development, organizational restructuring, and leadership initiatives, resulting in enhanced employee engagement, retention, and organizational culture.",
    icon: Users,
  },
];

export default function KeyExpertise() {
  return (
    <section className="relative overflow-hidden py-24">
      {/* Background */}
      <div className="absolute inset-0 -z-10">
        {/* Base neutral gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-stone-100 via-neutral-200 to-stone-300" />

        {/* Soft radial highlights */}
        <div className="absolute -top-32 -left-32 h-[420px] w-[420px] rounded-full bg-neutral-300/40 blur-3xl" />
        <div className="absolute bottom-0 right-0 h-[380px] w-[380px] rounded-full bg-stone-400/30 blur-3xl" />

        {/* Subtle pattern overlay */}
        <div
          className="absolute inset-0 opacity-[0.035]"
          style={{
            backgroundImage:
              "repeating-linear-gradient(45deg, #000 0, #000 1px, transparent 1px, transparent 12px)",
          }}
        />
      </div>

      <div className="mx-auto max-w-7xl px-6">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="mb-16 max-w-3xl"
        >
          <p className="mb-3 text-sm font-semibold tracking-widest text-neutral-600 uppercase">
            Core Strengths
          </p>

          <h2
            className="
              font-changa-one
              text-4xl sm:text-5xl md:text-6xl
              leading-[1.05]
              tracking-tight
              text-neutral-900
            "
          >
            Key areas of Expertise
          </h2>
        </motion.div>

        {/* Cards */}
        <div className="flex flex-wrap justify-center gap-8">
          {expertise.map((item, index) => {
            const Icon = item.icon;

            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.6,
                  ease: "easeOut",
                  delay: index * 0.1,
                }}
                whileHover={{ y: -6 }}
                className="group relative w-full md:w-[calc(50%-1rem)] lg:w-[calc(33.33%-1.5rem)] rounded-2xl border border-neutral-300/60 bg-white/70 p-8 backdrop-blur-sm transition-all"
              >
                {/* Hover glow */}
                <div className="pointer-events-none absolute inset-0 rounded-2xl opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                  <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-neutral-300/40 to-transparent" />
                </div>

                {/* Icon */}
                <div className="mb-6 inline-flex h-14 w-14 items-center justify-center rounded-xl bg-neutral-900 text-neutral-100 transition-transform duration-300 group-hover:scale-105">
                  <Icon className="h-6 w-6" />
                </div>

                {/* Content */}
                <h3 className="mb-3 font-montserrat text-xl font-semibold text-neutral-900">
                  {item.title}
                </h3>

                <p className="text-sm leading-relaxed text-neutral-700">
                  {item.description}
                </p>

                {/* Subtle underline interaction */}
                <div className="mt-6 h-px w-12 bg-neutral-900/30 transition-all duration-300 group-hover:w-20" />
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
