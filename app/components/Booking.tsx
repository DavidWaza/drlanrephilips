"use client";

import { motion } from "framer-motion";
import { useState } from "react";

const sessionTypes = [
  {
    id: "coaching",
    title: "Leadership Coaching",
    description:
      "One-on-one sessions designed to unlock your leadership potential and achieve breakthrough results.",
    duration: "60 minutes",
    icon: (
      <svg
        className="w-8 h-8"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
        />
      </svg>
    ),
    color: "from-blue-500 to-blue-600",
    bgGlow: "bg-blue-500/20",
  },
  {
    id: "mentorship",
    title: "Mentorship Program",
    description:
      "Ongoing guidance and support to help you navigate your career and personal growth journey.",
    duration: "45 minutes",
    icon: (
      <svg
        className="w-8 h-8"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
        />
      </svg>
    ),
    color: "from-purple-500 to-purple-600",
    bgGlow: "bg-purple-500/20",
  },
  {
    id: "speaking",
    title: "Speaking Engagement",
    description:
      "Invite Dr. Lanre Phillips to inspire your audience at conferences, corporate events, or workshops.",
    duration: "Custom",
    icon: (
      <svg
        className="w-8 h-8"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z"
        />
      </svg>
    ),
    color: "from-amber-500 to-orange-500",
    bgGlow: "bg-amber-500/20",
  },
];

