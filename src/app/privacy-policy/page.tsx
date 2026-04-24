import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Privacy Policy – Obby",
  description:
    "How Obby collects, uses, and protects the information you share with us while using the Plumbing Front Desk System.",
};

export default function PrivacyPolicyPage() {
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
            Privacy Policy
          </h1>

          <p className="text-sm mb-10" style={{ color: "var(--gray-text)" }}>
            Effective Date: April 24, 2026
          </p>

          <div
            className="rounded-xl p-5 mb-10 border"
            style={{
              backgroundColor: "rgba(var(--accent-rgb), 0.08)",
              borderColor: "rgba(var(--accent-rgb), 0.25)",
            }}
          >
            <p className="text-sm font-bold mb-1" style={{ color: "var(--foreground)" }}>
              Important notice regarding text messaging data
            </p>
            <p className="text-sm leading-relaxed" style={{ color: "var(--gray-text)" }}>
              No mobile information will be shared with third parties or affiliates for
              marketing or promotional purposes. Information sharing to subcontractors in
              support services, such as customer service, is permitted. All other use case
              categories exclude text messaging originator opt-in data and consent; this
              information will not be shared with any third parties.
            </p>
          </div>

          <div className="mb-10 space-y-4 text-[15px] leading-relaxed" style={{ color: "var(--gray-text)" }}>
            <p>
              Obby LLC (&ldquo;Obby,&rdquo; &ldquo;we,&rdquo; &ldquo;us,&rdquo; or &ldquo;our&rdquo;)
              respects your privacy and is committed to protecting your information. This Privacy
              Policy explains how we collect, use, and protect your information when you use our
              services.
            </p>
          </div>

          <Section title="1. Information we collect">
            <p>
              When you use the Obby website, book a setup call, or sign up for the Plumbing Front
              Desk System, we collect the information needed to answer your calls, alert you to
              emergencies, and follow up for reviews.
            </p>

            <SubHeading>Personal information</SubHeading>
            <List
              items={[
                "Full name",
                "Email address",
                "Phone number (yours and your customers', when you forward calls to us)",
                "Company name and service area",
              ]}
            />

            <SubHeading>Non-personal information</SubHeading>
            <List
              items={[
                "IP address, browser type, and device information",
                "Website usage behavior and analytics",
                "Cookies and similar tracking technologies",
              ]}
            />

            <SubHeading>Customer communication data</SubHeading>
            <List
              items={[
                "Call recordings, transcripts, and call summaries",
                "Caller name, callback number, ZIP, and stated reason for the call",
                "Emergency vs. routine tags and SMS alerts sent to you",
                "Google review follow-up history and responses",
              ]}
            />
          </Section>

          <Section title="2. How we use your information">
            <p>We use the data we collect to:</p>
            <List
              items={[
                "Answer missed calls on your behalf and capture lead details",
                "Tag emergencies and send SMS alerts to the owner",
                "Follow up with your customers for Google reviews",
                "Maintain a simple call log and recordings inside your account",
                "Respond to your inquiries and schedule your 10-minute setup call",
                "Send service updates and product changes related to your account",
                "Send marketing messages (with your consent only)",
                "Improve website performance, user experience, and our call scripts",
                "Maintain records of communication preferences and consent",
              ]}
            />
          </Section>

          <Section title="3. SMS messaging & compliance">
            <SubHeading>Text message program</SubHeading>
            <p>
              Once you sign up, Obby may send text messages regarding missed-call alerts, emergency
              tags, appointment confirmations, service updates, customer support, and (when
              separately consented to) marketing offers.
            </p>

            <SubHeading>Opt-in & consent</SubHeading>
            <p>
              Messages require explicit consent collected through our website forms with opt-in
              checkboxes. Timestamps and consent records are maintained for every subscriber.
            </p>

            <SubHeading>Opt-out instructions</SubHeading>
            <p>
              You may reply <strong>STOP</strong> to opt out at any time. You will receive a final
              confirmation before messages stop. Reply <strong>HELP</strong> for assistance.
            </p>

            <SubHeading>Message frequency & rates</SubHeading>
            <p>Message frequency varies. Standard message and data rates may apply.</p>

            <SubHeading>SMS data protection statement</SubHeading>
            <p>
              No mobile information will be shared with third parties or affiliates for marketing or
              promotional purposes. Information sharing to subcontractors in support services, such
              as customer service, is permitted. All other use case categories exclude text messaging
              originator opt-in data and consent; this information will not be shared with any third
              parties.
            </p>
          </Section>

          <Section title="4. Information sharing & disclosure">
            <p>
              Obby does not sell, rent, or trade your personal information. Data sharing is limited
              to the following situations:
            </p>

            <SubHeading>Service providers</SubHeading>
            <List
              items={[
                "CRM, telephony, and communication platforms",
                "SMS providers (delivery only)",
                "Analytics and advertising tools (such as Google and Meta)",
              ]}
            />
            <p>
              These providers operate under strict confidentiality obligations and are only given
              the data needed to deliver the service.
            </p>

            <SubHeading>Legal requirements</SubHeading>
            <p>
              We may disclose information when required by law, subpoena, or to protect the rights,
              property, or safety of Obby, our customers, or others.
            </p>

            <SubHeading>Business transfers</SubHeading>
            <p>
              If Obby is involved in a merger, acquisition, or sale of assets, your data will
              remain protected under the terms of this policy.
            </p>
          </Section>

          <Section title="5. Data security">
            <p>We protect your information with measures including:</p>
            <List
              items={[
                "Encrypted storage of call recordings and account data",
                "Role-based access controls for the Obby team",
                "Regular security updates and monitoring",
              ]}
            />
            <p>No system is 100% secure, and we cannot guarantee absolute security.</p>
          </Section>

          <Section title="6. Cookies & tracking technologies">
            <p>We use cookies and similar technologies to:</p>
            <List
              items={[
                "Understand how visitors use the site",
                "Improve website functionality and performance",
                "Deliver relevant marketing to plumbing shops",
              ]}
            />
            <p>
              You can disable cookies through your browser settings, though some parts of the site
              may not work as expected.
            </p>
          </Section>

          <Section title="7. Your rights & choices">
            <p>You may:</p>
            <List
              items={[
                "Access the personal data we hold about you",
                "Request corrections or updates",
                "Request deletion of your data",
                "Opt out of marketing emails",
                'Opt out of SMS by replying "STOP"',
                "Withdraw consent at any time",
              ]}
            />
            <p>
              To exercise any of these rights, email us at{" "}
              <a
                href="mailto:team@meetobby.com"
                className="font-semibold no-underline"
                style={{ color: "var(--foreground)" }}
              >
                team@meetobby.com
              </a>
              .
            </p>
          </Section>

          <Section title="8. Third-party links">
            <p>
              Our site and emails may contain links to third-party services (Google Business
              Profile, review platforms, etc.). Obby is not responsible for the privacy practices
              of those sites.
            </p>
          </Section>

          <Section title="9. Changes to this privacy policy">
            <p>
              We may update this policy from time to time. Updates will be posted on this page with
              a revised effective date. If changes are material, we will notify account holders by
              email.
            </p>
          </Section>

          <Section title="10. Contact information">
            <p>
              Questions about this policy or how your data is handled? Reach out any time:
            </p>
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

function SubHeading({ children }: { children: React.ReactNode }) {
  return (
    <h3
      className="font-extrabold text-sm mt-4 mb-1"
      style={{ color: "var(--foreground)" }}
    >
      {children}
    </h3>
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
