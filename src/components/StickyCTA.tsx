"use client";

import { useEffect, useState } from "react";
import { Phone } from "lucide-react";

export default function StickyCTA() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 600);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div
      className={`fixed bottom-6 left-1/2 -translate-x-1/2 z-40 transition-all duration-500 ${
        visible ? "opacity-100 translate-y-0 pointer-events-auto" : "opacity-0 translate-y-4 pointer-events-none"
      }`}
    >
      <a
        href="#booking-form"
        className="flex items-center gap-3 text-black font-black text-sm px-7 py-3.5 rounded-full shadow-2xl no-underline transition-transform hover:scale-[1.03]"
        style={{ backgroundColor: "#CCFF33" }}
      >
        <Phone className="w-4 h-4" />
        Book 10-Minute Setup Call — Free
      </a>
    </div>
  );
}
