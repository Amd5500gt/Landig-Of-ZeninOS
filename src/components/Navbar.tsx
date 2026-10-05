import React, { useState, useEffect } from 'react';
import { ArrowDownToLine, Menu, X, ExternalLink } from 'lucide-react';

interface NavbarProps {
  onDownloadClick: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onDownloadClick }) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 px-4 sm:px-6 lg:px-8 pt-3 sm:pt-4 transition-all duration-300">
      <div 
        className={`max-w-6xl mx-auto rounded-[22px] px-5 sm:px-7 py-3 transition-all duration-300 flex items-center justify-between border ${
          scrolled 
            ? 'bg-white/85 backdrop-blur-xl border-slate-200/60 shadow-[0_8px_30px_rgb(0,0,0,0.05)]' 
            : 'bg-white/60 backdrop-blur-md border-white/70 shadow-[0_4px_20px_rgb(0,0,0,0.03)]'
        }`}
      >
        {/* Zone 1: Brand Title */}
        <a 
          href="#" 
          className="flex items-center gap-2 group text-slate-900 font-bold tracking-tight text-lg sm:text-xl transition-transform active:scale-95"
        >
          <span className="relative flex items-center justify-center w-8 h-8 rounded-xl bg-gradient-to-tr from-[#FF8A65] via-[#FF4D6D] to-[#9B6DFF] text-white shadow-sm shadow-[#FF8A65]/30">
            <span className="font-extrabold text-sm tracking-tighter">Z</span>
            <span className="absolute -top-0.5 -right-0.5 w-2 h-2 rounded-full bg-[#A8E063] ring-2 ring-white" />
          </span>
          <span className="font-extrabold bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900 bg-clip-text text-transparent">
            N11HUB
          </span>
        </a>

        {/* Zone 2: Clean Nav Links */}
        <nav className="hidden md:flex items-center gap-7 text-sm font-medium text-slate-600">
          <a 
            href="#features" 
            className="hover:text-slate-950 transition-colors relative py-1 after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-[#FF8A65] hover:after:w-full after:transition-all after:duration-200"
          >
            Features
          </a>
          <a 
            href="#ai" 
            className="hover:text-slate-950 transition-colors relative py-1 after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-[#9B6DFF] hover:after:w-full after:transition-all after:duration-200"
          >
            AI
          </a>
          <a 
            href="#download" 
            className="hover:text-slate-950 transition-colors relative py-1 after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-[#4D8DFF] hover:after:w-full after:transition-all after:duration-200"
          >
            Download
          </a>
          <a 
            href="https://github.com/amd5500gt" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="inline-flex items-center gap-1.5 hover:text-slate-950 transition-colors group"
          >
            <span>GitHub</span>
            <ExternalLink className="w-3.5 h-3.5 text-slate-400 group-hover:text-slate-700 transition-colors" />
          </a>
        </nav>

        {/* Zone 3: Primary Action CTA */}
        <div className="flex items-center gap-3">
          <button
            onClick={onDownloadClick}
            className="hidden sm:inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-xs font-semibold text-white shadow-md shadow-[#FF4D6D]/20 transition-all duration-200 hover:shadow-lg hover:shadow-[#FF8A65]/30 hover:-translate-y-0.5 active:translate-y-0 active:scale-98 whitespace-nowrap cursor-pointer"
            style={{
              background: 'linear-gradient(135deg, #FF8A65 0%, #FF4D6D 48%, #9B6DFF 100%)'
            }}
          >
            <ArrowDownToLine className="w-3.5 h-3.5" />
            <span>Download Zenin OS</span>
          </button>

          {/* Mobile Menu Toggle Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 rounded-xl text-slate-700 hover:bg-slate-100 transition-colors"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Dropdown */}
      {mobileMenuOpen && (
        <div className="md:hidden mt-2 max-w-6xl mx-auto rounded-2xl bg-white/95 backdrop-blur-xl border border-slate-200/80 p-5 shadow-xl animate-in fade-in slide-in-from-top-2 duration-200">
          <div className="flex flex-col gap-3.5 text-sm font-medium text-slate-700">
            <a 
              href="#features" 
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2 rounded-xl hover:bg-slate-50 transition-colors"
            >
              Features
            </a>
            <a 
              href="#ai" 
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2 rounded-xl hover:bg-slate-50 transition-colors"
            >
              AI
            </a>
            <a 
              href="#download" 
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2 rounded-xl hover:bg-slate-50 transition-colors"
            >
              Download
            </a>
            <a 
              href="https://github.com/amd5500gt" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="px-3 py-2 rounded-xl hover:bg-slate-50 transition-colors flex items-center justify-between"
            >
              <span>GitHub</span>
              <ExternalLink className="w-4 h-4 text-slate-400" />
            </a>
            <div className="pt-2 border-t border-slate-100">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onDownloadClick();
                }}
                className="w-full py-3 px-4 rounded-xl text-white font-semibold text-xs flex items-center justify-center gap-2 shadow-md cursor-pointer"
                style={{
                  background: 'linear-gradient(135deg, #FF8A65 0%, #FF4D6D 48%, #9B6DFF 100%)'
                }}
              >
                <ArrowDownToLine className="w-4 h-4" />
                <span>Download Zenin OS</span>
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
