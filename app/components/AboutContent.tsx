"use client";

import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { useState } from "react";

const milestones = [
  {
    year: "1998",
    title: "The Beginning",
    description:
      "Began mentoring young professionals, discovering a passion for leadership development.",
  },
  {
    year: "2005",
    title: "Corporate Training",
    description:
      "Expanded into corporate training, helping organizations build high-performing teams.",
  },
  {
    year: "2012",
    title: "International Speaker",
    description:
      "Started speaking at international conferences, reaching audiences across Africa and beyond.",
  },
  {
    year: "2020",
    title: "Digital Transformation",
    description:
      "Launched online coaching programs, making mentorship accessible to a global audience.",
  },
  {
    year: "Present",
    title: "Continuing Legacy",
    description:
      "Continuing to inspire thousands through coaching, speaking, and strategic mentorship.",
  },
];

const values = [
  {
    title: "Excellence",
    description:
      "Pursuing the highest standards in everything we do, never settling for mediocrity.",
    icon: (
      <svg
        className="w-6 h-6"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"
        />
      </svg>
    ),
  },
  {
    title: "Integrity",
    description:
      "Building trust through honesty, transparency, and ethical leadership in all interactions.",
    icon: (
      <svg
        className="w-6 h-6"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
        />
      </svg>
    ),
  },
  {
    title: "Impact",
    description:
      "Creating meaningful change that transforms individuals, organizations, and communities.",
    icon: (
      <svg
        className="w-6 h-6"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M13 10V3L4 14h7v7l9-11h-7z"
        />
      </svg>
    ),
  },
  {
    title: "Growth",
    description:
      "Embracing continuous learning and development as the path to lasting success.",
    icon: (
      <svg
        className="w-6 h-6"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"
        />
      </svg>
    ),
  },
];

// Full story content for modal
const fullStoryContent = [
  `Dr. Lanre Phillips is a seasoned professional whose experience has spanned over 25 years in FMCG, Banking and Telecommunications industry. In the social enterprise space, he has worked with several business hubs, incubators and accelerators in Nigeria and other parts of Africa. He has an unusual passion for the growth of Small business through the development of human capacity and implementation of sound business strategies which translate into operational excellence.`,
  `His interest is rooted in the firm belief that people remain a key investment in every organization and his resolve is to add value to these organizations in the area of idea generation, process definition and remodeling with a view to ensuring favorable financial results and the attainment of key organizational goals. The goal is to enhance the value of the businesses and its ability to achieve set objectives.`,
  `He is on the faculty of several training organisations and has trained extensively on Business Strategy, Storytelling, Organisational Behaviour, Business Branding, Customer Service, Leadership, Sales Techniques and Entrepreneurship amongst others. A proficient member of the Global Entrepreneurship Network, Nigeria team, he has worked in different capacities on projects such as You WIN, World Bank's Women X Programme and the Road to Growth by the Cherie Blaire Foundation. He is a member of the board of several organisations including the Integrated Institute of Professional Management (IIPM).`,
  `Lanre has a Bachelor's degree in Economics from the prestigious University of Ibadan – 1995, a Masters in Business Administration (MBA) and also an MSc Economics from the University of Jos. He obtained his Doctorate in Business Administration (DBA) from the Swiss Management Centre. Married with two children, He loves to Read, Play golf and Travel.`,
];

