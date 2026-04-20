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
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-14 items-center">
          {/* Left: Image */}
          <div className="relative order-2 lg:order-1">
            <div className="rounded-2xl overflow-hidden shadow-xl">
              <img
                src="https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?w=800&q=85&fit=crop"
                alt="HVAC technician working in tight space"
                className="w-full h-[480px] object-cover"
              />
            </div>
            <div className="absolute bottom-6 left-6 right-6 bg-white/95 backdrop-blur-sm rounded-xl p-4 shadow-lg border border-gray-100">
              <div className="flex items-center gap-3">
                <div className="w-11 h-11 rounded-xl flex items-center justify-center shrink-0" style={{ backgroundColor: "#CCFF33" }}>
                  <PhoneOff className="w-5 h-5 text-black" />
                </div>
                <div>
                  <p className="font-extrabold text-black text-sm">3 missed calls while you read this</p>
                  <p className="text-xs text-gray-500 mt-0.5">The average HVAC shop misses 12 calls on a busy day</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right: Copy */}
          <div className="order-1 lg:order-2">
            <div className="section-badge">Who This Is For</div>
            <h2
              className="text-3xl sm:text-4xl font-black text-black mb-4 leading-tight"
              style={{ letterSpacing: "-0.02em" }}
            >
              Built for busy HVAC shops,{" "}
              <span style={{ textDecoration: "underline", textDecorationColor: "#CCFF33", textDecorationThickness: "4px" }}>
                not call centers
              </span>
            </h2>
            <p className="text-gray-500 mb-8 text-lg">This is for you if:</p>

            <div className="space-y-4 mb-8">
              {painPoints.map(({ icon: Icon, text }, i) => (
                <div key={i} className="flex gap-4 items-start">
                  <div
                    className="w-9 h-9 rounded-lg flex items-center justify-center shrink-0 mt-0.5"
                    style={{ backgroundColor: i % 2 === 0 ? "#CCFF33" : "#17191E" }}
                  >
                    <Icon className="w-4 h-4" style={{ color: i % 2 === 0 ? "#000" : "#CCFF33" }} />
                  </div>
                  <p className="text-gray-700 leading-relaxed pt-1">{text}</p>
                </div>
              ))}
            </div>

            <div
              className="rounded-xl p-5 border"
              style={{ backgroundColor: "rgba(204,255,51,0.07)", borderColor: "rgba(204,255,51,0.25)" }}
            >
              <p className="text-black font-extrabold text-sm">
                If that sounds like your world, the HVAC Front Desk System is for you.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
