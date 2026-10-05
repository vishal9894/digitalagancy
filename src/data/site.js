export const NAV_LINKS = [
  { label: 'Home', href: '#home' },
  { label: 'Services', href: '#services' },
  { label: 'Results', href: '#results' },
  { label: 'Process', href: '#process' },
  { label: 'Products', href: '#products' },
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
    accent: 'brand',
  },
  {
    quote:
      'We serve traditional Rajasthani cuisine, and at the beginning it was difficult to let people know about the restaurant. That is when we decided to take on Stado’s digital marketing. The overall process was smooth, and I would definitely recommend them.',
    name: 'Dr. Hasnain',
    role: 'Owner, Dr. Hasnain Quaiar Clinic',
    accent: 'cyan',
  },
  {
    quote:
      'I have been working with Stado Publication for a year now, and the results have been fantastic. They took the time to understand our business and created a strategy that boosted our online presence. Their team is professional, communicative, and always on top of things.',
    name: 'Pratik Nishant',
    role: 'Garg360',
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
