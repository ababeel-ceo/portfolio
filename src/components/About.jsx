import { useScrollReveal } from '../hooks/useScrollReveal';
import { about } from '../data/profile';
import { Icons } from './Icons';

export default function About() {
  const [ref, isVisible] = useScrollReveal();

  return (
    <section id="about" className="section-padding relative">
      <div className="section-container relative">
        <div ref={ref} className={`reveal ${isVisible ? 'visible' : ''}`}>
          <div className="grid gap-12 lg:grid-cols-12 lg:gap-14">
            {/* Narrative */}
            <div className="lg:col-span-7">
              <span className="eyebrow">About</span>
              <h2 className="section-title">
                I build software that solves
                <br className="hidden sm:block" />{' '}
                <span className="gradient-text">real business problems.</span>
              </h2>

              <p className="mt-7 text-[1.0625rem] leading-relaxed text-surface-100 text-pretty md:text-lg">
                {about.lead}
              </p>

              <div className="mt-5 space-y-4 leading-relaxed text-surface-300 text-pretty">
                {about.paragraphs.map((p) => (
                  <p key={p.slice(0, 40)}>{p}</p>
                ))}
              </div>

              <div className="card mt-9 grid grid-cols-2 gap-x-6 gap-y-5 p-6 md:p-7">
                {about.facts.map((fact) => (
                  <div key={fact.label}>
                    <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-surface-400">
                      {fact.label}
                    </span>
                    <p className="mt-1.5 text-sm font-semibold text-surface-100">{fact.value}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Pillars */}
            <div className="lg:col-span-5">
              <div className="card card-topline p-6 md:p-8 lg:sticky lg:top-28">
                <span className="kicker">
                  <Icons.compass className="h-3.5 w-3.5 text-primary-300" />
                  How I work
                </span>

                <div className="mt-6 space-y-5">
                  {about.pillars.map((item) => (
                    <div
                      key={item.number}
                      className="group flex gap-4 rounded-2xl p-3 -mx-3 transition-colors duration-300 hover:bg-white/[0.03]"
                    >
                      <span className="shrink-0 pt-0.5 font-mono text-lg font-semibold leading-none text-surface-700 transition-colors duration-500 group-hover:text-primary-400/80">
                        {item.number}
                      </span>
                      <div>
                        <h3 className="mb-1.5 text-[15px] font-semibold text-white transition-colors duration-300 group-hover:text-primary-200">
                          {item.title}
                        </h3>
                        <p className="text-sm leading-relaxed text-surface-400">{item.desc}</p>
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
