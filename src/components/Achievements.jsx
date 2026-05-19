import { useScrollReveal } from '../hooks/useScrollReveal';

const achievements = [
  {
    title: 'Outstanding Excellence Award',
    org: 'Vivant360 Software Services',
    year: '2023',
    description:
      'Recognized for developing and launching a B2B insurance platform that reduced manual processing effort by 80% through automation and system optimization.',
    metric: '80%',
    metricLabel: 'Reduction in Manual Processing',
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 18.75h-9m9 0a3 3 0 013 3h-15a3 3 0 013-3m9 0v-3.375c0-.621-.503-1.125-1.125-1.125h-.871M7.5 18.75v-3.375c0-.621.504-1.125 1.125-1.125h.872m5.007 0H9.497m5.007 0a7.454 7.454 0 01-.982-3.172M9.497 14.25a7.454 7.454 0 00.981-3.172M5.25 4.236c-.982.143-1.954.317-2.916.52A6.003 6.003 0 007.73 9.728M5.25 4.236V4.5c0 2.108.966 3.99 2.48 5.228M5.25 4.236V2.721C7.456 2.41 9.71 2.25 12 2.25c2.291 0 4.545.16 6.75.47v1.516M18.75 4.236c.982.143 1.954.317 2.916.52A6.003 6.003 0 0016.27 9.728M18.75 4.236V4.5c0 2.108-.966 3.99-2.48 5.228m0 0a6.003 6.003 0 01-5.54 0" />
      </svg>
    ),
    gradient: 'from-amber-400 to-yellow-500',
  },
  {
    title: 'Client Recognition Award',
    org: 'RAK Insurance, Dubai',
    year: '2024',
    description:
      'Awarded for contributions to system enhancements that reduced complaint resolution time by 40%, improving operational efficiency and customer experience.',
    metric: '40%',
    metricLabel: 'Faster Complaint Resolution',
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z" />
      </svg>
    ),
    gradient: 'from-primary-400 to-cyan-400',
  },
];

export default function Achievements() {
  const [ref, isVisible] = useScrollReveal();

  return (
    <section id="achievements" className="section-padding">
      <div className="section-container">
        <div ref={ref} className={`reveal ${isVisible ? 'visible' : ''}`}>
          {/* Header */}
          <div className="mb-16">
            <p className="text-primary-400 font-mono text-sm mb-2">// achievements</p>
            <h2 className="section-title">
              Recognition & <span className="gradient-text">Impact</span>
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-primary-500 to-cyan-400 rounded-full mt-4" />
          </div>

          {/* Achievement cards */}
          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {achievements.map((achievement, i) => (
              <div
                key={achievement.title}
                className="card card-hover p-6 md:p-8 group relative overflow-hidden"
                style={{ transitionDelay: `${i * 150}ms` }}
              >
                {/* Background gradient accent */}
                <div className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl ${achievement.gradient} opacity-5 rounded-bl-full group-hover:opacity-10 transition-opacity`} />

                <div className="relative">
                  {/* Icon & Year */}
                  <div className="flex items-center justify-between mb-4">
                    <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${achievement.gradient} p-0.5`}>
                      <div className="w-full h-full rounded-[10px] bg-surface-900 flex items-center justify-center text-white">
                        {achievement.icon}
                      </div>
                    </div>
                    <span className="text-surface-500 font-mono text-sm">{achievement.year}</span>
                  </div>

                  {/* Title & Org */}
                  <h3 className="text-lg font-bold text-white mb-1">{achievement.title}</h3>
                  <p className={`text-sm font-medium mb-4 bg-gradient-to-r ${achievement.gradient} bg-clip-text text-transparent`}>
                    {achievement.org}
                  </p>

                  {/* Description */}
                  <p className="text-surface-400 text-sm leading-relaxed mb-6">
                    {achievement.description}
                  </p>

                  {/* Metric highlight */}
                  <div className="flex items-center gap-3 p-3 rounded-xl bg-surface-800/50 border border-surface-700/30">
                    <span className={`text-3xl font-bold bg-gradient-to-r ${achievement.gradient} bg-clip-text text-transparent`}>
                      {achievement.metric}
                    </span>
                    <span className="text-surface-400 text-sm">{achievement.metricLabel}</span>
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
