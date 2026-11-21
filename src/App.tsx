import { useCallback, useEffect, useState } from 'react';
import ContactFooter from './components/ContactFooter';
import CredentialsSection from './components/CredentialsSection';
import FeaturedProjectsSection from './components/FeaturedProjectsSection';
import HeroSection from './components/HeroSection';
import InquiryModal from './components/InquiryModal';
import Navbar from './components/Navbar';
import ProjectDetailModal, { type DetailModalContent } from './components/ProjectDetailModal';
import WhyMeSection from './components/WhyMeSection';
import type { ProjectItem, RibbonCardItem } from './data/portfolioData';

const SECTION_IDS = ['about', 'whyme', 'projects', 'credentials', 'contact'] as const;

export default function App() {
  const [activeSection, setActiveSection] = useState<string>('about');
  const [detailModal, setDetailModal] = useState<DetailModalContent | null>(null);
  const [inquiryOpen, setInquiryOpen] = useState(false);
  const [copiedField, setCopiedField] = useState<string | null>(null);
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  // Scroll-spy to highlight active navigation section
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 180;
      let current: string = 'about';
      for (const id of SECTION_IDS) {
        const el = document.getElementById(id);
        if (el && el.offsetTop <= scrollPosition) {
          current = id;
        }
      }
      setActiveSection(current);
    };

    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = useCallback((sectionId: string) => {
    const target = document.getElementById(sectionId);
    if (!target) return;
    const headerOffset = 80;
    const top = target.getBoundingClientRect().top + window.scrollY - headerOffset;
    window.scrollTo({ top: Math.max(0, top), behavior: 'smooth' });
  }, []);

  const showToast = useCallback((message: string) => {
    setToastMessage(message);
    window.setTimeout(() => {
      setToastMessage((prev) => (prev === message ? null : prev));
    }, 2400);
  }, []);

  const handleCopyText = useCallback(
    async (field: string, value: string) => {
      try {
        await navigator.clipboard.writeText(value);
        setCopiedField(field);
        showToast(field === 'email' ? 'Email copied to clipboard' : 'Copied to clipboard');
        window.setTimeout(() => {
          setCopiedField((prev) => (prev === field ? null : prev));
        }, 2000);
      } catch {
        showToast('Unable to copy automatically — please select manually');
      }
    },
    [showToast],
  );

  const handleSelectRibbonCard = useCallback((item: RibbonCardItem) => {
    setDetailModal({ kind: 'ribbon', data: item });
  }, []);

  const handleSelectProject = useCallback((project: ProjectItem) => {
    setDetailModal({ kind: 'project', data: project });
  }, []);

  return (
    <div className="min-h-screen bg-[#080808] text-white relative selection:bg-blue-900 selection:text-white">
      {/* Ambient Perspective Grid & Royal Navy Spotlight */}
      <div
        aria-hidden="true"
        className="fixed inset-0 bg-perspective-grid pointer-events-none z-0"
      />
      <div
        aria-hidden="true"
        className="fixed top-0 left-1/2 -translate-x-1/2 w-[800px] h-[450px] bg-blue-600/10 rounded-full blur-[140px] pointer-events-none z-0"
      />

      {/* Fixed Navigation Header */}
      <Navbar
        activeSection={activeSection}
        onNavigate={scrollToSection}
        onOpenInquiry={() => setInquiryOpen(true)}
      />

      {/* Main Content */}
      <main className="relative z-10">
        <HeroSection
          onSelectRibbonCard={handleSelectRibbonCard}
          onBeginProject={() => setInquiryOpen(true)}
        />

        <WhyMeSection />

        <FeaturedProjectsSection onSelectProject={handleSelectProject} />

        <CredentialsSection />
      </main>

      {/* Minimalist Obsidian Footer & Direct Contact */}
      <ContactFooter
        copiedField={copiedField}
        onCopyText={handleCopyText}
        onOpenInquiry={() => setInquiryOpen(true)}
      />

      {/* Case Study / Ribbon Card Detail Modal */}
      <ProjectDetailModal
        content={detailModal}
        onClose={() => setDetailModal(null)}
        onStartInquiry={() => setInquiryOpen(true)}
      />

      {/* Direct Collaboration Brief Modal */}
      <InquiryModal
        open={inquiryOpen}
        onClose={() => setInquiryOpen(false)}
        onCopyBrief={(brief) => handleCopyText('brief', brief)}
      />

      {/* Subtle Copy Confirmation Toast */}
      {toastMessage && (
        <div
          role="status"
          aria-live="polite"
          className="fixed bottom-6 right-6 z-[80] px-4 py-2.5 rounded-full bg-[#121622] border border-blue-400/30 text-xs font-mono text-white shadow-xl"
        >
          {toastMessage}
        </div>
      )}
    </div>
  );
}
