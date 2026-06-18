import { useScrollReveal } from '../hooks/useScrollReveal';
import { about } from '../data/profile';

export default function About() {
  const [ref, isVisible] = useScrollReveal();

  return (
    <section id="about" className="section-padding relative">
      <div className="section-container relative">
        <div ref={ref} className={`reveal ${isVisible ? 'visible' : ''}`}>
          <div className="grid lg:grid-cols-12 gap-12 lg:gap-16">
            {/* Narrative */}
            <div className="lg:col-span-7">
              <span className="eyebrow">About</span>
              <h2 className="section-title mb-6">
                I build software that solves<br className="hidden sm:block" />{' '}
                <span className="gradient-text">real business problems.</span>
              </h2>
              <div className="divider mb-8" />

              <p className="text-lg text-surface-200 leading-relaxed mb-5 text-pretty">
                {about.lead}
              </p>
              <div className="space-y-4 text-surface-300 leading-relaxed text-pretty">
                {about.paragraphs.map((p, i) => (
                  <p key={i}>{p}</p>
                ))}
              </div>

              <div className="mt-8 grid grid-cols-2 gap-x-6 gap-y-5 p-6 rounded-2xl bg-surface-900/60 border border-surface-700/50">
                {about.facts.map((fact) => (
                  <div key={fact.label}>
                    <span className="text-surface-400 text-[11px] tracking-wider uppercase">{fact.label}</span>
                    <p className="text-surface-100 font-semibold mt-0.5 text-sm">{fact.value}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Pillars */}
            <div className="lg:col-span-5">
              <div className="card p-6 md:p-7 lg:sticky lg:top-28">
                <span className="eyebrow">How I work</span>
                <div className="space-y-6 mt-2">
                  {about.pillars.map((item) => (
                    <div key={item.number} className="group flex gap-4">
                      <span className="text-xl font-bold text-surface-700 group-hover:text-primary-400/70 transition-colors duration-500 font-mono leading-none shrink-0 pt-0.5">
                        {item.number}
                      </span>
                      <div>
                        <h3 className="text-white font-semibold text-[15px] mb-1.5 group-hover:text-primary-300 transition-colors duration-300">
                          {item.title}
                        </h3>
                        <p className="text-surface-400 text-sm leading-relaxed">{item.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