export default function Booking() {
  const [selectedType, setSelectedType] = useState<string | null>(null);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!selectedType) return;

    setIsSubmitting(true);

    try {
      const response = await fetch("/api/send", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          ...formData,
          type: "Booking Request",
          subject: `Booking Request: ${sessionTypes.find((s) => s.id === selectedType)?.title}`,
          goals: formData.message, // Mapping message to goals for backward compatibility if needed, or just relying on message
        }),
      });

      if (!response.ok) {
        throw new Error("Failed to send booking request");
      }

      setIsSubmitted(true);

      // Reset after 3 seconds
      setTimeout(() => {
        setIsSubmitted(false);
        setSelectedType(null);
        setFormData({ name: "", email: "", phone: "", message: "" });
      }, 3000);
    } catch (error) {
      console.error("Error submitting form:", error);
      alert("Something went wrong. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section
      id="booking"
      className="relative overflow-hidden bg-gradient-to-b from-white via-slate-50 to-white"
    >
      {/* Background decorations */}
      <div className="absolute inset-0">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-blue-100/40 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-purple-100/40 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />
      </div>

      {/* Grid pattern */}
      <div
        className="absolute inset-0 opacity-[0.015]"
        style={{
          backgroundImage: `
            linear-gradient(rgba(0,0,0,0.05) 1px, transparent 1px),
            linear-gradient(90deg, rgba(0,0,0,0.05) 1px, transparent 1px)
          `,
          backgroundSize: "64px 64px",
        }}
      />

      <div className="relative mx-auto max-w-7xl px-6 py-20 md:py-32">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="flex items-center justify-center gap-3 mb-6">
            <div className="h-px w-12 bg-blue-600" />
            <span className="font-montserrat text-xs uppercase tracking-[0.2em] text-blue-600 font-semibold">
              Book a Session
            </span>
            <div className="h-px w-12 bg-blue-600" />
          </div>

          <h2
            className="
              font-changa-one
              text-4xl md:text-5xl lg:text-6xl
              leading-[1.05]
              tracking-tight
              text-neutral-900
            "
          >
            Start Your <span className="text-neutral-500">Transformation</span>
          </h2>

          <p className="mt-6 font-inter text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed">
            Choose the session type that best fits your needs and take the first
            step towards achieving your goals.
          </p>
        </motion.div>

        {/* Session Type Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {sessionTypes.map((session, index) => (
            <motion.button
              key={session.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              //   whileHover={{ y: -8, scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onClick={() => setSelectedType(session.id)}
              className={`
                relative group text-left p-8 rounded-3xl
                bg-white border-2 transition-all duration-300
                ${
                  selectedType === session.id
                    ? "border-blue-500 shadow-2xl shadow-blue-500/10"
                    : "border-slate-200 hover:border-slate-300 shadow-lg hover:shadow-xl"
                }
              `}
            >
              {/* Selection indicator */}
              {selectedType === session.id && (
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  className="absolute top-4 right-4 w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center"
                >
                  <svg
                    className="w-4 h-4 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                </motion.div>
              )}

              {/* Icon */}
              <div
                className={`
                  w-16 h-16 rounded-2xl mb-6
                  flex items-center justify-center
                  bg-gradient-to-br ${session.color}
                  text-white
                  shadow-lg
                  group-hover:scale-110 transition-transform duration-300
                `}
              >
                {session.icon}
              </div>

              {/* Content */}
              <h3 className="font-changa-one text-xl text-neutral-900 mb-2">
                {session.title}
              </h3>
              <p className="font-inter text-sm text-slate-600 leading-relaxed mb-4">
                {session.description}
              </p>

              {/* Duration badge */}
              <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-slate-100 rounded-full">
                <svg
                  className="w-4 h-4 text-slate-500"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
                <span className="font-inter text-xs font-medium text-slate-600">
                  {session.duration}
                </span>
              </div>

              {/* Hover glow effect */}
              <div
                className={`
                  absolute inset-0 rounded-3xl
                  ${session.bgGlow}
                  opacity-0 group-hover:opacity-100
                  blur-2xl -z-10
                  transition-opacity duration-300
                `}
              />
            </motion.button>
          ))}
        </div>

        {/* Booking Form */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{
            opacity: selectedType ? 1 : 0,
            y: selectedType ? 0 : 30,
            height: selectedType ? "auto" : 0,
          }}
          transition={{ duration: 0.4 }}
          className={`overflow-hidden ${!selectedType ? "pointer-events-none" : ""}`}
        >
          <div className="max-w-2xl mx-auto bg-white rounded-3xl border border-slate-200 shadow-2xl p-8 md:p-12">
            {isSubmitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="text-center py-8"
              >
                <div className="w-20 h-20 mx-auto mb-6 bg-green-100 rounded-full flex items-center justify-center">
                  <svg
                    className="w-10 h-10 text-green-500"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                </div>
                <h3 className="font-changa-one text-2xl text-neutral-900 mb-2">
                  Booking Request Sent!
                </h3>
                <p className="font-inter text-slate-600">
                  We&apos;ll get back to you within 24-48 hours.
                </p>
              </motion.div>
            ) : (
              <>
                <h3 className="font-changa-one text-2xl text-neutral-900 mb-2 text-center">
                  Complete Your Booking
                </h3>
                <p className="font-inter text-sm text-slate-500 text-center mb-8">
                  Fill in your details and we&apos;ll reach out to schedule your{" "}
                  {sessionTypes
                    .find((s) => s.id === selectedType)
                    ?.title?.toLowerCase()}{" "}
                  session.
                </p>

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label
                        htmlFor="name"
                        className="block font-inter text-sm font-medium text-slate-700 mb-2"
                      >
                        Full Name *
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        required
                        value={formData.name}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 outline-none transition-all duration-200 font-inter text-slate-900 placeholder:text-slate-400"
                        placeholder="John Doe"
                      />
                    </div>

                    <div>
                      <label
                        htmlFor="email"
                        className="block font-inter text-sm font-medium text-slate-700 mb-2"
                      >
                        Email Address *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 outline-none transition-all duration-200 font-inter text-slate-900 placeholder:text-slate-400"
                        placeholder="john@example.com"
                      />
                    </div>
                  </div>

                  <div>
                    <label
                      htmlFor="phone"
                      className="block font-inter text-sm font-medium text-slate-700 mb-2"
                    >
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 outline-none transition-all duration-200 font-inter text-slate-900 placeholder:text-slate-400"
                      placeholder="+234 XXX XXX XXXX"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="message"
                      className="block font-inter text-sm font-medium text-slate-700 mb-2"
                    >
                      Tell us about your goals
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={4}
                      value={formData.message}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 outline-none transition-all duration-200 font-inter text-slate-900 placeholder:text-slate-400 resize-none"
                      placeholder="What would you like to achieve through this session?"
                    />
                  </div>

                  <motion.button
                    type="submit"
                    disabled={isSubmitting}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="w-full py-4 px-8 bg-gradient-to-r from-slate-900 to-slate-800 text-white font-montserrat text-sm uppercase tracking-[0.15em] rounded-full shadow-lg hover:shadow-xl transition-all duration-300 disabled:opacity-70 disabled:cursor-not-allowed flex items-center justify-center gap-3"
                  >
                    {isSubmitting ? (
                      <>
                        <svg
                          className="animate-spin h-5 w-5"
                          fill="none"
                          viewBox="0 0 24 24"
                        >
                          <circle
                            className="opacity-25"
                            cx="12"
                            cy="12"
                            r="10"
                            stroke="currentColor"
                            strokeWidth="4"
                          />
                          <path
                            className="opacity-75"
                            fill="currentColor"
                            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                          />
                        </svg>
                        <span>Submitting...</span>
                      </>
                    ) : (
                      <>
                        <span>Request Booking</span>
                        <svg
                          className="w-5 h-5"
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
                      </>
                    )}
                  </motion.button>
                </form>
              </>
            )}
          </div>
        </motion.div>

        {/* Trust indicators */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mt-16 flex flex-wrap items-center justify-center gap-8 text-center"
        >
          <div className="flex items-center gap-2 text-slate-500">
            <svg
              className="w-5 h-5 text-green-500"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path
                fillRule="evenodd"
                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                clipRule="evenodd"
              />
            </svg>
            <span className="font-inter text-sm">
              Free Initial Consultation
            </span>
          </div>
          <div className="flex items-center gap-2 text-slate-500">
            <svg
              className="w-5 h-5 text-green-500"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path
                fillRule="evenodd"
                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                clipRule="evenodd"
              />
            </svg>
            <span className="font-inter text-sm">
              Response within 24-48 hours
            </span>
          </div>
          <div className="flex items-center gap-2 text-slate-500">
            <svg
              className="w-5 h-5 text-green-500"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path
                fillRule="evenodd"
                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                clipRule="evenodd"
              />
            </svg>
            <span className="font-inter text-sm">Flexible Scheduling</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
