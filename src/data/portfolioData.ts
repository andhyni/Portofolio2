export const HERO_PORTRAIT_URL =
  'https://lh3.googleusercontent.com/aida-public/AB6AXuA2Zp4e9c8M_8ehIyHcfIkbZ-VFRT2XwGeM8NKpwLZQY-mdmFY8juu1MRHgqvL2IwRs5sezH0X5vGsAVH0jMel9xrUw-YblYxF_13GF20BU0G7_Qmv7GJE9bIJJk6_bEmgxkA0ylS9NMp_zEnOqDNLcY2cGbtsMIN06J2Gc04xbsvuouO5Ox2s4VzX69idLIkMuYX4X-BWRwx4s25M-kw68A6mO9DM6bTkTyZlO7GBGSMFpv7jOOQR1Ow';

export type AccentTone = 'blue' | 'amber' | 'emerald' | 'indigo' | 'purple' | 'cyan';

export interface RibbonCardItem {
  id: string;
  tag: string;
  period: string;
  title: string;
  summary: string;
  footerLeft: string;
  footerRight: string;
  accent: AccentTone;
  category: 'technical' | 'leadership' | 'design' | 'governance';
  details: {
    role: string;
    organization: string;
    impact: string;
    highlights: string[];
    skills: string[];
  };
}

export interface MetricItem {
  id: string;
  value: string;
  label: string;
  description: string;
  accent: AccentTone;
  side: 'left' | 'right';
}

export interface ProjectItem {
  id: string;
  number: string;
  title: string;
  description: string;
  keywords: [string, string];
  accent: AccentTone;
  category: 'technical' | 'leadership' | 'design' | 'governance';
  cardType: 'code' | 'stage' | 'design' | 'governance';
  caseStudy: {
    context: string;
    role: string;
    timeline: string;
    deliverables: string[];
    outcome: string;
    stack: string[];
  };
}

export interface CredentialItem {
  id: string;
  title: string;
  badge: string;
  badgeAccent: AccentTone | 'neutral';
  organization: string;
  description: string;
  detailNote: string;
}

