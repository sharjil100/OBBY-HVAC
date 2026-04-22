"use client";

import { PhoneOff, DollarSign, TrendingDown, ThumbsDown, Star } from "lucide-react";
import { motion } from "framer-motion";
import { fadeUp, stagger } from "@/lib/animations";

const PROBLEM_STAGGER = stagger(0.1);

export default function ProblemSection() {
  return (
    <section className="py-20" style={{ backgroundColor: "var(--dark)" }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center max-w-2xl mx-auto mb-14"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <div
            className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest px-3 py-1.5 rounded-full mb-4"
            style={{
              backgroundColor: "rgba(var(--accent-rgb), 0.12)",
              color: "var(--accent)",
              border: "1px solid rgba(var(--accent-rgb), 0.25)",
            }}
          >
            <span
              className="w-1.5 h-1.5 rounded-full inline-block"
              style={{ backgroundColor: "var(--accent)" }}
            />
            The Real Problem
          </div>

          <h2
            className="text-3xl sm:text-4xl font-black mb-4 leading-tight"
            style={{ color: "#ffffff", letterSpacing: "-0.02em" }}
          >
            Missed calls are costing you{" "}
            <span style={{ color: "var(--accent)" }}>real plumbing jobs</span>
          </h2>
        </motion.div>

        <motion.div
          className="grid lg:grid-cols-3 gap-8"
          variants={PROBLEM_STAGGER}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-60px" }}
        >
          {/* On a typical busy day */}
          <motion.div
            variants={fadeUp}
            className="rounded-2xl p-7 border"
            style={{
              backgroundColor: "rgba(255,255,255,0.04)",
              borderColor: "rgba(255,255,255,0.07)",
            }}
          >
            <p
              className="text-xs font-black uppercase tracking-widest mb-4"
              style={{ color: "var(--accent)" }}
            >
              On a typical busy day
            </p>

            <div className="space-y-3">
              {[
                { icon: "📞", text: "The phone rings while you're mid-job" },
                { icon: "🔧", text: "You can't pick up with wet hands or tools out" },
                { icon: "📵", text: "Calls go to voicemail or drop completely" },
              ].map(({ icon, text }, i) => (
                <div key={i} className="flex items-start gap-3">
                  <span className="text-base shrink-0 mt-0.5">{icon}</span>
                  <p
                    className="text-sm leading-relaxed"
                    style={{ color: "rgba(255,255,255,0.78)" }}
                  >
                    {text}
                  </p>
                </div>
              ))}
            </div>
          </motion.div>

          {/* What that really means */}
          <motion.div
            variants={fadeUp}
            className="rounded-2xl p-7 border"
            style={{
              backgroundColor: "rgba(255,255,255,0.04)",
              borderColor: "rgba(255,255,255,0.07)",
            }}
          >
            <p
              className="text-xs font-black uppercase tracking-widest mb-4"
              style={{ color: "rgba(255,255,255,0.45)" }}
            >
              What that really means
            </p>

            <div className="space-y-4">
              {[
                { icon: DollarSign, value: "Lost $150–$600 service calls" },
                { icon: TrendingDown, value: "Lost $500–$3,000 repair jobs" },
                { icon: TrendingDown, value: "Lost $3k–$15k+ repipes, sewer lines, and water heaters" },
                { icon: ThumbsDown, value: `"No one answered" turning into bad reviews` },
              ].map(({ icon: Icon, value }, i) => (
                <div key={i} className="flex items-start gap-3">
                  <div
                    className="w-7 h-7 rounded-lg flex items-center justify-center shrink-0 mt-0.5"
                    style={{ backgroundColor: "rgba(239,68,68,0.15)" }}
                  >
                    <Icon className="w-3.5 h-3.5 text-red-400" />
                  </div>
                  <p
                    className="text-sm leading-relaxed"
                    style={{ color: "rgba(255,255,255,0.78)" }}
                  >
                    {value}
                  </p>
                </div>
              ))}
            </div>
          </motion.div>

          {/* At the same time */}
          <motion.div
            variants={fadeUp}
            className="rounded-2xl p-7 border"
            style={{
              backgroundColor: "rgba(255,255,255,0.04)",
              borderColor: "rgba(255,255,255,0.07)",
            }}
          >
            <p
              className="text-xs font-black uppercase tracking-widest mb-4"
              style={{ color: "rgba(255,255,255,0.45)" }}
            >
              At the same time
            </p>

            <div className="space-y-3">
              {[
                { icon: Star, text: "Happy customers leave without leaving reviews" },
                { icon: TrendingDown, text: "A few bad experiences drag down your rating" },
                { icon: PhoneOff, text: "Competitors who answer faster win the work" },
              ].map(({ icon: Icon, text }, i) => (
                <div key={i} className="flex items-start gap-3">
                  <div
                    className="w-7 h-7 rounded-lg flex items-center justify-center shrink-0 mt-0.5"
                    style={{ backgroundColor: "rgba(var(--accent-rgb), 0.1)" }}
                  >
                    <Icon
                      className="w-3.5 h-3.5"
                      style={{ color: "var(--accent)" }}
                    />
                  </div>
                  <p
                    className="text-sm leading-relaxed"
                    style={{ color: "rgba(255,255,255,0.78)" }}
                  >
                    {text}
                  </p>
                </div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}