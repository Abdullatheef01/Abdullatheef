import {
  ArrowUpRight,
  BarChart3,
  Database,
  GitBranch,
  Globe,
  Layers,
  Layout,
  Palette,
  Rocket,
  Server,
  Sparkles,
  Wrench,
} from 'lucide-react';
import type { LucideIcon } from 'lucide-react';

interface ServicesSectionProps {
  onOpenContact: (context?: string) => void;
}

interface LedgerRow {
  num: string;
  title: string;
  icon: LucideIcon;
  items: string[];
}

const FRONTEND_SKILLS = [
  'HTML5',
  'CSS3',
  'JavaScript (ES6+)',
  'React.js',
  'Tailwind CSS',
  'Responsive Web Design',
  'Component-Based Architecture',
  'UI/UX Principles',
];

const BACKEND_SKILLS = [
  'Node.js',
  'Express.js',
  'REST API Development',
  'JWT Authentication',
  'bcrypt (Password Hashing)',
  'OTP Email Verification',
  'MVC Architecture',
];

const DATABASE_SKILLS = [
  'MongoDB',
  'MongoDB Atlas',
  'Mongoose (ODM)',
  'Firebase',
];

const DESIGN_SKILLS = [
  'Figma',
  'Canva',
  'Photoshop',
  'DaVinci Resolve',
  'CapCut',
];

const ECOSYSTEM_LEDGER: LedgerRow[] = [
  {
    num: '05',
    title: 'Version Control & DevOps',
    icon: GitBranch,
    items: ['Git', 'GitHub', 'GitHub Actions', 'Docker', 'Linux'],
  },
  {
    num: '06',
    title: 'Tools & Technologies',
    icon: Wrench,
    items: ['VS Code', 'Postman', 'Handlebars', 'Brevo (OTP Email)'],
  },
  {
    num: '07',
    title: 'Deployment',
    icon: Rocket,
    items: ['Vercel', 'Render', 'Cloudflare'],
  },
  {
    num: '08',
    title: 'SEO & Analytics',
    icon: BarChart3,
    items: ['Google Search Console (GSC)', 'Google Analytics'],
  },
  {
    num: '09',
    title: 'AI Tools',
    icon: Sparkles,
    items: [
      'Google AI Studio',
      'Claude',
      'Cursor',
      'GitHub Copilot',
      'Gemini API',
    ],
  },
  {
    num: '10',
    title: 'Domain Management & DNS',
    icon: Globe,
    items: ['Hostinger', 'DNS Records', 'Domain Connection'],
  },
];

