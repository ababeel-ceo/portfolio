import { useState, useEffect } from 'react';

const navLinks = [
  { href: '#about', label: 'About' },
  { href: '#skills', label: 'Skills' },
  { href: '#experience', label: 'Experience' },
  { href: '#projects', label: 'Projects' },
  { href: '#achievements', label: 'Achievements' },
  { href: '#contact', label: 'Contact' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-surface-950/80 backdrop-blur-xl border-b border-surface-800/50 shadow-lg shadow-black/10'
          : 'bg-transparent'
      }`}
    >
      <nav className="section-container flex items-center justify-between h-16 md:h-20">
        {/* Logo */}
        <a href="#" className="text-xl font-bold tracking-tight group">
          <span className="text-white group-hover:text-primary-400 transition-colors">&lt;</span>
          <span className="gradient-text">Abdulla</span>
          <span className="text-white group-hover:text-primary-400 transition-colors"> /&gt;</span>
        </a>

        {/* Desktop nav */}
        <ul className="hidden md:flex items-center gap-1">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="px-4 py-2 text-sm text-surface-400 hover:text-white rounded-lg
                           hover:bg-surface-800/50 transition-all duration-200"
              >
                {link.label}
              </a>
            </li>
          ))}
          <li className="ml-3">
            <a href="#contact" className="btn-primary text-sm py-2 px-5">
              Hire Me
            </a>
          </li>
        </ul>

        {/* Mobile toggle */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="md:hidden p-2 text-surface-400 hover:text-white transition-colors"
          aria-label="Toggle menu"
        >
          <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            {mobileOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </nav>

      {/* Mobile menu */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ${
          mobileOpen ? 'max-h-96 border-b border-surface-800/50' : 'max-h-0'
        }`}
      >
        <ul className="section-container py-4 space-y-1">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className="block px-4 py-3 text-surface-400 hover:text-white hover:bg-surface-800/50
                           rounded-lg transition-all duration-200"
              >
                {link.label}
              </a>
            </li>
          ))}
          <li className="pt-2">
            <a
              href="#contact"
              onClick={() => setMobileOpen(false)}
              className="btn-primary text-sm py-2.5 px-5 w-full justify-center"
            >
              Hire Me
            </a>
          </li>
        </ul>
      </div>
    </header>
  );
}
