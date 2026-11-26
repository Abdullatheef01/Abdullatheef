import { FormEvent, useEffect, useState } from 'react';
import { ArrowRight, CheckCircle2, Download, Loader2, X } from 'lucide-react';
import {
  ArticleItem,
  PORTFOLIO_OWNER,
  ProjectCaseStudy,
} from '../data/portfolioData';
import { SmartImage } from './SmartImage';

/* ---------- Shared Modal Backdrop with ESC support ---------- */
function ModalShell({
  onClose,
  title,
  children,
}: {
  onClose: () => void;
  title: string;
  children: React.ReactNode;
}) {
  useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, [onClose]);

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label={title}
      onClick={onClose}
      className="fixed inset-0 z-50 bg-[#050C24]/70 backdrop-blur-xs flex items-center justify-center p-4 sm:p-6 overflow-y-auto"
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="relative w-full max-w-2xl rounded-3xl bg-white text-[#0A0F1F] border border-[#0B1226]/10 shadow-2xl overflow-hidden max-h-[90vh] flex flex-col"
      >
        <div className="flex items-center justify-between gap-4 px-6 sm:px-8 py-5 border-b border-[#0B1226]/8">
          <h3 className="font-display text-lg font-semibold tracking-tight text-[#0A0F1F]">
            {title}
          </h3>
          <button
            type="button"
            onClick={onClose}
            aria-label="Close modal"
            className="w-9 h-9 rounded-full bg-[#F4F6FB] text-[#0A0F1F] inline-flex items-center justify-center hover:bg-[#E4E9F5] transition-colors cursor-pointer"
          >
            <X className="w-4 h-4" aria-hidden="true" />
          </button>
        </div>
        <div className="p-6 sm:p-8 overflow-y-auto">{children}</div>
      </div>
    </div>
  );
}

