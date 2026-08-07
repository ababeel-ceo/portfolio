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
        <span className="ml-2 truncate font-mono text-[10px] text-surface-500">
          {study.host ?? `${study.id}.vivant360.app`}
        </span>
      </div>

      {study.image ? (
        <img
          src={`${import.meta.env.BASE_URL}${study.image}`}
          alt={`${study.name} interface`}
          className="aspect-[16/9] w-full object-cover"
          loading="lazy"
        />
      ) : (
        <div className={`relative aspect-[16/9] overflow-hidden bg-gradient-to-br ${study.gradient}`}>
          <div className="absolute inset-0 bg-surface-950/75" />
          {/* Schematic dashboard motif */}
          <div className="absolute inset-0 flex flex-col gap-2.5 p-4 sm:gap-3 sm:p-5">
            <div className="flex items-center gap-3">
              <span className="flex h-8 w-8 items-center justify-center rounded-xl bg-white/10 text-white backdrop-blur sm:h-9 sm:w-9">
                <Icon className="h-4 w-4 sm:h-5 sm:w-5" />
              </span>
              <div className="flex-1">
                <div className="h-2 w-1/3 rounded-full bg-white/25" />
                <div className="mt-1.5 h-1.5 w-1/4 rounded-full bg-white/[0.15]" />
              </div>
            </div>
            <div className="mt-1 grid grid-cols-3 gap-2 sm:gap-2.5">
              {[0, 1, 2].map((i) => (
                <div key={i} className="rounded-xl border border-white/10 bg-white/[0.08] p-2 sm:p-2.5">
                  <div className="h-1.5 w-2/3 rounded-full bg-white/25" />
                  <div className="mt-2 h-3 w-1/2 rounded-full bg-white/20" />
                </div>
              ))}
            </div>
            <div className="flex flex-1 items-end gap-1.5 rounded-xl border border-white/10 bg-white/[0.08] p-2.5 sm:p-3">
              {[40, 65, 50, 80, 60, 92, 70].map((h, i) => (
                <div key={i} className="flex-1 rounded-t-sm bg-white/25" style={{ height: `${h}%` }} />
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

function AwardBadge({ award }) {
  return (
    <span className="inline-flex items-center gap-1.5 rounded-full border border-amber-400/20 bg-amber-400/10 px-2.5 py-1 text-[11px] font-medium text-amber-300">
      <Icons.trophy className="h-3.5 w-3.5" />
      {award}
    </span>
  );
}

/* Shared detail body — rendered inside the desktop panel and the mobile accordion.
   `showTitle` is false on mobile because the card header already names the study. */
function StudyDetail({ study, showTitle = true }) {
  const Icon = Icons[study.iconKey];
  return (
    <>
      <Preview study={study} />

      <div className="mt-6">
        {showTitle ? (
          <>
            <div className="mb-3 flex items-center gap-3">
              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-primary-500/[0.15] text-primary-300">
                <Icon className="h-5 w-5" />
              </span>
              <h3 className="font-display text-xl font-semibold tracking-[-0.02em] text-white text-balance md:text-[1.6rem]">
                {study.name}
              </h3>
            </div>
            <div className="mb-5 flex flex-wrap items-center gap-2">
              <span className="font-mono text-[10px] uppercase tracking-[0.22em] text-primary-300">
                {study.domain}
              </span>
              {study.award && <AwardBadge award={study.award} />}
            </div>
          </>
        ) : (
          study.award && (
            <div className="mb-5">
              <AwardBadge award={study.award} />
            </div>
          )
        )}

        <p className="text-sm leading-relaxed text-surface-200 text-pretty sm:text-base">
          {study.overview}
        </p>

        {/* Challenge / Outcome */}
        <div className="mt-6 grid gap-3 sm:grid-cols-2 sm:gap-4">
          <div className="rounded-2xl border border-white/[0.06] bg-surface-950/50 p-4">
            <span className="mb-2.5 flex items-center gap-2 font-mono text-[10px] uppercase tracking-[0.2em] text-accent-400">
              <span className="h-1.5 w-1.5 rounded-full bg-accent-500" /> Business Challenge
            </span>
            <p className="text-sm leading-relaxed text-surface-300 text-pretty">{study.challenge}</p>
          </div>
          <div className="rounded-2xl border border-primary-400/20 bg-primary-500/[0.07] p-4">
            <span className="mb-2.5 flex items-center gap-2 font-mono text-[10px] uppercase tracking-[0.2em] text-primary-300">
              <span className="h-1.5 w-1.5 rounded-full bg-primary-400" /> Business Outcome
            </span>
            <p className="text-sm leading-relaxed text-surface-200 text-pretty">{study.outcome}</p>
          </div>
        </div>

        {/* Contribution & Architecture */}
        <div className="mt-6 grid gap-x-8 gap-y-6 md:grid-cols-2">
          <div>
            <h4 className="kicker mb-3.5">My contribution</h4>
            <ul className="space-y-2.5">
              {study.contribution.map((c) => (
                <li key={c} className="flex items-start gap-2.5">
                  <Icons.check className="mt-0.5 h-4 w-4 shrink-0 text-primary-300" />
                  <span className="text-sm leading-relaxed text-surface-300 text-pretty">{c}</span>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="kicker mb-3.5">Architecture highlights</h4>
            <ul className="space-y-2.5">
              {study.architecture.map((a) => (
                <li key={a} className="flex items-start gap-2.5">
                  <Icons.layers className="mt-0.5 h-4 w-4 shrink-0 text-surface-400" />
                  <span className="text-sm leading-relaxed text-surface-300 text-pretty">{a}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Key takeaway */}
        <div className="mt-6 flex items-start gap-3 rounded-2xl border border-white/[0.06] bg-white/[0.03] p-4">
          <Icons.sparkle className="mt-0.5 h-5 w-5 shrink-0 text-primary-300" />
          <p className="text-sm leading-relaxed text-surface-300 text-pretty">
            <span className="font-semibold text-surface-100">Key takeaway — </span>
            {study.learnings}
          </p>
        </div>

        {/* Metrics */}
        <div className="mt-6 grid grid-cols-2 gap-3 md:grid-cols-4">
          {study.metrics.map((m) => (
            <div key={m.label} className="metric-cell">
              <div className="metric-value break-words">{m.value}</div>
              <div className="metric-label">{m.label}</div>
            </div>
          ))}
        </div>

        {/* Tech + optional repo link */}
        <div className="mt-6 flex flex-wrap items-center gap-2 border-t border-white/[0.06] pt-6">
          {study.tech.map((t) => (
            <span key={t} className="tech-chip">
              {t}
            </span>
          ))}
          {study.repo && (
            <a
              href={study.repo}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-white/[0.07] bg-white/[0.03] px-3.5 py-1.5 text-xs font-medium text-surface-200 transition-all duration-300 hover:border-primary-400/40 hover:bg-primary-500/10 hover:text-primary-200"
            >
              <Icons.github className="h-4 w-4" />
              View source on GitHub
              <Icons.external className="h-3.5 w-3.5" />
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
    <section id="work" className="section-padding section-seam relative bg-white/[0.015]">
      <div className="section-container">
        <div ref={ref} className={`reveal ${isVisible ? 'visible' : ''}`}>
          <div className="mb-10 max-w-2xl md:mb-12">
            <span className="eyebrow">Featured Case Studies</span>
            <h2 className="section-title mb-4">
              Real systems, <span className="gradient-text">delivered end to end.</span>
            </h2>
            <p className="section-subtitle">
              Each one started as a business problem and shipped as production software. Select a
              case study to see the challenge, the architecture, and the outcome.
            </p>
          </div>

          {/* ── Desktop: master–detail layout ── */}
          <div className="hidden gap-8 lg:grid lg:grid-cols-12">
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
                      className={`group w-full rounded-2xl border p-4 text-left transition-all duration-300 ${
                        isActive
                          ? 'border-primary-400/40 bg-primary-500/[0.08] shadow-lift'
                          : 'border-white/[0.06] bg-white/[0.02] hover:-translate-y-0.5 hover:border-white/[0.12] hover:bg-white/[0.04]'
                      }`}
                    >
                      <div className="flex items-start gap-3">
                        <span
                          className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-xl transition-colors duration-300 ${
                            isActive
                              ? 'bg-primary-500/20 text-primary-200'
                              : 'bg-white/[0.04] text-surface-400 group-hover:text-primary-300'
                          }`}
                        >
                          <CsIcon className="h-5 w-5" />
                        </span>
                        <div className="min-w-0">
                          <h3
                            className={`text-sm font-semibold leading-snug text-balance ${
                              isActive ? 'text-white' : 'text-surface-200'
                            }`}
                          >
                            {cs.name}
                          </h3>
                          <p className="mt-1.5 font-mono text-[10px] uppercase tracking-[0.16em] text-surface-500">
                            {cs.domain}
                          </p>
                          {cs.award && (
                            <span className="mt-2 inline-flex items-center gap-1 text-[10px] font-medium text-amber-300/90">
                              <Icons.trophy className="h-3 w-3" />
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

            <div className="lg:col-span-8">
              <div key={study.id} className="card animate-fade-in p-6 md:p-8">
                <StudyDetail study={study} />
              </div>
            </div>
          </div>

          {/* ── Mobile / tablet: accordion ── */}
          <div className="space-y-3 lg:hidden">
            {caseStudies.map((cs, i) => {
              const CsIcon = Icons[cs.iconKey];
              const isOpen = i === active;
              return (
                <div
                  key={cs.id}
                  className={`card overflow-hidden ${
                    isOpen ? '!border-primary-400/[0.35] bg-primary-500/[0.05]' : ''
                  }`}
                >
                  <button
                    onClick={() => setActive(isOpen ? -1 : i)}
                    aria-expanded={isOpen}
                    aria-controls={`cs-panel-${cs.id}`}
                    className="flex w-full items-center gap-3 p-4 text-left"
                  >
                    <span
                      className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-xl transition-colors duration-300 ${
                        isOpen ? 'bg-primary-500/20 text-primary-200' : 'bg-white/[0.04] text-surface-400'
                      }`}
                    >
                      <CsIcon className="h-5 w-5" />
                    </span>
                    <div className="min-w-0 flex-1">
                      <h3
                        className={`text-sm font-semibold leading-snug text-pretty ${
                          isOpen ? 'text-white' : 'text-surface-200'
                        }`}
                      >
                        {cs.name}
                      </h3>
                      <div className="mt-1 flex flex-wrap items-center gap-x-2 gap-y-1">
                        <p className="font-mono text-[10px] uppercase tracking-[0.16em] text-surface-500">
                          {cs.domain}
                        </p>
                        {cs.award && (
                          <span className="inline-flex items-center gap-1 text-[10px] font-medium text-amber-300/90">
                            <Icons.trophy className="h-3 w-3" />
                            Award-winning
                          </span>
                        )}
                      </div>
                    </div>
                    <svg
                      className={`h-5 w-5 shrink-0 text-surface-400 transition-transform duration-300 ${
                        isOpen ? 'rotate-180 text-primary-300' : ''
                      }`}
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
                    <div
                      id={`cs-panel-${cs.id}`}
                      className="animate-fade-in border-t border-white/[0.06] px-4 pb-5 pt-4"
                    >
                      <StudyDetail study={cs} showTitle={false} />
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
