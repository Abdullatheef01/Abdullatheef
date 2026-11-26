/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */
import { useState } from 'react';
import { ArticleItem, ProjectCaseStudy } from './data/portfolioData';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { AboutSection } from './components/AboutSection';
import { PortfolioSection } from './components/PortfolioSection';
import { ServicesSection } from './components/ServicesSection';
import { PricingSection } from './components/PricingSection';
import { TestimonialsSection } from './components/TestimonialsSection';
import { FaqSection } from './components/FaqSection';
import { ArticlesSection } from './components/ArticlesSection';
import { FooterSection } from './components/FooterSection';
import {
  ArticleModal,
  ContactModal,
  InfoModal,
  ProjectModal,
  ResumeModal,
} from './components/Modals';

export default function App() {
  const [contactContext, setContactContext] = useState<string | null>(null);
  const [selectedProject, setSelectedProject] = useState<ProjectCaseStudy | null>(null);
  const [selectedArticle, setSelectedArticle] = useState<ArticleItem | null>(null);
  const [showResume, setShowResume] = useState(false);
  const [infoTopic, setInfoTopic] = useState<'style-guide' | 'process' | 'availability' | null>(
    null
  );

  const openContact = (context = 'General Inquiry') => {
    setContactContext(context);
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#F4F6FB] text-[#0B1226]">
      <Navbar onOpenContact={openContact} />

      <main className="flex-1">
        <HeroSection onOpenResume={() => setShowResume(true)} />
        <AboutSection onOpenContact={openContact} />
        <PortfolioSection onSelectProject={setSelectedProject} />

        {/* Deep Royal Navy Gradient Band bridging Core Services & Pricing Plans */}
        <div className="deep-navy-gradient">
          <ServicesSection onOpenContact={openContact} />
          <PricingSection />
        </div>

        <TestimonialsSection />
        <FaqSection onOpenContact={openContact} />
        <ArticlesSection onSelectArticle={setSelectedArticle} />
      </main>

      <FooterSection onOpenContact={openContact} onOpenInfoModal={setInfoTopic} />

      {/* Interactive Modals */}
      {contactContext !== null && (
        <ContactModal context={contactContext} onClose={() => setContactContext(null)} />
      )}

      {selectedProject && (
        <ProjectModal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
          onStartSimilar={(ctx) => {
            setSelectedProject(null);
            openContact(ctx);
          }}
        />
      )}

      {selectedArticle && (
        <ArticleModal
          article={selectedArticle}
          onClose={() => setSelectedArticle(null)}
        />
      )}

      {infoTopic && (
        <InfoModal
          topic={infoTopic}
          onClose={() => setInfoTopic(null)}
          onOpenContact={openContact}
        />
      )}

      {showResume && <ResumeModal onClose={() => setShowResume(false)} />}
    </div>
  );
}
