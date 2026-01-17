"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, X } from "lucide-react";

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { href: "/#about", label: "About" },
    { href: "/#rules", label: "Rules" },
    { href: "/#tokenomics", label: "Tokenomics" },
    { href: "/#roadmap", label: "Roadmap" },
    { href: "/#how-to-buy", label: "How to Buy" },
    { href: "/#community", label: "Community" },
    { href: "/#faq", label: "FAQ" },
  ];

  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <nav className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <div className="w-10 h-10 bg-primary-blue rounded-full flex items-center justify-center">
              <span className="text-white font-bold text-xl">BD</span>
            </div>
            <span className="font-display font-bold text-xl text-primary-blue-dark">
              $BLUEDOG
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-6">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-gray-700 hover:text-primary-blue transition-colors font-medium"
              >
                {link.label}
              </Link>
            ))}
            <a
              href="https://pump.fun/coin/B1ydv4JzMzVXf5ekdVsQXWHgTUHsSiAib7XM1WCdpump"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-accent-red text-white px-6 py-2 rounded-full font-semibold hover:bg-red-600 transition-colors"
            >
              Buy on pump.fun
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-gray-700"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="md:hidden mt-4 pb-4 space-y-3">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="block text-gray-700 hover:text-primary-blue transition-colors py-2"
                onClick={() => setMobileMenuOpen(false)}
              >
                {link.label}
              </a>
            ))}
            <a
              href="https://pump.fun/coin/B1ydv4JzMzVXf5ekdVsQXWHgTUHsSiAib7XM1WCdpump"
              target="_blank"
              rel="noopener noreferrer"
              className="block bg-accent-red text-white px-6 py-2 rounded-full font-semibold text-center hover:bg-red-600 transition-colors"
            >
              Buy on pump.fun
            </a>
          </div>
        )}
      </nav>
    </header>
  );
}
