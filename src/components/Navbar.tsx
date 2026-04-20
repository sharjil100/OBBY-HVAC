"use client";

import { useState, useEffect } from "react";
import { Phone, Menu, X } from "lucide-react";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const navLinks = [
    { label: "How It Works", href: "#how-it-works" },
    { label: "Pricing", href: "#pricing" },
    { label: "FAQ", href: "#faq" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-white shadow-sm border-b border-gray-100" : "bg-white"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo: OBBY in black, white bg */}
          <a href="#" className="flex items-center gap-0 no-underline select-none">
            <span
              className="text-2xl font-black tracking-tight leading-none"
              style={{ color: "#000000", letterSpacing: "-0.04em" }}
            >
              obby
            </span>
          </a>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm font-semibold text-gray-500 hover:text-black transition-colors no-underline"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* CTA */}
          <div className="hidden md:flex items-center">
            <a href="#booking-form" className="btn-primary text-sm px-5 py-2.5 rounded-lg">
              <Phone className="w-4 h-4" />
              Book Setup Call
            </a>
          </div>

          {/* Mobile hamburger */}
          <button
            className="md:hidden p-2 rounded-lg text-gray-600 hover:bg-gray-100"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div
          className="md:hidden px-4 pb-5 pt-3 border-t border-white/20"
          style={{
            background: "rgba(255, 255, 255, 0.65)",
            backdropFilter: "blur(16px)",
            WebkitBackdropFilter: "blur(16px)",
          }}
        >
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className="block py-3 text-sm font-semibold text-gray-800 border-b border-black/5 no-underline"
            >
              {link.label}
            </a>
          ))}
          <a href="#booking-form" className="btn-primary w-full mt-4 justify-center text-sm rounded-lg">
            <Phone className="w-4 h-4" />
            Book My Setup Call
          </a>
        </div>
      )}
    </header>
  );
}
