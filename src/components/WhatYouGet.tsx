"use client";

import { PhoneIncoming, Wrench, Zap, ThumbsUp, Star, Moon, Shield, FileText } from "lucide-react";
import { motion } from "framer-motion";
import { fadeUp, stagger } from "@/lib/animations";

const BENEFITS_STAGGER = stagger(0.08);

const benefits = [
  { icon: PhoneIncoming, title: "More $150–$600 service calls booked", desc: "Instead of missed voicemails — every missed call gets a second chance." },
  { icon: Wrench, title: "More $500–$3,000 repair jobs actually booked", desc: "Because hot leads get handled before they call your competitor." },
  { icon: Wrench, title: "More $3k–$15k+ installs and big jobs captured", desc: "Repipes, sewer lines, and water heater installs that would've gone elsewhere." },
  { icon: Zap, title: "Emergency calls flagged", desc: `So you don't miss high-value work. Active leaks, sewer backups, and no hot water get tagged first.` },
  { icon: ThumbsUp, title: `Fewer "no one answered" reviews`, desc: `We catch the call before the frustration turns into a 1-star.` },
  { icon: Star, title: "Consistent 5-star Google reviews", desc: "From real customers — automated follow-up while the job is still fresh." },
  { icon: Moon, title: "After-hours calls captured", desc: "Logged instead of lost. Emergency? You get notified immediately." },
  { icon: Shield, title: "Spam and vendors filtered out", desc: "You only hear about real customers with real jobs." },
  { icon: FileText, title: "Simple call log", desc: "No complicated software. See what's happening at a glance." },
];

export default function WhatYouGet() {
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
          <div className="section-badge">What You Get</div>
          <h2
            className="text-3xl sm:text-4xl font-black mb-4 leading-tight"
            style={{ color: "var(--foreground)", letterSpacing: "-0.02em" }}
          >
            With the Plumbing Front Desk System you get:
          </h2>
        </motion.div>

        <motion.div
          className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4"
          variants={BENEFITS_STAGGER}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-60px" }}
        >
          {benefits.map(({ icon: Icon, title, desc }, i) => (
            <motion.div
              key={title}
              variants={fadeUp}
              className="group rounded-xl p-6 border transition-shadow hover:shadow-md"
              style={{
                backgroundColor: "var(--background)",
                borderColor: "rgba(0,0,0,0.06)",
              }}
            >
              <div
                className="w-10 h-10 rounded-lg flex items-center justify-center mb-4 transition-transform group-hover:scale-110 duration-200"
                style={{
                  backgroundColor: i % 2 === 0 ? "var(--accent)" : "var(--dark)",
                }}
              >
                <Icon
                  className="w-5 h-5"
                  style={{
                    color: i % 2 === 0 ? "#000000" : "var(--accent)",
                  }}
                />
              </div>

              <h3
                className="font-extrabold mb-2 text-sm leading-snug"
                style={{ color: "var(--foreground)" }}
              >
                {title}
              </h3>

              <p
                className="text-xs leading-relaxed"
                style={{ color: "var(--gray-text)" }}
              >
                {desc}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}