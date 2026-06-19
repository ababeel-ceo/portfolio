// ============================================================================
//  SINGLE SOURCE OF TRUTH — edit your content here, the whole site updates.
// ============================================================================

// Resume: the file lives at  public/Abdulla.pdf  and this resolves to
// /portfolio/Abdulla.pdf automatically. To use a hosted link (Drive/Dropbox),
// just replace the line below with the full URL string.
export const RESUME_URL = `${import.meta.env.BASE_URL}Abdulla.pdf`;
// Filename used when the visitor downloads the résumé.
export const RESUME_DOWNLOAD_NAME = 'Abdulla_B_Software_Engineer_Resume.pdf';

export const profile = {
  name: 'Abdulla B',
  title: 'Software Engineer',
  company: 'Vivant360 Software Services',
  experience: '3+ Years',
  location: 'Tamil Nadu, India',
  education: 'Master of Computer Applications (MCA)',
  email: 'abdullahsmsapk@gmail.com',
  phone: '+91 9043195825',
};

export const links = {
  email: 'mailto:abdullahsmsapk@gmail.com',
  linkedin: 'https://in.linkedin.com/in/abdullathepro',
  github: 'https://github.com/ababeel-ceo',
  leetcode: 'https://leetcode.com/u/abdullahsmsapk/',
  portfolio: 'https://ababeel-ceo.github.io/portfolio/',
  resume: RESUME_URL,
};

export const navLinks = [
  { href: '#about', label: 'About' },
  { href: '#impact', label: 'Impact' },
  { href: '#work', label: 'Case Studies' },
  { href: '#expertise', label: 'Expertise' },
  { href: '#awards', label: 'Awards' },
  { href: '#contact', label: 'Contact' },
];

export const hero = {
  headline: 'Building enterprise software that automates business operations and improves customer experience.',
  subheadline:
    'Full-stack Software Engineer with 3+ years delivering enterprise applications across Identity Management, Insurance Operations, OCR Automation, Workflow Systems, and Customer Service Platforms — and an AI enthusiast exploring Agentic AI, generative models, and intelligent automation to push that work further.',
  badges: [
    '3+ Years Experience',
    'Led a 6-Member Team',
    '6+ Enterprise Applications Delivered',
    'Award-Winning Contributor',
    'Full Stack Development Ownership',
    'Exploring Agentic & Generative AI',
  ],
  stats: [
    { value: '6+', label: 'Enterprise Apps Delivered' },
    { value: '3+', label: 'Years of Experience' },
    { value: '2', label: 'Corporate Awards' },
    { value: '4', label: 'Business Domains' },
  ],
};

export const about = {
  lead:
    'I am a Software Engineer who measures success by business outcomes, not lines of code. Over 3+ years at Vivant360 Software Services I have owned enterprise applications end to end — from React interfaces to Spring Boot services and the data layer beneath them, while leading a 6-member team.',
  paragraphs: [
    'My work sits where engineering meets operations: identity and access governance, insurance operations, document automation, warranty and complaint workflows, and self-service content platforms. In each, I started from a real business problem — manual effort, slow turnaround, fragmented visibility — and delivered software that automated it.',
    'I take ownership across the full delivery lifecycle: understanding the domain, designing the architecture, building secure and scalable services, shipping the UI, and supporting it in production. That mindset earned me two corporate awards and the trust to lead delivery on systems that run real business operations.',
    'That same curiosity now points squarely at AI. I am an AI enthusiast actively exploring Agentic AI systems and modern AI-powered workflows — experimenting with leading models, tools, and frameworks to understand where they genuinely lift developer productivity, automation, and problem-solving, and how to apply them responsibly inside real engineering work.',
    'I care about clean architecture, maintainable code, and the realities of live systems — and I keep learning, so the next system I deliver is better than the last.',
  ],
  facts: [
    { label: 'Role', value: 'Software Engineer' },
    { label: 'Company', value: 'Vivant360 Software Services' },
    { label: 'Education', value: 'MCA' },
    { label: 'Location', value: 'Tamil Nadu, India' },
  ],
  pillars: [
    {
      number: '01',
      title: 'End-to-end ownership',
      desc: 'I deliver from requirements and architecture through implementation, UI, deployment, and production support — not just an isolated feature.',
    },
    {
      number: '02',
      title: 'Business-first problem solving',
      desc: 'Every system I build starts from an operational pain point and is measured by the efficiency, visibility, or experience it improves.',
    },
    {
      number: '03',
      title: 'Secure, scalable backend depth',
      desc: 'Strong Java, Spring Boot, RBAC, JWT, Hibernate, Redis, and microservices foundations for systems that hold up under real load.',
    },
    {
      number: '04',
      title: 'Workflow automation focus',
      desc: 'I turn manual, fragmented processes into automated, auditable, and continuously improvable workflows.',
    },
    {
      number: '05',
      title: 'AI-curious & always learning',
      desc: 'I stay current with Generative and Agentic AI — experimenting with new models and frameworks and folding what genuinely works into how I build.',
    },
  ],
};

