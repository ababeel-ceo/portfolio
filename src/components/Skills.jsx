import { useScrollReveal } from '../hooks/useScrollReveal';
import { expertise } from '../data/profile';
import { Icons } from './Icons';

export default function Skills() {
  const [ref, isVisible] = useScrollReveal();

  return (
    <section id="expertise" className="section-padding relative">
      <div className="section-container">
        <div ref={ref} className={`reveal ${isVisible ? 'visible' : ''}`}>
          <div className="mb-12 max-w-2xl">
            <span className="eyebrow">Technical Expertise</span>
            <h2 className="section-title mb-4">
              Organized by <span className="gradient-text">capability</span>, not buzzwords.
            </h2>
            <p className="section-subtitle">
              The stack I use to deliver enterprise software end to end — grouped by the business
              capability it enables.
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {expertise.map((group) => {
              const Icon = Icons[group.iconKey];
              return (
                <div key={group.title} className="card card-hover group p-6 md:p-7">
                  <div className="mb-4 flex items-center gap-3.5">
                    <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-primary-500/10 text-primary-300 transition-all duration-500 group-hover:scale-105 group-hover:bg-primary-500/20">
                      <Icon className="h-5 w-5" />
                    </span>
                    <h3 className="font-display text-base font-semibold tracking-[-0.01em] text-white">
                      {group.title}
                    </h3>
                  </div>
                  <p className="mb-5 text-sm leading-relaxed text-surface-400">{group.capability}</p>
                  <div className="flex flex-wrap gap-2">
                    {group.skills.map((skill) => (
                      <span key={skill} className="tech-chip">
                        {skill}
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
