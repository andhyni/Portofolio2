import { EXECUTIVE_METRICS, type AccentTone } from '../data/portfolioData';

const METRIC_ACCENT_TEXT: Record<AccentTone, string> = {
  blue: 'text-blue-400',
  emerald: 'text-emerald-400',
  cyan: 'text-cyan-400',
  amber: 'text-amber-400',
  indigo: 'text-indigo-400',
  purple: 'text-purple-400',
};

const METRIC_GLOW_BG: Record<AccentTone, string> = {
  blue: 'bg-blue-500/10 group-hover:bg-blue-500/20',
  emerald: 'bg-emerald-500/10 group-hover:bg-emerald-500/20',
  cyan: 'bg-cyan-500/10 group-hover:bg-cyan-500/20',
  amber: 'bg-amber-500/10 group-hover:bg-amber-500/20',
  indigo: 'bg-indigo-500/10 group-hover:bg-indigo-500/20',
  purple: 'bg-purple-500/10 group-hover:bg-purple-500/20',
};

export default function WhyMeSection() {
  const leftMetrics = EXECUTIVE_METRICS.filter((m) => m.side === 'left');
  const rightMetrics = EXECUTIVE_METRICS.filter((m) => m.side === 'right');

  return (
    <section id="whyme" className="relative py-24 sm:py-28 px-6 z-20">
      <div className="max-w-7xl mx-auto">
        {/* Section Header Tagline */}
        <div className="text-center mb-16 space-y-3">
          <span className="inline-block font-mono text-xs tracking-widest text-blue-400 uppercase bg-blue-950/40 border border-blue-900/40 px-3 py-1 rounded-full">
            Executive Profile
          </span>
          <h2 className="text-2xl sm:text-4xl font-bold tracking-tight text-white [text-wrap:balance]">
            Architectural Precision Meets Operational Calm
          </h2>
          <p className="text-sm text-neutral-400 max-w-xl mx-auto">
            Bridging algorithmic software development with high-stakes human coordination.
          </p>
        </div>

        {/* Main Stage Container: 4 Flanking Metrics + Central Royal Navy Arch */}
        <div className="relative grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
          {/* LEFT 2 METRIC CARDS */}
          <div className="lg:col-span-3 flex flex-col gap-6 order-2 lg:order-1">
            {leftMetrics.map((metric) => (
              <div
                key={metric.id}
                className="glass-hairline rounded-2xl p-6 glass-card-hover relative overflow-hidden group"
              >
                <div
                  className={`absolute -right-4 -bottom-4 w-24 h-24 rounded-full blur-xl transition-all ${METRIC_GLOW_BG[metric.accent]}`}
                  aria-hidden="true"
                />
                <div className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight font-sans tabular-nums">
                  {metric.value}
                </div>
                <div
                  className={`text-xs font-mono uppercase tracking-wider mt-2 ${METRIC_ACCENT_TEXT[metric.accent]}`}
                >
                  {metric.label}
                </div>
                <p className="text-xs text-neutral-400 mt-2 leading-relaxed">
                  {metric.description}
                </p>
              </div>
            ))}
          </div>

          {/* CENTER ROYAL NAVY ARCH STATEMENT CARD */}
          <div className="lg:col-span-6 order-1 lg:order-2 flex justify-center">
            <div className="w-full max-w-md min-h-[460px] rounded-t-[190px] rounded-b-3xl bg-gradient-to-b from-[#1A365D] via-[#12233f] to-[#0A1120] border border-blue-400/30 p-8 sm:p-12 flex flex-col justify-between items-center text-center shadow-[0_20px_80px_-15px_rgba(26,54,93,0.65)] relative overflow-hidden group">
              {/* Arch Inner Ambient Highlight */}
              <div
                className="absolute top-0 left-1/2 -translate-x-1/2 w-48 h-32 bg-blue-400/20 rounded-full blur-2xl pointer-events-none"
                aria-hidden="true"
              />

              {/* Top Eyebrow */}
              <div className="pt-6 relative z-10">
                <span className="inline-block text-[11px] font-mono tracking-widest uppercase text-blue-200 bg-white/10 px-3.5 py-1 rounded-full border border-white/15">
                  • WHY ME
                </span>
              </div>

              {/* Main Arch Editorial Headline */}
              <div className="my-auto py-6 space-y-4 relative z-10">
                <h3 className="text-3xl sm:text-4xl font-bold tracking-tight text-white leading-tight">
                  Execution that
                  <br />
                  delivers real
                  <br />
                  <span className="font-serif italic font-normal text-blue-200">results</span>
                </h3>
                <p className="text-xs sm:text-sm text-slate-300 max-w-xs mx-auto leading-relaxed">
                  Every project is approached with analytical logic, calm mediation, and structured
                  coordination.
                </p>
              </div>

              {/* Bottom Handwritten Signature inside Arch */}
              <div className="pb-2 relative z-10">
                <span className="font-signature text-4xl text-white select-none block tracking-wide whitespace-nowrap">
                  Andhyni
                </span>
                <span className="text-[10px] font-mono text-blue-300/80 uppercase tracking-widest mt-1 block">
                  Informatics · Event Leader
                </span>
              </div>
            </div>
          </div>

          {/* RIGHT 2 METRIC CARDS */}
          <div className="lg:col-span-3 flex flex-col gap-6 order-3">
            {rightMetrics.map((metric) => (
              <div
                key={metric.id}
                className="glass-hairline rounded-2xl p-6 glass-card-hover relative overflow-hidden group"
              >
                <div
                  className={`absolute -right-4 -bottom-4 w-24 h-24 rounded-full blur-xl transition-all ${METRIC_GLOW_BG[metric.accent]}`}
                  aria-hidden="true"
                />
                <div className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight font-sans tabular-nums">
                  {metric.value}
                </div>
                <div
                  className={`text-xs font-mono uppercase tracking-wider mt-2 ${METRIC_ACCENT_TEXT[metric.accent]}`}
                >
                  {metric.label}
                </div>
                <p className="text-xs text-neutral-400 mt-2 leading-relaxed">
                  {metric.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
