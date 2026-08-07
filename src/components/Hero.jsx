import { useEffect, useState } from 'react';
import { hero, profile, links } from '../data/profile';
import { Icons } from './Icons';

const profileLinks = [
  { label: 'LinkedIn', href: links.linkedin, key: 'linkedin' },
  { label: 'GitHub', href: links.github, key: 'github' },
  { label: 'LeetCode', href: links.leetcode, key: 'leetcode' },
  { label: 'Email', href: links.email, key: 'mail' },
];

const prefersReducedMotion = () =>
  typeof window !== 'undefined' &&
  window.matchMedia('(prefers-reduced-motion: reduce)').matches;

/** Types each word out, holds, deletes, then moves on to the next one. */
function useTypewriter(words, { typeMs = 72, deleteMs = 34, holdMs = 2000 } = {}) {
  const [reduced] = useState(prefersReducedMotion);
  const [index, setIndex] = useState(0);
  const [deleting, setDeleting] = useState(false);
  const [text, setText] = useState(() => (prefersReducedMotion() ? words[0] : ''));

  useEffect(() => {
    if (reduced) return;
    const word = words[index % words.length];

    if (!deleting && text === word) {
      const hold = setTimeout(() => setDeleting(true), holdMs);
      return () => clearTimeout(hold);
    }
    if (deleting && text === '') {
      setDeleting(false);
      setIndex((i) => (i + 1) % words.length);
      return;
    }

    const step = setTimeout(
      () =>
        setText((prev) =>
          deleting ? word.slice(0, prev.length - 1) : word.slice(0, prev.length + 1)
        ),
      deleting ? deleteMs : typeMs
    );
    return () => clearTimeout(step);
  }, [text, deleting, index, words, reduced, typeMs, deleteMs, holdMs]);

  return text;
}

