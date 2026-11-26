import { GraduationCap, Award, Calendar, CheckCircle2 } from 'lucide-react';

export function PricingSection() {
  return (
    <section id="pricing" className="pt-8 sm:pt-10 pb-20 sm:pb-32 relative overflow-hidden">
      {/* Decorative background glow */}
      <div className="absolute inset-0 pointer-events-none flex items-center justify-center opacity-30">
        <div className="w-[600px] h-[600px] bg-gradient-to-tr from-[#2557F6]/20 via-[#7EA2FF]/10 to-transparent rounded-full blur-3xl" />
      </div>

      <div className="max-w-[1000px] mx-auto px-4 sm:px-8 relative z-10">
        {/* Centered Header */}
        <div className="text-center max-w-lg mx-auto mb-8 sm:mb-16">
          <div className="inline-flex items-center justify-center gap-2 text-[12px] sm:text-[13px] font-medium text-[#B8C7F4] mb-2.5 sm:mb-3 px-3.5 sm:px-4 py-1 sm:py-1.5 rounded-full bg-white/10 border border-white/15 backdrop-blur-md">
            <GraduationCap className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#7EA2FF]" aria-hidden="true" />
            <span>Academic Background</span>
          </div>
          <h2 className="font-display text-[clamp(1.75rem,3.8vw,2.85rem)] font-bold tracking-tight text-white leading-[1.12] text-balance">
            Education &amp; Qualifications
          </h2>
          <p className="mt-2.5 sm:mt-3 text-[13.5px] sm:text-[15px] text-[#C4D2F9] leading-relaxed">
            Foundational milestones shaping technical excellence.
          </p>
        </div>

        {/* Timeline Cards Container */}
        <div className="space-y-4 sm:space-y-6">
          {/* Undergraduate Degree Card */}
          <div className="group relative rounded-2xl sm:rounded-3xl bg-white/[0.08] hover:bg-white/[0.12] border border-white/15 p-4 sm:p-8 backdrop-blur-xl shadow-[0_20px_50px_rgba(4,10,32,0.4)] transition-all duration-300">
            <div className="absolute top-0 right-0 w-32 h-32 bg-[#2557F6]/15 rounded-bl-full pointer-events-none blur-2xl" />
            <div className="flex flex-row items-center justify-between gap-3 sm:gap-6">
              <div className="flex-1 min-w-0 space-y-2 sm:space-y-3">
                <div className="flex items-center gap-1.5 sm:gap-3 flex-wrap">
                  <span className="inline-flex items-center gap-1 sm:gap-1.5 px-2.5 py-0.5 sm:px-3 sm:py-1 rounded-full bg-[#2557F6]/30 border border-[#7EA2FF]/40 text-[#DCE5FF] text-[11px] sm:text-xs font-semibold shrink-0">
                    <Calendar className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-[#7EA2FF]" />
                    2023 – 2027
                  </span>
                  <span className="inline-flex items-center px-2.5 py-0.5 sm:px-3 sm:py-1 rounded-full bg-white/10 text-white text-[11px] sm:text-xs font-medium shrink-0">
                    Bachelor of Engineering
                  </span>
                </div>

                <h3 className="font-display text-base sm:text-[1.65rem] font-bold text-white tracking-tight leading-snug">
                  B.E. Computer Science and Engineering
                </h3>

                <p className="text-[12.5px] sm:text-[16px] font-medium text-[#C4D2F9] leading-snug">
                  St. Joseph&apos;s College of Engineering and Technology, Thanjavur
                </p>

                <div className="pt-0.5 sm:pt-2 flex flex-wrap gap-1.5 sm:gap-2">
                  {['MERN Stack & Full-Stack', 'Data Structures & Algorithms', 'Cloud & AI Engineering'].map((tag) => (
                    <span key={tag} className="text-[10px] sm:text-xs px-2 py-0.5 sm:px-3 sm:py-1 rounded-md sm:rounded-lg bg-white/6 border border-white/10 text-[#DCE5FF]">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              <div className="shrink-0 w-11 h-11 sm:w-16 sm:h-16 rounded-xl sm:rounded-2xl bg-gradient-to-br from-[#2557F6] to-[#1A44D4] text-white shadow-lg shadow-[#2557F6]/30 flex items-center justify-center self-center">
                <Award className="w-5 h-5 sm:w-8 sm:h-8" />
              </div>
            </div>
          </div>

          {/* Higher Secondary Card */}
          <div className="group relative rounded-2xl sm:rounded-3xl bg-white/[0.06] hover:bg-white/[0.1] border border-white/12 p-4 sm:p-8 backdrop-blur-xl shadow-[0_20px_50px_rgba(4,10,32,0.3)] transition-all duration-300">
            <div className="flex flex-row items-center justify-between gap-3 sm:gap-6">
              <div className="flex-1 min-w-0 space-y-2 sm:space-y-3">
                <div className="flex items-center gap-1.5 sm:gap-3 flex-wrap">
                  <span className="inline-flex items-center gap-1 sm:gap-1.5 px-2.5 py-0.5 sm:px-3 sm:py-1 rounded-full bg-emerald-500/20 border border-emerald-400/30 text-emerald-300 text-[11px] sm:text-xs font-semibold shrink-0">
                    <CheckCircle2 className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-emerald-400" />
                    79.9% Score
                  </span>
                  <span className="inline-flex items-center px-2.5 py-0.5 sm:px-3 sm:py-1 rounded-full bg-white/10 text-white text-[11px] sm:text-xs font-medium shrink-0">
                    Higher Secondary (12th)
                  </span>
                </div>

                <h3 className="font-display text-base sm:text-[1.5rem] font-bold text-white tracking-tight leading-snug">
                  Amalraj Matriculation Higher Secondary School
                </h3>

                <p className="text-[12px] sm:text-[15px] text-[#B8C7F4] leading-relaxed">
                  Completed higher secondary education with distinction in computer science and mathematics.
                </p>
              </div>

              <div className="shrink-0 w-11 h-11 sm:w-16 sm:h-16 rounded-xl sm:rounded-2xl bg-white/10 border border-white/15 text-white flex items-center justify-center self-center">
                <GraduationCap className="w-5 h-5 sm:w-8 sm:h-8 text-[#7EA2FF]" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
