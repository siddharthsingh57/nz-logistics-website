/**
 * ─── SITE CONTENT ──────────────────────────────────────────────────────────
 *
 * All editable copy lives here. Find-and-replace "YOUR BUSINESS NAME" with
 * the real brand name once confirmed. Replace bracketed placeholders like
 * [YEAR] and [X] with real values.
 *
 * Search hints:
 *   - Brand name   → search: YOUR BUSINESS NAME
 *   - Founded year → search: [YEAR]
 *   - Depot count  → search: [X]
 *   - Contact info → search: [PHONE], [EMAIL], [ADDRESS]
 * ──────────────────────────────────────────────────────────────────────────
 */

export const SITE = {
  name: 'YOUR BUSINESS NAME',

  meta: {
    title: 'YOUR BUSINESS NAME — New Zealand Freight & Logistics',
    description:
      'YOUR BUSINESS NAME delivers freight, warehousing, last-mile delivery, cold chain, and customs clearance across New Zealand. Reliable logistics for Kiwi businesses.',
  },

  nav: [
    { label: 'Home', href: '/' },
    { label: 'Services', href: '/services' },
    { label: 'Contact', href: '/contact' },
  ],

  hero: {
    eyebrow: 'New Zealand Freight & Logistics',
    headline: 'Moving New Zealand\'s goods further, faster.',
    subheadline:
      '[X] depots. Both islands. One freight partner that actually delivers — from full-load freight to temperature-controlled last-mile, end to end.',
    cta1Label: 'Get a Quote',
    cta1Href: '/contact',
    cta2Label: 'Our Services',
    cta2Href: '/services',
    trustItems: [
      { label: 'Serving NZ since', value: '[YEAR]' },
      { label: 'depots nationwide', value: '[X]' },
      { label: 'Same-day Auckland', value: '' },
    ],
  },

  stats: [
    { value: '[X]', suffix: '+', label: 'Years in business' },
    { value: '[X]', suffix: '', label: 'Regional depots' },
    { value: '[X]', suffix: '%', label: 'On-time delivery' },
    { value: '[X]k', suffix: '+', label: 'Runs per year' },
  ],

  servicesOverview: [
    {
      id: 'freight',
      icon: 'Truck',
      title: 'Freight Transport',
      description:
        'Full-load and part-load freight across both islands. From Auckland to Invercargill, we keep your supply chain moving.',
    },
    {
      id: 'warehousing',
      icon: 'Warehouse',
      title: 'Warehousing',
      description:
        'Secure, accessible storage at [X] depots nationwide. Pick-and-pack, cross-docking, and inventory management included.',
    },
    {
      id: 'lastmile',
      icon: 'PackageCheck',
      title: 'Last-Mile Delivery',
      description:
        'Residential and commercial deliveries with track-and-trace, proof of delivery, and flexible time-window options.',
    },
    {
      id: 'coldchain',
      icon: 'Thermometer',
      title: 'Cold Chain',
      description:
        'End-to-end temperature-controlled logistics. Chilled and frozen freight handled with full compliance documentation.',
    },
    {
      id: 'customs',
      icon: 'FileCheck',
      title: 'Customs Clearance',
      description:
        'Import and export documentation, MPI border compliance, tariff classification, and duty management — all in-house.',
    },
  ],

  whyUs: {
    eyebrow: 'Why choose us',
    headline: 'The freight partner\nNew Zealand\nbusinesses trust.',
    body: 'We\'ve been moving goods across New Zealand for [X] years. Our network of [X] regional depots, GPS-tracked fleet, and dedicated account managers means your freight is in capable hands — every run, every route.',
    points: [
      {
        title: 'Real-time tracking',
        description: 'GPS visibility on every consignment from pickup to proof of delivery.',
      },
      {
        title: 'Dedicated account team',
        description: 'A named contact who knows your freight requirements — not a call centre.',
      },
      {
        title: 'Temperature-controlled fleet',
        description: 'Chilled and frozen capability across our full nationwide network.',
      },
      {
        title: 'NZ-owned and operated',
        description: 'Decisions made here, for New Zealand businesses — no offshore delays.',
      },
    ],
  },

  coverage: {
    eyebrow: 'NZ-wide coverage',
    headline: 'From Northland to Southland.',
    body: 'Our depot network spans both islands, with daily runs connecting every major centre. Whether you\'re shipping into Auckland or out to regional Hawke\'s Bay, we have the route covered.',
    northIsland: [
      'Northland / Whangarei',
      'Auckland Metro',
      'Waikato / Hamilton',
      'Bay of Plenty / Tauranga',
      'Hawke\'s Bay / Napier',
      'Manawatū / Palmerston North',
      'Wellington / Hutt Valley',
    ],
    southIsland: [
      'Nelson / Tasman',
      'Marlborough / Blenheim',
      'West Coast',
      'Canterbury / Christchurch',
      'Otago / Dunedin',
      'Southland / Invercargill',
    ],
  },

  process: {
    eyebrow: 'How it works',
    headline: 'Simple process,\ndependable results.',
    steps: [
      {
        number: '01',
        title: 'Request a quote',
        description:
          'Fill in your freight details online or call our team. We\'ll respond with a clear, itemised quote — no hidden charges.',
      },
      {
        number: '02',
        title: 'We confirm & schedule',
        description:
          'Your account manager confirms pickup requirements, packaging specifications, and an agreed collection window.',
      },
      {
        number: '03',
        title: 'Collected on time',
        description:
          'Our driver arrives within the agreed window. You receive an instant collection confirmation with tracking details.',
      },
      {
        number: '04',
        title: 'Delivered & confirmed',
        description:
          'Real-time updates keep you informed throughout transit. Proof of delivery is automatically sent on completion.',
      },
    ],
  },

  proof: {
    eyebrow: 'Trusted by',
    headline: 'New Zealand businesses\ncount on us.',
    clientNote:
      '/* Replace these five grey blocks with actual client logos. Recommended size: 160×60px SVG or PNG with transparent background. */',
    testimonialNote:
      '/* Replace this block with a real customer quote. Suggested format: 2–3 sentences about reliability, service quality, or time savings. Attribute to: First Name L., Job Title, Company (no full surnames for privacy). */',
  },

  contact: {
    eyebrow: 'Get in touch',
    headline: 'Ready to move\nyour freight?',
    body: 'Fill in the form and our team will get back to you within one business day with a tailored quote.',
    phone: '[PHONE NUMBER]',
    email: '[EMAIL ADDRESS]',
    addressLine1: '[STREET ADDRESS]',
    addressLine2: '[SUBURB], [CITY] [POSTCODE]',
    addressLine3: 'New Zealand',
    hours: {
      weekdays: 'Monday – Friday',
      weekdayHours: '7:00 am – 6:00 pm',
      saturday: 'Saturday',
      saturdayHours: '8:00 am – 12:00 pm',
      sunday: 'Sunday',
      sundayHours: 'Closed',
    },
    freightTypes: [
      'Full-load freight (FTL)',
      'Part-load freight (LTL/groupage)',
      'Palletised freight',
      'Temperature-controlled / cold chain',
      'Last-mile / residential delivery',
      'Warehousing enquiry',
      'Customs clearance',
      'Other',
    ],
  },

  footer: {
    tagline: 'Moving New Zealand forward.',
    copyright: `YOUR BUSINESS NAME © ${new Date().getFullYear()}`,
    newsletterLabel: 'Industry insights, delivered to your inbox.',
    newsletterPlaceholder: 'your@email.co.nz',
    newsletterCta: 'Subscribe',
    servicesLinks: [
      { label: 'Freight Transport', href: '/services' },
      { label: 'Warehousing', href: '/services' },
      { label: 'Last-Mile Delivery', href: '/services' },
      { label: 'Cold Chain', href: '/services' },
      { label: 'Customs Clearance', href: '/services' },
    ],
    social: {
      linkedin: '#',
      facebook: '#',
      instagram: '#',
    },
  },
}

