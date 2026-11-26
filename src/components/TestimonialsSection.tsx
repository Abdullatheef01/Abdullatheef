import { useState } from 'react';
import { ArrowLeft, ArrowRight, MessageSquareQuote } from 'lucide-react';
import { TESTIMONIALS } from '../data/portfolioData';
import { SmartImage } from './SmartImage';

export function TestimonialsSection() {
  const [activeIndex, setActiveIndex] = useState(0);
  const activeStory = TESTIMONIALS[activeIndex];

  const handlePrev = () => {
    setActiveIndex((prev) => (prev === 0 ? TESTIMONIALS.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setActiveIndex((prev) => (prev === TESTIMONIALS.length - 1 ? 0 : prev + 1));
  };

  return (
    <section id="testimonials" className="py-16 sm:py-24 bg-[#F4F6FB]">
      <div className="max-w-[1240px] mx-auto px-4 sm:px-8">
        {/* Section Header */}
        <div className="max-w-lg mb-10 sm:mb-12">
          <div className="inline-flex items-center gap-2 text-[13px] font-medium text-[#3B4664] mb-3">
            <MessageSquareQuote className="w-4 h-4 text-[#2557F6]" aria-hidden="true" />
            <span>Wins and Participation</span>
          </div>
          <h2 className="font-display text-[clamp(1.85rem,3.4vw,2.75rem)] font-semibold tracking-tight text-[#0A0F1F] leading-[1.15] text-balance">
            Proof of work beyond the classroom
          </h2>
        </div>

        {/* White Showcase Card */}
        <div className="rounded-3xl bg-white border border-[#0B1226]/6 p-6 sm:p-8 lg:p-10 shadow-[0_14px_40px_rgba(11,18,38,0.04)]">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Left Vertical Stepper + Achievement Copy */}
            <div className="lg:col-span-6 flex gap-5 sm:gap-7 h-full">
              {/* Vertical 1..7 buttons */}
              <div className="flex flex-col justify-center gap-2 shrink-0" role="tablist" aria-label="Select achievement">
                {TESTIMONIALS.map((item, idx) => {
                  const isActive = idx === activeIndex;
                  return (
                    <button
                      key={item.id}
                      type="button"
                      role="tab"
                      aria-selected={isActive}
                      aria-label={`Achievement ${idx + 1}: ${item.title ?? item.author}`}
                      onClick={() => setActiveIndex(idx)}
                      className={`w-7 h-7 rounded-full text-xs font-semibold tabular-nums transition-colors duration-150 cursor-pointer ${
                        isActive
                          ? 'bg-[#0A0F1F] text-white'
                          : 'bg-[#EEF2FA] text-[#5A6582] hover:bg-[#DDE5FA]'
                      }`}
                    >
                      {idx + 1}
                    </button>
                  );
                })}
              </div>

              {/* Achievement Details */}
              <div className="flex flex-col justify-between flex-1 py-1">
                <div>
                  <span className="inline-block text-[12px] font-semibold tracking-tight text-[#2557F6] mb-2.5">
                    {activeStory.badge ?? 'Competition Highlight'}
                  </span>
                  {activeStory.title && (
                    <h3 className="font-display text-xl sm:text-[1.45rem] font-semibold tracking-tight text-[#0A0F1F] leading-snug mb-3.5">
                      {activeStory.title}
                    </h3>
                  )}
                  <p className="text-[15.5px] sm:text-[16.5px] font-normal leading-relaxed text-[#2C354D]">
                    {activeStory.quote}
                  </p>
                </div>

                <div className="mt-8 pt-5 border-t border-[#0B1226]/8 flex items-end justify-between gap-4">
                  <div>
                    <div className="font-display font-semibold text-[15px] text-[#0A0F1F]">
                      {activeStory.author}
                    </div>
                    <div className="text-[13px] text-[#5A6582] mt-0.5">
                      {activeStory.role} · {activeStory.company}
                    </div>
                  </div>

                  {/* Prev / Next Controls */}
                  <div className="flex items-center gap-2 shrink-0">
                    <button
                      type="button"
                      onClick={handlePrev}
                      aria-label="Previous achievement"
                      className="w-9 h-9 rounded-full bg-[#0A0F1F] text-white inline-flex items-center justify-center hover:bg-[#2557F6] transition-colors duration-150 cursor-pointer"
                    >
                      <ArrowLeft className="w-4 h-4" aria-hidden="true" />
                    </button>
                    <button
                      type="button"
                      onClick={handleNext}
                      aria-label="Next achievement"
                      className="w-9 h-9 rounded-full bg-[#0A0F1F] text-white inline-flex items-center justify-center hover:bg-[#2557F6] transition-colors duration-150 cursor-pointer"
                    >
                      <ArrowRight className="w-4 h-4" aria-hidden="true" />
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Uniform 4:3 Photo Frame */}
            <div className="lg:col-span-6">
              <div className="w-full aspect-[4/3] rounded-2xl overflow-hidden bg-[#E9EEF8] ring-1 ring-[#0B1226]/8">
                <SmartImage
                  src={activeStory.image}
                  alt={activeStory.imageAlt}
                  fallbackTitle={activeStory.title ?? activeStory.author}
                  className="w-full h-full object-cover object-center"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
