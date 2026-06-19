import { useScrollReveal } from '../hooks/useScrollReveal';
import { whyHireMe } from '../data/profile';
import { Icons } from './Icons';

export default function WhyHireMe() {
  const [ref, isVisible] = useScrollReveal();

  return (
    <section id="why" className="section-padding relative">
      <div className="section-container">
        <div ref={ref} className={`reveal ${isVisible ? 'visible' : ''}`}>
          <div className="max-w-2xl mb-12">
            <span className="eyebrow">Why Hire Me</span>
            <h2 className="section-title mb-4">
              The case for an <span className="gradient-text">interview</span>.
            </h2>
            <p className="section-subtitle">
              Seven reasons I can own and deliver production software from day one — not just write code.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {whyHireMe.map((item) => {
              const Icon = Icons[item.iconKey];
              return (
                <div key={item.title} className="card card-hover p-5 group">
                  <span className="w-11 h-11 rounded-xl bg-primary-500/10 text-primary-300 flex items-center justify-center mb-4 group-hover:bg-primary-500/20 transition-colors duration-300">
                    <Icon className="w-5 h-5" />
                  </span>
                  <h3 className="text-white font-semibold text-[15px] mb-2 leading-snug">{item.title}</h3>
                  <p className="text-surface-400 text-sm leading-relaxed">{item.desc}</p>
                </div>
              );
            })}

            {/* Closing CTA tile */}
            <div className="card p-5 flex flex-col justify-center bg-gradient-to-br from-primary-500/15 to-surface-900/60 border-primary-500/30">
              <h3 className="text-white font-semibold text-[15px] mb-1.5">Ready to add this to your team?</h3>
              <p className="text-surface-300 text-sm leading-relaxed mb-4">
                Let’s talk about the impact I can deliver for you.
              </p>
              <a href="#contact" className="btn-accent w-full !py-2.5 text-xs">
                <Icons.mail className="w-4 h-4" />
                Get in touch
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
