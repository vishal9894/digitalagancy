export const NAV_LINKS = [
  { label: 'Home', href: '#home' },
  { label: 'Services', href: '#services' },
  { label: 'Results', href: '#results' },
  { label: 'Process', href: '#process' },
  { label: 'Products', href: '#products' },
  { label: 'FAQ', href: '#faq' },
  { label: 'Contact', href: '#contact' },
]

export const TRUST_LOGOS = [
  'Aan — The Ethnic Store',
  'Dr. Hasnain Clinic',
  'Garg360',
  'Stado Publication',
  'Keshawa',
  'BizBuzz',
]

export const STATS = [
  { value: 276, suffix: '+', label: 'Projects delivered' },
  { value: 18, suffix: '+', label: 'Years of experience' },
  { value: 94, suffix: '%', label: 'Client retention' },
  { value: 4.9, suffix: '/5', label: 'Average rating', decimals: 1 },
]

export const SERVICES = [
  {
    id: 'seo',
    title: 'SEO Services',
    icon: 'search',
    accent: 'brand',
    headline: 'Own the first page of search.',
    description:
      'We rebuild your organic presence from the code up. Technical architecture, topical authority and content that compounds — no tricks, just high-performance engineering for sustainable #1 rankings.',
    tags: ['Technical SEO', 'Content Strategy', 'Link Building'],
    stat: { value: '3.4x', label: 'avg. organic lift' },
  },
  {
    id: 'social',
    title: 'Social Media Marketing',
    icon: 'share',
    accent: 'cyan',
    headline: 'Turn scroll into signal.',
    description:
      'Platform-native creative built for the feed, not the deck. We plan, shoot, publish and iterate on content that earns attention and converts it into pipeline.',
    tags: ['Content Calendar', 'Reels & Shorts', 'Community'],
    stat: { value: '+180%', label: 'engagement' },
  },
  {
    id: 'paid',
    title: 'Paid Advertising',
    icon: 'target',
    accent: 'mint',
    headline: 'Spend that answers back.',
    description:
      'Full-funnel Meta, Google and LinkedIn campaigns engineered around CAC and LTV — not vanity clicks. Transparent dashboards, weekly iteration, compounding returns.',
    tags: ['Meta Ads', 'Google Ads', 'CRO'],
    stat: { value: '5.2x', label: 'avg. ROAS' },
  },
  {
    id: 'web',
    title: 'Web Development',
    icon: 'code',
    accent: 'brand',
    headline: 'Fast sites that sell.',
    description:
      'High-performance, scalable and future-ready builds. Corporate sites, landing pages and full platforms engineered to build trust, generate leads and convert.',
    tags: ['React', 'Next.js', 'Headless CMS'],
    stat: { value: '98', label: 'median Lighthouse' },
  },
  {
    id: 'ecommerce',
    title: 'Ecommerce',
    icon: 'cart',
    accent: 'amber',
    headline: 'Checkout revenue, recovered.',
    description:
      'Secure payments, real-time inventory and streamlined fulfilment — with precision monitoring on customer lifetime value and acquisition cost.',
    tags: ['Shopify', 'CRO', 'Lifecycle'],
    stat: { value: '+64%', label: 'checkout CVR' },
  },
  {
    id: 'brand',
    title: 'Brand Services',
    icon: 'sparkle',
    accent: 'rose',
    headline: 'Identity people remember.',
    description:
      'Positioning, naming, logo systems and brand voice that give you weight in the market — then we carry that identity across every digital touchpoint.',
    tags: ['Strategy', 'Identity', 'Guidelines'],
    stat: { value: '12+', label: 'brand systems' },
  },
]

export const CAPABILITIES = [
  { id: 'app', title: 'Mobile App Development', href: '#services' },
  { id: 'erp', title: 'Software Development', href: '#services' },
  { id: 'uiux', title: 'UI/UX Design', href: '#services' },
]

export const PROCESS = [
  {
    step: '01',
    title: 'Diagnose',
    description:
      'We start by understanding what is happening today: tracking, traffic quality, funnel drop-offs, creative performance and market positioning.',
  },
  {
    step: '02',
    title: 'Strategy',
    description:
      'A clear diagnosis becomes a practical action plan. Work begins with direction, not assumptions — and every tactic maps to a revenue outcome.',
  },
  {
    step: '03',
    title: 'Ship',
    description:
      'We ship the assets and infrastructure your marketing depends on. Campaigns, creative, pages and analytics go live in tight, visible cycles.',
  },
  {
    step: '04',
    title: 'Scale',
    description:
      'Continuous optimisation, realistic forecasting and transparent measurement. Rankings to leads, leads to revenue, trends to next-quarter planning.',
  },
]