// Executive dashboard — visible, recruiter-first proof at a glance.
// Numbers are sourced directly from the resume for verifiable, quantifiable impact.
export const impactMetrics = [
  { value: '5.7M+', label: 'Financial Transactions Processed', emphasis: true },
  { value: '80%', label: 'Reduction in Manual Processing', accent: true },
  { value: '40%', label: 'Faster Complaint Resolution' },
  { value: '2.3×', label: 'Transaction Engine Scaled (2.5M → 5.7M)' },
  { value: '6+', label: 'Enterprise Applications Delivered' },
  { value: '6', label: 'Team Members Led' },
  { value: '2', label: 'Corporate Awards' },
  { value: 'Insurance · IAM · OCR · CRM', label: 'Business Domains', wide: true },
];

export const experience = {
  role: 'Software Engineer',
  company: 'Vivant360 Software Services',
  location: 'Tamil Nadu, India',
  period: '3+ Years · Full-time',
  summary:
    'Owning enterprise application delivery across identity, insurance, automation, and customer-service domains — from architecture and secure Spring Boot services to React interfaces and production support.',
  highlights: [
    'Led a 6-member team across the delivery lifecycle — coordinating design, implementation, and production support to ship enterprise systems on time.',
    'Delivered 6+ enterprise applications spanning Identity & Access Management, B2B insurance operations, OCR document automation, warranty and complaint workflows, and a self-service template platform.',
    'Owned the full stack: React front ends, Java / Spring Boot service layers, secure REST APIs, and MySQL / MariaDB data design — with Redis and Redis Streams for caching and asynchronous processing.',
    'Standardized security across systems with JWT authentication and role-based access control (RBAC), reducing duplicated access logic and strengthening governance.',
    'Automated manual, fragmented business processes into auditable workflows — improving operational efficiency, turnaround, and visibility.',
    'Actively expanding into AI engineering — exploring Agentic AI, generative models, and AI-assisted development to bring intelligent automation into the next generation of systems I build.',
    'Recognized with the Outstanding Excellence Award (2023) and a Client Recognition Award (2024) for measurable business impact.',
  ],
  tech: [
    'Java', 'Spring Boot', 'Hibernate', 'REST APIs', 'Microservices',
    'React.js', 'JavaScript', 'Redis', 'Redis Streams', 'MySQL', 'MariaDB',
    'JWT', 'RBAC', 'Git',
  ],
};