export default function AboutContent() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className="bg-white">
      {/* Read More Modal */}
      <AnimatePresence>
        {isModalOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm"
            onClick={() => setIsModalOpen(false)}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ duration: 0.3, ease: "easeOut" }}
              className="relative w-full max-w-2xl max-h-[80vh] bg-white rounded-3xl shadow-2xl overflow-hidden"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Modal Header */}
              <div className="sticky top-0 z-10 bg-white border-b border-slate-100 px-8 py-6">
                <div className="flex items-center justify-between">
                  <div>
                    <span className="font-montserrat text-xs uppercase tracking-[0.2em] text-[#5D747C] font-semibold">
                      About Dr. Lanre Phillips
                    </span>
                    <h3 className="font-changa-one text-2xl text-neutral-900 mt-1">
                      The Full Story
                    </h3>
                  </div>
                  <button
                    onClick={() => setIsModalOpen(false)}
                    className="w-10 h-10 rounded-full bg-slate-100 hover:bg-slate-200 flex items-center justify-center transition-colors duration-200"
                  >
                    <svg
                      className="w-5 h-5 text-slate-600"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M6 18L18 6M6 6l12 12"
                      />
                    </svg>
                  </button>
                </div>
              </div>

              {/* Modal Content - Scrollable */}
              <div className="px-8 py-6 overflow-y-auto max-h-[calc(80vh-100px)]">
                <div className="space-y-6 font-inter text-lg text-slate-600 leading-relaxed">
                  {fullStoryContent.map((paragraph, index) => (
                    <p key={index}>{paragraph}</p>
                  ))}
                </div>

                {/* Quote in modal */}
                <blockquote className="mt-10 pl-6 border-l-4 border-[#5D747C]">
                  <p className="font-inter text-xl italic text-slate-700">
                    &quot;True leadership is not about titles or
                    positions—it&apos;s about the impact you make on others and
                    the legacy you leave.&quot;
                  </p>
                  <footer className="mt-4 font-montserrat text-sm font-semibold text-slate-900">
                    — Dr. Lanre Phillips
                  </footer>
                </blockquote>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Main Story Section */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-0 right-0 w-96 h-96 bg-blue-50 rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-slate-100 rounded-full blur-3xl" />
        </div>

        <div className="relative mx-auto max-w-7xl px-6 py-20 md:py-28">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Image */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative"
            >
              <div className="relative h-[500px] md:h-[600px] rounded-3xl overflow-hidden shadow-2xl">
                <Image
                  src="/dr-lanre/about.jpeg"
                  alt="Dr. Lanre Phillips"
                  fill
                  className="object-cover"
                />
                {/* Overlay gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/40 via-transparent to-transparent" />
              </div>
            </motion.div>

            {/* Content */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="h-px w-12 bg-[#5D747C]" />
                <span className="font-montserrat text-xs uppercase tracking-[0.2em] text-[#5D747C] font-semibold">
                  Our Story
                </span>
              </div>

              <h2
                className="
                  font-changa-one
                  text-3xl sm:text-4xl md:text-5xl
                  leading-[1.1]
                  tracking-tight
                  text-neutral-900
                  mb-8
                "
              >
                A Journey of{" "}
                <span className="text-neutral-500">Purpose & Impact</span>
              </h2>

              {/* Trimmed text */}
              <div className="space-y-6 font-inter text-lg text-slate-600 leading-relaxed">
                <p>
                  Dr. Lanre Phillips is a visionary leader, boasting an
                  illustrious career spanning close to{" "}
                  <span className="font-semibold text-slate-900">
                    3 decades across dynamic industries such as FMCG, Banking,
                    Telecommunications, and Information Technology.
                  </span>{" "}
                  Widely acclaimed for his strategic acumen, Dr. Phillips is a
                  mastermind in driving organizational growth through the twin
                  pillars of human capacity development and flawless strategic
                  implementation.
                </p>

                <p>
                  His impactful collaborations with diverse organisations within
                  and outside the African continent underscore his commitment to
                  operational excellence. A two- time{" "}
                  <span className="font-semibold text-slate-900">
                    TED speaker
                  </span>
                  , Dr. Phillips not only shares his insights but actively
                  shapes the discourse on leadership sales strategies and
                  innovation amongst other topics. As the CEO/Principal Partner
                  at Elpee Consults, He continues to spearhead transformative
                  initiatives, leaving an indelible mark on the business
                  landscape.
                </p>
              </div>

              {/* Read More Button */}
              <motion.button
                onClick={() => setIsModalOpen(true)}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="mt-8 inline-flex items-center gap-2 px-6 py-3 bg-[#5D747C] text-white font-montserrat text-sm uppercase tracking-wider rounded-full hover:bg-[#4a5f66] transition-colors duration-300 shadow-lg"
              >
                Read More
                <svg
                  className="w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17 8l4 4m0 0l-4 4m4-4H3"
                  />
                </svg>
              </motion.button>

              {/* Quote */}
              <motion.blockquote
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="mt-10 pl-6 border-l-4 border-[#5D747C]"
              >
                <p className="font-inter text-xl italic text-slate-700">
                  &quot;True leadership is not about titles or
                  positions—it&apos;s about the impact you make on others and
                  the legacy you leave.&quot;
                </p>
                <footer className="mt-4 font-montserrat text-sm font-semibold text-slate-900">
                  — Dr. Lanre Phillips
                </footer>
              </motion.blockquote>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}
