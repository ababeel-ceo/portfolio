import { useScrollReveal } from '../hooks/useScrollReveal';
import { profile, links, RESUME_DOWNLOAD_NAME } from '../data/profile';
import { Icons } from './Icons';

// Skeleton lines used in the stylized résumé preview.
const previewLines = [
  { w: 'w-1/3', label: true },
  { w: 'w-full' },
  { w: 'w-5/6' },
  { w: 'w-11/12' },
  { w: 'w-1/4', label: true },
  { w: 'w-full' },
  { w: 'w-4/6' },
  { w: 'w-1/3', label: true },
  { w: 'w-full' },
  { w: 'w-3/4' },
];

export default function Resume() {
  const [ref, isVisible] = useScrollReveal();

  return (
    <section id="resume" className="section-padding section-seam relative bg-white/[0.015]">
      <div className="section-container">
        <div ref={ref} className={`reveal ${isVisible ? 'visible' : ''}`}>
          <div className="card card-topline overflow-hidden">
            <div className="grid md:grid-cols-2">
              {/* Preview — opens the real file in a new tab */}
              <a
                href={links.resume}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Open résumé preview in a new tab"
                className="group relative flex items-center justify-center border-b border-white/[0.06] bg-surface-950/40 p-8 md:border-b-0 md:border-r md:p-12"
              >
                <span className="pill absolute left-6 top-6 !py-1 text-[11px]">
                  <Icons.document className="h-3.5 w-3.5 text-primary-300" /> Résumé preview
                </span>

                <div className="relative aspect-[1/1.3] w-full max-w-[280px] -rotate-[1.5deg] overflow-hidden rounded-xl bg-surface-100 shadow-float transition-transform duration-500 group-hover:-translate-y-1.5 group-hover:rotate-0">
                  <div className="bg-gradient-to-br from-primary-800 to-primary-600 p-4 text-white">
                    <p className="text-sm font-bold leading-tight">{profile.name}</p>
                    <p className="text-[10px] text-primary-100/90">{profile.title}</p>
                  </div>
                  <div className="space-y-3 p-4">
                    {previewLines.map((l, i) => (
                      <div
                        key={i}
                        className={`h-2 rounded-full ${l.w} ${
                          l.label ? 'bg-primary-500/60' : 'bg-surface-300'
                        }`}
                      />
                    ))}
                  </div>
                  <div className="absolute inset-0 flex items-center justify-center bg-primary-950/0 transition-colors duration-300 group-hover:bg-primary-950/30">
                    <span className="inline-flex translate-y-2 items-center gap-2 rounded-full bg-surface-950/90 px-4 py-2 text-xs font-medium text-white opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
                      <Icons.eye className="h-4 w-4" /> Open résumé
                    </span>
                  </div>
                </div>
              </a>

              {/* CTAs */}
              <div className="flex flex-col justify-center p-8 md:p-12">
                <span className="eyebrow">Résumé</span>
                <h2 className="section-title mb-4">
                  Your next hire, <span className="gradient-text">on one page.</span>
                </h2>
                <p className="mb-8 max-w-md leading-relaxed text-surface-300 text-pretty">
                  3+ years of enterprise delivery, six production applications, and two corporate
                  awards — summarized for a fast recruiter scan.
                </p>

                <div className="flex flex-col gap-3 sm:flex-row">
                  <a
                    href={links.resume}
                    download={RESUME_DOWNLOAD_NAME}
                    className="btn-primary !px-7 !py-4"
                  >
                    <Icons.download className="h-5 w-5" />
                    Download resume
                  </a>
                  <a
                    href={links.resume}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-outline !px-7 !py-4"
                  >
                    <Icons.eye className="h-5 w-5" />
                    View in browser
                  </a>
                </div>

                <p className="mt-5 inline-flex items-center gap-2 text-xs text-surface-500">
                  <Icons.document className="h-3.5 w-3.5" />
                  PDF format · opens in a new tab
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