export const PRODUCTS = [
  {
    name: 'Stado Payroll',
    category: 'HR & Operations',
    description:
      'Payroll built for growing Indian teams — compliance, attendance, leave and payslips in one system.',
    accent: 'brand',
  },
  {
    name: 'BizBuzz',
    category: 'Growth Platform',
    description:
      'Campaign orchestration and analytics that turns scattered marketing data into one live dashboard.',
    accent: 'cyan',
  },
  {
    name: 'Aan — The Ethnic Store',
    category: 'Ecommerce',
    description:
      'A flagship storefront we designed, developed and scaled — a live case study in our ecommerce practice.',
    accent: 'amber',
  },
]

export const TESTIMONIALS = [
  {
    quote:
      'One of the oldest digital marketing people and companies I have known and worked with. Best in creativity, service, advice and delivery. The director himself is young, hence understands market trends and is passionate about the work. That itself is a relief.',
    name: 'Rishu Kumar Gupta',
    role: 'Owner, Aan — The Ethnic Store',
    sector: 'Ecommerce',
    tenure: '2 yrs',
    rating: 5,
    accent: 'brand',
  },
  {
    quote:
      'We serve traditional Rajasthani cuisine, and at the beginning it was difficult to let people know about the restaurant. That is when we decided to take on Stado’s digital marketing. The overall process was smooth, and I would definitely recommend them.',
    name: 'Dr. Hasnain',
    role: 'Owner, Dr. Hasnain Quaiar Clinic',
    sector: 'Healthcare',
    tenure: '1 yr',
    rating: 5,
    accent: 'cyan',
  },
  {
    quote:
      'I have been working with Stado Publication for a year now, and the results have been fantastic. They took the time to understand our business and created a strategy that boosted our online presence. Their team is professional, communicative, and always on top of things.',
    name: 'Pratik Nishant',
    role: 'Garg360',
    sector: 'Brand & Growth',
    tenure: '1 yr',
    rating: 5,
    accent: 'mint',
  },
]

export const CHANNELS = [
  { label: 'SEO', color: 'var(--color-brand-400)' },
  { label: 'Social', color: 'var(--color-cyan-glow)' },
  { label: 'Paid Ads', color: 'var(--color-mint-glow)' },
  { label: 'Web', color: 'var(--color-amber-glow)' },
  { label: 'Email', color: 'var(--color-rose-glow)' },
  { label: 'Analytics', color: 'var(--color-brand-300)' },
]

export const FAQS = [
  {
    q: 'How long does it take to see results?',
    a: 'It depends on the channel. Paid campaigns can produce qualified leads within the first two weeks once tracking is verified. SEO and content compound more slowly — expect meaningful movement between months three and six, with meaningful traction by month four for most of our clients. We set expectations with that timeline in writing before we start, so there are no surprises at the first review.',
  },
  {
    q: 'Do you work with small businesses or only enterprise brands?',
    a: 'Both. Roughly half our clients are early-stage founders and SMEs who need a focused, high-impact setup rather than a large retainer. The others are established brands scaling multi-channel. What matters is that we can move the metric you care about — whether that is first customers or market share.',
  },
  {
    q: 'What does a monthly retainer include?',
    a: 'A dedicated strategist, a channel specialist and a designer on your account. Monthly you get strategy and reporting, creative production, campaign management, landing page work, and unlimited revisions on live assets. Reporting is weekly and includes the raw dashboards — you can audit every number we quote.',
  },
  {
    q: 'Am I locked into a long contract?',
    a: 'No. Our standard engagement is month-to-month after an initial ninety-day ramp period. The ramp exists because SEO, content and paid media all need time to gather signal, and we would rather show you real evidence than keep you bound because of it. We keep clients by being useful, not by contract.',
  },
  {
    q: 'Will you work with our existing website and brand?',
    a: 'Always. We can audit and improve what you already have, or we can rebuild it. Most clients come to us with an established brand and a site that no longer reflects it. Either way we start by auditing your current setup so nothing that already works gets thrown away.',
  },
  {
    q: 'Who actually does the work — in-house or outsourced?',
    a: 'In-house. The people in your strategy call are the people doing the work. We do not subcontract delivery to third parties, which is why we take on a limited number of clients at a time. It also means when something needs to ship, it ships quickly without a handoff.',
  },
  {
    q: 'How do you measure and report on performance?',
    a: 'We connect GA4, Search Console, your ad platforms and your CRM or Shopify so the numbers tie out end to end. Reporting connects rankings to leads, leads to revenue, and performance trends to strategic planning. If a channel cannot be tied to revenue, we say so rather than dressing it up.',
  },
  {
    q: 'What if I only need one service, like SEO?',
    a: 'That is fine. We do not require a bundled package. Many clients start with a single channel — usually SEO or a website rebuild — and expand once they trust the reporting. We would rather earn the rest of the work than sell it upfront.',
  },
]
