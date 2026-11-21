import { useState } from 'react';
import { ArrowUpRight, Play, RotateCcw } from 'lucide-react';
import {
  EVENT_PROFILES,
  FEATURED_PROJECTS,
  PIPELINE_SIMULATION_RECORDS,
  type AccentTone,
  type ProjectItem,
} from '../data/portfolioData';

interface FeaturedProjectsSectionProps {
  onSelectProject: (project: ProjectItem) => void;
}

type CategoryFilter = 'all' | 'technical' | 'leadership' | 'design' | 'governance';

const FILTER_OPTIONS: { id: CategoryFilter; label: string }[] = [
  { id: 'all', label: 'All Work' },
  { id: 'technical', label: 'Python & AI' },
  { id: 'leadership', label: 'Event Direction' },
  { id: 'design', label: 'Web & Design' },
  { id: 'governance', label: 'Governance' },
];

const KEYWORD_TONES: Record<AccentTone, string> = {
  blue: 'text-blue-400',
  amber: 'text-amber-300',
  emerald: 'text-emerald-400',
  purple: 'text-purple-300',
  indigo: 'text-indigo-300',
  cyan: 'text-cyan-400',
};

export default function FeaturedProjectsSection({
  onSelectProject,
}: FeaturedProjectsSectionProps) {
  const [activeFilter, setActiveFilter] = useState<CategoryFilter>('all');
  const [pipelineOutputVisible, setPipelineOutputVisible] = useState(false);
  const [activeEventKey, setActiveEventKey] = useState<'pensi' | 'perjusa'>('pensi');

  const visibleProjects =
    activeFilter === 'all'
      ? FEATURED_PROJECTS
      : FEATURED_PROJECTS.filter((p) => p.category === activeFilter);

  const currentEvent = EVENT_PROFILES[activeEventKey];

  const renderShowcaseCard = (project: ProjectItem) => {
    if (project.cardType === 'code') {
      return (
        <div className="glass-hairline rounded-2xl p-6 sm:p-8 bg-gradient-to-br from-neutral-900/90 to-[#080808] border border-white/10 hover:border-blue-500/40 transition-all duration-300">
          {/* Code Header Bar */}
          <div className="flex items-center justify-between gap-2 pb-4 border-b border-white/10 text-xs font-mono text-neutral-400">
            <div className="flex items-center gap-2">
              <span className="w-3 h-3 rounded-full bg-rose-500/80 inline-block" />
              <span className="w-3 h-3 rounded-full bg-amber-500/80 inline-block" />
              <span className="w-3 h-3 rounded-full bg-emerald-500/80 inline-block" />
              <span className="ml-2 text-neutral-300">sic_stage1_pipeline.py</span>
            </div>
            <div className="flex items-center gap-3">
              <span className="text-blue-400 hidden sm:inline">SIC Batch 8</span>
              <button
                type="button"
                onClick={() => setPipelineOutputVisible((prev) => !prev)}
                className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-blue-950/60 border border-blue-500/35 text-[11px] text-blue-200 hover:bg-blue-900/70 transition-colors cursor-pointer whitespace-nowrap"
              >
                {pipelineOutputVisible ? (
                  <>
                    <RotateCcw className="w-3 h-3" />
                    <span>Show Code</span>
                  </>
                ) : (
                  <>
                    <Play className="w-3 h-3" />
                    <span>Run Sample</span>
                  </>
                )}
              </button>
            </div>
          </div>

          {/* Terminal Code or Simulated CSV Output */}
          {!pipelineOutputVisible ? (
            <div className="py-5 font-mono text-xs sm:text-sm text-neutral-300 space-y-2 overflow-x-auto">
              <p>
                <span className="text-purple-400">import</span> csv
              </p>
              <p>
                <span className="text-purple-400">from</span> ai_prompts{' '}
                <span className="text-purple-400">import</span> evaluate_dataset
              </p>
              <p className="text-neutral-500">
                # Process dataset pipelines with Python dictionaries
              </p>
              <p>
                <span className="text-blue-400">def</span>{' '}
                <span className="text-amber-300">process_applicant_stream</span>(filepath):
              </p>
              <p className="pl-4">records = []</p>
              <p className="pl-4">
                <span className="text-blue-400">with</span> open(filepath, mode=
                <span className="text-emerald-300">&apos;r&apos;</span>, encoding=
                <span className="text-emerald-300">&apos;utf-8&apos;</span>){' '}
                <span className="text-blue-400">as</span> stream:
              </p>
              <p className="pl-8">reader = csv.DictReader(stream)</p>
              <p className="pl-8">
                <span className="text-blue-400">for</span> entry{' '}
                <span className="text-blue-400">in</span> reader:
              </p>
              <p className="pl-12">
                records.append({'{'}
                <span className="text-emerald-300">&quot;id&quot;</span>: entry[
                <span className="text-emerald-300">&quot;candidate&quot;</span>],{' '}
                <span className="text-emerald-300">&quot;status&quot;</span>:{' '}
                <span className="text-emerald-300">&quot;VERIFIED&quot;</span>
                {'}'})
              </p>
              <p className="pl-4">
                <span className="text-blue-400">return</span> evaluate_dataset(records)
              </p>
            </div>
          ) : (
            <div className="py-5 font-mono text-xs space-y-2.5">
              <div className="flex items-center justify-between text-[11px] text-neutral-400 pb-1">
                <span>$ python3 sic_stage1_pipeline.py --input applicants_b8.csv</span>
                <span className="text-emerald-400">4 rows parsed</span>
              </div>
              <div className="divide-y divide-white/[0.06] border border-white/[0.08] rounded-xl overflow-hidden bg-black/40">
                {PIPELINE_SIMULATION_RECORDS.map((row) => (
                  <div
                    key={row.id}
                    className="px-3.5 py-2.5 flex items-center justify-between gap-3 tabular-nums"
                  >
                    <div className="flex items-center gap-3 min-w-0">
                      <span className="text-blue-400 shrink-0">{row.id}</span>
                      <span className="text-white truncate">{row.candidate}</span>
                      <span className="text-neutral-500 hidden sm:inline truncate">
                        · {row.track}
                      </span>
                    </div>
                    <div className="flex items-center gap-3 shrink-0">
                      <span className="text-neutral-300">{row.score}/100</span>
                      <span className="text-emerald-400 font-semibold">{row.status}</span>
                    </div>
                  </div>
                ))}
              </div>
              <p className="text-[11px] text-cyan-300/90 pt-1">
                Output normalized for Generative AI evaluation prompt · Avg score 90.3
              </p>
            </div>
          )}

          {/* Status footer tags */}
          <div className="pt-4 border-t border-white/10 flex flex-wrap gap-2 text-[11px] font-mono">
            <span className="px-2.5 py-1 rounded bg-white/[0.04] text-neutral-300 border border-white/[0.08]">
              Python 3.11
            </span>
            <span className="px-2.5 py-1 rounded bg-white/[0.04] text-neutral-300 border border-white/[0.08]">
              CSV Automation
            </span>
            <span className="px-2.5 py-1 rounded bg-white/[0.04] text-neutral-300 border border-white/[0.08]">
              Generative AI Prompting
            </span>
            <span className="px-2.5 py-1 rounded bg-blue-900/40 text-blue-300 border border-blue-700/40">
              26-Hour Certification
            </span>
          </div>
        </div>
      );
    }

    if (project.cardType === 'stage') {
      return (
        <div className="glass-hairline rounded-2xl p-6 sm:p-8 bg-gradient-to-br from-neutral-900/90 to-[#080808] border border-white/10 hover:border-amber-500/40 transition-all duration-300">
          <div className="flex flex-wrap items-center justify-between gap-3 pb-4 border-b border-white/10">
            <span className="text-xs font-mono uppercase tracking-wider text-neutral-400">
              {currentEvent.subtitle}
            </span>
            <div className="inline-flex items-center gap-1 p-0.5 rounded-lg bg-white/[0.04] border border-white/[0.08]">
              <button
                type="button"
                onClick={() => setActiveEventKey('pensi')}
                className={`px-2.5 py-1 rounded-md text-[11px] font-mono transition-colors cursor-pointer whitespace-nowrap ${
                  activeEventKey === 'pensi'
                    ? 'bg-amber-500/20 text-amber-300'
                    : 'text-neutral-400 hover:text-white'
                }`}
              >
                Pentas Seni Akbar
              </button>
              <button
                type="button"
                onClick={() => setActiveEventKey('perjusa')}
                className={`px-2.5 py-1 rounded-md text-[11px] font-mono transition-colors cursor-pointer whitespace-nowrap ${
                  activeEventKey === 'perjusa'
                    ? 'bg-indigo-500/25 text-indigo-300'
                    : 'text-neutral-400 hover:text-white'
                }`}
              >
                PERJUSA Camp
              </button>
            </div>
          </div>

          {/* Visual Stage Flow Grid */}
          <div className="grid grid-cols-3 gap-3 py-6 text-center">
            {currentEvent.stats.map((stat) => (
              <div
                key={stat.label}
                className="p-4 rounded-xl bg-white/[0.02] border border-white/[0.06]"
              >
                <div className={`text-xl sm:text-2xl font-bold tabular-nums ${stat.tone}`}>
                  {stat.value}
                </div>
                <div className="text-[11px] text-neutral-400 font-mono mt-1">{stat.label}</div>
              </div>
            ))}
          </div>

          {/* Quote Block */}
          <div className="p-4 rounded-lg bg-white/[0.02] border border-white/[0.08] text-xs text-neutral-300 flex items-start gap-3 leading-relaxed">
            <span className="text-amber-400 font-serif text-lg leading-none">“</span>
            <span>{currentEvent.quote}</span>
          </div>
        </div>
      );
    }

    if (project.cardType === 'design') {
      return (
        <div className="glass-hairline rounded-2xl p-6 sm:p-8 bg-gradient-to-br from-neutral-900/90 to-[#080808] border border-white/10 hover:border-emerald-500/40 transition-all duration-300">
          <div className="flex items-center justify-between pb-4 border-b border-white/10">
            <span className="text-xs font-mono uppercase tracking-wider text-neutral-400">
              UI / Perspective Grid
            </span>
            <span className="text-xs font-mono text-emerald-400">Champion PARADISE IX &amp; X</span>
          </div>

          {/* Perspective Art / Design Visual Showcase */}
          <div className="py-6 space-y-3">
            <div className="flex items-center justify-between text-xs text-neutral-300">
              <span>Perspektif Gedung 3D Drafting</span>
              <span className="text-emerald-400 font-mono">Juara 1 (1st Place)</span>
            </div>
            <div className="w-full bg-white/[0.05] h-2 rounded-full overflow-hidden">
              <div className="bg-gradient-to-r from-emerald-500 to-cyan-400 h-full w-[96%]" />
            </div>

            <div className="flex items-center justify-between text-xs text-neutral-300 pt-2">
              <span>Mading, Face Art &amp; Painting Composition</span>
              <span className="text-emerald-400 font-mono">Juara 1 (1st Place)</span>
            </div>
            <div className="w-full bg-white/[0.05] h-2 rounded-full overflow-hidden">
              <div className="bg-gradient-to-r from-emerald-500 to-cyan-400 h-full w-[94%]" />
            </div>

            <div className="flex items-center justify-between text-xs text-neutral-300 pt-2">
              <span>Hasta Karya Putri Architecture (PERAK)</span>
              <span className="text-amber-300 font-mono">Juara 3 (3rd Place)</span>
            </div>
            <div className="w-full bg-white/[0.05] h-2 rounded-full overflow-hidden">
              <div className="bg-gradient-to-r from-amber-400 to-yellow-300 h-full w-[85%]" />
            </div>
          </div>

          <div className="pt-4 border-t border-white/10 flex flex-wrap gap-2 text-[11px] font-mono">
            <span className="px-2.5 py-1 rounded bg-white/[0.04] text-neutral-300 border border-white/[0.08]">
              HTML5 Semantic
            </span>
            <span className="px-2.5 py-1 rounded bg-white/[0.04] text-neutral-300 border border-white/[0.08]">
              Tailwind CSS
            </span>
            <span className="px-2.5 py-1 rounded bg-white/[0.04] text-neutral-300 border border-white/[0.08]">
              Perspective Drafting
            </span>
          </div>
        </div>
      );
    }

    return (
      <div className="glass-hairline rounded-2xl p-6 sm:p-8 bg-gradient-to-br from-neutral-900/90 to-[#080808] border border-white/10 hover:border-purple-500/40 transition-all duration-300">
        <div className="flex items-center justify-between pb-4 border-b border-white/10">
          <span className="text-xs font-mono uppercase tracking-wider text-neutral-400">
            Credential Matrix
          </span>
          <span className="text-xs font-mono text-purple-300">Secretariat · IKSAN</span>
        </div>

        {/* Key Administrative milestones */}
        <div className="py-6 space-y-3 font-mono text-xs">
          <div className="p-3 rounded-lg bg-white/[0.02] border border-white/[0.06] flex flex-wrap items-center justify-between gap-2">
            <span className="text-white">Praktik Amaliah Tadris (Teaching Practicum)</span>
            <span className="text-purple-300 font-bold tabular-nums">Grade 86 (Predikat A-)</span>
          </div>
          <div className="p-3 rounded-lg bg-white/[0.02] border border-white/[0.06] flex flex-wrap items-center justify-between gap-2">
            <span className="text-white">Tahfizhul Qur&apos;an Certification</span>
            <span className="text-emerald-400 font-bold">Juz 29 &amp; Juz 30</span>
          </div>
          <div className="p-3 rounded-lg bg-white/[0.02] border border-white/[0.06] flex flex-wrap items-center justify-between gap-2">
            <span className="text-white">LDK Kepemimpinan Jenjang SMA</span>
            <span className="text-blue-300 font-bold">Predikat Baik</span>
          </div>
        </div>

        <p className="text-xs text-neutral-400 leading-relaxed italic p-3.5 rounded-lg bg-white/[0.02] border border-white/[0.06]">
          “Bridging student body grievances, managing confidential registry books, and standardizing
          institutional proposal documentation.”
        </p>
      </div>
    );
  };

  return (
    <section
      id="projects"
      className="py-24 px-6 z-20 border-t border-white/[0.06] relative"
    >
      <div className="max-w-7xl mx-auto">
        {/* Section Eyebrow + Filter Bar */}
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end gap-6 mb-16 sm:mb-20">
          <div>
            <span className="text-xs font-mono tracking-widest text-blue-400 uppercase">
              • FEATURED WORK &amp; LEADERSHIP
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white mt-2 [text-wrap:balance]">
              Crafting Software &amp; Directing Experiences
            </h2>
          </div>

          <div className="space-y-3 lg:text-right">
            <p className="text-xs sm:text-sm text-neutral-400 max-w-sm lg:ml-auto">
              A dual focus on clean Python &amp; web code paired with institutional governance and
              massive stage direction.
            </p>
            {/* Interactive Discipline Filter Controls */}
            <div
              role="tablist"
              aria-label="Filter projects by discipline"
              className="inline-flex flex-wrap items-center gap-1 p-1 rounded-xl bg-white/[0.03] border border-white/[0.08]"
            >
              {FILTER_OPTIONS.map((option) => {
                const isActive = activeFilter === option.id;
                return (
                  <button
                    key={option.id}
                    type="button"
                    role="tab"
                    aria-selected={isActive}
                    onClick={() => setActiveFilter(option.id)}
                    className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-colors whitespace-nowrap cursor-pointer ${
                      isActive
                        ? 'bg-white text-[#080808] font-semibold'
                        : 'text-neutral-400 hover:text-white'
                    }`}
                  >
                    {option.label}
                  </button>
                );
              })}
            </div>
          </div>
        </div>

        {/* Alternating 2-Column Editorial Rows */}
        <div className="space-y-20 sm:space-y-24">
          {visibleProjects.map((project, index) => {
            const cardOnLeft = index % 2 === 0;
            return (
              <article
                key={project.id}
                className="grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-12 items-center"
              >
                {/* Showcase Card */}
                <div
                  className={`lg:col-span-7 ${
                    cardOnLeft ? 'order-2 lg:order-1' : 'order-2 lg:order-2'
                  }`}
                >
                  {renderShowcaseCard(project)}
                </div>

                {/* Editorial Narrative Column */}
                <div
                  className={`lg:col-span-5 space-y-4 ${
                    cardOnLeft ? 'order-1 lg:order-2' : 'order-1 lg:order-1'
                  }`}
                >
                  <div className="font-serif text-5xl sm:text-6xl text-white/30 font-normal tabular-nums">
                    {project.number}
                  </div>
                  <h3 className="text-2xl sm:text-3xl font-bold tracking-tight text-white [text-wrap:balance]">
                    {project.title}
                  </h3>
                  <p className="text-sm text-neutral-400 leading-relaxed">{project.description}</p>
                  <div
                    className={`pt-2 flex flex-wrap items-center gap-3 text-xs font-mono ${KEYWORD_TONES[project.accent]}`}
                  >
                    <span>{project.keywords[0]}</span>
                    <span aria-hidden="true">·</span>
                    <span>{project.keywords[1]}</span>
                  </div>
                  <div className="pt-2">
                    <button
                      type="button"
                      onClick={() => onSelectProject(project)}
                      className="inline-flex items-center gap-2 text-xs font-medium text-neutral-300 hover:text-white border-b border-white/20 hover:border-white pb-1 transition-colors cursor-pointer group"
                    >
                      <span>View Full Breakdown</span>
                      <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                    </button>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
