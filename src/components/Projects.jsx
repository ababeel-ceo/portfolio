import { useScrollReveal } from '../hooks/useScrollReveal';

const projects = [
  {
    title: 'Identity & Access Management System',
    description:
      'Centralized IAM system handling authentication and authorization across multiple enterprise applications. Implemented RBAC with automated approval workflows for secure, scalable access control.',
    impact: [
      'Unified auth across multiple apps',
      'Role-Based Access Control (RBAC)',
      'Automated approval workflows',
      'Improved security & operational efficiency',
    ],
    tech: ['Spring Boot', 'REST APIs', 'RBAC', 'MySQL'],
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
      </svg>
    ),
    gradient: 'from-blue-500 to-cyan-500',
    link: null,
  },
  {
    title: 'Redis Pub/Sub Event Processing',
    description:
      'Event-driven messaging system using Redis Pub/Sub for real-time communication between distributed services. Decoupled architecture with minimal latency broadcasting to multiple subscribers.',
    impact: [
      'Real-time event broadcasting',
      'Decoupled microservice communication',
      'Minimal latency processing',
      'Scalable pub/sub architecture',
    ],
    tech: ['Redis', 'Java', 'Spring Boot', 'Pub/Sub'],
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M7.5 21L3 16.5m0 0L7.5 12M3 16.5h13.5m0-13.5L21 7.5m0 0L16.5 12M21 7.5H7.5" />
      </svg>
    ),
    gradient: 'from-red-500 to-orange-500',
    link: '#',
  },
  {
    title: 'B2B Insurance Platform',
    description:
      'Enterprise insurance platform that automated quote generation and processing. Scaled the system to handle 5.7M+ transactions while reducing manual processing effort by 80%.',
    impact: [
      'Scaled to 5.7M+ transactions',
      'Reduced manual processing by 80%',
      '128% throughput improvement',
      'Multi-domain insurance support',
    ],
    tech: ['Java', 'Spring Boot', 'Redis', 'MySQL', 'Hibernate'],
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18L9 11.25l4.306 4.307a11.95 11.95 0 015.814-5.519l2.74-1.22m0 0l-5.94-2.28m5.94 2.28l-2.28 5.941" />
      </svg>
    ),
    gradient: 'from-emerald-500 to-green-500',
    link: null,
  },
];

export default function Projects() {
  const [ref, isVisible] = useScrollReveal();

  return (
    <section id="projects" className="section-padding bg-surface-900/30">
      <div className="section-container">
        <div ref={ref} className={`reveal ${isVisible ? 'visible' : ''}`}>
          {/* Header */}
          <div className="mb-16">
            <p className="text-primary-400 font-mono text-sm mb-2">// projects</p>
            <h2 className="section-title">
              Systems I've <span className="gradient-text">Engineered</span>
            </h2>
            <p className="section-subtitle mt-3">
              Real-world systems focused on scalability, performance, and enterprise reliability.
            </p>
            <div className="w-20 h-1 bg-gradient-to-r from-primary-500 to-cyan-400 rounded-full mt-4" />
          </div>

          {/* Projects grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project, i) => (
              <div
                key={project.title}
                className="card card-hover p-6 flex flex-col group"
                style={{ transitionDelay: `${i * 150}ms` }}
              >
                {/* Icon */}
                <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${project.gradient} p-0.5 mb-5`}>
                  <div className="w-full h-full rounded-[14px] bg-surface-900 flex items-center justify-center text-white">
                    {project.icon}
                  </div>
                </div>

                {/* Content */}
                <h3 className="text-lg font-bold text-white mb-3 group-hover:text-primary-400 transition-colors">
                  {project.title}
                </h3>
                <p className="text-surface-400 text-sm leading-relaxed mb-5">
                  {project.description}
                </p>

                {/* Impact points */}
                <ul className="space-y-2 mb-6 flex-grow">
                  {project.impact.map((point) => (
                    <li key={point} className="flex items-start gap-2">
                      <span className={`w-1.5 h-1.5 rounded-full bg-gradient-to-r ${project.gradient} mt-1.5 shrink-0`} />
                      <span className="text-surface-300 text-sm">{point}</span>
                    </li>
                  ))}
                </ul>

                {/* Tech tags */}
                <div className="flex flex-wrap gap-2 pt-4 border-t border-surface-700/50">
                  {project.tech.map((t) => (
                    <span
                      key={t}
                      className="px-2.5 py-1 rounded-md bg-surface-700/50 text-surface-400 text-xs font-mono"
                    >
                      {t}
                    </span>
                  ))}
                  {project.link && (
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="ml-auto text-surface-500 hover:text-primary-400 transition-colors"
                      aria-label="View on GitHub"
                    >
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                      </svg>
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
