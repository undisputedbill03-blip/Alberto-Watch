// Alberto Watch Company - Master Catalog & Archival Data
// Established 1987 · New York · Beverly Hills · Chicago
// Authorized dealer for Rolex, Michael Kors, Citizen, Bulova & Alberto Originals

export const categories = [
  { id: 'all', label: 'All Watches' },
  { id: 'luxury', label: 'Luxury' },
  { id: 'vintage', label: 'Vintage' },
  { id: 'smart', label: 'Smart Watches' },
  { id: 'classic', label: 'Classic' },
];

export const watches = [
  // ===== LUXURY =====
  {
    id: 1,
    reference: 'Ref. 126331-JUB',
    name: 'Oyster Perpetual Datejust 41',
    brand: 'Rolex',
    category: 'luxury',
    price: 14850,
    image: '/luxury_watch.png',
    condition: 'Brand New · Complete Box & Papers',
    description:
      'The definitive benchmark of classical luxury. Fitted with an 18k Everose gold fluted bezel and slate sundust dial with 10 baguette-cut diamond hour markers, paired with the iconic Jubilee bracelet.',
    features: [
      'Manufacture Calibre 3235 automatic mechanical movement',
      'Paramagnetic blue Parachrom hairspring & Paraflex shock absorbers',
      'Superlative Chronometer certified (COSC + Rolex internal testing)',
      '18k Everose gold fluted bezel & Twinlock screw-down crown',
      'Cyclops magnification lens over date at 3 o\'clock',
      'Oystersteel and 18k Everose Jubilee bracelet with Easylink 5mm extension',
      'Approx. 70 hours power reserve',
      '5-Year International Manufacturer Warranty',
    ],
    specs: {
      movement: 'Swiss Perpetual Automatic (Calibre 3235)',
      caseDiameter: '41mm',
      caseThickness: '11.8mm',
      lugWidth: '21mm',
      powerReserve: '70 Hours',
      crystal: 'Scratch-resistant Sapphire with Cyclops Lens',
      waterResistance: '100m / 330ft',
    },
    badge: 'Flagship Reference',
    inStock: true,
  },
  {
    id: 2,
    reference: 'Ref. MK-9082S',
    name: 'MK Radiance Gold Chronograph',
    brand: 'Michael Kors',
    category: 'luxury',
    price: 3200,
    image: '/luxury_watch.png',
    condition: 'Brand New in Presentation Case',
    description:
      'The epitome of contemporary luxury. Featuring a bold gold-tone case with sparkling crystal accents and a sleek bracelet that transitions seamlessly from day to evening engagements.',
    features: [
      '44mm gold-tone stainless steel case with polished bevels',
      'Crystal-set bezel & faceted hour markers',
      'Three sub-dial chronograph measuring split-seconds',
      'Precision Japanese quartz chronograph movement',
      'Luminescent gold hands with Super-LumiNova fill',
      'Date aperture at 4:30 position',
      'Double butterfly deployant clasp in stainless steel',
      '2-Year International Warranty',
    ],
    specs: {
      movement: 'Japanese Quartz Chronograph',
      caseDiameter: '44mm',
      caseThickness: '10.5mm',
      lugWidth: '22mm',
      powerReserve: '3-Year Battery System',
      crystal: 'Beveled Anti-Reflective Sapphire',
      waterResistance: '50m / 165ft',
    },
    badge: 'New Arrival',
    inStock: true,
  },
  {
    id: 3,
    reference: 'Ref. 96B375-AV',
    name: 'Nocturne Elite Precisionist 262kHz',
    brand: 'Bulova',
    category: 'luxury',
    price: 5800,
    image: '/luxury_watch.png',
    condition: 'Mint Unworn · Factory Seals Intact',
    description:
      'Captures the mystery of the night sky with a midnight blue aventurine dial and diamond markers. Features Bulova\'s proprietary 262 kHz high-frequency quartz movement with continuous sweeping seconds.',
    features: [
      'Proprietary 262,144 Hz Precisionist high-frequency movement',
      'Fluid sweeping seconds hand mirroring high-beat mechanical movements',
      'Midnight blue aventurine dial with natural mineral sparkle',
      'Genuine diamond hour markers (0.15ct total weight)',
      'Hand-finished 316L stainless steel case with PVD accents',
      'Exhibition display caseback',
      'Solid link bracelet with safety push-button deployant',
      '3-Year Manufacturer Warranty',
    ],
    specs: {
      movement: 'High-Frequency Quartz (262,144 Hz)',
      caseDiameter: '40mm',
      caseThickness: '11.5mm',
      lugWidth: '20mm',
      powerReserve: '2-Year High-Drain Cell',
      crystal: 'Curved AR-Coated Sapphire',
      waterResistance: '30m / 100ft',
    },
    badge: 'Limited Edition',
    inStock: true,
  },

  // ===== VINTAGE =====
  {
    id: 4,
    reference: 'Ref. 1887-HPW',
    name: 'Heritage Grand Pocket Watch',
    brand: 'Alberto Originals',
    category: 'vintage',
    price: 1850,
    image: '/vintage_watch.png',
    condition: 'Historical Restored Masterpiece',
    description:
      'A faithful recreation of a 19th-century gentleman\'s pocket watch, featuring ornate gold filigree engravings, a hunter-case design, and a wind-up mechanical movement restored in our Manhattan workshop.',
    features: [
      'Hunter-case design with hand-turned floral guilloché engraving',
      'Solid brass case with heavy gold vermeil plating',
      '17-jewel Swiss manual wind mechanical movement',
      'Fired Roman numeral porcelain white dial',
      'Double-sided hinged covers with release button at crown',
      'Includes 14k gold-filled Albert chain and fob',
      'Velvet-lined mahogany presentation chest',
      'Signed Alberto Reyes certificate of authenticity',
    ],
    specs: {
      movement: 'Manual Wind Mechanical (17 Jewels)',
      caseDiameter: '50mm',
      caseThickness: '14.5mm',
      lugWidth: 'Chain Mount',
      powerReserve: '38 Hours',
      crystal: 'High-Domed Mineral Glass',
      waterResistance: 'Dust-Resistant Vintage Case',
    },
    badge: 'Collector\'s Item',
    inStock: true,
  },
  {
    id: 5,
    reference: 'Ref. 1940-RET',
    name: 'Retrograde 1940 Aviator',
    brand: 'Alberto Originals',
    category: 'vintage',
    price: 2400,
    image: '/vintage_watch.png',
    condition: 'Excellent Vintage Grade (A+)',
    description:
      'Inspired by mid-century military pilot watches, the Retrograde 1940 features a cushion-shaped case, broad-arrow hands, radium-toned archival Super-LumiNova, and an anti-magnetic inner shield.',
    features: [
      'Cushion-shaped 316L stainless steel case with satin brush finish',
      'Broad-arrow hands with vintage-tinted Super-LumiNova',
      'Anti-magnetic soft-iron inner protective cage',
      'Domed box sapphire crystal with anti-reflective underside',
      'Swiss automatic mechanical movement with 42-hour reserve',
      'Hand-stitched distressed Horween leather strap',
      'Numbered limited edition caseback',
      '3-Year Alberto Atelier Warranty',
    ],
    specs: {
      movement: 'Automatic Swiss Calibre ETA 2824-2',
      caseDiameter: '39mm',
      caseThickness: '12.8mm',
      lugWidth: '20mm',
      powerReserve: '42 Hours',
      crystal: 'Box-Section Domed Sapphire',
      waterResistance: '50m / 165ft',
    },
    badge: 'Vintage Pilot',
    inStock: true,
  },
  {
    id: 6,
    reference: 'Ref. 1928-ADL',
    name: 'Art Deco Lady Tonneau',
    brand: 'Alberto Originals',
    category: 'vintage',
    price: 1650,
    image: '/vintage_watch.png',
    condition: 'Restored Vintage · Fully Overhauled',
    description:
      'An elegant ladies\' timepiece inspired by the Parisian Art Deco movement of the 1920s. Features a tonneau rectangular case with geometric stepped lugs, a mother-of-pearl dial, and cabochon sapphire crown.',
    features: [
      'Tonneau rectangular case in 14k yellow gold vermeil',
      'Natural iridescent Tahitian mother-of-pearl dial',
      'Geometric Art Deco hour numerals and blued sword hands',
      'High-precision Swiss quartz movement for slim reliability',
      'Black satin adjustable strap with deployment clasp',
      'Cabochon sapphire set into the winding crown',
      'Diamond-cut beveled crystal',
      '1-Year Alberto Atelier Warranty',
    ],
    specs: {
      movement: 'Swiss Precision Quartz',
      caseDiameter: '23mm × 36mm',
      caseThickness: '7.5mm',
      lugWidth: '14mm',
      powerReserve: '3-Year Battery',
      crystal: 'Curved Anatomical Mineral Crystal',
      waterResistance: '30m / 100ft',
    },
    badge: 'Art Deco Classic',
    inStock: false,
  },

  // ===== SMART WATCHES =====
  {
    id: 7,
    reference: 'Ref. SBR-8010',
    name: 'Connected Calibre E4 Titanium',
    brand: 'TAG Heuer',
    category: 'smart',
    price: 2650,
    image: '/smart_watch.png',
    condition: 'Brand New · Complete Kit with Fast Charger',
    description:
      'The pinnacle of luxury connected horology. Features a lightweight sandblasted Grade 2 titanium case, beveled ceramic bezel, high-definition AMOLED Retina display, and mechanical watch face emulations.',
    features: [
      'Grade 2 Titanium case with matte black DLC coating',
      'Polished black ceramic bezel with engraved graduations',
      '1.39" AMOLED Retina display (454×454 px, 326 ppi) with sapphire front',
      'Bespoke digital watch faces rendering authentic mechanical movements',
      'Multi-band GPS, Heart Rate, Barometer, Gyroscope & Compass sensors',
      'All-day battery life with accelerated magnetic fast charging',
      'Water resistant to 50 meters (5 ATM) with swimming metrics',
      'Interchangeable textured rubber strap with titanium folding clasp',
    ],
    specs: {
      movement: 'Wear OS by Qualcomm Snapdragon 4100+',
      caseDiameter: '45mm',
      caseThickness: '14.2mm',
      lugWidth: '22mm',
      powerReserve: 'All-Day Performance (24h+)',
      crystal: 'Edge-to-Edge Beveled Sapphire Crystal',
      waterResistance: '50m / 165ft (5 ATM)',
    },
    badge: 'Swiss Connected',
    inStock: true,
  },
  {
    id: 8,
    reference: 'Ref. FC-287S',
    name: 'Classics Vitality Hybrid Smartwatch',
    brand: 'Frederique Constant',
    category: 'smart',
    price: 1350,
    image: '/smart_watch.png',
    condition: 'Brand New in Factory Presentation Box',
    description:
      'The purist’s hybrid: an authentic Swiss guilloché dial with physical polished hands concealing an invisible LED screen at 6 o’clock, revealing health metrics and notifications only upon request.',
    features: [
      'Two-in-one dial: classic guilloché pattern with invisible digital LED sub-screen',
      'Physical hands that split at 9:15 during display activation',
      'Heart rate monitoring, sleep analysis, workout tracking & world timer',
      'Rose gold-plated stainless steel case with fluted crown button',
      'Bluetooth Low Energy connection to iOS & Android companion app',
      'Up to 11 days of continuous operation between USB charges',
      'Alligator-embossed calfskin strap with quick-release bars',
      'Hand-assembled in Plan-les-Ouates, Geneva, Switzerland',
    ],
    specs: {
      movement: 'Manufacture MMT-287 Swiss Connected Movement',
      caseDiameter: '42mm',
      caseThickness: '12.5mm',
      lugWidth: '21mm',
      powerReserve: '7–11 Days Rechargeable Battery',
      crystal: 'Convex Anti-Reflective Sapphire Crystal',
      waterResistance: '50m / 165ft',
    },
    badge: 'Geneva Hybrid',
    inStock: true,
  },

  // ===== CLASSIC =====
  {
    id: 9,
    reference: 'Ref. AQ4020-54Y',
    name: 'The Citizen Chronomaster Eco-Drive Tosa Washi',
    brand: 'Citizen',
    category: 'classic',
    price: 3800,
    image: '/classic_watch.png',
    condition: 'Brand New · Japanese Master Watchmaking',
    description:
      'Regarded by horologists as the finest high-accuracy quartz timepiece in production. Boasts Calibre A060 with autonomous accuracy within ±5 seconds per year, light-powered by any light source through a natural Japanese Tosa Washi paper dial.',
    features: [
      'Eco-Drive solar light-powered movement (never requires battery replacement)',
      'Autonomous accuracy rating of ±5 seconds per year without radio/GPS sync',
      'Handcrafted natural Tosa Washi paper dial allowing light transmission',
      'Zaratsu distortion-free mirror hand-polishing on Super Titanium case',
      'Duratect α surface hardening (2,000+ Vickers, 10× harder than steel)',
      'Perpetual calendar programmed through February 28, 2100',
      'Independently adjustable hour hand for international travel',
      '10-Year Global Warranty with complimentary 5-year overhaul',
    ],
    specs: {
      movement: 'Citizen Calibre A060 High-Accuracy Eco-Drive',
      caseDiameter: '37.5mm',
      caseThickness: '10.6mm',
      lugWidth: '19mm',
      powerReserve: '1.5 Years on Full Charge (Power Save Mode)',
      crystal: 'Dual Spherical Sapphire with 99% Clarity Coating',
      waterResistance: '100m / 330ft',
    },
    badge: '±5s/Yr Solar',
    inStock: true,
  },
  {
    id: 10,
    reference: 'Ref. AO-CLASSIC-38',
    name: 'Dress Classic Slimline White',
    brand: 'Alberto Originals',
    category: 'classic',
    price: 720,
    image: '/classic_watch.png',
    condition: 'New Production · Numbered Atelier Edition',
    description:
      'A timeless dress watch for formal occasions. The Dress Classic White features an opaline white sunburst dial, diamond-cut baton hands, and a slim 7.2mm profile that slides effortlessly under a shirt cuff.',
    features: [
      'Opaline white sunburst dial with minimalist applied indices',
      'Ultra-slim 7.2mm case profile for black-tie elegance',
      'High-grade Swiss quartz movement accurate to ±10 seconds/year',
      'Polished 316L surgical-grade stainless steel case',
      'Genuine Louisiana leather strap with contrast ecru stitching',
      'Anti-reflective sapphire crystal coating',
      'Date display aperture at 6 o\'clock',
      'Deployant folding clasp with Alberto crest',
    ],
    specs: {
      movement: 'Swiss High-Precision Quartz',
      caseDiameter: '38mm',
      caseThickness: '7.2mm',
      lugWidth: '20mm',
      powerReserve: '3-Year Battery',
      crystal: 'Flat Sapphire with AR Undercoating',
      waterResistance: '30m / 100ft',
    },
    badge: 'Dress Classic',
    inStock: true,
  },
  {
    id: 11,
    reference: 'Ref. 126610LN',
    name: 'Submariner Date 41 Phantom Diver',
    brand: 'Rolex',
    category: 'classic',
    price: 15400,
    image: '/classic_watch.png',
    condition: 'Certified Pre-Owned · Mint 99% Condition with Papers',
    description:
      'The archetypal diver’s watch. Fitted with an unyielding unidirectional rotatable Cerachrom ceramic bezel with 60-minute graduations, Triplock triple waterproofness system, and 300m / 1,000ft depth rating.',
    features: [
      'Oystersteel 904L aerospace alloy case with extreme corrosion resistance',
      'Unidirectional 120-click rotatable bezel with black Cerachrom ceramic insert',
      'Chromalight luminescent display with long-lasting blue glow',
      'Triplock triple waterproofness system with screw-down crown',
      'Oysterlock folding safety clasp with Rolex Glidelock 20mm extension system',
      'Solid link Oyster bracelet with brushed satin surfaces and polished bevels',
      'Superlative Chronometer certification (-2/+2 seconds per day)',
      'Complete with original inner/outer green boxes and warranty card',
    ],
    specs: {
      movement: 'Rolex Manufacture Calibre 3235 Automatic',
      caseDiameter: '41mm',
      caseThickness: '12.3mm',
      lugWidth: '21mm',
      powerReserve: '70 Hours',
      crystal: 'Scratch-resistant Sapphire with Cyclops Lens',
      waterResistance: '300m / 1,000ft (Triplock System)',
    },
    badge: 'Certified Icon',
    inStock: true,
  },
  {
    id: 12,
    reference: 'Ref. 96B251-LP',
    name: 'Bulova Surveyor Precisionist',
    brand: 'Bulova',
    category: 'classic',
    price: 1480,
    image: '/classic_watch.png',
    condition: 'Brand New in Commemorative Packaging',
    description:
      'Precision engineering in a refined executive package. Powered by Bulova\'s 262 kHz eight-hand chronograph movement with smooth continuous sweep seconds, tachymetric scale, and two-tone bracelet.',
    features: [
      'High-frequency Precisionist movement (262,144 Hz)',
      '±10 seconds per year chronometric accuracy',
      'Sunburst dial with textured chronograph sub-dials',
      'Two-tone 316L stainless steel case & link bracelet',
      'Ergonomic pusher levers for split-second timing',
      'Luminescent hands & applied faceted indices',
      'Curved anti-reflective sapphire crystal',
      '3-Year Bulova Global Warranty',
    ],
    specs: {
      movement: 'Bulova Precisionist (High-Frequency Quartz)',
      caseDiameter: '44mm',
      caseThickness: '11.8mm',
      lugWidth: '22mm',
      powerReserve: '2-Year Battery',
      crystal: 'Curved Anti-Reflective Sapphire',
      waterResistance: '50m / 165ft',
    },
    badge: 'Precision',
    inStock: true,
  },
];

