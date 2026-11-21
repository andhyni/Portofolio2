import { useState } from 'react';
import { ArrowUpRight, Pause, Play } from 'lucide-react';
import {
  HERO_PORTRAIT_URL,
  RIBBON_CARDS,
  type AccentTone,
  type RibbonCardItem,
} from '../data/portfolioData';

interface HeroSectionProps {
  onSelectRibbonCard: (item: RibbonCardItem) => void;
  onBeginProject: () => void;
}

const TAG_STYLES: Record<AccentTone, string> = {
  blue: 'text-blue-400 bg-blue-950/60 border-blue-800/40',
  amber: 'text-amber-300 bg-amber-950/50 border-amber-800/40',
  emerald: 'text-emerald-400 bg-emerald-950/60 border-emerald-800/40',
  indigo: 'text-indigo-300 bg-indigo-950/50 border-indigo-800/40',
  purple: 'text-purple-300 bg-purple-950/50 border-purple-800/40',
  cyan: 'text-cyan-400 bg-cyan-950/60 border-cyan-800/40',
};

const FOOTER_ACCENT_STYLES: Record<AccentTone, string> = {
  blue: 'text-cyan-400 font-semibold',
  amber: 'text-white font-semibold',
  emerald: 'text-emerald-400 font-bold',
  indigo: 'text-indigo-300 font-semibold',
  purple: 'text-purple-300 font-semibold',
  cyan: 'text-cyan-400 font-semibold',
};

