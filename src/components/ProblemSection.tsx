"use client";

import { PhoneOff, DollarSign, TrendingDown, ThumbsDown, Star } from "lucide-react";
import { motion } from "framer-motion";
import { fadeUp, stagger } from "@/lib/animations";



const PROBLEM_STAGGER = stagger(0.1);

export default function ProblemSection() {
  return (
    <section className="py-20" style={{ backgroundColor: "#17191E" }}>
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
            style={{ backgroundColor: "rgba(204,255,51,0.12)", color: "#CCFF33", border: "1px solid rgba(204,255,51,0.25)" }}
          >
            <span className="w-1.5 h-1.5 rounded-full inline-block" style={{ backgroundColor: "#CCFF33" }} />
            The Real Problem
          </div>
          <h2 className="text-3xl sm:text-4xl font-black text-white mb-4 leading-tight" style={{ letterSpacing: "-0.02em" }}>
            Voicemail is quietly killing{" "}
            <span style={{ color: "#CCFF33" }}>your best jobs</span>
          </h2>
        </motion.div>

        <motion.div
          className="grid lg:grid-cols-3 gap-8"
          variants={PROBLEM_STAGGER}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-60px" }}
        >
          {/* During a heat wave */}
          <motion.div variants={fadeUp} className="rounded-2xl p-7 border" style={{ backgroundColor: "rgba(255,255,255,0.04)", borderColor: "rgba(255,255,255,0.07)" }}>
            <p className="text-xs font-black uppercase tracking-widest mb-4" style={{ color: "#CCFF33" }}>
              During a heat wave or cold snap
            </p>
            <div className="space-y-3">
              {[
                { icon: "📞", text: "The phone rings nonstop" },
                { icon: "🛠️", text: "Your techs are on ladders, in attics, or driving between calls" },
                { icon: "📵", text: "Half the calls hit voicemail or get missed" },
              ].map(({ icon, text }, i) => (
                <div key={i} className="flex items-start gap-3">
                  <span className="text-base shrink-0 mt-0.5">{icon}</span>
                  <p className="text-gray-300 text-sm leading-relaxed">{text}</p>
                </div>
              ))}
            </div>
          </motion.div>

          {/* What that really means */}
          <motion.div variants={fadeUp} className="rounded-2xl p-7 border" style={{ backgroundColor: "rgba(255,255,255,0.04)", borderColor: "rgba(255,255,255,0.07)" }}>
            <p className="text-xs font-black uppercase tracking-widest mb-4 text-gray-500">
              What that really means
            </p>
            <div className="space-y-4">
              {[
                { icon: DollarSign, value: "Lost $300–$800 service calls" },
                { icon: TrendingDown, value: "Lost $8k–$30k changeouts and installs" },
                { icon: ThumbsDown, value: `"We tried calling but no one answered" turning into 1‑star reviews` },
              ].map(({ icon: Icon, value }, i) => (
                <div key={i} className="flex items-start gap-3">
                  <div className="w-7 h-7 rounded-lg flex items-center justify-center shrink-0 mt-0.5" style={{ backgroundColor: "rgba(239,68,68,0.15)" }}>
                    <Icon className="w-3.5 h-3.5 text-red-400" />
                  </div>
                  <p className="text-gray-300 text-sm leading-relaxed">{value}</p>
                </div>
              ))}
            </div>
          </motion.div>

          {/* At the same time */}
          <motion.div variants={fadeUp} className="rounded-2xl p-7 border" style={{ backgroundColor: "rgba(255,255,255,0.04)", borderColor: "rgba(255,255,255,0.07)" }}>
            <p className="text-xs font-black uppercase tracking-widest mb-4 text-gray-500">
              At the same time
            </p>
            <div className="space-y-3">
              {[
                { icon: Star, text: "You finish good jobs and nobody follows up for reviews" },
                { icon: TrendingDown, text: "A few angry customers and old complaints drag down your rating" },
                { icon: PhoneOff, text: "Competitors with better reviews and faster answer times win the work" },
              ].map(({ icon: Icon, text }, i) => (
                <div key={i} className="flex items-start gap-3">
                  <div className="w-7 h-7 rounded-lg flex items-center justify-center shrink-0 mt-0.5" style={{ backgroundColor: "rgba(204,255,51,0.1)" }}>
                    <Icon className="w-3.5 h-3.5" style={{ color: "#CCFF33" }} />
                  </div>
                  <p className="text-gray-300 text-sm leading-relaxed">{text}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </motion.div>

      </div>
    </section>
  );
}
