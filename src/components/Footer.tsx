import Link from "next/link";

export default function Footer() {
  const footerLinks = [
    { name: "About Us", href: "#about" },
    { name: "Sustainability", href: "#" },
    { name: "Careers", href: "#" },
    { name: "Press", href: "#" },
    { name: "Contact", href: "#contact" },
  ];

  const legalLinks = [
    { name: "Privacy Policy", href: "#" },
    { name: "Terms of Service", href: "#" },
    { name: "Cookie Settings", href: "#" },
    { name: "Accessibility", href: "#" },
  ];

  return (
    <footer className="bg-[#1A1A1A] text-white py-16 md:py-24">
      <div className="editorial-container">
        {/* Logo */}
        <div className="flex justify-center mb-12 md:mb-16">
          <div className="w-24 h-24 md:w-32 md:h-32 bg-white rounded-full flex items-center justify-center">
            <span className="text-[#1A1A1A] font-semibold text-2xl md:text-3xl">
              NL
            </span>
          </div>
        </div>

        {/* Main Links */}
        <div className="flex flex-wrap justify-center gap-4 md:gap-8 mb-12 md:mb-16">
          {footerLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="text-white/80 hover:text-white transition-colors"
            >
              {link.name}
            </Link>
          ))}
        </div>

        {/* Divider */}
        <div className="w-full h-px bg-white/20 mb-8" />

        {/* Legal Links */}
        <div className="flex flex-wrap justify-center gap-4 md:gap-6 mb-8 text-sm">
          {legalLinks.map((link, index) => (
            <span key={link.name} className="flex items-center gap-4 md:gap-6">
              <Link
                href={link.href}
                className="text-white/60 hover:text-white/80 transition-colors"
              >
                {link.name}
              </Link>
              {index < legalLinks.length - 1 && (
                <span className="hidden md:inline text-white/30">|</span>
              )}
            </span>
          ))}
        </div>

        {/* Copyright */}
        <p className="text-center text-sm text-white/40">
          Nordic Living 2024. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
