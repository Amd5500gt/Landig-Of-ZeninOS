import React, { useState, useEffect } from 'react';
import { Menu, X, ExternalLink } from 'lucide-react';

export const Navbar: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 16);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Features', href: '#features' },
    { label: 'AI Planner', href: '#ai-planner' },
    { label: 'Download', href: '#download' },
    {
      label: 'GitHub',
      href: 'https://github.com/amd5500gt',
      external: true,
    },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 px-4 pt-4 transition-all duration-300 sm:px-6 lg:px-8">
      <nav
        aria-label="Main Navigation"
        className={`mx-auto max-w-5xl transition-all duration-300 rounded-full ${
          scrolled
            ? 'glass-nav border border-[#E2E8F0]/90 shadow-[0_8px_30px_rgb(0,0,0,0.04)] py-2.5 px-6'
            : 'bg-white/60 border border-white/60 py-3 px-6 backdrop-blur-sm'
        }`}
      >
        <div className="flex items-center justify-between">
          {/* Brand Mark with ZeninOS Logo */}
          <a
            href="#"
            className="group flex items-center gap-3 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#FFB347] rounded-full py-1"
          >
            <div className="relative flex h-8 w-8 items-center justify-center rounded-xl overflow-hidden shadow-sm transition-transform duration-300 group-hover:scale-105">
              <img
                src="/assets/zeninos-logo.svg"
                alt="ZeninOS Logo"
                className="h-full w-full object-contain"
                width="32"
                height="32"
              />
            </div>
            <div className="flex items-baseline gap-1.5">
              <span className="font-extrabold text-base tracking-tight text-[#0F172A] group-hover:text-[#FF8A65] transition-colors">
                ZeninOS
              </span>
              <span className="text-[11px] font-semibold text-[#64748B]">
                2.0
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <div className="hidden md:flex items-center gap-2">
            {navLinks.map((link) =>
              link.external ? (
                <a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1.5 px-4 py-1.5 text-xs font-medium text-[#475569] hover:text-[#0F172A] hover:bg-[#FFF8F0] rounded-full transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[#FFB347]"
                >
                  <span>{link.label}</span>
                  <ExternalLink className="h-3 w-3 opacity-50" />
                </a>
              ) : (
                <a
                  key={link.label}
                  href={link.href}
                  className="px-4 py-1.5 text-xs font-medium text-[#475569] hover:text-[#0F172A] hover:bg-[#FFF8F0] rounded-full transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[#FFB347]"
                >
                  {link.label}
                </a>
              )
            )}
          </div>

          {/* Mobile Menu Toggle */}
          <div className="md:hidden flex items-center">
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="flex h-8 w-8 items-center justify-center rounded-full border border-[#E2E8F0] bg-white/90 text-[#334155] hover:text-[#0F172A] transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[#FFB347]"
              aria-label={mobileMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown */}
        {mobileMenuOpen && (
          <div className="md:hidden mt-3 rounded-2xl border border-[#E2E8F0] bg-white/95 p-3 shadow-xl backdrop-blur-md">
            <div className="flex flex-col gap-1">
              {navLinks.map((link) =>
                link.external ? (
                  <a
                    key={link.label}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => setMobileMenuOpen(false)}
                    className="flex items-center justify-between px-3 py-2 text-xs font-medium text-[#334155] hover:bg-[#FFF8F0] rounded-xl transition-colors"
                  >
                    <span>{link.label}</span>
                    <ExternalLink className="h-3.5 w-3.5 opacity-60" />
                  </a>
                ) : (
                  <a
                    key={link.label}
                    href={link.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className="px-3 py-2 text-xs font-medium text-[#334155] hover:bg-[#FFF8F0] rounded-xl transition-colors"
                  >
                    {link.label}
                  </a>
                )
              )}
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};
