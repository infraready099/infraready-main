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
    avatarBg: "from-sky-500 to-sky-700",
    accentColor: "rgba(14,165,233,0.15)",
    borderColor: "rgba(14,165,233,0.2)",
    stat: { value: "22 min", label: "to production" },
  },
  {
    quote:
      "We needed SOC2 for our enterprise pilot. InfraReady gave us the full baseline — GuardDuty, CloudTrail, Config — in one deploy. Saved us 3 months.",
    name: "Maria T.",
    role: "CTO",
    company: "Stackform",
    initials: "MT",
    avatarBg: "from-violet-500 to-violet-700",
    accentColor: "rgba(167,139,250,0.15)",
    borderColor: "rgba(167,139,250,0.2)",
    stat: { value: "3 months", label: "saved on SOC2" },
  },
  {
    quote:
      "Finally, a tool that treats AWS credits as a feature. Our $10k Activate credits now actually get used on real infrastructure.",
    name: "Sam R.",
    role: "Founder",
    company: "Dataloop",
    initials: "SR",
    avatarBg: "from-emerald-500 to-emerald-700",
    accentColor: "rgba(52,211,153,0.15)",
    borderColor: "rgba(52,211,153,0.2)",
    stat: { value: "$10k", label: "credits activated" },
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

function StarRating() {
  return (
    <div className="flex items-center gap-0.5" aria-label="5 stars">
      {[...Array(5)].map((_, i) => (
        <svg key={i} className="w-3.5 h-3.5 text-yellow-400" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  );
}

export default function Testimonials() {
  return (
    <section className="py-24 lg:py-32 relative overflow-hidden">
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: "radial-gradient(ellipse 70% 50% at 50% 0%, rgba(167,139,250,0.04) 0%, transparent 70%)",
        }}
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-14"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          viewport={{ once: true, margin: "-80px" }}
        >
          <p className="text-xs font-semibold text-sky-400 tracking-widest uppercase mb-3">
            What founders say
          </p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-ir-text tracking-tight">
            Founders love{" "}
            <span className="gradient-text">InfraReady</span>
          </h2>
          <p className="mt-4 text-ir-secondary max-w-xl mx-auto text-sm">
            From vibe coders to CTOs — everyone deserves infrastructure that just works.
          </p>
        </motion.div>

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
              className="group relative rounded-2xl p-6 flex flex-col cursor-default will-change-transform overflow-hidden"
              style={{
                background: "rgba(255,255,255,0.025)",
                border: `1px solid ${t.borderColor}`,
              }}
            >
              {/* Accent glow top-left */}
              <div
                className="absolute top-0 left-0 w-32 h-32 pointer-events-none rounded-tl-2xl"
                style={{
                  background: `radial-gradient(circle at 0% 0%, ${t.accentColor} 0%, transparent 70%)`,
                }}
                aria-hidden="true"
              />

              {/* Stars */}
              <StarRating />

              {/* Quote */}
              <p className="mt-4 text-sm text-ir-secondary leading-relaxed flex-1 relative z-10">
                &ldquo;{t.quote}&rdquo;
              </p>

              {/* Stat callout */}
              <div
                className="mt-5 px-3 py-2 rounded-xl inline-flex items-center gap-2"
                style={{ background: t.accentColor, border: `1px solid ${t.borderColor}` }}
              >
                <span className="text-sm font-bold text-ir-text">{t.stat.value}</span>
                <span className="text-xs text-ir-muted">{t.stat.label}</span>
              </div>

              {/* Attribution */}
              <div className="flex items-center gap-3 mt-5 pt-4 border-t border-white/[0.06]">
                <div
                  className={`w-9 h-9 rounded-full bg-gradient-to-br ${t.avatarBg} flex-shrink-0 flex items-center justify-center text-[11px] font-bold text-white`}
                >
                  {t.initials}
                </div>
                <div className="min-w-0">
                  <p className="text-sm font-semibold text-ir-text">{t.name}</p>
                  <p className="text-[11px] text-ir-muted">
                    {t.role} · <span className="text-ir-secondary">{t.company}</span>
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
