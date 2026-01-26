"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { X, ChevronLeft, ChevronRight, Calendar } from "lucide-react";

/* =========================
   Types
========================= */
type Event = {
  id: string;
  name: string;
  date: string;
  description?: string;
  location?: string;
  images: string[];
};

/* =========================
   Data
========================= */
const events: Event[] = [
  {
    id: "upcoming-1",
    name: "Investors Connect",
    date: "March 2026",
    description: "",
    location: "London, UK",
    images: ["/dr-lanre/investors-connect.jpeg"],
  },
  // {
  //   id: "upcoming-2",
  //   name: "Executive Coaching Masterclass",
  //   date: "2026-02-28",
  //   description: "Intensive coaching session for senior executives",
  //   images: ["/dr-lanre/hero-4.jpeg", "/dr-lanre/about.jpeg"],
  // },
  {
    id: "past-1",
    name: "Sell Smart, Close Big",
    date: "2026-01-24",
    images: ["/dr-lanre/sell-smart.jpeg"],
  },
  {
    id: "past-2",
    name: "Lagos Business School",
    date: "2025-12-10",
    images: ["/dr-lanre/lagos-business-school.jpg"],
  },
  {
    id: "past-3",
    name: "British Council",
    date: "2025-11-20",
    images: ["/dr-lanre/british-council.jpg"],
  },
  {
    id: "past-4",
    name: "National Youth Entrepreneurship Summit",
    date: "2025-11-20",
    images: ["/dr-lanre/national-youth-entr-summit.jpg"],
  },
  {
    id: "past-5",
    name: "African Women Entrepreneurship Program",
    date: "2025-11-20",
    images: ["/dr-lanre/african-women-entr-program.jpg"],
  },
  {
    id: "past-6",
    name: "The Mandela Washington Fellowship Association",
    date: "2025-11-20",
    images: ["/dr-lanre/mandela-assoc.jpg"],
  },
];

const galleryImages = [
  "/dr-lanre/WhatsApp Image 2026-01-17 at 20.24.08 (1).jpeg",
  "/dr-lanre/WhatsApp Image 2026-01-17 at 20.24.08 (3).jpeg",
  "/dr-lanre/WhatsApp Image 2026-01-17 at 20.24.08 (4).jpeg",
  "/dr-lanre/WhatsApp Image 2026-01-17 at 20.24.08.jpeg",
  "/dr-lanre/WhatsApp Image 2026-01-17 at 20.24.09 (2).jpeg",
  "/dr-lanre/WhatsApp Image 2026-01-17 at 20.24.10.jpeg",
  "/dr-lanre/WhatsApp Image 2026-01-17 at 20.24.11 (1).jpeg",
  "/dr-lanre/WhatsApp Image 2026-01-17 at 20.24.11.jpeg",
  "/dr-lanre/WhatsApp Image 2026-01-17 at 20.24.12 (1).jpeg",
  "/dr-lanre/WhatsApp Image 2026-01-17 at 20.24.12 (2).jpeg",
  "/dr-lanre/WhatsApp Image 2026-01-17 at 20.24.12 (3).jpeg",
  "/dr-lanre/WhatsApp Image 2026-01-17 at 20.24.12.jpeg",
  "/dr-lanre/WhatsApp Image 2026-01-17 at 20.24.13 (1).jpeg",
  "/dr-lanre/WhatsApp Image 2026-01-17 at 20.24.13 (2).jpeg",
  "/dr-lanre/WhatsApp Image 2026-01-17 at 20.24.14 (1).jpeg",
  "/dr-lanre/WhatsApp Image 2026-01-17 at 20.24.14 (2).jpeg",
  "/dr-lanre/WhatsApp Image 2026-01-17 at 20.24.14.jpeg",
  "/dr-lanre/WhatsApp Image 2026-01-17 at 20.24.15 (1).jpeg",
  "/dr-lanre/WhatsApp Image 2026-01-17 at 20.24.15 (2).jpeg",
  "/dr-lanre/WhatsApp Image 2026-01-17 at 20.24.15 (3).jpeg",
  "/dr-lanre/WhatsApp Image 2026-01-17 at 20.24.15.jpeg",
  "/dr-lanre/WhatsApp Image 2026-01-17 at 20.24.16.jpeg",
];

