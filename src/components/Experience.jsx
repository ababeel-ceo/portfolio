import { useScrollReveal } from '../hooks/useScrollReveal';
import { experience } from '../data/profile';
import { Icons } from './Icons';

export default function Experience() {
  const [ref, isVisible] = useScrollReveal();

  return (
    <section id="experience" className="section-padding relative">
      <div className="section-container">
        <div ref={ref} className={`reveal ${isVisible ? 'visible' : ''}`}>
          <div className="max-w-2xl mb-12">
            <span className="eyebrow">Experience</span>
            <h2 className="section-title mb-4">
              Owning <span className="gradient-text">enterprise delivery</span>.
            </h2>
            <p className="section-subtitle">
              Full-stack ownership of production systems across identity, insurance, automation, and customer-service domains.
            </p>
          </div>

          <div className="card p-6 md:p-9">
            <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 pb-7 mb-7 border-b border-surface-700/50">
              <div className="flex items-start gap-4">
                <span className="w-12 h-12 rounded-xl bg-primary-500/10 text-primary-300 flex items-center justify-center shrink-0">
                  <Icons.building className="w-6 h-6" />
                </span>
                <div>
                  <h3 className="text-xl md:text-2xl font-bold text-white">{experience.role}</h3>
                  <p className="text-primary-300 font-medium mt-0.5">{experience.company}</p>
                  <p className="text-surface-400 text-sm mt-0.5">{experience.location}</p>
                </div>
              </div>
              <span className="pill self-start md:self-auto whitespace-nowrap">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                {experience.period}
              </span>
            </div>

            <p className="text-surface-300 leading-relaxed mb-7 text-pretty">
              {experience.summary}
            </p>

            <ul className="space-y-3.5 mb-8">
              {experience.highlights.map((h) => (
                <li key={h} className="flex items-start gap-3">
                  <span className="w-5 h-5 rounded-md bg-primary-500/15 text-primary-300 flex items-center justify-center shrink-0 mt-0.5">
                    <Icons.check className="w-3.5 h-3.5" />
                  </span>
                  <span className="text-surface-200 text-[15px] leading-relaxed">{h}</span>
                </li>
              ))}
            </ul>

            <div className="flex flex-wrap gap-2 pt-6 border-t border-surface-700/50">
              {experience.tech.map((t) => (
                <span key={t} className="tech-chip">{t}</span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