export const RIBBON_CARDS: RibbonCardItem[] = [
  {
    id: 'sic-code-kickstart',
    tag: 'Samsung Innovation Campus',
    period: 'Batch 8',
    title: 'Code Kickstart (26 Hrs)',
    summary: 'Python Programming, CSV Data pipelines & Gen AI prompting logic.',
    footerLeft: 'Stage 1 Completed',
    footerRight: 'Score: Pass ✓',
    accent: 'blue',
    category: 'technical',
    details: {
      role: 'Certified Participant — Stage 1',
      organization: 'Samsung Innovation Campus (SIC) Batch 8',
      impact: 'Completed 26 intensive hours of algorithmic Python programming & structured AI prompting.',
      highlights: [
        'Implemented CSV data ingestion and dictionary normalization scripts in Python 3.11.',
        'Applied structured Generative AI prompt workflows to automate dataset validation.',
        'Passed Stage 1 assessment benchmarks for clean control flow and modular functions.',
      ],
      skills: ['Python 3.11', 'CSV Pipelines', 'Lists & Dictionaries', 'Generative AI Prompting'],
    },
  },
  {
    id: 'pentas-seni-akbar',
    tag: 'Leadership & Stage',
    period: '2024',
    title: 'Pentas Seni Akbar',
    summary: 'Secretary & Stage Flow Direction for 2,000+ attendees across 5+ divisions.',
    footerLeft: '5+ Division Heads',
    footerRight: '2,000+ Crowd',
    accent: 'amber',
    category: 'leadership',
    details: {
      role: 'Secretary & Event Division Lead',
      organization: 'Pentas Seni Akbar',
      impact: 'Directed live audience flow, run-down cues, and multi-division coordination for 2,000+ guests.',
      highlights: [
        'Authored official event permits, master run-down timelines, and contingency protocols.',
        'Synchronized 5+ division heads via live radio communication with zero stage delays.',
        'Managed VIP protocol and backstage artist transitions across the full showcase.',
      ],
      skills: ['Stage Direction', 'Crowd Governance', 'Event Secretariat', 'Crisis Mediation'],
    },
  },
  {
    id: 'paradise-awards',
    tag: 'Award · 4x 1st Place',
    period: 'PARADISE IX & X',
    title: 'Perspektif Gedung & Mading Art',
    summary: 'Champion in technical architectural perspective drawing, painting & creative UI.',
    footerLeft: 'Tingkat Penegak',
    footerRight: 'Juara 1 Trophy',
    accent: 'emerald',
    category: 'design',
    details: {
      role: '1st Place Champion (4x Categories)',
      organization: 'PARADISE IX & X — Tingkat Penegak',
      impact: 'Secured consecutive first-place honors across architectural drafting, editorial wall-magazine design, and painting.',
      highlights: [
        'Juara I Perspektif Gedung (PARADISE IX): multi-point geometric lighting and spatial drafting.',
        'Juara I Mading, Face Art & Melukis (PARADISE X): triple-category creative curation.',
        'Translated spatial proportion mastery directly into modern front-end UI composition.',
      ],
      skills: ['Perspective Drafting', 'Visual Hierarchy', 'Editorial Layout', 'Tailwind UI'],
    },
  },
  {
    id: 'perjusa-camp',
    tag: 'Event Director',
    period: '2024',
    title: 'PERJUSA Annual Camp',
    summary: 'Chief Event Organizer leading 20+ staff committee & 150 student campers.',
    footerLeft: '150 Campers',
    footerRight: '100% Safety Rec',
    accent: 'indigo',
    category: 'leadership',
    details: {
      role: 'Chief Event Organizer (Ketua Pelaksana)',
      organization: 'PERJUSA 2-Day Overnight Camp',
      impact: 'Orchestrated end-to-end camp operations for 150 student campers and 20+ staff with a 100% safety record.',
      highlights: [
        'Planned 48-hour field schedule covering scout drills, logistics, catering, and night watch.',
        'Coordinated emergency readiness, medical checkpoints, and parental communication.',
        'Balanced strict discipline with high participant engagement across all camp cohorts.',
      ],
      skills: ['Operations Planning', 'Team Leadership', 'Risk & Safety Protocol', 'Field Logistics'],
    },
  },
  {
    id: 'iksan-governance',
    tag: 'Governance',
    period: 'IKSAN',
    title: 'Amaliah Tadris & Mediation',
    summary: 'Grade 86 (A-) Teaching Practicum, Quran Tahfizh 2 Juz, and conflict mediation.',
    footerLeft: 'Secretariat',
    footerRight: 'Nilai A- (86)',
    accent: 'purple',
    category: 'governance',
    details: {
      role: 'General Secretary & Certified Practicum Instructor',
      organization: 'IKSAN (2024–2025) & OSPTQ Al-Azka (2020–2023)',
      impact: 'Standardized institutional documentation while mediating student grievances with empathy.',
      highlights: [
        'Achieved Grade 86 (Predikat A-) in Praktik Amaliah Tadris teaching evaluation.',
        'Maintained confidential organizational registries, proposals, and board minutes.',
        'Completed Tahfizhul Qur’an certification covering Juz 29, Juz 30, and selected Surahs.',
      ],
      skills: ['Secretarial Governance', 'Conflict Mediation', 'Pedagogy', 'Proposal Drafting'],
    },
  },
];

export const EXECUTIVE_METRICS: MetricItem[] = [
  {
    id: 'audience-managed',
    value: '2000+',
    label: 'Audience Managed',
    description:
      'Orchestrated stage flow & audience direction across 5+ divisions at Pentas Seni Akbar with zero protocol failure.',
    accent: 'blue',
    side: 'left',
  },
  {
    id: 'campers-committee',
    value: '150+',
    label: 'Campers & Committee',
    description:
      'Chief Event Director for 2-day PERJUSA overnight camp leading 20+ staff committee members seamlessly.',
    accent: 'emerald',
    side: 'left',
  },
  {
    id: 'sic-hours',
    value: '26 HRS',
    label: 'Samsung Innovation Campus',
    description:
      'Intensive training in Python programming, algorithmic data parsing (CSV, Lists, Dictionaries) and generative AI prompt pipelines.',
    accent: 'cyan',
    side: 'right',
  },
  {
    id: 'first-place-trophies',
    value: '4x',
    label: '1st Place Trophies',
    description:
      'Consecutive first-place state honors in architectural perspective drawing, wall-magazine design & creative arts (PARADISE IX & X).',
    accent: 'amber',
    side: 'right',
  },
];

