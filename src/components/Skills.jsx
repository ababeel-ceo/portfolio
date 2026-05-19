import { useScrollReveal } from '../hooks/useScrollReveal';

const skillCategories = [
  {
    title: 'Languages & Core',
    color: 'from-orange-400 to-red-500',
    bgColor: 'bg-orange-500/10',
    textColor: 'text-orange-400',
    skills: [
      { name: 'Java', level: 95 },
      { name: 'SQL', level: 85 },
      { name: 'OOP', level: 90 },
      { name: 'Multithreading', level: 80 },
    ],
  },
  {
    title: 'Backend Frameworks',
    color: 'from-green-400 to-emerald-500',
    bgColor: 'bg-green-500/10',
    textColor: 'text-green-400',
    skills: [
      { name: 'Spring Boot', level: 92 },
      { name: 'Spring MVC', level: 88 },
      { name: 'Hibernate', level: 85 },
      { name: 'REST APIs', level: 93 },
    ],
  },
  {
    title: 'Databases & Caching',
    color: 'from-blue-400 to-cyan-500',
    bgColor: 'bg-blue-500/10',
    textColor: 'text-blue-400',
    skills: [
      { name: 'MySQL', level: 88 },
      { name: 'Redis', level: 85 },
      { name: 'Redis Streams', level: 80 },
      { name: 'Query Optimization', level: 82 },
    ],
  },
  {
    title: 'Architecture & Patterns',
    color: 'from-purple-400 to-pink-500',
    bgColor: 'bg-purple-500/10',
    textColor: 'text-purple-400',
    skills: [
      { name: 'Microservices', level: 88 },
      { name: 'Distributed Systems', level: 82 },
      { name: 'Design Patterns', level: 85 },
      { name: 'Event-Driven', level: 80 },
    ],
  },
  {
    title: 'Messaging & Async',
    color: 'from-amber-400 to-yellow-500',
    bgColor: 'bg-amber-500/10',
    textColor: 'text-amber-400',
    skills: [
      { name: 'Redis Pub/Sub', level: 85 },
      { name: 'Consumer Groups', level: 80 },
      { name: 'Message Queues', level: 78 },
      { name: 'JMS', level: 70 },
    ],
  },
  {
    title: 'DevOps & Tools',
    color: 'from-cyan-400 to-teal-500',
    bgColor: 'bg-cyan-500/10',
    textColor: 'text-cyan-400',
    skills: [
      { name: 'Git & GitHub', level: 90 },
      { name: 'Jenkins CI/CD', level: 78 },
      { name: 'Linux', level: 75 },
      { name: 'Caching Strategies', level: 82 },
    ],
  },
];

export default function Skills() {
  const [ref, isVisible] = useScrollReveal();

  return (
    <section id="skills" className="section-padding bg-surface-900/30">
      <div className="section-container">
        <div ref={ref} className={`reveal ${isVisible ? 'visible' : ''}`}>
          {/* Header */}
          <div className="mb-16">
            <p className="text-primary-400 font-mono text-sm mb-2">// skills</p>
            <h2 className="section-title">
              Technical <span className="gradient-text">Arsenal</span>
            </h2>
            <p className="section-subtitle mt-3">
              Focused on backend engineering, distributed systems, and performance optimization.
            </p>
            <div className="w-20 h-1 bg-gradient-to-r from-primary-500 to-cyan-400 rounded-full mt-4" />
          </div>

          {/* Skills grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {skillCategories.map((category, catIndex) => (
              <div
                key={category.title}
                className="card p-6 group hover:border-surface-600/80 transition-all duration-500"
                style={{ transitionDelay: `${catIndex * 100}ms` }}
              >
                {/* Category header */}
                <div className="flex items-center gap-3 mb-5">
                  <div className={`w-2 h-8 rounded-full bg-gradient-to-b ${category.color}`} />
                  <h3 className="text-white font-semibold">{category.title}</h3>
                </div>

                {/* Skill bars */}
                <div className="space-y-4">
                  {category.skills.map((skill) => (
                    <div key={skill.name}>
                      <div className="flex justify-between items-center mb-1.5">
                        <span className="text-surface-300 text-sm font-medium">{skill.name}</span>
                        <span className="text-surface-500 text-xs font-mono">{skill.level}%</span>
                      </div>
                      <div className="h-1.5 bg-surface-700/50 rounded-full overflow-hidden">
                        <div
                          className={`h-full rounded-full bg-gradient-to-r ${category.color} transition-all duration-1000 ease-out`}
                          style={{ width: isVisible ? `${skill.level}%` : '0%' }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
