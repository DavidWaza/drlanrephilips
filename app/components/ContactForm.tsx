"use client";

import { motion } from "framer-motion";
import { Send, Mail, MapPin, Phone } from "lucide-react";

export default function ContactForm() {
  return (
    <section className="relative pb-24 md:pb-32 bg-slate-950 overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-3xl h-full opacity-30 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-900/20 rounded-full blur-[100px]" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-indigo-900/20 rounded-full blur-[100px]" />
      </div>

      <div className="mx-auto max-w-7xl px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-start">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-slate-400 text-lg leading-relaxed mb-12">
              Whether you’re looking for strategic consulting, leadership
              coaching, or a keynote speaker for your next event, I’d love to
              hear from you.
            </p>

            <div className="space-y-8">
              <div className="flex items-start gap-6 group">
                <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-blue-900/20 flex items-center justify-center text-blue-400 group-hover:bg-blue-800/30 group-hover:text-blue-300 transition-all duration-300 border border-blue-800/30">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-white font-semibold text-lg mb-1">
                    Email
                  </h3>
                  <a
                    href="mailto:ceo@elpeeconsults.com"
                    className="text-slate-400 hover:text-white transition-colors"
                  >
                    ceo@elpeeconsults.com
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-6 group">
                <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-blue-900/20 flex items-center justify-center text-blue-400 group-hover:bg-blue-800/30 group-hover:text-blue-300 transition-all duration-300 border border-blue-800/30">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-white font-semibold text-lg mb-1">
                    Office
                  </h3>
                  <p className="text-slate-400">
                    Lagos, Nigeria
                    <br />
                    Available for global engagements
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-6 group">
                <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-blue-900/20 flex items-center justify-center text-blue-400 group-hover:bg-blue-800/30 group-hover:text-blue-300 transition-all duration-300 border border-blue-800/30">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-white font-semibold text-lg mb-1">
                    Phone
                  </h3>
                  <p className="text-slate-400">+234 (0) 802 290 6999</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-white/5 border border-white/10 rounded-3xl p-8 md:p-10 backdrop-blur-sm"
          >
            <form className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label
                    htmlFor="name"
                    className="text-sm font-medium text-slate-300 ml-1"
                  >
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    className="w-full bg-slate-950/50 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-blue-500/50 focus:ring-1 focus:ring-blue-500/50 transition-all placeholder:text-slate-600"
                    placeholder="John Doe"
                  />
                </div>
                <div className="space-y-2">
                  <label
                    htmlFor="email"
                    className="text-sm font-medium text-slate-300 ml-1"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="w-full bg-slate-950/50 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-blue-500/50 focus:ring-1 focus:ring-blue-500/50 transition-all placeholder:text-slate-600"
                    placeholder="john@example.com"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label
                  htmlFor="subject"
                  className="text-sm font-medium text-slate-300 ml-1"
                >
                  Subject
                </label>
                <select
                  id="subject"
                  className="w-full bg-slate-950/50 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-blue-500/50 focus:ring-1 focus:ring-blue-500/50 transition-all"
                >
                  <option value="" className="bg-slate-900">
                    Select a topic
                  </option>
                  <option value="consulting" className="bg-slate-900">
                    Consulting Inquiry
                  </option>
                  <option value="speaking" className="bg-slate-900">
                    Speaking Engagement
                  </option>
                  <option value="coaching" className="bg-slate-900">
                    Leadership Coaching
                  </option>
                  <option value="other" className="bg-slate-900">
                    Other
                  </option>
                </select>
              </div>

              <div className="space-y-2">
                <label
                  htmlFor="message"
                  className="text-sm font-medium text-slate-300 ml-1"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  rows={4}
                  className="w-full bg-slate-950/50 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-blue-500/50 focus:ring-1 focus:ring-blue-500/50 transition-all placeholder:text-slate-600 resize-none"
                  placeholder="How can I help you?"
                />
              </div>

              <button
                type="submit"
                className="w-full bg-blue-700 hover:bg-blue-600 text-white font-semibold py-4 rounded-xl transition-all duration-300 flex items-center justify-center gap-2 group shadow-lg shadow-blue-900/20"
              >
                Send Message
                <Send className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