export const techFeatures = [
  {
    icon: 'Settings2',
    title: 'Swiss Mechanical Movements',
    subtitle: 'COSC Certified Calibres',
    description:
      'Our mechanical watches house Swiss-made movements with precision-machined escapements, offering up to 72 hours of power reserve. Certified by the COSC (Contrôle Officiel Suisse des Chronomètres) for chronometric accuracy across 5 spatial positions.',
  },
  {
    icon: 'Sun',
    title: 'Eco-Drive Solar Technology',
    subtitle: 'Citizen Light-Powered Innovation',
    description:
      'Citizen\'s Eco-Drive technology converts any light source — natural sunlight or dim indoor artificial light — into continuous electrical energy stored in a lithium-ion cell. Runs for up to 6 months in total darkness, eliminating battery replacement forever.',
  },
  {
    icon: 'Diamond',
    title: 'Sapphire Crystal Glass',
    subtitle: 'Mohs-9 Scratch-Proof Shield',
    description:
      'Premium watches in our catalog feature scratch-resistant synthetic sapphire crystal rated 9 on the Mohs hardness scale (second only to diamond). Multi-layer anti-reflective coatings on both exterior and interior ensure distortion-free legibility in any lighting.',
  },
  {
    icon: 'Wifi',
    title: 'GPS & Smart Connectivity',
    subtitle: 'Hybrid Intelligence & Sensor Fusion',
    description:
      'Our connected and hybrid watches integrate multi-band GPS (L1/L5), Bluetooth 5.0 Low Energy, and biometric optical sensors for seamless smartphone synchronization, maintaining autonomous time accuracy to ±1 second per 100,000 years.',
  },
  {
    icon: 'ShieldCheck',
    title: 'Water Resistance Engineering',
    subtitle: '30m Splash to 300m Professional Dive',
    description:
      'From everyday dress protection (30m) to professional saturation dive ratings (300m), each case is pressure-tested in our atelier with screw-down crowns, reinforced casebacks, and triple-sealed fluoropolymer gaskets tested to ISO 6425 dive standards.',
  },
  {
    icon: 'Gauge',
    title: 'Perpetual & High-Frequency Quartz',
    subtitle: 'Bulova Precisionist 262,144 Hz',
    description:
      'Bulova\'s Precisionist quartz crystal vibrates at 262,144 Hz — 8 times faster than standard quartz — achieving a fluid sweeping seconds hand and ±10 seconds per year accuracy. Paired with perpetual calendars, these timepieces self-correct for leap years through 2100.',
  },
];

