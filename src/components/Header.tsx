"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-[#FDFBF7]/95 backdrop-blur-sm">
      <div className="editorial-container">
        <nav className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-1">
            <Image
              src="/images/logo.png"
              alt="IKEA logo"
              width={132}
              height={52}
              priority
            />
            <span className="hidden sm:block text-xl font-medium tracking-tight">
              IKEA Together
            </span>
          </Link>





          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            <Link
              href="#stories"
              className="text-sm text-[#4A4A4A] hover:text-[#1A1A1A] transition-colors"
            >
              Stories
            </Link>
            <Link
              href="#collection"
              className="text-sm text-[#4A4A4A] hover:text-[#1A1A1A] transition-colors"
            >
              Collection
            </Link>
            <Link
              href="#about"
              className="text-sm text-[#4A4A4A] hover:text-[#1A1A1A] transition-colors"
            >
              About
            </Link>
            <Link
              href="#contact"
              className="text-sm text-[#4A4A4A] hover:text-[#1A1A1A] transition-colors"
            >
              Contact
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            type="button"
            className="md:hidden p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            <div className="w-6 h-5 flex flex-col justify-between">
              <span
                className={`block h-0.5 bg-[#1A1A1A] transition-transform origin-center ${
                  isMenuOpen ? "rotate-45 translate-y-2" : ""
                }`}
              />
              <span
                className={`block h-0.5 bg-[#1A1A1A] transition-opacity ${
                  isMenuOpen ? "opacity-0" : ""
                }`}
              />
              <span
                className={`block h-0.5 bg-[#1A1A1A] transition-transform origin-center ${
                  isMenuOpen ? "-rotate-45 -translate-y-2" : ""
                }`}
              />
            </div>
          </button>
        </nav>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-[#E5E5E5]">
            <div className="flex flex-col gap-4">
              <Link
                href="#stories"
                className="text-base text-[#4A4A4A] hover:text-[#1A1A1A] transition-colors"
              >
                Stories
              </Link>
              <Link
                href="#collection"
                className="text-base text-[#4A4A4A] hover:text-[#1A1A1A] transition-colors"
              >
                Collection
              </Link>
              <Link
                href="#about"
                className="text-base text-[#4A4A4A] hover:text-[#1A1A1A] transition-colors"
              >
                About
              </Link>
              <Link
                href="#contact"
                className="text-base text-[#4A4A4A] hover:text-[#1A1A1A] transition-colors"
              >
                Contact
              </Link>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
