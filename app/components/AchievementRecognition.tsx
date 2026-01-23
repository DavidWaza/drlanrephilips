"use client";

import { motion, AnimatePresence } from "framer-motion";
import { Users, Mic, Award, Trophy, Star, ChevronRight } from "lucide-react";
import { useState } from "react";

const achievements = [
  {
    id: 1,
    title: "Board Membership & Academic Impact",
    icon: Users,
    highlight: "Multi-Sector Leadership",
    stats: { value: "10+", label: "Board Positions" },
    content: [
      "Strategic board member providing guidance across diverse organizations",
      "Adjunct faculty at a prestigious open university in Nigeria",
      "Shaping initiatives across corporate, academic, and social sectors",
    ],
    accentColor: "from-blue-500 to-cyan-400",
  },
  {
    id: 2,
    title: "Two-Time TEDx Speaker",
    icon: Mic,
    highlight: "Global Thought Leader",
    stats: { value: "2x", label: "TEDx Stages" },
    content: [
      "Recognized speaker on leadership, innovation, and sustainable impact",
      "Contributing to global conversations that inspire change",
      "Reaching international audiences across multiple continents",
    ],
    accentColor: "from-red-500 to-orange-400",
  },
  {
    id: 3,
    title: "Industry Recognition",
    icon: Award,
    highlight: "Excellence Acknowledged",
    stats: { value: "15+", label: "Awards" },
    content: [
      "Recognition from Committee of Vice Chancellors of Nigerian Universities",
      "Honored at IFFA Summit 2023 as guest speaker",
      "Commendation from RACE Africa and Innovation for Future Africa Summit",
    ],
    accentColor: "from-amber-500 to-yellow-400",
  },
];

const impactNumbers = [
  { value: "25+", label: "Years Experience", icon: Trophy },
  { value: "50K+", label: "Lives Impacted", icon: Star },
  { value: "100+", label: "Organizations Served", icon: Users },
  { value: "30+", label: "Countries Reached", icon: Award },
];

