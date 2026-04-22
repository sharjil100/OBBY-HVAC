"use client";

import { Phone, ArrowRight, CheckCircle2 } from "lucide-react";

export default function FinalCTA() {
  return (
    <section
      className="py-20 relative overflow-hidden"
      style={{ backgroundColor: "var(--dark)" }}
    >
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] rounded-full blur-3xl pointer-events-none opacity-10"
        style={{ backgroundColor: "var(--accent)" }}
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <div
              className="inline-flex items-center gap-2 text-xs font-black uppercase tracking-widest px-3 py-1.5 rounded-full mb-6"
              style={{
                backgroundColor: "rgba(var(--accent-rgb), 0.12)",
                color: "var(--accent)",
                border: "1px solid rgba(var(--accent-rgb), 0.25)",
              }}
            >
              <span
                className="w-1.5 h-1.5 rounded-full inline-block"
                style={{ backgroundColor: "var(--accent)" }}
              />
              Don&apos;t Let Another Job Slip Away
            </div>

            <h2
              className="text-4xl sm:text-5xl font-black leading-tight mb-6"
              style={{ color: "#ffffff", letterSpacing: "-0.02em" }}
            >
              Ready to stop losing{" "}
              <span style={{ color: "var(--accent)" }}>plumbing jobs</span>{" "}
              to missed calls?
            </h2>

            <p
              className="text-lg leading-relaxed mb-8"
              style={{ color: "rgba(255,255,255,0.6)" }}
            >
              We&apos;ll plug in your number, catch missed calls, flag emergencies, and start
              turning completed jobs into 5-star reviews — in one short call.
            </p>

            <div className="space-y-3 mb-10">
              {[
                "No setup fee",
                "Month-to-month. Live in one short call.",
              ].map((item) => (
                <div key={item} className="flex items-center gap-3">
                  <div
                    className="w-5 h-5 rounded-full flex items-center justify-center shrink-0"
                    style={{ backgroundColor: "var(--accent)" }}
                  >
                    <CheckCircle2 className="w-3 h-3 text-black" />
                  </div>
                  <span
                    className="text-sm font-semibold"
                    style={{ color: "rgba(255,255,255,0.82)" }}
                  >
                    {item}
                  </span>
                </div>
              ))}
            </div>

            <a href="#booking-form" className="btn-primary px-8 py-4 rounded-xl font-black text-base">
              <Phone className="w-5 h-5" />
              Book 10-Minute Setup Call
              <ArrowRight className="w-4 h-4" />
            </a>

            <p
              className="text-sm mt-3"
              style={{ color: "rgba(255,255,255,0.38)" }}
            >
              No setup fee. Month-to-month. Live in one short call.
            </p>
          </div>

          <div className="relative hidden lg:block">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <img
                src="/call-to-action-plumbing.png"
                alt="Plumbing team after a successful install"
                className="w-full h-[460px] object-cover"
              />
              <div className="absolute inset-0 bg-black/25 pointer-events-none" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent pointer-events-none" />
            </div>

            <div
              className="absolute -bottom-4 left-1/2 -translate-x-1/2 rounded-xl px-8 py-4 text-center shadow-xl"
              style={{ backgroundColor: "var(--accent)" }}
            >
              <p
                className="font-black text-lg"
                style={{ color: "#000000", letterSpacing: "-0.02em" }}
              >
                $397 / month
              </p>
              <p className="text-xs" style={{ color: "rgba(0,0,0,0.6)" }}>
                One sewer or water heater job covers months
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}