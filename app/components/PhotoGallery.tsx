"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Camera } from "lucide-react";
import { DR_LANRE_GALLERY_IMAGES } from "@/app/data/drLanreGalleryImages";

export type PhotoGalleryProps = {
  /** Defaults to every raster image in `/public/dr-lanre/`. */
  images?: string[];
  onOpen: (src: string, allImages: string[]) => void;
  className?: string;
};

/**
 * Masonry-style grid for candid photos. Image list is sourced only from
 * `public/dr-lanre/` (see `DR_LANRE_GALLERY_IMAGES`).
 */
export default function PhotoGallery({
  images = DR_LANRE_GALLERY_IMAGES,
  onOpen,
  className = "",
}: PhotoGalleryProps) {
  return (
    <div className={className}>
      <header className="mb-8 md:mb-10">
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4">
          <div className="flex items-start gap-4">
            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-amber-500/20 to-orange-600/10 border border-amber-500/20">
              <Camera className="h-6 w-6 text-amber-400" aria-hidden />
            </div>
            <div>
              <p className="text-xs font-semibold uppercase tracking-widest text-amber-500/90 mb-1">
                Photo gallery
              </p>
              <h2 className="font-changa-one text-2xl md:text-3xl text-white">
                Moments & candids
              </h2>
              <p className="text-slate-400 text-sm mt-1 max-w-md">
                Photos from <span className="text-slate-300">public/dr-lanre</span>—informal
                shots from sessions and events (not the poster grid).
              </p>
            </div>
          </div>
        </div>
        <div className="mt-6 h-1 w-28 rounded-full bg-gradient-to-r from-amber-400 to-orange-500" />
      </header>

      <div className="columns-1 sm:columns-2 gap-4 [column-fill:balance]">
        {images.map((src, i) => {
          const aspect =
            i % 5 === 0
              ? "aspect-[4/5]"
              : i % 5 === 2
                ? "aspect-[3/4]"
                : "aspect-square";
          return (
            <motion.button
              type="button"
              key={src}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ delay: (i % 6) * 0.04, duration: 0.35 }}
              onClick={() => onOpen(src, images)}
              className="group mb-4 w-full break-inside-avoid text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-500/60 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950 rounded-2xl"
            >
              <div
                className="relative overflow-hidden rounded-2xl border border-white/10 bg-slate-900/40 shadow-lg shadow-black/20
                ring-1 ring-white/5 transition-all duration-300
                group-hover:border-amber-500/25 group-hover:ring-amber-500/10 group-hover:shadow-amber-950/20"
              >
                <div className={`relative ${aspect}`}>
                  <Image
                    src={src}
                    alt="Photo from dr-lanre gallery"
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                  />
                  <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-slate-950/50 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                </div>
                <span className="sr-only">Open in viewer</span>
              </div>
            </motion.button>
          );
        })}
      </div>
    </div>
  );
}
