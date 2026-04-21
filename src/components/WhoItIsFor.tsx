"use client";

import { PhoneOff, Thermometer, Clock, Star } from "lucide-react";

const painPoints = [
  {
    icon: Thermometer,
    text: "Your techs are on roofs or in crawlspaces when the phones blow up",
  },
  {
    icon: PhoneOff,
    text: "Calls roll to voicemail or ring out because nobody's free",
  },
  {
    icon: Clock,
    text: "Homeowners with no heat / no AC don't wait for a call back",
  },
  {
    icon: Star,
    text: "You know reviews drive Google and LSA, but no one has time to chase them",
  },
];

export default function WhoItIsFor() {
  return (
    <section
      className="py-20"
      style={{ backgroundColor: "var(--background)" }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-14 items-center">
          <div className="relative order-2 lg:order-1">
            <div className="rounded-2xl overflow-hidden shadow-xl">
              <img
                src="/who-this-is-for.png"
                alt="HVAC technician working in a tight crawlspace"
                className="w-full h-[480px] object-cover"
              />
            </div>

            <div
              className="absolute bottom-6 left-6 right-6 backdrop-blur-sm rounded-xl p-4 shadow-lg border"
              style={{
                backgroundColor: "rgba(255, 255, 255, 0.95)",
                borderColor: "rgba(0, 0, 0, 0.06)",
              }}
            >
              <div className="flex items-center gap-3">
                <div
                  className="w-11 h-11 rounded-xl flex items-center justify-center shrink-0"
                  style={{ backgroundColor: "var(--accent)" }}
                >
                  <PhoneOff className="w-5 h-5 text-black" />
                </div>
                <div>
                  <p
                    className="font-extrabold text-sm"
                    style={{ color: "var(--foreground)" }}
                  >
                    3 missed calls while you read this
                  </p>
                  <p
                    className="text-xs mt-0.5"
                    style={{ color: "var(--gray-text)" }}
                  >
                    The average HVAC shop misses 12 calls on a busy day
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="order-1 lg:order-2">
            <div className="section-badge">Who This Is For</div>

            <h2
              className="text-3xl sm:text-4xl font-black mb-4 leading-tight"
              style={{ color: "var(--foreground)", letterSpacing: "-0.02em" }}
            >
              Built for busy HVAC shops,{" "}
              <span
                style={{
                  textDecoration: "underline",
                  textDecorationColor: "var(--accent)",
                  textDecorationThickness: "4px",
                }}
              >
                not call centers
              </span>
            </h2>

            <p
              className="mb-8 text-lg"
              style={{ color: "var(--gray-text)" }}
            >
              This is for you if:
            </p>

            <div className="space-y-4 mb-8">
              {painPoints.map(({ icon: Icon, text }, i) => (
                <div key={i} className="flex gap-4 items-start">
                  <div
                    className="w-9 h-9 rounded-lg flex items-center justify-center shrink-0 mt-0.5"
                    style={{
                      backgroundColor: i % 2 === 0 ? "var(--accent)" : "var(--dark)",
                    }}
                  >
                    <Icon
                      className="w-4 h-4"
                      style={{
                        color: i % 2 === 0 ? "#000000" : "var(--accent)",
                      }}
                    />
                  </div>

                  <p
                    className="leading-relaxed pt-1"
                    style={{ color: "var(--foreground)" }}
                  >
                    {text}
                  </p>
                </div>
              ))}
            </div>

            <div
              className="rounded-xl p-5 border"
              style={{
                backgroundColor: "rgba(var(--accent-rgb), 0.07)",
                borderColor: "rgba(var(--accent-rgb), 0.25)",
              }}
            >
              <p
                className="font-extrabold text-sm"
                style={{ color: "var(--foreground)" }}
              >
                If that sounds like your world, the HVAC Front Desk System is for you.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}