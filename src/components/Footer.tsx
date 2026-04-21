import { Mail } from "lucide-react";

export default function Footer() {
  return (
    <footer style={{ backgroundColor: "var(--dark-mid)" }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid md:grid-cols-4 gap-10 mb-12">
          {/* Brand */}
          <div className="md:col-span-2">
            <div className="mb-5">
              <span
                className="text-2xl font-black tracking-tight"
                style={{ color: "#ffffff", letterSpacing: "-0.04em" }}
              >
                obby
              </span>
            </div>

            <p
              className="text-sm leading-relaxed max-w-sm mb-5"
              style={{ color: "rgba(255,255,255,0.5)" }}
            >
              Obby helps HVAC owner-operators and small shops capture missed calls, prioritize
              emergencies, and grow their Google reviews — all for one flat monthly fee.
            </p>

            <a
              href="mailto:team@meetobby.com"
              className="flex items-center gap-2 text-sm transition-colors no-underline"
              style={{ color: "rgba(255,255,255,0.5)" }}
            >
              <Mail className="w-4 h-4" />
              team@meetobby.com
            </a>
          </div>

          <div>
            <h4 className="font-bold text-sm mb-4" style={{ color: "#ffffff" }}>
              Quick Links
            </h4>

            <div className="space-y-2.5">
              {[
                { label: "How It Works", href: "#how-it-works" },
                { label: "Pricing", href: "#pricing" },
                { label: "FAQ", href: "#faq" },
                { label: "Book a Call", href: "#booking-form" },
              ].map(({ label, href }) => (
                <a
                  key={label}
                  href={href}
                  className="block text-sm transition-colors no-underline"
                  style={{ color: "rgba(255,255,255,0.5)" }}
                >
                  {label}
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="font-bold text-sm mb-4" style={{ color: "#ffffff" }}>
              Industries
            </h4>

            <div className="space-y-2.5">
              {["HVAC", "Plumbing", "Electrical", "Roofing"].map((item) => (
                <div key={item} className="flex items-center gap-2">
                  <span className="text-sm" style={{ color: "rgba(255,255,255,0.5)" }}>
                    {item}
                  </span>

                  {item !== "HVAC" && (
                    <span
                      className="text-xs font-bold px-1.5 py-0.5 rounded"
                      style={{
                        backgroundColor: "rgba(var(--accent-rgb), 0.12)",
                        color: "var(--accent)",
                      }}
                    >
                      Soon
                    </span>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>

        <div
          className="pt-8 border-t flex flex-col sm:flex-row items-center justify-between gap-4"
          style={{ borderColor: "rgba(255,255,255,0.06)" }}
        >
          <p className="text-xs" style={{ color: "rgba(255,255,255,0.35)" }}>
            © {new Date().getFullYear()} Obby. All rights reserved.
          </p>

          <div className="flex gap-6">
            {["Privacy Policy", "Terms of Service"].map((link) => (
              <a
                key={link}
                href="#"
                className="text-xs transition-colors no-underline"
                style={{ color: "rgba(255,255,255,0.35)" }}
              >
                {link}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}