import { useState } from 'react';
import { MapPin, Menu, X } from 'lucide-react';

interface NavbarProps {
  activeSection: string;
  onNavigate: (sectionId: string) => void;
  onOpenInquiry: () => void;
}

const NAV_LINKS = [
  { id: 'about', label: 'About' },
  { id: 'whyme', label: 'Why Me' },
  { id: 'projects', label: 'Projects' },
  { id: 'credentials', label: 'Experience' },
];

export default function Navbar({ activeSection, onNavigate, onOpenInquiry }: NavbarProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleLinkClick = (id: string) => {
    setMobileMenuOpen(false);
    onNavigate(id);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 transition-all duration-300 backdrop-blur-md bg-[#080808]/80 border-b border-white/[0.06]">
      <div className="max-w-7xl mx-auto px-5 sm:px-6 h-16 sm:h-20 flex items-center justify-between gap-4 lg:gap-8">
        {/* Brand Wordmark */}
        <button
          type="button"
          onClick={() => handleLinkClick('about')}
          aria-label="Andhyni Homepage"
          className="group flex items-center shrink-0 whitespace-nowrap cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-400 rounded-md px-1"
        >
          <span className="font-sans font-semibold tracking-tight text-xl text-white group-hover:text-blue-200 transition-colors">
            Andhyni<span className="text-blue-500 font-bold">.</span>
          </span>
        </button>

        {/* Center Location & Availability Context (Desktop xl+) */}
        <div className="hidden xl:flex items-center gap-3 text-xs font-medium text-neutral-400 shrink-0">
          <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/[0.03] border border-white/[0.08] whitespace-nowrap">
            <MapPin className="w-3.5 h-3.5 text-neutral-400 shrink-0" aria-hidden="true" />
            <span>Based in Tangerang &amp; Jakarta</span>
          </div>
          <button
            type="button"
            onClick={onOpenInquiry}
            className="flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-950/40 border border-blue-500/30 text-neutral-200 hover:border-blue-400/60 hover:bg-blue-950/60 transition-colors whitespace-nowrap cursor-pointer"
          >
            <span className="h-2 w-2 rounded-full bg-cyan-400 shrink-0" aria-hidden="true" />
            <span className="font-mono text-[11px] tracking-wide text-neutral-200">
              Open for Internships &amp; Projects
            </span>
          </button>
        </div>

        {/* Right Navigation Links (Single-line, never wraps) */}
        <nav
          aria-label="Primary navigation"
          className="hidden md:flex items-center gap-6 lg:gap-7 text-xs uppercase tracking-widest text-neutral-400 font-medium shrink-0"
        >
          {NAV_LINKS.map((link) => {
            const isActive = activeSection === link.id;
            return (
              <button
                key={link.id}
                type="button"
                onClick={() => handleLinkClick(link.id)}
                className={`whitespace-nowrap shrink-0 transition-colors duration-200 cursor-pointer py-1 border-b ${
                  isActive
                    ? 'text-white border-blue-400'
                    : 'text-neutral-400 border-transparent hover:text-white'
                }`}
              >
                {link.label}
              </button>
            );
          })}
          <button
            type="button"
            onClick={() => handleLinkClick('contact')}
            className="whitespace-nowrap shrink-0 px-4 py-2 rounded-full border border-white/20 text-white hover:bg-white hover:text-[#080808] hover:border-white transition-all duration-300 font-semibold tracking-normal normal-case cursor-pointer"
          >
            Contact
          </button>
        </nav>

        {/* Mobile Menu Trigger */}
        <div className="flex md:hidden items-center gap-2">
          <button
            type="button"
            onClick={() => handleLinkClick('contact')}
            className="px-3.5 py-1.5 rounded-full border border-white/20 text-xs font-semibold text-white hover:bg-white hover:text-[#080808] transition-colors whitespace-nowrap cursor-pointer"
          >
            Contact
          </button>
          <button
            type="button"
            onClick={() => setMobileMenuOpen((prev) => !prev)}
            aria-label={mobileMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
            aria-expanded={mobileMenuOpen}
            className="w-10 h-10 flex items-center justify-center rounded-full border border-white/15 text-neutral-200 hover:bg-white/10 transition-colors cursor-pointer"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Dropdown Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden border-t border-white/[0.08] bg-[#080808]/95 backdrop-blur-xl px-6 py-5 space-y-4">
          <div className="flex flex-col gap-1">
            {NAV_LINKS.map((link) => (
              <button
                key={link.id}
                type="button"
                onClick={() => handleLinkClick(link.id)}
                className={`w-full text-left py-2.5 text-sm font-medium transition-colors cursor-pointer ${
                  activeSection === link.id ? 'text-white' : 'text-neutral-400 hover:text-white'
                }`}
              >
                {link.label}
              </button>
            ))}
          </div>
          <div className="pt-3 border-t border-white/[0.08] flex flex-col gap-2 text-xs text-neutral-400">
            <div className="flex items-center gap-2">
              <MapPin className="w-3.5 h-3.5 text-neutral-500" />
              <span>Based in Tangerang &amp; Jakarta</span>
            </div>
            <button
              type="button"
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenInquiry();
              }}
              className="mt-1 inline-flex items-center justify-center px-4 py-2.5 rounded-full bg-white text-[#080808] font-semibold text-xs cursor-pointer"
            >
              Open for Internships &amp; Projects — Start Brief
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
