"use client";

import { Check, Zap } from "lucide-react";
import { motion, type Variants } from "framer-motion";

const plans = [
  {
    name: "Starter",
    price: "$29",
    period: "/mo",
    description: "Perfect for solo founders validating their first product.",
    cta: "Get started",
    ctaStyle: "ghost",
    popular: false,
    features: [
      "1 environment (production)",
      "VPC + RDS + ECS + S3 + CloudFront",
      "GitHub OAuth connection",
      "Real-time deploy logs",
      "Email support",
      "OpenTofu state in your S3",
    ],
  },
  {
    name: "Pro",
    price: "$99",
    period: "/mo",
    description: "For growing startups that need multi-environment workflows.",
    cta: "Get early access",
    ctaStyle: "sky",
    popular: true,
    features: [
      "Unlimited environments",
      "All 11 modules (WAF, KMS, Backup, Inspector, Macie)",
      "Multi-region deployments",
      "SOC2 audit evidence pack",
      "Priority support (Slack)",
      "AWS Activate credits assistance",
      "Custom domain + ACM certs",
    ],
  },
  {
    name: "Enterprise",
    price: "Custom",
    period: "",
    description: "For teams that need compliance, RBAC, and dedicated support.",
    cta: "Talk to us",
    ctaStyle: "ghost",
    popular: false,
    features: [
      "Everything in Pro",
      "Teams + RBAC (multi-user)",
      "HIPAA compliance module",
      "Dedicated Slack channel",
      "Custom SLAs",
      "Security review call",
      "Infra cost optimization audit",
    ],
  },
];

const container: Variants = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.12 },
  },
};

const cardItem = (isPopular: boolean): Variants => ({
  hidden: { opacity: 0, y: 24, scale: isPopular ? 0.98 : 1 },
  show: {
    opacity: 1,
    y: 0,
    scale: isPopular ? 1.02 : 1,
    transition: { duration: 0.5, ease: [0.25, 0, 0.25, 1] },
  },
});

export default function Pricing() {
  return (
    <section
      id="pricing"
      className="py-24 lg:py-32 relative overflow-hidden"
    >
      {/* Background */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 50% 40% at 50% 100%, rgba(167,139,250,0.04) 0%, transparent 70%)",
        }}
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          className="text-center mb-6"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          viewport={{ once: true, margin: "-80px" }}
        >
          <p className="text-sm font-semibold text-sky-400 tracking-widest uppercase mb-3">
            Pricing
          </p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-ir-text tracking-tight">
            Simple pricing.{" "}
            <span className="gradient-text">No surprises.</span>
          </h2>
        </motion.div>
        <motion.p
          className="text-center text-ir-secondary mb-16 max-w-lg mx-auto text-sm"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: "easeOut", delay: 0.1 }}
          viewport={{ once: true, margin: "-80px" }}
        >
          We charge you a flat monthly fee.{" "}
          <span className="text-ir-text font-medium">
            You pay AWS directly
          </span>{" "}
          for the resources you use — in your own account.
        </motion.p>

        {/* Cards */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 items-stretch"
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-80px" }}
        >
          {plans.map((plan) => {
            if (plan.popular) {
              return (
                <motion.div
                  key={plan.name}
                  variants={cardItem(true)}
                  className="relative flex flex-col"
                >
                  {/* Popular badge */}
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 z-10">
                    <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold text-white bg-gradient-to-r from-sky-500 to-violet-500">
                      <Zap size={11} fill="white" />
                      Most popular
                    </div>
                  </div>

                  {/* Gradient border card */}
                  <div className="gradient-border flex-1 flex flex-col p-7 backdrop-blur-md">
                    {/* Inner glow */}
                    <div
                      className="absolute inset-0 rounded-2xl pointer-events-none"
                      style={{
                        background:
                          "radial-gradient(ellipse 60% 40% at 50% 0%, rgba(14,165,233,0.06) 0%, transparent 70%)",
                      }}
                    />

                    <div className="relative">
                      <h3 className="text-lg font-bold text-ir-text mb-1">
                        {plan.name}
                      </h3>
                      <div className="flex items-end gap-1 mb-3">
                        <span className="text-4xl font-bold text-ir-text tracking-tight">
                          {plan.price}
                        </span>
                        {plan.period && (
                          <span className="text-ir-muted text-base mb-1">
                            {plan.period}
                          </span>
                        )}
                      </div>
                      <p className="text-sm text-ir-secondary mb-7">
                        {plan.description}
                      </p>

                      <a
                        href="#waitlist"
                        className="block w-full text-center py-3 rounded-xl text-sm font-semibold text-white btn-sky mb-7"
                      >
                        {plan.cta}
                      </a>

                      <ul className="space-y-3">
                        {plan.features.map((feature) => (
                          <li key={feature} className="flex items-start gap-3">
                            <Check
                              size={15}
                              className="text-sky-400 flex-shrink-0 mt-0.5"
                              strokeWidth={2.5}
                            />
                            <span className="text-sm text-ir-secondary">
                              {feature}
                            </span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </motion.div>
              );
            }

            return (
              <motion.div
                key={plan.name}
                variants={cardItem(false)}
                className="glass-card glass-card-hover rounded-2xl p-7 flex flex-col"
              >
                <h3 className="text-lg font-bold text-ir-text mb-1">
                  {plan.name}
                </h3>
                <div className="flex items-end gap-1 mb-3">
                  <span className="text-4xl font-bold text-ir-text tracking-tight">
                    {plan.price}
                  </span>
                  {plan.period && (
                    <span className="text-ir-muted text-base mb-1">
                      {plan.period}
                    </span>
                  )}
                </div>
                <p className="text-sm text-ir-secondary mb-7">
                  {plan.description}
                </p>

                <a
                  href="#waitlist"
                  className="block w-full text-center py-3 rounded-xl text-sm font-semibold text-ir-secondary btn-ghost hover:text-ir-text mb-7"
                >
                  {plan.cta}
                </a>

                <ul className="space-y-3 flex-1">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-3">
                      <Check
                        size={15}
                        className="text-ir-muted flex-shrink-0 mt-0.5"
                        strokeWidth={2.5}
                      />
                      <span className="text-sm text-ir-secondary">
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Footnote */}
        <motion.p
          className="text-center mt-10 text-xs text-ir-muted"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          viewport={{ once: true, margin: "-80px" }}
        >
          All plans include a 14-day free trial. No credit card required to
          start.{" "}
          <span className="text-ir-secondary">
            AWS resource costs billed directly by AWS to your account.
          </span>
        </motion.p>
      </div>
    </section>
  );
}
