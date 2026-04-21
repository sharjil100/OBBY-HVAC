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
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
      style={{
        backgroundColor: "var(--nav-bg)",
        borderBottom: scrolled ? "1px solid var(--nav-border)" : "1px solid transparent",
        boxShadow: scrolled ? "0 1px 8px rgba(0,0,0,0.06)" : "none",
      }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <a href="#" className="flex items-center gap-0 no-underline select-none">
            <span
              className="text-2xl font-black tracking-tight leading-none transition-colors duration-300"
              style={{ color: "var(--nav-logo)", letterSpacing: "-0.04em" }}
            >
              obby
            </span>
          </a>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a key={link.href} href={link.href} className="nav-link">
                {link.label}
              </a>
            ))}
          </nav>

          {/* Right: CTA */}
          <div className="hidden md:flex items-center gap-3">
            <a href="#booking-form" className="btn-primary text-sm px-5 py-2.5 rounded-lg">
              <Phone className="w-4 h-4" />
              Book Setup Call
            </a>
          </div>

          {/* Mobile: hamburger */}
          <div className="md:hidden flex items-center gap-2">
            <button
              className="p-2 rounded-lg hover:bg-white/5 transition-colors"
              style={{ color: "var(--nav-hamburger)" }}
              onClick={() => setMenuOpen(!menuOpen)}
            >
              {menuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div
          className="md:hidden px-4 pb-5 pt-3 border-t"
          style={{
            background: "var(--nav-mobile-bg)",
            borderTopColor: "var(--nav-border)",
            backdropFilter: "blur(16px)",
            WebkitBackdropFilter: "blur(16px)",
          }}
        >
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className="nav-mobile-link"
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
