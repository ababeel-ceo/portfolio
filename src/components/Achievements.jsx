import { useScrollReveal } from '../hooks/useScrollReveal';
import { awards, certifications } from '../data/profile';
import { Icons } from './Icons';

export default function Achievements() {
  const [ref, isVisible] = useScrollReveal();
  const [certRef, certVisible] = useScrollReveal();

  return (
    <section id="awards" className="section-padding section-seam relative bg-white/[0.015]">
      <div className="section-container relative">
        <div ref={ref} className={`reveal ${isVisible ? 'visible' : ''}`}>
          <div className="mb-12 max-w-2xl">
            <span className="eyebrow">Awards &amp; Recognition</span>
            <h2 className="section-title mb-4">
              Recognized for <span className="gradient-text">measurable impact</span>.
            </h2>
            <p className="section-subtitle">
              Two corporate awards in three years — for software that improved real operations and
              earned client trust.
            </p>
          </div>

          <div className="grid gap-4 md:grid-cols-2 md:gap-6">
            {awards.map((award) => {
              const Icon = Icons[award.iconKey];
              return (
                <div key={award.title} className="card card-hover card-topline group flex flex-col p-6 md:p-8">
                  <div className="flex items-start justify-between gap-4">
                    <span
                      className={`flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br ${award.gradient} p-px shadow-float transition-transform duration-500 group-hover:scale-105`}
                    >
                      <span className="flex h-full w-full items-center justify-center rounded-[15px] bg-surface-900 text-white">
                        <Icon className="h-6 w-6" />
                      </span>
                    </span>
                    <span className="rounded-full border border-white/[0.08] bg-white/[0.04] px-3 py-1 font-mono text-xs font-semibold text-primary-200">
                      {award.year}
                    </span>
                  </div>

                  <h3 className="mt-6 font-display text-lg font-semibold tracking-[-0.015em] text-white">
                    {award.title}
                  </h3>
                  <p
                    className={`mt-1.5 bg-gradient-to-r text-sm font-medium ${award.gradient} bg-clip-text text-transparent`}
                  >
                    {award.org}
                  </p>
                  <p className="mt-4 flex-1 text-sm leading-relaxed text-surface-300 text-pretty">
                    {award.summary}
                  </p>

                  <a
                    href="#work"
                    className="mt-6 inline-flex items-center gap-2 text-sm font-medium text-primary-300 transition-colors duration-300 hover:text-primary-200"
                  >
                    Explore in case studies
                    <Icons.arrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                  </a>
                </div>
              );
            })}
          </div>
        </div>

        {/* Certifications */}
        <div ref={certRef} className={`reveal ${certVisible ? 'visible' : ''} mt-14`}>
          <div className="mb-5 flex items-center gap-4">
            <span className="kicker">Certifications</span>
            <div className="h-px flex-1 bg-white/[0.07]" />
          </div>
          <div className="grid gap-4 sm:grid-cols-3">
            {certifications.map((cert) => (
              <div key={cert.title} className="card card-hover flex items-center gap-3.5 p-4">
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-primary-500/10 text-primary-300">
                  <Icons.check className="h-4 w-4" />
                </span>
                <div className="min-w-0">
                  <p className="truncate text-sm font-semibold text-surface-100">{cert.title}</p>
                  <p className="mt-0.5 text-xs text-surface-400">
                    {cert.org} · {cert.year}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
