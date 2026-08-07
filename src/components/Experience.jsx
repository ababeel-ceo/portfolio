import { useScrollReveal } from '../hooks/useScrollReveal';
import { experience } from '../data/profile';
import { Icons } from './Icons';

export default function Experience() {
  const [ref, isVisible] = useScrollReveal();

  return (
    <section id="experience" className="section-padding relative">
      <div className="section-container">
        <div ref={ref} className={`reveal ${isVisible ? 'visible' : ''}`}>
          <div className="mb-12 max-w-2xl">
            <span className="eyebrow">Experience</span>
            <h2 className="section-title mb-4">
              Owning <span className="gradient-text">enterprise delivery</span>.
            </h2>
            <p className="section-subtitle">
              Full-stack ownership of production systems across identity, insurance, automation, and
              customer-service domains.
            </p>
          </div>

          <div className="card card-topline p-6 md:p-9 lg:p-10">
            <div className="mb-8 flex flex-col gap-5 border-b border-white/[0.06] pb-8 md:flex-row md:items-start md:justify-between">
              <div className="flex items-start gap-4">
                <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-primary-500/10 text-primary-300">
                  <Icons.building className="h-6 w-6" />
                </span>
                <div>
                  <h3 className="font-display text-xl font-semibold tracking-[-0.02em] text-white md:text-2xl">
                    {experience.role}
                  </h3>
                  <p className="mt-1 font-medium text-primary-300">{experience.company}</p>
                  <p className="mt-1 inline-flex items-center gap-1.5 text-sm text-surface-400">
                    <Icons.location className="h-3.5 w-3.5" />
                    {experience.location}
                  </p>
                </div>
              </div>
              <span className="pill self-start whitespace-nowrap md:self-auto">
                <span className="status-dot" />
                {experience.period}
              </span>
            </div>

            <p className="mb-8 leading-relaxed text-surface-300 text-pretty">{experience.summary}</p>

            <ul className="mb-9 grid gap-3.5 md:grid-cols-2 md:gap-x-8">
              {experience.highlights.map((h) => (
                <li key={h} className="flex items-start gap-3">
                  <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-md bg-primary-500/[0.15] text-primary-300">
                    <Icons.check className="h-3.5 w-3.5" />
                  </span>
                  <span className="text-[15px] leading-relaxed text-surface-200 text-pretty">{h}</span>
                </li>
              ))}
            </ul>

            <div className="flex flex-wrap gap-2 border-t border-white/[0.06] pt-7">
              {experience.tech.map((t) => (
                <span key={t} className="tech-chip">
                  {t}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
