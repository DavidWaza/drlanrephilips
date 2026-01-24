"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { X, ChevronLeft, ChevronRight } from "lucide-react";

const images = [
  "/dr-lanre/hero-1.jpeg",
  "/dr-lanre/hero-2.jpeg",
  "/dr-lanre/hero-3.jpeg",
  "/dr-lanre/hero-4.jpeg",
  "/dr-lanre/about.jpeg",
  "/dr-lanre/WhatsApp Image 2026-01-17 at 20.24.08.jpeg",
  "/dr-lanre/WhatsApp Image 2026-01-17 at 20.24.10.jpeg",
  "/dr-lanre/WhatsApp Image 2026-01-17 at 20.24.15 (3).jpeg",
  "/dr-lanre/WhatsApp Image 2026-01-17 at 20.24.16.jpeg",
  "/dr-lanre/WhatsApp Image 2026-01-17 at 20.24.08 (1).jpeg",
  "/dr-lanre/WhatsApp Image 2026-01-17 at 20.24.08 (3).jpeg",
  "/dr-lanre/WhatsApp Image 2026-01-17 at 20.24.08 (4).jpeg",
  "/dr-lanre/WhatsApp Image 2026-01-17 at 20.24.09 (2).jpeg",
  "/dr-lanre/WhatsApp Image 2026-01-17 at 20.24.11.jpeg",
  "/dr-lanre/WhatsApp Image 2026-01-17 at 20.24.12.jpeg",
];

export default function Gallery() {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  const handleNext = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (selectedImage !== null) {
      setSelectedImage((prev) =>
        prev === images.length - 1 ? 0 : (prev as number) + 1,
      );
    }
  };

  const handlePrev = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (selectedImage !== null) {
      setSelectedImage((prev) =>
        prev === 0 ? images.length - 1 : (prev as number) - 1,
      );
    }
  };

  return (
    <section className="py-24 md:py-12 bg-slate-950 min-h-screen">
      <div className="mx-auto max-w-7xl px-6">
        {/* Masonry Grid */}
        <div className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6">
          {images.map((src, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              className="break-inside-avoid relative group cursor-pointer overflow-hidden rounded-2xl"
              onClick={() => setSelectedImage(index)}
            >
              <div className="relative w-full">
                <Image
                  src={src}
                  alt={`Gallery image ${index + 1}`}
                  width={600}
                  height={800}
                  className="w-full h-auto object-cover transition-transform duration-500 group-hover:scale-110"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {selectedImage !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 backdrop-blur-sm p-4"
            onClick={() => setSelectedImage(null)}
          >
            <button
              className="absolute top-6 right-6 text-white/70 hover:text-white transition-colors"
              onClick={() => setSelectedImage(null)}
            >
              <X size={32} />
            </button>

            <button
              className="absolute left-4 md:left-8 text-white/70 hover:text-white transition-colors p-2"
              onClick={handlePrev}
            >
              <ChevronLeft size={40} />
            </button>

            <button
              className="absolute right-4 md:right-8 text-white/70 hover:text-white transition-colors p-2"
              onClick={handleNext}
            >
              <ChevronRight size={40} />
            </button>

            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="relative max-w-5xl max-h-[85vh] w-full h-full flex items-center justify-center"
              onClick={(e) => e.stopPropagation()}
            >
              <Image
                src={images[selectedImage]}
                alt="Gallery preview"
                fill
                className="object-contain"
                priority
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
