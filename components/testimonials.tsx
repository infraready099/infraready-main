"use client";

import { motion, type Variants } from "framer-motion";

const testimonials = [
  {
    quote:
      "I had $15k in AWS Activate credits I couldn't use. InfraReady had my entire production stack running in 22 minutes. Blew my mind.",
    name: "Alex K.",
    role: "Solo Founder",
    company: "YC W25",
    initials: "AK",
    avatarBg: "bg-sky-600",
    companyColor: "text-sky-400",
  },
  {
    quote:
      "We needed SOC2 for our enterprise pilot. InfraReady gave us the full baseline — GuardDuty, CloudTrail, Config — in one deploy. Saved us 3 months.",
    name: "Maria T.",
    role: "CTO",
    company: "Stackform",
    initials: "MT",
    avatarBg: "bg-violet-600",
    companyColor: "text-violet-400",
  },
  {
    quote:
      "Finally, a tool that treats AWS credits as a feature, not an afterthought. Our $10k Activate credits now actually get used.",
    name: "Sam R.",
    role: "Founder",
    company: "Dataloop",
    initials: "SR",
    avatarBg: "bg-emerald-600",
    companyColor: "text-emerald-400",
  },
];

const container: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12 } },
};

const item: Variants = {
  hidden: { opacity: 0, y: 28 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.25, 0, 0.25, 1] } },
};

export default function Testimonials() {
  return (
    <section className="py-24 lg:py-32 relative overflow-hidden">
      {/* Background atmosphere */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 70% 50% at 50% 0%, rgba(167,139,250,0.04) 0%, transparent 70%)",
        }}
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          className="text-center mb-14"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          viewport={{ once: true, margin: "-80px" }}
        >
          <p className="text-sm font-semibold text-sky-400 tracking-widest uppercase mb-3">
            Social proof
          </p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-ir-text tracking-tight">
            Founders love{" "}
            <span className="gradient-text">InfraReady</span>
          </h2>
          <p className="mt-4 text-ir-secondary max-w-xl mx-auto text-base">
            From vibe coders to CTOs — everyone deserves infrastructure
            that just works.
          </p>
        </motion.div>

        {/* Cards */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-5"
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-80px" }}
        >
          {testimonials.map((t) => (
            <motion.div
              key={t.name}
              variants={item}
              whileHover={{ y: -4, transition: { duration: 0.2 } }}
              className="group relative glass-card rounded-2xl p-6 glass-card-hover flex flex-col will-change-transform"
            >
              {/* Large decorative quote mark */}
              <div
                className="text-6xl font-serif leading-none mb-4 select-none"
                style={{
                  background: "linear-gradient(135deg, #38BDF8 0%, #67E8F9 40%, #A78BFA 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                  opacity: 0.5,
                  lineHeight: "0.8",
                }}
                aria-hidden="true"
              >
                &ldquo;
              </div>

              {/* Quote text */}
              <p className="text-sm text-ir-secondary leading-relaxed flex-1 mb-6">
                {t.quote}
              </p>

              {/* Attribution */}
              <div className="flex items-center gap-3 pt-4 border-t border-white/[0.06]">
                {/* Avatar */}
                <div
                  className={`w-10 h-10 rounded-full ${t.avatarBg} flex-shrink-0 flex items-center justify-center text-xs font-bold text-white border-2 border-white/10`}
                >
                  {t.initials}
                </div>

                <div className="min-w-0">
                  <p className="text-sm font-semibold text-ir-text truncate">
                    {t.name}
                  </p>
                  <div className="flex items-center gap-1.5 mt-0.5">
                    <span className="text-xs text-ir-muted">{t.role}</span>
                    <span className="text-ir-muted text-xs">·</span>
                    <span className={`text-xs font-medium ${t.companyColor}`}>
                      {t.company}
                    </span>
                  </div>
                </div>
              </div>

              {/* Hover glow */}
              <div
                className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
                style={{
                  background: "radial-gradient(circle at 30% 20%, rgba(14,165,233,0.05) 0%, transparent 60%)",
                }}
              />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