// ============================================================================
//  CASE STUDIES — internally STAR-ordered, written as engineering success
//  stories (Business Problem -> Ownership -> Solution -> Impact). No STAR labels.
//  To add a real screenshot, set `image: '<filename>.png'` (place file in
//  public/) — the component shows it instead of the schematic preview.
// ============================================================================
export const caseStudies = [
  {
    id: 'iam',
    name: 'Identity & Access Management Platform',
    domain: 'Security & Access Governance',
    iconKey: 'shield',
    gradient: 'from-brand-400 to-brand-600',
    image: null,
    overview:
      'A centralized IAM platform that standardizes authentication, authorization, and role-based access control across multiple enterprise applications.',
    challenge:
      'Access governance was fragmented across applications, with duplicated user administration, inconsistent permission models, and growing security and operational overhead for administrators.',
    contribution: [
      'Designed and built a centralized platform unifying authentication, authorization, and user lifecycle management across systems.',
      'Implemented role-based access control (RBAC) with granular, reusable permission sets and secure administrative workflows.',
      'Secured APIs with JWT-based authentication and standardized token and session handling.',
      'Introduced approval-driven access-request workflows giving administrators clear oversight and control.',
    ],
    architecture: [
      'Spring Boot service layer exposing secured REST APIs, with Spring Security + JWT for stateless authentication.',
      'RBAC domain model (users → roles → permissions) persisted via Hibernate over MySQL / MariaDB.',
      'Centralized policy enforcement so dependent applications delegate auth decisions instead of re-implementing them.',
    ],
    tech: ['Java', 'Spring Boot', 'Spring Security', 'JWT', 'RBAC', 'Hibernate', 'REST APIs', 'MySQL / MariaDB', 'React.js'],
    outcome:
      'Strengthened security posture and standardized permission management across systems while reducing operational complexity for administrators and eliminating duplicated access logic.',
    learnings:
      'Centralizing a cross-cutting concern like identity pays compounding dividends; a clean RBAC model designed up front prevents permission sprawl later.',
    metrics: [
      { value: 'Centralized', label: 'Access Control' },
      { value: 'RBAC', label: 'Authorization Model' },
      { value: 'JWT', label: 'Secure Auth' },
      { value: 'Multi-App', label: 'Coverage' },
    ],
  },
  {
    id: 'insurance',
    name: 'B2B Insurance Portal',
    domain: 'Insurance Operations',
    iconKey: 'chart',
    gradient: 'from-emerald-400 to-brand-500',
    image: null,
    overview:
      'An enterprise B2B insurance portal that automates the policy and quote lifecycle and streamlines high-volume insurance operations for business partners.',
    challenge:
      'Insurance operations relied on slow, manual quote and policy workflows that were hard to scale as partner and transaction volume grew.',
    contribution: [
      'Built backend services and React interfaces that automated quote generation and the policy lifecycle end to end.',
      'Modeled enterprise insurance workflows (quote → policy → servicing) into maintainable, modular services.',
      'Used Redis and Redis Streams to offload heavy processing and keep partner-facing operations responsive under load.',
    ],
    architecture: [
      'Spring Boot microservices with Hibernate persistence over MySQL / MariaDB.',
      'Redis caching and Redis Streams for asynchronous, decoupled processing of high-volume workflows.',
      'React.js front end delivering partner-facing quote and policy management.',
    ],
    tech: ['Java', 'Spring Boot', 'Hibernate', 'REST APIs', 'React.js', 'Redis', 'Redis Streams', 'MySQL / MariaDB', 'Microservices'],
    outcome:
      'Automated core insurance operations, improved processing throughput and reliability under load, and significantly reduced manual effort across the quote and policy lifecycle.',
    learnings:
      'Asynchronous processing and caching are force-multipliers for transaction-heavy workflows; modeling the domain cleanly keeps the platform extensible as new products are added.',
    metrics: [
      { value: 'Quote → Policy', label: 'Automated Lifecycle' },
      { value: 'Async', label: 'Processing Model' },
      { value: 'High-Volume', label: 'Operations' },
      { value: 'Full Stack', label: 'Ownership' },
    ],
  },
  {
    id: 'warranty',
    name: 'Warranty Claim Management System',
    domain: 'Workflow Automation',
    iconKey: 'wrench',
    gradient: 'from-brand-500 to-cyan-400',
    image: null,
    overview:
      'A workflow-driven platform that digitizes and optimizes the end-to-end warranty claim process, from submission through review and resolution.',
    challenge:
      'Warranty claims moved through manual, fragmented steps that slowed resolution, reduced visibility, and made operational bottlenecks hard to spot.',
    contribution: [
      'Designed and implemented a configurable claim workflow covering submission, validation, review, and resolution.',
      'Built role-based queues and status tracking so each stakeholder sees exactly the claims they own.',
      'Automated routing and state transitions to remove manual handoffs and reduce processing delays.',
    ],
    architecture: [
      'Spring Boot backend with a state-driven workflow engine exposed through REST APIs.',
      'Hibernate / MySQL persistence with an auditable claim state history.',
      'React.js dashboards for claim tracking and operational visibility.',
    ],
    tech: ['Java', 'Spring Boot', 'Hibernate', 'REST APIs', 'React.js', 'MySQL / MariaDB', 'RBAC'],
    outcome:
      'Streamlined the warranty claim lifecycle, improved operational efficiency and process visibility, and reduced delays caused by manual handoffs.',
    learnings:
      'Encoding business processes as explicit, auditable workflows makes operations measurable — and therefore continuously improvable.',
    metrics: [
      { value: 'End-to-End', label: 'Claim Workflow' },
      { value: 'Automated', label: 'Routing' },
      { value: 'Auditable', label: 'State History' },
      { value: 'Improved', label: 'Efficiency' },
    ],
  },
  {
    id: 'ocr',
    name: 'OCR Document Verification Tool',
    domain: 'Intelligent Automation',
    iconKey: 'scan',
    gradient: 'from-amber-400 to-accent-500',
    image: null,
    award: 'Outstanding Excellence Award · 2023',
    overview:
      'An OCR-powered verification platform that automates document extraction, validation, and review workflows — recognized with the Outstanding Excellence Award 2023.',
    challenge:
      'Manual document verification was slow, effort-intensive, and error-prone, creating a bottleneck in downstream operations.',
    contribution: [
      'Designed and implemented an OCR-driven pipeline that automated document extraction, validation, and review.',
      'Built validation rules and a review workflow that auto-cleared clean documents and flagged exceptions for human attention.',
      'Integrated the tool into existing operational workflows as a seamless verification step.',
    ],
    architecture: [
      'Spring Boot services orchestrating OCR extraction, rule-based validation, and review routing.',
      'Asynchronous batch processing to keep document throughput high.',
      'React.js review console for exception handling and audit.',
    ],
    tech: ['Java', 'Spring Boot', 'OCR', 'REST APIs', 'React.js', 'Redis', 'MySQL / MariaDB'],
    outcome:
      'Significantly improved processing efficiency and reduced manual verification effort — earning the Outstanding Excellence Award 2023 for its contribution to operational excellence.',
    learnings:
      'Targeting the single highest-friction manual step with automation delivers outsized, visible business value.',
    metrics: [
      { value: 'OCR', label: 'Automated Extraction' },
      { value: 'Award', label: 'Outstanding Excellence ’23' },
      { value: 'Reduced', label: 'Manual Effort' },
      { value: 'Faster', label: 'Verification' },
    ],
  },
  {
    id: 'complaints',
    name: 'Complaints Management System',
    domain: 'Customer Experience',
    iconKey: 'chat',
    gradient: 'from-brand-400 to-accent-400',
    image: null,
    award: 'Client Recognition Award · 2024',
    overview:
      'A customer-service platform that centralizes complaint intake, tracking, and escalation to improve issue visibility and service responsiveness — recognized with the Client Recognition Award 2024.',
    challenge:
      'Complaints were hard to track and slow to resolve because intake, routing, and escalation were manual and lacked visibility.',
    contribution: [
      'Built a centralized platform with structured intake, status tracking, and escalation management.',
      'Automated routing and escalation rules so issues reach the right team and never stall silently.',
      'Delivered dashboards surfacing complaint status and aging for faster, more accountable resolution.',
    ],
    architecture: [
      'Spring Boot backend with workflow-driven complaint states exposed through REST APIs.',
      'Role-based access so support, operations, and management each see the right view.',
      'React.js front end for intake and tracking.',
    ],
    tech: ['Java', 'Spring Boot', 'Hibernate', 'REST APIs', 'React.js', 'MySQL / MariaDB', 'RBAC'],
    outcome:
      'Improved issue visibility, tracking, and service responsiveness — earning the Client Recognition Award 2024 for measurable service improvement.',
    learnings:
      'Visibility and clear ownership are often the biggest levers for customer-experience outcomes.',
    metrics: [
      { value: 'Centralized', label: 'Complaint Intake' },
      { value: 'Award', label: 'Client Recognition ’24' },
      { value: 'Automated', label: 'Escalation' },
      { value: 'Faster', label: 'Resolution' },
    ],
  },
  {
    id: 'template',
    name: 'Template Builder Platform',
    domain: 'Business Enablement',
    iconKey: 'layout',
    gradient: 'from-cyan-400 to-brand-500',
    image: null,
    overview:
      'A self-service platform that lets business users dynamically build and manage reusable content templates without engineering involvement.',
    challenge:
      'Every content or document change required developer effort, slowing the business and creating a delivery bottleneck.',
    contribution: [
      'Built a dynamic template builder enabling business users to compose, configure, and reuse templates through a UI.',
      'Designed a flexible, schema-driven model so templates support variables and dynamic content generation.',
      'Delivered the React front end and Spring Boot APIs powering create, preview, and publish flows.',
    ],
    architecture: [
      'Spring Boot APIs managing template definitions and rendering.',
      'Flexible schema-driven storage for dynamic fields in MySQL / MariaDB.',
      'React.js builder UI with live preview.',
    ],
    tech: ['Java', 'Spring Boot', 'REST APIs', 'React.js', 'JavaScript', 'MySQL / MariaDB'],
    outcome:
      'Enabled the business to self-serve content generation, removing an engineering bottleneck and accelerating turnaround for content and document changes.',
    learnings:
      'Building platforms — not just features — multiplies impact by empowering non-engineers to move on their own.',
    metrics: [
      { value: 'Self-Service', label: 'Platform' },
      { value: 'Dynamic', label: 'Content Generation' },
      { value: 'Reusable', label: 'Templates' },
      { value: 'Business', label: 'Enablement' },
    ],
  },
  {
    id: 'scroll-blocker',
    name: 'Scroll Blocker — Focus & Digital Wellbeing',
    domain: 'Native Android · Personal Project',
    iconKey: 'target',
    gradient: 'from-violet-400 to-brand-500',
    image: null,
    repo: 'https://github.com/ababeel-ceo/scroll-blocker',
    overview:
      'A self-initiated native Android app that curbs compulsive infinite scrolling system-wide by intercepting scroll gestures through the Android Accessibility Service. With Kotlin outside my core stack, I paired strong engineering fundamentals with AI-assisted development to learn the ecosystem and ship a working MVP fast.',
    challenge:
      'Two challenges in one: infinite-scroll feeds are deliberately engineered to be habit-forming, and most “focus” tools can only block an entire app — while I was also building in Kotlin and the Android platform, a stack outside my primary experience.',
    contribution: [
      'Conceived, architected, and shipped the MVP solo — owning product direction, UX, and engineering from a blank repository to a working build.',
      'Rapidly learned Kotlin and the Android platform on a real project, using AI-assisted development to accelerate research, implementation, and troubleshooting.',
      'Evaluated, refined, and validated AI-generated solutions with code review and testing — adapting them to the app’s architecture rather than accepting them as-is.',
      'Built the core blocking engine that detects and interrupts scroll gestures globally using the Android Accessibility Service.',
      'Designed a guided onboarding flow (Welcome → Permissions → Dashboard) and persisted state with Jetpack DataStore under a clean MVVM architecture.',
    ],
    architecture: [
      'Kotlin and Jetpack Compose UI following the MVVM pattern for a reactive, testable presentation layer.',
      'Android Accessibility Service as the always-on runtime that observes and intercepts scroll events across other apps.',
      'Preferences DataStore for asynchronous, durable configuration; Gradle (Kotlin DSL) build pipeline.',
    ],
    tech: ['Kotlin', 'Jetpack Compose', 'MVVM', 'Accessibility Service', 'DataStore', 'AI-Assisted Dev', 'Gradle (KTS)'],
    outcome:
      'Delivered a working MVP in an unfamiliar ecosystem by combining software-engineering fundamentals with AI-assisted development workflows — demonstrating the ability to rapidly learn new technologies, adapt to unfamiliar environments, and translate ideas into practical software efficiently.',
    learnings:
      'The real lesson was process over platform: with solid fundamentals and a disciplined approach to validating AI-generated code, limited prior exposure to a stack is no longer a barrier to shipping quality software.',
    metrics: [
      { value: 'New Stack', label: 'Learned & Shipped' },
      { value: 'AI-Assisted', label: 'Development Workflow' },
      { value: '100% Kotlin', label: 'Native Android' },
      { value: 'Solo Build', label: 'End-to-End Ownership' },
    ],
  },
];