export function ServicesSection({ onOpenContact }: ServicesSectionProps) {
  return (
    <section id="services" className="pt-16 sm:pt-24 pb-16 sm:pb-24">
      <div className="max-w-[1240px] mx-auto px-4 sm:px-8">
        {/* Centered Header */}
        <div className="text-center max-w-xl mx-auto mb-12 sm:mb-14">
          <div className="inline-flex items-center justify-center gap-2 text-[13px] font-medium text-[#B8C7F4] mb-3">
            <Layers className="w-4 h-4 text-[#7EA2FF]" aria-hidden="true" />
            <span>Core Skills</span>
          </div>
          <h2 className="font-display text-[clamp(1.85rem,3.4vw,2.75rem)] font-semibold tracking-tight text-white leading-[1.15] text-balance">
            Design and build solutions made for growth.
          </h2>
        </div>

        {/* Tier 1: Mixed-Contrast 3-Column Bento Architecture */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-5 items-stretch">
          {/* 01 Frontend — Crisp Editorial White Card */}
          <div className="lg:col-span-4 rounded-3xl bg-white text-[#0A0F1F] p-6 sm:p-7 flex flex-col justify-between shadow-[0_20px_50px_rgba(4,10,32,0.28)] border border-white">
            <div>
              <div className="flex items-center justify-between gap-3">
                <span className="text-[11px] font-semibold uppercase tracking-[0.14em] text-[#2557F6] tabular-nums">
                  01 / Frontend
                </span>
                <span className="w-9 h-9 rounded-xl bg-[#EDF2FE] text-[#2557F6] inline-flex items-center justify-center">
                  <Layout className="w-4 h-4" aria-hidden="true" />
                </span>
              </div>
              <h3 className="mt-3 font-display text-2xl font-semibold tracking-tight text-[#0A0F1F]">
                Frontend Engineering
              </h3>
              <p className="mt-1.5 text-[13px] leading-relaxed text-[#46516E]">
                Interactive interfaces built with modular components and clean layout systems.
              </p>
            </div>

            <ul className="mt-6 divide-y divide-[#0B1226]/7 border-t border-[#0B1226]/7">
              {FRONTEND_SKILLS.map((skill) => (
                <li
                  key={skill}
                  className="py-2 flex items-center gap-2.5 text-[13px] font-medium text-[#1A2440]"
                >
                  <span
                    aria-hidden="true"
                    className="w-1.5 h-1.5 rounded-full bg-[#2557F6] shrink-0"
                  />
                  <span>{skill}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* 02 Backend — Frosted Royal Navy Card */}
          <div className="lg:col-span-4 rounded-3xl bg-[#091848]/85 backdrop-blur-md text-white p-6 sm:p-7 flex flex-col justify-between border border-white/15 shadow-[0_20px_50px_rgba(4,10,32,0.35)]">
            <div>
              <div className="flex items-center justify-between gap-3">
                <span className="text-[11px] font-semibold uppercase tracking-[0.14em] text-[#8FB0FF] tabular-nums">
                  02 / Backend
                </span>
                <span className="w-9 h-9 rounded-xl bg-white/10 border border-white/15 text-[#8FB0FF] inline-flex items-center justify-center">
                  <Server className="w-4 h-4" aria-hidden="true" />
                </span>
              </div>
              <h3 className="mt-3 font-display text-2xl font-semibold tracking-tight text-white">
                Server &amp; Security
              </h3>
              <p className="mt-1.5 text-[13px] leading-relaxed text-[#C4D2F9]">
                Scalable REST APIs, role-based auth flows, and verified backend architecture.
              </p>
            </div>

            <ul className="mt-6 divide-y divide-white/10 border-t border-white/10">
              {BACKEND_SKILLS.map((skill) => (
                <li
                  key={skill}
                  className="py-2.5 flex items-center gap-2.5 text-[13px] font-medium text-[#EEF2FE]"
                >
                  <span
                    aria-hidden="true"
                    className="w-1.5 h-1.5 rounded-full bg-[#6289FF] shrink-0"
                  />
                  <span>{skill}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* 03 Database + 04 Design — Stacked Split Column */}
          <div className="md:col-span-2 lg:col-span-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-5">
            {/* 03 Database — Vibrant Cobalt Accent Card */}
            <div className="rounded-3xl bg-gradient-to-br from-[#2557F6] via-[#1C47D6] to-[#12319E] text-white p-6 sm:p-7 flex flex-col justify-between border border-white/20 shadow-[0_20px_45px_rgba(14,44,155,0.45)]">
              <div>
                <div className="flex items-center justify-between gap-3">
                  <span className="text-[11px] font-semibold uppercase tracking-[0.14em] text-white/80 tabular-nums">
                    03 / Database
                  </span>
                  <span className="w-9 h-9 rounded-xl bg-white/15 text-white inline-flex items-center justify-center">
                    <Database className="w-4 h-4" aria-hidden="true" />
                  </span>
                </div>
                <h3 className="mt-2.5 font-display text-xl font-semibold tracking-tight text-white">
                  Data &amp; Cloud Storage
                </h3>
              </div>

              <div className="mt-5 grid grid-cols-2 gap-2">
                {DATABASE_SKILLS.map((skill) => (
                  <div
                    key={skill}
                    className="px-3 py-2 rounded-xl bg-white/12 border border-white/20 text-[12.5px] font-medium text-white"
                  >
                    {skill}
                  </div>
                ))}
              </div>
            </div>

            {/* 04 Design — Soft Ice Architectural Card */}
            <div className="rounded-3xl bg-gradient-to-b from-[#F4F7FE] to-[#DCE6FD] text-[#0A0F1F] p-6 sm:p-7 flex flex-col justify-between border border-white/70 shadow-[0_18px_40px_rgba(4,10,32,0.22)]">
              <div>
                <div className="flex items-center justify-between gap-3">
                  <span className="text-[11px] font-semibold uppercase tracking-[0.14em] text-[#2557F6] tabular-nums">
                    04 / Design
                  </span>
                  <span className="w-9 h-9 rounded-xl bg-white text-[#2557F6] shadow-xs inline-flex items-center justify-center">
                    <Palette className="w-4 h-4" aria-hidden="true" />
                  </span>
                </div>
                <h3 className="mt-2.5 font-display text-xl font-semibold tracking-tight text-[#0A0F1F]">
                  Visual &amp; Video Craft
                </h3>
              </div>

              <div className="mt-5 flex flex-wrap gap-2">
                {DESIGN_SKILLS.map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1.5 rounded-lg bg-white text-[#0A0F1F] text-[12.5px] font-medium border border-[#0B1226]/8 shadow-[0_2px_6px_rgba(11,18,38,0.04)]"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Tier 2: Frosted Midnight Engineering & Ecosystem Specification Ledger */}
        <div className="mt-5 rounded-3xl bg-[#071238]/80 backdrop-blur-md border border-white/14 overflow-hidden shadow-[0_24px_56px_rgba(3,8,28,0.4)]">
          <div className="px-6 py-4 sm:px-8 border-b border-white/10 flex flex-wrap items-center justify-between gap-3 bg-white/[0.03]">
            <span className="text-[12px] font-semibold uppercase tracking-[0.14em] text-[#9BB7FF]">
              Infrastructure, AI &amp; Growth Stack
            </span>
            <button
              type="button"
              onClick={() => onOpenContact('Technical Stack Inquiry')}
              className="inline-flex items-center gap-1.5 text-[12.5px] font-medium text-white hover:text-[#9BB7FF] transition-colors cursor-pointer"
            >
              <span>Let&apos;s build with this stack</span>
              <ArrowUpRight className="w-3.5 h-3.5" aria-hidden="true" />
            </button>
          </div>

          <div className="divide-y divide-white/10">
            {ECOSYSTEM_LEDGER.map((row) => {
              const Icon = row.icon;
              return (
                <div
                  key={row.num}
                  className="px-6 py-4 sm:px-8 sm:py-5 grid grid-cols-1 md:grid-cols-12 gap-3 md:gap-6 items-center hover:bg-white/[0.03] transition-colors duration-150"
                >
                  <div className="md:col-span-5 flex items-center gap-3.5">
                    <span className="text-[11px] font-semibold text-[#7EA2FF] tabular-nums w-5 shrink-0">
                      {row.num}
                    </span>
                    <span className="w-8 h-8 rounded-lg bg-white/8 border border-white/12 text-[#8FB0FF] inline-flex items-center justify-center shrink-0">
                      <Icon className="w-4 h-4" aria-hidden="true" />
                    </span>
                    <h3 className="font-display text-[15px] sm:text-base font-semibold text-white tracking-tight">
                      {row.title}
                    </h3>
                  </div>

                  <div className="md:col-span-7 flex flex-wrap gap-2">
                    {row.items.map((item) => (
                      <span
                        key={item}
                        className="px-3 py-1 rounded-md bg-white/[0.07] border border-white/12 text-[12.5px] font-medium text-[#E5ECFF]"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