export const FEATURED_PROJECTS: ProjectItem[] = [
  {
    id: 'python-genai',
    number: '01.',
    title: 'Python & Generative AI Development',
    description:
      'Building structured, clean Python programs using Lists, Dictionaries, and CSV data pipelines alongside modern Generative AI prompting workflows completed during the intensive 26-hour Samsung Innovation Campus Batch 8 (Code Kickstart Stage).',
    keywords: ['ALGORITHMIC LOGIC', 'DATA NORMALIZATION'],
    accent: 'blue',
    category: 'technical',
    cardType: 'code',
    caseStudy: {
      context:
        'Designed clean, repeatable data processing routines during Samsung Innovation Campus Batch 8 to parse applicant CSV records and feed structured outputs into Generative AI evaluation prompts.',
      role: 'Python Developer & Prompt Engineer',
      timeline: '2026 · 26-Hour Intensive Program',
      deliverables: [
        'CSV DictReader ingestion and schema validation script',
        'Structured dictionary normalization pipeline with error handling',
        'Prompt evaluation templates for automated candidate screening summaries',
      ],
      outcome: 'Completed Stage 1 (Code Kickstart) with Pass distinction and reusable Python utilities.',
      stack: ['Python 3.11', 'CSV Automation', 'Generative AI Prompting', 'Data Structures'],
    },
  },
  {
    id: 'event-stage-direction',
    number: '02.',
    title: 'Large-Scale Event & Stage Direction',
    description:
      'Serving as Secretary & Event Division lead for Pentas Seni Akbar (over 2,000 attendees across 5+ operational divisions) and Chief Event Organizer for the 2-day PERJUSA annual camp directing 150 campers and 20+ committee members.',
    keywords: ['CROWD GOVERNANCE', 'STAGE PROTOCOL'],
    accent: 'amber',
    category: 'leadership',
    cardType: 'stage',
    caseStudy: {
      context:
        'High-stakes live events require calm command chains, exact minute-by-minute run-downs, and synchronized cross-division logistics.',
      role: 'Secretary & Stage Director (Pentas Seni Akbar) · Chief Organizer (PERJUSA)',
      timeline: '2024 · Multi-Event Leadership',
      deliverables: [
        'Master stage run-down & minute-by-minute cue sheets',
        'Official institutional permits & sponsor correspondence dossiers',
        'Cross-division communication protocol across 5+ teams and 20+ camp officers',
      ],
      outcome: '100% schedule accuracy across 2,000+ live spectators and 100% safety record across 150 campers.',
      stack: ['Stage Flow Architecture', 'Run-Down Operations', 'VIP Protocol', 'Team Coordination'],
    },
  },
  {
    id: 'frontend-visual-design',
    number: '03.',
    title: 'Front-End Web & Visual Design',
    description:
      'Crafting responsive web interfaces as an Informatics Engineering undergraduate at Institut Teknologi PLN, backed by 4x 1st-place trophies in architectural perspective drawing, painting, and creative composition (PARADISE IX & X).',
    keywords: ['SPATIAL AESTHETICS', 'DESIGN FIDELITY'],
    accent: 'emerald',
    category: 'design',
    cardType: 'design',
    caseStudy: {
      context:
        'Combining technical geometric perspective training with semantic HTML5, Tailwind CSS, and React component architecture to create disciplined editorial interfaces.',
      role: 'Front-End Developer & Visual Designer',
      timeline: '2024 – Present',
      deliverables: [
        'Responsive dark-mode editorial interfaces built with semantic HTML5 & Tailwind CSS',
        'Award-winning architectural perspective drafts (Juara I PARADISE IX)',
        'Editorial wall-magazine curation and fine-art painting installations (Juara I PARADISE X)',
      ],
      outcome: '4x 1st Place trophies plus 3rd Place in PERAK 2024 regional architectural craft competition.',
      stack: ['HTML5 Semantic', 'Tailwind CSS', 'React & TypeScript', 'Perspective Drafting'],
    },
  },
  {
    id: 'organizational-mediation',
    number: '04.',
    title: 'Organizational Administration & Mediation',
    description:
      'Full-cycle secretarial governance, official proposal drafting, and empathetic interpersonal conflict mediation as General Secretary of IKSAN (2024–2025) and OSPTQ Al-Azka (2020–2023), paired with certified pedagogical teaching experience.',
    keywords: ['DIPLOMATIC RESOLUTION', 'GOVERNANCE ARCHIVE'],
    accent: 'purple',
    category: 'governance',
    cardType: 'governance',
    caseStudy: {
      context:
        'Sustained student governance over 5 years across two boarding and school organizations demanded structured record-keeping and calm conflict resolution.',
      role: 'General Secretary (IKSAN & OSPTQ Al-Azka) · Practicum Educator',
      timeline: '2020 – 2025',
      deliverables: [
        'Standardized proposal templates, official circulars, and confidential registry books',
        'Mediation sessions bridging student body grievances and faculty expectations',
        'Structured classroom lesson plans for Praktik Amaliah Tadris',
      ],
      outcome: 'Grade 86 (A-) Teaching Practicum, LDK Predikat Baik, and Tahfizh Qur’an Juz 29 & 30.',
      stack: ['Secretarial Governance', 'Conflict Mediation', 'Curriculum Drafting', 'Public Speaking'],
    },
  },
];