export const certifications = [
  { label: 'COSC Certified', desc: 'Contrôle Officiel Suisse des Chronomètres' },
  { label: 'ISO 6425 Dive Standard', desc: 'Professional Water Resistance Benchmark' },
  { label: 'MIL-STD-810G Rated', desc: 'Military Shock, Thermal & Drop Tolerance' },
  { label: 'Côtes de Genève Finishing', desc: 'Geneva Guild Guilloché & Perlage Standards' },
];

export const galleryImages = [
  {
    id: 1,
    src: '/luxury_watch.png',
    title: 'Prestige Collection',
    category: 'Luxury',
    caption: 'Rolex Datejust 41 in Everose gold catching ambient morning light on our Fifth Avenue workbench.',
  },
  {
    id: 2,
    src: '/vintage_watch.png',
    title: 'Heritage Timepieces',
    category: 'Vintage',
    caption: 'Restored 19th-century Swiss pocket calibre with thermal blued hands and hand-turned guilloché.',
  },
  {
    id: 3,
    src: '/smart_watch.png',
    title: 'Smart Innovations',
    category: 'Smart',
    caption: 'TAG Heuer Connected Calibre E4 in Grade 2 titanium housing beveled ceramic bezel.',
  },
  {
    id: 4,
    src: '/classic_watch.png',
    title: 'Classic Elegance',
    category: 'Classic',
    caption: 'The Citizen Chronomaster featuring handcrafted Japanese Tosa Washi paper dial and Zaratsu polishing.',
  },
  {
    id: 5,
    src: '/hero_banner.png',
    title: 'The Alberto Collection',
    category: 'Featured',
    caption: 'Master watchmakers Alberto and Julian Reyes at the central Manhattan timing and restoration benches.',
  },
  {
    id: 6,
    src: '/luxury_watch.png',
    title: 'Rare Timepieces',
    category: 'Luxury',
    caption: 'Bulova Precisionist high-frequency chronograph with midnight blue aventurine dial.',
  },
];

