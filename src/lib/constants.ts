export const BUSINESS = {
  name: 'London Locksmith Pro',
  legalName: 'London Locksmith Pro Ltd',
  tagline: "London's Most Trusted Emergency Locksmith",
  description:
    '24/7 emergency locksmith services across London. Fast 30-minute response, fully insured, no call-out fee. Available day and night for all locksmith needs.',
  phone: '020 3900 4444',
  phonePlain: '02039004444',
  phoneHref: 'tel:+442039004444',
  mobile: '07700 123456',
  mobilePlain: '07700123456',
  mobileHref: 'tel:+447700123456',
  whatsapp: '447700123456',
  whatsappHref: 'https://wa.me/447700123456',
  email: 'info@londonlocksmith.co',
  emailHref: 'mailto:info@londonlocksmith.co',
  website: 'https://londonlocksmith.co',
  address: {
    street: '247 High Street',
    area: 'Walthamstow',
    city: 'London',
    postcode: 'E17 7BX',
    country: 'United Kingdom',
    countryCode: 'GB',
    full: '247 High Street, Walthamstow, London, E17 7BX',
  },
  geo: {
    lat: 51.5865,
    lng: -0.0214,
  },
  social: {
    google: 'https://g.page/londonlocksmith',
    facebook: 'https://www.facebook.com/londonlocksmith',
    instagram: 'https://www.instagram.com/londonlocksmith',
    twitter: 'https://twitter.com/londonlocksmith',
    trustpilot: 'https://www.trustpilot.com/review/londonlocksmith.co',
  },
  rating: {
    value: '4.9',
    count: '847',
    platform: 'Google',
  },
  stats: {
    responseTime: '30 minutes',
    yearsExperience: '15+',
    jobsCompleted: '50,000+',
    customersServed: '35,000+',
    boroughsCovered: '32',
    availability: '24/7',
    successRate: '99.8%',
  },
  certifications: [
    'DBS Checked',
    'Fully Insured',
    'Master Locksmith',
    'CHAS Accredited',
    'Trading Standards Approved',
    'Which? Trusted Trader',
  ],
  pricing: {
    callOutFee: '£0',
    emergencyFrom: '£49',
    standardFrom: '£39',
    priceRange: '££',
  },
} as const

export const SEO = {
  siteName: 'London Locksmith',
  siteUrl: 'https://londonlocksmith.co',
  defaultTitle: "London's #1 Emergency Locksmith | 24/7 | 30-Min Response",
  titleTemplate: '%s | London Locksmith',
  defaultDescription:
    'Emergency locksmith in London available 24/7. 30-minute response across all London boroughs. No call-out fee. Fully insured. Call 020 3900 4444 now.',
  defaultOgImage: '/logo.webp',
  twitterHandle: '@londonlocksmith',
  twitterCardType: 'summary_large_image',
  locale: 'en_GB',
  themeColor: '#0A1628',
} as const

export const NAVIGATION = {
  main: [
    { label: 'Home', href: '/' },
    {
      label: 'Services',
      href: '/services',
      children: [
        { label: 'Emergency Locksmith', href: '/services/emergency-locksmith' },
        { label: '24 Hour Locksmith', href: '/services/24-hour-locksmith' },
        { label: '24/7 Residential Locksmith', href: '/residential-locksmith-london' },
        { label: 'House Lockout', href: '/services/house-lockout' },
        { label: 'Burglary Repair', href: '/services/burglary-repair' },
        { label: 'UPVC Door Repair', href: '/services/upvc-door-repair' },
        { label: 'Car Locksmith', href: '/services/car-locksmith' },
        { label: 'Commercial Locksmith', href: '/services/commercial-locksmith' },
        { label: 'Smart Lock Installation', href: '/services/smart-lock-installation' },
        { label: 'Lock Repair', href: '/services/lock-repair' },
        { label: 'Lock Replacement', href: '/services/lock-replacement' },
        { label: 'Key Cutting', href: '/services/key-cutting' },
        { label: 'Safe Locksmith', href: '/services/safe-locksmith' },
        { label: 'Security Upgrades', href: '/services/security-upgrades' },
        { label: 'Door Opening', href: '/services/door-opening' },
        { label: 'Snapped Key Extraction', href: '/services/snapped-key-extraction' },
      ],
    },
    {
      label: 'Locations',
      href: '/locations',
      children: [
        { label: 'East London', href: '/locations/east-london' },
        { label: 'North London', href: '/locations/north-london' },
        { label: 'South London', href: '/locations/south-london' },
        { label: 'West London', href: '/locations/west-london' },
        { label: 'Walthamstow', href: '/locations/walthamstow' },
        { label: 'Barking', href: '/locations/barking' },
        { label: 'Ilford', href: '/locations/ilford' },
        { label: 'Tottenham', href: '/locations/tottenham' },
        { label: 'Southall', href: '/locations/southall' },
      ],
    },
    { label: 'Pricing', href: '/pricing' },
    { label: 'Blog', href: '/blog' },
    { label: 'About', href: '/about' },
    { label: 'Contact', href: '/contact' },
  ],
} as const

export const TRUST_SIGNALS = [
  {
    icon: 'Clock',
    title: '30-Min Response',
    description: 'Average arrival time across London',
    color: 'orange',
  },
  {
    icon: 'Shield',
    title: 'Fully Insured',
    description: '£5M public liability insurance',
    color: 'blue',
  },
  {
    icon: 'Award',
    title: '4.9★ Rated',
    description: 'Based on 847 Google reviews',
    color: 'amber',
  },
  {
    icon: 'Phone',
    title: '24/7 Available',
    description: 'Day, night, weekends & bank holidays',
    color: 'green',
  },
  {
    icon: 'BadgeCheck',
    title: 'No Call-Out Fee',
    description: 'Transparent pricing, no hidden costs',
    color: 'purple',
  },
  {
    icon: 'MapPin',
    title: 'All 32 Boroughs',
    description: 'Complete London coverage',
    color: 'red',
  },
] as const

export const EMERGENCY_SERVICES = [
  'Emergency Locksmith',
  'House Lockout',
  'Burglary Repair',
  'Door Opening',
  'Snapped Key Extraction',
] as const
