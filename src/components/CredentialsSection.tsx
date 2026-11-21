import { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import {
  AWARDS_HONORS,
  EDUCATION_CREDENTIALS,
  type AccentTone,
  type CredentialItem,
} from '../data/portfolioData';

const BADGE_STYLES: Record<AccentTone | 'neutral', string> = {
  blue: 'text-blue-400 bg-blue-950/60 px-2 py-0.5 rounded',
  cyan: 'text-cyan-400 bg-cyan-950/60 px-2 py-0.5 rounded',
  emerald: 'text-emerald-400 bg-emerald-950/60 px-2 py-0.5 rounded font-bold',
  amber: 'text-amber-300 bg-amber-950/60 px-2 py-0.5 rounded',
  purple: 'text-purple-400',
  indigo: 'text-indigo-300',
  neutral: 'text-neutral-400',
};

export default function CredentialsSection() {
  const [expandedId, setExpandedId] = useState<string | null>(null);

  const toggleItem = (id: string) => {
    setExpandedId((prev) => (prev === id ? null : id));
  };

  const renderColumn = (
    heading: string,
    countLabel: string,
    items: CredentialItem[],
  ) => (
    <div className="space-y-6">
      <h3 className="text-xs font-mono uppercase tracking-widest text-neutral-400 pb-3 border-b border-white/[0.12] flex items-center justify-between">
        <span>{heading}</span>
        <span className="text-neutral-500 tabular-nums">{countLabel}</span>
      </h3>

      <div className="divide-y divide-white/[0.08]">
        {items.map((item) => {
          const isOpen = expandedId === item.id;
          return (
            <div key={item.id} className="py-4">
              <button
                type="button"
                onClick={() => toggleItem(item.id)}
                aria-expanded={isOpen}
                className="w-full text-left space-y-1.5 group cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-400 rounded-md"
              >
                <div className="flex items-start justify-between gap-3">
                  <span className="font-semibold text-white text-base group-hover:text-blue-200 transition-colors">
                    {item.title}
                  </span>
                  <div className="flex items-center gap-2 shrink-0">
                    <span
                      className={`text-xs font-mono whitespace-nowrap ${BADGE_STYLES[item.badgeAccent]}`}
                    >
                      {item.badge}
                    </span>
                    <ChevronDown
                      className={`w-4 h-4 text-neutral-500 transition-transform duration-200 ${
                        isOpen ? 'rotate-180 text-white' : 'group-hover:text-neutral-300'
                      }`}
                    />
                  </div>
                </div>
                <p className="text-xs text-neutral-400">{item.organization}</p>
                <p className="text-xs text-neutral-500 leading-relaxed">{item.description}</p>
              </button>

              {isOpen && (
                <div className="mt-3 pt-3 border-t border-white/[0.06] text-xs text-neutral-300 leading-relaxed bg-white/[0.02] rounded-lg p-3.5">
                  {item.detailNote}
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );

  return (
    <section
      id="credentials"
      className="py-24 px-6 z-20 border-t border-white/[0.06] relative"
    >
      <div className="max-w-7xl mx-auto">
        <div className="text-left mb-16 flex flex-col sm:flex-row sm:items-end justify-between gap-4">
          <div>
            <span className="text-xs font-mono tracking-widest text-blue-400 uppercase">
              • INDEX &amp; CREDENTIALS
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white mt-2">
              Education, Certifications &amp; Honors
            </h2>
          </div>
          <p className="text-xs font-mono text-neutral-500">
            Select any row to expand verification details
          </p>
        </div>

        {/* 2-Column Hairline Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
          {renderColumn('Education & Certifications', '01 — 05', EDUCATION_CREDENTIALS)}
          {renderColumn('Awards & Honors', '01 — 05', AWARDS_HONORS)}
        </div>
      </div>
    </section>
  );
}
