"use client";

import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";

interface Testimonial {
  name: string;
  role: string;
  image: string;
  quote: string;
  company?: string;
}

const testimonials: Testimonial[] = [
  {
    name: "Michael Oluwagbemi",
    role: "Chief Excutive Officer, Presidential Compressed Natural Gas initiative",
    // company: "Tech Solutions",
    image: "/dr-lanre/mike.jpg",
    quote:
      "Dr. Lanre's Phillips is a teacher, mentor and facilitator per excellennce. Someone who engagement comes naturally, he is able to connect with his audience at the basic level, annd the gamut of his extraordinary experience comes to bear in ordinary ways that conveys the knnowledge being imparted without impediments.",
  },
  {
    name: "Dr Wale Anifowose",
    role: "MD Flobal Entrepreneurship Network, Nigeria & Managing Director, Enterprise Development Center",
    // company: "GrowthHub",
    image: "/dr-lanre/dr-wale-anifowose.jpg",
    quote:
      "I have worked with Dr. Lanre Phillips for over a decade, he is committed business development expert with a special interest for supporting SMEs across various sectors.",
  },
  {
    name: "Sam Obafemi",
    role: "President SOPCA",
    company: "SOPCA",
    image: "/dr-lanre/sam-obafemi.png",
    quote:
      "Dr. Lanre Phillips is a walking solution. His biggest asset is his use of common experience and daily lifestyle to buttress how to think, adapt and proffeer common sense solutions to life and business problems. He's your go to guy any day.",
  },
  {
    name: "Jimi Tewe",
    role: "CEO, The Jimi Tewe Company",
    // company: "SOPCA",
    image: "/dr-lanre/jimi-tewe.jpeg",
    quote:
      "Learning through Dr. Lanre Phillips has been really beneficial to me as a person and an organization.",
  },
  {
    name: "Lamide Johnson",
    role: "Storyteller, Author, Teacher",
    // company: "SOPCA",
    image: "/dr-lanre/lamide-johnson.webp",
    quote:
      "Working with Dr. Lanre Phillips was a pacesetter for me. He immediately turned into a mentor as his unnique unnderstanding of business issues and uncommon approach to solving real problems remainns outstanding.",
  },
];

const INTERVAL = 6000;

export default function TestimonialSlider() {
  const [index, setIndex] = useState(0);
  const [direction, setDirection] = useState(0);

  const handleNext = useCallback(() => {
    setDirection(1);
    setIndex((prev) => (prev + 1) % testimonials.length);
  }, []);

  const handlePrev = useCallback(() => {
    setDirection(-1);
    setIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  }, []);

  useEffect(() => {
    const timer = setInterval(() => {
      handleNext();
    }, INTERVAL);

    return () => clearInterval(timer);
  }, [handleNext]);

  const handleDotClick = (idx: number) => {
    setDirection(idx > index ? 1 : -1);
    setIndex(idx);
  };

  const slideVariants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 20 : -20,
      opacity: 0,
      scale: 0.98,
    }),
    center: {
      x: 0,
      opacity: 1,
      scale: 1,
    },
    exit: (direction: number) => ({
      x: direction > 0 ? -20 : 20,
      opacity: 0,
      scale: 0.98,
    }),
  };

  return (
    <section className="relative py-20 bg-linear-to-br from-neutral-50 via-white to-neutral-100 overflow-hidden">
      {/* Decorative Background Elements */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-20 left-10 w-72 h-72 bg-blue-200 rounded-full mix-blend-multiply filter blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-72 h-72 bg-purple-200 rounded-full mix-blend-multiply filter blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div className="relative mx-auto max-w-5xl px-6">
        {/* Header */}
        <div className="text-center mb-8">
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6 }}
            style={{ willChange: "transform, opacity" }}
          >
            <h2
              className="
              font-changa-one
              text-4xl md:text-5xl
              leading-[1.05]
              tracking-tight
              text-neutral-900
            "
            >
              What <span className="text-neutral-500">People Say</span>
            </h2>
            <p className="text-lg text-neutral-600 max-w-2xl mx-auto mt-2">
              Hear from leaders who&apos;ve transformed their organizations with
              Dr. Lanre&apos;s guidance
            </p>
          </motion.div>
        </div>

        {/* Testimonial Card */}
        <div className="relative">
          <div className="relative overflow-hidden rounded-3xl bg-white p-12 sm:p-16 shadow-2xl border border-neutral-100">
            {/* Quote Icon */}
            <div className="absolute top-8 left-8 text-neutral-200">
              <Quote size={64} fill="currentColor" />
            </div>

            <AnimatePresence mode="wait" custom={direction}>
              <motion.div
                key={index}
                custom={direction}
                variants={slideVariants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{
                  x: { type: "spring", stiffness: 300, damping: 30 },
                  opacity: { duration: 0.3 },
                  scale: { duration: 0.3 },
                }}
                style={{ willChange: "transform, opacity" }}
                className="relative z-10"
              >
                {/* Quote */}
                <p className="text-xl sm:text-2xl text-neutral-700 leading-relaxed mb-10 max-w-3xl mx-auto text-center font-light">
                  &quot;{testimonials[index].quote}&quot;
                </p>

                {/* Author Info */}
                <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
                  <div className="relative">
                    <div className="relative h-24 w-24 rounded-full overflow-hidden ring-4 ring-neutral-200 shadow-lg">
                      <Image
                        src={testimonials[index].image}
                        alt={testimonials[index].name}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div className="absolute -bottom-2 -right-2 bg-linear-to-r from-blue-500 to-purple-500 rounded-full p-2">
                      <svg
                        className="w-5 h-5 text-white"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </div>
                  </div>

                  <div className="text-center sm:text-left">
                    <p className="font-bold text-xl text-neutral-900">
                      {testimonials[index].name}
                    </p>
                    <p className="text-neutral-600 font-medium">
                      {testimonials[index].role}
                    </p>
                    <p className="text-sm text-neutral-500">
                      {testimonials[index].company}
                    </p>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Navigation Arrows */}
          <button
            onClick={handlePrev}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 sm:-translate-x-6 bg-white rounded-full p-3 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 group border border-neutral-200"
            aria-label="Previous testimonial"
          >
            <ChevronLeft className="w-6 h-6 text-neutral-700 group-hover:text-neutral-900" />
          </button>

          <button
            onClick={handleNext}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 sm:translate-x-6 bg-white rounded-full p-3 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 group border border-neutral-200"
            aria-label="Next testimonial"
          >
            <ChevronRight className="w-6 h-6 text-neutral-700 group-hover:text-neutral-900" />
          </button>
        </div>

        {/* Navigation Dots */}
        <div className="mt-10 flex justify-center gap-3">
          {testimonials.map((_, idx) => (
            <button
              key={idx}
              onClick={() => handleDotClick(idx)}
              className={`h-2.5 rounded-full transition-all duration-300 ${
                idx === index
                  ? "bg-[#060B18] w-12"
                  : "bg-neutral-300 w-2.5 hover:bg-neutral-400"
              }`}
              aria-label={`Go to testimonial ${idx + 1}`}
            />
          ))}
        </div>

        {/* Progress Bar */}
        <div className="mt-6 max-w-md mx-auto">
          <div className="h-1 bg-neutral-200 rounded-full overflow-hidden">
            <motion.div
              key={index}
              initial={{ width: "0%" }}
              animate={{ width: "100%" }}
              transition={{ duration: INTERVAL / 1000, ease: "linear" }}
              className="h-full bg-linear-to-r bg-[#060B18]"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
