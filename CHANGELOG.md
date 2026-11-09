# Changelog — Ocean D'souza Portfolio

All notable product, design, and platform updates across the versions of **Ocean D'souza's Platform Product Manager Portfolio** (`https://ocean-dsouza-portfolio.vercel.app`).

---

## [v1.4.0] — 2026-11-09 · Search Engine Discoverability, Web Analytics & Production Release

### New Features
- **Search Engine Discoverability (`sitemap.xml`, `robots.txt` & JSON-LD Schema):** Added automated XML sitemap generation (`app/sitemap.ts`), crawler directives (`app/robots.ts`), Web App Manifest (`app/manifest.ts`), canonical URLs, OpenGraph/Twitter social cards, and `Schema.org/Person` structured data so Google Search and Knowledge Graph index Ocean D'souza's profile, roles, and project case studies.
- **Vercel Web Analytics Integration:** Installed `@vercel/analytics` and mounted `<Analytics />` in the root layout (`app/layout.tsx`) to capture real-time visitor traffic and route transitions across `/`, `/projects`, and `/about`.
- **Custom Browser Tab Icon (`OD` Monogram):** Designed a high-contrast `OD` monogram + emerald platform node SVG favicon (`app/icon.svg` and `public/icon.svg`).

---

## [v1.3.0] — 2026-11-09 · Platform PM Positioning, Official Brand Icons, Mobile & Smooth Transitions

### New Features
- **Platform Product Manager Positioning:** Anchored the landing hero (`components/HeroSection.tsx`) and portfolio narrative around core platform product management, payment orchestration, loyalty engines, and AI-native internal systems.
- **Official Brand Logos Across Experience & Education:** Integrated authentic brand icons (`components/BrandLogo.tsx`) for **Barakat Fresh**, **IServ (Formcase GMBH)**, **GMG (Sun & Sand Sports / Nike)**, **University of Wollongong in Dubai (UOWD)**, **Scrum Alliance**, **Product School**, **IBM**, **Google**, **Microsoft Dynamics 365**, **AWS**, **SpotDraft**, and **Procol**.
- **Smooth Sliding Navbar & Route Transitions:** Mounted a persistent pill navigation bar in `app/layout.tsx` with a Framer Motion spring indicator (`layoutId="navbar-active-pill"`) and added smooth route transitions via `app/template.tsx`.
- **Working Light & Dark Theme Switch:** Bound theme CSS variables (`--bg-canvas`, `--bg-surface`, `--bg-elevated`, `--ink`) to the Navbar Sun/Moon switch with instant persistence.

### Improvements
- **Chronological Credentials Ledger:** Ordered all Education & Credentials strictly by date (`2026` down to `2019 – 2023`) and streamlined the list.
- **All-iPhone & Foldable iPhone Duo Compatibility:** Added `viewportFit: "cover"`, safe-area inset handling, responsive card stages, and mobile bottom-sheet case-study modals across compact iPhones (`320px–390px`), Pro Max (`430px–440px`), and dual-screen foldable viewports (`600px–840px`).

---

## [v1.2.0] — 2026-11-09 · Split Portrait Hero, Minimal Connect Card & Redesigned About Ledger

### New Features
- **Split Hero with Framed Portrait:** Added Ocean's studio desk portrait alongside the interactive `TileReveal` headline and streamlined the hero CTAs to direct `Contact` (`mailto:oceands06@gmail.com`) and `View My Work`.
- **Redesigned Experience, Education & "What I Do" Containers:** Rebuilt `/about` (`components/ArchiveAndCredentials.tsx`) with expandable brand-icon experience rows, a `Show more partnerships` drawer, and clean pill containers for *What I do*, *Skills & Platforms*, and *Languages*.
- **Minimal Two-Column "Let's Connect" Footer:** Redesigned `components/TopmateSection.tsx` into a distraction-free two-column card with direct Email, LinkedIn, and Topmate icon tiles.

---

## [v1.1.0] — 2026-11-06 · Multi-Page Architecture (`/`, `/projects`, `/about`) & React Bits Tile Reveal

### New Features
- **`@reactbits-starter/tile-reveal-tw` Headline Animation:** Created `components/react-bits/TileReveal.tsx` to reveal headlines with a staggered diagonal tile wave.
- **Curated 4 Selected Works on Home + Dedicated `/projects` Page:** Featured 2 flagship platform projects and 2 strategic enterprise partnerships on `/` with a dedicated `/projects` page housing all 10 case studies, category filters (*All*, *Projects*, *Partnerships*), and a **Grid / Carousel** view switcher.
- **Dedicated `/about` Page:** Moved credentials, first-person bio, experience, education, skills, and spoken languages to `/about`.

---

## [v1.0.0] — 2026-11-06 · Initial Next.js 14 & React Bits Portfolio Foundation

### New Features
- **Next.js 14 App Router + Tailwind CSS + Framer Motion Foundation:** Built the initial portfolio with 10 custom SVG project stage cards (`components/ProjectStageArt.tsx`), interactive `TiltedCard`, `Magnet`, and `ClickSpark` physics components, and interactive case-study deep-dive modals.
