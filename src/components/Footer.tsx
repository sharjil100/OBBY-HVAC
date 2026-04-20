import { Mail } from "lucide-react";

export default function Footer() {
  return (
    <footer style={{ backgroundColor: "#0B0B11" }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid md:grid-cols-4 gap-10 mb-12">
          {/* Brand */}
          <div className="md:col-span-2">
            {/* Logo: obby in white on dark */}
            <div className="mb-5">
              <span
                className="text-2xl font-black tracking-tight text-white"
                style={{ letterSpacing: "-0.04em" }}
              >
                obby
              </span>
            </div>
            <p className="text-sm text-gray-500 leading-relaxed max-w-sm mb-5">
              Obby helps HVAC owner-operators and small shops capture missed calls, prioritize
              emergencies, and grow their Google reviews — all for one flat monthly fee.
            </p>
            <a
              href="mailto:team@meetobby.com"
              className="flex items-center gap-2 text-sm text-gray-500 hover:text-white transition-colors no-underline"
            >
              <Mail className="w-4 h-4" />
              team@meetobby.com
            </a>
          </div>

          <div>
            <h4 className="text-white font-bold text-sm mb-4">Quick Links</h4>
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
                  className="block text-sm text-gray-500 hover:text-white transition-colors no-underline"
                >
                  {label}
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-white font-bold text-sm mb-4">Industries</h4>
            <div className="space-y-2.5">
              {["HVAC", "Plumbing", "Electrical", "Roofing"].map((item) => (
                <div key={item} className="flex items-center gap-2">
                  <span className="text-sm text-gray-500">{item}</span>
                  {item !== "HVAC" && (
                    <span
                      className="text-xs font-bold px-1.5 py-0.5 rounded"
                      style={{ backgroundColor: "rgba(204,255,51,0.12)", color: "#CCFF33" }}
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
          <p className="text-xs text-gray-600">
            © {new Date().getFullYear()} Obby. All rights reserved.
          </p>
          <div className="flex gap-6">
            {["Privacy Policy", "Terms of Service"].map((link) => (
              <a
                key={link}
                href="#"
                className="text-xs text-gray-600 hover:text-white transition-colors no-underline"
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
