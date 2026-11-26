import { useEffect, useState } from 'react';
import { ArrowRight } from 'lucide-react';
import { PORTFOLIO_OWNER } from '../data/portfolioData';

interface NavbarProps {
  onOpenContact: (context?: string) => void;
}

const NAV_LINKS = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#services' },
  { label: 'Works', href: '#works' },
];

export function Navbar({ onOpenContact }: NavbarProps) {
  const [visible, setVisible] = useState(true);
  const [isScrolled, setIsScrolled] = useState(false);
  const [touchStartY, setTouchStartY] = useState<number | null>(null);

  useEffect(() => {
    let prevY = window.scrollY;

    const onScroll = () => {
      const currentY = window.scrollY;
      setIsScrolled(currentY > 20);

      // Always show when near top of page
      if (currentY < 40) {
        setVisible(true);
      } else {
        const delta = currentY - prevY;
        // Scrolling down ("thalli vitaa") -> hide
        if (delta > 6) {
          setVisible(false);
        }
        // Scrolling up ("mela scroll panna") -> reveal!
        else if (delta < -6) {
          setVisible(true);
        }
      }
      prevY = currentY;
    };

    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStartY(e.touches[0].clientY);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    if (touchStartY === null) return;
    const currentY = e.touches[0].clientY;
    const deltaY = currentY - touchStartY;
    // If user swipes upwards directly on the navbar, hide it
    if (deltaY < -20) {
      setVisible(false);
      setTouchStartY(null);
    }
  };

  const handleTouchEnd = () => {
    setTouchStartY(null);
  };

  return (
    <header
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
      className={`sticky top-0 z-50 w-full transition-transform duration-300 ease-in-out ${
        visible ? 'translate-y-0' : '-translate-y-full'
      } ${
        isScrolled
          ? 'bg-[#E4E8F3]/95 backdrop-blur-md border-b border-[#0B1226]/8 shadow-[0_4px_20px_rgba(11,18,38,0.06)]'
          : 'bg-[#C7CEDE] border-b border-[#0B1226]/5'
      }`}
    >
      <div className="max-w-[1240px] mx-auto px-4 sm:px-8 h-14 sm:h-16 md:h-[72px] flex items-center justify-between gap-4">
        {/* Zone 1: Brand Wordmark (single line, no subtitle) */}
        <a
          href="#home"
          className="inline-flex items-center pl-1 sm:pl-1.5 text-[#0B1226] font-display font-extrabold text-[16px] sm:text-lg tracking-tight whitespace-nowrap shrink-0 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#2557F6] rounded-md transition-opacity hover:opacity-85"
        >
          <span className="font-extrabold tracking-tight">{PORTFOLIO_OWNER.brandName}</span>
        </a>

        {/* Zone 2: Concise single-line navigation links (Desktop) */}
        <nav
          aria-label="Primary"
          className="hidden md:flex items-center gap-8 text-[14px] font-medium text-[#37415A]"
        >
          {NAV_LINKS.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="hover:text-[#0B1226] transition-colors duration-150 whitespace-nowrap shrink-0 py-1 border-b border-transparent hover:border-[#2557F6] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#2557F6]"
            >
              {item.label}
            </a>
          ))}
        </nav>

        {/* Zone 3: Single Primary Action */}
        <div className="flex items-center gap-3 shrink-0">
          <button
            type="button"
            onClick={() => onOpenContact('General Inquiry')}
            className="inline-flex items-center gap-[1px] group cursor-pointer whitespace-nowrap shrink-0 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#2557F6] rounded-full"
          >
            <span className="px-3.5 sm:px-5 py-2 sm:py-2.5 rounded-full bg-[#0A0B0E] text-white text-[12px] sm:text-[13px] font-medium group-hover:bg-[#191D28] transition-colors duration-150">
              Get In Touch
            </span>
            <span className="w-7 h-7 sm:w-9 sm:h-9 rounded-full bg-[#0A0B0E] text-white inline-flex items-center justify-center group-hover:bg-[#2557F6] transition-colors duration-150">
              <ArrowRight className="w-3.5 h-3.5 sm:w-4 sm:h-4" aria-hidden="true" />
            </span>
          </button>
        </div>
      </div>

      {/* Mobile Quick Navigation Strip (Floating Rounded Glass Pill) */}
      <nav
        aria-label="Mobile Navigation"
        className="md:hidden mx-3.5 mb-2 mt-0.5 flex items-center justify-between gap-1 p-1 rounded-full bg-white/65 backdrop-blur-xl border border-white/80 shadow-[0_8px_24px_rgba(11,18,38,0.07)]"
        style={{
          WebkitBackdropFilter: 'blur(20px)',
          backdropFilter: 'blur(20px)',
        }}
      >
        {NAV_LINKS.map((item) => (
          <a
            key={item.href}
            href={item.href}
            className="flex-1 text-center px-2.5 py-1.5 rounded-full text-[12.5px] font-semibold text-[#0B1226] hover:bg-white/90 active:bg-white active:scale-95 transition-all"
          >
            {item.label}
          </a>
        ))}
      </nav>
    </header>
  );
}