/* ---------- 1. Contact / Book a Call Modal ---------- */
export function ContactModal({
  context,
  onClose,
}: {
  context: string;
  onClose: () => void;
}) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [touched, setTouched] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const isEmailValid = (val: string) =>
    /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(val.trim());

  const errors = {
    name: !name.trim()
      ? 'Please enter your name'
      : name.trim().length < 2
      ? 'Name must be at least 2 characters'
      : '',
    email: !email.trim()
      ? 'Please enter your email address'
      : !isEmailValid(email)
      ? 'Please enter a valid email address'
      : '',
    message: !message.trim()
      ? 'Please write your message'
      : message.trim().length < 5
      ? 'Message must be at least 5 characters'
      : '',
  };

  const isFormValid = !errors.name && !errors.email && !errors.message;

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setTouched(true);

    if (!isFormValid) {
      return;
    }

    const formspreeEndpoint = import.meta.env.VITE_FORMSPREE_ENDPOINT;
    if (!formspreeEndpoint) {
      setErrorMessage('Contact form is not configured. Please email directly.');
      return;
    }

    setIsSubmitting(true);
    setErrorMessage('');

    try {
      const response = await fetch(formspreeEndpoint, {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: name.trim(),
          email: email.trim(),
          message: message.trim(),
          context: context || 'Portfolio Contact',
        }),
      });

      if (response.ok) {
        setSubmitted(true);
      } else {
        const data = await response.json().catch(() => null);
        if (data && data.errors && data.errors.length > 0) {
          setErrorMessage(
            data.errors.map((err: { message: string }) => err.message).join(', ')
          );
        } else {
          setErrorMessage('Failed to send message. Please try again or email directly.');
        }
      }
    } catch {
      setErrorMessage('Network connection error. Please try again or email directly.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <ModalShell title="Start a Conversation" onClose={onClose}>
      {submitted ? (
        <div className="py-8 text-center">
          <div className="w-12 h-12 rounded-full bg-[#EEF3FF] text-[#2557F6] inline-flex items-center justify-center mb-4">
            <CheckCircle2 className="w-6 h-6" aria-hidden="true" />
          </div>
          <h4 className="font-display text-2xl font-semibold text-[#0A0F1F]">
            Message Received, {name}
          </h4>
          <p className="mt-2 text-[15px] text-[#46516E] max-w-md mx-auto">
            Thanks for reaching out! I will follow up at{' '}
            <span className="font-medium text-[#0A0F1F]">{email}</span> within one business day, or you can write directly to{' '}
            <a href={`mailto:${PORTFOLIO_OWNER.email}`} className="text-[#2557F6] underline">
              {PORTFOLIO_OWNER.email}
            </a>
            .
          </p>
          <button
            type="button"
            onClick={onClose}
            className="mt-6 px-6 py-2.5 rounded-full bg-[#0A0F1F] text-white text-sm font-medium hover:bg-[#2557F6] transition-colors cursor-pointer"
          >
            Back to Portfolio
          </button>
        </div>
      ) : (
        <form onSubmit={handleSubmit} noValidate className="space-y-4">
          <p className="text-[14px] text-[#46516E]">
            Hiring or have an opportunity? Email me at{' '}
            <a
              href={`mailto:${PORTFOLIO_OWNER.email}`}
              className="font-medium text-[#2557F6] hover:underline"
            >
              {PORTFOLIO_OWNER.email}
            </a>
          </p>

          {errorMessage && (
            <div className="p-3 rounded-xl bg-red-50 border border-red-200 text-xs text-red-600">
              {errorMessage}
            </div>
          )}

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label htmlFor="contact-name" className="block text-xs font-medium text-[#3B4664] mb-1.5">
                Your Name
              </label>
              <input
                id="contact-name"
                name="name"
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Alex Morgan"
                disabled={isSubmitting}
                className={`w-full px-4 py-2.5 rounded-xl bg-[#F4F6FB] border text-sm text-[#0A0F1F] transition-all focus:outline-none focus:ring-2 disabled:opacity-60 ${
                  touched && errors.name
                    ? 'border-red-400 focus:ring-red-400/30'
                    : 'border-[#0B1226]/10 focus:border-[#2557F6] focus:ring-[#2557F6]/20'
                }`}
              />
              {touched && errors.name && (
                <p className="mt-1 text-xs text-red-500 font-medium">{errors.name}</p>
              )}
            </div>

            <div>
              <label htmlFor="contact-email" className="block text-xs font-medium text-[#3B4664] mb-1.5">
                Email Address
              </label>
              <input
                id="contact-email"
                name="email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="alex@company.com"
                disabled={isSubmitting}
                className={`w-full px-4 py-2.5 rounded-xl bg-[#F4F6FB] border text-sm text-[#0A0F1F] transition-all focus:outline-none focus:ring-2 disabled:opacity-60 ${
                  touched && errors.email
                    ? 'border-red-400 focus:ring-red-400/30'
                    : 'border-[#0B1226]/10 focus:border-[#2557F6] focus:ring-[#2557F6]/20'
                }`}
              />
              {touched && errors.email && (
                <p className="mt-1 text-xs text-red-500 font-medium">{errors.email}</p>
              )}
            </div>
          </div>

          <div>
            <label htmlFor="contact-message" className="block text-xs font-medium text-[#3B4664] mb-1.5">
              Message
            </label>
            <textarea
              id="contact-message"
              name="message"
              rows={4}
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="Your message..."
              disabled={isSubmitting}
              className={`w-full px-4 py-2.5 rounded-xl bg-[#F4F6FB] border text-sm text-[#0A0F1F] transition-all focus:outline-none focus:ring-2 disabled:opacity-60 ${
                touched && errors.message
                  ? 'border-red-400 focus:ring-red-400/30'
                  : 'border-[#0B1226]/10 focus:border-[#2557F6] focus:ring-[#2557F6]/20'
              }`}
            />
            {touched && errors.message && (
              <p className="mt-1 text-xs text-red-500 font-medium">{errors.message}</p>
            )}
          </div>

          <button
            type="submit"
            disabled={isSubmitting}
            className="group w-full inline-flex items-center justify-between pl-6 pr-2 py-2.5 rounded-full bg-[#0A0F1F] text-white text-sm font-medium hover:bg-[#2557F6] hover:shadow-lg hover:shadow-[#2557F6]/25 hover:-translate-y-0.5 active:scale-[0.98] active:translate-y-0 transition-all duration-200 ease-out cursor-pointer disabled:opacity-70 disabled:cursor-not-allowed disabled:transform-none disabled:shadow-none"
          >
            <span>{isSubmitting ? 'Sending...' : 'Send Message'}</span>
            <span className="w-8 h-8 rounded-full bg-white text-[#0A0F1F] inline-flex items-center justify-center transition-transform duration-200 group-hover:translate-x-0.5 group-active:scale-90">
              {isSubmitting ? (
                <Loader2 className="w-4 h-4 animate-spin text-[#2557F6]" aria-hidden="true" />
              ) : (
                <ArrowRight className="w-4 h-4 text-[#0A0F1F]" aria-hidden="true" />
              )}
            </span>
          </button>
        </form>
      )}
    </ModalShell>
  );
}

