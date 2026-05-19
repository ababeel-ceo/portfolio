import { useScrollReveal } from '../hooks/useScrollReveal';

const experiences = [
  {
    role: 'Software Developer',
    company: 'Vivant360 Software Services',
    location: 'Tirunelveli, India',
    period: 'Jan 2023 - Present',
    type: 'Full-time',
    achievements: [
      {
        text: 'Engineered backend services processing 5M+ insurance quote transactions with high availability and low latency',
        metric: '5M+ transactions',
      },
      {
        text: 'Scaled quote generation from 2.5M to 5.7M, a 128% throughput increase through architectural optimization',
        metric: '128% increase',
      },
      {
        text: 'Implemented asynchronous processing using Redis Streams and Consumer Groups for decoupled, event-driven workflows',
        metric: null,
      },
      {
        text: 'Optimized system performance using Redis caching, reducing database load and improving response times significantly',
        metric: null,
      },
      {
        text: 'Applied design patterns (Builder, Strategy) to improve code modularity and long-term maintainability',
        metric: null,
      },
      {
        text: 'Contributed to CI/CD pipelines using Jenkins, enabling faster and more reliable deployments',
        metric: null,
      },
    ],
    tech: ['Java', 'Spring Boot', 'Hibernate', 'MySQL', 'Redis', 'Jenkins', 'REST APIs'],
  },
];

export default function Experience() {
  const [ref, isVisible] = useScrollReveal();

  return (
    <section id="experience" className="section-padding">
      <div className="section-container">
        <div ref={ref} className={`reveal ${isVisible ? 'visible' : ''}`}>
          {/* Header */}
          <div className="mb-16">
            <p className="text-primary-400 font-mono text-sm mb-2">// experience</p>
            <h2 className="section-title">
              Where I've <span className="gradient-text">Made Impact</span>
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-primary-500 to-cyan-400 rounded-full mt-4" />
          </div>

          {/* Timeline */}
          <div className="relative">
            {/* Vertical line */}
            <div className="absolute left-0 md:left-8 top-0 bottom-0 w-px bg-gradient-to-b from-primary-500 via-primary-500/50 to-transparent" />

            {experiences.map((exp) => (
              <div key={exp.company} className="relative pl-8 md:pl-20">
                {/* Timeline dot */}
                <div className="absolute left-0 md:left-8 -translate-x-1/2 w-4 h-4 rounded-full bg-primary-500 border-4 border-surface-950 shadow-lg shadow-primary-500/30" />

                {/* Card */}
                <div className="card p-6 md:p-8">
                  {/* Header */}
                  <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-2 mb-6">
                    <div>
                      <h3 className="text-xl md:text-2xl font-bold text-white">{exp.role}</h3>
                      <p className="text-primary-400 font-medium mt-1">{exp.company}</p>
                      <p className="text-surface-500 text-sm mt-0.5">{exp.location}</p>
                    </div>
                    <div className="flex items-center gap-3 shrink-0">
                      <span className="px-3 py-1 rounded-full bg-primary-500/10 text-primary-400 text-sm font-medium">
                        {exp.type}
                      </span>
                      <span className="text-surface-400 text-sm font-mono">{exp.period}</span>
                    </div>
                  </div>

                  {/* Achievements */}
                  <ul className="space-y-3 mb-6">
                    {exp.achievements.map((achievement, i) => (
                      <li key={i} className="flex gap-3">
                        <svg className="w-5 h-5 text-primary-400 shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                          <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75" />
                        </svg>
                        <span className="text-surface-300 text-sm leading-relaxed">
                          {achievement.text}
                          {achievement.metric && (
                            <span className="ml-2 inline-flex px-2 py-0.5 rounded-md bg-primary-500/10 text-primary-400 text-xs font-mono font-medium">
                              {achievement.metric}
                            </span>
                          )}
                        </span>
                      </li>
                    ))}
                  </ul>

                  {/* Tech stack */}
                  <div className="flex flex-wrap gap-2">
                    {exp.tech.map((t) => (
                      <span
                        key={t}
                        className="px-3 py-1 rounded-lg bg-surface-700/50 text-surface-300 text-xs font-mono
                                   border border-surface-600/30"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
