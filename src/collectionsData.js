/**
 * 6 CONTOUR ARCHITECTS — 5 CURATED MONOGRAPH COLLECTIONS
 * Each collection represents a distinct architectural & hospitality property category
 * with bespoke covers, curatorial texts, technical dossiers, and Before & After studies.
 */

export const COLLECTIONS_DATA = {
  resort: {
    key: 'resort',
    vol: 'VOL. I',
    title: 'RESORT COLLECTION',
    category: 'Resort & Hospitality Sanctuaries',
    description: 'Luxury resorts, holiday destinations, swimming pools, landscape architecture, cottages, villas, outdoor spaces and hospitality interiors.',
    coverClass: 'cover-resort',
    coverTag: 'VOL. I — RESORT & HOSPITALITY',
    coverTitle: 'THE ARCHITECTURE<br />OF REFUGE',
    coverSub: 'HOSPITALITY SANCTUARIES 2019–2025',
    coverSeal: 'I',
    coverGlyph: `
      <svg viewBox="0 0 40 40" class="cover-glyph-svg" fill="none" stroke="currentColor">
        <circle cx="20" cy="20" r="18" stroke-width="1.2" stroke-dasharray="2,2" />
        <path d="M8 24 Q 20 12, 32 24" stroke-width="1.8" />
        <path d="M12 28 Q 20 20, 28 28" stroke-width="1.4" />
        <circle cx="20" cy="14" r="3" fill="currentColor" />
      </svg>
    `,
    coverImg: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=1200&q=85',
    prefaceFolio: 'PREFACE // 02',
    prefaceTitle: 'On Hospitality & Topographical Sanctuary',
    prefaceDropcap: 'H',
    prefaceP1: 'True hospitality architecture must first learn how to step backward. When a guest arrives at an extraordinary destination, the building should not compete with the horizon — it should frame it with contemplative serenity.',
    prefaceP2: 'The works in this collection examine the threshold between luxury leisure and ecological stewardship: infinity basins carved into marine bluffs, overwater timber pavilions, and thermal wellness sanctuaries rooted in seasonal stillness.',
    sketchCaption: 'FIG 1.1 — SEAWARD INFINITY BASIN & SOLAR RADIATION STUDY',
    sketchSvg: `
      <line x1="20" y1="90" x2="380" y2="90" stroke="#A58B67" stroke-width="1.5" />
      <path d="M 40 90 Q 140 40, 260 70 T 360 40" fill="none" stroke="#252A29" stroke-width="2" />
      <line x1="160" y1="45" x2="320" y2="45" stroke="#A58B67" stroke-width="1.5" stroke-dasharray="3,3" />
      <circle cx="280" cy="30" r="10" fill="none" stroke="#A58B67" stroke-width="1" />
    `,
    sigName: 'Marc Althaus',
    sigTitle: 'Hospitality Design Director, Berlin',
    toc: [
      { num: '01', name: 'Amanpuri Sea Sanctuary', sub: 'Mallorca, Spain • Aegean Limestone & Cliff Basins', page: 3, pageLabel: 'P. 04' },
      { num: '02', name: 'Kurokawa Onsen Retreat', sub: 'Kyoto, Japan • Yakisugi Cedar & Geothermal Baths', page: 5, pageLabel: 'P. 06' },
      { num: '03', name: 'Alps Wellness Pavilion', sub: 'Vals, Switzerland • Subterranean Mineral Baths', page: 7, pageLabel: 'P. 08' },
      { num: '04', name: 'Coastal Bluff Metamorphosis (Before & After)', sub: 'Mallorca, Spain • Zero-Impact Landscape Integration', page: 9, pageLabel: 'P. 10' },
      { num: '05', name: 'Resort Register & Colophon', sub: 'Global Hospitality Works & Technical Notes', page: 11, pageLabel: 'P. 12' }
    ],
    project1: {
      folio: 'PROJECT 01',
      title: 'Amanpuri Sea Sanctuary',
      tag: 'HOSPITALITY RESORT // 2024',
      location: 'Cap de Formentor, Mallorca, Spain',
      coords: '39.9616° N, 3.2144° E',
      caption: 'PLATE 1.1 — 60-METER HORIZON POOL OVERLOOKING THE MEDITERRANEAN BLUFF',
      photoBy: 'Iñigo Bujedo Aguirre, 2024',
      img: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=1600&q=85',
      narrative: 'Cascading down a 45-degree pine bluff in northern Mallorca, this 32-key destination resort integrates low-profile suites into ancient stone terraces. An infinity pool extends past the rock ledge, creating an uninterrupted surface between fresh mountain water and the open sea.',
      specs: [
        ['Resort Footprint', '4,200 m² across 6 terraced tiers'],
        ['Primary Materiality', 'Local Mares Limestone & Bleached Oak'],
        ['Pool Engineering', 'Cantilevered Saltwater Overflow Basin'],
        ['Ecological Rating', 'BREEAM Outstanding Hospitality Citation'],
        ['Acoustic Performance', 'Sound of surf amplified, wind turbulence baffled']
      ],
      quote: '“Guests don’t feel they are staying in a hotel; they feel they are inhabiting the cliffside itself.”',
      quoteAuthor: '— Hospitality Director, Mallorca'
    },
    project2: {
      folio: 'PROJECT 02',
      title: 'Kurokawa Onsen Retreat',
      tag: 'HOTEL & SPA RETREAT // 2023',
      location: 'Northern Kyoto Prefecture, Japan',
      coords: '35.1204° N, 135.8012° E',
      caption: 'PLATE 2.1 — PRIVATE THERMAL BATH COURTYARD AND BAMBOO SCREEN',
      photoBy: 'Sugimoto Architectural Archive, 2023',
      img: 'https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=1600&q=85',
      narrative: 'Rooted in traditional Sukiya-zukuri principles, the Kurokawa Onsen Retreat embeds twelve freestanding cedar cottages into a protected cedar grove. Naturally heated geothermal spring water circulates continuously through honed black basalt soaking tubs.',
      specs: [
        ['Resort Scale', '12 Independent Guest Villas + Spa Pavilion'],
        ['Wood Joinery', 'Hand-Charred Yakisugi & Hinoki Cypress'],
        ['Geothermal System', '100% Gravity-fed Natural Spring Heat'],
        ['Lighting Philosophy', 'Zero direct luminaires, floor-level paper lanterns']
      ],
      pills: ['GEOTHERMAL REGENERATION', 'JAPAN SPA EXCELLENCE 2023']
    },
    project3: {
      folio: 'PROJECT 03',
      title: 'Alps Wellness Pavilion',
      tag: 'MOUNTAIN DESTINATION // 2022',
      location: 'Vals, Graubünden, Switzerland',
      coords: '46.6186° N, 9.1804° E',
      caption: 'PLATE 3.1 — SUBTERRANEAN MINERAL POOL CARVED INTO THE VALS BEDROCK',
      photoBy: 'Hélène Binet Studio, 2022',
      img: 'https://images.unsplash.com/photo-1571896349842-33c89424de2d?auto=format&fit=crop&w=1600&q=85',
      narrative: 'Submerged five meters beneath an alpine meadow, this thermal sanctuary uses 3,000 layers of local quartzite stone to construct a cave-like bathing realm illuminated solely by narrow perimeter light shafts.',
      specs: [
        ['Gross Volume', '2,800 m³ cavernous bath volume'],
        ['Stone Source', 'Local Valser Quartzite Quarried On-Site'],
        ['Thermal Balance', 'Heat recapture from sub-glacial springs'],
        ['Recognition', 'European Hospitality Architecture Gold Medal']
      ],
      commentary: '“The thermal pools evoke primordial peace. A cathedral of warm water and mountain stone.”'
    },
    beforeAfter: {
      folio: 'PROJECT 04',
      title: 'Coastal Bluff Metamorphosis',
      subTitle: 'Site Metamorphosis Study',
      tag: 'LANDSCAPE RECLAMATION // 2024',
      location: 'Cap de Formentor, Mallorca, Spain',
      coords: '39.9616° N, 3.2144° E',
      beforeImg: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1600&q=80',
      afterImg: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=1600&q=85',
      beforeLabel: 'WILD INACCESSIBLE CLIFF',
      afterLabel: 'COMPLETED RESORT SANCTUARY',
      narrative: 'The initial site consisted of an unstable, wind-scoured limestone headland with zero infrastructure. Through hand-hewn terracing and soil stabilization with endemic Aleppo pines, 6 Contour created a zero-runoff hospitality sanctuary without blasting the underlying geological crust.',
      specs: [
        ['Pre-Existing State', 'Barren wind-swept limestone ridge'],
        ['Excavation Philosophy', 'Zero rock export; 100% stone re-used on-site'],
        ['Ecological Footprint', 'Self-sufficient desalination + solar skin'],
        ['Flora Restored', '4,200 native coastal shrubs & wild olive trees']
      ],
      commentary: '“A lesson in how luxury destinations can actively heal damaged coastlines.”'
    },
    colophon: {
      isbn: 'ISBN: 978-3-982410-01-1',
      edition: 'RESORT FOLIO EDITION • 250 NUMBERED COPIES'
    }
  },

  farmhouse: {
    key: 'farmhouse',
    vol: 'VOL. II',
    title: 'FARMHOUSE COLLECTION',
    category: 'Agrarian Estates & Countryside Retreats',
    description: 'Modern farmhouses, countryside retreats, agricultural estates, outdoor living spaces, gardens, private pools and nature-inspired architecture.',
    coverClass: 'cover-farmhouse',
    coverTag: 'VOL. II — CONTEMPORARY AGRARIAN',
    coverTitle: 'THE ARCHITECTURE<br />OF THE LAND',
    coverSub: 'FARMHOUSES & ESTATES 2018–2025',
    coverSeal: 'II',
    coverGlyph: `
      <svg viewBox="0 0 40 40" class="cover-glyph-svg" fill="none" stroke="currentColor">
        <rect x="6" y="6" width="28" height="28" stroke-width="1.2" stroke-dasharray="3,3" />
        <path d="M20 6 L20 34" stroke-width="1" />
        <path d="M6 20 L34 20" stroke-width="1" />
        <path d="M12 14 L20 8 L28 14 L28 32 L12 32 Z" stroke-width="1.6" />
      </svg>
    `,
    coverImg: 'https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=1200&q=85',
    prefaceFolio: 'PREFACE // 02',
    prefaceTitle: 'On the Vernacular Agrarian Continuum',
    prefaceDropcap: 'A',
    prefaceP1: 'Agricultural architecture has always been defined by honesty: a shelter must protect grain, livestock, and family from weather with whatever stone and timber the soil provides.',
    prefaceP2: 'In our Farmhouse Collection, we elevate these pragmatic origins into contemporary art. We combine thick stone thermal masses and soaring timber roof trusses with floor-to-ceiling glass breezeways and private courtyard gardens.',
    sketchCaption: 'FIG 2.1 — TRIPLE-TIER GABLE RATIO & PASSIVE CROSS-BREEZE MAPPING',
    sketchSvg: `
      <line x1="20" y1="90" x2="380" y2="90" stroke="#A58B67" stroke-width="1.5" />
      <polygon points="60,90 120,40 180,90" fill="none" stroke="#252A29" stroke-width="2" />
      <polygon points="180,90 250,25 320,90" fill="none" stroke="#252A29" stroke-width="2" />
      <line x1="120" y1="40" x2="250" y2="25" stroke="#A58B67" stroke-dasharray="3,3" />
    `,
    sigName: 'Lukas Lindemann',
    sigTitle: 'Agrarian Architecture Director, Zurich',
    toc: [
      { num: '01', name: 'The Podere Agrarian Estate', sub: 'Val d’Orcia, Tuscany • Reclaimed Limestone & Olive Pergola', page: 3, pageLabel: 'P. 04' },
      { num: '02', name: 'Nordic Timber Barn Sanctuary', sub: 'Telemark, Norway • Charred Pine & Glacial Glass', page: 5, pageLabel: 'P. 06' },
      { num: '03', name: 'Cotswold Meadow Homestead', sub: 'Gloucestershire, UK • Oolite Stone & Bio-Pond', page: 7, pageLabel: 'P. 08' },
      { num: '04', name: 'Stone Barn Metamorphosis (Before & After)', sub: 'Tuscany, Italy • 18th-Century Ruin to Passive Farmhouse', page: 9, pageLabel: 'P. 10' },
      { num: '05', name: 'Agrarian Register & Colophon', sub: 'Materials Origin & Timber Certification', page: 11, pageLabel: 'P. 12' }
    ],
    project1: {
      folio: 'PROJECT 01',
      title: 'The Podere Agrarian Estate',
      tag: 'MODERN FARMHOUSE // 2024',
      location: 'Val d’Orcia, Tuscany, Italy',
      coords: '43.0642° N, 11.6034° E',
      caption: 'PLATE 1.1 — CENTRAL COURTYARD PERGOLA AND RECLAIMED TRAVERTINE WELL',
      photoBy: 'Matteo Carassale Archive, 2024',
      img: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1600&q=85',
      narrative: 'Surrounded by ancient olive groves, this 780 m² modern Tuscan farmhouse is configured around an open-sky courtyard. The original dry-stacked limestone walls were carefully disassembled, seismically stabilized, and re-erected with concealed insulation and floor-level brass vents.',
      specs: [
        ['Estate Scale', '780 m² Main House + 240 m² Guest Annexe'],
        ['Masonry Work', '100% Salvaged Tuscan Alberese Stone'],
        ['Outdoor Living', 'Vine-shaded dining pergola & natural plunge pool'],
        ['Energy Footprint', 'Net Positive: Ground source geothermal + olive pellet burner']
      ],
      quote: '“The scent of warm lavender and dry stone enters every room through continuous sliding thresholds.”',
      quoteAuthor: '— Agrarian Estate Patron, Florence'
    },
    project2: {
      folio: 'PROJECT 02',
      title: 'Nordic Timber Barn Sanctuary',
      tag: 'COUNTRYSIDE RETREAT // 2023',
      location: 'Telemark, Norway',
      coords: '59.4140° N, 8.4870° E',
      caption: 'PLATE 2.1 — 9-METER DOUBLE-HEIGHT TIMBER TRUSS LIVING ROOM',
      photoBy: 'Einar Aslaksen, 2023',
      img: 'https://images.unsplash.com/photo-1518780664697-55e3ad937233?auto=format&fit=crop&w=1600&q=85',
      narrative: 'Echoing the massive proportions of historic Norwegian agricultural barns, this residence features exposed glulam spruce trusses and dark zinc claddings. A dramatic glass gable frames panoramic views across a wildflower meadow toward the fjords.',
      specs: [
        ['Internal Volume', '1,420 m³ cathedral barn volume'],
        ['Wood Typology', 'Sustainably Felled Scandinavian Pine & Spruce'],
        ['Heating Strategy', 'Soapstone thermal mass stove + radiant floor'],
        ['Outdoor Facilities', 'Wood-fired cedar sauna & cold plunge pool']
      ],
      pills: ['SUSTAINABLE FORESTRY', 'NORWEGIAN RURAL PRIZE 2023']
    },
    project3: {
      folio: 'PROJECT 03',
      title: 'Cotswold Meadow Homestead',
      tag: 'PASTORAL RESIDENCE // 2022',
      location: 'Gloucestershire, England',
      coords: '51.8330° N, 1.8433° W',
      caption: 'PLATE 3.1 — NATURAL SWIMMING POND AND CRITTALL GLASS BREEZEWAY',
      photoBy: 'Jack Hobhouse, 2022',
      img: 'https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=1600&q=85',
      narrative: 'A contemporary reinterpretation of the traditional English farmstead. Three low-slung stone wings shelter an edible walled kitchen garden and an unchlorinated bio-swimming pond filtered by reed beds.',
      specs: [
        ['Site Area', '4.5 Acres of restored native wildflower meadow'],
        ['Stone Material', 'Hand-dressed Cotswold Oolitic Limestone'],
        ['Water Ecology', 'Closed-loop rainwater harvesting + reed filtration'],
        ['Accolade', 'RIBA National Countryside Award']
      ],
      commentary: '“A breathtaking blend of English pastoral tradition and fearless modern architectural precision.”'
    },
    beforeAfter: {
      folio: 'PROJECT 04',
      title: 'Stone Barn Metamorphosis',
      subTitle: 'Agrarian Ruin Transformation',
      tag: 'ADAPTIVE REUSE // 2024',
      location: 'Val d’Orcia, Tuscany, Italy',
      coords: '43.0642° N, 11.6034° E',
      beforeImg: 'https://images.unsplash.com/photo-1513836279014-a89f7a76ae86?auto=format&fit=crop&w=1600&q=80',
      afterImg: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1600&q=85',
      beforeLabel: 'COLLAPSED STONE BARN (1840)',
      afterLabel: 'CONTEMPORARY AGRARIAN VILLA',
      narrative: 'Abandoned for over six decades, the original agricultural threshing barn had lost its roof and southern corner. 6 Contour salvaged every stone, inserting a self-supporting timber-and-glass pavilion inside the historic masonry footprint.',
      specs: [
        ['Original State', 'Roofless crumbling cattle shelter'],
        ['Reclaimed Masonry', '180 metric tons of local fieldstone repurposed'],
        ['Thermal Upgrade', 'From uninsulated ruin to Passivhaus standard'],
        ['Landscape Repair', 'Re-planted with 80 olive saplings and wild thyme']
      ],
      commentary: '“Preserving the agrarian soul while delivering a masterwork of 21st-century comfort.”'
    },
    colophon: {
      isbn: 'ISBN: 978-3-982410-02-8',
      edition: 'FARMHOUSE FOLIO EDITION • 250 NUMBERED COPIES'
    }
  },

  estate: {
    key: 'estate',
    vol: 'VOL. III',
    title: 'ESTATE HOUSE COLLECTION',
    category: 'Monumental Residences & Demesnes',
    description: 'Luxury estate properties, grand residences, premium villas, large landscaped properties, elegant facades and sophisticated interiors.',
    coverClass: 'cover-estate',
    coverTag: 'VOL. III — MONUMENTAL RESIDENCES',
    coverTitle: 'THE ARCHITECTURE<br />OF STATURE',
    coverSub: 'GRAND DEMESNES 2018–2025',
    coverSeal: 'III',
    coverGlyph: `
      <svg viewBox="0 0 40 40" class="cover-glyph-svg" fill="none" stroke="currentColor">
        <circle cx="20" cy="20" r="18" stroke-width="1.2" />
        <line x1="12" y1="10" x2="12" y2="30" stroke-width="1.8" />
        <line x1="17" y1="10" x2="17" y2="30" stroke-width="1.8" />
        <line x1="23" y1="10" x2="23" y2="30" stroke-width="1.8" />
        <line x1="28" y1="10" x2="28" y2="30" stroke-width="1.8" />
        <line x1="8" y1="10" x2="32" y2="10" stroke-width="2" />
        <line x1="8" y1="30" x2="32" y2="30" stroke-width="2" />
      </svg>
    `,
    coverImg: 'https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&w=1200&q=85',
    prefaceFolio: 'PREFACE // 02',
    prefaceTitle: 'On Proportion & Classical Gravity in Modernity',
    prefaceDropcap: 'G',
    prefaceP1: 'Grandeur in architecture is not achieved by superficial ornamentation or excessive square meters. It is discovered in the mathematical rigor of proportion, the rhythmic cadence of colonnades, and the serene progression from monumental gates to private sanctuaries.',
    prefaceP2: 'Our Estate House Collection creates contemporary landmarks designed to stand for over two centuries: symmetrical stone facades, formal water mirrors, double-height libraries, and extensive landscaped demesnes.',
    sketchCaption: 'FIG 3.1 — AXONOMETRIC COLONNADE CADENCE & COUR D’HONNEUR RATIO',
    sketchSvg: `
      <line x1="20" y1="90" x2="380" y2="90" stroke="#A58B67" stroke-width="1.5" />
      <rect x="60" y="30" width="280" height="60" fill="none" stroke="#252A29" stroke-width="2" />
      <line x1="120" y1="30" x2="120" y2="90" stroke="#A58B67" stroke-width="1.5" />
      <line x1="160" y1="30" x2="160" y2="90" stroke="#A58B67" stroke-width="1.5" />
      <line x1="240" y1="30" x2="240" y2="90" stroke="#A58B67" stroke-width="1.5" />
      <line x1="280" y1="30" x2="280" y2="90" stroke="#A58B67" stroke-width="1.5" />
    `,
    sigName: 'Christian von Stauffen',
    sigTitle: 'Estate Masterplanning Director, Vienna',
    toc: [
      { num: '01', name: 'The Engadin Alpine Demesne', sub: 'St. Moritz, Switzerland • Granite Colonnade & Private Spa', page: 3, pageLabel: 'P. 04' },
      { num: '02', name: 'Le Manoir Contemporain', sub: 'Bordeaux, France • Symmetrical Limestone & Water Mirrors', page: 5, pageLabel: 'P. 06' },
      { num: '03', name: 'The Hudson River Monolith', sub: 'Upstate New York, USA • Board-Formed Concrete Colonnade', page: 7, pageLabel: 'P. 08' },
      { num: '04', name: '14-Acre Parkland Metamorphosis (Before & After)', sub: 'Bordeaux, France • Raw Pasture to Classical Estate', page: 9, pageLabel: 'P. 10' },
      { num: '05', name: 'Estate Register & Archive', sub: 'Engineering Specifications & Archival Drawings', page: 11, pageLabel: 'P. 12' }
    ],
    project1: {
      folio: 'PROJECT 01',
      title: 'The Engadin Alpine Demesne',
      tag: 'GRAND PRIVATE RESIDENCE // 2024',
      location: 'Suvretta Hill, St. Moritz, Switzerland',
      coords: '46.4908° N, 9.8355° E',
      caption: 'PLATE 1.1 — MONOLITHIC GRANITE COLONNADE AND HEATED MOTOR COURTYARD',
      photoBy: 'Bruno Ehrs Architectural Archives, 2024',
      img: 'https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&w=1600&q=85',
      narrative: 'Situated atop a private 20-acre alpine knoll, this 1,850 m² residence reinterprets classical Swiss grand hotels into a private family estate. A monumental colonnade in flamed San Bernardino granite shields floor-to-ceiling thermal glazing.',
      specs: [
        ['Built Footprint', '1,850 m² across 3 levels'],
        ['Landscaped Park', '20 Acres of private alpine forest and ponds'],
        ['Structural Frame', 'Cast in-situ waterproof concrete + solid granite piers'],
        ['Wellness Suite', '25-meter indoor lap pool & subterranean spa']
      ],
      quote: '“A residence of immense dignity. It feels as ancient and permanent as the surrounding snow peaks.”',
      quoteAuthor: '— International Architectural Review'
    },
    project2: {
      folio: 'PROJECT 02',
      title: 'Le Manoir Contemporain',
      tag: 'FRENCH DEMESNE // 2023',
      location: 'Pomerol, Bordeaux, France',
      coords: '44.9317° N, 0.2017° W',
      caption: 'PLATE 2.1 — SYMMETRICAL LIMESTONE FACADE AND BASIN REFLECTION POOL',
      photoBy: 'Julien Lanoo, 2023',
      img: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=1600&q=85',
      narrative: 'Nestled in premier Grand Cru vineyards, this estate is structured around a central axis of water mirrors. Honed French Charentes limestone facades reflect golden afternoon sunlight across formal parterre gardens.',
      specs: [
        ['Gross Area', '1,420 m² main manor + 400 m² wine chai'],
        ['Stone Provenance', 'Hand-selected Charentes Limestone'],
        ['Subterranean Vault', 'Temperature-stable 12,000-bottle private cellar'],
        ['Landscape Design', 'Symmetrical French allée of pleached lindens']
      ],
      pills: ['FRENCH HERITAGE COMPLIANT', 'PRIX DE L’ARCHITECTURE 2023']
    },
    project3: {
      folio: 'PROJECT 03',
      title: 'The Hudson River Monolith',
      tag: 'CONTEMPORARY ESTATE // 2022',
      location: 'Rhinebeck, Hudson Valley, New York',
      coords: '41.9268° N, 73.9126° W',
      caption: 'PLATE 3.1 — DOUBLE-HEIGHT GALLERY AND FOREST CANTILEVER WING',
      photoBy: 'Nic Lehoux Architectural Photography, 2022',
      img: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1600&q=85',
      narrative: 'Overlooking the Hudson River through a protected oak forest, this 1,200 m² estate balances brutalist concrete strength with luminous gallery walls designed for a museum-grade modern art collection.',
      specs: [
        ['Gallery Ceilings', '6.8-meter double-height exhibit volume'],
        ['Acoustic Isolation', 'Triple-gasketed architectural bronze doors'],
        ['Energy Rating', 'LEED Platinum Certified Estate'],
        ['Site Acreage', '35 Acres including private river frontage']
      ],
      commentary: '“A monumental achievement in residential scale. Grand without arrogance; precise without coldness.”'
    },
    beforeAfter: {
      folio: 'PROJECT 04',
      title: '14-Acre Parkland Metamorphosis',
      subTitle: 'Estate Topography Transformation',
      tag: 'MASTERPLANNING // 2024',
      location: 'Pomerol, Bordeaux, France',
      coords: '44.9317° N, 0.2017° W',
      beforeImg: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=1600&q=80',
      afterImg: 'https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&w=1600&q=85',
      beforeLabel: 'RAW GRADED ACREAGE',
      afterLabel: 'COMPLETED MONUMENTAL ESTATE',
      narrative: 'The project started with 14 acres of featureless former grazing land. 6 Contour engineered a complex hydrological system of reflecting canals, terraced formal gardens, and an iconic symmetrical limestone residence.',
      specs: [
        ['Earth Movement', '24,000 m³ engineered earth sculpting'],
        ['Hydrology', 'Closed-circuit 1,800 m² formal water mirror'],
        ['Planting Program', '120 mature cypress trees & 4,000 boxwood shrubs'],
        ['Timeline', '36 Months from raw pasture to completed demesne']
      ],
      commentary: '“A total work of art where landscape and monumental architecture are inseparable.”'
    },
    colophon: {
      isbn: 'ISBN: 978-3-982410-03-5',
      edition: 'ESTATE FOLIO EDITION • 200 NUMBERED COPIES'
    }
  },

  local: {
    key: 'local',
    vol: 'VOL. IV',
    title: 'LOCAL HOUSE COLLECTION',
    category: 'Regional Architecture & Vernacular Houses',
    description: 'Traditional and contemporary residential houses, regional architecture, independent homes, compact villas and culturally inspired designs.',
    coverClass: 'cover-local',
    coverTag: 'VOL. IV — VERNACULAR & REGIONAL',
    coverTitle: 'THE ARCHITECTURE<br />OF PLACE',
    coverSub: 'CULTURAL DWELLINGS 2019–2025',
    coverSeal: 'IV',
    coverGlyph: `
      <svg viewBox="0 0 40 40" class="cover-glyph-svg" fill="none" stroke="currentColor">
        <polygon points="20,8 34,22 28,22 28,32 12,32 12,22 6,22" stroke-width="1.8" />
        <rect x="17" y="22" width="6" height="10" stroke-width="1.2" />
        <circle cx="20" cy="16" r="2" fill="currentColor" />
      </svg>
    `,
    coverImg: 'https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=1200&q=85',
    prefaceFolio: 'PREFACE // 02',
    prefaceTitle: 'On Cultural Memory & Micro-Topography',
    prefaceDropcap: 'L',
    prefaceP1: 'Architecture loses its soul when an identical glass box can be placed in London, Kyoto, or Mexico City without caring for local climate or craftsmanship.',
    prefaceP2: 'The Local House Collection champions regional specificity: compact urban infill houses that revere century-old streetscapes, rammed-earth residences celebrating indigenous terracotta crafts, and culturally rooted independent dwellings.',
    sketchCaption: 'FIG 4.1 — INNER MOSS COURTYARD VENTILATION & SHADOW APERTURE',
    sketchSvg: `
      <rect x="40" y="30" width="120" height="60" fill="none" stroke="#252A29" stroke-width="1.5" />
      <rect x="240" y="30" width="120" height="60" fill="none" stroke="#252A29" stroke-width="1.5" />
      <line x1="160" y1="90" x2="240" y2="90" stroke="#A58B67" stroke-width="2" />
      <circle cx="200" cy="70" r="12" fill="none" stroke="#A58B67" stroke-width="1.2" />
    `,
    sigName: 'Kenzo Takahashi',
    sigTitle: 'Vernacular Research Lead, Kyoto',
    toc: [
      { num: '01', name: 'The Machiya Infill House', sub: 'Kyoto, Japan • 85m² Footprint & Micro-Lightwell', page: 3, pageLabel: 'P. 04' },
      { num: '02', name: 'Casa de Tierra', sub: 'Oaxaca, Mexico • Stabilized Rammed Earth & Shaded Patio', page: 5, pageLabel: 'P. 06' },
      { num: '03', name: 'The Kensington Mews House', sub: 'London, UK • Heritage Brick & Minimalist Steel Core', page: 7, pageLabel: 'P. 08' },
      { num: '04', name: 'Urban Infill Metamorphosis (Before & After)', sub: 'Kyoto, Japan • Constrained Alley to Radiant Habitat', page: 9, pageLabel: 'P. 10' },
      { num: '05', name: 'Local Typologies Register', sub: 'Cultural Craftsmanship Documentation', page: 11, pageLabel: 'P. 12' }
    ],
    project1: {
      folio: 'PROJECT 01',
      title: 'The Machiya Infill House',
      tag: 'COMPACT RESIDENCE // 2024',
      location: 'Kamigyo-ku, Kyoto, Japan',
      coords: '35.0282° N, 135.7531° E',
      caption: 'PLATE 1.1 — VERTICAL CEDAR LATTICE SCREEN AND GRAVEL POCKET COURTYARD',
      photoBy: 'Koji Fujii / Nacása & Partners, 2024',
      img: 'https://images.unsplash.com/photo-1493809842364-78817add7ffb?auto=format&fit=crop&w=1600&q=85',
      narrative: 'Constructed on a narrow 4.2-meter-wide urban infill lot in central Kyoto, this 85 m² residence interprets the historic machiya townhouse for the 21st century. A central vertical lightwell draws natural breeze and filtered daylight down through three floors.',
      specs: [
        ['Lot Dimensions', '4.2m width × 16m depth urban parcel'],
        ['Gross Floor Area', '145 m² across 3 staggered levels'],
        ['Screening System', 'Hand-planed Japanese Hinoki Koushi Lattice'],
        ['Interior Finish', 'Washi paper wall lining & solid paulownia floors']
      ],
      quote: '“In the middle of Kyoto’s densest alley, you hear only the sound of water dripping onto moss in the inner lightwell.”',
      quoteAuthor: '— Homeowner, Kyoto'
    },
    project2: {
      folio: 'PROJECT 02',
      title: 'Casa de Tierra',
      tag: 'REGIONAL ARCHITECTURE // 2023',
      location: 'Oaxaca Valley, Mexico',
      coords: '17.0732° N, 96.7266° W',
      caption: 'PLATE 2.1 — 40CM RAMMED-EARTH WALLS AND OAXACAN TERRACOTTA TILES',
      photoBy: 'Rafael Gamo, 2023',
      img: 'https://images.unsplash.com/photo-1600566753376-12c8ab7fb75b?auto=format&fit=crop&w=1600&q=85',
      narrative: 'Built using earth excavated directly from the building foundation, Casa de Tierra keeps indoor temperatures naturally 8°C cooler than the high-altitude Mexican sun outside. Traditional handcrafted terracotta roof tiles protect the monolithic clay walls.',
      specs: [
        ['Wall Composition', 'Local clay, river sand, and 5% lime stabilizer'],
        ['Thermal Horizon', 'High thermal lag: zero air conditioning required'],
        ['Shaded Living', 'Central covered portico with native mezquite beams'],
        ['Craftsmanship', '100% built by local master earthen craftsmen']
      ],
      pills: ['INDIGENOUS MATERIAL HONESTY', 'IBERO-AMERICAN BIENNIAL PRIZE']
    },
    project3: {
      folio: 'PROJECT 03',
      title: 'The Kensington Mews House',
      tag: 'ADAPTIVE RESIDENTIAL // 2022',
      location: 'Kensington, London, UK',
      coords: '51.5014° N, 0.1919° W',
      caption: 'PLATE 3.1 — RECLAIMED LONDON STOCK BRICK AND BLACKENED STEEL LIGHT CORE',
      photoBy: 'Edmund Sumner, 2022',
      img: 'https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=1600&q=85',
      narrative: 'A transformation of a former Victorian carriage house. Behind the historic brick facade, 6 Contour carved a three-story central light atrium with a floating sculptural steel staircase.',
      specs: [
        ['Historic Context', 'Victorian Mews Conservation Zone'],
        ['Structural System', 'Slender laser-cut blackened steel framework'],
        ['Daylight Gain', 'Triple-glazed motorized skylight over atrium'],
        ['Area', '210 m² compact city residence']
      ],
      commentary: '“A masterclass in transforming historic European urban constraints into light-flooded architectural luxury.”'
    },
    beforeAfter: {
      folio: 'PROJECT 04',
      title: 'Urban Infill Metamorphosis',
      subTitle: 'Constrained Lot Transformation',
      tag: 'CITY INFILL // 2024',
      location: 'Kamigyo-ku, Kyoto, Japan',
      coords: '35.0282° N, 135.7531° E',
      beforeImg: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=1600&q=80',
      afterImg: 'https://images.unsplash.com/photo-1600566753376-12c8ab7fb75b?auto=format&fit=crop&w=1600&q=85',
      beforeLabel: 'TIGHT 4M EXCAVATION PIT',
      afterLabel: 'COMPLETED RADIANT COURTYARD HOME',
      narrative: 'Flanked by neighbor walls mere inches away, the construction required micro-piling and zero-crane assembly. The completed house feels three times larger than its footprint due to continuous sightlines through vertical voids.',
      specs: [
        ['Site Access', 'Single 2.2-meter narrow pedestrian alley'],
        ['Foundation Tech', 'Manual micro-bored helical steel screw piles'],
        ['Usable Area Gain', '+38% volume through mezzanine split levels'],
        ['Daylight Factor', '18% above Japanese national residential average']
      ],
      commentary: '“Proving that grandeur in residential architecture is a question of spatial intelligence, not acreage.”'
    },
    colophon: {
      isbn: 'ISBN: 978-3-982410-04-2',
      edition: 'LOCAL HOUSE FOLIO EDITION • 250 NUMBERED COPIES'
    }
  },

  villa: {
    key: 'villa',
    vol: 'VOL. V',
    title: 'LUXURY VILLA COLLECTION',
    category: 'Sculptural Residences & Cantilevers',
    description: 'Premium villas, contemporary residences, designer interiors, private gardens, terraces and exclusive architectural projects.',
    coverClass: 'cover-villa',
    coverTag: 'VOL. V — SCULPTURAL RESIDENCES',
    coverTitle: 'THE ARCHITECTURE<br />OF DEFIANCE',
    coverSub: 'CANTILEVERED HAVENS 2018–2025',
    coverSeal: 'V',
    coverGlyph: `
      <svg viewBox="0 0 40 40" class="cover-glyph-svg" fill="none" stroke="currentColor">
        <polygon points="8,32 32,16 32,32" stroke-width="1.8" />
        <line x1="8" y1="32" x2="32" y2="8" stroke-width="1.5" stroke-dasharray="3,3" />
        <circle cx="32" cy="16" r="3" fill="currentColor" />
      </svg>
    `,
    coverImg: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=1200&q=85',
    prefaceFolio: 'PREFACE // 02',
    prefaceTitle: 'On Structural Defiance & Luminous Voids',
    prefaceDropcap: 'V',
    prefaceP1: 'A luxury villa is the ultimate testing ground for pure architectural experimentation. Free from commercial or institutional bureaucracy, it allows the architect and client to pursue structural daring to its logical conclusion.',
    prefaceP2: 'The works in this collection explore post-tensioned concrete cantilevers floating over cliffs, seamless floor-to-ceiling glass expanses that erase indoor-outdoor barriers, and private sculpture gardens illuminated by seasonal light.',
    sketchCaption: 'FIG 5.1 — 18-METER COUNTERWEIGHT CANTILEVER STRESS STUDY',
    sketchSvg: `
      <line x1="20" y1="90" x2="380" y2="90" stroke="#A58B67" stroke-width="1.5" />
      <rect x="60" y="50" width="80" height="40" fill="#252A29" />
      <line x1="140" y1="50" x2="340" y2="40" stroke="#252A29" stroke-width="3" />
      <line x1="140" y1="50" x2="280" y2="90" stroke="#A58B67" stroke-dasharray="4,4" />
    `,
    sigName: 'Marc Althaus',
    sigTitle: 'Principal Atelier Director, Berlin',
    toc: [
      { num: '01', name: 'The Brise-Soleil Villa', sub: 'Kyoto, Japan • Monolithic Cedar & Basalt Courtyard', page: 3, pageLabel: 'P. 04' },
      { num: '02', name: 'Villa Mirador Cantilever', sub: 'Cap d’Antibes, France • 22m Sea-Facing Concrete Wing', page: 5, pageLabel: 'P. 06' },
      { num: '03', name: 'The Alpine Monolith', sub: 'Vals, Switzerland • Split Quartzite & Glacial Spa', page: 7, pageLabel: 'P. 08' },
      { num: '04', name: 'Bedrock Cliff Metamorphosis (Before & After)', sub: 'Vals, Switzerland • Vertical Rift to Suspended Haven', page: 9, pageLabel: 'P. 10' },
      { num: '05', name: 'Villa Registry & Colophon', sub: 'Structural Engineering & Engineering Patents', page: 11, pageLabel: 'P. 12' }
    ],
    project1: {
      folio: 'PROJECT 01',
      title: 'The Brise-Soleil Villa',
      tag: 'RESIDENTIAL VILLA // 2024',
      location: 'Higashiyama District, Kyoto, Japan',
      coords: '35.0116° N, 135.7681° E',
      caption: 'PLATE 1.1 — NORTH ELEVATION AND COURTYARD REFLECTING WATER MIRROR',
      photoBy: 'Sugimoto Archive Studio, 2024',
      img: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1600&q=85',
      narrative: 'Embedded into the hillside cedar grove of Eastern Kyoto, the villa is an investigation into the threshold between private sanctuary and raw topography. Post-tensioned white concrete fins modulate the southern sun, casting shifting linear shadows across honed basalt floors.',
      specs: [
        ['Gross Footprint', '640 m² (6,888 sq ft)'],
        ['Structural Skeleton', 'In-situ Board-formed White Concrete'],
        ['Joinery & Screens', 'Yakisugi Japanese Cedar, Solid Aged Brass'],
        ['Thermal Efficiency', 'Passive Solar Envelope, Ground-source Well']
      ],
      quote: '“The residence changes every hour. In the morning mist, the house appears to dissolve into stone and water.”',
      quoteAuthor: '— Private Client, Kyoto'
    },
    project2: {
      folio: 'PROJECT 02',
      title: 'Villa Mirador Cantilever',
      tag: 'CLIFFTOP RESIDENCE // 2023',
      location: 'Cap d’Antibes, Côte d’Azur, France',
      coords: '43.5528° N, 7.1278° E',
      caption: 'PLATE 2.1 — 22-METER CANTILEVERED LIVING WING EXTENDING OVER THE MEDITERRANEAN',
      photoBy: 'Cyrille Weiner Architectural Photography, 2023',
      img: 'https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=1600&q=85',
      narrative: 'Projecting 22 meters unsupported over the sea cliffs of Cap d’Antibes, Villa Mirador uses a post-tensioned bridge girder structural system. Full-height sliding low-iron glass panels allow the entire main salon to become an open-air promontory.',
      specs: [
        ['Cantilever Span', '22.4-meter unsupported post-tensioned wing'],
        ['Glazing Units', 'Motorized 6m × 3.2m low-iron acoustic panels'],
        ['Terrace Decking', 'Hand-sawn Burmese teak with brass deck hardware'],
        ['Private Amenities', 'Suspended glass-bottom plunge pool & rooftop garden']
      ],
      pills: ['STRUCTURAL INNOVATION GOLD', 'MEDITERRANEAN VILLA PRIZE']
    },
    project3: {
      folio: 'PROJECT 03',
      title: 'The Alpine Monolith',
      tag: 'MOUNTAIN VILLA // 2023',
      location: 'Vals, Graubünden, Switzerland',
      coords: '46.6186° N, 9.1804° E',
      caption: 'PLATE 3.1 — 1,200 METRIC TONS OF LOCAL SPLIT VALSER QUARTZITE',
      photoBy: 'Hélène Binet Studio, 2023',
      img: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=1600&q=85',
      narrative: 'Perched on an alpine precipice, this mountain refuge bridges across a glacial crevasse, anchoring deep into bedrock with post-tension cables. Thermal mass stone stores daytime solar energy to warm the interior through alpine winters.',
      specs: [
        ['Gross Footprint', '820 m² (8,826 sq ft)'],
        ['Primary Mass', 'Split Valser Quartzite & Thermal Glass'],
        ['Cantilever Span', '18.4 Meters Unsupported Ridge'],
        ['Energy Autonomy', '100% Geothermal + Glacial Meltwater Turbine']
      ],
      commentary: '“A house of absolute architectural courage. Defiant against gravity and harsh mountain weather.”'
    },
    beforeAfter: {
      folio: 'PROJECT 04',
      title: 'Bedrock Cliff Metamorphosis',
      subTitle: 'Bedrock Anchoring Study',
      tag: 'EXTREME TOPOGRAPHY // 2024',
      location: 'Vals, Graubünden, Switzerland',
      coords: '46.6186° N, 9.1804° E',
      beforeImg: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=1600&q=80',
      afterImg: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=1600&q=85',
      beforeLabel: 'UNSTABLE 60° BEDROCK RIFT',
      afterLabel: 'COMPLETED SUSPENDED MONOLITH',
      narrative: 'Considered unbuildable by local authorities, the vertical stone crevasse was stabilized using 14 geotechnical prestressed tie-backs drilled 25 meters into solid granite before suspending the living volumes.',
      specs: [
        ['Pre-Construction', 'Inaccessible 60-degree shear granite face'],
        ['Geotechnical Tie-Backs', '14 × 25-meter prestressed bedrock anchors'],
        ['Structural Deflection', 'Less than 4mm under maximum alpine snow load'],
        ['Carbon Offset', '100% on-site stone re-use + hydro power']
      ],
      commentary: '“Transforming an impossible precipice into an iconic masterpiece of contemporary dwelling.”'
    },
    colophon: {
      isbn: 'ISBN: 978-3-982410-05-9',
      edition: 'VILLA FOLIO EDITION • 300 NUMBERED COPIES'
    }
  }
};
