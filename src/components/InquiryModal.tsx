import { useEffect, useMemo, useState } from 'react';
import { ArrowUpRight, Check, Copy, Mail, X } from 'lucide-react';
import { CONTACT_INFO } from '../data/portfolioData';

interface InquiryModalProps {
  open: boolean;
  onClose: () => void;
  onCopyBrief: (text: string) => void;
}

const COLLABORATION_TYPES = [
  'Software Internship',
  'Front-End Web Project',
  'Python & AI Automation',
  'Event & Stage Direction',
  'Student Organization',
];

export default function InquiryModal({ open, onClose, onCopyBrief }: InquiryModalProps) {
  const [name, setName] = useState('');
  const [organization, setOrganization] = useState('');
  const [selectedTopic, setSelectedTopic] = useState(COLLABORATION_TYPES[0]);
  const [message, setMessage] = useState('');
  const [copiedLocal, setCopiedLocal] = useState(false);

  useEffect(() => {
    if (!open) return;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [open, onClose]);

  const formattedBrief = useMemo(() => {
    const sender = name.trim() || 'Prospective Collaborator';
    const orgLine = organization.trim() ? ` (${organization.trim()})` : '';
    const body =
      message.trim() ||
      `Hello Andhyni, I would like to connect regarding a ${selectedTopic.toLowerCase()} opportunity.`;
    return `Hi Andhyni,\n\nName: ${sender}${orgLine}\nFocus: ${selectedTopic}\n\n${body}`;
  }, [name, organization, selectedTopic, message]);

  const mailtoHref = useMemo(() => {
    const subject = encodeURIComponent(`[Portfolio Inquiry] ${selectedTopic}`);
    const body = encodeURIComponent(formattedBrief);
    return `mailto:${CONTACT_INFO.email}?subject=${subject}&body=${body}`;
  }, [selectedTopic, formattedBrief]);

  const whatsappHref = useMemo(() => {
    const text = encodeURIComponent(formattedBrief);
    return `${CONTACT_INFO.whatsappUrl}?text=${text}`;
  }, [formattedBrief]);

  if (!open) return null;

  const handleCopy = () => {
    onCopyBrief(formattedBrief);
    setCopiedLocal(true);
    window.setTimeout(() => setCopiedLocal(false), 2000);
  };

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="inquiry-modal-title"
      className="fixed inset-0 z-[70] flex items-center justify-center p-4 sm:p-6 bg-black/80 backdrop-blur-md"
      onClick={onClose}
    >
      <div
        className="w-full max-w-xl rounded-2xl bg-[#101218] border border-white/15 shadow-2xl overflow-hidden max-h-[92vh] flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="px-6 py-5 border-b border-white/[0.08] flex items-start justify-between gap-4">
          <div>
            <span className="text-[11px] font-mono uppercase tracking-widest text-blue-400">
              • DIRECT COLLABORATION BRIEF
            </span>
            <h3
              id="inquiry-modal-title"
              className="text-xl sm:text-2xl font-bold tracking-tight text-white mt-1"
            >
              Begin a Project with Andhyni
            </h3>
          </div>
          <button
            type="button"
            onClick={onClose}
            aria-label="Close inquiry dialog"
            className="w-9 h-9 rounded-full bg-white/[0.05] border border-white/10 flex items-center justify-center text-neutral-300 hover:text-white hover:bg-white/10 transition-colors cursor-pointer shrink-0"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Form Body */}
        <div className="p-6 space-y-5 overflow-y-auto">
          <div className="space-y-2">
            <label className="block text-xs font-mono uppercase tracking-wider text-neutral-400">
              Collaboration Scope
            </label>
            <div className="flex flex-wrap gap-2">
              {COLLABORATION_TYPES.map((topic) => {
                const active = selectedTopic === topic;
                return (
                  <button
                    key={topic}
                    type="button"
                    onClick={() => setSelectedTopic(topic)}
                    className={`px-3 py-1.5 rounded-lg text-xs font-medium border transition-colors cursor-pointer whitespace-nowrap ${
                      active
                        ? 'bg-white text-[#080808] border-white font-semibold'
                        : 'bg-white/[0.03] text-neutral-300 border-white/10 hover:border-white/30'
                    }`}
                  >
                    {topic}
                  </button>
                );
              })}
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="space-y-1.5">
              <label htmlFor="inquiry-name" className="block text-xs text-neutral-400">
                Your Name
              </label>
              <input
                id="inquiry-name"
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="e.g. Nadia Kusuma"
                className="w-full rounded-xl bg-white/[0.04] border border-white/10 px-3.5 py-2.5 text-sm text-white placeholder:text-neutral-500 focus:outline-none focus:border-blue-400"
              />
            </div>

            <div className="space-y-1.5">
              <label htmlFor="inquiry-org" className="block text-xs text-neutral-400">
                Company / Organization
              </label>
              <input
                id="inquiry-org"
                type="text"
                value={organization}
                onChange={(e) => setOrganization(e.target.value)}
                placeholder="e.g. Tech Studio / IT PLN"
                className="w-full rounded-xl bg-white/[0.04] border border-white/10 px-3.5 py-2.5 text-sm text-white placeholder:text-neutral-500 focus:outline-none focus:border-blue-400"
              />
            </div>
          </div>

          <div className="space-y-1.5">
            <label htmlFor="inquiry-message" className="block text-xs text-neutral-400">
              Project Details or Timeline
            </label>
            <textarea
              id="inquiry-message"
              rows={4}
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="Share key goals, event scale, technical requirements, or internship period..."
              className="w-full rounded-xl bg-white/[0.04] border border-white/10 px-3.5 py-2.5 text-sm text-white placeholder:text-neutral-500 focus:outline-none focus:border-blue-400 resize-none"
            />
          </div>
        </div>

        {/* Actions Footer */}
        <div className="px-6 py-4 border-t border-white/[0.08] bg-[#0b0d12] flex flex-wrap items-center justify-between gap-3">
          <button
            type="button"
            onClick={handleCopy}
            className="inline-flex items-center gap-2 px-4 py-2.5 rounded-full border border-white/15 text-xs font-medium text-neutral-300 hover:text-white hover:border-white/30 transition-colors cursor-pointer"
          >
            {copiedLocal ? (
              <>
                <Check className="w-3.5 h-3.5 text-emerald-400" />
                <span>Brief Copied</span>
              </>
            ) : (
              <>
                <Copy className="w-3.5 h-3.5" />
                <span>Copy Brief</span>
              </>
            )}
          </button>

          <div className="flex flex-wrap items-center gap-2.5">
            <a
              href={whatsappHref}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-full bg-emerald-950/60 border border-emerald-500/35 text-emerald-200 hover:bg-emerald-900/70 text-xs font-semibold transition-colors whitespace-nowrap"
            >
              <span>Send via WhatsApp</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>
            <a
              href={mailtoHref}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white text-[#080808] hover:bg-neutral-200 text-xs font-semibold transition-colors whitespace-nowrap"
            >
              <Mail className="w-3.5 h-3.5" />
              <span>Open Email</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
