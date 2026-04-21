"use client";

import { Phone, PhoneIncoming, AlertTriangle, MessageSquare, Star } from "lucide-react";
import { motion } from "framer-motion";
import { fadeUp, stagger } from "@/lib/animations";

const STEPS_STAGGER = stagger(0.1);

const steps = [
  {
    icon: Phone,
    step: "01",
    title: "We plug in a smart number",
    desc: "On a quick 10–15 minute Zoom, we give you a new number and swap it into your Google Business Profile and, if you want, your website header. It still rings your office line or main cell first.",
  },
  {
    icon: PhoneIncoming,
    step: "02",
    title: "When you miss a call, we catch it",
    desc: "If you don't pick up in time or you're closed, our front desk answers as your company and asks a few quick questions: name, callback number, ZIP, new or existing customer, what's going on, and how urgent.",
  },
  {
    icon: AlertTriangle,
    step: "03",
    title: "We separate emergencies from routine calls",
    desc: `Emergency "no heat / no AC" calls get flagged so you can jump on them first. Routine maintenance and quotes are tagged but don't blow up your phone.`,
  },
  {
    icon: MessageSquare,
    step: "04",
    title: "You get a clean summary for every real job",
    desc: "We text you a short summary and keep a simple call log with recordings: who called, what they need, how hot it is (emergency / soon / just looking). Decide in seconds who to call back first.",
  },
  {
    icon: Star,
    step: "05",
    title: "We follow up finished jobs for 5-star Google reviews",
    desc: "After a job, you text us the customer's name and number. We check if they're happy, send your Google review link, and follow up with a couple of polite reminders. You keep fixing systems. We handle the follow-up.",
  },
];

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="py-20" style={{ backgroundColor: "var(--background)" }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center max-w-2xl mx-auto mb-14"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <div className="section-badge">How It Works</div>

          <h2
            className="text-3xl sm:text-4xl font-black mb-4 leading-tight"
            style={{ color: "var(--foreground)", letterSpacing: "-0.02em" }}
          >
            How HVAC Front Desk System Works
          </h2>

          <p className="text-lg" style={{ color: "var(--gray-text)" }}>
            We handle all the setup. You just show up for the 10-minute call.
          </p>
        </motion.div>

        <motion.div
          className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-5 mb-12"
          variants={STEPS_STAGGER}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-80px" }}
        >
          {steps.map((step) => {
            const Icon = step.icon;
            return (
              <motion.div
                key={step.step}
                variants={fadeUp}
                className="rounded-2xl p-6 border transition-shadow hover:shadow-lg"
                style={{
                  backgroundColor: "var(--background)",
                  borderColor: "rgba(0,0,0,0.06)",
                }}
              >
                <span
                  className="text-xs font-black tracking-widest mb-4 block"
                  style={{ color: "rgba(0,0,0,0.22)" }}
                >
                  STEP {step.step}
                </span>

                <div
                  className="w-11 h-11 rounded-xl flex items-center justify-center mb-4"
                  style={{ backgroundColor: "var(--accent)" }}
                >
                  <Icon className="w-5 h-5 text-black" />
                </div>

                <h3
                  className="font-extrabold mb-2 leading-snug text-sm"
                  style={{ color: "var(--foreground)" }}
                >
                  {step.title}
                </h3>

                <p
                  className="text-xs leading-relaxed"
                  style={{ color: "var(--gray-text)" }}
                >
                  {step.desc}
                </p>
              </motion.div>
            );
          })}
        </motion.div>

        <motion.div
          className="rounded-2xl overflow-hidden"
          style={{ backgroundColor: "var(--dark)" }}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <div className="flex flex-col sm:flex-row items-center justify-between px-8 py-7 gap-4">
            <div>
              <p
                className="font-black text-xl mb-1"
                style={{ color: "#ffffff", letterSpacing: "-0.02em" }}
              >
                Setup takes 10–15 minutes.
              </p>
              <p className="text-sm" style={{ color: "rgba(255,255,255,0.6)" }}>
                You're live the same day.
              </p>
            </div>

            <a href="#booking-form" className="btn-primary px-6 py-3 rounded-lg font-black whitespace-nowrap shrink-0">
              <Phone className="w-4 h-4" />
              Book Setup Call
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}