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
    <section id="contact" className="section-padding relative overflow-hidden">
      {/* Closing glow */}
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-[28rem] bg-[radial-gradient(60rem_28rem_at_50%_100%,rgba(35,138,175,0.16),transparent_70%)]" />

      <div className="section-container relative">
        <div ref={ref} className={`reveal ${isVisible ? 'visible' : ''}`}>
          <div className="mx-auto mb-8 max-w-2xl text-center">
            <span className="eyebrow mx-auto">Contact</span>
            <h2 className="section-title mb-4">
              Let’s build something <span className="gradient-text">meaningful.</span>
            </h2>
            <p className="section-subtitle mx-auto">
              I’m open to Full Stack and backend engineering roles where I can own enterprise
              software and deliver real business impact. If that sounds like a fit, let’s talk.
            </p>
          </div>

          <div className="mb-10 flex justify-center">
            <span className="inline-flex items-center gap-3 rounded-full border border-white/[0.08] bg-white/[0.04] px-4 py-2 backdrop-blur-md">
              <span className="status-dot" />
              <span className="text-xs font-medium text-surface-200 sm:text-[13px]">
                Available for new roles · Usually replies within a day
              </span>
            </span>
          </div>

          <div className="mx-auto grid max-w-3xl gap-4 sm:grid-cols-2">
            {channels.map((c) => {
              const Icon = Icons[c.key];
              const external = c.href.startsWith('http');
              return (
                <a
                  key={c.label}
                  href={c.href}
                  target={external ? '_blank' : undefined}
                  rel={external ? 'noopener noreferrer' : undefined}
                  className="card card-hover group flex items-center gap-4 p-4 sm:p-5"
                >
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-primary-500/10 text-primary-300 transition-all duration-500 group-hover:scale-105 group-hover:bg-primary-500/20">
                    <Icon className="h-5 w-5" />
                  </span>
                  <div className="min-w-0 flex-1">
                    <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-surface-400">
                      {c.label}
                    </p>
                    <p className="mt-1 truncate text-sm font-medium text-surface-100 transition-colors duration-300 group-hover:text-primary-200">
                      {c.value}
                    </p>
                  </div>
                  <Icons.arrowRight className="h-4 w-4 shrink-0 text-surface-500 transition-all duration-300 group-hover:translate-x-0.5 group-hover:text-primary-300" />
                </a>
              );
            })}
          </div>

          <div className="mt-10 flex flex-col items-center gap-4 text-center">
            <a href={links.email} className="btn-primary group !px-8 !py-4 !text-base">
              <Icons.mail className="h-5 w-5" />
              Email me directly
              <Icons.arrowRight className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
            </a>
            <p className="inline-flex items-center gap-2 text-sm text-surface-400">
              <Icons.location className="h-4 w-4 text-surface-500" />
              Based in {profile.location} · Open to remote
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
