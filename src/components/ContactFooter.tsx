import { ArrowUpRight, Check, Copy, Mail, Send } from 'lucide-react';
import { CONTACT_INFO } from '../data/portfolioData';

interface ContactFooterProps {
  copiedField: string | null;
  onCopyText: (label: string, value: string) => void;
  onOpenInquiry: () => void;
}

export default function ContactFooter({
  copiedField,
  onCopyText,
  onOpenInquiry,
}: ContactFooterProps) {
  return (
    <footer
      id="contact"
      className="py-24 px-6 border-t border-white/[0.12] bg-[#050505] relative z-20"
    >
      <div className="max-w-7xl mx-auto space-y-16">
        {/* Big Editorial Headline Callout */}
        <div className="space-y-6 max-w-4xl">
          <span className="text-xs font-mono tracking-widest text-blue-400 uppercase block">
            • INITIATE COLLABORATION
          </span>
          <h2 className="text-4xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-white leading-[1.05] [text-wrap:balance]">
            Let&apos;s build something <br />
            <span className="font-serif italic font-normal text-neutral-300">structured</span>{' '}
            &amp; <span className="font-serif italic font-normal text-blue-200">impactful.</span>
          </h2>
          <p className="text-neutral-400 text-sm sm:text-base max-w-xl leading-relaxed">
            Available for software engineering internships, front-end development, event stage
            management, and student organization partnerships.
          </p>
        </div>

        {/* Direct Action Pills */}
        <div className="flex flex-wrap items-center gap-4 pt-2">
          {/* Email Primary Pill */}
          <div className="inline-flex items-center rounded-full bg-white text-[#080808] shadow-md overflow-hidden">
            <a
              href={`mailto:${CONTACT_INFO.email}`}
              className="flex items-center gap-2.5 pl-6 pr-4 py-3.5 font-semibold text-xs sm:text-sm hover:bg-neutral-200 transition-colors whitespace-nowrap"
            >
              <Mail className="w-4 h-4 shrink-0" />
              <span>{CONTACT_INFO.email}</span>
              <ArrowUpRight className="w-4 h-4 shrink-0" />
            </a>
            <button
              type="button"
              onClick={() => onCopyText('email', CONTACT_INFO.email)}
              aria-label="Copy email address"
              className="px-3.5 py-3.5 border-l border-black/10 hover:bg-neutral-200 transition-colors cursor-pointer"
              title="Copy email address"
            >
              {copiedField === 'email' ? (
                <Check className="w-4 h-4 text-emerald-700" />
              ) : (
                <Copy className="w-4 h-4 text-neutral-700" />
              )}
            </button>
          </div>

          {/* LinkedIn Pill */}
          <a
            href={CONTACT_INFO.linkedinUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 px-6 py-3.5 rounded-full glass-hairline text-white hover:text-blue-300 hover:border-white/30 transition-all text-xs sm:text-sm group whitespace-nowrap"
          >
            <span className="font-bold text-blue-400">in</span>
            <span>{CONTACT_INFO.linkedinLabel}</span>
            <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </a>

          {/* WhatsApp Pill */}
          <a
            href={CONTACT_INFO.whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 px-6 py-3.5 rounded-full glass-hairline text-white hover:text-emerald-300 hover:border-white/30 transition-all text-xs sm:text-sm group whitespace-nowrap"
          >
            <span className="text-emerald-400 font-bold">WA</span>
            <span className="tabular-nums">{CONTACT_INFO.whatsappLabel}</span>
            <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </a>

          {/* Interactive Brief Composer Button */}
          <button
            type="button"
            onClick={onOpenInquiry}
            className="flex items-center gap-2.5 px-6 py-3.5 rounded-full bg-blue-950/50 border border-blue-500/35 text-blue-200 hover:bg-blue-900/60 hover:border-blue-400/60 hover:text-white transition-all text-xs sm:text-sm font-medium cursor-pointer whitespace-nowrap"
          >
            <Send className="w-3.5 h-3.5" />
            <span>Compose Project Brief</span>
          </button>
        </div>

        {/* Bottom Bar */}
        <div className="pt-12 border-t border-white/[0.08] flex flex-col sm:flex-row justify-between items-center gap-4 text-xs font-mono text-neutral-500">
          <div>
            <span>{CONTACT_INFO.location}</span>
          </div>
          <div className="flex flex-wrap items-center justify-center gap-6">
            <span>Informatics Engineering · IT PLN</span>
            <span>© 2026 Andhyni A&apos;syafa A-lifia</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
