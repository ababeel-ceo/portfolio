import { useScrollReveal } from '../hooks/useScrollReveal';
import { awards, certifications } from '../data/profile';
import { Icons } from './Icons';

export default function Achievements() {
  const [ref, isVisible] = useScrollReveal();
  const [certRef, certVisible] = useScrollReveal();

  return (
    <section id="awards" className="section-padding relative bg-surface-900/30 border-y border-surface-800/50">
      <div className="section-container relative">
        <div ref={ref} className={`reveal ${isVisible ? 'visible' : ''}`}>
          <div className="max-w-2xl mb-12">
            <span className="eyebrow">Awards &amp; Recognition</span>
            <h2 className="section-title mb-4">
              Recognized for <span className="gradient-text">measurable impact</span>.
            </h2>
            <p className="section-subtitle">
              Two corporate awards in three years — for software that improved real operations and earned client trust.
            </p>
          </div>

          {/* Timeline */}
          <div className="relative">
            {/* connector line */}
            <div className="hidden md:block absolute top-9 left-[12.5%] right-[12.5%] h-px bg-gradient-to-r from-primary-500/40 via-primary-400/60 to-accent-500/40" />

            <div className="grid md:grid-cols-2 gap-6 lg:gap-10">
              {awards.map((award) => {
                const Icon = Icons[award.iconKey];
                return (
                  <div key={award.title} className="relative">
                    {/* node */}
                    <div className="flex justify-center mb-5">
                      <div className="relative">
                        <div className={`w-[72px] h-[72px] rounded-2xl bg-gradient-to-br ${award.gradient} p-0.5 shadow-lg shadow-black/30`}>
                          <div className="w-full h-full rounded-[14px] bg-surface-900 flex items-center justify-center text-white">
                            <Icon className="w-8 h-8" />
                          </div>
                        </div>
                        <span className="absolute -bottom-2 left-1/2 -translate-x-1/2 px-2.5 py-0.5 rounded-full bg-surface-800 border border-surface-700 text-xs font-mono font-semibold text-primary-300">
                          {award.year}
                        </span>
                      </div>
                    </div>

                    <div className="card card-hover p-6 md:p-7 text-center h-full flex flex-col">
                      <h3 className="text-lg font-bold text-white">{award.title}</h3>
                      <p className={`text-sm font-medium mt-1 mb-4 bg-gradient-to-r ${award.gradient} bg-clip-text text-transparent`}>
                        {award.org}
                      </p>
                      <p className="text-surface-300 text-sm leading-relaxed flex-1">{award.summary}</p>
                      <a
                        href="#work"
                        className="inline-flex items-center justify-center gap-1.5 mt-5 text-sm font-medium text-primary-300 hover:text-primary-200 transition-colors duration-200"
                      >
                        Explore in Case Studies
                        <Icons.arrowRight className="w-4 h-4" />
                      </a>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* Certifications */}
        <div ref={certRef} className={`reveal ${certVisible ? 'visible' : ''} mt-16`}>
          <div className="flex items-center gap-3 mb-5">
            <span className="text-surface-300 font-semibold text-sm uppercase tracking-wider">Certifications</span>
            <div className="flex-1 h-px bg-surface-700/50" />
          </div>
          <div className="grid sm:grid-cols-3 gap-4">
            {certifications.map((cert) => (
              <div key={cert.title} className="card p-4 flex items-center gap-3">
                <span className="w-9 h-9 rounded-lg bg-primary-500/10 text-primary-300 flex items-center justify-center shrink-0">
                  <Icons.check className="w-4 h-4" />
                </span>
                <div className="min-w-0">
                  <p className="text-surface-100 font-semibold text-sm truncate">{cert.title}</p>
                  <p className="text-surface-400 text-xs">{cert.org} · {cert.year}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
