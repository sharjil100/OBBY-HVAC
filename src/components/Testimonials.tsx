"use client";

import { Star, Quote } from "lucide-react";
import { motion } from "framer-motion";
import { fadeUp, stagger } from "@/lib/animations";

const TESTIMONIALS_STAGGER = stagger(0.15);

const testimonials = [
  {
    name: "[Name]",
    company: "[Company]",
    role: "HVAC Owner",
    quote: "During the first heat wave, we used to drown in missed calls. Now every 'no AC' call gets logged and flagged. We just work down the list.",
    stars: 5,
    avatar: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=80&h=80&fit=crop&crop=face",
    highlight: "No more drowning in missed calls",
  },
  {
    name: "[Name]",
    company: "[Company]",
    role: "HVAC Owner",
    quote: "We didn't change anything in the field. The only difference was someone finally following up for reviews. Our Google rating and call volume both went up.",
    stars: 5,
    avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=80&h=80&fit=crop&crop=face",
    highlight: "Google rating and call volume both went up",
  },
];

export default function Testimonials() {
  return (
    <section className="py-20" style={{ backgroundColor: "var(--background)" }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center max-w-2xl mx-auto mb-14"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <div className="section-badge">Results & Proof</div>

          <h2
            className="text-3xl sm:text-4xl font-black mb-4 leading-tight"
            style={{ color: "var(--foreground)", letterSpacing: "-0.02em" }}
          >
            What HVAC owners say
          </h2>

          <p
            className="text-sm"
            style={{ color: "rgba(0,0,0,0.4)" }}
          >
            (Replace with real quotes and screenshots as you get them.)
          </p>
        </motion.div>

        <motion.div
          className="grid md:grid-cols-2 gap-6 mb-10"
          variants={TESTIMONIALS_STAGGER}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-60px" }}
        >
          {testimonials.map((t, idx) => (
            <motion.div
              key={idx}
              variants={fadeUp}
              className="rounded-2xl p-8 border relative hover:shadow-md transition-shadow"
              style={{
                backgroundColor: "var(--background)",
                borderColor: "rgba(0,0,0,0.06)",
              }}
            >
              <Quote
                className="absolute top-6 right-6 w-10 h-10"
                style={{ color: "rgba(0,0,0,0.05)" }}
              />

              <div className="flex gap-1 mb-4">
                {[...Array(t.stars)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                ))}
              </div>

              <div
                className="inline-flex items-center gap-2 text-xs font-black px-3 py-1.5 rounded-full mb-5"
                style={{
                  backgroundColor: "var(--accent)",
                  color: "#000000",
                }}
              >
                ✓ {t.highlight}
              </div>

              <p
                className="leading-relaxed mb-6 text-[15px]"
                style={{ color: "rgba(0,0,0,0.72)" }}
              >
                "{t.quote}"
              </p>

              <div
                className="flex items-center gap-3 pt-4 border-t"
                style={{ borderTopColor: "rgba(0,0,0,0.04)" }}
              >
                <img
                  src={t.avatar}
                  alt={t.name}
                  className="w-11 h-11 rounded-full object-cover border-2"
                  style={{ borderColor: "rgba(0,0,0,0.06)" }}
                />

                <div>
                  <p
                    className="font-extrabold text-sm"
                    style={{ color: "var(--foreground)" }}
                  >
                    {t.name}
                  </p>
                  <p
                    className="text-xs"
                    style={{ color: "var(--gray-text)" }}
                  >
                    {t.company}
                  </p>
                  <p
                    className="text-xs"
                    style={{ color: "rgba(0,0,0,0.4)" }}
                  >
                    {t.role}
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