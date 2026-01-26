"use client";

import { motion } from "framer-motion";
import { Users, Award, Globe } from "lucide-react";

const recognitions = [
  {
    title: "Board Membership and Academic Impact",
    description:
      "A notable board member of various organizations, Dr. Lanre Phillips provides strategic guidance and insight. His leadership roles underscore his commitment to shaping and guiding impactful initiatives in diverse sectors. Dr Lanre Phillips also serves as an adjunct faculty member at the prestigious Enterprise Development Centre of the Lagos Business School.",
    icon: Users,
    category: "Leadership",
  },
  {
    title: "Office of the Vice President",
    description:
      "He was honored at the Youth Opportunity Summit hosted by the Office of the Vice President, as a guest speaker, receiving appreciation from several organisations on the impact of his intervention.",
    icon: Award,
    category: "Honors",
  },
  {
    title: "International Affiliations",
    description:
      "Dr Lanre Phillips was Keynote Speaker at the Future of Work Summit held at the prestigious Imperial College, London as well as speaking at the Innovation Africa Conference In Addis Ababa, Ethiopia. His love for golf has him serving as the Director of Welfare and Socials at the IBB International Golf and Country Club.",
    icon: Globe,
    category: "Global",
  },
];

export default function NotableRecognition() {
  return (
    <section className="relative overflow-hidden bg-white py-24 md:py-32">
      {/* Background gradients - Light/Subtle */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-blue-50 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-slate-100 rounded-full blur-3xl" />
      </div>

      <div className="mx-auto max-w-7xl px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-20 max-w-3xl ml-auto text-right"
        >
          <h2 className="font-changa-one text-3xl md:text-4xl text-slate-900 tracking-tight mb-6">
            Notable Recognition
          </h2>
          <div className="h-1 w-20 bg-blue-900 rounded-full ml-auto" />
        </motion.div>

        <div className="relative max-w-4xl mx-auto">
          {/* Vertical Line - Right Side */}
          <div className="absolute right-[27px] top-0 bottom-0 w-px bg-linear-to-b from-blue-900/20 via-blue-900/10 to-transparent" />

          <div className="space-y-16">
            {recognitions.map((item, index) => {
              const Icon = item.icon;

              return (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="relative flex flex-row-reverse gap-8 md:gap-12"
                >
                  {/* Icon/Marker */}
                  <div className="relative z-10 flex-none">
                    <div className="flex h-14 w-14 items-center justify-center rounded-full bg-white border border-blue-100 ring-4 ring-white group hover:border-blue-500/50 transition-colors duration-300 shadow-sm">
                      <Icon className="h-6 w-6 text-blue-900 group-hover:text-blue-700 transition-colors" />
                    </div>
                  </div>

                  {/* Content */}
                  <div className="pt-2 text-right">
                    <span className="inline-flex items-center rounded-full bg-blue-50 px-3 py-1 text-xs font-medium text-blue-800 ring-1 ring-inset ring-blue-600/20 mb-3">
                      {item.category}
                    </span>

                    <h3 className="text-xl md:text-2xl font-semibold text-slate-900 mb-3">
                      {item.title}
                    </h3>

                    <p className="text-slate-600 leading-relaxed max-w-2xl ml-auto">
                      {item.description}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
