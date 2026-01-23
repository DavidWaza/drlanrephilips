"use client";

import { motion } from "framer-motion";

// Social media data - update the hrefs with actual profile URLs
const socialLinks = [
  {
    name: "LinkedIn",
    href: "https://linkedin.com/in/drlanrephillips",
    icon: (
      <svg
        className="w-6 h-6"
        fill="currentColor"
        viewBox="0 0 24 24"
        aria-hidden="true"
      >
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
      </svg>
    ),
    color: "from-[#0077B5] to-[#005885]",
    hoverBg: "hover:bg-[#0077B5]",
  },
  {
    name: "Twitter",
    href: "https://twitter.com/drlanrephillips",
    icon: (
      <svg
        className="w-6 h-6"
        fill="currentColor"
        viewBox="0 0 24 24"
        aria-hidden="true"
      >
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
      </svg>
    ),
    color: "from-neutral-900 to-neutral-700",
    hoverBg: "hover:bg-neutral-900",
  },
  {
    name: "Instagram",
    href: "https://instagram.com/drlanrephillips",
    icon: (
      <svg
        className="w-6 h-6"
        fill="currentColor"
        viewBox="0 0 24 24"
        aria-hidden="true"
      >
        <path
          fillRule="evenodd"
          d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"
          clipRule="evenodd"
        />
      </svg>
    ),
    color: "from-[#E4405F] via-[#C13584] to-[#833AB4]",
    hoverBg:
      "hover:bg-gradient-to-r hover:from-[#E4405F] hover:via-[#C13584] hover:to-[#833AB4]",
  },
  {
    name: "Facebook",
    href: "https://facebook.com/drlanrephillips",
    icon: (
      <svg
        className="w-6 h-6"
        fill="currentColor"
        viewBox="0 0 24 24"
        aria-hidden="true"
      >
        <path
          fillRule="evenodd"
          d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
          clipRule="evenodd"
        />
      </svg>
    ),
    color: "from-[#1877F2] to-[#0d5bbf]",
    hoverBg: "hover:bg-[#1877F2]",
  },
  {
    name: "YouTube",
    href: "https://youtube.com/@drlanrephillips",
    icon: (
      <svg
        className="w-6 h-6"
        fill="currentColor"
        viewBox="0 0 24 24"
        aria-hidden="true"
      >
        <path
          fillRule="evenodd"
          d="M19.812 5.418c.861.23 1.538.907 1.768 1.768C21.998 8.746 22 12 22 12s0 3.255-.418 4.814a2.504 2.504 0 0 1-1.768 1.768c-1.56.419-7.814.419-7.814.419s-6.255 0-7.814-.419a2.505 2.505 0 0 1-1.768-1.768C2 15.255 2 12 2 12s0-3.255.417-4.814a2.507 2.507 0 0 1 1.768-1.768C5.744 5 11.998 5 11.998 5s6.255 0 7.814.418ZM15.194 12 10 15V9l5.194 3Z"
          clipRule="evenodd"
        />
      </svg>
    ),
    color: "from-[#FF0000] to-[#cc0000]",
    hoverBg: "hover:bg-[#FF0000]",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20, scale: 0.9 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      type: "spring" as const,
      stiffness: 100,
      damping: 12,
    },
  },
};

export default function SocialConnect() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-slate-900 via-slate-800 to-neutral-900">
      {/* Animated gradient orbs */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl" />

      {/* Subtle grid pattern */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `
            linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)
          `,
          backgroundSize: "48px 48px",
        }}
      />

      {/* Content */}
      <div className="relative mx-auto max-w-5xl px-6 py-20 md:py-28">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="text-center mb-14"
        >
          <div className="flex items-center justify-center gap-3 mb-6">
            <div className="h-px w-12 bg-blue-400/60" />
            <span className="font-montserrat text-xs uppercase tracking-[0.2em] text-blue-400 font-semibold"></span>
            <div className="h-px w-12 bg-blue-400/60" />
          </div>

          <h2
            className="
              font-changa-one
              text-4xl md:text-5xl
              leading-[1.05]
              tracking-tight
              text-neutral-300
            "
          >
            Stay Connected{" "}
            <span className="text-neutral-500">Dr. Phillips</span>
          </h2>
          <p className="mt-6 font-inter text-lg text-slate-300/80 max-w-2xl mx-auto leading-relaxed">
            Follow Dr. Lanre Phillips on social media for daily insights,
            motivational content, and exclusive updates on upcoming events.
          </p>
        </motion.div>

        {/* Social icons grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="flex flex-wrap items-center justify-center gap-5 md:gap-6"
        >
          {socialLinks.map((social) => (
            <motion.a
              key={social.name}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              variants={itemVariants}
              whileHover={{
                scale: 1.1,
                y: -8,
              }}
              whileTap={{ scale: 0.95 }}
              className={`
                group
                relative
                flex items-center justify-center
                w-16 h-16 md:w-20 md:h-20
                bg-white/5
                backdrop-blur-sm
                border border-white/10
                rounded-2xl
                text-white/70
                transition-all duration-300
                hover:text-white
                hover:border-white/30
                hover:shadow-2xl
                hover:shadow-blue-500/20
              `}
            >
              {/* Gradient overlay on hover */}
              <div
                className={`
                  absolute inset-0 rounded-2xl opacity-0 
                  group-hover:opacity-100 
                  bg-gradient-to-br ${social.color}
                  transition-opacity duration-300
                `}
              />

              {/* Icon */}
              <span className="relative z-10 transition-transform duration-300 group-hover:scale-110">
                {social.icon}
              </span>

              {/* Tooltip */}
              <span
                className="
                  absolute -bottom-10
                  font-inter text-xs font-medium
                  text-white/80
                  opacity-0 group-hover:opacity-100
                  transition-all duration-300
                  translate-y-2 group-hover:translate-y-0
                "
              >
                {social.name}
              </span>

              {/* Glow effect */}
              <div
                className={`
                  absolute inset-0 rounded-2xl
                  bg-gradient-to-br ${social.color}
                  opacity-0 group-hover:opacity-50
                  blur-xl
                  transition-opacity duration-300
                  -z-10
                `}
              />
            </motion.a>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
