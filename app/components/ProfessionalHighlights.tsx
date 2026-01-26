"use client";

import { motion } from "framer-motion";
import { Building2, Mic2, Award } from "lucide-react";

const highlights = [
  {
    title: "Organisational Development",
    description:
      "Provided HR and Organizational Development consulting services to various organizations, including UNICEF, British Council, MTN Nigeria, Dangote, Wema Bank and NNPC Academy amongst others.",
    icon: Building2,
    year: "Consulting",
  },
  {
    title: "Two-time TEDx speaker",
    description:
      "Acknowledged as a thought leader, Dr. Lanre Phillips has graced the TEDx stage twice, sharing his expertise and contributing to global conversations on leadership and innovation.",
    icon: Mic2,
    year: "Thought Leadership",
  },
  {
    title: "Industry Recognition",
    description:
      "Acknowledged for his outstanding contributions, Dr. Lanre Phillips received special recognition from the Committee of Vice Chancellors of Nigerian universities for his impactful role in the Executive Leadership Development Programme for Vice Chancellors. He has received numerous awards from diverse organisations for his acumen is supporting with growth strategies.",
    icon: Award,
    year: "Recognition",
  },
];

export default function ProfessionalHighlights() {
  return (
    <section className="relative overflow-hidden bg-slate-950 py-24 md:py-32">
      {/* Background gradients - Deep Blue/Navy */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-900/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-indigo-900/10 rounded-full blur-3xl" />
      </div>

      <div className="mx-auto max-w-7xl px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-20 max-w-3xl"
        >
          <h2 className="font-changa-one text-3xl md:text-4xl text-white tracking-tight mb-6">
            Professional Highlights
          </h2>
          <div className="h-1 w-20 bg-blue-800 rounded-full" />
        </motion.div>

        <div className="relative max-w-4xl">
          {/* Vertical Line */}
          <div className="absolute left-[27px] top-0 bottom-0 w-px bg-linear-to-b from-blue-800 via-blue-900/30 to-transparent" />

          <div className="space-y-16">
            {highlights.map((item, index) => {
              const Icon = item.icon;

              return (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="relative flex gap-8 md:gap-12"
                >
                  {/* Icon/Marker */}
                  <div className="relative z-10 flex-none">
                    <div className="flex h-14 w-14 items-center justify-center rounded-full bg-slate-950 border border-blue-900/30 ring-4 ring-slate-950 group hover:border-blue-700/50 transition-colors duration-300">
                      <Icon className="h-6 w-6 text-blue-600 group-hover:text-blue-500 transition-colors" />
                    </div>
                  </div>

                  {/* Content */}
                  <div className="pt-2">
                    <span className="inline-flex items-center rounded-full bg-blue-900/20 px-3 py-1 text-xs font-medium text-blue-300 ring-1 ring-inset ring-blue-800/30 mb-3">
                      {item.year}
                    </span>

                    <h3 className="text-xl md:text-2xl font-semibold text-white mb-3">
                      {item.title}
                    </h3>

                    <p className="text-slate-400 leading-relaxed max-w-2xl">
                      {item.description}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
