import { ArrowUpRight, Compass, GitPullRequest } from 'lucide-react';
import { PORTFOLIO_OWNER } from '../data/portfolioData';
import { SmartImage } from './SmartImage';

interface AboutSectionProps {
  onOpenContact: (context?: string) => void;
}

const TECHNICAL_SKILLS = [
  'Mern Stack',
  'Graphic Design',
  'Video Editing',
  'DevOps Fundamentals',
];

const CONTRIBUTOR_AVATARS = [
  {
    src: '/assets/aistudio/191744058_6a34300c.png',
    alt: 'Open source collaborator avatar 1',
    posClass: 'top-0 right-4 w-9 h-9 z-10',
  },
  {
    src: '/assets/aistudio/208829425_23203523.jpg',
    alt: 'Open source collaborator avatar 2',
    posClass: 'top-3.5 left-4 w-10 h-10 z-20',
  },
  {
    src: '/assets/aistudio/image_5e0d9eb3.png',
    alt: 'Open source collaborator avatar 3',
    posClass: 'top-10 right-0 w-9 h-9 z-20',
  },
  {
    src: '/assets/aistudio/240290321_bd3f0dd6.png',
    alt: 'Open source collaborator avatar 4',
    posClass: 'bottom-1.5 left-[58px] w-7 h-7 z-30',
  },
  {
    src: '/assets/aistudio/image_630515fb.png',
    alt: 'Open source collaborator avatar 5',
    posClass: 'bottom-0 left-0 w-6 h-6 z-10',
  },
];

