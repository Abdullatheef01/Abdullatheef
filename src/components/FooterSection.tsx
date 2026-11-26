import {
  ArrowRight,
  BookText,
  Briefcase,
  Code2,
  Github,
  Home,
  Linkedin,
  Mail,
  Youtube,
} from 'lucide-react';
import { PORTFOLIO_OWNER } from '../data/portfolioData';

interface FooterSectionProps {
  onOpenContact: (context?: string) => void;
  onOpenInfoModal: (topic: 'style-guide' | 'process' | 'availability') => void;
}

const FOOTER_TILES = [
  { label: 'Home', href: '#home', icon: Home, active: true },
  { label: 'Skills', href: '#services', icon: Code2, active: false },
  { label: 'Portfolio', href: '#works', icon: Briefcase, active: false },
  { label: 'Certifications', href: '#articles', icon: BookText, active: false },
];

export function FooterSection({ onOpenContact, onOpenInfoModal }: FooterSectionProps) {
  return (
    <footer className="footer-navy-gradient text-white pt-16 sm:pt-20 pb-8">
      <div className="max-w-[1240px] mx-auto px-4 sm:px-8">
        {/* Top CTA Block */}
        <div className="max-w-md">
          <h2 className="font-display text-3xl sm:text-4xl font-semibold tracking-tight leading-[1.12] text-balance">
            Ready To Start Something Great?
          </h2>
          <button
            type="button"
            onClick={() => onOpenContact('Book a Discovery Call')}
            className="mt-6 inline-flex items-center gap-2.5 pl-5 pr-1.5 py-1.5 rounded-full bg-white text-[#0A0F1F] text-[13px] font-medium hover:bg-[#E7EEFF] transition-colors duration-150 cursor-pointer whitespace-nowrap"
          >
            <span>Book a Call</span>
            <span className="w-7 h-7 rounded-full bg-[#0A0F1F] text-white inline-flex items-center justify-center">
              <ArrowRight className="w-3.5 h-3.5" aria-hidden="true" />
            </span>
          </button>
        </div>

        {/* 4-Column Navigation Tiles */}
        <div className="mt-12 grid grid-cols-2 lg:grid-cols-4 gap-4">
          {FOOTER_TILES.map((tile) => {
            const Icon = tile.icon;
            return (
              <a
                key={tile.label}
                href={tile.href}
                className={`rounded-2xl p-6 flex flex-col justify-between min-h-[116px] transition-transform duration-150 hover:-translate-y-0.5 ${
                  tile.active
                    ? 'bg-white text-[#0A0F1F]'
                    : 'bg-white/6 text-white border border-white/14 hover:bg-white/12'
                }`}
              >
                <Icon
                  className={`w-5 h-5 ${tile.active ? 'text-[#0A0F1F]' : 'text-[#A9C0FF]'}`}
                  aria-hidden="true"
                />
                <span className="font-display text-[17px] font-semibold mt-4">
                  {tile.label}
                </span>
              </a>
            );
          })}
        </div>

        {/* Bottom Copyright & Utility Links */}
        <div className="mt-12 pt-6 border-t border-white/12 flex flex-row items-center justify-between gap-2 sm:gap-6 text-[10px] sm:text-[13px] text-[#C4D2F9]">
          <p className="shrink-0">
            Designed &amp; Developed By{' '}
            <span className="text-white font-medium">{PORTFOLIO_OWNER.fullName}</span>
          </p>

          {/* Social & Direct Links */}
          <div className="flex items-center gap-1 sm:gap-2.5 shrink-0">
            <a
              href={`mailto:${PORTFOLIO_OWNER.email}`}
              aria-label={`Email ${PORTFOLIO_OWNER.fullName}`}
              title="Email"
              className="w-6 h-6 sm:w-8 sm:h-8 rounded-full bg-white text-[#0A0F1F] inline-flex items-center justify-center hover:bg-[#DCE5FC] transition-colors"
            >
              <Mail className="w-3 h-3 sm:w-4 sm:h-4" aria-hidden="true" />
            </a>
            <a
              href="https://github.com/Abdullatheef01"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub profile"
              title="GitHub"
              className="w-6 h-6 sm:w-8 sm:h-8 rounded-full bg-white text-[#0A0F1F] inline-flex items-center justify-center hover:bg-[#DCE5FC] transition-colors"
            >
              <Github className="w-3 h-3 sm:w-4 sm:h-4" aria-hidden="true" />
            </a>
            <a
              href="https://www.youtube.com/@CodewithAbdulofficial"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="YouTube channel"
              title="YouTube"
              className="w-6 h-6 sm:w-8 sm:h-8 rounded-full bg-white text-[#0A0F1F] inline-flex items-center justify-center hover:bg-[#DCE5FC] transition-colors"
            >
              <Youtube className="w-3 h-3 sm:w-4 sm:h-4" aria-hidden="true" />
            </a>
            <a
              href="https://www.reddit.com/user/lcy_lemon/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Reddit profile"
              title="Reddit"
              className="w-6 h-6 sm:w-8 sm:h-8 rounded-full bg-white text-[#0A0F1F] inline-flex items-center justify-center hover:bg-[#DCE5FC] transition-colors"
            >
              <svg width="12" height="12" className="sm:w-[15px] sm:h-[15px]" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path d="M12 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0zm5.01 4.744c.688 0 1.25.561 1.25 1.249a1.25 1.25 0 0 1-2.498.056l-2.597-.547-.8 3.747c1.824.07 3.48.632 4.674 1.488.308-.309.73-.491 1.207-.491.968 0 1.754.786 1.754 1.754 0 .716-.435 1.333-1.01 1.614a3.111 3.111 0 0 1 .042.52c0 2.694-3.13 4.87-7.004 4.87-3.874 0-7.004-2.176-7.004-4.87 0-.183.015-.366.043-.534A1.748 1.748 0 0 1 4.028 12c0-.968.786-1.754 1.754-1.754.463 0 .898.196 1.207.49 1.207-.883 2.878-1.43 4.744-1.487l.885-4.182a.342.342 0 0 1 .14-.197.35.35 0 0 1 .238-.042l2.906.617a1.214 1.214 0 0 1 1.108-.701zM9.25 12C8.561 12 8 12.562 8 13.25c0 .687.561 1.248 1.25 1.248.687 0 1.248-.561 1.248-1.249 0-.688-.561-1.249-1.249-1.249zm5.5 0c-.687 0-1.248.561-1.248 1.25 0 .687.561 1.248 1.249 1.248.688 0 1.249-.561 1.249-1.249 0-.687-.562-1.249-1.25-1.249zm-5.466 3.99a.327.327 0 0 0-.231.094.33.33 0 0 0 0 .463c.842.842 2.484.913 2.961.913.477 0 2.105-.056 2.961-.913a.361.361 0 0 0 .029-.463.33.33 0 0 0-.464 0c-.547.533-1.684.73-2.512.73-.828 0-1.979-.196-2.512-.73a.326.326 0 0 0-.232-.095z" />
              </svg>
            </a>
            <a
              href="https://www.linkedin.com/in/abdul-latheef-j-5576752b9/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn profile"
              title="LinkedIn"
              className="w-6 h-6 sm:w-8 sm:h-8 rounded-full bg-white text-[#0A0F1F] inline-flex items-center justify-center hover:bg-[#DCE5FC] transition-colors"
            >
              <Linkedin className="w-3 h-3 sm:w-4 sm:h-4" aria-hidden="true" />
            </a>
            <button
              type="button"
              onClick={() => onOpenContact('Direct Message')}
              aria-label="Send direct message"
              className="px-2 sm:px-3.5 h-6 sm:h-8 rounded-full bg-white/12 text-white border border-white/15 text-[9px] sm:text-xs font-medium hover:bg-white hover:text-[#0A0F1F] transition-colors cursor-pointer whitespace-nowrap hidden md:inline-block"
            >
              {PORTFOLIO_OWNER.email}
            </button>
          </div>

          <div className="hidden xl:flex items-center gap-5 shrink-0">
            <a
              href="#home"
              className="hover:text-white transition-colors cursor-pointer whitespace-nowrap"
            >
              Home
            </a>
            <a
              href="#about"
              className="hover:text-white transition-colors cursor-pointer whitespace-nowrap"
            >
              About
            </a>
            <a
              href="#services"
              className="hover:text-white transition-colors cursor-pointer whitespace-nowrap"
            >
              Skills
            </a>
            <a
              href="#works"
              className="hover:text-white transition-colors cursor-pointer whitespace-nowrap"
            >
              Works
            </a>
            <a
              href="#articles"
              className="hover:text-white transition-colors cursor-pointer whitespace-nowrap"
            >
              Certificates
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
