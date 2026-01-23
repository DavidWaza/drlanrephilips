"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

interface Testimonial {
  name: string;
  role: string;
  image: string;
  quote: string;
}

const testimonials: Testimonial[] = [
  {
    name: "Jane Doe",
    role: "CEO, Tech Solutions",
    image: "/testimonials/jane.jpg",
    quote:
      "Dr. Lanre's guidance transformed our leadership approach. His insights are practical, actionable, and truly inspiring.",
  },
  {
    name: "John Smith",
    role: "Founder, GrowthHub",
    image: "/testimonials/john.jpg",
    quote:
      "Working with Dr. Lanre Phillips gave our team clarity and strategic direction we never had before.",
  },
  {
    name: "Mary Johnson",
    role: "HR Director, FinCorp",
    image: "/testimonials/mary.jpg",
    quote:
      "The training programs led by Dr. Phillips are phenomenal. Highly recommended for executives and teams alike.",
  },
];

const INTERVAL = 5000; // 5 seconds

export default function TestimonialSlider() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % testimonials.length);
    }, INTERVAL);

    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative py-28 bg-neutral-50">
      <div className="mx-auto max-w-4xl px-6 text-center">
        <h2 className="mb-12 font-montserrat text-3xl font-semibold text-neutral-900 sm:text-4xl">
          What People Say
        </h2>

        <div className="relative overflow-hidden rounded-2xl bg-white p-10 shadow-xl">
          <AnimatePresence mode="wait">
            <motion.div
              key={index}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.6, ease: "easeInOut" }}
              className="flex flex-col items-center gap-6"
            >
              <div className="relative h-20 w-20 rounded-full overflow-hidden border-2 border-neutral-300">
                <Image
                  src={testimonials[index].image}
                  alt={testimonials[index].name}
                  fill
                  className="object-cover"
                />
              </div>
              <p className="text-lg italic text-neutral-700 max-w-xl">
                “{testimonials[index].quote}”
              </p>
              <div>
                <p className="font-semibold text-neutral-900">
                  {testimonials[index].name}
                </p>
                <p className="text-sm text-neutral-500">
                  {testimonials[index].role}
                </p>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Navigation Dots */}
        <div className="mt-6 flex justify-center gap-3">
          {testimonials.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setIndex(idx)}
              className={`h-3 w-3 rounded-full transition-all duration-300 ${
                idx === index ? "bg-neutral-900" : "bg-neutral-400"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
