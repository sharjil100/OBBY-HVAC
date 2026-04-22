"use client";

import { useState } from "react";
import { Plus, Minus } from "lucide-react";

const faqs = [
  {
    q: "How fast can we be live?",
    a: "Usually during the first 10–15 minute call.",
  },
  {
    q: "Will this sound robotic?",
    a: "No. We answer like a real office and keep it quick.",
  },
  {
    q: "What about emergencies?",
    a: "We tag urgent calls — leaks, sewer backups, no water / no hot water — so you can prioritize them.",
  },
  {
    q: "Do you filter spam and vendors?",
    a: "Yes — only real customers reach your attention. Vendors get pointed to an email so your call log stays focused.",
  },
  {
    q: "Is there a contract?",
    a: "No. $397/month. Cancel anytime.",
  },
];

export default function FAQSection() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section id="faq" className="py-20" style={{ backgroundColor: "#FAFAFA" }}>
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <div className="section-badge">FAQ</div>

          <h2
            className="text-3xl sm:text-4xl font-black mb-4 leading-tight"
            style={{ color: "var(--foreground)", letterSpacing: "-0.02em" }}
          >
            Questions? We've got answers.
          </h2>

          <p style={{ color: "var(--gray-text)" }}>
            Still not sure? Book the 10-minute call — we'll answer anything live.
          </p>
        </div>

        <div className="space-y-2">
          {faqs.map((faq, i) => (
            <div
              key={i}
              className="rounded-xl border overflow-hidden transition-all"
              style={{
                backgroundColor: "var(--background)",
                borderColor: open === i ? "var(--accent)" : "rgba(0,0,0,0.06)",
              }}
            >
              <button
                className="w-full flex items-center justify-between p-5 text-left"
                style={{ backgroundColor: "var(--background)" }}
                onClick={() => setOpen(open === i ? null : i)}
              >
                <span
                  className="font-bold text-sm pr-4"
                  style={{
                    color: open === i ? "var(--foreground)" : "rgba(0,0,0,0.72)",
                  }}
                >
                  {faq.q}
                </span>

                <span
                  className="shrink-0 w-7 h-7 rounded-full flex items-center justify-center"
                  style={{
                    backgroundColor: open === i ? "var(--accent)" : "rgba(0,0,0,0.04)",
                  }}
                >
                  {open === i ? (
                    <Minus className="w-3.5 h-3.5 text-black" />
                  ) : (
                    <Plus
                      className="w-3.5 h-3.5"
                      style={{ color: "var(--gray-text)" }}
                    />
                  )}
                </span>
              </button>

              {open === i && (
                <div className="px-5 pb-5">
                  <div
                    className="h-px mb-4"
                    style={{ backgroundColor: "rgba(0,0,0,0.05)" }}
                  />
                  <p
                    className="text-sm leading-relaxed"
                    style={{ color: "var(--gray-text)" }}
                  >
                    {faq.a}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}