/* ---------- 2. Project Case Study Modal ---------- */
export function ProjectModal({
  project,
  onClose,
  onStartSimilar,
}: {
  project: ProjectCaseStudy;
  onClose: () => void;
  onStartSimilar: (title: string) => void;
}) {
  return (
    <ModalShell title={`${project.index} — ${project.title}`} onClose={onClose}>
      <div className="space-y-6">
        <div className="w-full aspect-[4/3] rounded-2xl overflow-hidden bg-[#1D3FAD]">
          <SmartImage
            src={project.image}
            alt={project.imageAlt}
            fallbackTitle={project.title}
            className="w-full h-full object-cover"
          />
        </div>

        <div className="flex flex-wrap items-center gap-2 text-xs font-medium text-[#5A6582]">
          <span>{project.category}</span>
          <span aria-hidden="true">·</span>
          <span>{project.client}</span>
          <span aria-hidden="true">·</span>
          <span className="tabular-nums">{project.year}</span>
        </div>

        <div className="grid grid-cols-3 gap-3">
          {project.outcomes.map((outcome) => (
            <div
              key={outcome.label}
              className="rounded-2xl bg-[#F4F6FB] border border-[#0B1226]/6 p-4"
            >
              <div className="font-display text-xl sm:text-2xl font-semibold text-[#2557F6] tabular-nums">
                {outcome.value}
              </div>
              <div className="text-[12px] text-[#46516E] mt-1">{outcome.label}</div>
            </div>
          ))}
        </div>

        <div className="space-y-4 text-[14px] leading-relaxed text-[#37415A]">
          <div>
            <h4 className="font-display font-semibold text-[#0A0F1F] mb-1">The Challenge</h4>
            <p>{project.challenge}</p>
          </div>
          <div>
            <h4 className="font-display font-semibold text-[#0A0F1F] mb-1">Design Solution</h4>
            <p>{project.solution}</p>
          </div>
          <div>
            <h4 className="font-display font-semibold text-[#0A0F1F] mb-2">Deliverables</h4>
            <p className="text-[#46516E]">{project.deliverables.join(' · ')}</p>
          </div>
        </div>

        <button
          type="button"
          onClick={() => onStartSimilar(`Similar to ${project.title}`)}
          className="w-full inline-flex items-center justify-between pl-6 pr-2 py-2 rounded-full bg-[#0A0F1F] text-white text-sm font-medium hover:bg-[#2557F6] transition-colors cursor-pointer"
        >
          <span>Request a Similar Project</span>
          <span className="w-8 h-8 rounded-full bg-white text-[#0A0F1F] inline-flex items-center justify-center">
            <ArrowRight className="w-4 h-4" aria-hidden="true" />
          </span>
        </button>
      </div>
    </ModalShell>
  );
}

