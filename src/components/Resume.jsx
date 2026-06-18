import { useScrollReveal } from '../hooks/useScrollReveal';
import { profile, links, RESUME_DOWNLOAD_NAME } from '../data/profile';
import { Icons } from './Icons';

export default function Resume() {
  const [ref, isVisible] = useScrollReveal();

  return (
    <section id="resume" className="section-padding relative bg-surface-900/30 border-y border-surface-800/50">
      <div className="section-container">
        <div ref={ref} className={`reveal ${isVisible ? 'visible' : ''}`}>
          <div className="card overflow-hidden">
            <div className="grid md:grid-cols-2">
              {/* Resume preview — clickable, opens the real file in a new tab */}
              <a
                href={links.resume}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Open résumé preview in a new tab"
                className="group relative p-6 md:p-10 bg-surface-950/40 border-b md:border-b-0 md:border-r border-surface-700/50 flex items-center justify-center"
              >
                <div className="relative w-full max-w-[300px] aspect-[1/1.3] rounded-lg bg-surface-100 shadow-2xl shadow-black/40 overflow-hidden rotate-[-1.5deg] group-hover:rotate-0 group-hover:-translate-y-1 transition-transform duration-500">
                  {/* document header */}
                  <div className="bg-gradient-to-br from-primary-800 to-primary-600 p-4 text-white">
                    <p className="font-bold text-sm leading-tight">{profile.name}</p>
                    <p className="text-[10px] text-primary-100/90">{profile.title}</p>
                  </div>
                  {/* document body */}
                  <div className="p-4 space-y-3">
                    {[
                      { w: 'w-1/3', label: true },
                      { w: 'w-full' }, { w: 'w-5/6' }, { w: 'w-11/12' },
                      { w: 'w-1/4', label: true },
                      { w: 'w-full' }, { w: 'w-4/6' },
                      { w: 'w-1/3', label: true },
                      { w: 'w-full' }, { w: 'w-3/4' },
                    ].map((l, i) => (
                      <div
                        key={i}
                        className={`h-2 rounded ${l.w} ${l.label ? 'bg-primary-500/60' : 'bg-surface-300'}`}
                      />
                    ))}
                  </div>
                  {/* hover overlay */}
                  <div className="absolute inset-0 bg-primary-900/0 group-hover:bg-primary-900/20 transition-colors duration-300 flex items-center justify-center">
                    <span className="opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-300 inline-flex items-center gap-2 px-3.5 py-2 rounded-lg bg-surface-950/90 text-white text-xs font-medium">
                      <Icons.eye className="w-4 h-4" /> Open résumé
                    </span>
                  </div>
                </div>

                <span className="absolute top-5 left-5 pill !py-1 text-[11px]">
                  <Icons.document className="w-3.5 h-3.5 text-primary-300" /> Résumé Preview
                </span>
              </a>

              {/* CTAs */}
              <div className="p-6 md:p-10 flex flex-col justify-center">
                <span className="eyebrow">Résumé</span>
                <h2 className="text-2xl md:text-3xl font-bold text-white mb-3 tracking-tight">
                  Your next hire, <span className="gradient-text">on one page.</span>
                </h2>
                <p className="text-surface-300 leading-relaxed mb-7 max-w-md">
                  Three years of enterprise delivery, six production applications, and two corporate awards — summarized for a fast recruiter scan.
                </p>

                <div className="flex flex-col sm:flex-row gap-3">
                  <a href={links.resume} target="_blank" rel="noopener noreferrer" className="btn-primary">
                    <Icons.eye className="w-4 h-4" />
                    View Resume
                  </a>
                  <a href={links.resume} download={RESUME_DOWNLOAD_NAME} className="btn-accent">
                    <Icons.download className="w-4 h-4" />
                    Download Resume
                  </a>
                </div>
                <p className="mt-4 text-surface-500 text-xs flex items-center gap-1.5">
                  <Icons.external className="w-3.5 h-3.5" />
                  Opens in a new tab · PDF format
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