export const stores = [
  {
    id: 1,
    name: 'Alberto Flagship – Downtown New York',
    city: 'New York City',
    neighborhood: 'Flatiron Historic District',
    address: '142 Fifth Avenue, New York, NY 10011',
    phone: '+1 (212) 555-0194',
    email: 'downtown@albertowatch.com',
    hours: 'Mon–Sat: 9am–8pm | Sun: 11am–6pm',
    leadHorologist: 'Alberto Reyes, Master Watchmaker',
    amenities: ['Master Watchmaker on Bench', 'Private Viewing Suites', 'Same-Day Battery & Pressure Service', 'GIA Appraisal Consultations'],
    lat: 40.7411,
    lng: -73.9897,
  },
  {
    id: 2,
    name: 'Alberto – Beverly Hills',
    city: 'Beverly Hills',
    neighborhood: 'Wilshire Luxury Corridor',
    address: '9500 Wilshire Blvd, Beverly Hills, CA 90212',
    phone: '+1 (310) 555-0247',
    email: 'beverlyhills@albertowatch.com',
    hours: 'Mon–Sat: 10am–7pm | Sun: 12pm–5pm',
    leadHorologist: 'Julian Reyes, Head of Acquisitions',
    amenities: ['VIP Private Salon Lounges', 'Rare Vintage & Complications Vault', 'Champagne Concierge Service', 'Direct Armored Courier Intake'],
    lat: 34.0672,
    lng: -118.3975,
  },
  {
    id: 3,
    name: 'Alberto – Chicago Magnificent Mile',
    city: 'Chicago',
    neighborhood: 'The Magnificent Mile',
    address: '835 N Michigan Ave, Chicago, IL 60611',
    phone: '+1 (312) 555-0138',
    email: 'chicago@albertowatch.com',
    hours: 'Mon–Fri: 9am–7pm | Sat–Sun: 10am–6pm',
    leadHorologist: 'Clara Lindqvist, Senior Horologist',
    amenities: ['Heritage Horological Archive', 'Estate Collection Consultations', 'Certified Strap & Bracelet Fitting', 'Timing Analysis Testing'],
    lat: 41.8975,
    lng: -87.6236,
  },
];

