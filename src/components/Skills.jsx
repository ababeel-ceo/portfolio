import { useScrollReveal } from '../hooks/useScrollReveal';
import { expertise } from '../data/profile';
import { Icons } from './Icons';

export default function Skills() {
  const [ref, isVisible] = useScrollReveal();

  return (
    <section id="expertise" className="section-padding relative">
      <div className="section-container">
        <div ref={ref} className={`reveal ${isVisible ? 'visible' : ''}`}>
          <div className="max-w-2xl mb-12">
            <span className="eyebrow">Technical Expertise</span>
            <h2 className="section-title mb-4">
              Organized by <span className="gradient-text">capability</span>, not buzzwords.
            </h2>
            <p className="section-subtitle">
              The stack I use to deliver enterprise software end to end — grouped by the business capability it enables.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {expertise.map((group) => {
              const Icon = Icons[group.iconKey];
              return (
                <div key={group.title} className="card card-hover p-6 group">
                  <div className="flex items-center gap-3 mb-3">
                    <span className="w-10 h-10 rounded-xl bg-primary-500/10 text-primary-300 flex items-center justify-center group-hover:bg-primary-500/20 transition-colors duration-300">
                      <Icon className="w-5 h-5" />
                    </span>
                    <h3 className="text-white font-semibold">{group.title}</h3>
                  </div>
                  <p className="text-surface-400 text-sm leading-relaxed mb-4">{group.capability}</p>
                  <div className="flex flex-wrap gap-2">
                    {group.skills.map((skill) => (
                      <span key={skill} className="tech-chip">{skill}</span>
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
