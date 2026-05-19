import { useEffect, useState } from 'react';

const roles = [
  'Backend Engineer',
  'Microservices Architect',
  'Java & Spring Boot Specialist',
  'Systems Thinker',
];

export default function Hero() {
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayed, setDisplayed] = useState('');
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const current = roles[roleIndex];
    let timeout;

    if (!deleting) {
      if (displayed.length < current.length) {
        timeout = setTimeout(() => setDisplayed(current.slice(0, displayed.length + 1)), 80);
      } else {
        timeout = setTimeout(() => setDeleting(true), 2000);
      }
    } else {
      if (displayed.length > 0) {
        timeout = setTimeout(() => setDisplayed(displayed.slice(0, -1)), 40);
      } else {
        setDeleting(false);
        setRoleIndex((prev) => (prev + 1) % roles.length);
      }
    }

    return () => clearTimeout(timeout);
  }, [displayed, deleting, roleIndex]);

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center">
      {/* Animated background grid */}
      <div className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `linear-gradient(rgba(59,130,246,0.3) 1px, transparent 1px),
                            linear-gradient(90deg, rgba(59,130,246,0.3) 1px, transparent 1px)`,
          backgroundSize: '60px 60px',
        }}
      />

      <div className="section-container relative z-10 text-center">
        {/* Status badge */}
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-surface-800/60
                        border border-surface-700/50 mb-8 animate-fade-in">
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
          <span className="text-sm text-surface-400">Available for opportunities</span>
        </div>

        {/* Name */}
        <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold tracking-tight mb-6
                        animate-slide-up">
          <span className="text-white">Hi, I'm </span>
          <span className="gradient-text">Abdulla</span>
        </h1>

        {/* Typing effect */}
        <div className="h-10 md:h-12 flex items-center justify-center mb-6"
             style={{ animationDelay: '0.2s' }}>
          <span className="text-xl md:text-2xl lg:text-3xl text-surface-300 font-light">
            {displayed}
          </span>
          <span className="w-0.5 h-7 md:h-8 bg-primary-400 ml-1 animate-pulse" />
        </div>

        {/* Description */}
        <p className="max-w-2xl mx-auto text-surface-400 text-lg md:text-xl leading-relaxed mb-10
                      animate-slide-up" style={{ animationDelay: '0.3s' }}>
          I build backend systems that scale to{' '}
          <span className="text-primary-400 font-medium">millions of transactions</span>.
          Specializing in high-performance microservices with Java & Spring Boot.
        </p>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4
                        animate-slide-up" style={{ animationDelay: '0.4s' }}>
          <a href="#projects" className="btn-primary text-base">
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
            </svg>
            View My Work
          </a>
          <a href="#contact" className="btn-outline text-base">
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
            Get In Touch
          </a>
        </div>

        {/* Stats strip */}
        <div className="mt-16 md:mt-20 grid grid-cols-3 gap-6 max-w-lg mx-auto
                        animate-slide-up" style={{ animationDelay: '0.6s' }}>
          {[
            { value: '3+', label: 'Years Experience' },
            { value: '5M+', label: 'Transactions Scaled' },
            { value: '2', label: 'Awards Won' },
          ].map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="text-2xl md:text-3xl font-bold gradient-text">{stat.value}</div>
              <div className="text-xs md:text-sm text-surface-500 mt-1">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <svg className="w-6 h-6 text-surface-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </div>
    </section>
  );
}