export const salons = stores;

export const serviceItems = [
  {
    title: 'Expert Watch Repair',
    sub: 'All major luxury brands',
    description: 'Certified horologists trained in Geneva & Tokyo handling battery, movement overhauls, and restoration.',
  },
  {
    title: '3-Year Atelier Warranty',
    sub: 'Comprehensive guarantee',
    description: 'Full mechanical warranty on all Alberto Originals and certified pre-owned timepieces.',
  },
  {
    title: 'Free Insured Shipping',
    sub: 'Orders over $500',
    description: 'Complimentary armored courier delivery with tamper-evident security cases and tracking.',
  },
  {
    title: '30-Day Return Guarantee',
    sub: 'Hassle-free policy',
    description: 'Complete peace of mind with 30-day inspection period and full satisfaction guarantee.',
  },
];

export const faqs = [
  {
    question: 'Do you offer watch repair services for all brands?',
    answer:
      'Yes! Alberto Watch Company is a full-service repair and restoration center for all major watch brands including Rolex, Omega, Patek Philippe, Seiko, Citizen, Bulova, and more. Our certified watchmakers handle everything from immediate battery and strap replacement to full mechanical movement overhauls and laser case lapping.',
  },
  {
    question: 'How long does a watch repair typically take?',
    answer:
      'Simple maintenance tasks such as battery replacement, bracelet sizing, and pressure testing are typically completed same-day or within 24 hours. Complex mechanical overhauls, chronograph servicing, and vintage restoration projects typically take 2 to 6 weeks. We provide a complimentary diagnostic estimate and timeline before commencing any work.',
  },
  {
    question: 'Do you offer watch appraisals for insurance purposes?',
    answer:
      'Absolutely. Our GIA-certified gemologists and master horologists provide written appraisal documents accepted by all major insurance underwriters (including Chubb, Jewelers Mutual, and Lloyd’s). We appraise individual luxury timepieces, vintage heirlooms, and entire estate collections.',
  },
  {
    question: 'What brands do you carry in your retail store?',
    answer:
      'We are an authorized dealer and premier curator for Rolex, Michael Kors, Citizen Eco-Drive, Bulova Precisionist, and our bespoke Alberto Originals collection. We also maintain a curated vault of authenticated pre-owned references from Cartier, TAG Heuer, and Omega.',
  },
  {
    question: 'Do you offer financing or payment plans?',
    answer:
      'Yes, we partner with Affirm and Klarna to offer flexible financing with terms up to 12 months for qualified purchases over $500. We also accept all major credit cards, wire transfers, bank checks, and trade-in valuations.',
  },
  {
    question: 'Is there a warranty on purchased watches?',
    answer:
      'All brand-new timepieces come with the full manufacturer warranty (typically 2 to 5 years). In addition, all Alberto Originals pieces and certified pre-owned watches carry our own 3-Year Atelier Bench Warranty covering mechanical timing, amplitude, and manufacturing defects.',
  },
];

