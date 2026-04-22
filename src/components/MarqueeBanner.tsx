const items = [
  "NEVER MISS A CALL",
  "CATCH EVERY LEAK & BACKUP",
  "24/7 CALL COVERAGE",
  "INSTANT OWNER ALERTS",
  "5-STAR REVIEW FOLLOW-UPS",
  "FLAT MONTHLY FEE",
  "EMERGENCY TAGGING",
  "NO SETUP FEE",
  "LIVE IN ONE CALL",
  "MONTH-TO-MONTH",
];

const Row = ({ reverse = false }: { reverse?: boolean }) => {
  const repeated = [...items, ...items, ...items];
  return (
    <div className="overflow-hidden py-2.5">
      <div
        className="flex whitespace-nowrap w-max"
        style={{ animation: `${reverse ? "marquee-reverse" : "marquee"} 30s linear infinite` }}
      >
        {repeated.map((item, i) => (
          <span key={i} className="text-sm font-black uppercase tracking-widest text-black mx-4">
            {item}
            <span className="mx-4">•</span>
          </span>
        ))}
      </div>
    </div>
  );
};

export default function MarqueeBanner() {
  return (
    <div className="w-full overflow-hidden" style={{ backgroundColor: "var(--accent)" }}>
      <Row />
      <Row reverse />
    </div>
  );
}
