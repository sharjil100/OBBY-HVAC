"use client";

import { useState } from "react";
import { Phone, ArrowRight, CheckCircle2 } from "lucide-react";

export default function BookingForm() {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({ name: "", phone: "", company: "", area: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="max-w-2xl mx-auto text-center py-8">
        <div
          className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4"
          style={{ backgroundColor: "var(--accent)" }}
        >
          <CheckCircle2 className="w-8 h-8 text-black" />
        </div>

        <h3
          className="text-2xl font-black mb-2"
          style={{ color: "var(--foreground)" }}
        >
          You&apos;re on the list!
        </h3>

        <p style={{ color: "var(--gray-text)" }}>
          We&apos;ll text and email you within 1 business hour to confirm your 10-minute setup call. Check your phone.
        </p>
      </div>
    );
  }

  return (
    <div id="booking-form" className="grid lg:grid-cols-2 gap-10 items-center max-w-5xl mx-auto">
      {/* Left: copy */}
      <div>
        <div className="section-badge">
          <Phone className="w-3.5 h-3.5" />
          10-Minute Setup Call
        </div>

        <h2
          className="text-3xl font-black mb-4 leading-tight"
          style={{ color: "var(--foreground)", letterSpacing: "-0.02em" }}
        >
          Get started in one short call.
          <br />
          <span
            style={{
              color: "var(--foreground)",
              textDecoration: "underline",
              textDecorationColor: "var(--accent)",
              textDecorationThickness: "4px",
            }}
          >
            No tech skills needed.
          </span>
        </h2>

        <p className="mb-6" style={{ color: "var(--gray-text)" }}>
          We handle everything. You just tell us your business name and service area. We&apos;re live the same day.
        </p>

        <div className="space-y-3">
          {[
            "We set up your number and routing",
            "We categorize emergencies vs. routine calls",
            "Review follow-up starts automatically",
          ].map((item) => (
            <div key={item} className="flex items-start gap-3">
              <div
                className="w-5 h-5 rounded-full flex items-center justify-center shrink-0 mt-0.5"
                style={{ backgroundColor: "var(--accent)" }}
              >
                <CheckCircle2 className="w-3 h-3 text-black" />
              </div>
              <span className="text-sm" style={{ color: "rgba(0,0,0,0.72)" }}>
                {item}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Right: Form */}
      <div
        className="rounded-2xl p-8 border shadow-md"
        style={{
          backgroundColor: "var(--background)",
          borderColor: "rgba(0,0,0,0.08)",
        }}
      >
        <h3
          className="text-xl font-black mb-6"
          style={{ color: "var(--foreground)", letterSpacing: "-0.02em" }}
        >
          Book My Setup Call
        </h3>

        <form onSubmit={handleSubmit} className="space-y-4">
          {[
            { label: "Your Name *", type: "text", key: "name", placeholder: "Mike Johnson", required: true },
            { label: "Phone Number *", type: "tel", key: "phone", placeholder: "(555) 555-5555", required: true },
            { label: "Company Name *", type: "text", key: "company", placeholder: "Johnson Plumbing LLC", required: true },
            { label: "Service Area", type: "text", key: "area", placeholder: "Dallas, TX", required: false },
          ].map(({ label, type, key, placeholder, required }) => (
            <div key={key}>
              <label
                className="block text-sm font-bold mb-1.5"
                style={{ color: "var(--foreground)" }}
              >
                {label}
              </label>

              <input
                type={type}
                required={required}
                placeholder={placeholder}
                value={form[key as keyof typeof form]}
                onChange={(e) => setForm({ ...form, [key]: e.target.value })}
                className="w-full px-4 py-3 border rounded-lg text-sm bg-white focus:outline-none transition-all"
                style={{
                  color: "var(--foreground)",
                  borderColor: "rgba(0,0,0,0.08)",
                  boxShadow: "none",
                }}
                onFocus={(e) => {
                  e.target.style.borderColor = "var(--accent)";
                }}
                onBlur={(e) => {
                  e.target.style.borderColor = "rgba(0,0,0,0.08)";
                }}
              />
            </div>
          ))}

          <button type="submit" className="btn-primary w-full justify-center py-4 text-base mt-2 rounded-lg font-black">
            <Phone className="w-5 h-5" />
            Book My Setup Call
            <ArrowRight className="w-4 h-4" />
          </button>

          <p
            className="text-center text-xs"
            style={{ color: "rgba(0,0,0,0.4)" }}
          >
            No setup fee • Month-to-month • Cancel anytime
          </p>
        </form>
      </div>
    </div>
  );
}