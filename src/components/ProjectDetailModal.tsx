import { useEffect } from 'react';
import { ArrowUpRight, CheckCircle2, X } from 'lucide-react';
import type { ProjectItem, RibbonCardItem } from '../data/portfolioData';

export type DetailModalContent =
  | { kind: 'ribbon'; data: RibbonCardItem }
  | { kind: 'project'; data: ProjectItem };

interface ProjectDetailModalProps {
  content: DetailModalContent | null;
  onClose: () => void;
  onStartInquiry: () => void;
}

export default function ProjectDetailModal({
  content,
  onClose,
  onStartInquiry,
}: ProjectDetailModalProps) {
  useEffect(() => {
    if (!content) return;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [content, onClose]);

  if (!content) return null;

  const isRibbon = content.kind === 'ribbon';
  const title = content.data.title;
  const subtitle = isRibbon ? content.data.details.organization : content.data.caseStudy.role;
  const metaRight = isRibbon ? content.data.period : content.data.caseStudy.timeline;
  const lead = isRibbon ? content.data.details.impact : content.data.caseStudy.context;
  const bullets = isRibbon ? content.data.details.highlights : content.data.caseStudy.deliverables;
  const skills = isRibbon ? content.data.details.skills : content.data.caseStudy.stack;
  const outcome = isRibbon ? `${content.data.footerLeft} · ${content.data.footerRight}` : content.data.caseStudy.outcome;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="detail-modal-title"
      className="fixed inset-0 z-[70] flex items-center justify-center p-4 sm:p-6 bg-black/80 backdrop-blur-md"
      onClick={onClose}
    >
      <div
        className="w-full max-w-2xl rounded-2xl bg-[#101218] border border-white/15 shadow-2xl overflow-hidden max-h-[90vh] flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Header */}
        <div className="px-6 py-5 border-b border-white/[0.08] flex items-start justify-between gap-4">
          <div className="space-y-1">
            <div className="flex flex-wrap items-center gap-2 text-xs font-mono text-blue-400">
              <span>{isRibbon ? content.data.tag : `Case Study ${content.data.number}`}</span>
              <span className="text-neutral-600" aria-hidden="true">·</span>
              <span className="text-neutral-400">{metaRight}</span>
            </div>
            <h3
              id="detail-modal-title"
              className="text-xl sm:text-2xl font-bold tracking-tight text-white"
            >
              {title}
            </h3>
            <p className="text-xs text-neutral-400">{subtitle}</p>
          </div>
          <button
            type="button"
            onClick={onClose}
            aria-label="Close detail dialog"
            className="w-9 h-9 rounded-full bg-white/[0.05] border border-white/10 flex items-center justify-center text-neutral-300 hover:text-white hover:bg-white/10 transition-colors cursor-pointer shrink-0"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6 space-y-6 overflow-y-auto">
          <p className="text-sm text-neutral-300 leading-relaxed">{lead}</p>

          <div className="space-y-3">
            <h4 className="text-xs font-mono uppercase tracking-wider text-neutral-400">
              Key Deliverables &amp; Highlights
            </h4>
            <ul className="space-y-2.5">
              {bullets.map((point) => (
                <li
                  key={point}
                  className="flex items-start gap-2.5 text-sm text-neutral-200 leading-relaxed"
                >
                  <CheckCircle2 className="w-4 h-4 text-blue-400 shrink-0 mt-0.5" />
                  <span>{point}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="p-4 rounded-xl bg-[#1A365D]/30 border border-blue-400/20">
            <div className="text-[11px] font-mono uppercase tracking-wider text-blue-300 mb-1">
              Verified Outcome
            </div>
            <p className="text-sm text-white leading-relaxed">{outcome}</p>
          </div>

          <div className="space-y-2">
            <h4 className="text-xs font-mono uppercase tracking-wider text-neutral-400">
              Core Disciplines &amp; Stack
            </h4>
            <div className="flex flex-wrap gap-2 text-xs font-mono">
              {skills.map((skill) => (
                <span
                  key={skill}
                  className="px-2.5 py-1 rounded bg-white/[0.04] border border-white/[0.08] text-neutral-300"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Modal Footer */}
        <div className="px-6 py-4 border-t border-white/[0.08] bg-[#0b0d12] flex flex-wrap items-center justify-between gap-3">
          <button
            type="button"
            onClick={onClose}
            className="px-4 py-2 rounded-full border border-white/15 text-xs font-medium text-neutral-300 hover:text-white hover:border-white/30 transition-colors cursor-pointer"
          >
            Close
          </button>
          <button
            type="button"
            onClick={() => {
              onClose();
              onStartInquiry();
            }}
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white text-[#080808] text-xs font-semibold hover:bg-neutral-200 transition-colors cursor-pointer"
          >
            <span>Discuss a Similar Project</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </div>
  );
}