export function AboutSection({ onOpenContact }: AboutSectionProps) {
  return (
    <section id="about" className="py-16 sm:py-24 bg-[#F4F6FB]">
      <div className="max-w-[1240px] mx-auto px-4 sm:px-8">
        {/* Top Row: About Me Kicker Left + Editorial Statement Right */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-10 items-start mb-8 sm:mb-10">
          <div className="lg:col-span-5">
            <div className="inline-flex items-center gap-2 text-[13px] font-medium text-[#3B4664]">
              <Compass className="w-4 h-4 text-[#2557F6]" aria-hidden="true" />
              <span>About Me</span>
            </div>
          </div>

          <div className="lg:col-span-7">
            <h2 className="font-display text-[clamp(1.75rem,3.1vw,2.5rem)] font-semibold tracking-tight text-[#0A0F1F] leading-[1.16] text-balance max-w-2xl">
              I build modern web applications with seamless user experiences.
            </h2>
          </div>
        </div>

        {/* Bottom Row: Soft-Faded Portrait Left + Bio, CTA & 2x2 White Bento Cards Right */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center">
          {/* Left Portrait Frame */}
          <div className="lg:col-span-5 w-full max-w-[390px] mx-auto lg:max-w-none">
            <div className="relative aspect-[4/5] w-full rounded-2xl overflow-hidden bg-[#E9EEF8]">
              <SmartImage
                src={PORTFOLIO_OWNER.aboutPortrait}
                alt={`${PORTFOLIO_OWNER.fullName} portrait on soft cool-blue studio background`}
                fallbackTitle={PORTFOLIO_OWNER.fullName}
                className="w-full h-full object-cover object-top"
              />
              <div
                aria-hidden="true"
                className="pointer-events-none absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-[#F4F6FB] via-[#F4F6FB]/75 to-transparent"
              />
              <div
                aria-hidden="true"
                className="pointer-events-none absolute inset-y-0 left-0 w-4 bg-gradient-to-r from-[#F4F6FB]/50 to-transparent"
              />
              <div
                aria-hidden="true"
                className="pointer-events-none absolute inset-y-0 right-0 w-4 bg-gradient-to-l from-[#F4F6FB]/50 to-transparent"
              />
            </div>
          </div>

          {/* Right Column: Bio + CTA + 2x2 White Bento Grid */}
          <div className="lg:col-span-7 flex flex-col gap-6">
            <div>
              <p className="text-[14px] sm:text-[14.5px] leading-relaxed text-[#46516E]">
                I am a Computer Science and Engineering student passionate about full-stack web development. I enjoy building modern, responsive applications using the MERN stack and exploring practical AI integration. I also have a foundation in DevOps practices and an interest in graphic design, combining technical skills with creativity to build effective digital experiences. Through personal projects and open-source contributions, I continuously strive to expand my knowledge and improve my development skills.
              </p>

              <div className="mt-5 flex flex-wrap items-center gap-3">
                <button
                  type="button"
                  onClick={() => onOpenContact('About Section Inquiry')}
                  className="inline-flex items-center gap-2.5 px-5 py-2.5 rounded-full bg-[#3559d1] text-white text-sm font-medium hover:bg-[#1A44D4] transition-colors duration-150 shadow-[0_10px_24px_rgba(37,87,246,0.26)] cursor-pointer whitespace-nowrap focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#2557F6]"
                >
                  <span>Get In Touch</span>
                  <ArrowUpRight className="w-4 h-4" aria-hidden="true" />
                </button>

                <div className="flex flex-wrap items-center gap-2" aria-label="Social links">
                  <a
                    href="https://www.linkedin.com/in/abdul-latheef-j-5576752b9/"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="LinkedIn profile"
                    title="LinkedIn"
                    className="w-9 h-9 rounded-full bg-white border border-[#0B1226]/10 text-[#0A0F1F] hover:bg-[#0A0F1F] hover:text-white hover:border-[#0A0F1F] shadow-[0_4px_12px_rgba(11,18,38,0.04)] transition-colors duration-150 inline-flex items-center justify-center shrink-0"
                  >
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                    </svg>
                  </a>

                  <a
                    href="https://github.com/Abdullatheef01"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="GitHub profile"
                    title="GitHub"
                    className="w-9 h-9 rounded-full bg-white border border-[#0B1226]/10 text-[#0A0F1F] hover:bg-[#0A0F1F] hover:text-white hover:border-[#0A0F1F] shadow-[0_4px_12px_rgba(11,18,38,0.04)] transition-colors duration-150 inline-flex items-center justify-center shrink-0"
                  >
                    <svg width="17" height="17" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                      <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
                    </svg>
                  </a>

                  <a
                    href="https://www.youtube.com/@CodewithAbdulofficial"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="YouTube channel"
                    title="YouTube"
                    className="w-9 h-9 rounded-full bg-white border border-[#0B1226]/10 text-[#0A0F1F] hover:bg-[#0A0F1F] hover:text-white hover:border-[#0A0F1F] shadow-[0_4px_12px_rgba(11,18,38,0.04)] transition-colors duration-150 inline-flex items-center justify-center shrink-0"
                  >
                    <svg width="17" height="17" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                      <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                    </svg>
                  </a>

                  <a
                    href="https://www.reddit.com/user/lcy_lemon/"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Reddit profile"
                    title="Reddit"
                    className="w-9 h-9 rounded-full bg-white border border-[#0B1226]/10 text-[#0A0F1F] hover:bg-[#0A0F1F] hover:text-white hover:border-[#0A0F1F] shadow-[0_4px_12px_rgba(11,18,38,0.04)] transition-colors duration-150 inline-flex items-center justify-center shrink-0"
                  >
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                      <path d="M12 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0zm5.01 4.744c.688 0 1.25.561 1.25 1.249a1.25 1.25 0 0 1-2.498.056l-2.597-.547-.8 3.747c1.824.07 3.48.632 4.674 1.488.308-.309.73-.491 1.207-.491.968 0 1.754.786 1.754 1.754 0 .716-.435 1.333-1.01 1.614a3.111 3.111 0 0 1 .042.52c0 2.694-3.13 4.87-7.004 4.87-3.874 0-7.004-2.176-7.004-4.87 0-.183.015-.366.043-.534A1.748 1.748 0 0 1 4.028 12c0-.968.786-1.754 1.754-1.754.463 0 .898.196 1.207.49 1.207-.883 2.878-1.43 4.744-1.487l.885-4.182a.342.342 0 0 1 .14-.197.35.35 0 0 1 .238-.042l2.906.617a1.214 1.214 0 0 1 1.108-.701zM9.25 12C8.561 12 8 12.562 8 13.25c0 .687.561 1.248 1.25 1.248.687 0 1.248-.561 1.248-1.249 0-.688-.561-1.249-1.249-1.249zm5.5 0c-.687 0-1.248.561-1.248 1.25 0 .687.561 1.248 1.249 1.248.688 0 1.249-.561 1.249-1.249 0-.687-.562-1.249-1.25-1.249zm-5.466 3.99a.327.327 0 0 0-.231.094.33.33 0 0 0 0 .463c.842.842 2.484.913 2.961.913.477 0 2.105-.056 2.961-.913a.361.361 0 0 0 .029-.463.33.33 0 0 0-.464 0c-.547.533-1.684.73-2.512.73-.828 0-1.979-.196-2.512-.73a.326.326 0 0 0-.232-.095z" />
                    </svg>
                  </a>

                  <a
                    href="https://www.instagram.com/mr_abdul._04/"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Instagram profile"
                    title="Instagram"
                    className="w-9 h-9 rounded-full bg-white border border-[#0B1226]/10 text-[#0A0F1F] hover:bg-[#0A0F1F] hover:text-white hover:border-[#0A0F1F] shadow-[0_4px_12px_rgba(11,18,38,0.04)] transition-colors duration-150 inline-flex items-center justify-center shrink-0"
                  >
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
              {/* Card 1 */}
              <div className="rounded-2xl bg-white border border-[#0B1226]/5 shadow-[0_8px_24px_rgba(11,18,38,0.03)] p-4 sm:p-5 flex items-center justify-between gap-3">
                <span className="text-[13px] leading-snug text-[#46516E] font-medium max-w-[170px]">
                  Bachelor’s Degree in Computer Science and Engineering
                </span>
                <span className="font-display text-xl sm:text-2xl font-semibold text-[#0A0F1F] tabular-nums whitespace-nowrap shrink-0">
                  4 Years
                </span>
              </div>

              {/* Card 2 */}
              <div className="rounded-2xl bg-white border border-[#0B1226]/5 shadow-[0_8px_24px_rgba(11,18,38,0.03)] p-4 sm:p-5 flex items-center justify-between gap-4">
                <span className="text-[13px] leading-snug text-[#46516E] font-medium max-w-[150px]">
                  Project Works &amp; Designs
                </span>
                <span className="font-display text-2xl sm:text-3xl font-semibold text-[#0A0F1F] tabular-nums shrink-0">
                  4+
                </span>
              </div>

              {/* Card 3: Open Source Contribution */}
              <div className="rounded-2xl bg-white border border-[#0B1226]/5 shadow-[0_8px_24px_rgba(11,18,38,0.03)] p-5 flex flex-col justify-between min-h-[165px]">
                <div>
                  <div className="font-display text-xl sm:text-[22px] font-semibold text-[#0A0F1F] leading-tight tabular-nums">
                    10+ Contributions
                  </div>
                  <p className="text-[13.5px] font-medium text-[#46516E] mt-1">
                    Open Source Contribution
                  </p>
                  <p className="mt-2 text-[12px] leading-relaxed text-[#56617F]">
                    Contributed to 10+ open-source repositories through issues and pull requests.
                  </p>
                </div>

                <div className="mt-4 flex items-end justify-between gap-2">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-[#F4F6FB] text-[#0A0F1F] text-[12px] font-medium whitespace-nowrap">
                    <GitPullRequest className="w-3.5 h-3.5 text-[#2557F6]" aria-hidden="true" />
                    <span>Issues &amp; PRs</span>
                  </span>

                  <div
                    className="relative w-[132px] h-[92px] shrink-0"
                    aria-label="Open source collaborators"
                  >
                    {CONTRIBUTOR_AVATARS.map((avatar) => (
                      <img
                        key={avatar.src}
                        src={avatar.src}
                        alt={avatar.alt}
                        loading="lazy"
                        className={`absolute rounded-full object-cover ring-2 ring-white shadow-sm bg-white ${avatar.posClass}`}
                      />
                    ))}
                  </div>
                </div>
              </div>

              {/* Card 4: Technical Skills */}
              <div className="rounded-2xl bg-white border border-[#0B1226]/5 shadow-[0_8px_24px_rgba(11,18,38,0.03)] p-5 flex flex-col justify-between min-h-[165px]">
                <div>
                  <h3 className="font-display text-[16px] font-semibold text-[#0A0F1F] leading-snug">
                    Technical Skills
                  </h3>
                  <p className="mt-1 text-[12px] leading-relaxed text-[#56617F]">
                    The technologies and tools I use to design, develop, and build digital solutions.
                  </p>
                </div>

                <div className="mt-4 flex flex-wrap gap-1.5">
                  {TECHNICAL_SKILLS.map((skill) => (
                    <a
                      key={skill}
                      href="#services"
                      className="px-3 py-1.5 rounded-full bg-[#EFF2F7] text-[#37415A] text-[12px] font-medium hover:bg-[#E4E9F5] hover:text-[#0A0F1F] transition-colors duration-150 whitespace-nowrap"
                    >
                      {skill}
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
