import { ArrowUpRight } from 'lucide-react';
import { PORTFOLIO_OWNER } from '../data/portfolioData';
import { SmartImage } from './SmartImage';

interface HeroSectionProps {
  onOpenResume: () => void;
}

export function HeroSection({ onOpenResume }: HeroSectionProps) {
  return (
    <section
      id="home"
      className="relative overflow-hidden hero-canvas-gradient pt-3 pb-12 sm:pt-5 sm:pb-16 lg:pb-20 border-b border-[#0B1226]/6"
    >
      <div className="max-w-[1240px] mx-auto px-4 sm:px-8">
        {/* Centered Vertical Arch Bar + Faded SOFTWARE DEVELOPER Text + Cutout Portrait */}
        <div className="relative flex flex-col items-center justify-end pt-2 sm:pt-4 pb-0 min-h-[440px] sm:min-h-[540px] lg:min-h-[605px]">
          {/* Faded Background Typography ("SOFTWARE" & "DEVELOPER" positioned lower) */}
          <span
            aria-hidden="true"
            className="pointer-events-none select-none absolute inset-x-0 top-[28%] sm:top-[26%] text-center font-display uppercase z-0 flex flex-col items-center gap-1"
          >
            <span className="block font-extrabold tracking-[-0.03em] leading-[0.9] text-[clamp(3rem,11vw,9.5rem)] bg-gradient-to-b from-white/75 via-white/40 to-white/10 bg-clip-text text-transparent whitespace-nowrap">
              SOFTWARE
            </span>
            <span className="block font-extrabold tracking-[-0.03em] leading-[0.9] text-[clamp(3rem,11vw,9.5rem)] bg-gradient-to-b from-white/70 via-white/32 to-white/5 bg-clip-text text-transparent whitespace-nowrap">
              DEVELOPER
            </span>
          </span>

          {/* Interactive subtle specialty quick-links flanking portrait on desktop */}
          <a
            href="#services"
            className="hidden md:inline-flex items-center gap-2 absolute left-[7%] lg:left-[14%] top-[46%] z-20 px-4 py-2 rounded-full bg-white/95 backdrop-blur-sm text-[#0B1226] text-[13px] font-medium shadow-[0_12px_30px_rgba(11,18,38,0.08)] border border-white hover:-translate-y-0.5 transition-transform duration-150 -rotate-12 whitespace-nowrap"
          >
            <span>Web Design</span>
            <ArrowUpRight className="w-3.5 h-3.5 text-[#2557F6]" aria-hidden="true" />
          </a>

          <a
            href="#works"
            className="hidden md:inline-flex items-center gap-2 absolute right-[7%] lg:right-[14%] top-[26%] z-20 px-4 py-2 rounded-full bg-white/95 backdrop-blur-sm text-[#0B1226] text-[13px] font-medium shadow-[0_12px_30px_rgba(11,18,38,0.08)] border border-white hover:-translate-y-0.5 transition-transform duration-150 rotate-12 whitespace-nowrap"
          >
            <span>Graphic Design</span>
            <ArrowUpRight className="w-3.5 h-3.5 text-[#2557F6]" aria-hidden="true" />
          </a>

          {/* Portrait Container Restored to Previous Higher Placement */}
          <div className="relative z-10 -translate-y-3 sm:-translate-y-5 flex items-end justify-center w-[385px] sm:w-[485px] lg:w-[560px] h-[425px] sm:h-[525px] lg:h-[590px]">
            {/* Vertical Arch Bar (rounded top corners, soft luminous blue gradient) */}
                    <span
          aria-hidden="true"
          className="hidden sm:block hero-arch-bar absolute bottom-0 left-1/2 -translate-x-1/2 w-[335px] sm:w-[420px] lg:w-[480px] h-[425px] sm:h-[525px] lg:h-[590px] rounded-t-full z-0"
        />

                    <SmartImage
          src={PORTFOLIO_OWNER.heroPortrait}
          alt={`${PORTFOLIO_OWNER.fullName} transparent cutout portrait`}
          fallbackTitle={PORTFOLIO_OWNER.fullName}
          className="relative z-10 w-[520px] sm:w-[470px] lg:w-[645px] h-[570px] sm:h-[490px] lg:h-[560px] max-w-[105vw] -translate-y-10 sm:translate-y-0 object-contain object-bottom drop-shadow-[0_18px_36px_rgba(11,22,60,0.14)]"
        />

            {/* Soft mist fade at the bottom so suit blends into hero canvas */}
            <div
              aria-hidden="true"
              className="pointer-events-none absolute inset-x-[-20%] bottom-0 h-28 bg-gradient-to-t from-[#DCE2EE] via-[#DCE2EE]/100 to-transparent z-100"
            />
          </div>
        </div>

        {/* Bottom Split Row: Left Display Title + Right Metric Cards */}
        <div className="relative z-20 -mt-13 sm:-mt-20 grid grid-cols-1 lg:grid-cols-12 gap-8 items-end">
          <div className="lg:col-span-7">
            <p className="text-[15px] sm:text-base font-medium text-[#24304E] mb-0.5">
              Hey, I&apos;m {PORTFOLIO_OWNER.fullName}.
            </p>
            <h1 className="font-display font-semibold tracking-tight text-[#0A0F1F] leading-[1.04] text-[clamp(2.25rem,4.4vw,3.75rem)] text-balance max-w-2xl">
              {PORTFOLIO_OWNER.role}
            </h1>
            <div className="mt-6 flex flex-wrap items-center gap-4">
              <button
                type="button"
                onClick={onOpenResume}
                className="inline-flex items-center gap-2.5 px-5 py-2.5 rounded-full bg-[#3559d1] text-white text-sm font-medium hover:bg-[#264cc9] transition-colors duration-150 shadow-[0_10px_24px_rgba(37,87,246,0.26)] cursor-pointer whitespace-nowrap"
              >
                <span>Resume</span>
                <ArrowUpRight className="w-4 h-4" aria-hidden="true" />
              </button>
              <a
                href="#works"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white/85 hover:bg-white text-[#0A0F1F] text-[13px] font-medium border border-[#0B1226]/10 transition-colors duration-150 whitespace-nowrap"
              >
                Explore Works
              </a>
            </div>
          </div>

          {/* Right Metric Cards matching reference */}
          <div className="lg:col-span-5 flex flex-col gap-3 sm:max-w-[360px] lg:ml-auto w-full">
            <div className="flex items-center justify-between gap-4 px-5 py-4 rounded-2xl bg-white/75 backdrop-blur-md border border-white shadow-[0_10px_30px_rgba(11,18,38,0.05)]">
              <span className="text-[13px] leading-snug text-[#46516E] font-medium max-w-[175px]">
                Project Works &amp; Designs
              </span>
              <span className="font-display text-2xl sm:text-[26px] font-semibold text-[#0A0F1F] tabular-nums">
                4+
              </span>
            </div>

            <div className="flex items-center justify-between gap-4 px-5 py-4 rounded-2xl bg-white/55 backdrop-blur-md border border-white/80 shadow-[0_10px_30px_rgba(11,18,38,0.04)]">
              <span className="text-[13px] leading-snug text-[#46516E] font-medium max-w-[175px]">
                Open Source Contribution
              </span>
              <span className="font-display text-2xl sm:text-[26px] font-semibold text-[#0A0F1F] tabular-nums">
                10+
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
