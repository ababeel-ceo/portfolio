// ============================================================================
//  SEO artifacts derived from src/data/profile.js at build time
//  (see scripts/prerender.js) so they never drift from the visible content.
// ============================================================================
import {
  profile,
  links,
  hero,
  about,
  impactMetrics,
  experience,
  caseStudies,
  awards,
  expertise,
} from '../data/profile';

export const SITE_URL = links.portfolio;
const HANDLE = 'abdullathepro';
const OG_IMAGE = new URL('og-image.png', SITE_URL).href;
const RESUME = new URL(links.resume, SITE_URL).href;

const ids = {
  website: `${SITE_URL}#website`,
  page: `${SITE_URL}#profilepage`,
  person: `${SITE_URL}#person`,
};

const unique = (items) => [...new Map(items.map((i) => [i.toLowerCase(), i])).values()];

/** schema.org graph: WebSite + ProfilePage whose main entity is the Person. */
export function structuredData(buildDate) {
  return {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'WebSite',
        '@id': ids.website,
        url: SITE_URL,
        name: profile.name,
        alternateName: HANDLE,
        inLanguage: 'en',
        publisher: { '@id': ids.person },
      },
      {
        '@type': 'ProfilePage',
        '@id': ids.page,
        url: SITE_URL,
        isPartOf: { '@id': ids.website },
        mainEntity: { '@id': ids.person },
        image: OG_IMAGE,
        inLanguage: 'en',
        dateModified: buildDate,
      },
      {
        '@type': 'Person',
        '@id': ids.person,
        name: profile.name,
        alternateName: ['Abdulla', HANDLE],
        jobTitle: profile.title,
        description: hero.subheadline,
        url: SITE_URL,
        email: profile.email,
        homeLocation: { '@type': 'Place', name: profile.location },
        worksFor: { '@type': 'Organization', name: profile.company },
        hasCredential: {
          '@type': 'EducationalOccupationalCredential',
          credentialCategory: 'degree',
          name: profile.education,
        },
        award: awards.map((a) => `${a.title} (${a.year})`),
        knowsAbout: unique([
          ...experience.tech,
          ...expertise.flatMap((e) => e.skills),
          ...hero.exploring,
        ]),
        sameAs: [links.linkedin, links.github, links.leetcode],
      },
    ],
  };
}

export function sitemapXml(buildDate) {
  return `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url>
    <loc>${SITE_URL}</loc>
    <lastmod>${buildDate}</lastmod>
  </url>
</urlset>
`;
}

/** Plain-Markdown profile for AI assistants and answer engines (llmstxt.org). */
export function llmsTxt() {
  const lines = [
    `# ${profile.name}`,
    '',
    `> ${profile.title} at ${profile.company} (${profile.location}) with ${profile.experience.toLowerCase()} of experience. ${hero.headline}`,
    '',
    about.lead,
    '',
    '## Links',
    '',
    `- [Portfolio](${SITE_URL})`,
    `- [Résumé (PDF)](${RESUME})`,
    `- [LinkedIn](${links.linkedin})`,
    `- [GitHub](${links.github})`,
    `- [LeetCode](${links.leetcode})`,
    `- Email: ${profile.email}`,
    '',
    '## Experience',
    '',
    `**${experience.role}, ${experience.company}** - ${experience.period}, ${experience.location}`,
    '',
    experience.summary,
    '',
    ...experience.highlights.map((h) => `- ${h}`),
    '',
    '## Impact',
    '',
    ...impactMetrics.map((m) => `- **${m.label}:** ${m.value}`),
    '',
    '## Case studies',
    '',
    ...caseStudies.flatMap((s) => [
      `### ${s.name}`,
      '',
      `${s.domain}${s.award ? ` · ${s.award}` : ''}`,
      '',
      s.overview,
      '',
      `Outcome: ${s.outcome}`,
      '',
      `Tech: ${s.tech.join(', ')}`,
      ...(s.repo ? ['', `Source: ${s.repo}`] : []),
      '',
    ]),
    '## Skills',
    '',
    ...expertise.map((e) => `- **${e.title}:** ${e.skills.join(', ')}`),
    `- **Currently exploring:** ${hero.exploring.join(', ')}`,
    '',
    '## Awards',
    '',
    ...awards.map((a) => `- **${a.title}** (${a.year}) - ${a.summary}`),
    '',
    '## Education',
    '',
    `- ${profile.education}`,
    '',
  ];
  return lines.join('\n');
}
