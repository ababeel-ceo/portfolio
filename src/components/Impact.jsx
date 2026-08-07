import { useScrollReveal } from '../hooks/useScrollReveal';
import { impactMetrics } from '../data/profile';
import { Icons } from './Icons';

const domains = ['Insurance', 'IAM', 'OCR Automation', 'CRM'];

export default function Impact() {
  const [ref, isVisible] = useScrollReveal();

  return (
    <section id="impact" className="section-padding section-seam relative bg-white/[0.015]">
      <div className="section-container relative">
        <div ref={ref} className={`reveal ${isVisible ? 'visible' : ''}`}>
          <div className="mb-12 max-w-2xl">
            <span className="eyebrow">Business Impact</span>
            <h2 className="section-title mb-4">
              Proof of <span className="gradient-text">delivery</span>, at a glance.
            </h2>
            <p className="section-subtitle">
              The numbers behind the work — 5.7M+ transactions processed, manual effort cut by 80%,
              and resolution times down 40%, across enterprise systems recognized with corporate
              awards.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-3 md:grid-cols-4 md:gap-4">
            {impactMetrics.map((m) => {
              if (m.wide) {
                return (
                  <div
                    key={m.label}
                    className="card col-span-2 flex flex-col gap-4 p-5 sm:flex-row sm:items-center sm:gap-7 md:col-span-4 md:p-6"
                  >
                    <div className="flex shrink-0 items-center gap-3">
                      <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary-500/10 text-primary-300">
                        <Icons.layers className="h-5 w-5" />
                      </span>
                      <span className="kicker">{m.label}</span>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {domains.map((d) => (
                        <span key={d} className="tech-chip">
                          {d}
                        </span>
                      ))}
                    </div>
                  </div>
                );
              }

              return (
                <div
                  key={m.label}
                  className={`card card-hover flex flex-col justify-between p-5 md:p-6 ${
                    m.emphasis ? 'card-accent card-topline col-span-2 md:col-span-2' : ''
                  }`}
                >
                  <div
                    className={`font-display font-semibold leading-none tracking-[-0.035em] ${
                      m.emphasis ? 'text-4xl md:text-[3.25rem]' : 'text-3xl md:text-[2.5rem]'
                    } ${m.accent ? 'text-accent-400' : 'text-white'}`}
                  >
                    {m.value}
                  </div>
                  <div
                    className={`mt-3 font-mono uppercase leading-relaxed tracking-[0.16em] ${
                      m.emphasis
                        ? 'text-[11px] text-surface-300 md:text-xs'
                        : 'text-[10px] text-surface-400'
                    }`}
                  >
                    {m.label}
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
