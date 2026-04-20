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
          <div className="relative z-10 py-12 lg:py-0">
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
                style={{ backgroundColor: "#CCFF33" }}
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

            <div className="flex flex-col sm:flex-row gap-3 mb-4">
              <a href="#booking-form" className="btn-primary text-base px-7 py-4 rounded-lg font-black">
                <Phone className="w-5 h-5" />
                Book 10‑Minute Setup Call
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>

            <p className="text-sm text-gray-400 mb-8">
              No setup fee. Month‑to‑month. Live in one short call.
            </p>

            <div className="flex flex-wrap gap-5 mb-10">
              {trustBadges.map(({ icon: Icon, text }) => (
                <div key={text} className="flex items-center gap-2 text-sm text-gray-500">
                  <Icon className="w-4 h-4 text-green-600" strokeWidth={2.5} />
                  <span className="font-semibold">{text}</span>
                </div>
              ))}
            </div>

            <div className="flex items-center gap-3">
              <div className="flex -space-x-2">
                {[
                  "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=40&h=40&fit=crop&crop=face",
                  "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=40&h=40&fit=crop&crop=face",
                  "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=40&h=40&fit=crop&crop=face",
                  "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=40&h=40&fit=crop&crop=face",
                ].map((src, i) => (
                  <img key={i} src={src} alt="HVAC owner" className="w-9 h-9 rounded-full border-2 border-white object-cover" />
                ))}
              </div>
              <div>
                <div className="flex gap-0.5">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-3.5 h-3.5 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <p className="text-xs text-gray-500 mt-0.5">
                  <span className="font-bold text-black">150+ HVAC owners</span> already using Obby
                </p>
              </div>
            </div>
          </div>

          {/* Right: Hero Image + Floating Cards */}
          <div className="relative hidden lg:flex items-center justify-center h-full">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl w-full">
              <img
                src="https://images.unsplash.com/photo-1621905251189-08b45d6a269e?w=800&q=85&fit=crop"
                alt="HVAC technician working on rooftop unit"
                className="w-full h-[580px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-b from-black/10 via-transparent to-black/50" />
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
              style={{ backgroundColor: "#17191E", borderColor: "rgba(204,255,51,0.3)" }}
            >
              <div className="flex items-center gap-3 mb-2">
                <div className="w-9 h-9 rounded-full flex items-center justify-center" style={{ backgroundColor: "rgba(204,255,51,0.15)" }}>
                  <CheckCircle2 className="w-4 h-4" style={{ color: "#CCFF33" }} />
                </div>
                <div>
                  <p className="text-xs font-bold text-white">Obby Captured It</p>
                  <p className="text-xs" style={{ color: "#CCFF33" }}>Tagged: EMERGENCY</p>
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

        <div className="pt-8 border-t border-gray-100 mt-8">
          <p className="text-center text-xs text-gray-400 uppercase tracking-widest font-bold mb-5">Shops in</p>
          <div className="flex flex-wrap justify-center gap-6 items-center opacity-40">
            {["Texas", "Florida", "Arizona", "California", "Georgia", "North Carolina", "Ohio"].map((state) => (
              <span key={state} className="text-sm font-bold text-gray-700">{state}</span>
            ))}
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
