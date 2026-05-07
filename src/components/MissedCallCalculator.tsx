"use client";

import { useState, useMemo } from "react";
import { motion } from "framer-motion";
import { Phone, ArrowRight, ChevronDown, PhoneOff, Wrench, Zap } from "lucide-react";
import { fadeUp, stagger, viewportOnce } from "@/lib/animations";

const DEFAULTS = {
  avgJobValue: 450,
  missedCallsPerWeek: 8,
  afterHoursMissedPerWeek: 3,
  quality: "realistic" as "conservative" | "realistic" | "aggressive",
};

const QUALITY_MAP = {
  conservative: 0.25,
  realistic: 0.5,
  aggressive: 0.75,
};

const CLOSE_RATE = 0.6;
const EMERGENCY_MULTIPLIER = 1.8;

function formatCurrency(value: number): string {
  return "$" + Math.round(value).toLocaleString("en-US");
}

export default function MissedCallCalculator() {
  const [avgJobValue, setAvgJobValue] = useState(DEFAULTS.avgJobValue);
  const [missedCallsPerWeek, setMissedCallsPerWeek] = useState(DEFAULTS.missedCallsPerWeek);
  const [afterHoursMissedPerWeek, setAfterHoursMissedPerWeek] = useState(DEFAULTS.afterHoursMissedPerWeek);
  const [quality, setQuality] = useState<"conservative" | "realistic" | "aggressive">(DEFAULTS.quality);
  const [showMethod, setShowMethod] = useState(false);

  const results = useMemo(() => {
    const qualityPercent = QUALITY_MAP[quality];
    const regularWeekly = missedCallsPerWeek * qualityPercent * CLOSE_RATE * avgJobValue;
    const afterHoursWeekly = afterHoursMissedPerWeek * qualityPercent * CLOSE_RATE * (avgJobValue * EMERGENCY_MULTIPLIER);
    const weeklyLost = regularWeekly + afterHoursWeekly;
    const monthlyLost = weeklyLost * 4.33;
    const annualLost = weeklyLost * 52;
    return { weeklyLost, monthlyLost, annualLost };
  }, [avgJobValue, missedCallsPerWeek, afterHoursMissedPerWeek, quality]);

  return (
    <section id="calculator" className="py-20 sm:py-24" style={{ backgroundColor: "#FAFAFA" }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">

          {/* LEFT COLUMN — Sales copy */}
          <motion.div
            variants={stagger(0.1)}
            initial="hidden"
            whileInView="show"
            viewport={viewportOnce}
          >
            <motion.div variants={fadeUp} className="section-badge-lime mb-4">
              Free Tool
            </motion.div>

            <motion.h2
              variants={fadeUp}
              className="text-3xl sm:text-4xl lg:text-[2.6rem] font-black leading-tight mb-5"
              style={{ color: "var(--foreground)", letterSpacing: "-0.025em" }}
            >
              See What Missed Plumbing Calls Could{" "}
              <span
                className="relative inline"
                style={{ boxDecorationBreak: "clone", background: "rgba(var(--accent-rgb), 0.2)", padding: "0 4px" }}
              >
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

            {/* Benefit bullets */}
            <div className="space-y-5 mb-9">
              <motion.div variants={fadeUp} className="flex items-start gap-3.5">
                <div
                  className="w-9 h-9 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5"
                  style={{ background: "rgba(var(--accent-rgb), 0.15)" }}
                >
                  <PhoneOff className="w-4 h-4" style={{ color: "var(--accent-hover)" }} />
                </div>
                <div>
                  <p className="text-sm font-bold mb-0.5" style={{ color: "var(--foreground)" }}>
                    Every missed call can be a lost job
                  </p>
                  <p className="text-sm" style={{ color: "var(--gray-text)" }}>
                    Leak repairs, drain issues, water heater calls, and urgent service requests often
                    go to the first plumber who answers.
                  </p>
                </div>
              </motion.div>

              <motion.div variants={fadeUp} className="flex items-start gap-3.5">
                <div
                  className="w-9 h-9 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5"
                  style={{ background: "rgba(var(--accent-rgb), 0.15)" }}
                >
                  <Wrench className="w-4 h-4" style={{ color: "var(--accent-hover)" }} />
                </div>
                <div>
                  <p className="text-sm font-bold mb-0.5" style={{ color: "var(--foreground)" }}>
                    Built for real plumbing economics
                  </p>
                  <p className="text-sm" style={{ color: "var(--gray-text)" }}>
                    Uses practical assumptions around missed calls, booked jobs, and higher-value
                    after-hours opportunities.
                  </p>
                </div>
              </motion.div>

              <motion.div variants={fadeUp} className="flex items-start gap-3.5">
                <div
                  className="w-9 h-9 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5"
                  style={{ background: "rgba(var(--accent-rgb), 0.15)" }}
                >
                  <Zap className="w-4 h-4" style={{ color: "var(--accent-hover)" }} />
                </div>
                <div>
                  <p className="text-sm font-bold mb-0.5" style={{ color: "var(--foreground)" }}>
                    Then Obby helps plug the leak
                  </p>
                  <p className="text-sm" style={{ color: "var(--gray-text)" }}>
                    Obby answers missed calls, captures lead details, and helps you respond before the
                    customer books elsewhere.
                  </p>
                </div>
              </motion.div>
            </div>

            <motion.div variants={fadeUp}>
              <a href="#booking-form" className="btn-primary text-sm px-6 py-3.5 rounded-lg font-black">
                <Phone className="w-4 h-4" />
                Book My Setup Call
                <ArrowRight className="w-4 h-4" />
              </a>
            </motion.div>
          </motion.div>

          {/* RIGHT COLUMN — Calculator card */}
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
            {/* Card header */}
            <div className="flex items-center justify-between mb-1">
              <h3 className="text-lg font-bold" style={{ color: "var(--foreground)" }}>
                Missed Plumbing Call Revenue
              </h3>
              <span
                className="text-[0.65rem] font-bold uppercase tracking-wider px-2 py-1 rounded"
                style={{ background: "rgba(var(--accent-rgb), 0.15)", color: "var(--foreground)" }}
              >
                Calculator
              </span>
            </div>
            <p className="text-xs mb-5" style={{ color: "var(--gray-text)" }}>
              See what unanswered plumbing calls may be costing your business.
            </p>

            {/* Inputs */}
            <div className="space-y-4 mb-5">
              {/* Average Job Value */}
              <div>
                <label className="text-xs font-semibold block mb-1.5" style={{ color: "var(--foreground)" }}>
                  Average Plumbing Job Value
                </label>
                <div className="relative">
                  <span className="absolute left-3 top-1/2 -translate-y-1/2 text-sm font-semibold" style={{ color: "var(--gray-text)" }}>$</span>
                  <input
                    type="number"
                    value={avgJobValue}
                    onChange={(e) => setAvgJobValue(Math.max(0, Number(e.target.value)))}
                    className="w-full pl-7 pr-3 py-2.5 rounded-lg text-sm font-semibold outline-none transition-all"
                    style={{
                      border: "1.5px solid #E0E0E0",
                      color: "var(--foreground)",
                      background: "#FAFAFA",
                    }}
                    onFocus={(e) => (e.target.style.borderColor = "var(--accent)")}
                    onBlur={(e) => (e.target.style.borderColor = "#E0E0E0")}
                  />
                </div>
                <p className="text-[0.68rem] mt-1" style={{ color: "var(--gray-text)" }}>
                  Typical service ticket, repair, drain cleaning, or small install.
                </p>
              </div>

              {/* Missed Calls Per Week */}
              <div>
                <label className="text-xs font-semibold block mb-1.5" style={{ color: "var(--foreground)" }}>
                  Missed Calls / Week
                </label>
                <input
                  type="number"
                  value={missedCallsPerWeek}
                  onChange={(e) => setMissedCallsPerWeek(Math.max(0, Number(e.target.value)))}
                  className="w-full px-3 py-2.5 rounded-lg text-sm font-semibold outline-none transition-all"
                  style={{
                    border: "1.5px solid #E0E0E0",
                    color: "var(--foreground)",
                    background: "#FAFAFA",
                  }}
                  onFocus={(e) => (e.target.style.borderColor = "var(--accent)")}
                  onBlur={(e) => (e.target.style.borderColor = "#E0E0E0")}
                />
                <p className="text-[0.68rem] mt-1" style={{ color: "var(--gray-text)" }}>
                  Calls that go unanswered, hit voicemail, or are returned too late.
                </p>
              </div>

              {/* After-Hours Missed Calls */}
              <div>
                <label className="text-xs font-semibold block mb-1.5" style={{ color: "var(--foreground)" }}>
                  After-Hours Missed Calls / Week
                </label>
                <input
                  type="number"
                  value={afterHoursMissedPerWeek}
                  onChange={(e) => setAfterHoursMissedPerWeek(Math.max(0, Number(e.target.value)))}
                  className="w-full px-3 py-2.5 rounded-lg text-sm font-semibold outline-none transition-all"
                  style={{
                    border: "1.5px solid #E0E0E0",
                    color: "var(--foreground)",
                    background: "#FAFAFA",
                  }}
                  onFocus={(e) => (e.target.style.borderColor = "var(--accent)")}
                  onBlur={(e) => (e.target.style.borderColor = "#E0E0E0")}
                />
                <p className="text-[0.68rem] mt-1" style={{ color: "var(--gray-text)" }}>
                  Calls missed at night, weekends, lunch breaks, or while techs are busy.
                </p>
              </div>

              {/* Quality segmented control */}
              <div>
                <label className="text-xs font-semibold block mb-1.5" style={{ color: "var(--foreground)" }}>
                  Missed Call Quality
                </label>
                <div
                  className="grid grid-cols-3 rounded-lg overflow-hidden"
                  style={{ border: "1.5px solid #E0E0E0" }}
                >
                  {(["conservative", "realistic", "aggressive"] as const).map((option) => (
                    <button
                      key={option}
                      onClick={() => setQuality(option)}
                      className="py-2.5 text-xs font-semibold text-center transition-all capitalize"
                      style={{
                        background: quality === option ? "var(--accent)" : "#FAFAFA",
                        color: quality === option ? "#000" : "var(--gray-text)",
                        borderRight: option !== "aggressive" ? "1.5px solid #E0E0E0" : "none",
                      }}
                    >
                      {option}
                      <span className="block text-[0.6rem] font-bold opacity-70 mt-0.5">
                        {Math.round(QUALITY_MAP[option] * 100)}%
                      </span>
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* Results grid */}
            <div className="grid grid-cols-3 gap-2 mb-4">
              <div
                className="col-span-2 rounded-lg p-4"
                style={{ background: "var(--dark)", color: "white" }}
              >
                <p className="text-[0.6rem] font-bold uppercase tracking-wider mb-1 opacity-60">
                  Est. Monthly Lost Revenue
                </p>
                <p className="text-2xl sm:text-3xl font-black" style={{ letterSpacing: "-0.02em" }}>
                  {formatCurrency(results.monthlyLost)}
                </p>
              </div>
              <div
                className="rounded-lg p-4 flex flex-col justify-center"
                style={{ background: "rgba(var(--accent-rgb), 0.12)" }}
              >
                <p className="text-[0.6rem] font-bold uppercase tracking-wider mb-1" style={{ color: "var(--gray-text)" }}>
                  Weekly
                </p>
                <p className="text-sm font-black" style={{ color: "var(--foreground)" }}>
                  {formatCurrency(results.weeklyLost)}
                </p>
              </div>
            </div>
            <div
              className="rounded-lg p-3 mb-4 text-center"
              style={{ background: "rgba(var(--accent-rgb), 0.08)" }}
            >
              <p className="text-[0.6rem] font-bold uppercase tracking-wider mb-0.5" style={{ color: "var(--gray-text)" }}>
                Est. Annual Lost Revenue
              </p>
              <p className="text-lg font-black" style={{ color: "var(--foreground)", letterSpacing: "-0.01em" }}>
                {formatCurrency(results.annualLost)}
              </p>
            </div>

            {/* Result copy */}
            <p className="text-xs mb-1" style={{ color: "var(--gray-text)" }}>
              You may be losing approximately <strong style={{ color: "var(--foreground)" }}>{formatCurrency(results.monthlyLost)}/month</strong> from calls your team never answers.
            </p>
            <p className="text-xs mb-4" style={{ color: "var(--gray-text)" }}>
              That could be around <strong style={{ color: "var(--foreground)" }}>{formatCurrency(results.annualLost)}/year</strong> in missed plumbing jobs.
            </p>

            {/* How this is calculated */}
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
                  <p className="mb-1">We estimate lost revenue using:</p>
                  <ul className="list-disc pl-4 space-y-0.5">
                    <li>Your missed call count and the percentage that are real customers</li>
                    <li>A 60% answer-to-book rate when calls are actually handled</li>
                    <li>After-hours jobs valued at 1.8x your average ticket (emergency premium)</li>
                    <li>Weekly totals scaled to monthly (x4.33) and annual (x52)</li>
                  </ul>
                </div>
              )}
            </div>

            {/* Assumptions note */}
            <p className="text-[0.65rem] mb-5" style={{ color: "var(--gray-text)" }}>
              Based on practical plumbing-business assumptions. Actual results depend on call volume,
              lead quality, response speed, booking rate, and job type.
            </p>

            {/* Card CTAs */}
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
