import { useState } from 'react';
import { ArrowRight, HelpCircle, Minus, Plus } from 'lucide-react';
import { FAQS } from '../data/portfolioData';

interface FaqSectionProps {
  onOpenContact: (context?: string) => void;
}

export function FaqSection({ onOpenContact }: FaqSectionProps) {
  const [openId, setOpenId] = useState<string | null>(FAQS[0].id);

  const toggleFaq = (id: string) => {
    setOpenId((prev) => (prev === id ? null : id));
  };

  return (
    <section id="faq" className="py-12 sm:py-20 bg-[#F4F6FB]">
      <div className="max-w-[1240px] mx-auto px-4 sm:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
          {/* Left Cobalt Radial Card */}
          <div className="lg:col-span-5">
            <div className="faq-cobalt-card h-full min-h-[290px] rounded-3xl p-8 sm:p-10 flex flex-col items-center justify-center text-center border border-[#2557F6]/15 shadow-[0_18px_48px_rgba(37,87,246,0.14)]">
              <div className="inline-flex items-center gap-2 text-[13px] font-medium text-white/95 mb-3">
                <HelpCircle className="w-4 h-4" aria-hidden="true" />
                <span>FAQ Questions</span>
              </div>
              <h2 className="font-display text-2xl sm:text-[28px] font-semibold text-white leading-tight text-balance max-w-xs">
                Got questions about working together?
              </h2>
              <button
                type="button"
                onClick={() => onOpenContact('FAQ Inquiry')}
                className="mt-6 inline-flex items-center gap-2.5 pl-5 pr-1.5 py-1.5 rounded-full bg-[#0A0F1F] text-white text-[13px] font-medium hover:bg-[#192446] transition-colors duration-150 cursor-pointer whitespace-nowrap"
              >
                <span>Get In Touch</span>
                <span className="w-7 h-7 rounded-full bg-white text-[#0A0F1F] inline-flex items-center justify-center">
                  <ArrowRight className="w-3.5 h-3.5" aria-hidden="true" />
                </span>
              </button>
            </div>
          </div>

          {/* Right Expandable Accordion Stack */}
          <div className="lg:col-span-7 flex flex-col justify-between gap-3">
            {FAQS.map((faq) => {
              const isOpen = openId === faq.id;
              return (
                <div
                  key={faq.id}
                  className="rounded-2xl bg-white border border-[#0B1226]/6 px-6 py-4 transition-colors duration-150"
                >
                  <button
                    type="button"
                    aria-expanded={isOpen}
                    onClick={() => toggleFaq(faq.id)}
                    className="w-full flex items-center justify-between gap-4 text-left py-1 cursor-pointer"
                  >
                    <span className="font-display text-[15px] font-semibold text-[#0A0F1F]">
                      {faq.question}
                    </span>
                    <span className="w-7 h-7 rounded-full bg-[#F4F6FB] text-[#0A0F1F] inline-flex items-center justify-center shrink-0">
                      {isOpen ? (
                        <Minus className="w-4 h-4" aria-hidden="true" />
                      ) : (
                        <Plus className="w-4 h-4" aria-hidden="true" />
                      )}
                    </span>
                  </button>
                  {isOpen && (
                    <p className="mt-2.5 pb-1 text-[14px] leading-relaxed text-[#46516E] max-w-xl">
                      {faq.answer}
                    </p>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
