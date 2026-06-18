import { useState } from 'react';
import { useScrollReveal } from '../hooks/useScrollReveal';
import { profile, links } from '../data/profile';
import { Icons } from './Icons';

const channels = [
  { key: 'mail', label: 'Email', value: profile.email, href: links.email },
  { key: 'linkedin', label: 'LinkedIn', value: '/in/abdullathepro', href: links.linkedin },
  { key: 'github', label: 'GitHub', value: '/ababeel-ceo', href: links.github },
  { key: 'document', label: 'Résumé', value: 'View / Download PDF', href: links.resume },
];

export default function Contact() {
  const [ref, isVisible] = useScrollReveal();
  const [form, setForm] = useState({ name: '', email: '', message: '' });

  const update = (e) => setForm((f) => ({ ...f, [e.target.name]: e.target.value }));

  const onSubmit = (e) => {
    e.preventDefault();
    const subject = encodeURIComponent(`Portfolio enquiry from ${form.name || 'a recruiter'}`);
    const body = encodeURIComponent(
      `${form.message}\n\n— ${form.name}${form.email ? `\n${form.email}` : ''}`
    );
    window.location.href = `${links.email}?subject=${subject}&body=${body}`;
  };

  return (
    <section id="contact" className="section-padding relative">
      <div className="section-container">
        <div ref={ref} className={`reveal ${isVisible ? 'visible' : ''}`}>
          <div className="text-center max-w-2xl mx-auto mb-14">
            <span className="eyebrow mx-auto">Contact</span>
            <h2 className="section-title mb-4">
              Let’s build something <span className="gradient-text">meaningful.</span>
            </h2>
            <p className="section-subtitle mx-auto">
              I’m open to Full Stack and backend engineering roles where I can own enterprise software and deliver real business impact. If that sounds like a fit, let’s talk.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-6 lg:gap-10 max-w-5xl mx-auto">
            {/* Channels */}
            <div className="flex flex-col gap-3">
              {channels.map((c) => {
                const Icon = Icons[c.key];
                return (
                  <a
                    key={c.label}
                    href={c.href}
                    target={c.href.startsWith('http') ? '_blank' : undefined}
                    rel={c.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                    className="card card-hover p-4 flex items-center gap-4 group"
                  >
                    <span className="w-11 h-11 rounded-xl bg-primary-500/10 text-primary-300 flex items-center justify-center group-hover:bg-primary-500/20 transition-colors duration-300 shrink-0">
                      <Icon className="w-5 h-5" />
                    </span>
                    <div className="min-w-0 flex-1">
                      <p className="text-surface-400 text-xs uppercase tracking-wider">{c.label}</p>
                      <p className="text-surface-100 text-sm font-medium truncate group-hover:text-primary-300 transition-colors duration-300">
                        {c.value}
                      </p>
                    </div>
                    <Icons.arrowRight className="w-4 h-4 text-surface-500 group-hover:text-primary-300 group-hover:translate-x-0.5 transition-all duration-300 shrink-0" />
                  </a>
                );
              })}

              <div className="card p-4 flex items-center gap-4 mt-1">
                <span className="w-11 h-11 rounded-xl bg-surface-800 text-surface-400 flex items-center justify-center shrink-0">
                  <Icons.location className="w-5 h-5" />
                </span>
                <div>
                  <p className="text-surface-400 text-xs uppercase tracking-wider">Based in</p>
                  <p className="text-surface-100 text-sm font-medium">{profile.location}</p>
                </div>
              </div>
            </div>

            {/* Form */}
            <form onSubmit={onSubmit} className="card p-6 md:p-7 flex flex-col gap-4">
              <div className="grid sm:grid-cols-2 gap-4">
                <label className="block">
                  <span className="text-surface-300 text-xs font-medium">Name</span>
                  <input
                    name="name"
                    value={form.name}
                    onChange={update}
                    required
                    placeholder="Jane Recruiter"
                    className="mt-1.5 w-full rounded-lg bg-surface-950/60 border border-surface-700/60 px-3.5 py-2.5 text-sm text-surface-100 placeholder:text-surface-500 focus:outline-none focus:border-primary-500/60 focus:ring-1 focus:ring-primary-500/40 transition-colors"
                  />
                </label>
                <label className="block">
                  <span className="text-surface-300 text-xs font-medium">Email</span>
                  <input
                    type="email"
                    name="email"
                    value={form.email}
                    onChange={update}
                    required
                    placeholder="you@company.com"
                    className="mt-1.5 w-full rounded-lg bg-surface-950/60 border border-surface-700/60 px-3.5 py-2.5 text-sm text-surface-100 placeholder:text-surface-500 focus:outline-none focus:border-primary-500/60 focus:ring-1 focus:ring-primary-500/40 transition-colors"
                  />
                </label>
              </div>
              <label className="block">
                <span className="text-surface-300 text-xs font-medium">Message</span>
                <textarea
                  name="message"
                  value={form.message}
                  onChange={update}
                  required
                  rows={5}
                  placeholder="Tell me about the role or project you have in mind…"
                  className="mt-1.5 w-full rounded-lg bg-surface-950/60 border border-surface-700/60 px-3.5 py-2.5 text-sm text-surface-100 placeholder:text-surface-500 focus:outline-none focus:border-primary-500/60 focus:ring-1 focus:ring-primary-500/40 transition-colors resize-none"
                />
              </label>
              <button type="submit" className="btn-primary w-full">
                <Icons.mail className="w-4 h-4" />
                Send Message
              </button>
              <p className="text-surface-500 text-xs text-center">
                Opens your email client, pre-addressed to {profile.email}.
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
