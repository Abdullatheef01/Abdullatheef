import { useState, useRef } from 'react';
import { ArrowLeft, ArrowRight, BookOpen } from 'lucide-react';
import { ARTICLES, ArticleItem } from '../data/portfolioData';
import { SmartImage } from './SmartImage';

interface ArticlesSectionProps {
  onSelectArticle: (article: ArticleItem) => void;
}

export function ArticlesSection({ onSelectArticle }: ArticlesSectionProps) {
  const scrollRef = useRef<HTMLDivElement>(null);

  const handleScroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const { scrollLeft, clientWidth } = scrollRef.current;
      const scrollAmount = clientWidth > 768 ? 420 : 320;
      scrollRef.current.scrollTo({
        left: direction === 'left' ? scrollLeft - scrollAmount : scrollLeft + scrollAmount,
        behavior: 'smooth',
      });
    }
  };

  return (
    <section id="articles" className="pt-12 pb-20 sm:pb-28 bg-[#F4F6FB]">
      <div className="max-w-[1240px] mx-auto px-4 sm:px-8">
        {/* Header with Navigation */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-10 sm:mb-12 gap-6">
          <div className="max-w-md">
            <div className="inline-flex items-center gap-2 text-[13px] font-medium text-[#3B4664] mb-3">
              <BookOpen className="w-4 h-4 text-[#2557F6]" aria-hidden="true" />
              <span>Certificates</span>
            </div>
            <h2 className="font-display text-[clamp(1.85rem,3.4vw,2.65rem)] font-semibold tracking-tight text-[#0A0F1F] leading-[1.15] text-balance">
              Certificates and Credentials
            </h2>
          </div>

          {/* Header Arrow Controls */}
          <div className="flex items-center gap-2.5">
            <button
              type="button"
              onClick={() => handleScroll('left')}
              aria-label="Previous certificates"
              className="w-10 h-10 rounded-full bg-white border border-[#0B1226]/10 text-[#0A0F1F] inline-flex items-center justify-center hover:bg-[#0A0F1F] hover:text-white transition-colors duration-150 cursor-pointer shadow-[0_4px_12px_rgba(11,18,38,0.04)]"
            >
              <ArrowLeft className="w-4 h-4" aria-hidden="true" />
            </button>
            <button
              type="button"
              onClick={() => handleScroll('right')}
              aria-label="Next certificates"
              className="w-10 h-10 rounded-full bg-white border border-[#0B1226]/10 text-[#0A0F1F] inline-flex items-center justify-center hover:bg-[#0A0F1F] hover:text-white transition-colors duration-150 cursor-pointer shadow-[0_4px_12px_rgba(11,18,38,0.04)]"
            >
              <ArrowRight className="w-4 h-4" aria-hidden="true" />
            </button>
          </div>
        </div>

        {/* Horizontal Slider Track */}
        <div
          ref={scrollRef}
          className="flex gap-6 overflow-x-auto pb-4 pt-1 scroll-smooth snap-x snap-mandatory no-scrollbar"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {ARTICLES.map((article) => (
            <button
              key={article.id}
              type="button"
              onClick={() => onSelectArticle(article)}
              className="group shrink-0 w-[300px] sm:w-[370px] text-left rounded-3xl bg-white border border-[#0B1226]/6 p-4 shadow-[0_12px_32px_rgba(11,18,38,0.03)] hover:-translate-y-1 transition-transform duration-200 cursor-pointer snap-start focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#2557F6]"
            >
              <div className="w-full aspect-[4/3] rounded-2xl overflow-hidden bg-[#E9EEF8]">
                <SmartImage
                  src={article.image}
                  alt={article.imageAlt}
                  fallbackTitle={article.title}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-[1.03]"
                />
              </div>

              <div className="pt-4 pb-1 px-1 flex items-center justify-between gap-3">
                <h3 className="font-display text-[17px] font-semibold text-[#0A0F1F] group-hover:text-[#2557F6] transition-colors truncate">
                  {article.title}
                </h3>
                <div className="flex items-center gap-1.5 text-[12px] text-[#5A6582] shrink-0">
                  <span>{article.label}</span>
                  <span aria-hidden="true">·</span>
                  <span>{article.readTime}</span>
                </div>
              </div>
            </button>
          ))}
        </div>

        {/* Bottom Navigation Buttons */}
        <div className="mt-8 flex items-center justify-center gap-4">
          <button
            type="button"
            onClick={() => handleScroll('left')}
            className="px-5 py-2.5 rounded-full bg-white border border-[#0B1226]/10 text-[#0A0F1F] text-sm font-semibold hover:bg-[#0A0F1F] hover:text-white transition-colors duration-150 cursor-pointer shadow-[0_4px_16px_rgba(11,18,38,0.05)] inline-flex items-center gap-2"
          >
            <ArrowLeft className="w-4 h-4" aria-hidden="true" />
            <span>Previous</span>
          </button>
          <button
            type="button"
            onClick={() => handleScroll('right')}
            className="px-5 py-2.5 rounded-full bg-[#0A0F1F] text-white text-sm font-semibold hover:bg-[#2557F6] transition-colors duration-150 cursor-pointer shadow-[0_4px_16px_rgba(11,18,38,0.08)] inline-flex items-center gap-2"
          >
            <span>Next</span>
            <ArrowRight className="w-4 h-4" aria-hidden="true" />
          </button>
        </div>
      </div>
    </section>
  );
}
