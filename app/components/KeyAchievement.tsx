"use client";

import { motion } from "framer-motion";
import { CalendarCheck, Briefcase, Building2, Award } from "lucide-react";

const achievements = [
  {
    label: "Events",
    value: "116",
    icon: CalendarCheck,
  },
  {
    label: "Projects",
    value: "33",
    icon: Briefcase,
  },
  {
    label: "Businesses",
    value: "27",
    icon: Building2,
  },
  {
    label: "Awards",
    value: "7",
    icon: Award,
  },
];

export default function NotableAchievements() {
  return (
    <section className="relative overflow-hidden py-28">
      {/* ================= BACKGROUND ================= */}
      <div className="absolute inset-0 -z-10">
        {/* Soft executive gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-neutral-900 via-neutral-800 to-neutral-900" />

        {/* Subtle light accents */}
        <div className="absolute -top-24 left-1/3 h-[360px] w-[360px] rounded-full bg-neutral-600/20 blur-3xl" />
        <div className="absolute bottom-0 right-0 h-[300px] w-[300px] rounded-full bg-neutral-500/10 blur-3xl" />

        {/* Fine grain texture */}
        <div
          className="absolute inset-0 opacity-[0.05]"
          style={{
            backgroundImage:
              "repeating-linear-gradient(45deg, #fff 0, #fff 1px, transparent 1px, transparent 18px)",
          }}
        />
      </div>

      <div className="mx-auto max-w-7xl px-6">
        {/* ================= HEADER ================= */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="mb-20 max-w-2xl"
        >
          <p className="mb-3 text-sm font-semibold tracking-widest text-neutral-400 uppercase">
            Track Record
          </p>

          <h2
            className="
              font-changa-one
              text-4xl md:text-5xl
              leading-[1.05]
              tracking-tight
              text-neutral-300
            "
          >
            Notable <span className="text-neutral-500">Achievements</span>
          </h2>
          <p className="mt-5 text-base leading-relaxed text-neutral-300">
            A legacy of measurable impact across leadership development,
            enterprise growth, and transformational initiatives.
          </p>
        </motion.div>

        {/* ================= METRICS ================= */}
        <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
          {achievements.map((item, index) => {
            const Icon = item.icon;

            return (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -4 }}
                className="group relative rounded-2xl border border-white/10 bg-white/5 p-8 backdrop-blur-sm transition-all duration-300 hover:bg-white/10 hover:shadow-xl"
              >
                {/* Icon */}
                <div className="mb-6 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-white/10 text-white transition-transform duration-300 group-hover:scale-105">
                  <Icon className="h-6 w-6" />
                </div>

                {/* Number */}
                <div className="mb-1 font-montserrat text-4xl font-semibold tracking-tight text-white">
                  {item.value}
                </div>

                {/* Label */}
                <p className="text-sm font-medium tracking-wide text-neutral-300 uppercase">
                  {item.label}
                </p>

                {/* Hover outline */}
                <span className="pointer-events-none absolute inset-0 rounded-2xl ring-1 ring-white/0 transition-all duration-300 group-hover:ring-white/20" />
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