export const awards = [
  {
    title: 'Outstanding Excellence Award',
    year: '2023',
    org: 'Vivant360 Software Services',
    summary:
      'Recognized for developing an OCR-based verification platform that automated document processing and improved operational efficiency.',
    caseStudyId: 'ocr',
    iconKey: 'trophy',
    gradient: 'from-amber-400 to-accent-500',
  },
  {
    title: 'Client Recognition Award',
    year: '2024',
    org: 'Client · Vivant360 Software Services',
    summary:
      'Recognized for delivering a complaint management solution that improved issue visibility, tracking, and service responsiveness.',
    caseStudyId: 'complaints',
    iconKey: 'star',
    gradient: 'from-brand-400 to-accent-400',
  },
];

export const certifications = [
  { title: 'Spring Professional', org: 'VMware Tanzu', year: '2024' },
  { title: 'Oracle Certified Java SE', org: 'Oracle', year: '2023' },
  { title: 'AWS Cloud Practitioner', org: 'Amazon Web Services', year: '2024' },
];

// Technical expertise — organized by business capability, not random buckets.
export const expertise = [
  {
    title: 'Backend Engineering',
    capability: 'Secure, scalable services that run business operations.',
    iconKey: 'server',
    skills: ['Java', 'Spring Boot', 'Hibernate', 'REST APIs', 'Microservices'],
  },
  {
    title: 'Frontend Engineering',
    capability: 'Clean, responsive interfaces that make systems usable.',
    iconKey: 'window',
    skills: ['React.js', 'JavaScript', 'HTML', 'CSS', 'Bootstrap'],
  },
  {
    title: 'Data & Messaging',
    capability: 'Reliable persistence and asynchronous, high-volume processing.',
    iconKey: 'database',
    skills: ['MariaDB', 'MySQL', 'Redis', 'Redis Streams'],
  },
  {
    title: 'Security & Architecture',
    capability: 'Access governance and architecture built for production.',
    iconKey: 'shield',
    skills: ['JWT', 'Authentication', 'Authorization', 'RBAC', 'Microservices'],
  },
  {
    title: 'Engineering Practices',
    capability: 'How I keep delivery maintainable and predictable.',
    iconKey: 'compass',
    skills: ['OOP', 'Design Patterns', 'LLD & HLD', 'Git & GitHub', 'Agile Delivery'],
  },
];

