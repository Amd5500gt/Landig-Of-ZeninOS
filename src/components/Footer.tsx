import React from 'react';
import { ExternalLink } from 'lucide-react';

interface FooterProps {
  onDownloadClick: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onDownloadClick }) => {
  return (
    <footer className="relative py-10 sm:py-12 px-4 sm:px-6 lg:px-8 border-t border-slate-200/60 bg-white/40 backdrop-blur-md">
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-6">
        
        {/* Brand Lockup & Tagline */}
        <div className="flex flex-col sm:flex-row items-center sm:items-baseline gap-2 sm:gap-3 text-center sm:text-left">
          <span className="font-extrabold text-slate-900 text-lg tracking-tight">
            N11HUB
          </span>
          <span className="text-xs text-slate-500 font-normal">
            Building useful digital products.
          </span>
        </div>

        {/* Clean Nav Links */}
        <div className="flex items-center gap-6 text-xs sm:text-sm font-medium text-slate-600">
          <button 
            onClick={onDownloadClick}
            className="hover:text-slate-950 transition-colors cursor-pointer"
          >
            Download
          </button>
          <a 
            href="https://github.com/amd5500gt" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="inline-flex items-center gap-1 hover:text-slate-950 transition-colors"
          >
            <span>GitHub</span>
            <ExternalLink className="w-3 h-3 text-slate-400" />
          </a>
          <a 
            href="https://contact.n11hub.in/" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="inline-flex items-center gap-1 hover:text-slate-950 transition-colors"
          >
            <span>Support</span>
            <ExternalLink className="w-3 h-3 text-slate-400" />
          </a>
        </div>

        {/* Copyright */}
        <div className="text-xs text-slate-400 font-normal">
          © 2026 N11HUB
        </div>

      </div>
    </footer>
  );
};
