"use client";

import { motion } from "framer-motion";
import Link from "next/link";

interface PageHeroProps {
  title: string;
  breadcrumbs?: { label: string; href: string }[];
}

export default function PageHero({ title, breadcrumbs = [] }: PageHeroProps) {
  return (
    <section className="relative overflow-hidden bg-slate-950">
      {/* Subtle depth overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-slate-900/60 to-slate-950/90" />

      {/* Content */}
      <div className="relative z-10 mx-auto max-w-7xl px-6 py-24 md:py-32 lg:py-40">
        {breadcrumbs.length > 0 && (
          <motion.nav
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="mb-8"
          >
            <ol className="flex items-center gap-2 font-inter text-sm">
              <li>
                <Link
                  href="/"
                  className="text-slate-400 hover:text-white transition-colors"
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
                      className="text-slate-400 hover:text-white transition-colors"
                    >
                      {crumb.label}
                    </Link>
                  )}
                </li>
              ))}
            </ol>
          </motion.nav>
        )}

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="font-changa-one text-4xl sm:text-5xl md:text-6xl lg:text-7xl leading-[1.05] tracking-tight text-white">
            {title}
          </h1>
        </motion.div>

        <div className="mt-10 h-[2px] w-24 bg-white/20 rounded-full" />
      </div>
    </section>
  );
}
