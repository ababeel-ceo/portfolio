import { useState, useEffect } from 'react';
import { navLinks, profile } from '../data/profile';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('');

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 20);
      const sections = navLinks.map((l) => l.href.slice(1));
      const scrollPos = window.scrollY + 140;
      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i]);
        if (el && el.offsetTop <= scrollPos) {
          setActiveSection(sections[i]);
          return;
        }
      }
      setActiveSection('');
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'bg-surface-950/80 backdrop-blur-xl border-b border-surface-800/60 shadow-lg shadow-black/20'
          : 'bg-transparent'
      }`}
    >
      <nav className="section-container flex items-center justify-between h-16 md:h-[72px]">
        <a href="#hero" className="flex items-center gap-2.5 group" aria-label={`${profile.name} — home`}>
          <span className="w-9 h-9 rounded-lg bg-gradient-to-br from-primary-500 to-primary-700 flex items-center justify-center text-white font-bold text-sm shadow-lg shadow-primary-900/40">
            AB
          </span>
          <span className="hidden sm:flex flex-col leading-tight">
            <span className="text-white font-bold text-[15px] tracking-tight">{profile.name}</span>
            <span className="text-primary-300/90 text-[11px] font-semibold uppercase tracking-[0.12em]">{profile.title}</span>
          </span>
        </a>

        <ul className="hidden lg:flex items-center gap-0.5">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a href={link.href} className={`nav-link ${activeSection === link.href.slice(1) ? 'active' : ''}`}>
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="hidden lg:flex items-center gap-2.5">
          <a href="#contact" className="btn-primary text-xs py-2.5 px-5">
            Get in touch
          </a>
        </div>

        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="lg:hidden relative w-10 h-10 flex items-center justify-center text-surface-300 hover:text-white transition-colors"
          aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
        >
          <div className="w-5 h-4 relative flex flex-col justify-between">
            <span className={`block h-px w-full bg-current transition-all duration-300 ${mobileOpen ? 'rotate-45 translate-y-[7px]' : ''}`} />
            <span className={`block h-px w-full bg-current transition-all duration-300 ${mobileOpen ? 'opacity-0' : ''}`} />
            <span className={`block h-px w-full bg-current transition-all duration-300 ${mobileOpen ? '-rotate-45 -translate-y-[7px]' : ''}`} />
          </div>
        </button>
      </nav>

      <div
        className={`lg:hidden overflow-hidden transition-all duration-400 ease-out ${
          mobileOpen ? 'max-h-[28rem] border-b border-surface-800/60' : 'max-h-0'
        }`}
      >
        <div className="section-container py-4 space-y-1">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMobileOpen(false)}
              className={`block px-4 py-3 rounded-lg text-sm transition-all duration-200 ${
                activeSection === link.href.slice(1)
                  ? 'text-primary-300 bg-primary-500/5'
                  : 'text-surface-300 hover:text-white hover:bg-surface-800/50'
              }`}
            >
              {link.label}
            </a>
          ))}
          <div className="pt-3">
            <a
              href="#contact"
              onClick={() => setMobileOpen(false)}
              className="btn-primary w-full text-sm py-2.5"
            >
              Get in touch
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}
