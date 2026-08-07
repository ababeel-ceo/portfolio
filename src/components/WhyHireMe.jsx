import { useScrollReveal } from '../hooks/useScrollReveal';
import { whyHireMe } from '../data/profile';
import { Icons } from './Icons';

export default function WhyHireMe() {
  const [ref, isVisible] = useScrollReveal();

  return (
    <section id="why" className="section-padding relative">
      <div className="section-container">
        <div ref={ref} className={`reveal ${isVisible ? 'visible' : ''}`}>
          <div className="mb-12 max-w-2xl">
            <span className="eyebrow">Why Hire Me</span>
            <h2 className="section-title mb-4">
              The case for an <span className="gradient-text">interview</span>.
            </h2>
            <p className="section-subtitle">
              Seven reasons I can own and deliver production software from day one — not just write
              code.
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {whyHireMe.map((item) => {
              const Icon = Icons[item.iconKey];
              return (
                <div key={item.title} className="card card-hover group p-5 md:p-6">
                  <span className="mb-5 flex h-11 w-11 items-center justify-center rounded-2xl bg-primary-500/10 text-primary-300 transition-all duration-500 group-hover:scale-105 group-hover:bg-primary-500/20">
                    <Icon className="h-5 w-5" />
                  </span>
                  <h3 className="mb-2 text-[15px] font-semibold leading-snug text-white">
                    {item.title}
                  </h3>
                  <p className="text-sm leading-relaxed text-surface-400">{item.desc}</p>
                </div>
              );
            })}

            {/* Closing CTA tile */}
            <div className="card card-accent card-topline flex flex-col justify-center p-5 md:p-6">
              <h3 className="mb-2 font-display text-[15px] font-semibold leading-snug text-white">
                Ready to add this to your team?
              </h3>
              <p className="mb-5 text-sm leading-relaxed text-surface-300">
                Let’s talk about the impact I can deliver for you.
              </p>
              <a href="#contact" className="btn-accent w-full !py-2.5 !text-[13px]">
                <Icons.mail className="h-4 w-4" />
                Get in touch
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
