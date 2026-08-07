import { useState, useEffect, useCallback } from 'react';
import { navLinks, profile } from '../data/profile';
import { Icons } from './Icons';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('');

  useEffect(() => {
    const sections = navLinks.map((l) => l.href.slice(1));
    let frame = 0;

    const measure = () => {
      frame = 0;
      setScrolled(window.scrollY > 16);
      const scrollPos = window.scrollY + 160;
      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i]);
        if (el && el.offsetTop <= scrollPos) {
          setActiveSection(sections[i]);
          return;
        }
      }
      setActiveSection('');
    };

    // Coalesce scroll events into one measurement per frame.
    const onScroll = () => {
      if (!frame) frame = window.requestAnimationFrame(measure);
    };

    window.addEventListener('scroll', onScroll, { passive: true });
    measure();
    return () => {
      window.removeEventListener('scroll', onScroll);
      if (frame) window.cancelAnimationFrame(frame);
    };
  }, []);

  // Lock body scroll while the mobile sheet is open.
  useEffect(() => {
    if (!mobileOpen) return;
    const previous = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    const onKey = (e) => e.key === 'Escape' && setMobileOpen(false);
    window.addEventListener('keydown', onKey);
    return () => {
      document.body.style.overflow = previous;
      window.removeEventListener('keydown', onKey);
    };
  }, [mobileOpen]);

  const closeMobile = useCallback(() => setMobileOpen(false), []);

  return (
    <header className="fixed inset-x-0 top-0 z-50 pt-3 sm:pt-4">
      <div className="section-container">
        <nav
          className={`flex items-center justify-between gap-4 rounded-full border pl-4 pr-3 sm:pl-5 sm:pr-4
            h-14 sm:h-16 transition-all duration-500 ease-out ${
              scrolled || mobileOpen
                ? 'border-white/[0.09] bg-surface-950/80 backdrop-blur-xl shadow-float'
                : 'border-white/[0.05] bg-surface-950/40 backdrop-blur-md'
            }`}
        >
          <a href="#hero" className="group flex items-center gap-3" aria-label={`${profile.name} — home`}>
            <span className="relative flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-primary-300 to-primary-600 text-[13px] font-bold text-surface-950 shadow-[0_8px_20px_-8px_rgba(56,188,220,0.8)] transition-transform duration-500 group-hover:scale-105">
              AB
            </span>
            <span className="hidden sm:flex flex-col leading-tight">
              <span className="font-display text-[14px] font-semibold tracking-[-0.01em] text-white">
                {profile.name}
              </span>
              <span className="font-mono text-[9px] font-medium uppercase tracking-[0.22em] text-primary-300/80">
                {profile.title}
              </span>
            </span>
          </a>

          <ul className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className={`nav-link ${activeSection === link.href.slice(1) ? 'active' : ''}`}
                >
                  <span className="relative">{link.label}</span>
                </a>
              </li>
            ))}
          </ul>

          <a href="#contact" className="hidden lg:inline-flex btn-primary !px-5 !py-2.5 !text-[13px]">
            <Icons.mail className="h-4 w-4" />
            Get in touch
          </a>

          <button
            onClick={() => setMobileOpen((v) => !v)}
            className="lg:hidden flex h-10 w-10 items-center justify-center rounded-full text-surface-200 transition-colors hover:bg-white/[0.06] hover:text-white"
            aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={mobileOpen}
          >
            <span className="relative flex h-4 w-5 flex-col justify-between">
              <span
                className={`block h-px w-full bg-current transition-all duration-300 ${
                  mobileOpen ? 'translate-y-[7px] rotate-45' : ''
                }`}
              />
              <span
                className={`block h-px w-full bg-current transition-all duration-300 ${
                  mobileOpen ? 'opacity-0' : ''
                }`}
              />
              <span
                className={`block h-px w-full bg-current transition-all duration-300 ${
                  mobileOpen ? '-translate-y-[7px] -rotate-45' : ''
                }`}
              />
            </span>
          </button>
        </nav>

        {/* Mobile sheet */}
        <div
          className={`lg:hidden overflow-hidden transition-[max-height,opacity] duration-500 ease-out ${
            mobileOpen ? 'max-h-[32rem] opacity-100' : 'max-h-0 opacity-0'
          }`}
        >
          <div className="mt-2 rounded-3xl border border-white/[0.08] bg-surface-950/90 p-3 shadow-float backdrop-blur-xl">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={closeMobile}
                className={`flex items-center justify-between rounded-2xl px-4 py-3 text-sm transition-all duration-300 ${
                  activeSection === link.href.slice(1)
                    ? 'bg-primary-500/[0.12] text-primary-200'
                    : 'text-surface-300 hover:bg-white/[0.05] hover:text-white'
                }`}
              >
                {link.label}
                <Icons.arrowRight className="h-4 w-4 opacity-40" />
              </a>
            ))}
            <a href="#contact" onClick={closeMobile} className="btn-primary mt-2 w-full">
              <Icons.mail className="h-4 w-4" />
              Get in touch
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}
