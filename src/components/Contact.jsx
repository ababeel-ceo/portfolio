import { useScrollReveal } from '../hooks/useScrollReveal';

const contactLinks = [
  {
    label: 'Email',
    value: 'abdullahsmsapk@gmail.com',
    href: 'mailto:abdullahsmsapk@gmail.com',
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
      </svg>
    ),
  },
  {
    label: 'Phone',
    value: '+91 9043195825',
    href: 'tel:+919043195825',
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
      </svg>
    ),
  },
  {
    label: 'Location',
    value: 'Tirunelveli, India',
    href: null,
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
      </svg>
    ),
  },
  {
    label: 'LinkedIn',
    value: 'Connect on LinkedIn',
    href: 'https://linkedin.com/in/',
    icon: (
      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
      </svg>
    ),
  },
];

export default function Contact() {
  const [ref, isVisible] = useScrollReveal();

  return (
    <section id="contact" className="section-padding bg-surface-900/30">
      <div className="section-container">
        <div ref={ref} className={`reveal ${isVisible ? 'visible' : ''}`}>
          {/* Header */}
          <div className="text-center mb-16">
            <p className="text-primary-400 font-mono text-sm mb-2">// contact</p>
            <h2 className="section-title mx-auto">
              Let's Build Something <span className="gradient-text">Together</span>
            </h2>
            <p className="section-subtitle mt-3 mx-auto">
              Open to backend engineering roles, distributed systems challenges, and impactful projects.
              Let's connect.
            </p>
            <div className="w-20 h-1 bg-gradient-to-r from-primary-500 to-cyan-400 rounded-full mt-4 mx-auto" />
          </div>

          <div className="max-w-3xl mx-auto">
            {/* Contact cards */}
            <div className="grid sm:grid-cols-2 gap-4 mb-10">
              {contactLinks.map((link) => {
                const Tag = link.href ? 'a' : 'div';
                const extraProps = link.href
                  ? {
                      href: link.href,
                      target: link.href.startsWith('http') ? '_blank' : undefined,
                      rel: link.href.startsWith('http') ? 'noopener noreferrer' : undefined,
                    }
                  : {};

                return (
                  <Tag
                    key={link.label}
                    {...extraProps}
                    className="card card-hover p-5 flex items-center gap-4 group cursor-pointer"
                  >
                    <div className="w-12 h-12 rounded-xl bg-primary-500/10 text-primary-400 flex items-center
                                    justify-center group-hover:bg-primary-500/20 transition-colors shrink-0">
                      {link.icon}
                    </div>
                    <div>
                      <p className="text-surface-500 text-xs uppercase tracking-wider">{link.label}</p>
                      <p className="text-surface-200 font-medium group-hover:text-primary-400 transition-colors">
                        {link.value}
                      </p>
                    </div>
                  </Tag>
                );
              })}
            </div>

            {/* CTA */}
            <div className="text-center">
              <div className="card p-8 md:p-10 text-center">
                <h3 className="text-xl md:text-2xl font-bold text-white mb-3">
                  Interested in working together?
                </h3>
                <p className="text-surface-400 mb-6 max-w-md mx-auto">
                  I'm actively looking for backend engineering roles where I can build systems at scale.
                  Drop me a message and let's talk.
                </p>
                <a href="mailto:abdullahsmsapk@gmail.com" className="btn-primary text-base">
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  Send Me an Email
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
