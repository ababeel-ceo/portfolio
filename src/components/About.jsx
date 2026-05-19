import { useScrollReveal } from '../hooks/useScrollReveal';

const highlights = [
  {
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M5.25 14.25h13.5m-13.5 0a3 3 0 01-3-3m3 3a3 3 0 100 6h13.5a3 3 0 100-6m-16.5-3a3 3 0 013-3h13.5a3 3 0 013 3m-19.5 0a4.5 4.5 0 01.9-2.7L5.737 5.1a3.375 3.375 0 012.7-1.35h7.126c1.062 0 2.062.5 2.7 1.35l2.587 3.45a4.5 4.5 0 01.9 2.7m0 0a3 3 0 01-3 3m0 3h.008v.008h-.008V17.25zm0-6h.008v.008h-.008V11.25z" />
      </svg>
    ),
    title: 'Distributed Systems',
    desc: 'Designing microservices that communicate reliably at scale',
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
      </svg>
    ),
    title: 'Performance',
    desc: 'Optimizing throughput with caching, async processing, and efficient queries',
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 7.125C2.25 6.504 2.754 6 3.375 6h6c.621 0 1.125.504 1.125 1.125v3.75c0 .621-.504 1.125-1.125 1.125h-6a1.125 1.125 0 01-1.125-1.125v-3.75zM14.25 8.625c0-.621.504-1.125 1.125-1.125h5.25c.621 0 1.125.504 1.125 1.125v8.25c0 .621-.504 1.125-1.125 1.125h-5.25a1.125 1.125 0 01-1.125-1.125v-8.25zM3.75 16.125c0-.621.504-1.125 1.125-1.125h5.25c.621 0 1.125.504 1.125 1.125v2.25c0 .621-.504 1.125-1.125 1.125h-5.25a1.125 1.125 0 01-1.125-1.125v-2.25z" />
      </svg>
    ),
    title: 'Scalable Architecture',
    desc: 'Building systems that grow from thousands to millions of transactions',
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
      </svg>
    ),
    title: 'Enterprise Security',
    desc: 'Implementing IAM, RBAC, and secure API patterns',
  },
];

export default function About() {
  const [ref, isVisible] = useScrollReveal();

  return (
    <section id="about" className="section-padding">
      <div className="section-container">
        <div ref={ref} className={`reveal ${isVisible ? 'visible' : ''}`}>
          {/* Section header */}
          <div className="mb-16">
            <p className="text-primary-400 font-mono text-sm mb-2">// about me</p>
            <h2 className="section-title">
              Engineering Systems That <span className="gradient-text">Handle Scale</span>
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-primary-500 to-cyan-400 rounded-full mt-4" />
          </div>

          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
            {/* Text content */}
            <div className="space-y-5">
              <p className="text-surface-300 text-lg leading-relaxed">
                I'm a backend-focused software developer with{' '}
                <span className="text-white font-medium">3+ years of experience</span> building
                scalable microservices using Java and Spring Boot. I specialize in designing systems
                that process millions of transactions with high availability and low latency.
              </p>
              <p className="text-surface-400 leading-relaxed">
                At Vivant360 Software Services, I engineered insurance platforms processing{' '}
                <span className="text-primary-400">5M+ quote transactions</span>, implementing
                Redis-based caching and asynchronous processing patterns that more than doubled
                system throughput. I scaled quote generation from 2.5M to 5.7M, a 128% increase.
              </p>
              <p className="text-surface-400 leading-relaxed">
                My work spans distributed systems, event-driven architecture, and enterprise
                security. I focus on writing clean, performant code backed by design patterns
                that keep systems maintainable as they grow.
              </p>

              {/* Quick facts */}
              <div className="pt-4 grid grid-cols-2 gap-4">
                {[
                  { label: 'Location', value: 'Tirunelveli, India' },
                  { label: 'Degree', value: 'MCA (CGPA: 8.6)' },
                  { label: 'Focus', value: 'Backend & Distributed Systems' },
                  { label: 'Stack', value: 'Java / Spring Boot / Redis' },
                ].map((fact) => (
                  <div key={fact.label}>
                    <span className="text-surface-500 text-sm">{fact.label}</span>
                    <p className="text-surface-200 font-medium">{fact.value}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Highlight cards */}
            <div className="grid sm:grid-cols-2 gap-4">
              {highlights.map((item, i) => (
                <div
                  key={item.title}
                  className="card card-hover p-5 group"
                  style={{ transitionDelay: `${i * 100}ms` }}
                >
                  <div className="w-10 h-10 rounded-xl bg-primary-500/10 text-primary-400 flex items-center
                                  justify-center mb-3 group-hover:bg-primary-500/20 transition-colors">
                    {item.icon}
                  </div>
                  <h3 className="text-white font-semibold mb-1">{item.title}</h3>
                  <p className="text-surface-400 text-sm leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
