"use client";

import { motion, Variants } from "framer-motion";
import { GraduationCap, Briefcase, Target } from "lucide-react";

const container: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.12,
    },
  },
};

const card: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" },
  },
};

export default function BackgroundAndExpertise() {
  return (
    <section className="bg-slate-950 py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
          className="mb-20 max-w-2xl"
        >
          <h2
            className="font-changa-one
                  text-3xl sm:text-4xl md:text-5xl
                  leading-[1.1]
                  tracking-tight
                  text-neutral-300
                  mb-8"
          >
            Background & Expertise
          </h2>
          <p className="mt-4 font-inter text-slate-400 leading-relaxed">
            A distinguished blend of academic excellence, cross-industry
            leadership, and people-centric strategy.
          </p>
        </motion.div>

        {/* Cards */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 gap-8 md:grid-cols-3"
        >
          {/* Education */}
          <motion.div
            variants={card}
            className="group relative rounded-2xl border border-white/10 bg-slate-900/40 p-8 transition-all duration-300 hover:-translate-y-1 hover:border-white/20"
          >
            <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-xl bg-white/5">
              <GraduationCap className="h-6 w-6 text-white/80" />
            </div>

            <h3 className="mb-3 font-inter text-lg font-semibold text-white">
              Education
            </h3>

            <p className="font-inter text-sm leading-relaxed text-slate-300">
              Dr. Lanre Phillips holds a Bachelor’s degree in Economics from the
              University of Ibadan, an MSc in Economics from the University of
              Jos, and a Doctorate in Business Administration (DBA) from SMC
              University, Switzerland.
            </p>
          </motion.div>

          {/* Professional Experience */}
          <motion.div
            variants={card}
            className="group relative rounded-2xl border border-white/10 bg-slate-900/40 p-8 transition-all duration-300 hover:-translate-y-1 hover:border-white/20"
          >
            <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-xl bg-white/5">
              <Briefcase className="h-6 w-6 text-white/80" />
            </div>

            <h3 className="mb-3 font-inter text-lg font-semibold text-white">
              Professional Experience
            </h3>

            <p className="font-inter text-sm leading-relaxed text-slate-300">
              With close to three decades of professional experience, Dr. Lanre
              Phillips has led and influenced initiatives across FMCG, Banking,
              Telecommunications, and Information Technology—driving operational
              excellence and sustainable transformation.
            </p>
          </motion.div>

          {/* Expertise */}
          <motion.div
            variants={card}
            className="group relative rounded-2xl border border-white/10 bg-slate-900/40 p-8 transition-all duration-300 hover:-translate-y-1 hover:border-white/20"
          >
            <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-xl bg-white/5">
              <Target className="h-6 w-6 text-white/80" />
            </div>

            <h3 className="mb-3 font-inter text-lg font-semibold text-white">
              Expertise
            </h3>

            <p className="font-inter text-sm leading-relaxed text-slate-300">
              Known for aligning strategy with human capital development, Dr.
              Lanre Phillips specializes in Strategy, Operations, HR, and
              Organizational Development—implementing leadership frameworks,
              talent programs, and cultural transformation initiatives.
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
