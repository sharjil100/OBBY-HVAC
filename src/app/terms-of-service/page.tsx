import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Terms of Service – Obby",
  description:
    "The terms that govern your use of the Obby website and the Plumbing Front Desk System.",
};

export default function TermsOfServicePage() {
  return (
    <>
      <Navbar />
      <main className="pt-28 pb-20" style={{ backgroundColor: "var(--background)" }}>
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="section-badge">Legal</div>

          <h1
            className="text-4xl sm:text-5xl font-black mb-3 leading-tight"
            style={{ color: "var(--foreground)", letterSpacing: "-0.02em" }}
          >
            Terms of Service
          </h1>

          <p className="text-sm mb-10" style={{ color: "var(--gray-text)" }}>
            Effective Date: April 22, 2026
          </p>

          <div className="mb-10 space-y-4 text-[15px] leading-relaxed" style={{ color: "var(--gray-text)" }}>
            <p>
              Welcome to Obby. These Terms of Service (&ldquo;Terms&rdquo;) govern your access to
              and use of our website, the Plumbing Front Desk System, and any related services
              (together, the &ldquo;Services&rdquo;) provided by Obby (&ldquo;Obby,&rdquo;
              &ldquo;we,&rdquo; &ldquo;us,&rdquo; or &ldquo;our&rdquo;). By using the Services, you
              agree to these Terms. If you do not agree, please do not use the Services.
            </p>
          </div>

          <Section title="1. Age requirement">
            <p>
              You must be at least 18 years old to use Obby. By agreeing to these Terms, you
              confirm that you are 18 or older and have the legal authority to enter into an
              agreement on behalf of your plumbing business.
            </p>
          </Section>

          <Section title="2. The services we provide">
            <p>
              Obby provides an Plumbing Front Desk System that includes, but is not limited to:
            </p>
            <List
              items={[
                "Missed-call capture on a smart number that forwards to your office line first",
                "After-hours and weekend call coverage",
                "Emergency call tagging with instant SMS alerts to the owner",
                "A simple call log with recordings and summaries",
                "Automated Google review follow-up on jobs you mark complete",
                "Spam and vendor filtering",
              ]}
            />
            <p>
              The Services are offered on a month-to-month basis at the pricing displayed on our
              website. You must provide accurate information about your business and use the
              Services in a lawful manner. You are responsible for the actions taken under your
              account and for keeping your login credentials confidential.
            </p>
          </Section>

          <Section title="3. Your account & responsibilities">
            <p>When using Obby you agree to:</p>
            <List
              items={[
                "Provide accurate, current, and complete information during signup",
                "Keep your contact information and forwarding rules up to date",
                "Only forward calls for the business you are authorized to represent",
                "Not use the Services for unlawful, harassing, or deceptive purposes",
                "Not attempt to reverse engineer, scrape, or disrupt the Services",
              ]}
            />
          </Section>

          <Section title="4. Billing, cancellation & refunds">
            <p>
              Obby is billed monthly in advance. The monthly fee covers unlimited calls inside
              fair-use thresholds published on our website. There is no setup fee.
            </p>
            <p>
              You may cancel at any time before your next billing date. Cancellation will stop
              future charges. We do not pro-rate or refund partial months unless required by law.
              If a dispute arises over a charge, contact us first at{" "}
              <a
                href="mailto:team@meetobby.com"
                className="font-semibold no-underline"
                style={{ color: "var(--foreground)" }}
              >
                team@meetobby.com
              </a>{" "}
              so we can resolve it directly.
            </p>
          </Section>

          <Section title="5. SMS messaging">
            <p>
              Certain parts of the Service rely on SMS. By opting in you agree to the following:
            </p>
            <List
              items={[
                "Consent is required and collected via a checkbox opt-in on our forms",
                "Messages may include missed-call alerts, emergency tags, appointment confirmations, support, and service updates",
                'You may opt out at any time by replying "STOP" — reply "HELP" for assistance',
                "Message and data rates may apply, and message frequency varies",
                "Mobile carriers are not liable for delayed or undelivered messages",
              ]}
            />
          </Section>

          <Section title="6. Data privacy">
            <p>
              Our{" "}
              <a
                href="/privacy-policy"
                className="font-semibold no-underline"
                style={{ color: "var(--foreground)" }}
              >
                Privacy Policy
              </a>{" "}
              describes how we collect, use, and protect your information. We do not sell or share
              your personal information, including SMS opt-in data, with third parties for
              marketing purposes.
            </p>
          </Section>

          <Section title="7. Intellectual property">
            <p>
              The Obby brand, website, software, call scripts, and all associated materials are
              owned by Obby and protected by copyright, trademark, and other laws. You are granted
              a limited, revocable license to use the Services for your plumbing business. You may not
              copy, resell, or republish our materials without written permission.
            </p>
          </Section>

          <Section title="8. Third-party services">
            <p>
              The Services integrate with third-party platforms such as your phone provider,
              Google Business Profile, and analytics tools. We are not responsible for outages,
              pricing changes, or policy changes on those platforms. Your use of those services is
              governed by their own terms.
            </p>
          </Section>

          <Section title="9. Service availability">
            <p>
              We work hard to keep Obby running around the clock, but we do not guarantee
              uninterrupted availability. Scheduled maintenance, force majeure events, carrier
              issues, or third-party outages may temporarily affect the Service.
            </p>
          </Section>

          <Section title="10. Disclaimer of warranties">
            <p>
              The Services are provided &ldquo;as is&rdquo; and &ldquo;as available&rdquo; without
              warranties of any kind, either express or implied. Obby disclaims all warranties of
              merchantability, fitness for a particular purpose, and non-infringement to the
              fullest extent permitted by law. We do not guarantee any specific increase in calls,
              revenue, or Google reviews, though that is what the system is designed to help you
              achieve.
            </p>
          </Section>

          <Section title="11. Limitation of liability">
            <p>
              To the fullest extent permitted by law, Obby and its officers, employees, and
              affiliates will not be liable for any indirect, incidental, special, consequential,
              or punitive damages, including loss of profits, revenue, data, or goodwill, arising
              from your use of the Services. Our total liability for any claim related to the
              Services is limited to the amount you paid Obby in the three months preceding the
              event giving rise to the claim.
            </p>
          </Section>

          <Section title="12. Indemnification">
            <p>
              You agree to indemnify and hold Obby harmless from any claims, losses, or damages
              arising out of your use of the Services, your violation of these Terms, or your
              violation of any rights of a third party.
            </p>
          </Section>

          <Section title="13. Dispute resolution">
            <p>
              If a dispute arises, we ask that you first contact us at{" "}
              <a
                href="mailto:team@meetobby.com"
                className="font-semibold no-underline"
                style={{ color: "var(--foreground)" }}
              >
                team@meetobby.com
              </a>{" "}
              so we can attempt to resolve it informally. If we cannot resolve the dispute within
              30 days, either party may pursue formal dispute resolution as allowed by applicable
              law.
            </p>
          </Section>

          <Section title="14. Governing law">
            <p>
              These Terms are governed by the laws of the State of California, without regard to
              its conflict of law principles. Any legal action arising under these Terms will be
              brought in the courts located in California.
            </p>
          </Section>

          <Section title="15. Termination">
            <p>
              We may suspend or terminate your access to the Services if you violate these Terms,
              if we are required to by law, or if your account is used in a way that damages Obby
              or other customers. You may terminate your account at any time by contacting us.
            </p>
          </Section>

          <Section title="16. Changes to these terms">
            <p>
              We may update these Terms from time to time. Updates will be posted on this page
              with a revised effective date. Continued use of the Services after changes take
              effect means you accept the revised Terms.
            </p>
          </Section>

          <Section title="17. Contact information">
            <p>Questions about these Terms? Reach out any time:</p>
            <div
              className="rounded-xl p-5 mt-4 border"
              style={{
                backgroundColor: "rgba(0,0,0,0.02)",
                borderColor: "rgba(0,0,0,0.06)",
              }}
            >
              <p className="font-extrabold text-sm mb-2" style={{ color: "var(--foreground)" }}>
                Obby
              </p>
              <p className="text-sm" style={{ color: "var(--gray-text)" }}>
                Email:{" "}
                <a
                  href="mailto:team@meetobby.com"
                  className="no-underline font-semibold"
                  style={{ color: "var(--foreground)" }}
                >
                  team@meetobby.com
                </a>
              </p>
              <p className="text-sm" style={{ color: "var(--gray-text)" }}>
                Website:{" "}
                <a
                  href="https://meetobby.com"
                  className="no-underline font-semibold"
                  style={{ color: "var(--foreground)" }}
                >
                  meetobby.com
                </a>
              </p>
            </div>
          </Section>
        </div>
      </main>
      <Footer />
    </>
  );
}

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section className="mb-10">
      <h2
        className="text-xl sm:text-2xl font-black mb-4 leading-tight"
        style={{ color: "var(--foreground)", letterSpacing: "-0.01em" }}
      >
        {title}
      </h2>
      <div
        className="space-y-4 text-[15px] leading-relaxed"
        style={{ color: "var(--gray-text)" }}
      >
        {children}
      </div>
    </section>
  );
}

function List({ items }: { items: string[] }) {
  return (
    <ul className="space-y-2 list-disc pl-5">
      {items.map((item) => (
        <li key={item} className="text-[15px] leading-relaxed">
          {item}
        </li>
      ))}
    </ul>
  );
}