export const PIPELINE_SIMULATION_RECORDS = [
  { id: 'SIC-0801', candidate: 'A. A-lifia', track: 'Python & Gen AI', score: 94, status: 'VERIFIED' },
  { id: 'SIC-0802', candidate: 'R. Pratama', track: 'CSV Automation', score: 89, status: 'VERIFIED' },
  { id: 'SIC-0803', candidate: 'N. Khairunnisa', track: 'Prompt Engineering', score: 91, status: 'VERIFIED' },
  { id: 'SIC-0804', candidate: 'F. Ramadhan', track: 'Data Pipelines', score: 87, status: 'VERIFIED' },
];

export const EVENT_PROFILES = {
  pensi: {
    label: 'Pentas Seni Akbar',
    subtitle: 'Architecture · Stage Run-down',
    stats: [
      { value: '2,000+', label: 'Live Audience', tone: 'text-white' },
      { value: '5+', label: 'Divisions Led', tone: 'text-amber-300' },
      { value: '100%', label: 'Schedule Accuracy', tone: 'text-emerald-400' },
    ],
    quote:
      'Led official permits, run-down minutes, multi-division walkie coordination, and VIP protocol without a single contingency breakdown.',
  },
  perjusa: {
    label: 'PERJUSA Camp',
    subtitle: 'Operations · 48-Hr Field Protocol',
    stats: [
      { value: '150', label: 'Student Campers', tone: 'text-white' },
      { value: '20+', label: 'Staff Committee', tone: 'text-indigo-300' },
      { value: '100%', label: 'Safety Record', tone: 'text-emerald-400' },
    ],
    quote:
      'Directed 2-day overnight camp logistics, scout rotation schedules, medical readiness, and team briefings with zero safety incidents.',
  },
};

