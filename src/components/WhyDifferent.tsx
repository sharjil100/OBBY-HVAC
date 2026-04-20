"use client";

import { Users, MessageCircle, Wrench } from "lucide-react";
import { motion } from "framer-motion";
import { fadeUp, stagger } from "@/lib/animations";

const REASONS_STAGGER = stagger(0.12);

const reasons = [
  {
    icon: Users,
    title: "We don't replace your people.",
    desc: "Your phone still rings you first. We only step in when you miss the call or you're closed.",
    contrast: "vs. Hiring a call center that handles everything and loses the personal touch",
  },
  {
    icon: MessageCircle,
    title: "Short, human calls.",
    desc: "We're not running a long script. We grab the basics and get out of the way so you can close the job.",
    contrast: "vs. Phone trees and hold music that make customers hang up",
  },
  {
    icon: Wrench,
    title: "Built for HVAC, not every business.",
    desc: `We know the difference between "no heat," "AC not cooling," tune‑ups, and quotes – and we tag calls that way.`,
    contrast: "vs. Generic answering services that treat all calls the same",
  },
];



export default function WhyDifferent() {
  return (
    <section className="py-20" style={{ backgroundColor: "#FAFAFA" }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center max-w-2xl mx-auto mb-14"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <div className="section-badge">Why This Is Different</div>
          <h2 className="text-3xl sm:text-4xl font-black text-black mb-4 leading-tight" style={{ letterSpacing: "-0.02em" }}>
            Not just another answering service
          </h2>
          <p className="text-gray-500 text-lg">We built Obby for HVAC specifically. That changes everything.</p>
        </motion.div>

        <motion.div
          className="grid md:grid-cols-3 gap-6"
          variants={REASONS_STAGGER}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-60px" }}
        >
          {reasons.map(({ icon: Icon, title, desc, contrast }, i) => (
            <motion.div
              key={title}
              variants={fadeUp}
              className="rounded-2xl p-8 border border-gray-100 bg-white hover:shadow-lg transition-shadow"
            >
              <div
                className="w-12 h-12 rounded-xl flex items-center justify-center mb-6"
                style={{ backgroundColor: i === 1 ? "#17191E" : "#CCFF33" }}
              >
                <Icon className="w-6 h-6" style={{ color: i === 1 ? "#CCFF33" : "#000" }} />
              </div>
              <h3 className="text-xl font-black text-black mb-3" style={{ letterSpacing: "-0.01em" }}>{title}</h3>
              <p className="text-gray-500 text-sm leading-relaxed mb-5">{desc}</p>
              <div className="rounded-lg p-3 border border-gray-100" style={{ backgroundColor: "#F8F8F8" }}>
                <p className="text-xs text-gray-400 italic">{contrast}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
