"use client";

import { useState, useMemo } from "react";
import { motion } from "framer-motion";
import { Phone, ArrowRight, ChevronDown, PhoneOff, Wrench, Zap } from "lucide-react";
import { fadeUp, stagger, viewportOnce } from "@/lib/animations";

const LEAD_QUALITY = 0.75;
const CLOSE_RATE = 0.6;

function fmt(value: number): string {
  return "$" + Math.round(value).toLocaleString("en-US");
}

function sliderBg(value: number, min: number, max: number): string {
  const pct = ((value - min) / (max - min)) * 100;
  return `linear-gradient(to right, var(--accent) ${pct}%, #E0E0E0 ${pct}%)`;
}

export default function MissedCallCalculator() {
  const [avgJobValue, setAvgJobValue] = useState(450);
  const [missedPerWeek, setMissedPerWeek] = useState(8);
  const [showMethod, setShowMethod] = useState(false);

  const results = useMemo(() => {
    const weeklyLost = missedPerWeek * LEAD_QUALITY * CLOSE_RATE * avgJobValue;
    const monthlyLost = weeklyLost * 4.33;
    const annualLost = weeklyLost * 52;
    return { weeklyLost, monthlyLost, annualLost };
  }, [avgJobValue, missedPerWeek]);

  return (
    <section id="calculator" className="py-20 sm:py-24" style={{ backgroundColor: "#FAFAFA" }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">

          {/* LEFT — Sales copy */}
          <motion.div
            variants={stagger(0.1)}
            initial="hidden"
            whileInView="show"
            viewport={viewportOnce}
          >
            <motion.div variants={fadeUp} className="section-badge-lime mb-4">Free Tool</motion.div>

            <motion.h2
              variants={fadeUp}
              className="text-3xl sm:text-4xl lg:text-[2.6rem] font-black leading-tight mb-5"
              style={{ color: "var(--foreground)", letterSpacing: "-0.025em" }}
            >
              See What Missed Plumbing Calls Could{" "}
              <span style={{ boxDecorationBreak: "clone", background: "rgba(var(--accent-rgb), 0.2)", padding: "0 4px" }}>
                Really Be Costing You
              </span>
            </motion.h2>

            <motion.p
              variants={fadeUp}
              className="text-base mb-8"
              style={{ color: "var(--gray-text)", lineHeight: 1.7 }}
            >
              Most plumbing companies do not realize how much revenue disappears each week from missed
              calls, slow follow-up, and after-hours voicemails. Plug in a few numbers and see the
              estimated impact in seconds.
            </motion.p>

            <div className="space-y-5 mb-9">
              {[
                { Icon: PhoneOff, title: "Every missed call can be a lost job", body: "Leak repairs, drain issues, water heater calls, and urgent service requests often go to the first plumber who answers." },
                { Icon: Wrench, title: "Built for real plumbing economics", body: "Uses practical assumptions around missed calls, booked jobs, and higher-value after-hours opportunities." },
                { Icon: Zap, title: "Then Obby helps plug the leak", body: "Obby answers missed calls, captures lead details, and helps you respond before the customer books elsewhere." },
              ].map(({ Icon, title, body }) => (
                <motion.div key={title} variants={fadeUp} className="flex items-start gap-3.5">
                  <div
                    className="w-9 h-9 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5"
                    style={{ background: "rgba(var(--accent-rgb), 0.15)" }}
                  >
                    <Icon className="w-4 h-4" style={{ color: "var(--accent-hover)" }} />
                  </div>
                  <div>
                    <p className="text-sm font-bold mb-0.5" style={{ color: "var(--foreground)" }}>{title}</p>
                    <p className="text-sm" style={{ color: "var(--gray-text)" }}>{body}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            <motion.div variants={fadeUp}>
              <a href="#booking-form" className="btn-primary text-sm px-6 py-3.5 rounded-lg font-black">
                <Phone className="w-4 h-4" />
                Book My Setup Call
                <ArrowRight className="w-4 h-4" />
              </a>
            </motion.div>
          </motion.div>

          {/* RIGHT — Calculator card */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={viewportOnce}
            className="rounded-2xl p-6 sm:p-7"
            style={{
              background: "white",
              border: "1px solid rgba(0,0,0,0.07)",
              boxShadow: "0 8px 32px rgba(0,0,0,0.06)",
            }}
          >
            {/* Header */}
            <div className="flex items-center justify-between mb-1">
              <h3 className="text-lg font-bold" style={{ color: "var(--foreground)" }}>
                Missed Call Revenue
              </h3>
              <span
                className="text-[0.65rem] font-bold uppercase tracking-wider px-2 py-1 rounded"
                style={{ background: "rgba(var(--accent-rgb), 0.15)", color: "var(--foreground)" }}
              >
                Calculator
              </span>
            </div>
            <p className="text-xs mb-6" style={{ color: "var(--gray-text)" }}>
              See what unanswered plumbing calls may be costing your business.
            </p>

            {/* Slider — Job Value */}
            <div className="mb-5">
              <div className="flex justify-between items-center mb-2">
                <label className="text-xs font-semibold" style={{ color: "var(--foreground)" }}>
                  Average Job Value
                </label>
                <span
                  className="text-xs font-bold px-2 py-0.5 rounded"
                  style={{ background: "rgba(var(--accent-rgb), 0.15)", color: "var(--foreground)" }}
                >
                  ${avgJobValue.toLocaleString("en-US")}
                </span>
              </div>
              <input
                type="range"
                min={100}
                max={2000}
                step={25}
                value={avgJobValue}
                onChange={(e) => setAvgJobValue(Number(e.target.value))}
                className="w-full h-2 rounded-full appearance-none cursor-pointer"
                style={{ background: sliderBg(avgJobValue, 100, 2000) }}
              />
              <p className="text-[0.68rem] mt-1" style={{ color: "var(--gray-text)" }}>
                Typical service ticket, repair, drain cleaning, or small install.
              </p>
            </div>

            {/* Slider — Missed Calls */}
            <div className="mb-5">
              <div className="flex justify-between items-center mb-2">
                <label className="text-xs font-semibold" style={{ color: "var(--foreground)" }}>
                  Missed Calls / Week
                </label>
                <span
                  className="text-xs font-bold px-2 py-0.5 rounded"
                  style={{ background: "rgba(var(--accent-rgb), 0.15)", color: "var(--foreground)" }}
                >
                  {missedPerWeek}
                </span>
              </div>
              <input
                type="range"
                min={1}
                max={30}
                step={1}
                value={missedPerWeek}
                onChange={(e) => setMissedPerWeek(Number(e.target.value))}
                className="w-full h-2 rounded-full appearance-none cursor-pointer"
                style={{ background: sliderBg(missedPerWeek, 1, 30) }}
              />
              <p className="text-[0.68rem] mt-1" style={{ color: "var(--gray-text)" }}>
                Calls that go unanswered, hit voicemail, or are returned too late.
              </p>
            </div>

            {/* Results */}
            <div className="grid grid-cols-3 gap-2 mb-3">
              <div className="col-span-2 rounded-lg p-4" style={{ background: "var(--dark)", color: "white" }}>
                <p className="text-[0.6rem] font-bold uppercase tracking-wider mb-1 opacity-60">
                  Est. Monthly Lost Revenue
                </p>
                <p className="text-2xl sm:text-3xl font-black" style={{ letterSpacing: "-0.02em" }}>
                  {fmt(results.monthlyLost)}
                </p>
              </div>
              <div className="rounded-lg p-4 flex flex-col justify-center" style={{ background: "rgba(var(--accent-rgb), 0.12)" }}>
                <p className="text-[0.6rem] font-bold uppercase tracking-wider mb-1" style={{ color: "var(--gray-text)" }}>Weekly</p>
                <p className="text-sm font-black" style={{ color: "var(--foreground)" }}>{fmt(results.weeklyLost)}</p>
              </div>
            </div>
            <div className="rounded-lg p-3 mb-4 text-center" style={{ background: "rgba(var(--accent-rgb), 0.08)" }}>
              <p className="text-[0.6rem] font-bold uppercase tracking-wider mb-0.5" style={{ color: "var(--gray-text)" }}>Est. Annual Lost Revenue</p>
              <p className="text-lg font-black" style={{ color: "var(--foreground)" }}>{fmt(results.annualLost)}</p>
            </div>

            {/* Copy */}
            <p className="text-xs mb-1" style={{ color: "var(--gray-text)" }}>
              You may be losing approximately <strong style={{ color: "var(--foreground)" }}>{fmt(results.monthlyLost)}/month</strong> from calls your team never answers.
            </p>
            <p className="text-xs mb-4" style={{ color: "var(--gray-text)" }}>
              That could be around <strong style={{ color: "var(--foreground)" }}>{fmt(results.annualLost)}/year</strong> in missed plumbing jobs.
            </p>

            {/* Accordion */}
            <div className="mb-4">
              <button
                onClick={() => setShowMethod(!showMethod)}
                className="flex items-center gap-1.5 text-xs font-semibold cursor-pointer"
                style={{ color: "var(--gray-text)" }}
              >
                <ChevronDown
                  className="w-3.5 h-3.5 transition-transform"
                  style={{ transform: showMethod ? "rotate(180deg)" : "rotate(0deg)" }}
                />
                How this is calculated
              </button>
              {showMethod && (
                <div className="mt-2 p-3 rounded-lg text-xs" style={{ background: "#FAFAFA", color: "var(--gray-text)", lineHeight: 1.6 }}>
                  <ul className="list-disc pl-4 space-y-0.5">
                    <li>Your missed call count with 75% assumed to be real customers</li>
                    <li>A 60% answer-to-book rate when calls are actually handled</li>
                    <li>Weekly totals scaled to monthly (&times;4.33) and annual (&times;52)</li>
                  </ul>
                </div>
              )}
            </div>

            <p className="text-[0.65rem] mb-5" style={{ color: "var(--gray-text)" }}>
              Estimate only. Actual results depend on call volume, lead quality, response speed, and job type.
            </p>

            {/* CTA */}
            <a href="#booking-form" className="btn-primary w-full text-sm py-3 rounded-lg font-black justify-center">
              <Phone className="w-4 h-4" />
              See How Obby Catches Missed Calls
              <ArrowRight className="w-4 h-4" />
            </a>
            <a
              href="#how-it-works"
              className="block text-center text-xs font-semibold mt-3 transition-colors"
              style={{ color: "var(--gray-text)" }}
            >
              Hear a Sample Plumbing Call &rarr;
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
