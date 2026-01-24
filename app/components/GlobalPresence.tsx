"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { MapPin } from "lucide-react";

type Location = {
  name: string;
  x: number;
  y: number;
  type: "HQ" | "Event";
};

type Continent = {
  name: string;
  locations: Location[];
};

const continents: Continent[] = [
  {
    name: "Africa",
    locations: [
      { name: "Lagos", x: 46, y: 45, type: "HQ" },
      { name: "Addis Ababa", x: 52, y: 48, type: "Event" },
      { name: "Johannesburg", x: 49, y: 65, type: "Event" },
    ],
  },
  {
    name: "Europe",
    locations: [{ name: "London", x: 46, y: 22, type: "Event" }],
  },
  {
    name: "North America",
    locations: [{ name: "New York", x: 22, y: 28, type: "Event" }],
  },
  {
    name: "Middle East",
    locations: [{ name: "Dubai", x: 56, y: 38, type: "Event" }],
  },
];

export default function GlobalPresence() {
  const [activeLocation, setActiveLocation] = useState<string | null>(null);
  const [activeContinent, setActiveContinent] = useState<string | null>(null);

  return (
    <section className="relative py-24 bg-slate-900 overflow-hidden">
      <div className="mx-auto max-w-7xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <h2 className="font-changa-one text-3xl md:text-4xl text-white mb-6">
            Global Footprint
          </h2>
          <div className="h-1 w-20 bg-blue-600 rounded-full mx-auto mb-6" />
          <p className="text-slate-400 max-w-2xl mx-auto">
            From Lagos to London, Dr. Phillips has impacted organizations and
            leaders across the globe through speaking engagements, consulting,
            and strategic partnerships.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-8 lg:gap-12 items-start">
          {/* Map Section */}
          <div className="lg:col-span-2 relative w-full aspect-[1.8/1] bg-slate-950/50 rounded-3xl border border-white/5 overflow-hidden shadow-2xl order-2 lg:order-1">
            {/* Realistic World Map SVG */}
            <svg
              viewBox="0 0 1009 650"
              className="w-full h-full opacity-40"
              fill="currentColor"
            >
              {/* World Map Paths - Simplified */}
              <g className="text-slate-700">
                {/* North America */}
                <path d="M167.3,84.9l-14,7l-4.9,18.9l11.2,16.1l25.2,4.9l18.9-11.2l4.9-25.2l-11.2-16.1L167.3,84.9z" />
                <path d="M261.1,124.1l-11.2,7l-16.1-2.1l-18.9,11.2l-4.9,18.9l11.2,16.1l25.2,4.9l18.9-11.2l4.9-25.2L261.1,124.1z" />

                {/* South America */}
                <path d="M250,220 L280,220 L290,260 L270,320 L250,300 L240,250 Z" />

                {/* Europe */}
                <path d="M450,100 L480,90 L500,110 L490,140 L460,140 L440,120 Z" />

                {/* Africa */}
                <path d="M440,160 L480,160 L500,200 L490,260 L450,250 L430,200 Z" />

                {/* Asia */}
                <path d="M520,100 L600,90 L650,120 L640,180 L580,200 L540,160 L510,140 Z" />

                {/* Australia */}
                <path d="M650,250 L700,250 L710,290 L660,300 L640,280 Z" />

                {/* Detailed Islands/Fragments for realism */}
                <path
                  d="M167.3,169.6c-4.2-2.1-7.7-1.4-11.2,0.7c-2.8,2.1-4.2,4.9-3.5,8.4c0.7,2.8,2.8,4.9,5.6,6.3c3.5,1.4,7,0.7,9.8-1.4
                  C170.8,181.5,171.5,178,170.1,174.5C169.4,171.7,167.3,169.6,167.3,169.6z"
                />
                <path
                  d="M228.2,143.7c-2.8-1.4-6.3-1.4-9.1,0c-2.8,1.4-4.2,4.2-4.2,7.7c0,3.5,2.1,6.3,4.9,7.7c2.8,1.4,6.3,1.4,9.1,0
                  c2.8-1.4,4.2-4.2,4.2-7.7C233.1,147.9,231,145.1,228.2,143.7z"
                />
                <path
                  d="M856.9,461.3c-2.8-2.1-6.3-2.8-9.8-1.4c-3.5,1.4-5.6,4.2-5.6,7.7c0,3.5,2.1,6.3,5.6,7.7c3.5,1.4,7,0.7,9.8-1.4
                  c2.1-2.1,2.8-5.6,1.4-8.4C857.6,463.4,856.9,461.3,856.9,461.3z"
                />
              </g>
            </svg>

            {/* Map Image Overlay */}
            <div
              className="absolute inset-0 opacity-20"
              style={{
                backgroundImage:
                  "radial-gradient(circle, #3b82f6 1px, transparent 1px)",
                backgroundSize: "20px 20px",
              }}
            />

            {/* Markers */}
            {continents.map((continent) =>
              continent.locations.map((loc, index) => (
                <motion.div
                  key={loc.name}
                  className="absolute"
                  style={{ left: `${loc.x}%`, top: `${loc.y}%` }}
                  initial={{ scale: 0, opacity: 0 }}
                  whileInView={{ scale: 1, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                >
                  <div
                    className="relative group cursor-pointer"
                    onMouseEnter={() => setActiveLocation(loc.name)}
                    onMouseLeave={() => setActiveLocation(null)}
                  >
                    {/* Pulse */}
                    <div
                      className={`absolute -inset-2 rounded-full blur-sm opacity-75 animate-pulse ${
                        activeContinent === continent.name ||
                        activeLocation === loc.name
                          ? "bg-blue-400"
                          : loc.type === "HQ"
                            ? "bg-blue-600"
                            : "bg-indigo-600"
                      }`}
                    />

                    {/* Dot */}
                    <div
                      className={`relative w-3 h-3 rounded-full border border-white shadow-lg transition-colors duration-300 ${
                        activeContinent === continent.name ||
                        activeLocation === loc.name
                          ? "bg-blue-400 scale-125"
                          : loc.type === "HQ"
                            ? "bg-blue-600"
                            : "bg-indigo-600"
                      }`}
                    />

                    {/* Tooltip */}
                    <motion.div
                      initial={{ opacity: 0, y: 10, scale: 0.9 }}
                      animate={{
                        opacity: activeLocation === loc.name ? 1 : 0,
                        y: activeLocation === loc.name ? -40 : 10,
                        scale: activeLocation === loc.name ? 1 : 0.9,
                        pointerEvents:
                          activeLocation === loc.name ? "auto" : "none",
                      }}
                      className="absolute left-1/2 -translate-x-1/2 bottom-full mb-2 bg-white text-slate-900 px-3 py-1.5 rounded-lg text-xs font-bold whitespace-nowrap shadow-xl z-20"
                    >
                      {loc.name}
                      <div className="absolute top-full left-1/2 -translate-x-1/2 border-4 border-transparent border-t-white" />
                    </motion.div>
                  </div>
                </motion.div>
              )),
            )}
          </div>

          {/* Continent List */}
          <div className="lg:col-span-1 space-y-6 order-1 lg:order-2">
            {continents.map((continent, idx) => (
              <motion.div
                key={continent.name}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1, duration: 0.5 }}
                className={`p-6 rounded-2xl border transition-all duration-300 cursor-pointer ${
                  activeContinent === continent.name
                    ? "bg-blue-900/20 border-blue-500/50"
                    : "bg-slate-950/30 border-white/5 hover:bg-slate-900/50 hover:border-white/10"
                }`}
                onMouseEnter={() => setActiveContinent(continent.name)}
                onMouseLeave={() => setActiveContinent(null)}
              >
                <div className="flex items-center justify-between mb-4">
                  <h3
                    className={`text-xl font-semibold ${
                      activeContinent === continent.name
                        ? "text-blue-400"
                        : "text-white"
                    }`}
                  >
                    {continent.name}
                  </h3>
                  <span className="text-xs font-medium px-2 py-1 rounded-full bg-white/5 text-slate-400 border border-white/5">
                    {continent.locations.length} Locations
                  </span>
                </div>

                <ul className="space-y-3">
                  {continent.locations.map((loc) => (
                    <li
                      key={loc.name}
                      className="flex items-center gap-3 text-slate-400 group"
                      onMouseEnter={() => setActiveLocation(loc.name)}
                      onMouseLeave={() => setActiveLocation(null)}
                    >
                      <MapPin
                        className={`w-4 h-4 transition-colors ${
                          activeLocation === loc.name
                            ? "text-blue-400"
                            : "text-slate-600 group-hover:text-blue-400"
                        }`}
                      />
                      <span
                        className={`text-sm transition-colors ${
                          activeLocation === loc.name
                            ? "text-white"
                            : "group-hover:text-white"
                        }`}
                      >
                        {loc.name}
                      </span>
                      {loc.type === "HQ" && (
                        <span className="text-[10px] font-bold uppercase tracking-wider text-blue-500 ml-auto">
                          HQ
                        </span>
                      )}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
