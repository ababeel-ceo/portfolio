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
    <footer className="relative border-t border-white/[0.06] bg-surface-950">
      <div className="section-container py-14 md:py-16">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <a href="#hero" className="mb-5 flex items-center gap-3">
              <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-primary-300 to-primary-600 text-[13px] font-bold text-surface-950">
                AB
              </span>
              <span className="font-display font-semibold tracking-[-0.01em] text-white">
                {profile.name}
              </span>
            </a>
            <p className="max-w-sm text-sm leading-relaxed text-surface-400">
              {profile.title} building enterprise software that automates business operations and
              improves customer experience.
            </p>
            <a href="#contact" className="btn-outline mt-6 !px-5 !py-2.5 !text-[13px]">
              <Icons.mail className="h-4 w-4" />
              Get in touch
            </a>
          </div>

          <div className="lg:col-span-3">
            <p className="kicker mb-5">Navigate</p>
            <ul className="space-y-3">
              {navLinks.map((l) => (
                <li key={l.href}>
                  <a
                    href={l.href}
                    className="text-sm text-surface-400 transition-colors duration-300 hover:text-primary-200"
                  >
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-4">
            <p className="kicker mb-5">Connect</p>
            <div className="flex flex-wrap gap-2.5">
              {socials.map((s) => {
                const Icon = Icons[s.key];
                const external = s.href.startsWith('http');
                return (
                  <a
                    key={s.label}
                    href={s.href}
                    target={external ? '_blank' : undefined}
                    rel={external ? 'noopener noreferrer' : undefined}
                    aria-label={s.label}
                    className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/[0.07] bg-white/[0.03] text-surface-400 transition-all duration-300 hover:-translate-y-0.5 hover:border-primary-400/40 hover:text-primary-200"
                  >
                    <Icon className="h-4 w-4" />
                  </a>
                );
              })}
            </div>
            <p className="mt-5 text-xs text-surface-500">{profile.email}</p>
            <p className="mt-1 text-xs text-surface-500">{profile.location}</p>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-3 border-t border-white/[0.06] pt-6 sm:flex-row">
          <p className="text-xs text-surface-500">
            © {year} {profile.name}. Built with React &amp; Tailwind CSS.
          </p>
          <a
            href="#hero"
            className="inline-flex items-center gap-2 text-xs text-surface-500 transition-colors duration-300 hover:text-primary-200"
          >
            Back to top
            <span className="flex h-6 w-6 items-center justify-center rounded-full border border-white/[0.08]">
              <Icons.arrowRight className="h-3 w-3 -rotate-90" />
            </span>
          </a>
        </div>
      </div>
    </footer>
  );
}
