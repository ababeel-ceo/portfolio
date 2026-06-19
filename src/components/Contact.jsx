import { useScrollReveal } from '../hooks/useScrollReveal';
import { profile, links } from '../data/profile';
import { Icons } from './Icons';

const channels = [
  { key: 'mail', label: 'Email', value: profile.email, href: links.email },
  { key: 'linkedin', label: 'LinkedIn', value: '/in/abdullathepro', href: links.linkedin },
  { key: 'github', label: 'GitHub', value: '/ababeel-ceo', href: links.github },
  { key: 'leetcode', label: 'LeetCode', value: '/abdullahsmsapk', href: links.leetcode },
];

export default function Contact() {
  const [ref, isVisible] = useScrollReveal();

  return (
    <section id="contact" className="section-padding relative">
      <div className="section-container">
        <div ref={ref} className={`reveal ${isVisible ? 'visible' : ''}`}>
          {/* Heading */}
          <div className="text-center max-w-2xl mx-auto mb-8">
            <span className="eyebrow mx-auto">Contact</span>
            <h2 className="section-title mb-4">
              Let’s build something <span className="gradient-text">meaningful.</span>
            </h2>
            <p className="section-subtitle mx-auto">
              I’m open to Full Stack and backend engineering roles where I can own enterprise software and deliver real business impact. If that sounds like a fit, let’s talk.
            </p>
          </div>

          {/* Availability badge */}
          <div className="flex justify-center mb-10">
            <span className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-surface-800/60 border border-surface-700/50 backdrop-blur-sm">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-400" />
              </span>
              <span className="text-xs sm:text-sm text-surface-200 font-medium tracking-wide">
                Available for new roles · Usually replies within a day
              </span>
            </span>
          </div>

          {/* Contact channels — symmetric 2×2 grid, centered */}
          <div className="grid sm:grid-cols-2 gap-4 max-w-3xl mx-auto">
            {channels.map((c) => {
              const Icon = Icons[c.key];
              const external = c.href.startsWith('http');
              return (
                <a
                  key={c.label}
                  href={c.href}
                  target={external ? '_blank' : undefined}
                  rel={external ? 'noopener noreferrer' : undefined}
                  className="card card-hover p-4 sm:p-5 flex items-center gap-4 group"
                >
                  <span className="w-11 h-11 rounded-xl bg-primary-500/10 text-primary-300 flex items-center justify-center group-hover:bg-primary-500/20 transition-colors duration-300 shrink-0">
                    <Icon className="w-5 h-5" />
                  </span>
                  <div className="min-w-0 flex-1">
                    <p className="text-surface-400 text-xs uppercase tracking-wider">{c.label}</p>
                    <p className="text-surface-100 text-sm font-medium truncate group-hover:text-primary-300 transition-colors duration-300">
                      {c.value}
                    </p>
                  </div>
                  <Icons.arrowRight className="w-4 h-4 text-surface-500 group-hover:text-primary-300 group-hover:translate-x-0.5 transition-all duration-300 shrink-0" />
                </a>
              );
            })}
          </div>

          {/* Primary action + location */}
          <div className="mt-10 flex flex-col items-center gap-4 text-center">
            <a href={links.email} className="btn-primary w-full sm:w-auto !px-8 !py-4 text-base">
              <Icons.mail className="w-5 h-5" />
              Email me directly
            </a>
            <p className="inline-flex items-center gap-1.5 text-surface-400 text-sm">
              <Icons.location className="w-4 h-4 text-surface-500" />
              Based in {profile.location} · Open to remote
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
