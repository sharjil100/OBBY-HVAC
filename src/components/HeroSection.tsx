"use client";

import { ArrowRight, CheckCircle2, Star, Phone, Shield, Clock } from "lucide-react";
import BookingForm from "./BookingForm";

const trustBadges = [
  { icon: Shield, text: "No Setup Fee" },
  { icon: Clock, text: "Month-to-Month" },
  { icon: CheckCircle2, text: "Live in One Call" },
];

const stats = [
  { value: "$8k–$30k", label: "Jobs lost to voicemail" },
  { value: "72%", label: "Callers skip voicemail" },
  { value: "5 min", label: "Response time needed" },
];

export default function HeroSection() {
  return (
    <section className="relative pt-20 md:pt-24 pb-0 overflow-hidden bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center min-h-[88vh]">
          {/* Left: Copy */}
          <div className="relative z-10 py-12 lg:py-0 flex flex-col sm:items-center lg:items-start sm:text-center lg:text-left">
            <div className="section-badge">
              <span className="w-2 h-2 rounded-full bg-green-500 inline-block" />
              Trusted by HVAC shops across the US
            </div>

            <h1
              className="text-4xl sm:text-5xl xl:text-[56px] font-black leading-[1.08] text-black mb-5"
              style={{ letterSpacing: "-0.02em" }}
            >
              Stop Losing{" "}
              <span
                className="relative inline-block px-2 rounded-md"
                style={{ backgroundColor: "var(--accent)" }}
              >
                $8k–$30k
              </span>{" "}
              HVAC Jobs Every Time The Phone Rings On A Roof
            </h1>

            <p className="text-lg text-gray-500 leading-relaxed mb-8 max-w-xl">
              We catch the calls your techs miss during heat waves and cold snaps, tag true
              emergencies, and turn happy service calls into 5‑star Google reviews – all for one
              flat monthly fee.
            </p>

            <div className="flex flex-col sm:flex-row gap-3 mb-4 sm:justify-center lg:justify-start">
              <a href="#booking-form" className="btn-primary text-base px-7 py-4 rounded-lg font-black">
                <Phone className="w-5 h-5" />
                Book 10‑Minute Setup Call
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>

            <p className="text-sm text-gray-400 mb-8">
              No setup fee. Month‑to‑month. Live in one short call.
            </p>

            <div className="flex flex-wrap gap-5 mb-10 sm:justify-center lg:justify-start">
              {trustBadges.map(({ icon: Icon, text }) => (
                <div key={text} className="flex items-center gap-2 text-sm text-gray-500">
                  <Icon className="w-4 h-4 text-green-600" strokeWidth={2.5} />
                  <span className="font-semibold">{text}</span>
                </div>
              ))}
            </div>

          </div>

          {/* Mobile/tablet hero image */}
          <div className="block lg:hidden">
            <div className="relative rounded-2xl overflow-hidden shadow-xl w-full">
              <img
                src="/hero-mobile.png"
                alt="HVAC technician on a service call"
                className="w-full h-64 sm:h-72 object-cover"
              />
              <div className="absolute inset-0 bg-black/25 pointer-events-none" />
            </div>

            {/* Cards flush below image */}
            <div className="flex gap-2 mt-2">
              {/* Missed call */}
              <div className="flex-1 bg-white rounded-xl shadow-lg p-2.5 border border-red-100">
                <div className="flex items-center gap-2 mb-1.5">
                  <div className="w-7 h-7 bg-red-100 rounded-full flex-shrink-0 flex items-center justify-center">
                    <Phone className="w-3 h-3 text-red-500" />
                  </div>
                  <div>
                    <p className="text-[11px] font-bold text-black leading-tight">Missed Call</p>
                    <p className="text-[10px] text-gray-400">Unknown • Just now</p>
                  </div>
                </div>
                <div className="bg-red-50 rounded-lg p-1.5">
                  <p className="text-[10px] text-red-700 font-semibold leading-tight">🔥 Emergency – AC out in July heat</p>
                  <p className="text-[10px] text-red-400 mt-0.5">Potential $12,400 install</p>
                </div>
              </div>

              {/* Obby captured */}
              <div
                className="flex-1 rounded-xl shadow-lg p-2.5 border"
                style={{ backgroundColor: "#17191E", borderColor: "rgba(var(--accent-rgb), 0.3)" }}
              >
                <div className="flex items-center gap-2 mb-1.5">
                  <div className="w-7 h-7 rounded-full flex-shrink-0 flex items-center justify-center" style={{ backgroundColor: "rgba(var(--accent-rgb), 0.15)" }}>
                    <CheckCircle2 className="w-3 h-3" style={{ color: "var(--accent)" }} />
                  </div>
                  <div>
                    <p className="text-[11px] font-bold text-white leading-tight">Obby Captured It</p>
                    <p className="text-[10px]" style={{ color: "var(--accent)" }}>Tagged: EMERGENCY</p>
                  </div>
                </div>
                <p className="text-[10px] text-gray-400 mb-1.5 leading-tight">SMS sent to owner + review follow-up scheduled</p>
                <div className="flex items-center gap-0.5">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-2.5 h-2.5 fill-yellow-400 text-yellow-400" />
                  ))}
                  <span className="text-[10px] text-gray-500 ml-1">Review requested</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right: Hero Image + Floating Cards */}
          <div className="relative hidden lg:flex items-center justify-center h-full">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl w-full">
              <img
                src="/hero-desktop.png"
                alt="HVAC technician on a service call"
                className="w-full h-[580px] object-cover"
              />
              <div className="absolute inset-0 bg-black/25 pointer-events-none" />
              <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/40 pointer-events-none" />
            </div>

            {/* Floating: Missed call */}
            <div className="absolute -left-8 top-16 bg-white rounded-xl shadow-xl p-4 w-56 border border-red-100">
              <div className="flex items-center gap-3 mb-2">
                <div className="w-9 h-9 bg-red-100 rounded-full flex items-center justify-center">
                  <Phone className="w-4 h-4 text-red-500" />
                </div>
                <div>
                  <p className="text-xs font-bold text-black">Missed Call</p>
                  <p className="text-xs text-gray-400">Unknown • Just now</p>
                </div>
              </div>
              <div className="bg-red-50 rounded-lg p-2.5">
                <p className="text-xs text-red-700 font-semibold">🔥 Emergency – AC out in July heat</p>
                <p className="text-xs text-red-400 mt-0.5">Potential $12,400 install</p>
              </div>
            </div>

            {/* Floating: Obby captured */}
            <div
              className="absolute -right-8 bottom-28 rounded-xl shadow-xl p-4 w-60 border"
              style={{ backgroundColor: "#17191E", borderColor: "rgba(var(--accent-rgb), 0.3)" }}
            >
              <div className="flex items-center gap-3 mb-2">
                <div className="w-9 h-9 rounded-full flex items-center justify-center" style={{ backgroundColor: "rgba(var(--accent-rgb), 0.15)" }}>
                  <CheckCircle2 className="w-4 h-4" style={{ color: "var(--accent)" }} />
                </div>
                <div>
                  <p className="text-xs font-bold text-white">Obby Captured It</p>
                  <p className="text-xs" style={{ color: "var(--accent)" }}>Tagged: EMERGENCY</p>
                </div>
              </div>
              <p className="text-xs text-gray-400 mb-2">SMS sent to owner + review follow-up scheduled</p>
              <div className="flex gap-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-3 h-3 fill-yellow-400 text-yellow-400" />
                ))}
                <span className="text-xs text-gray-500 ml-1">Review requested</span>
              </div>
            </div>

            {/* Stats bar */}
            <div className="absolute left-1/2 -translate-x-1/2 -bottom-6 bg-white rounded-xl shadow-lg px-5 py-3.5 flex gap-5 border border-gray-100">
              {stats.map((s) => (
                <div key={s.label} className="text-center">
                  <p className="text-base font-black text-black">{s.value}</p>
                  <p className="text-xs text-gray-400 mt-0.5 whitespace-nowrap">{s.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

      </div>

      <div id="booking-form" className="mt-16 border-t border-gray-100" style={{ backgroundColor: "#FAFAFA" }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <BookingForm />
        </div>
      </div>
    </section>
  );
}
