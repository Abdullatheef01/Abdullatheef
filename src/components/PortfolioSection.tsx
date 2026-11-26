import { useState } from 'react';
import { ArrowRight, Briefcase, ChevronDown, ChevronUp } from 'lucide-react';
import { PROJECTS, ProjectCaseStudy } from '../data/portfolioData';
import { SmartImage } from './SmartImage';

interface PortfolioSectionProps {
  onSelectProject: (project: ProjectCaseStudy) => void;
}

const CATEGORIES = ['All', 'Web Experience', 'Graphic Design', 'Other Works'] as const;
const INITIAL_VISIBLE_COUNT = 2;

export function PortfolioSection({ onSelectProject }: PortfolioSectionProps) {
  const [activeCategory, setActiveCategory] = useState<(typeof CATEGORIES)[number]>('All');
  const [showAll, setShowAll] = useState(false);

  const filteredProjects =
    activeCategory === 'All'
      ? PROJECTS
      : PROJECTS.filter((project) => project.category === activeCategory);

  const visibleProjects = showAll
    ? filteredProjects
    : filteredProjects.slice(0, INITIAL_VISIBLE_COUNT);
  const hasMoreProjects = filteredProjects.length > INITIAL_VISIBLE_COUNT;

  return (
    <section id="works" className="pt-8 pb-20 sm:pb-28 bg-[#F4F6FB]">
      <div className="max-w-[1240px] mx-auto px-4 sm:px-8">
        {/* Centered Header */}
        <div className="text-center max-w-xl mx-auto">
          <div className="inline-flex items-center justify-center gap-2 text-[13px] font-medium text-[#3B4664] mb-3">
            <Briefcase className="w-4 h-4 text-[#2557F6]" aria-hidden="true" />
            <span>My Portfolio</span>
          </div>
          <h2 className="font-display text-[clamp(1.85rem,3.4vw,2.75rem)] font-semibold tracking-tight text-[#0A0F1F] leading-[1.15] text-balance">
            Projects I&apos;ve Built &amp; Developed
          </h2>

          {/* Interactive Category Filter */}
          <div
            role="tablist"
            aria-label="Filter projects by discipline"
            className="mt-7 inline-flex items-center justify-center gap-0.5 sm:gap-1 p-1 sm:p-1.5 max-w-full overflow-x-auto [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden rounded-full bg-[#E7ECF6] border border-[#0B1226]/6"
          >
            {CATEGORIES.map((category) => {
              const isActive = activeCategory === category;
              return (
                <button
                  key={category}
                  type="button"
                  role="tab"
                  aria-selected={isActive}
                  onClick={() => {
                    setActiveCategory(category);
                    setShowAll(false);
                  }}
                  className={`px-2.5 sm:px-4 py-1.5 rounded-full text-[11px] sm:text-[13px] font-medium transition-colors duration-150 whitespace-nowrap shrink-0 cursor-pointer ${
                    isActive
                      ? 'bg-[#0A0F1F] text-white shadow-xs'
                      : 'text-[#46516E] hover:text-[#0A0F1F]'
                  }`}
                >
                  {category}
                </button>
              );
            })}
          </div>
        </div>

        {/* Showcase Cards */}
        <div className="mt-10 sm:mt-12 space-y-6">
          {visibleProjects.map((project) => (
            <article
              key={project.id}
              className="group rounded-3xl bg-[#FFFFFF] border border-[#0B1226]/6 p-6 sm:p-8 lg:p-10 shadow-[0_14px_40px_rgba(11,18,38,0.04)] transition-transform duration-200 hover:-translate-y-0.5"
            >
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
                {/* Left Copy */}
                <div className="lg:col-span-6 flex flex-col justify-start">
                  <div>
                    <div className="flex items-center gap-2 text-[12px] font-medium text-[#5A6582] mb-2">
                      <span>{project.displayCategory ?? project.category}</span>
                      <span aria-hidden="true">·</span>
                      <span>{project.client}</span>
                      <span aria-hidden="true">·</span>
                      <span className="tabular-nums">{project.year}</span>
                    </div>
                    <h3
                      onClick={() => onSelectProject(project)}
                      className="font-display text-2xl sm:text-[28px] font-semibold tracking-tight text-[#0A0F1F] cursor-pointer hover:text-[#2557F6] transition-colors"
                    >
                      {project.title}
                    </h3>
                  </div>

                  <div className="mt-5 lg:mt-6">
                    <p
                      onClick={() => onSelectProject(project)}
                      className="text-[14px] sm:text-[14.5px] leading-relaxed text-[#46516E] max-w-lg cursor-pointer sm:cursor-default"
                    >
                      {project.summary}
                    </p>

                    {project.features && project.features.length > 0 && (
                      <div className="mt-4 max-w-lg hidden sm:block">
                        <h4 className="text-[13px] font-semibold text-[#0A0F1F]">
                          Key features
                        </h4>
                        <ul className="mt-1.5 space-y-1 text-[12.5px] sm:text-[13px] leading-relaxed text-[#46516E] list-disc pl-4">
                          {project.features.map((feature) => (
                            <li key={feature}>{feature}</li>
                          ))}
                        </ul>
                      </div>
                    )}

                    {project.techStack && project.techStack.length > 0 && (
                      <div className="mt-4 flex flex-wrap gap-2 max-w-lg" aria-label="Tech stack">
                        {project.techStack.map((tech) => (
                          <span
                            key={tech}
                            className="px-3 py-1 rounded-full bg-[#EDF2FE] border border-[#2557F6]/20 text-[#1A44D4] text-[12px] font-medium whitespace-nowrap"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    )}

                    <div className="mt-6 flex flex-wrap items-center gap-3">
                      {project.liveUrl ? (
                        <a
                          href={project.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2.5 pl-5 pr-1.5 py-1.5 rounded-full bg-[#0A0F1F] text-white text-[13px] font-medium hover:bg-[#2557F6] transition-colors duration-150 whitespace-nowrap"
                        >
                          <span>{project.ctaLabel ?? 'Explore Project'}</span>
                          <span className="w-7 h-7 rounded-full bg-white text-[#0A0F1F] inline-flex items-center justify-center">
                            <ArrowRight className="w-3.5 h-3.5" aria-hidden="true" />
                          </span>
                        </a>
                      ) : (
                        <button
                          type="button"
                          onClick={() => onSelectProject(project)}
                          className="inline-flex items-center gap-2.5 pl-5 pr-1.5 py-1.5 rounded-full bg-[#0A0F1F] text-white text-[13px] font-medium hover:bg-[#2557F6] transition-colors duration-150 cursor-pointer whitespace-nowrap"
                        >
                          <span>{project.ctaLabel ?? 'Explore Project'}</span>
                          <span className="w-7 h-7 rounded-full bg-white text-[#0A0F1F] inline-flex items-center justify-center">
                            <ArrowRight className="w-3.5 h-3.5" aria-hidden="true" />
                          </span>
                        </button>
                      )}

                      {project.githubUrl && (
                        <a
                          href={project.githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          aria-label={`View ${project.title} on GitHub`}
                          className="w-10 h-10 rounded-full bg-[#EDF2FE] border border-[#2557F6]/20 text-[#0A0F1F] hover:bg-[#0A0F1F] hover:text-white hover:border-[#0A0F1F] transition-colors duration-150 inline-flex items-center justify-center shrink-0"
                        >
                          <svg
                            width="18"
                            height="18"
                            viewBox="0 0 24 24"
                            fill="currentColor"
                            aria-hidden="true"
                          >
                            <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
                          </svg>
                        </a>
                      )}

                      {project.youtubeUrl && (
                        <a
                          href={project.youtubeUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          aria-label={`View ${project.title} on YouTube`}
                          className="w-10 h-10 rounded-full bg-[#EDF2FE] border border-[#2557F6]/20 text-[#0A0F1F] hover:bg-[#0A0F1F] hover:text-white hover:border-[#0A0F1F] transition-colors duration-150 inline-flex items-center justify-center shrink-0"
                        >
                          <svg
                            width="18"
                            height="18"
                            viewBox="0 0 24 24"
                            fill="currentColor"
                            aria-hidden="true"
                          >
                            <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                          </svg>
                        </a>
                      )}

                      {project.linkedinUrl && (
                        <a
                          href={project.linkedinUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          aria-label={`View ${project.title} on LinkedIn`}
                          className="w-10 h-10 rounded-full bg-[#EDF2FE] border border-[#2557F6]/20 text-[#0A0F1F] hover:bg-[#0A0F1F] hover:text-white hover:border-[#0A0F1F] transition-colors duration-150 inline-flex items-center justify-center shrink-0"
                        >
                          <svg
                            width="17"
                            height="17"
                            viewBox="0 0 24 24"
                            fill="currentColor"
                            aria-hidden="true"
                          >
                            <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                          </svg>
                        </a>
                      )}

                      {project.telegramUrl && (
                        <a
                          href={project.telegramUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          aria-label={`Open ${project.title} Telegram channel`}
                          className="w-10 h-10 rounded-full bg-[#EDF2FE] border border-[#2557F6]/20 text-[#0A0F1F] hover:bg-[#0A0F1F] hover:text-white hover:border-[#0A0F1F] transition-colors duration-150 inline-flex items-center justify-center shrink-0"
                        >
                          <svg
                            width="18"
                            height="18"
                            viewBox="0 0 24 24"
                            fill="currentColor"
                            aria-hidden="true"
                          >
                            <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z" />
                          </svg>
                        </a>
                      )}
                    </div>
                  </div>
                </div>

                {/* Right Index + Showcase Mockup */}
                <div className="lg:col-span-6 flex flex-col justify-between gap-4">
                  <div className="hidden lg:flex justify-end">
                    <span className="font-display text-5xl font-semibold text-[#E5EAF4] tracking-tight tabular-nums select-none">
                      {project.index}
                    </span>
                  </div>

                  <button
                    type="button"
                    onClick={() => onSelectProject(project)}
                    aria-label={`View case study for ${project.title}`}
                    className="block w-full aspect-[4/3] rounded-2xl overflow-hidden bg-[#1D3FAD] border border-[#0B1226]/8 cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#2557F6]"
                  >
                    <SmartImage
                      src={project.image}
                      alt={project.imageAlt}
                      fallbackTitle={project.title}
                      className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-[1.02]"
                    />
                  </button>
                </div>
              </div>
            </article>
          ))}
        </div>

        {hasMoreProjects && (
          <div className="mt-10 flex justify-center">
            <button
              type="button"
              onClick={() => setShowAll((prev) => !prev)}
              aria-expanded={showAll}
              className="inline-flex items-center gap-2.5 pl-6 pr-2 py-2 rounded-full bg-[#0A0F1F] text-white text-[13.5px] font-medium hover:bg-[#2557F6] transition-colors duration-150 cursor-pointer whitespace-nowrap shadow-[0_10px_28px_rgba(11,18,38,0.12)]"
            >
              <span>{showAll ? 'Show Less Projects' : 'See More Projects'}</span>
              <span className="w-8 h-8 rounded-full bg-white text-[#0A0F1F] inline-flex items-center justify-center">
                {showAll ? (
                  <ChevronUp className="w-4 h-4" aria-hidden="true" />
                ) : (
                  <ChevronDown className="w-4 h-4" aria-hidden="true" />
                )}
              </span>
            </button>
          </div>
        )}
      </div>
    </section>
  );
}
