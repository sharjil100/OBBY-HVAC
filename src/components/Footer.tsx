import { Mail } from "lucide-react";

type IconProps = { className?: string };

const FacebookIcon = ({ className }: IconProps) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
    <path d="M13.397 20.997v-8.196h2.765l.411-3.209h-3.176V7.548c0-.926.258-1.56 1.587-1.56h1.684V3.127A22.336 22.336 0 0 0 14.201 3c-2.444 0-4.122 1.492-4.122 4.231v2.355H7.332v3.209h2.753v8.202z" />
  </svg>
);

const InstagramIcon = ({ className }: IconProps) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
    <path d="M12 2.163c3.204 0 3.584.012 4.849.07 1.366.062 2.633.334 3.608 1.309.975.975 1.247 2.242 1.309 3.608.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.062 1.366-.334 2.633-1.309 3.608-.975.975-2.242 1.247-3.608 1.309-1.265.058-1.645.069-4.849.069-3.205 0-3.584-.012-4.849-.069-1.366-.062-2.633-.334-3.608-1.309-.975-.975-1.247-2.242-1.309-3.608C2.175 15.647 2.163 15.267 2.163 12s.012-3.584.07-4.849c.062-1.366.334-2.633 1.309-3.608C4.517 2.568 5.784 2.296 7.15 2.234 8.416 2.175 8.796 2.163 12 2.163zm0 1.622c-3.141 0-3.486.011-4.71.068-.975.045-1.504.207-1.856.344a3.098 3.098 0 0 0-1.15.748 3.1 3.1 0 0 0-.748 1.15c-.137.352-.299.881-.344 1.856-.057 1.224-.068 1.569-.068 4.71 0 3.141.011 3.486.068 4.71.045.975.207 1.504.344 1.856.182.466.4.8.748 1.15.35.349.684.566 1.15.748.352.137.881.299 1.856.344 1.224.057 1.569.068 4.71.068 3.141 0 3.486-.011 4.71-.068.975-.045 1.504-.207 1.856-.344a3.098 3.098 0 0 0 1.15-.748c.349-.35.566-.684.748-1.15.137-.352.299-.881.344-1.856.057-1.224.068-1.569.068-4.71 0-3.141-.011-3.486-.068-4.71-.045-.975-.207-1.504-.344-1.856a3.098 3.098 0 0 0-.748-1.15 3.098 3.098 0 0 0-1.15-.748c-.352-.137-.881-.299-1.856-.344-1.224-.057-1.569-.068-4.71-.068zm0 2.757a5.458 5.458 0 1 1 0 10.916 5.458 5.458 0 0 1 0-10.916zm0 9.003a3.545 3.545 0 1 0 0-7.09 3.545 3.545 0 0 0 0 7.09zm5.693-9.107a1.276 1.276 0 1 1 0-2.552 1.276 1.276 0 0 1 0 2.552z" />
  </svg>
);

const XIcon = ({ className }: IconProps) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
  </svg>
);

const LinkedinIcon = ({ className }: IconProps) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.063 2.063 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
  </svg>
);

const socialLinks = [
  { label: "Facebook", href: "#", Icon: FacebookIcon },
  { label: "Instagram", href: "#", Icon: InstagramIcon },
  { label: "X", href: "#", Icon: XIcon },
  { label: "LinkedIn", href: "#", Icon: LinkedinIcon },
];

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
              className="flex items-center gap-2 text-sm transition-colors no-underline mb-5"
              style={{ color: "rgba(255,255,255,0.5)" }}
            >
              <Mail className="w-4 h-4" />
              team@meetobby.com
            </a>

            <div className="flex items-center gap-3">
              {socialLinks.map(({ label, href, Icon }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  className="w-9 h-9 rounded-full flex items-center justify-center transition-all hover:scale-110"
                  style={{
                    backgroundColor: "rgba(255,255,255,0.06)",
                    color: "rgba(255,255,255,0.7)",
                  }}
                >
                  <Icon className="w-4 h-4" />
                </a>
              ))}
            </div>
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
              <span className="block text-sm" style={{ color: "rgba(255,255,255,0.5)" }}>
                HVAC
              </span>
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
            {[
              { label: "Privacy Policy", href: "/privacy-policy" },
              { label: "Terms of Service", href: "/terms-of-service" },
            ].map(({ label, href }) => (
              <a
                key={label}
                href={href}
                className="text-xs transition-colors no-underline"
                style={{ color: "rgba(255,255,255,0.35)" }}
              >
                {label}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}