"use client";

import { Phone, ArrowRight, CheckCircle2 } from "lucide-react";

export default function FinalCTA() {
  return (
    <section className="py-20 relative overflow-hidden" style={{ backgroundColor: "#17191E" }}>
      {/* Lime glow */}
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] rounded-full blur-3xl pointer-events-none opacity-10"
        style={{ backgroundColor: "#CCFF33" }}
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left: Copy */}
          <div>
            <div
              className="inline-flex items-center gap-2 text-xs font-black uppercase tracking-widest px-3 py-1.5 rounded-full mb-6"
              style={{ backgroundColor: "rgba(204,255,51,0.12)", color: "#CCFF33", border: "1px solid rgba(204,255,51,0.25)" }}
            >
              <span className="w-1.5 h-1.5 rounded-full inline-block" style={{ backgroundColor: "#CCFF33" }} />
              Don't Let Another Season Go By
            </div>

            <h2
              className="text-4xl sm:text-5xl font-black text-white leading-tight mb-6"
              style={{ letterSpacing: "-0.02em" }}
            >
              Ready to stop losing{" "}
              <span style={{ color: "#CCFF33" }}>$8k–$30k</span>{" "}
              HVAC jobs to voicemail?
            </h2>

            <p className="text-gray-400 text-lg leading-relaxed mb-8">
              We'll plug in your smart number, catch the calls you miss, flag emergencies, and
              start turning finished jobs into 5‑star reviews – in one short call.
            </p>

            <div className="space-y-3 mb-10">
              {[
                "No setup fee",
                "Month‑to‑month. Live in one short call.",
              ].map((item) => (
                <div key={item} className="flex items-center gap-3">
                  <div
                    className="w-5 h-5 rounded-full flex items-center justify-center shrink-0"
                    style={{ backgroundColor: "#CCFF33" }}
                  >
                    <CheckCircle2 className="w-3 h-3 text-black" />
                  </div>
                  <span className="text-gray-300 text-sm font-semibold">{item}</span>
                </div>
              ))}
            </div>

            <a href="#booking-form" className="btn-primary px-8 py-4 rounded-xl font-black text-base">
              <Phone className="w-5 h-5" />
              Book 10‑Minute Setup Call
              <ArrowRight className="w-4 h-4" />
            </a>
            <p className="text-gray-600 text-sm mt-3">
              No setup fee. Month‑to‑month. Live in one short call.
            </p>
          </div>

          {/* Right: Image */}
          <div className="relative hidden lg:block">
            <div className="rounded-2xl overflow-hidden shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=800&q=85&fit=crop"
                alt="Successful HVAC team"
                className="w-full h-[460px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
            </div>
            <div
              className="absolute -bottom-4 left-1/2 -translate-x-1/2 rounded-xl px-8 py-4 text-center shadow-xl"
              style={{ backgroundColor: "#CCFF33" }}
            >
              <p className="text-black font-black text-lg" style={{ letterSpacing: "-0.02em" }}>$397 / month</p>
              <p className="text-black/60 text-xs">One install covers 20+ months</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
