"use client";

import { ArrowRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { useEffect, useState } from "react";
import { useIsMobile } from "@/app/hooks/useIsMobile";

const roles = [
  {
    title: "Result-Focused Mentoring",
    image: "/dr-lanre/dl-8.jpeg",
    ctaText: "Start Your Journey",
    ctaLink: "#booking",
  },
  {
    title: "Own Your Impact",
    image: "/dr-lanre/hero-2.jpeg",
    ctaText: "Discover How",
    ctaLink: "#booking",
  },
  {
    title: "Leadership Speaker",
    image: "/dr-lanre/hero-3.jpeg",
    ctaText: "Book Speaking Engagement",
    ctaLink: "#booking",
  },
  {
    title: "Leadership Mentor",
    image: "/dr-lanre/hero-4.jpeg",
    ctaText: "Get Mentorship",
    ctaLink: "#booking",
  },
];

const INTERVAL = 3600;

export default function Hero() {
  const [index, setIndex] = useState(0);
  const isMobile = useIsMobile();

  useEffect(() => {
    const timer = setInterval(
      () => setIndex((prev) => (prev + 1) % roles.length),
      INTERVAL,
    );
    return () => clearInterval(timer);
  }, []);

  const handleScroll = (
    e: React.MouseEvent<HTMLAnchorElement>,
    href: string,
  ) => {
    e.preventDefault();
    const targetId = href.replace("#", "");
    const element = document.getElementById(targetId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="home"
      className="relative overflow-hidden flex items-center pb-20 pt-32 sm:pb-24 md:py-24 lg:py-28 lg:min-h-[min(100vh,56rem)]"
    >
      {/* Background */}
      <motion.div
        className="absolute inset-0 "
        animate={{ backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"] }}
        transition={{ duration: 80, repeat: Infinity, ease: "linear" }}
        style={{
          backgroundImage: `
            linear-gradient(
              125deg,
              #020617 0%,
              #0f172a 45%,
              #020617 100%
            )
          `,
          backgroundSize: "280% 280%",
        }}
      />
      <div
        className="absolute inset-0 opacity-[0.3] "
        style={{
          backgroundImage: `
            radial-gradient(
              circle at 1px 1px,
              rgba(255,255,255,0.07) 1px,
              transparent 0
            )
          `,
          backgroundSize: "32px 32px",
        }}
      />
      <div className="absolute inset-0 bg-linear-to-b from-slate-950/80 via-transparent to-slate-950/90" />
      <div className="pointer-events-none absolute -top-40 right-0 h-[420px] w-[420px] rounded-full bg-blue-500/10 blur-3xl" />
      <div className="pointer-events-none absolute bottom-0 -left-32 h-[320px] w-[320px] rounded-full bg-slate-400/5 blur-3xl" />

      <div className="relative z-10 mx-auto w-full max-w-7xl px-6">
        <div className="grid grid-cols-1 items-center gap-14 lg:grid-cols-12 lg:gap-12">
          {/* Copy column */}
          <div className="lg:col-span-7">
            <div className="flex items-center gap-3">
              <div className="h-px w-10 shrink-0 bg-blue-500 sm:w-12" />
              <span className="font-montserrat text-[11px] font-semibold uppercase tracking-[0.28em] text-blue-400 sm:text-xs">
                Dr. Lanre Phillips
              </span>
            </div>

            <h1
              className="mt-5 font-changa-one text-[2.35rem] leading-[1.08] tracking-tight text-white sm:text-5xl md:text-[3.25rem] lg:text-[3.5rem]"
            >
              Leadership clarity and measurable impact.
            </h1>

            <div className="mt-5 border-l-2 border-blue-500/60 pl-4">
              <div
                className="relative min-h-10 sm:min-h-11"
                aria-live="polite"
              >
                <AnimatePresence mode="wait">
                  <motion.p
                    key={roles[index].title}
                    initial={
                      isMobile ? { opacity: 1, y: 0 } : { opacity: 0, y: 8 }
                    }
                    animate={{ opacity: 1, y: 0 }}
                    exit={
                      isMobile ? { opacity: 1, y: 0 } : { opacity: 0, y: -8 }
                    }
                    transition={
                      isMobile
                        ? { duration: 0 }
                        : { duration: 0.45, ease: "easeOut" }
                    }
                    className="font-montserrat text-base font-semibold leading-snug text-blue-200 sm:text-lg"
                  >
                    {roles[index].title}
                  </motion.p>
                </AnimatePresence>
              </div>
            </div>

            <p className="mt-6 max-w-lg font-inter text-sm leading-relaxed text-neutral-300 sm:text-base">
              Mentorship and speaking for executives and professionals who
              want sharper leadership and proven outcomes.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:items-center">
              <AnimatePresence mode="wait">
                <motion.a
                  key={roles[index].ctaText}
                  href={roles[index].ctaLink}
                  onClick={(e) => handleScroll(e, roles[index].ctaLink)}
                  initial={
                    isMobile ? { opacity: 1, y: 0 } : { opacity: 0, y: 8 }
                  }
                  animate={{ opacity: 1, y: 0 }}
                  exit={isMobile ? { opacity: 1, y: 0 } : { opacity: 0, y: -8 }}
                  transition={
                    isMobile
                      ? { duration: 0 }
                      : { duration: 0.4, ease: "easeOut" }
                  }
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-white px-7 py-3.5 font-inter text-sm font-semibold text-slate-900 shadow-[0_12px_40px_rgba(0,0,0,0.25)] transition-colors hover:bg-neutral-100 sm:text-base"
                >
                  {roles[index].ctaText}
                  <ArrowRight className="h-4 w-4 shrink-0" aria-hidden />
                </motion.a>
              </AnimatePresence>

              <a
                href="#about"
                onClick={(e) => handleScroll(e, "#about")}
                className="inline-flex items-center justify-center rounded-full border border-white/20 bg-white/5 px-7 py-3.5 font-inter text-sm font-medium text-white/90 backdrop-blur-sm transition-colors hover:border-white/35 hover:bg-white/10 sm:text-base"
              >
                About
              </a>
            </div>
          </div>

          {/* Visual column */}
          <div className="lg:col-span-5">
            <figure className="mx-auto w-full max-w-md lg:max-w-none">
              <div
                className="
                  relative w-full overflow-hidden rounded-2xl border border-white/10 bg-slate-900/80
                  shadow-[0_24px_64px_rgba(0,0,0,0.5)]
                  min-h-[240px] h-[min(48vh,400px)] sm:h-[min(52vh,440px)] lg:h-[min(58vh,520px)]
                "
              >
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_50%_35%,rgba(51,65,85,0.5),#020617_75%)]" />
                <AnimatePresence mode="wait">
                  <motion.div
                    key={roles[index].image}
                    initial={
                      isMobile ? { opacity: 1 } : { opacity: 0, scale: 1.02 }
                    }
                    animate={{ opacity: 1, scale: 1 }}
                    exit={isMobile ? { opacity: 1 } : { opacity: 0, scale: 0.99 }}
                    transition={
                      isMobile
                        ? { duration: 0 }
                        : { duration: 0.85, ease: "easeInOut" }
                    }
                    className="absolute inset-0 p-2 sm:p-3"
                  >
                    <Image
                      src={roles[index].image}
                      alt={roles[index].title}
                      fill
                      sizes="(max-width: 1024px) 90vw, 40vw"
                      className="object-contain object-center"
                      priority
                    />
                  </motion.div>
                </AnimatePresence>
              </div>
              <figcaption className="mt-3 text-center font-montserrat text-[10px] font-semibold uppercase tracking-[0.26em] text-white/40 sm:text-[11px]">
                Mentorship · Speaking
              </figcaption>
            </figure>

            <div
              className="mt-6 flex justify-center gap-2 lg:mt-8"
              role="tablist"
              aria-label="Highlight focus areas"
            >
              {roles.map((role, i) => (
                <button
                  key={role.title}
                  type="button"
                  role="tab"
                  aria-selected={i === index}
                  aria-label={`Show: ${role.title}`}
                  onClick={() => setIndex(i)}
                  className={[
                    "h-2 rounded-full transition-all duration-300 focus-visible:ring-2 focus-visible:ring-blue-400 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950",
                    i === index
                      ? "w-10 bg-white"
                      : "w-2 bg-white/30 hover:bg-white/50",
                  ].join(" ")}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
