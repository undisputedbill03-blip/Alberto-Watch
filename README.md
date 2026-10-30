# Alberto Watch Company — Master Horological Platform

An elevated, authentic digital flagship and concierge platform for **Alberto Watch Company** — independent master watchmakers established on Fifth Avenue, New York in 1987. Built with React 19, Vite, and Lucide React, styled in an obsidian noir and antique champagne gold palette with quiet horological luxury.

---

## Highlights & Humanized Architecture

- **Atelier Announcement Bar**: Subtle top notice with direct Manhattan concierge extension (`+1 212-555-0194`), salon locations, and private consultation request.
- **Authentic Horological Identity**: Real reference nomenclature (e.g. `Ref. 126331-JUB`, `Ref. AQ4020-54Y`), manufacture calibres (Rolex 3235, Citizen A060, Bulova 262 kHz), and condition classifications.
- **Interactive Private Shortlist Drawer**: Clients can save and curate references with persistent `localStorage` synchronization and calculate their collection valuation in real time.
- **Private Salon Consultation Modal**: Direct booking for discreet viewings in New York (Flatiron), Beverly Hills (Wilshire), or Chicago (Magnificent Mile).
- **The Atelier Bench (Conservation & Restoration)**: Micro-mechanical benchcraft pillars (Ultrasonic solvent cleansing, Witschi acoustic chronoscope regulation, lapidary chamfer conservation, hydrostatic pressure testing).
- **The Acquisition & Reference Register**: Clean, searchable valuation register with real-time filtering, reference codes, condition grades, and examination dossiers.
- **Concierge Desk**: Dedicated intake for private acquisition requests, restoration quotes, and GIA-certified estate appraisals.
- **Zero-Warning Codebase**: Passes Oxlint AST verification with 0 warnings and 0 errors.

---

## Quick Start

You can run commands from either the root `Moses` directory or inside `alberto-watch-company`:

```powershell
# Development server (http://localhost:5173/)
npm run dev

# Production build (outputs to dist/)
npm run build

# Code quality check (Oxlint)
npm run lint
```

---

## Project Structure

```text
alberto-watch-company/
├── public/                       # High-resolution horological assets
├── src/
│   ├── components/
│   │   ├── About.jsx             # Founder's story, Alberto Reyes letter & AWCI credentials
│   │   ├── AppointmentModal.jsx  # Interactive salon booking dialog
│   │   ├── Contact.jsx           # Concierge desk, social channels & inquiry intake
│   │   ├── Footer.jsx            # Multi-tier sitemap, salon directory & legal charter
│   │   ├── Gallery.jsx           # Horological archive showcase & fullscreen lightbox
│   │   ├── Hero.jsx              # Editorial headline, horological pillars & primary actions
│   │   ├── Navbar.jsx            # Top announcement bar, navigation & saved reference counter
│   │   ├── PriceList.jsx         # Reference register & acquisition index
│   │   ├── Products.jsx          # Curated vault, search, category pills & specification modal
│   │   ├── SocialIcons.jsx       # Custom SVG vector icons for brand channels
│   │   ├── StoreLocator.jsx      # New York, Beverly Hills & Chicago salon showcases
│   │   ├── Support.jsx           # 4 Client guarantees & collector FAQ accordion
│   │   ├── Technology.jsx        # The Atelier: micro-mechanics & guild certifications
│   │   └── WishlistDrawer.jsx    # Slide-out saved references portfolio
│   ├── data/
│   │   └── watchData.js          # Authentic watch references, calibres, FAQs & salon directories
│   ├── App.jsx                   # Layout coordinator, state synchronization & intersection observers
│   └── index.css                 # Master obsidian & champagne gold luxury design system
└── package.json
```

---

## License

Proprietary to **Alberto Watch Company**. All rights reserved.
