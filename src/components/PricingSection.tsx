"use client";

import { CheckCircle2, Phone, ArrowRight } from "lucide-react";

const includes = [
  "No setup fee",
  "Month-to-month",
  "Cancel anytime",
  "Missed-call capture",
  "Emergency call tagging & instant SMS alerts",
  "After-hours & weekend coverage",
  "Automated Google review follow-up",
  "Spam & vendor filtering",
  "Simple call log with recordings",
];

export default function PricingSection() {
  return (
    <section id="pricing" className="py-20" style={{ backgroundColor: "var(--background)" }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <div className="section-badge">Pricing</div>

          <h2
            className="text-3xl sm:text-4xl font-black mb-4 leading-tight"
            style={{ color: "var(--foreground)", letterSpacing: "-0.02em" }}
          >
            What does it cost?
          </h2>

          <p className="text-lg" style={{ color: "var(--gray-text)" }}>
            The HVAC Front Desk System is $397 per month.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 items-start">
          {/* Left: trust points */}
          <div className="lg:col-start-1 lg:row-start-1 flex flex-col gap-4">
            {[
              { emoji: "🔒", title: "No Lock-In", desc: "Month-to-month means you're never trapped. Stay because it works." },
              { emoji: "⚡", title: "Live Same Day", desc: "Done with your call by 10am? Live by noon." },
              { emoji: "🧾", title: "Flat Rate", desc: "10 calls or 100, the price never changes." },
              { emoji: "🔕", title: "Zero Setup Fee", desc: "First month is the only thing you pay. We don't nickel and dime." },
            ].map(({ emoji, title, desc }) => (
              <div
                key={title}
                className="flex gap-4 p-5 rounded-xl border transition-colors"
                style={{
                  backgroundColor: "var(--background)",
                  borderColor: "rgba(0,0,0,0.06)",
                }}
              >
                <span className="text-2xl shrink-0">{emoji}</span>
                <div>
                  <h4
                    className="font-extrabold mb-1 text-sm"
                    style={{ color: "var(--foreground)" }}
                  >
                    {title}
                  </h4>
                  <p className="text-xs" style={{ color: "var(--gray-text)" }}>
                    {desc}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Center: Pricing Card */}
          <div className="lg:col-start-2 relative">
            <div
              className="absolute -top-4 left-1/2 -translate-x-1/2 text-xs font-black uppercase tracking-wider px-5 py-1.5 rounded-full whitespace-nowrap"
              style={{
                backgroundColor: "var(--accent)",
                color: "#000000",
              }}
            >
              Most Popular
            </div>

            <div
              className="rounded-2xl p-8 border-2 shadow-xl"
              style={{
                borderColor: "var(--accent)",
                backgroundColor: "var(--dark)",
              }}
            >
              <div className="text-center mb-8">
                <div className="flex items-start justify-center gap-1 mb-2">
                  <span className="text-2xl font-extrabold mt-3" style={{ color: "rgba(255,255,255,0.6)" }}>
                    $
                  </span>
                  <span className="text-7xl font-black leading-none" style={{ color: "#ffffff" }}>
                    397
                  </span>
                  <span className="self-end pb-2 font-semibold" style={{ color: "rgba(255,255,255,0.6)" }}>
                    /mo
                  </span>
                </div>

                <p className="text-sm" style={{ color: "rgba(255,255,255,0.45)" }}>
                  Flat rate • No contracts • No per-call fees
                </p>
              </div>

              <div className="space-y-3 mb-8">
                {includes.map((item) => (
                  <div key={item} className="flex items-start gap-3">
                    <div
                      className="w-4 h-4 rounded-full flex items-center justify-center shrink-0 mt-0.5"
                      style={{ backgroundColor: "var(--accent)" }}
                    >
                      <CheckCircle2 className="w-2.5 h-2.5 text-black" />
                    </div>
                    <span className="text-sm" style={{ color: "rgba(255,255,255,0.8)" }}>
                      {item}
                    </span>
                  </div>
                ))}
              </div>

              <a href="#booking-form" className="btn-primary w-full justify-center py-4 text-base rounded-lg font-black">
                <Phone className="w-5 h-5" />
                Book My Setup Call
                <ArrowRight className="w-4 h-4" />
              </a>

              <p className="text-center text-xs mt-3" style={{ color: "rgba(255,255,255,0.45)" }}>
                No setup fee · Live same day
              </p>
            </div>
          </div>

          {/* Right: ROI */}
          <div className="flex flex-col gap-5">
            <div
              className="rounded-2xl p-7"
              style={{ backgroundColor: "var(--accent)" }}
            >
              <p className="text-xs font-black uppercase tracking-widest mb-3" style={{ color: "rgba(0,0,0,0.6)" }}>
                Think About This
              </p>

              <p
                className="text-xl font-black leading-tight mb-3"
                style={{ color: "#000000", letterSpacing: "-0.02em" }}
              >
                Catching just one extra changeout or install a year usually pays for years of the service.
              </p>

              <p className="text-sm leading-relaxed" style={{ color: "rgba(0,0,0,0.72)" }}>
                Even a couple of saved service calls per month can cover it.
              </p>
            </div>

            <div
              className="rounded-2xl p-6 border"
              style={{
                backgroundColor: "var(--background)",
                borderColor: "rgba(0,0,0,0.06)",
              }}
            >
              <p className="text-sm leading-relaxed mb-4" style={{ color: "rgba(0,0,0,0.6)" }}>
                You don't hire another office person. You don't sit on hold with call centers.
              </p>

              <p className="text-sm font-extrabold leading-relaxed" style={{ color: "var(--foreground)" }}>
                You get a front desk that only charges you about what you make on a basic service ticket each month.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}