export default function AchievementsRecognition() {
  const [activeCard, setActiveCard] = useState<number | null>(null);
  const [hoveredStat, setHoveredStat] = useState<number | null>(null);

  return (
    <section className="relative py-28 overflow-hidden">
      {/* ================= SOPHISTICATED BACKGROUND ================= */}
      <div className="absolute inset-0 -z-10">
        {/* Base gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950" />

        {/* Animated gradient orbs */}
        <motion.div
          className="absolute -top-40 -right-40 h-[600px] w-[600px] rounded-full opacity-30"
          style={{
            background:
              "radial-gradient(circle, rgba(59,130,246,0.3) 0%, transparent 70%)",
          }}
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.4, 0.3],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute -bottom-40 -left-40 h-[500px] w-[500px] rounded-full opacity-30"
          style={{
            background:
              "radial-gradient(circle, rgba(168,85,247,0.3) 0%, transparent 70%)",
          }}
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />

        {/* Subtle grid pattern */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `
              linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
              linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)
            `,
            backgroundSize: "60px 60px",
          }}
        />

        {/* Noise texture overlay */}
        <div
          className="absolute inset-0 opacity-[0.15]"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
          }}
        />
      </div>

      <div className="mx-auto max-w-7xl px-6">
        {/* ================= HEADER SECTION ================= */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="text-center mb-20"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 mb-6 px-4 py-2 rounded-full bg-white/5 border border-white/10 backdrop-blur-sm"
          >
            <Trophy className="h-4 w-4 text-amber-400" />
            <span className="font-montserrat text-xs font-semibold tracking-[0.2em] uppercase text-slate-300">
              Milestones & Recognition
            </span>
          </motion.div>

          <h2 className="font-changa-one text-4xl sm:text-5xl md:text-6xl leading-[1.1] tracking-tight text-white mb-6">
            Achievements That
            <span className="block bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
              Define Excellence
            </span>
          </h2>

          <p className="max-w-2xl mx-auto font-inter text-lg text-slate-400 leading-relaxed">
            A distinguished track record of leadership, intellectual
            contribution, and recognition across academic, corporate, and global
            platforms.
          </p>
        </motion.div>

        {/* ================= IMPACT NUMBERS ================= */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-20"
        >
          {impactNumbers.map((item, index) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                onHoverStart={() => setHoveredStat(index)}
                onHoverEnd={() => setHoveredStat(null)}
                className="relative group"
              >
                <div className="relative overflow-hidden rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm p-6 text-center transition-all duration-500 hover:bg-white/10 hover:border-white/20">
                  {/* Hover glow effect */}
                  <AnimatePresence>
                    {hoveredStat === index && (
                      <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="absolute inset-0 bg-gradient-to-br from-blue-500/10 via-purple-500/10 to-pink-500/10"
                      />
                    )}
                  </AnimatePresence>

                  <div className="relative z-10">
                    <motion.div
                      animate={{
                        scale: hoveredStat === index ? 1.1 : 1,
                        rotate: hoveredStat === index ? 5 : 0,
                      }}
                      transition={{ duration: 0.3 }}
                      className="inline-flex items-center justify-center w-12 h-12 mb-4 rounded-xl bg-gradient-to-br from-blue-500/20 to-purple-500/20 text-blue-400"
                    >
                      <Icon className="h-5 w-5" />
                    </motion.div>

                    <motion.p
                      className="font-changa-one text-3xl md:text-4xl text-white mb-1"
                      animate={{
                        scale: hoveredStat === index ? 1.05 : 1,
                      }}
                      transition={{ duration: 0.3 }}
                    >
                      {item.value}
                    </motion.p>
                    <p className="font-montserrat text-xs uppercase tracking-wider text-slate-400">
                      {item.label}
                    </p>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* ================= ACHIEVEMENT CARDS ================= */}
        <div className="grid gap-6 lg:grid-cols-3">
          {achievements.map((item, index) => {
            const Icon = item.icon;
            const isActive = activeCard === item.id;

            return (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.15 }}
                onClick={() => setActiveCard(isActive ? null : item.id)}
                className="group cursor-pointer"
              >
                <motion.div
                  whileHover={{ y: -8, scale: 1.02 }}
                  transition={{ duration: 0.3 }}
                  className={`
                    relative h-full overflow-hidden rounded-3xl
                    bg-gradient-to-br from-white/10 to-white/5
                    border transition-all duration-500
                    ${
                      isActive
                        ? "border-white/30 shadow-2xl shadow-purple-500/10"
                        : "border-white/10 hover:border-white/20"
                    }
                  `}
                >
                  {/* Card gradient overlay on hover */}
                  <div
                    className={`
                      absolute inset-0 opacity-0 transition-opacity duration-500
                      bg-gradient-to-br ${item.accentColor}
                      ${isActive ? "opacity-10" : "group-hover:opacity-5"}
                    `}
                  />

                  {/* Card content */}
                  <div className="relative z-10 p-8">
                    {/* Header row */}
                    <div className="flex items-start justify-between mb-6">
                      {/* Icon */}
                      <motion.div
                        whileHover={{ rotate: 5, scale: 1.1 }}
                        className={`
                          relative flex h-16 w-16 items-center justify-center rounded-2xl
                          bg-gradient-to-br ${item.accentColor} shadow-lg
                        `}
                      >
                        <Icon className="h-7 w-7 text-white" />
                        {/* Glow effect */}
                        <div
                          className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${item.accentColor} blur-xl opacity-50`}
                        />
                      </motion.div>

                      {/* Stats badge */}
                      <div className="text-right">
                        <p className="font-changa-one text-2xl text-white">
                          {item.stats.value}
                        </p>
                        <p className="font-montserrat text-[10px] uppercase tracking-wider text-slate-400">
                          {item.stats.label}
                        </p>
                      </div>
                    </div>

                    {/* Highlight tag */}
                    <span
                      className={`
                        inline-block mb-3 px-3 py-1 rounded-full text-xs font-semibold
                        bg-gradient-to-r ${item.accentColor} bg-clip-text text-transparent
                        border border-white/10
                      `}
                    >
                      {item.highlight}
                    </span>

                    {/* Title */}
                    <h3 className="font-changa-one text-xl text-white mb-4 leading-tight">
                      {item.title}
                    </h3>

                    {/* Content list */}
                    <AnimatePresence mode="wait">
                      <motion.ul
                        key={isActive ? "expanded" : "collapsed"}
                        initial={{ opacity: 0, height: 0 }}
                        animate={{
                          opacity: 1,
                          height: "auto",
                        }}
                        transition={{ duration: 0.3 }}
                        className="space-y-3"
                      >
                        {item.content
                          .slice(0, isActive ? undefined : 2)
                          .map((point, i) => (
                            <motion.li
                              key={i}
                              initial={{ opacity: 0, x: -10 }}
                              animate={{ opacity: 1, x: 0 }}
                              transition={{ delay: i * 0.1 }}
                              className="flex items-start gap-3 text-sm text-slate-300"
                            >
                              <span
                                className={`mt-1.5 h-1.5 w-1.5 rounded-full bg-gradient-to-r ${item.accentColor} flex-shrink-0`}
                              />
                              <span className="font-inter leading-relaxed">
                                {point}
                              </span>
                            </motion.li>
                          ))}
                      </motion.ul>
                    </AnimatePresence>

                    {/* Expand/Collapse indicator */}
                    <motion.div
                      className="flex items-center gap-2 mt-6 text-sm text-slate-400 group-hover:text-white transition-colors"
                      animate={{ x: isActive ? 0 : [0, 5, 0] }}
                      transition={{
                        duration: 1.5,
                        repeat: isActive ? 0 : Infinity,
                        repeatType: "loop",
                      }}
                    >
                      <span className="font-montserrat text-xs uppercase tracking-wider">
                        {isActive ? "Show less" : "Learn more"}
                      </span>
                      <motion.div
                        animate={{ rotate: isActive ? 90 : 0 }}
                        transition={{ duration: 0.3 }}
                      >
                        <ChevronRight className="h-4 w-4" />
                      </motion.div>
                    </motion.div>
                  </div>

                  {/* Bottom accent line */}
                  <motion.div
                    className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r ${item.accentColor}`}
                    initial={{ scaleX: 0 }}
                    whileInView={{ scaleX: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.3 + index * 0.1 }}
                    style={{ transformOrigin: "left" }}
                  />
                </motion.div>
              </motion.div>
            );
          })}
        </div>

        {/* ================= BOTTOM CTA ================= */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-20 text-center"
        >
          <p className="font-inter text-slate-400 mb-6">
            Ready to be part of the next success story?
          </p>
          <motion.a
            href="/contact"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center gap-3 px-8 py-4 rounded-full bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 text-white font-montserrat text-sm uppercase tracking-wider font-semibold shadow-lg shadow-purple-500/25 hover:shadow-purple-500/40 transition-shadow duration-300"
          >
            Work With Dr. Phillips
            <ChevronRight className="h-4 w-4" />
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}
