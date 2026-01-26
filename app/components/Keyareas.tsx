"use client";

import { motion } from "framer-motion";
import { Briefcase, BarChart3, GraduationCap } from "lucide-react";

const areas = [
  {
    title: "Consulting",
    icon: Briefcase,
    description:
      "Develop a bespoke strategic growth plan tailored to your organization's vision and objectives.",
    details:
      "Dr. Phillips conducts a thorough assessment and partners with your leadership team to define priorities, KPIs, and an executable roadmap for exponential advancement.",
  },
  {
    title: "Strategy",
    icon: BarChart3,
    description:
      "Leverage Dr. Phillips' expertise through customized advisory engagements.",
    details:
      "From productivity workshops to culture-change initiatives, these consultancy services empower sustainable evolution at both strategic and operational levels.",
  },
  {
    title: "Training",
    icon: GraduationCap,
    description:
      "Attend renowned public and in-house training programs focused on leadership mastery and strategic foresight.",
    details:
      "Modules include Strategy Alignment in a VUCA World, Visionary Leadership in a Post-Pandemic Era, and High-Impact Communication Mastery.",
  },
];

export default function KeyAreas() {
  return (
    <section className="relative overflow-hidden py-28">
      {/* ================= BACKGROUND ================= */}
      <div className="absolute inset-0 -z-10">
        {/* Soft neutral gradient */}
        <div className="absolute inset-0 bg-linear-to-br from-neutral-50 via-neutral-100 to-neutral-200" />

        {/* Gentle highlight shapes */}
        <div className="absolute -top-24 -right-24 h-[380px] w-[380px] rounded-full bg-neutral-300/30 blur-3xl" />
        <div className="absolute bottom-0 left-0 h-[320px] w-[320px] rounded-full bg-neutral-400/20 blur-3xl" />

        {/* Subtle paper-like texture */}
        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage:
              "repeating-linear-gradient(45deg, #000 0, #000 1px, transparent 1px, transparent 16px)",
          }}
        />
      </div>

      <div className="mx-auto max-w-7xl px-6">
        {/* ================= HEADER ================= */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          style={{ willChange: "transform, opacity" }}
          className="mx-auto mb-20 max-w-7xl"
        >
          <h2
            className="
              font-changa-one
              text-4xl md:text-5xl
              leading-[1.05]
              tracking-tight
              text-neutral-900
            "
          >
            How <span className="text-neutral-500">Dr. Phillips</span> Creates
            Impact
          </h2>
        </motion.div>

        {/* ================= CARDS ================= */}
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3">
          {areas.map((area, index) => {
            const Icon = area.icon;

            return (
              <motion.div
                key={area.title}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -6 }}
                style={{ willChange: "transform, opacity" }}
                className="group relative rounded-3xl border border-neutral-300/60 bg-white/80 p-8 backdrop-blur-sm shadow-lg transition-all duration-300 hover:shadow-2xl"
              >
                {/* Icon */}
                <div className="mb-6 inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-neutral-900 text-white shadow-md transition-transform duration-300 group-hover:scale-105">
                  <Icon className="h-6 w-6" />
                </div>

                {/* Title */}
                <h3 className="mb-3 font-montserrat text-xl font-semibold text-neutral-900">
                  {area.title}
                </h3>

                {/* Description */}
                <p className="mb-4 text-sm leading-relaxed text-neutral-600">
                  {area.description}
                </p>

                {/* Divider */}
                <div className="mb-4 h-px w-12 bg-neutral-300" />

                {/* Details */}
                <p className="text-sm leading-relaxed text-neutral-700">
                  {area.details}
                </p>

                {/* Hover accent */}
                <span className="pointer-events-none absolute inset-0 rounded-3xl ring-1 ring-neutral-900/0 transition-all duration-300 group-hover:ring-neutral-900/10" />
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