/** Detailed service data — used by /services page */
export const SERVICES_DETAIL = [
  {
    id: 'freight',
    icon: 'Truck',
    title: 'Freight Transport',
    headline: 'Full-load and part-load freight, nationwide.',
    description:
      'From Auckland to Invercargill, YOUR BUSINESS NAME operates a GPS-tracked fleet of rigid and articulated vehicles covering every major route on both islands. We handle full truckloads (FTL), groupage/LTL, palletised freight, and oversized loads — with overnight and express options available for time-sensitive consignments.',
    features: [
      'Full truckload (FTL) and part-load (LTL/groupage)',
      'Overnight and same-day express options',
      'GPS-tracked fleet with real-time visibility',
      'Tail-lift and hand-unload capability',
      'Dangerous goods trained drivers (where applicable)',
      'Both North and South Island coverage',
    ],
    imagePlaceholder:
      '/* Replace with a photo of trucks on SH1 or at a depot — landscape, 16:9 — ideally golden-hour light */',
  },
  {
    id: 'warehousing',
    icon: 'Warehouse',
    title: 'Warehousing & Storage',
    headline: 'Secure storage at [X] depots across New Zealand.',
    description:
      'YOUR BUSINESS NAME\'s warehousing facilities provide flexible short- and long-term storage solutions, from bulk pallets to individual SKU pick-and-pack. All sites are monitored 24/7, with modern racking systems and integrated inventory management so you always know exactly what\'s on hand.',
    features: [
      'Short-term and long-term storage options',
      'Pick-and-pack and fulfilment services',
      'Cross-docking for rapid redistribution',
      'Bulk and pallet racking systems',
      '24/7 CCTV and alarm monitoring',
      'Inventory management with reporting',
    ],
    imagePlaceholder:
      '/* Replace with interior shot of a clean, well-lit warehouse with pallet racking — wide angle */',
  },
  {
    id: 'lastmile',
    icon: 'PackageCheck',
    title: 'Last-Mile Delivery',
    headline: 'Doorstep delivery for residential and commercial customers.',
    description:
      'The final kilometre is where freight experiences are made or broken. YOUR BUSINESS NAME\'s last-mile network covers every major urban centre and most regional areas, with flexible time-window booking, electronic proof of delivery, and a seamless returns process — keeping your customers happy and your operations clean.',
    features: [
      'Residential and commercial delivery nationwide',
      'Flexible time-window and pre-call options',
      'Electronic proof of delivery (ePOD)',
      'Track-and-trace with customer notifications',
      'Returns and reverse logistics handling',
      'Fragile and high-value item capability',
    ],
    imagePlaceholder:
      '/* Replace with photo of a driver handing a parcel to a customer at their door — warm, approachable */',
  },
  {
    id: 'coldchain',
    icon: 'Thermometer',
    title: 'Cold Chain Logistics',
    headline: 'Temperature integrity from collection to delivery.',
    description:
      'Maintaining an unbroken cold chain is non-negotiable for food, pharmaceutical, and floral freight. YOUR BUSINESS NAME operates a dedicated temperature-controlled fleet with chilled (+2°C to +8°C) and frozen (−18°C to −25°C) capability, full compliance documentation, and cold-store facilities at key depot locations.',
    features: [
      'Chilled freight (+2°C to +8°C) nationwide',
      'Frozen freight (−18°C to −25°C)',
      'Full temperature logging and compliance records',
      'Food-grade vehicles — regular hygiene audits',
      'MPI-compliant cold-store facilities',
      'Pharmaceutical and healthcare freight experience',
    ],
    imagePlaceholder:
      '/* Replace with photo of a refrigerated truck or cold-store interior — conveys precision and cleanliness */',
  },
  {
    id: 'customs',
    icon: 'FileCheck',
    title: 'Customs Clearance',
    headline: 'Import and export clearance, handled in-house.',
    description:
      'YOUR BUSINESS NAME\'s in-house customs team manages the full import and export clearance process — from tariff classification and duty calculation through to MPI border compliance and CFS handling. We keep your supply chain moving at the border so freight doesn\'t sit waiting on paperwork.',
    features: [
      'Import and export customs documentation',
      'MPI/biosecurity border compliance',
      'Tariff classification and duty assessment',
      'Duty deferral and postponed VAT accounting',
      'CFS (container freight station) handling',
      'Dangerous goods documentation',
    ],
    imagePlaceholder:
      '/* Replace with photo of containers at port — Auckland or Lyttelton — with sky and sea visible */',
  },
]