export const EDUCATION_CREDENTIALS: CredentialItem[] = [
  {
    id: 'it-pln',
    title: 'S1 Teknik Informatika',
    badge: '2026 – Present',
    badgeAccent: 'blue',
    organization: 'Institut Teknologi PLN (Jakarta)',
    description: 'Undergraduate student focusing on web engineering, algorithms & UI logic.',
    detailNote:
      'Active Informatics Engineering undergraduate combining algorithmic software foundations with structured UI craftsmanship and campus leadership.',
  },
  {
    id: 'sic-batch-8',
    title: 'Samsung Innovation Campus (SIC)',
    badge: '2026',
    badgeAccent: 'cyan',
    organization: 'Batch 8 — Stage 1: Code Kickstart Python Programming',
    description: '26 Hours of intensive Python algorithms, CSV data pipelines & Generative AI prompting.',
    detailNote:
      'Completed hands-on coding exercises in Python Lists, Dictionaries, file I/O, CSV data parsing, and structured Generative AI prompt workflows.',
  },
  {
    id: 'sma-annuqthah',
    title: 'SMA Islam An-Nuqthah',
    badge: '2026',
    badgeAccent: 'neutral',
    organization: 'Jurusan Matematika & Ilmu Pengetahuan Alam (MIPA)',
    description: 'Strong foundation in exact calculus, analytical logic & science.',
    detailNote:
      'Graduated in Mathematics & Natural Sciences while serving as General Secretary of IKSAN and leading school-wide flagship events.',
  },
  {
    id: 'smp-al-azka',
    title: "SMP Tahfizhul Qur'an Al-Azka",
    badge: '2023',
    badgeAccent: 'neutral',
    organization: 'Tahfizh & Boarding School Foundation',
    description: 'Disciplined memory retention, linguistic studies & leadership basics.',
    detailNote:
      'Served in OSPTQ Al-Azka (2020–2023) while building disciplined daily routines, Arabic/English foundations, and Quran memorization.',
  },
  {
    id: 'amaliah-tadris',
    title: 'Sertifikasi Amaliah Tadris & LDK',
    badge: 'Certified',
    badgeAccent: 'purple',
    organization: 'Nilai 86 (Predikat A-) & LDK Jenjang SMA (Predikat Baik)',
    description: 'Evaluated on classroom instruction mastery, curriculum drafting & student engagement.',
    detailNote:
      'Demonstrated formal teaching delivery, clear public speaking, lesson planning, and structured leadership under faculty evaluation.',
  },
];

export const AWARDS_HONORS: CredentialItem[] = [
  {
    id: 'paradise-ix',
    title: 'Juara I Perspektif Gedung (Penegak)',
    badge: '1st Place Trophy',
    badgeAccent: 'emerald',
    organization: 'PARADISE IX',
    description: 'Technical architectural drawing with accurate focal points and geometric lighting.',
    detailNote:
      'Won 1st Place for hand-drafted architectural building perspective demonstrating exact vanishing-point geometry and tonal depth.',
  },
  {
    id: 'paradise-x',
    title: 'Juara I Mading, Face Art & Melukis',
    badge: '1st Place Trophy',
    badgeAccent: 'emerald',
    organization: 'PARADISE X (Tingkat Penegak)',
    description: 'Triple-category champion in editorial wall magazine curation and artistic painting.',
    detailNote:
      'Swept 1st Place across three distinct creative categories—editorial layout (Mading), expressive face art, and canvas painting.',
  },
  {
    id: 'perak-2024',
    title: 'Juara III Hasta Karya Putri Tingkat SMA',
    badge: '3rd Place',
    badgeAccent: 'amber',
    organization: 'PERAK 2024',
    description: 'Regional craft and structural artifact competition for high-school level.',
    detailNote:
      'Designed and built a structural craft piece judged on functional geometry, material precision, and visual craftsmanship.',
  },
  {
    id: 'tahfizh-al-azka',
    title: "Tahfizh Qur'an Juz 29 & 30 + Surat Pilihan",
    badge: 'Completed',
    badgeAccent: 'cyan',
    organization: 'Wisuda Tahfizh Al-Azka',
    description: 'Rigorous verbal recitation, tajweed compliance & complete memorization.',
    detailNote:
      'Graduated in formal Wisuda Tahfizh examination verifying full memorization of Juz 29, Juz 30, and selected chapters with tajweed accuracy.',
  },
  {
    id: 'kwarda-banten',
    title: 'Delegasi LP-Garuda II & LP A_GANGLION VI',
    badge: 'Regional Delegate',
    badgeAccent: 'neutral',
    organization: 'Kwarda Banten & Putri Scout Contingent',
    description: 'Representative for provincial scout championship in field engineering and survival.',
    detailNote:
      'Selected to represent the school contingent at provincial-level scouting championships focusing on teamwork, pioneering, and rapid problem-solving.',
  },
];

export const CONTACT_INFO = {
  email: 'ndyasyafaa15@gmail.com',
  linkedinUrl: "https://www.linkedin.com/in/andhyni-a'syafa-a-lifia",
  linkedinLabel: "LinkedIn: Andhyni A'syafa A-lifia",
  whatsappUrl: 'https://wa.me/6281285231446',
  whatsappLabel: '+62 812-8523-1446',
  location: 'Tangerang & Jakarta, Indonesia',
};
