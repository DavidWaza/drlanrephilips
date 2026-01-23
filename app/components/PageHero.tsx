"use client";

import { motion } from "framer-motion";
import Link from "next/link";

interface PageHeroProps {
  title: string;
  // subtitle?: string;
  breadcrumbs?: { label: string; href: string }[];
}

export default function PageHero({
  title,
  // subtitle,
  breadcrumbs = [],
}: PageHeroProps) {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-slate-950 via-slate-900 to-slate-800">
      {/* Background effects */}
      <div className="absolute inset-0">
        <motion.div
          className="absolute inset-0"
          animate={{ backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"] }}
          transition={{ duration: 80, repeat: Infinity, ease: "linear" }}
          style={{
            backgroundImage: `
              linear-gradient(
                120deg,
                #020617,
                #020617,
                #0b1220,
                #020617
              )
            `,
            backgroundSize: "300% 300%",
          }}
        />

        {/* Radial pattern overlay */}
        <div
          className="absolute inset-0 opacity-30"
          style={{
            backgroundImage: `
              radial-gradient(
                circle at 1px 1px,
                rgba(255,255,255,0.08) 1px,
                transparent 0
              )
            `,
            backgroundSize: "32px 32px",
          }}
        />

        {/* Gradient orbs */}
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl" />
      </div>

      {/* Content */}
      <div className="relative z-10 mx-auto max-w-7xl px-6 py-24 md:py-32 lg:py-40">
        {/* Breadcrumbs */}
        {breadcrumbs.length > 0 && (
          <motion.nav
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-8"
          >
            <ol className="flex items-center gap-2 font-inter text-sm">
              <li>
                <Link
                  href="/"
                  className="text-slate-400 hover:text-white transition-colors duration-200"
                >
                  Home
                </Link>
              </li>
              {breadcrumbs.map((crumb, index) => (
                <li key={crumb.label} className="flex items-center gap-2">
                  <span className="text-slate-600">/</span>
                  {index === breadcrumbs.length - 1 ? (
                    <span className="text-white font-medium">
                      {crumb.label}
                    </span>
                  ) : (
                    <Link
                      href={crumb.href}
                      className="text-slate-400 hover:text-white transition-colors duration-200"
                    >
                      {crumb.label}
                    </Link>
                  )}
                </li>
              ))}
            </ol>
          </motion.nav>
        )}

        {/* Title */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          <h1
            className="
              font-changa-one
              text-4xl sm:text-5xl md:text-6xl lg:text-7xl
              leading-[1.05]
              tracking-tight
              text-white
            "
          >
            {title}
          </h1>

          {/* {subtitle && (
            <p className="mt-6 font-inter text-lg md:text-xl text-slate-300/80 max-w-2xl leading-relaxed">
              {subtitle}
            </p>
          )} */}
        </motion.div>

        {/* Decorative line */}
        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="mt-10 h-1 w-24 bg-gradient-to-r from-blue-500 to-purple-500 origin-left rounded-full"
        />
      </div>
    </section>
  );
}
