"use client";

import { motion } from "framer-motion";
import SectionHeader from "@/components/ui/SectionHeader";

const steps = [
  {
    number: "01",
    title: "Brief",
    desc: "Tell your story through comprehensive project discovery and alignment.",
  },
  {
    number: "02",
    title: "Design",
    desc: "The vision is translated into creative concepts and structural refinements.",
  },
  {
    number: "03",
    title: "Review",
    desc: "Collaborative refinement to ensure every element meets our standard of excellence.",
  },
  {
    number: "04",
    title: "Deliver",
    desc: "Your project handed over with full handoff support and aftercare.",
  },
];

export default function WorkflowSection() {
  return (
    <section className="section-padding bg-[#080808]">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="mb-16 text-center">
          <SectionHeader
            eyebrow="The Workflow"
            title="How We"
            titleGold="Work"
            centered
            subtitle="A refined four-stage process that ensures clarity, quality, and exceptional outcomes for every project."
          />
        </div>

        {/* Steps */}
        <div className="relative">
          {/* Connector line */}
          <div className="hidden lg:block absolute top-9 left-[12.5%] right-[12.5%] h-px bg-gradient-to-r from-transparent via-[#C9A64B]/30 to-transparent" />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-4">
            {steps.map((step, i) => (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.12 }}
                className="flex flex-col items-center text-center gap-5"
              >
                {/* Step circle */}
                <div className="relative w-[72px] h-[72px] border border-[#2A2A2A] flex items-center justify-center bg-[#0F0F0F] shrink-0">
                  <span className="font-[family-name:var(--font-inter)] text-[10px] tracking-[0.15em] text-[#C9A64B] font-semibold">
                    {step.number}
                  </span>
                  {/* Corner marks */}
                  <div className="absolute -top-px -left-px w-2.5 h-2.5 border-t border-l border-[#C9A64B]/60" />
                  <div className="absolute -top-px -right-px w-2.5 h-2.5 border-t border-r border-[#C9A64B]/60" />
                  <div className="absolute -bottom-px -left-px w-2.5 h-2.5 border-b border-l border-[#C9A64B]/60" />
                  <div className="absolute -bottom-px -right-px w-2.5 h-2.5 border-b border-r border-[#C9A64B]/60" />
                </div>

                <div className="space-y-2">
                  <h3 className="font-[family-name:var(--font-cormorant)] text-2xl font-medium text-[#F5F2EA]">
                    {step.title}
                  </h3>
                  <p className="font-[family-name:var(--font-inter)] text-sm text-[#B7B1A3] leading-relaxed max-w-[200px] mx-auto">
                    {step.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
