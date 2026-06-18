import { useEffect, useState } from 'react';
import { hero, profile, links } from '../data/profile';
import { Icons } from './Icons';

const profileLinks = [
  { label: 'LinkedIn', href: links.linkedin, key: 'linkedin' },
  { label: 'GitHub', href: links.github, key: 'github' },
  { label: 'LeetCode', href: links.leetcode, key: 'leetcode' },
  { label: 'Email', href: links.email, key: 'mail' },
];

export default function Hero() {
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  const anim = (delay) => ({
    className: mounted ? 'animate-fade-in-up' : 'opacity-0',
    style: { animationDelay: delay, animationFillMode: 'both' },
  });

  return (
    <section id="hero" className="relative min-h-screen flex items-center overflow-hidden pt-28 pb-16 lg:pt-32">
      {/* Ambient background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-[12%] -left-40 w-[460px] h-[460px] bg-primary-500/10 rounded-full blur-[130px] animate-float" />
        <div className="absolute bottom-[8%] -right-32 w-[380px] h-[380px] bg-primary-800/25 rounded-full blur-[120px] animate-float" style={{ animationDelay: '-4s' }} />
        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage: `linear-gradient(rgba(106,212,237,0.4) 1px, transparent 1px),
                              linear-gradient(90deg, rgba(106,212,237,0.4) 1px, transparent 1px)`,
            backgroundSize: '70px 70px',
            maskImage: 'radial-gradient(ellipse 80% 60% at 50% 40%, #000 40%, transparent 100%)',
            WebkitMaskImage: 'radial-gradient(ellipse 80% 60% at 50% 40%, #000 40%, transparent 100%)',
          }}
        />
      </div>
      <div className="absolute bottom-0 inset-x-0 h-32 bg-gradient-to-t from-surface-950 to-transparent pointer-events-none" />

      <div className="section-container relative z-10 w-full">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-10 items-center">
          {/* Left: value proposition */}
          <div className="lg:col-span-7">
            <div {...anim('0.05s')}>
              <span className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-surface-800/60 border border-surface-700/50 backdrop-blur-sm">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-400" />
                </span>
                <span className="text-xs text-surface-300 font-medium tracking-wide">
                  Open to Full Stack &amp; Backend engineering roles
                </span>
              </span>
            </div>

            <h1
              {...anim('0.15s')}
              className={`mt-6 text-[2rem] sm:text-5xl lg:text-[3.4rem] font-bold tracking-tight leading-[1.08] text-balance ${mounted ? 'animate-fade-in-up' : 'opacity-0'}`}
            >
              <span className="text-white">Building enterprise software that </span>
              <span className="gradient-text">automates business operations</span>
              <span className="text-white"> and improves customer experience.</span>
            </h1>

            <p {...anim('0.25s')} className={`mt-6 max-w-2xl text-surface-300 text-base md:text-[1.05rem] leading-relaxed text-pretty ${mounted ? 'animate-fade-in-up' : 'opacity-0'}`}>
              {hero.subheadline}
            </p>

            {/* Achievement badges */}
            <div {...anim('0.35s')} className={`mt-7 flex flex-wrap gap-2.5 ${mounted ? 'animate-fade-in-up' : 'opacity-0'}`}>
              {hero.badges.map((badge) => (
                <span key={badge} className="pill">
                  <Icons.check className="w-3.5 h-3.5 text-primary-300 shrink-0" />
                  {badge}
                </span>
              ))}
            </div>

            {/* CTAs */}
            <div {...anim('0.45s')} className={`mt-9 flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 ${mounted ? 'animate-fade-in-up' : 'opacity-0'}`}>
              <a href="#impact" className="btn-primary">
                <Icons.chart className="w-4 h-4" />
                Explore My Impact
              </a>
              <a href={links.resume} target="_blank" rel="noopener noreferrer" className="btn-outline">
                <Icons.download className="w-4 h-4" />
                Download Resume
              </a>
            </div>

            {/* Profile links */}
            <div {...anim('0.55s')} className={`mt-8 flex flex-wrap items-center gap-2 ${mounted ? 'animate-fade-in-up' : 'opacity-0'}`}>
              {profileLinks.map((link) => {
                const Icon = Icons[link.key];
                return (
                  <a
                    key={link.label}
                    href={link.href}
                    target={link.href.startsWith('http') ? '_blank' : undefined}
                    rel={link.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                    className="inline-flex items-center gap-2 px-3 py-2 rounded-lg bg-surface-800/40 border border-surface-700/40 text-surface-300 text-xs font-medium hover:text-primary-300 hover:border-primary-500/40 transition-all duration-300"
                  >
                    <Icon className="w-4 h-4" />
                    {link.label}
                  </a>
                );
              })}
            </div>
          </div>

          {/* Right: recruiter snapshot */}
          <div
            className={`lg:col-span-5 ${mounted ? 'animate-fade-in-up' : 'opacity-0'}`}
            style={{ animationDelay: '0.4s', animationFillMode: 'both' }}
          >
            <div className="card p-6 md:p-7">
              <div className="flex items-center justify-between">
                <span className="eyebrow !mb-0">Snapshot</span>
                <span className="pill !py-1 text-[11px]">
                  <Icons.sparkle className="w-3.5 h-3.5 text-primary-300" />
                  {profile.experience}
                </span>
              </div>

              <div className="mt-5">
                <p className="text-surface-400 text-xs uppercase tracking-wider">Currently</p>
                <p className="mt-1 text-lg font-bold text-white">{profile.title}</p>
                <p className="text-primary-300 text-sm font-medium">{profile.company}</p>
              </div>

              <div className="mt-5 pt-5 border-t border-surface-700/50">
                <p className="text-surface-400 text-xs uppercase tracking-wider mb-2">Domains delivered</p>
                <div className="flex flex-wrap gap-2">
                  {['IAM', 'Insurance', 'OCR Automation', 'Workflows', 'CRM'].map((d) => (
                    <span key={d} className="tech-chip">{d}</span>
                  ))}
                </div>
              </div>

              <div className="mt-5 pt-5 border-t border-surface-700/50 space-y-2.5">
                <p className="text-surface-400 text-xs uppercase tracking-wider mb-1">Recognition</p>
                {[
                  { name: 'Outstanding Excellence Award', year: '2023' },
                  { name: 'Client Recognition Award', year: '2024' },
                ].map((a) => (
                  <div key={a.year} className="flex items-center gap-3">
                    <span className="w-8 h-8 rounded-lg bg-primary-500/10 text-primary-300 flex items-center justify-center shrink-0">
                      <Icons.trophy className="w-4 h-4" />
                    </span>
                    <span className="text-surface-200 text-sm font-medium flex-1">{a.name}</span>
                    <span className="text-surface-400 text-xs font-mono">{a.year}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Stat strip */}
        <div {...anim('0.65s')} className={`mt-14 grid grid-cols-2 md:grid-cols-4 gap-px rounded-2xl overflow-hidden border border-surface-700/50 bg-surface-700/30 ${mounted ? 'animate-fade-in-up' : 'opacity-0'}`}>
          {hero.stats.map((stat) => (
            <div key={stat.label} className="bg-surface-900/70 px-5 py-6 text-center sm:text-left">
              <div className="text-2xl md:text-3xl font-bold text-white">{stat.value}</div>
              <div className="text-xs md:text-sm text-surface-400 mt-1">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
