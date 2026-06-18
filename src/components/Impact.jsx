import { useScrollReveal } from '../hooks/useScrollReveal';
import { impactMetrics } from '../data/profile';
import { Icons } from './Icons';

const domains = ['Insurance', 'IAM', 'OCR Automation', 'CRM'];

export default function Impact() {
  const [ref, isVisible] = useScrollReveal();

  return (
    <section id="impact" className="section-padding relative bg-surface-900/30 border-y border-surface-800/50">
      <div className="section-container relative">
        <div ref={ref} className={`reveal ${isVisible ? 'visible' : ''}`}>
          <div className="max-w-2xl mb-12">
            <span className="eyebrow">Business Impact</span>
            <h2 className="section-title mb-4">
              Proof of <span className="gradient-text">delivery</span>, at a glance.
            </h2>
            <p className="section-subtitle">
              A snapshot of what I have shipped — enterprise applications in production, across multiple business domains, recognized with corporate awards.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4">
            {impactMetrics.map((m) => {
              if (m.wide) {
                return (
                  <div
                    key={m.label}
                    className="col-span-2 md:col-span-4 card p-5 md:p-6 flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-6"
                  >
                    <div className="flex items-center gap-3 shrink-0">
                      <span className="w-10 h-10 rounded-xl bg-primary-500/10 text-primary-300 flex items-center justify-center">
                        <Icons.layers className="w-5 h-5" />
                      </span>
                      <span className="text-surface-300 text-sm font-medium uppercase tracking-wider">{m.label}</span>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {domains.map((d) => (
                        <span key={d} className="pill text-sm">{d}</span>
                      ))}
                    </div>
                  </div>
                );
              }
              return (
                <div
                  key={m.label}
                  className={`card card-hover p-5 md:p-6 flex flex-col justify-between ${m.emphasis ? 'col-span-2 md:col-span-2 bg-gradient-to-br from-primary-500/10 to-surface-900/60 border-primary-500/30' : ''}`}
                >
                  <div className={`font-bold leading-none ${m.emphasis ? 'text-4xl md:text-5xl' : 'text-3xl md:text-4xl'} ${m.accent ? 'text-accent-400' : 'text-white'}`}>
                    {m.value}
                  </div>
                  <div className={`mt-3 text-surface-400 ${m.emphasis ? 'text-sm md:text-base text-surface-300' : 'text-xs md:text-sm'} leading-snug`}>
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