export const testimonials = [
  {
    id: 1,
    quote:
      "Alberto personally oversaw the full restoration of my grandfather's 1958 mechanical chronograph. The amplitude report and timing sheet they returned it with showed +1.2 sec/day. True Swiss-level atelier craftsmanship right here in New York.",
    author: 'Dr. Marcus Vance',
    role: 'Collector of Vintage Chronographs',
    city: 'New York, NY',
    watch: '1958 Alberto Restored Vintage',
  },
  {
    id: 2,
    quote:
      'Purchasing my Datejust 41 through Alberto Watch Company felt like visiting a private Geneva salon. Julian walked me through the calibre specs, provided complete box and papers, and had the Jubilee bracelet sized to perfection within minutes.',
    author: 'Eleanor Sterling',
    role: 'Private Collector',
    city: 'Beverly Hills, CA',
    watch: 'Rolex Datejust 41 Everose',
  },
  {
    id: 3,
    quote:
      'The Citizen Chronomaster with the handcrafted Tosa Washi paper dial is extraordinary. Accurate to within five seconds a year. The Chicago salon provided an official insurance appraisal letter on the spot for my underwriter.',
    author: 'Jonathan K. Reid',
    role: 'Horological Society Member',
    city: 'Chicago, IL',
    watch: 'The Citizen Chronomaster AQ4020',
  },
];
