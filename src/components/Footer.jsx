import { navLinks, links, profile } from '../data/profile';
import { Icons } from './Icons';

const socials = [
  { key: 'linkedin', href: links.linkedin, label: 'LinkedIn' },
  { key: 'github', href: links.github, label: 'GitHub' },
  { key: 'leetcode', href: links.leetcode, label: 'LeetCode' },
  { key: 'mail', href: links.email, label: 'Email' },
];

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="relative border-t border-surface-800/60 bg-surface-950">
      <div className="section-container py-14">
        <div className="grid sm:grid-cols-2 lg:grid-cols-12 gap-10">
          <div className="lg:col-span-5">
            <a href="#hero" className="flex items-center gap-2.5 mb-4">
              <span className="w-9 h-9 rounded-lg bg-gradient-to-br from-primary-500 to-primary-700 flex items-center justify-center text-white font-bold text-sm">
                AB
              </span>
              <span className="text-white font-bold">{profile.name}</span>
            </a>
            <p className="text-surface-400 text-sm leading-relaxed max-w-sm">
              {profile.title} building enterprise software that automates business operations and improves customer experience.
            </p>
            <a href="#contact" className="btn-outline mt-6 !py-2.5 text-xs">
              <Icons.mail className="w-4 h-4" />
              Get in touch
            </a>
          </div>

          <div className="lg:col-span-3">
            <p className="text-surface-200 font-semibold text-sm mb-4">Navigate</p>
            <ul className="space-y-2.5">
              {navLinks.map((l) => (
                <li key={l.href}>
                  <a href={l.href} className="text-surface-400 text-sm hover:text-primary-300 transition-colors duration-200">
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-4">
            <p className="text-surface-200 font-semibold text-sm mb-4">Connect</p>
            <div className="flex flex-wrap gap-2.5">
              {socials.map((s) => {
                const Icon = Icons[s.key];
                return (
                  <a
                    key={s.label}
                    href={s.href}
                    target={s.href.startsWith('http') ? '_blank' : undefined}
                    rel={s.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                    aria-label={s.label}
                    className="w-10 h-10 rounded-lg bg-surface-800/60 border border-surface-700/50 flex items-center justify-center text-surface-400 hover:text-primary-300 hover:border-primary-500/40 transition-all duration-200"
                  >
                    <Icon className="w-4 h-4" />
                  </a>
                );
              })}
            </div>
            <p className="text-surface-500 text-xs mt-4">{profile.email}</p>
            <p className="text-surface-500 text-xs mt-1">{profile.location}</p>
          </div>
        </div>

        <div className="mt-12 pt-6 border-t border-surface-800/60 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-surface-500 text-xs">
            © {year} {profile.name}. Built with React &amp; Tailwind CSS.
          </p>
          <a href="#hero" className="text-surface-500 text-xs hover:text-primary-300 transition-colors duration-200 inline-flex items-center gap-1.5">
            Back to top
            <svg className="w-3.5 h-3.5 rotate-[-90deg]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.6} strokeLinecap="round" strokeLinejoin="round">
              <path d="M5 12h14M13 6l6 6-6 6" />
            </svg>
          </a>
        </div>
      </div>
    </footer>
  );
}
