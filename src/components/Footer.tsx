import React from 'react';
import { ExternalLink } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="relative border-t border-[#E2E8F0]/80 bg-white/70 py-10 backdrop-blur-sm">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
          {/* Brand & Tagline with ZeninOS Logo */}
          <div className="flex items-center gap-3">
            <div className="h-7 w-7 rounded-lg overflow-hidden flex-shrink-0">
              <img
                src="/assets/zeninos-logo.svg"
                alt="ZeninOS Logo"
                className="h-full w-full object-contain"
                width="28"
                height="28"
              />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="font-extrabold text-base tracking-tight text-[#0F172A]">
                  ZeninOS
                </span>
                <span className="text-xs font-semibold text-[#FF8A65]">2.0</span>
              </div>
              <p className="text-xs text-[#64748B]">
                Intelligent productivity system for Android.
              </p>
            </div>
          </div>

          {/* Links: Download, GitHub, Support */}
          <nav aria-label="Footer Navigation" className="flex items-center gap-6 text-xs sm:text-sm font-medium text-[#475569]">
            <a
              href="#download"
              className="hover:text-[#0F172A] transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[#FFB347] rounded-md px-1 py-0.5"
            >
              Download
            </a>
            <a
              href="https://github.com/amd5500gt"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 hover:text-[#0F172A] transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[#FFB347] rounded-md px-1 py-0.5"
            >
              <span>GitHub</span>
              <ExternalLink className="h-3 w-3 opacity-60" />
            </a>
            <a
              href="https://contact.n11hub.in/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 hover:text-[#0F172A] transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[#FFB347] rounded-md px-1 py-0.5"
            >
              <span>Support</span>
              <ExternalLink className="h-3 w-3 opacity-60" />
            </a>
          </nav>

          {/* Copyright */}
          <div className="text-xs text-[#94A3B8]">
            © 2026 ZeninOS. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
};
