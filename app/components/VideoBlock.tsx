"use client";

import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";

interface VideoBlockProps {
  youtubeId: string;
}

export default function VideoBlock({ youtubeId }: VideoBlockProps) {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const iframeRef = useRef<HTMLIFrameElement | null>(null);
  const [play, setPlay] = useState(false);

  useEffect(() => {
    if (!containerRef.current) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setPlay(entry.isIntersecting);
      },
      {
        threshold: 0.5,
      },
    );

    observer.observe(containerRef.current);

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (iframeRef.current && iframeRef.current.contentWindow) {
      const message = play
        ? '{"event":"command","func":"playVideo","args":""}'
        : '{"event":"command","func":"pauseVideo","args":""}';
      iframeRef.current.contentWindow.postMessage(message, "*");
    }
  }, [play]);

  if (!youtubeId) return null;

  return (
    <section className="relative overflow-hidden py-24">
      {/* Background */}
      <div className="absolute inset-0 -z-10">
        {/* Neutral layered gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-neutral-900 via-neutral-800 to-neutral-900" />

        {/* Soft highlights */}
        <div className="absolute -top-24 -left-24 h-[360px] w-[360px] rounded-full bg-neutral-700/30 blur-3xl" />
        <div className="absolute bottom-0 right-0 h-[320px] w-[320px] rounded-full bg-neutral-600/20 blur-3xl" />

        {/* Subtle diagonal texture */}
        <div
          className="absolute inset-0 opacity-[0.06]"
          style={{
            backgroundImage:
              "repeating-linear-gradient(135deg, #fff 0, #fff 1px, transparent 1px, transparent 14px)",
          }}
        />
      </div>

      <div className="mx-auto max-w-7xl px-2">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-12 max-w-3xl"
        >
          <p className="mb-3 text-sm font-semibold tracking-widest text-neutral-400 uppercase">
            Watch & Learn
          </p>
          <h2
            className="
              font-changa-one
              text-4xl sm:text-5xl md:text-6xl
              leading-[1.05]
              tracking-tight
              text-neutral-300
            "
          >
            Insights from the <span className="text-neutral-500">Mentor</span>
          </h2>
          <p className="mt-4 text-base leading-relaxed text-neutral-300">
            Experience Dr. Lanre Phillips’ leadership philosophy and practical
            wisdom through curated video insights.
          </p>
        </motion.div>

        {/* Video Container */}
        <motion.div
          ref={containerRef}
          initial={{ opacity: 0, scale: 0.96 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="relative aspect-video overflow-hidden rounded-2xl border border-white/10 bg-black shadow-2xl"
        >
          <iframe
            ref={iframeRef}
            className="absolute inset-0 h-full w-full"
            src={`https://www.youtube.com/embed/${youtubeId}?enablejsapi=1&mute=1&controls=1&rel=0&playsinline=1`}
            title="Mentor Video"
            allow="autoplay; encrypted-media; picture-in-picture"
            allowFullScreen
          />

          {/* Overlay frame */}
          <div className="pointer-events-none absolute inset-0 rounded-2xl ring-1 ring-white/10" />
        </motion.div>
      </div>
    </section>
  );
}