export const whyHireMe = [
  {
    title: 'Enterprise Software Engineer',
    desc: 'I deliver production-grade applications that run real business operations — not demos or prototypes.',
    iconKey: 'building',
  },
  {
    title: 'Full Stack Problem Solver',
    desc: 'I own solutions end to end, from React interfaces to Spring Boot services and the data layer beneath them.',
    iconKey: 'layers',
  },
  {
    title: 'Award-Winning Contributor',
    desc: 'Recognized twice — Outstanding Excellence (2023) and Client Recognition (2024) — for measurable business impact.',
    iconKey: 'trophy',
  },
  {
    title: 'Production-Focused Developer',
    desc: 'I build for reliability, maintainability, and the realities of live systems operating under load.',
    iconKey: 'pulse',
  },
  {
    title: 'Business-Oriented Engineer',
    desc: 'I start from the business problem and measure success by operational outcomes, not lines of code.',
    iconKey: 'target',
  },
  {
    title: 'Strong Backend Specialist',
    desc: 'Deep Java, Spring Boot, and data expertise for secure, scalable, well-architected services.',
    iconKey: 'server',
  },
  {
    title: 'AI-Augmented Engineer',
    desc: 'An AI enthusiast exploring Agentic AI and generative tools — experimenting with leading models and frameworks to automate workflows and accelerate delivery.',
    iconKey: 'sparkle',
  },
];