/* =========================
   Component
========================= */
export default function Gallery() {
  const [activeTab, setActiveTab] = useState<
    "all" | "upcoming" | "past" | "gallery"
  >("all");
  const [selectedImage, setSelectedImage] = useState<{
    src: string;
    allImages: string[];
    index: number;
  } | null>(null);

  const today = new Date().toISOString().split("T")[0];
  const upcomingEvents = events.filter((e) => e.date >= today);
  const pastEvents = events.filter((e) => e.date < today);

  const openLightbox = (src: string, allImages: string[]) => {
    setSelectedImage({
      src,
      allImages,
      index: allImages.indexOf(src),
    });
  };

  const navigate = (direction: "next" | "prev") => {
    if (!selectedImage) return;
    const total = selectedImage.allImages.length;
    const index =
      direction === "next"
        ? (selectedImage.index + 1) % total
        : (selectedImage.index - 1 + total) % total;

    setSelectedImage({
      ...selectedImage,
      src: selectedImage.allImages[index],
      index,
    });
  };

  const formatDate = (date: string) =>
    new Date(date).toLocaleDateString("en-US", {
      month: "short",
      day: "numeric",
      year: "numeric",
    });

  const tabs = [
    { id: "all", label: "All" },
    { id: "upcoming", label: "Upcoming Events" },
    { id: "past", label: "Past Events" },
    { id: "gallery", label: "Photo Gallery" },
  ];

  return (
    <section className="bg-slate-950 min-h-screen">
      <div className="mx-auto max-w-7xl px-6">
        {/* TABS SELECTOR */}
        <div className="flex justify-center mb-20">
          <div className="flex flex-wrap items-center justify-center gap-2 p-1.5 bg-white/5 backdrop-blur-md rounded-full border border-white/10">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() =>
                  setActiveTab(
                    tab.id as "all" | "upcoming" | "past" | "gallery",
                  )
                }
                className={`
                  relative px-6 py-2.5 rounded-full text-sm font-medium transition-all duration-300
                  ${
                    activeTab === tab.id
                      ? "text-white"
                      : "text-slate-400 hover:text-white"
                  }
                `}
              >
                {activeTab === tab.id && (
                  <motion.div
                    layoutId="activeTab"
                    className="absolute inset-0 bg-blue-600 rounded-full"
                    transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                  />
                )}
                <span className="relative z-10">{tab.label}</span>
              </button>
            ))}
          </div>
        </div>

        <div className="space-y-24">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 5 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -5 }}
              transition={{ duration: 0.3 }}
              style={{ willChange: "transform, opacity" }}
            >
              <div className="space-y-24">
                {/* =========================
                    Upcoming Events
                ========================= */}
                {(activeTab === "all" || activeTab === "upcoming") &&
                  upcomingEvents.length > 0 && (
                    <div>
                      <SectionHeader
                        title="Upcoming Events"
                        accent="from-blue-500 to-cyan-400"
                      />

                      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
                        {upcomingEvents.map((event, i) => (
                          <motion.div
                            key={event.id}
                            initial={{ opacity: 0, y: 15 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-50px" }}
                            transition={{ delay: i * 0.08 }}
                            style={{ willChange: "transform, opacity" }}
                            onClick={() =>
                              openLightbox(event.images[0], event.images)
                            }
                            className="group cursor-pointer rounded-3xl overflow-hidden
                                       bg-white/5 backdrop-blur-xl
                                       border border-white/10
                                       hover:border-blue-500/40
                                       hover:-translate-y-1
                                       transition-all duration-300"
                          >
                            <div className="relative aspect-[16/10]">
                              <Image
                                src={event.images[0]}
                                alt={event.name}
                                fill
                                className="object-cover group-hover:scale-105 transition-transform duration-500"
                              />
                            </div>

                            <div className="p-6">
                              <h3 className="font-changa-one text-xl text-white mb-2">
                                {event.name}
                              </h3>

                              <div className="flex items-center justify-between text-sm mb-3">
                                <span className="flex items-center gap-2 text-blue-400">
                                  <Calendar size={16} />
                                  {formatDate(event.date)}
                                </span>
                                <span className="px-3 py-1 text-xs rounded-full bg-blue-500/10 text-blue-400">
                                  Upcoming
                                </span>
                              </div>

                              {event.description && (
                                <p className="text-slate-400 text-sm line-clamp-2">
                                  {event.description}
                                </p>
                              )}
                            </div>
                          </motion.div>
                        ))}
                      </div>
                    </div>
                  )}

                {/* =========================
                    Past Events + Gallery
                ========================= */}
                {(activeTab === "all" ||
                  activeTab === "past" ||
                  activeTab === "gallery") && (
                  <div className="grid gap-16 lg:grid-cols-2">
                    {/* Past Events */}
                    {(activeTab === "all" || activeTab === "past") &&
                      pastEvents.length > 0 && (
                        <div>
                          <SectionHeader
                            title="Past Events"
                            accent="from-purple-500 to-fuchsia-400"
                          />

                          <div className="grid grid-cols-2 gap-6">
                            {pastEvents.map((event, i) => (
                              <motion.div
                                key={event.id}
                                initial={{ opacity: 0, scale: 0.98 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true, margin: "-50px" }}
                                transition={{ delay: i * 0.06 }}
                                style={{ willChange: "transform, opacity" }}
                                onClick={() =>
                                  openLightbox(event.images[0], event.images)
                                }
                                className="cursor-pointer rounded-2xl overflow-hidden
                                           bg-slate-900/50 hover:bg-slate-900/80
                                           transition-colors"
                              >
                                <div className="relative aspect-4/3">
                                  <Image
                                    src={event.images[0]}
                                    alt={event.name}
                                    fill
                                    className="object-cover"
                                  />
                                </div>
                                <div className="p-4">
                                  <p className="text-white text-sm font-changa-one line-clamp-2">
                                    {event.name}
                                  </p>
                                  <span className="text-xs text-slate-400">
                                    {formatDate(event.date)}
                                  </span>
                                </div>
                              </motion.div>
                            ))}
                          </div>
                        </div>
                      )}

                    {/* Gallery */}
                    {(activeTab === "all" || activeTab === "gallery") && (
                      <div>
                        <SectionHeader
                          title="Gallery"
                          accent="from-amber-400 to-orange-500"
                        />

                        <div className="grid grid-cols-2 gap-6">
                          {galleryImages.map((img, i) => (
                            <motion.div
                              key={i}
                              initial={{ opacity: 0, x: 10 }}
                              whileInView={{ opacity: 1, x: 0 }}
                              viewport={{ once: true, margin: "-50px" }}
                              transition={{ delay: i * 0.05 }}
                              style={{ willChange: "transform, opacity" }}
                              onClick={() => openLightbox(img, galleryImages)}
                              className="relative cursor-pointer rounded-2xl overflow-hidden border border-white/5"
                            >
                              <div className="relative aspect-[4/3]">
                                <Image
                                  src={img}
                                  alt="Gallery image"
                                  fill
                                  className="object-cover hover:scale-110 transition-transform duration-500"
                                />
                                <div className="absolute inset-0 bg-black/0 hover:bg-black/30 transition-colors" />
                              </div>
                            </motion.div>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                )}
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>

      {/* =========================
          Lightbox
      ========================= */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedImage(null)}
            className="fixed inset-0 z-50 bg-black/95 backdrop-blur-sm
                       flex items-center justify-center p-4"
          >
            <button
              className="absolute top-6 right-6 text-white/70 hover:text-white"
              onClick={() => setSelectedImage(null)}
            >
              <X size={32} />
            </button>

            <button
              className="absolute left-6 text-white/70 hover:text-white"
              onClick={(e) => {
                e.stopPropagation();
                navigate("prev");
              }}
            >
              <ChevronLeft size={40} />
            </button>

            <button
              className="absolute right-6 text-white/70 hover:text-white"
              onClick={(e) => {
                e.stopPropagation();
                navigate("next");
              }}
            >
              <ChevronRight size={40} />
            </button>

            <motion.div
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.9 }}
              onClick={(e) => e.stopPropagation()}
              className="relative w-full max-w-5xl h-[80vh]"
            >
              <Image
                src={selectedImage.src}
                alt="Preview"
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

/* =========================
   Section Header Component
========================= */
function SectionHeader({ title, accent }: { title: string; accent: string }) {
  return (
    <div className="mb-10">
      <h2 className="font-changa-one text-3xl md:text-4xl text-white mb-3">
        {title}
      </h2>
      <div className={`h-1 w-28 rounded-full bg-gradient-to-r ${accent}`} />
    </div>
  );
}