/* ---------- 3. Article Reader Modal ---------- */
export function ArticleModal({
  article,
  onClose,
}: {
  article: ArticleItem;
  onClose: () => void;
}) {
  return (
    <ModalShell title={article.title} onClose={onClose}>
      <div className="space-y-5">
        <div className="w-full aspect-[4/3] rounded-2xl overflow-hidden bg-[#E9EEF8]">
          <SmartImage
            src={article.image}
            alt={article.imageAlt}
            fallbackTitle={article.title}
            className="w-full h-full object-cover"
          />
        </div>

        <div className="flex items-center gap-2 text-xs font-medium text-[#5A6582]">
          <span>{article.label}</span>
          <span aria-hidden="true">·</span>
          <span>{article.published}</span>
          <span aria-hidden="true">·</span>
          <span>{article.readTime}</span>
        </div>

        <p className="font-display text-lg font-medium text-[#0A0F1F] leading-snug">
          {article.excerpt}
        </p>

        <div className="space-y-4 text-[15px] leading-relaxed text-[#37415A]">
          {article.body.map((paragraph, i) => (
            <p key={i}>{paragraph}</p>
          ))}
        </div>
      </div>
    </ModalShell>
  );
}

/* ---------- 4. Footer Info Modal ---------- */
export function InfoModal({
  topic,
  onClose,
  onOpenContact,
}: {
  topic: 'style-guide' | 'process' | 'availability';
  onClose: () => void;
  onOpenContact: (ctx: string) => void;
}) {
  const content = {
    'style-guide': {
      title: 'Portfolio Design System',
      body: [
        'Typography pairs Plus Jakarta Sans for structured display headlines with DM Sans for high-legibility body prose.',
        'Color architecture balances 60% cool alabaster surfaces (#F4F6FB), 30% midnight navy structural sections (#081748), and 10% royal cobalt accents (#2557F6).',
      ],
    },
    process: {
      title: 'How We Work Together',
      body: [
        'Week 1: Discovery, positioning audit, and user journey mapping.',
        'Week 2–3: Wireframes, visual direction, and interactive component prototypes.',
        'Week 4+: Production React & TypeScript build, QA, and launch support.',
      ],
    },
    availability: {
      title: 'Current Availability',
      body: [
        'Currently accepting two new product design or end-to-end brand + web engagements for the upcoming month.',
        `Reach out directly at ${PORTFOLIO_OWNER.email} to reserve a discovery call.`,
      ],
    },
  }[topic];

  return (
    <ModalShell title={content.title} onClose={onClose}>
      <div className="space-y-4 text-[15px] leading-relaxed text-[#37415A]">
        {content.body.map((line, i) => (
          <p key={i}>{line}</p>
        ))}
        <button
          type="button"
          onClick={() => {
            onClose();
            onOpenContact(content.title);
          }}
          className="mt-4 inline-flex items-center gap-2.5 pl-5 pr-2 py-2 rounded-full bg-[#0A0F1F] text-white text-sm font-medium hover:bg-[#2557F6] transition-colors cursor-pointer"
        >
          <span>Get In Touch</span>
          <span className="w-7 h-7 rounded-full bg-white text-[#0A0F1F] inline-flex items-center justify-center">
            <ArrowRight className="w-3.5 h-3.5" aria-hidden="true" />
          </span>
        </button>
      </div>
    </ModalShell>
  );
}

/* ---------- 5. Resume PDF Viewer Modal ---------- */
export function ResumeModal({ onClose }: { onClose: () => void }) {
  return (
    <ModalShell title="Abdul Latheef J — Resume" onClose={onClose}>
      <div className="space-y-4">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <div className="text-[13px] text-[#46516E]">
            <span>MERN Stack Developer</span>
            <span aria-hidden="true" className="mx-2">·</span>
            <span>Open Source Contributor</span>
            <span aria-hidden="true" className="mx-2">·</span>
            <span>Thanjavur, Tamil Nadu</span>
          </div>

          <a
            href={PORTFOLIO_OWNER.resumePdf}
            download="Abdul_Latheef_J_Resume.pdf"
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#2557F6] text-white text-xs font-medium hover:bg-[#1A44D4] transition-colors whitespace-nowrap"
          >
            <Download className="w-3.5 h-3.5" aria-hidden="true" />
            <span>Download PDF</span>
          </a>
        </div>

        <div className="w-full h-[65vh] min-h-[420px] rounded-2xl overflow-hidden border border-[#0B1226]/10 bg-[#F4F6FB]">
          <iframe
            src={PORTFOLIO_OWNER.resumePdf}
            title="Abdul Latheef J Resume PDF"
            className="w-full h-full border-0"
          />
        </div>
      </div>
    </ModalShell>
  );
}