export default function Hero() {
  const [mounted, setMounted] = useState(false);
  const role = useTypewriter(hero.roles);

  useEffect(() => setMounted(true), []);

  /** Staggered entrance props for the hero's stacked elements. */
  const enter = (delay, extra = '') => ({
    className: `${extra} ${mounted ? 'animate-fade-in-up' : 'opacity-0'}`.trim(),
    style: { animationDelay: delay, animationFillMode: 'both' },
  });

  return (
    <section
      id="hero"
      className="relative flex min-h-screen items-center overflow-hidden pb-20 pt-28 lg:pt-32"
    >
      {/* Ambient backdrop */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -left-40 top-[10%] h-[34rem] w-[34rem] animate-float rounded-full bg-primary-500/[0.12] blur-[140px]" />
        <div
          className="absolute -right-32 bottom-[6%] h-[28rem] w-[28rem] animate-float rounded-full bg-primary-800/30 blur-[130px]"
          style={{ animationDelay: '-6s' }}
        />
        <div className="bg-grid absolute inset-0 opacity-[0.045]" />
      </div>
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-surface-950 via-surface-950/70 to-transparent" />

      <div className="section-container relative z-10 w-full">
        {/* Availability bar */}
        <div {...enter('0.05s', 'flex justify-center')}>
          <span className="inline-flex max-w-full items-center gap-3 rounded-full border border-white/[0.08] bg-white/[0.04] px-4 py-2 backdrop-blur-md sm:px-5">
            <span className="status-dot" />
            <span className="font-mono text-[10px] font-medium uppercase tracking-[0.24em] text-emerald-300/90">
              Open to work
            </span>
            <span className="hidden h-3 w-px bg-white/10 sm:block" />
            <span className="hidden text-[13px] text-surface-300 sm:block">{hero.availability}</span>
          </span>
        </div>

        <div className="mt-12 grid items-start gap-10 lg:mt-14 lg:grid-cols-12 lg:gap-10">
          {/* Left — identity & value proposition */}
          <div className="lg:col-span-7">
            <p
              {...enter(
                '0.12s',
                'font-mono text-[10px] font-medium uppercase tracking-[0.32em] text-surface-400'
              )}
            >
              {profile.location}
            </p>

            <h1
              {...enter(
                '0.18s',
                'mt-4 font-display text-[2.5rem] font-semibold leading-[1.03] tracking-[-0.035em] text-white sm:text-6xl lg:text-[4.1rem]'
              )}
            >
              {profile.name}
            </h1>

            <p
              {...enter(
                '0.24s',
                'mt-3 flex min-h-[2.4rem] items-center font-display text-2xl font-medium tracking-[-0.02em] sm:text-[2rem] lg:min-h-[3rem]'
              )}
            >
              {/* The animated text is decorative — assistive tech reads the static list. */}
              <span className="sr-only">{hero.roles.join(', ')}</span>
              <span className="gradient-text" aria-hidden="true">
                {role}
              </span>
              <span
                aria-hidden="true"
                className="ml-1 inline-block h-[1.1em] w-[2px] animate-caret rounded-full bg-primary-300/90"
              />
            </p>

            <p
              {...enter(
                '0.3s',
                'mt-6 max-w-2xl text-[15px] leading-relaxed text-surface-300 text-pretty md:text-base'
              )}
            >
              {hero.subheadline}
            </p>

            <div {...enter('0.36s', 'mt-7 flex flex-wrap gap-2')}>
              {hero.badges.map((badge) => (
                <span key={badge} className="pill">
                  <Icons.check className="h-3.5 w-3.5 shrink-0 text-primary-300" />
                  {badge}
                </span>
              ))}
            </div>

            <div {...enter('0.42s', 'mt-9 flex flex-col gap-3 sm:flex-row sm:items-center')}>
              <a href="#impact" className="btn-primary group">
                <Icons.chart className="h-4 w-4" />
                Explore my impact
                <Icons.arrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
              </a>
              <a href="#work" className="btn-outline">
                <Icons.layers className="h-4 w-4" />
                View case studies
              </a>
            </div>

            <div {...enter('0.48s', 'mt-8 flex flex-wrap items-center gap-2')}>
              {profileLinks.map((link) => {
                const Icon = Icons[link.key];
                const external = link.href.startsWith('http');
                return (
                  <a
                    key={link.label}
                    href={link.href}
                    target={external ? '_blank' : undefined}
                    rel={external ? 'noopener noreferrer' : undefined}
                    className="inline-flex items-center gap-2 rounded-full border border-white/[0.07] bg-white/[0.03] px-3.5 py-2 text-xs font-medium text-surface-300 transition-all duration-300 hover:-translate-y-0.5 hover:border-primary-400/40 hover:text-primary-200"
                  >
                    <Icon className="h-4 w-4" />
                    {link.label}
                  </a>
                );
              })}
            </div>
          </div>

          {/* Right — recruiter snapshot rail */}
          <div {...enter('0.34s', 'space-y-4 lg:col-span-5')}>
            <div className="card card-topline p-6 md:p-7">
              <div className="flex items-center justify-between gap-3">
                <span className="kicker">
                  <Icons.building className="h-3.5 w-3.5 text-primary-300" />
                  Current role
                </span>
                <span className="pill !py-1 text-[11px]">
                  <Icons.sparkle className="h-3 w-3 text-primary-300" />
                  {profile.experience}
                </span>
              </div>
              <h2 className="mt-4 font-display text-xl font-semibold tracking-[-0.02em] text-white md:text-2xl">
                {profile.title}
              </h2>
              <p className="mt-1 text-sm font-medium text-primary-300">{profile.company}</p>
              <p className="mt-2 inline-flex items-center gap-1.5 text-xs text-surface-400">
                <Icons.location className="h-3.5 w-3.5" />
                {profile.location}
              </p>
            </div>

            <div className="card p-6 md:p-7">
              <span className="kicker">
                <Icons.layers className="h-3.5 w-3.5 text-primary-300" />
                Domains delivered
              </span>
              <div className="mt-4 flex flex-wrap gap-2">
                {hero.domains.map((d) => (
                  <span key={d} className="tech-chip">
                    {d}
                  </span>
                ))}
              </div>

              <div className="mt-6 border-t border-white/[0.06] pt-5">
                <span className="kicker">
                  <Icons.sparkle className="h-3.5 w-3.5 text-primary-300" />
                  Currently exploring
                </span>
                <div className="mt-4 flex flex-wrap gap-2">
                  {hero.exploring.map((d) => (
                    <span key={d} className="tech-chip">
                      {d}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            <div className="card p-6 md:p-7">
              <span className="kicker">
                <Icons.trophy className="h-3.5 w-3.5 text-amber-300" />
                Recognition
              </span>
              <div className="mt-4 space-y-3">
                {hero.recognition.map((a) => (
                  <div key={a.year} className="flex items-center gap-3">
                    <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-amber-400/10 text-amber-300">
                      <Icons.trophy className="h-4 w-4" />
                    </span>
                    <span className="flex-1 text-sm font-medium text-surface-100">{a.name}</span>
                    <span className="font-mono text-xs text-surface-400">{a.year}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Mission statement */}
        <div
          {...enter(
            '0.56s',
            'card mt-12 flex flex-col gap-4 p-6 md:flex-row md:items-center md:gap-8 md:p-8'
          )}
        >
          <span className="kicker shrink-0">
            <Icons.target className="h-3.5 w-3.5 text-primary-300" />
            What I do
          </span>
          <p className="font-display text-lg font-medium leading-snug tracking-[-0.015em] text-surface-100 text-balance md:text-xl">
            {hero.headline}
          </p>
        </div>

        {/* Stat strip */}
        <div {...enter('0.62s', 'mt-4 grid grid-cols-2 gap-4 md:grid-cols-4')}>
          {hero.stats.map((stat) => (
            <div key={stat.label} className="card card-hover px-5 py-6">
              <div className="font-display text-3xl font-semibold tracking-[-0.03em] text-white md:text-4xl">
                {stat.value}
              </div>
              <div className="mt-2 font-mono text-[10px] uppercase leading-relaxed tracking-[0.16em] text-surface-400">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