export default function HeroSection({ onSelectRibbonCard, onBeginProject }: HeroSectionProps) {
  const [isPaused, setIsPaused] = useState(false);
  const [portraitFailed, setPortraitFailed] = useState(false);

  const renderCard = (card: RibbonCardItem, duplicateIndex?: number) => (
    <button
      key={duplicateIndex !== undefined ? `${card.id}-dup-${duplicateIndex}` : card.id}
      type="button"
      onClick={() => onSelectRibbonCard(card)}
      aria-label={`Inspect ${card.title}`}
      className="w-72 sm:w-80 h-44 rounded-xl p-5 bg-gradient-to-br from-neutral-900/95 to-neutral-950/95 border border-white/10 hover:border-white/30 shadow-2xl flex flex-col justify-between text-left backdrop-blur-md transition-transform duration-300 hover:scale-[1.03] cursor-pointer shrink-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-400"
    >
      <div className="flex items-center justify-between gap-2 w-full">
        <span
          className={`text-[10px] font-mono uppercase tracking-wider px-2 py-0.5 rounded border whitespace-nowrap ${TAG_STYLES[card.accent]}`}
        >
          {card.tag}
        </span>
        <span className="text-xs text-neutral-500 whitespace-nowrap">{card.period}</span>
      </div>

      <div>
        <h4 className="text-sm font-semibold text-white">{card.title}</h4>
        <p className="text-xs text-neutral-400 mt-1 line-clamp-2 leading-relaxed">{card.summary}</p>
      </div>

      <div className="flex items-center justify-between text-[11px] font-mono text-neutral-500 w-full tabular-nums">
        <span>{card.footerLeft}</span>
        <span className={FOOTER_ACCENT_STYLES[card.accent]}>{card.footerRight}</span>
      </div>
    </button>
  );

  return (
    <section
      id="about"
      className="relative min-h-[92vh] pt-24 pb-12 flex flex-col justify-between overflow-hidden z-10"
    >
      {/* Top Micro Bar */}
      <div className="max-w-7xl w-full mx-auto px-6 pt-3 flex flex-wrap justify-between items-center gap-3 text-xs text-neutral-400">
        <div className="flex items-center gap-4 sm:gap-6">
          <span className="text-neutral-300 whitespace-nowrap">Mahasiswa S1 Teknik Informatika</span>
        </div>

        <div className="flex items-center gap-4">
          <span className="hidden lg:inline-block font-mono text-neutral-500 whitespace-nowrap">
            ARCHITECTURAL VISION · PYTHON AUTOMATION
          </span>
          <button
            type="button"
            onClick={() => setIsPaused((prev) => !prev)}
            className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-white/[0.04] border border-white/[0.08] text-[11px] font-mono text-neutral-300 hover:text-white hover:border-white/25 transition-colors cursor-pointer whitespace-nowrap"
            aria-label={isPaused ? 'Resume showcase ribbon' : 'Pause showcase ribbon'}
          >
            {isPaused ? <Play className="w-3 h-3" /> : <Pause className="w-3 h-3" />}
            <span>{isPaused ? 'Resume Ribbon' : 'Pause Ribbon'}</span>
          </button>
        </div>
      </div>

      {/* Center Stage: 3D Curved Continuous Ribbon & Cutout Portrait */}
      <div className="relative w-full my-auto py-12 sm:py-16 hero-perspective-stage flex items-center justify-center overflow-hidden min-h-[340px] sm:min-h-[430px] lg:min-h-[500px]">
        {/* 3D Ribbon moving infinitely in background */}
        <div
          className="curved-marquee-track gap-6 opacity-65 hover:opacity-95 transition-opacity duration-500"
          data-paused={isPaused ? 'true' : 'false'}
        >
          {RIBBON_CARDS.map((card) => renderCard(card))}
          {RIBBON_CARDS.map((card, idx) => renderCard(card, idx))}
        </div>

        {/* Center Cutout Portrait of Andhyni */}
        <div className="absolute bottom-[-16px] sm:bottom-[-24px] left-1/2 -translate-x-1/2 z-20 pointer-events-none flex flex-col items-center">
          {/* Soft royal-navy backlight glow behind portrait */}
          <div className="w-72 h-72 sm:w-96 sm:h-96 rounded-full bg-blue-500/18 blur-3xl absolute top-12 pointer-events-none" />

          {!portraitFailed ? (
            <img
              src={HERO_PORTRAIT_URL}
              alt="Andhyni A'syafa A-lifia portrait"
              referrerPolicy="no-referrer"
              onError={() => setPortraitFailed(true)}
              className="h-[340px] sm:h-[440px] md:h-[510px] lg:h-[560px] max-h-[68vh] w-auto max-w-full object-contain object-bottom filter drop-shadow-[0_20px_40px_rgba(0,0,0,0.92)] select-none pointer-events-auto"
            />
          ) : (
            /* Graceful Obsidian & Royal Navy Editorial Monogram Frame Fallback */
            <div className="relative w-64 sm:w-72 md:w-80 h-[320px] sm:h-[380px] rounded-t-[160px] rounded-b-3xl bg-gradient-to-b from-[#1A365D]/95 via-[#0f1d35]/95 to-[#080808] border border-blue-400/25 shadow-[0_20px_60px_rgba(0,0,0,0.85)] flex flex-col items-center justify-center p-8 text-center pointer-events-auto">
              <div className="w-24 h-24 rounded-full bg-white/[0.06] border border-white/15 flex items-center justify-center mb-5">
                <span className="font-serif text-4xl italic text-blue-100">AA</span>
              </div>
              <p className="font-sans text-lg font-semibold text-white tracking-tight">
                Andhyni A&apos;syafa A-lifia
              </p>
              <p className="font-mono text-[11px] text-blue-300/90 mt-1.5 uppercase tracking-widest">
                IT PLN · Informatics
              </p>
              <span className="font-signature text-3xl text-neutral-200 mt-5 whitespace-nowrap">
                Andhyni
              </span>
            </div>
          )}
        </div>
      </div>

      {/* Bottom Left & Right Editorial Floating Blocks */}
      <div className="max-w-7xl w-full mx-auto px-6 relative z-30 pt-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-end">
          {/* Left: Large H1 Title & White Primary Pill CTA */}
          <div className="space-y-6">
            <div className="space-y-1.5">
              <span className="text-xs font-mono uppercase tracking-wider text-neutral-400 block">
                Hi, I&apos;m Andhyni
              </span>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white leading-[1.06] [text-wrap:balance]">
                Informatics &amp; <br />
                <span className="text-neutral-100">Event Leader</span>
              </h1>
            </div>
            <div>
              <button
                type="button"
                onClick={onBeginProject}
                className="inline-flex items-center gap-3 px-7 py-3.5 rounded-full bg-white text-[#080808] font-semibold text-sm hover:bg-neutral-200 transition-all duration-300 group shadow-lg hover:shadow-white/20 cursor-pointer whitespace-nowrap"
              >
                <span>Begin a project</span>
                <span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-[#080808] text-white group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-300">
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </span>
              </button>
            </div>
          </div>

          {/* Right: Editorial Bio & Handwritten Signature */}
          <div className="md:text-right space-y-4 max-w-md md:ml-auto">
            <p className="text-sm sm:text-base text-[#8E929B] leading-relaxed font-normal">
              I&apos;m <strong className="text-white font-semibold">Andhyni</strong>, an Informatics
              Engineering student at{' '}
              <strong className="text-white font-semibold">Institut Teknologi PLN</strong> who turns{' '}
              <strong className="text-white font-semibold">clean Python &amp; web code</strong> and{' '}
              <strong className="text-white font-semibold">structured event management</strong> into
              real, impactful experiences.
            </p>
            <div className="pt-1 md:pr-2 flex md:justify-end items-center">
              <span className="font-signature text-4xl sm:text-[42px] text-neutral-200 tracking-wide select-none whitespace-nowrap transform -rotate-3 hover:rotate-0 transition-transform duration-300">
                Andhyni
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
