import { useState } from 'react';
import { useScrollReveal } from '../hooks/useScrollReveal';
import { caseStudies } from '../data/profile';
import { Icons } from './Icons';

function Preview({ study }) {
  const Icon = Icons[study.iconKey];
  return (
    <div className="preview-window">
      <div className="preview-bar">
        <span className="preview-dot" />
        <span className="preview-dot" />
        <span className="preview-dot" />
        <span className="ml-2 text-[10px] font-mono text-surface-500 truncate">
          {study.id}.vivant360.app
        </span>
      </div>

      {study.image ? (
        <img
          src={`${import.meta.env.BASE_URL}${study.image}`}
          alt={`${study.name} interface`}
          className="w-full aspect-[16/9] object-cover"
          loading="lazy"
        />
      ) : (
        <div className={`relative aspect-[16/9] bg-gradient-to-br ${study.gradient} overflow-hidden`}>
          <div className="absolute inset-0 bg-surface-950/70" />
          {/* schematic dashboard motif */}
          <div className="absolute inset-0 p-4 sm:p-5 flex flex-col gap-2.5 sm:gap-3">
            <div className="flex items-center gap-3">
              <span className="w-8 h-8 sm:w-9 sm:h-9 rounded-lg bg-white/10 backdrop-blur flex items-center justify-center text-white">
                <Icon className="w-4 h-4 sm:w-5 sm:h-5" />
              </span>
              <div className="flex-1">
                <div className="h-2 w-1/3 rounded bg-white/25" />
                <div className="mt-1.5 h-1.5 w-1/4 rounded bg-white/15" />
              </div>
            </div>
            <div className="grid grid-cols-3 gap-2 sm:gap-2.5 mt-1">
              {[0, 1, 2].map((i) => (
                <div key={i} className="rounded-lg bg-white/8 border border-white/10 p-2 sm:p-2.5">
                  <div className="h-1.5 w-2/3 rounded bg-white/25" />
                  <div className="mt-2 h-3 w-1/2 rounded bg-white/20" />
                </div>
              ))}
            </div>
            <div className="flex-1 rounded-lg bg-white/8 border border-white/10 p-2.5 sm:p-3 flex items-end gap-1.5">
              {[40, 65, 50, 80, 60, 92, 70].map((h, i) => (
                <div key={i} className="flex-1 rounded-t bg-white/25" style={{ height: `${h}%` }} />
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

/* Shared detail body — rendered inside the desktop panel and the mobile accordion.
   `showTitle` is false on mobile because the card header already names the study. */
function StudyDetail({ study, showTitle = true }) {
  const Icon = Icons[study.iconKey];
  return (
    <>
      <Preview study={study} />

      <div className="mt-5 sm:mt-6">
        {showTitle ? (
          <>
            <div className="flex items-center gap-3 mb-2">
              <span className="w-9 h-9 rounded-lg bg-primary-500/15 text-primary-300 flex items-center justify-center shrink-0">
                <Icon className="w-5 h-5" />
              </span>
              <h3 className="text-xl md:text-2xl font-bold text-white text-balance">{study.name}</h3>
            </div>
            <div className="flex flex-wrap items-center gap-2 mb-4">
              <span className="text-primary-300 text-xs font-mono uppercase tracking-wider">{study.domain}</span>
              {study.award && (
                <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-amber-400/10 border border-amber-400/20 text-amber-300 text-[11px] font-medium">
                  <Icons.trophy className="w-3.5 h-3.5" />
                  {study.award}
                </span>
              )}
            </div>
          </>
        ) : (
          study.award && (
            <div className="mb-4">
              <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-amber-400/10 border border-amber-400/20 text-amber-300 text-[11px] font-medium">
                <Icons.trophy className="w-3.5 h-3.5" />
                {study.award}
              </span>
            </div>
          )
        )}

        <p className="text-surface-200 leading-relaxed text-pretty text-sm sm:text-base">{study.overview}</p>

        {/* Challenge / Outcome */}
        <div className="grid sm:grid-cols-2 gap-3 sm:gap-4 mt-5 sm:mt-6">
          <div className="rounded-xl bg-surface-950/50 border border-surface-700/40 p-4">
            <span className="flex items-center gap-2 text-[11px] font-mono uppercase tracking-wider text-accent-400 mb-2">
              <span className="w-1.5 h-1.5 rounded-full bg-accent-500" /> Business Challenge
            </span>
            <p className="text-surface-300 text-sm leading-relaxed text-pretty">{study.challenge}</p>
          </div>
          <div className="rounded-xl bg-primary-500/[0.06] border border-primary-500/20 p-4">
            <span className="flex items-center gap-2 text-[11px] font-mono uppercase tracking-wider text-primary-300 mb-2">
              <span className="w-1.5 h-1.5 rounded-full bg-primary-400" /> Business Outcome
            </span>
            <p className="text-surface-200 text-sm leading-relaxed text-pretty">{study.outcome}</p>
          </div>
        </div>

        {/* Contribution & Architecture */}
        <div className="grid md:grid-cols-2 gap-x-8 gap-y-6 mt-5 sm:mt-6">
          <div>
            <h4 className="text-white font-semibold text-sm mb-3">My Contribution</h4>
            <ul className="space-y-2.5">
              {study.contribution.map((c) => (
                <li key={c} className="flex items-start gap-2.5">
                  <Icons.check className="w-4 h-4 text-primary-300 shrink-0 mt-0.5" />
                  <span className="text-surface-300 text-sm leading-relaxed text-pretty">{c}</span>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="text-white font-semibold text-sm mb-3">Architecture Highlights</h4>
            <ul className="space-y-2.5">
              {study.architecture.map((a) => (
                <li key={a} className="flex items-start gap-2.5">
                  <Icons.layers className="w-4 h-4 text-surface-400 shrink-0 mt-0.5" />
                  <span className="text-surface-300 text-sm leading-relaxed text-pretty">{a}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Key learnings */}
        <div className="mt-5 sm:mt-6 flex items-start gap-3 rounded-xl bg-surface-800/40 border border-surface-700/40 p-4">
          <Icons.sparkle className="w-5 h-5 text-primary-300 shrink-0 mt-0.5" />
          <div>
            <span className="text-surface-100 font-semibold text-sm">Key takeaway — </span>
            <span className="text-surface-300 text-sm leading-relaxed text-pretty">{study.learnings}</span>
          </div>
        </div>

        {/* Metrics */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mt-5 sm:mt-6">
          {study.metrics.map((m) => (
            <div key={m.label} className="metric-cell">
              <div className="metric-value break-words">{m.value}</div>
              <div className="metric-label">{m.label}</div>
            </div>
          ))}
        </div>

        {/* Tech + optional repo link */}
        <div className="flex flex-wrap items-center gap-2 mt-5 sm:mt-6 pt-5 sm:pt-6 border-t border-surface-700/50">
          {study.tech.map((t) => (
            <span key={t} className="tech-chip">{t}</span>
          ))}
          {study.repo && (
            <a
              href={study.repo}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-surface-800/70 border border-surface-700/50 text-surface-200 text-xs font-medium hover:text-primary-300 hover:border-primary-500/40 hover:bg-primary-500/5 transition-all duration-300"
            >
              <Icons.github className="w-4 h-4" />
              View source on GitHub
              <Icons.external className="w-3.5 h-3.5" />
            </a>
          )}
        </div>
      </div>
    </>
  );
}

export default function CaseStudies() {
  const [ref, isVisible] = useScrollReveal();
  const [active, setActive] = useState(0);
  const study = caseStudies[active];

  return (
    <section id="work" className="section-padding relative bg-surface-900/30 border-y border-surface-800/50">
      <div className="section-container">
        <div ref={ref} className={`reveal ${isVisible ? 'visible' : ''}`}>
          <div className="max-w-2xl mb-10 md:mb-12">
            <span className="eyebrow">Featured Case Studies</span>
            <h2 className="section-title mb-4">
              Real systems, <span className="gradient-text">delivered end to end.</span>
            </h2>
            <p className="section-subtitle">
              Each one started as a business problem and shipped as production software. Select a case study to see the challenge, the architecture, and the outcome.
            </p>
          </div>

          {/* ── Desktop / large screens: master–detail layout ── */}
          <div className="hidden lg:grid lg:grid-cols-12 gap-8">
            {/* Selector rail */}
            <div className="lg:col-span-4">
              <div className="flex flex-col gap-2.5">
                {caseStudies.map((cs, i) => {
                  const CsIcon = Icons[cs.iconKey];
                  const isActive = i === active;
                  return (
                    <button
                      key={cs.id}
                      onClick={() => setActive(i)}
                      aria-pressed={isActive}
                      className={`group text-left w-full rounded-xl border p-4 transition-all duration-300 ${
                        isActive
                          ? 'border-primary-500/50 bg-surface-800/70 shadow-[0_12px_40px_-20px_rgba(35,138,175,0.5)]'
                          : 'border-surface-700/50 bg-surface-900/40 hover:border-surface-600 hover:bg-surface-800/50'
                      }`}
                    >
                      <div className="flex items-start gap-3">
                        <span
                          className={`w-10 h-10 rounded-lg flex items-center justify-center shrink-0 transition-colors duration-300 ${
                            isActive ? 'bg-primary-500/20 text-primary-200' : 'bg-surface-800/80 text-surface-400 group-hover:text-primary-300'
                          }`}
                        >
                          <CsIcon className="w-5 h-5" />
                        </span>
                        <div className="min-w-0">
                          <h3 className={`font-semibold text-sm leading-snug text-balance ${isActive ? 'text-white' : 'text-surface-200'}`}>
                            {cs.name}
                          </h3>
                          <p className="text-surface-400 text-xs mt-1">{cs.domain}</p>
                          {cs.award && (
                            <span className="inline-flex items-center gap-1 mt-2 text-[10px] font-medium text-amber-300/90">
                              <Icons.trophy className="w-3 h-3" />
                              Award-winning
                            </span>
                          )}
                        </div>
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Detail panel */}
            <div className="lg:col-span-8">
              <div key={study.id} className="card p-6 md:p-8 animate-fade-in">
                <StudyDetail study={study} />
              </div>
            </div>
          </div>

          {/* ── Mobile / tablet: accordion (no horizontal scroll, no disconnect) ── */}
          <div className="lg:hidden space-y-3">
            {caseStudies.map((cs, i) => {
              const CsIcon = Icons[cs.iconKey];
              const isOpen = i === active;
              return (
                <div
                  key={cs.id}
                  className={`card overflow-hidden transition-colors duration-300 ${
                    isOpen ? 'border-primary-500/40 bg-surface-800/50' : ''
                  }`}
                >
                  <button
                    onClick={() => setActive(isOpen ? -1 : i)}
                    aria-expanded={isOpen}
                    aria-controls={`cs-panel-${cs.id}`}
                    className="w-full text-left flex items-center gap-3 p-4"
                  >
                    <span
                      className={`w-10 h-10 rounded-lg flex items-center justify-center shrink-0 transition-colors duration-300 ${
                        isOpen ? 'bg-primary-500/20 text-primary-200' : 'bg-surface-800/80 text-surface-400'
                      }`}
                    >
                      <CsIcon className="w-5 h-5" />
                    </span>
                    <div className="min-w-0 flex-1">
                      <h3 className={`font-semibold text-sm leading-snug text-pretty ${isOpen ? 'text-white' : 'text-surface-200'}`}>
                        {cs.name}
                      </h3>
                      <div className="flex flex-wrap items-center gap-x-2 gap-y-1 mt-1">
                        <p className="text-surface-400 text-xs">{cs.domain}</p>
                        {cs.award && (
                          <span className="inline-flex items-center gap-1 text-[10px] font-medium text-amber-300/90">
                            <Icons.trophy className="w-3 h-3" />
                            Award-winning
                          </span>
                        )}
                      </div>
                    </div>
                    <svg
                      className={`w-5 h-5 text-surface-400 shrink-0 transition-transform duration-300 ${isOpen ? 'rotate-180 text-primary-300' : ''}`}
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={1.6}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M6 9l6 6 6-6" />
                    </svg>
                  </button>

                  {isOpen && (
                    <div id={`cs-panel-${cs.id}`} className="px-4 pb-5 pt-1 border-t border-surface-700/50 animate-fade-in">
                      <div className="pt-4">
                        <StudyDetail study={cs} showTitle={false} />
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
