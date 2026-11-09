import { BrandKey } from "@/components/BrandLogo";

export interface ProjectItem {
  id: string;
  section: "project" | "partnership";
  featuredOnHome: boolean;
  category: string;
  company: string;
  brandKey: BrandKey;
  partnerBrandKey?: BrandKey;
  period: string;
  title: string;
  caption: string;
  headlineMetric: string;
  stageType:
    | "node-graph"
    | "analytics-white"
    | "tag-pattern"
    | "emerald-brand"
    | "portrait-split"
    | "blue-phones"
    | "matrix-type"
    | "annotate-badge"
    | "orange-tablet"
    | "yellow-sheet";
  problem: string;
  execution: string[];
  outcomes: { value: string; label: string }[];
  stack: string[];
}

export const ALL_PROJECTS: ProjectItem[] = [
  /* --- 4 HOME SELECTED WORKS (2 Flagship Projects + 2 Flagship Partnerships) --- */
  {
    id: "barakat-discovery",
    section: "project",
    featuredOnHome: true,
    category: "D2C Web & App Platform",
    company: "Barakat Fresh",
    brandKey: "barakat",
    period: "Jun 2024 – Present",
    title: "BarakatFresh.ae Discovery, Search & PDP Revamp",
    caption:
      "Overhauled search, product listing, and product detail journeys across web and mobile app, lifting Add-to-Cart by ~24%.",
    headlineMetric: "+24% ATC Lift",
    stageType: "emerald-brand",
    problem:
      "High-intent grocery shoppers dropped off between search queries, category browsing (PLP), and product detail pages (PDP) before adding items to their basket.",
    execution: [
      "Analyzed user journeys across search, PLP, and PDP using Mixpanel and GA4 cohorts to pinpoint exact drop-off steps.",
      "Redesigned product cards, freshness badges, category filters, and search autocomplete across BarakatFresh.ae web and native apps.",
      "Directed a 5-person cross-functional squad (Developers, QA, UX/Design) from PRD definition and Figma wireframes through production release.",
    ],
    outcomes: [
      { value: "~24%", label: "Add-to-Cart (ATC) lift" },
      { value: "Web + App", label: "Unified D2C experience" },
      { value: "0 → 1", label: "Full-lifecycle squad delivery" },
    ],
    stack: [
      "D2C E-Commerce",
      "Mixpanel",
      "GA4",
      "Figma",
      "Search & Merchandising",
    ],
  },
  {
    id: "barakat-checkout",
    section: "project",
    featuredOnHome: true,
    category: "Fintech & Payments",
    company: "Barakat Fresh × Checkout.com",
    brandKey: "barakat",
    partnerBrandKey: "checkout",
    period: "Jun 2024 – Present",
    title: "Checkout.com, Wallets & BNPL Payment Overhaul",
    caption:
      "Redesigned the end-to-end payment flow with Apple Pay, Google Pay, and BNPL, lifting checkout conversion by +18%.",
    headlineMetric: "+18% Checkout",
    stageType: "analytics-white",
    problem:
      "Shoppers experienced multi-step payment friction and limited local payment options at checkout, causing drop-offs between basket review and order confirmation.",
    execution: [
      "Led end-to-end redesign of the web and app checkout funnel with a 5-person cross-functional squad (Developers, QA, UX/Design).",
      "Integrated Checkout.com alongside Apple Pay, Google Pay, and Buy Now Pay Later (BNPL) instalment methods.",
      "Simplified address, slot, and payment confirmation states into a single low-friction view.",
    ],
    outcomes: [
      { value: "+18%", label: "Checkout conversion lift" },
      { value: "1-Tap", label: "Apple Pay & Google Pay live" },
      { value: "5", label: "Squad members led end-to-end" },
    ],
    stack: [
      "Checkout.com",
      "Apple Pay",
      "Google Pay",
      "BNPL",
      "Mixpanel",
      "Agile Squad Lead",
    ],
  },
  {
    id: "spotdraft-clm",
    section: "partnership",
    featuredOnHome: true,
    category: "Strategic Partnership · LegalTech AI",
    company: "Barakat Fresh × SpotDraft",
    brandKey: "spotdraft",
    partnerBrandKey: "barakat",
    period: "Jun 2024 – Present",
    title: "SpotDraft AI-Native CLM for 500+ Supplier Agreements",
    caption:
      "Partnered with SpotDraft to launch a custom AI-Native CLM, cutting contract turnaround time to 48h and accelerating onboarding by 20%.",
    headlineMetric: "48h TAT · +20% Speed",
    stageType: "annotate-badge",
    problem:
      "Onboarding and renewing 500+ regional and international produce suppliers suffered from fragmented redlining, inconsistent compliance checks, and slow legal turnaround.",
    execution: [
      "Partnered with SpotDraft to architect a custom AI-Native Contract Lifecycle Management (CLM) system for 500+ supplier agreements.",
      "Established standardized evaluation criteria, automated clause verification, and compliance approval routing.",
      "Cut contract turnaround time (TAT) to 48 hours and accelerated supplier onboarding cycles by 20%.",
    ],
    outcomes: [
      { value: "48h", label: "Contract turnaround time (TAT)" },
      { value: "500+", label: "Supplier agreements governed" },
      { value: "+20%", label: "Faster supplier onboarding" },
    ],
    stack: [
      "SpotDraft AI CLM",
      "Workflow Automation",
      "Supplier Governance",
      "Compliance Frameworks",
    ],
  },
  {
    id: "grv-dynamics-365",
    section: "partnership",
    featuredOnHome: true,
    category: "Strategic Partnership · ERP & Document AI",
    company: "Barakat Fresh × Microsoft Dynamics 365",
    brandKey: "dynamics365",
    partnerBrandKey: "barakat",
    period: "Jun 2024 – Present",
    title: "GRV AI Invoice Processing in Microsoft Dynamics 365",
    caption:
      "Integrated an AI document extraction module with Dynamics 365 ERP, cutting manual effort by 85% across 10,000+ monthly documents.",
    headlineMetric: "-85% Manual Work",
    stageType: "orange-tablet",
    problem:
      "Finance and receiving teams manually keyed in over 10,000 goods-received vouchers (GRVs) and supplier invoices per month into Microsoft Dynamics 365 ERP.",
    execution: [
      "Managed end-to-end implementation of the GRV AI invoice processing module integrated directly with Microsoft Dynamics 365 ERP.",
      "Automated line-item extraction, PO matching, and exception flagging across 10,000+ monthly supplier documents.",
      "Reduced manual data entry effort by 85% and accelerated financial reconciliation.",
    ],
    outcomes: [
      { value: "85%", label: "Reduction in manual ERP entry" },
      { value: "10,000+", label: "Documents processed per month" },
      { value: "D365 ERP", label: "Direct bi-directional sync" },
    ],
    stack: [
      "Microsoft Dynamics 365",
      "Document AI / OCR",
      "Enterprise Integration",
      "REST APIs",
    ],
  },

  /* --- ADDITIONAL PROJECTS & STRATEGIC PARTNERSHIPS (All 10 on /projects) --- */
  {
    id: "procol-esourcing",
    section: "partnership",
    featuredOnHome: false,
    category: "Strategic Partnership · Procurement Tech",
    company: "Barakat Fresh × Procol",
    brandKey: "procol",
    partnerBrandKey: "barakat",
    period: "Jun 2024 – Present",
    title: "Procol Custom E-Sourcing for 35M AED Annual Spend",
    caption:
      "Digitized procurement evaluation and PR-to-PO workflows across 150+ suppliers, cutting cycle time by 30% on 35M AED annual spend.",
    headlineMetric: "35M AED Spend",
    stageType: "yellow-sheet",
    problem:
      "Managing 35M AED in annual procurement across 150+ suppliers via email and spreadsheets created PR-to-PO bottlenecks and limited bid transparency.",
    execution: [
      "Partnered with Procol to design and deploy a custom E-sourcing platform across 150+ active supplier relationships.",
      "Engineered structured procurement evaluation frameworks and automated PR-to-PO approval chains.",
      "Reduced end-to-end PR-to-PO cycle time by 30% while governing 35M AED in annual spend.",
    ],
    outcomes: [
      { value: "35M AED", label: "Annual spend governed" },
      { value: "-30%", label: "PR-to-PO cycle time reduction" },
      { value: "150+", label: "Suppliers onboarded" },
    ],
    stack: [
      "Procol E-Sourcing",
      "PR-to-PO Automation",
      "CAPEX / OPEX",
      "Stakeholder Management",
    ],
  },
  {
    id: "gmg-omnichannel",
    section: "project",
    featuredOnHome: false,
    category: "Omnichannel & Analytics",
    company: "GMG (Sun & Sand Sports / Nike)",
    brandKey: "gmg",
    period: "Jul 2021 – Jun 2022",
    title: "Salesforce Commerce Cloud & GA4 Event Taxonomy",
    caption:
      "Aligned sprint delivery across 50+ retail stores and mobile apps while architecting the web and app GA4 tracking schema.",
    headlineMetric: "50+ Stores",
    stageType: "node-graph",
    problem:
      "Disconnected telemetry and sprint priorities across e-commerce mobile apps and 50+ brick-and-mortar retail stores slowed down experiment velocity for Nike and Sun & Sand Sports.",
    execution: [
      "Coordinated sprint deliverables and product requirements between design, engineering, and retail store operations on Salesforce Commerce Cloud.",
      "Designed the complete GA4 event taxonomy across web and mobile apps, validated data quality, and built executive performance dashboards.",
      "Supported the A/B testing program for PLP, PDP, and promotional banner placements that drove conversion lifts on the Sun & Sand Sports app.",
      "Led UAT quality control by logging defects, validating fixes, and authoring release test cases.",
    ],
    outcomes: [
      { value: "50+", label: "Retail stores & app synchronized" },
      { value: "GA4", label: "Full web & app event taxonomy" },
      { value: "PLP/PDP", label: "A/B testing conversion lift" },
    ],
    stack: [
      "Salesforce Commerce Cloud",
      "Google Analytics 4",
      "Omnichannel POS",
      "A/B Testing",
      "UAT & Release QA",
    ],
  },
  {
    id: "bexa-ai",
    section: "project",
    featuredOnHome: false,
    category: "AI Market Intelligence",
    company: "Barakat Fresh",
    brandKey: "barakat",
    period: "Jun 2024 – Present",
    title: "BEXA: AI Competitor & SKU Intelligence Platform",
    caption:
      "Built an internal AI engine monitoring 10+ regional competitors and 5,000+ SKUs daily to detect pricing gaps and category opportunities.",
    headlineMetric: "5,000+ SKUs",
    stageType: "matrix-type",
    problem:
      "Manual price checks across regional grocery competitors left commercial teams blind to daily SKU-level price shifts and assortment gaps.",
    execution: [
      "Led product development of BEXA, an AI-powered competitor intelligence platform tracking 10+ regional grocery players.",
      "Automated matching and price-gap alerting across 5,000+ fresh produce and grocery SKUs.",
      "Equipped category managers with real-time margin and assortment opportunity views.",
    ],
    outcomes: [
      { value: "5,000+", label: "SKUs monitored automatically" },
      { value: "10+", label: "Regional competitors tracked" },
      { value: "Real-Time", label: "Pricing gap & margin alerts" },
    ],
    stack: [
      "LLMs & Entity Matching",
      "Python",
      "Pricing Strategy",
      "Market Intelligence",
      "SQL",
    ],
  },
  {
    id: "freshcoins-loyalty",
    section: "partnership",
    featuredOnHome: false,
    category: "Loyalty & Lifecycle CRM Partnership",
    company: "Barakat Fresh × CleverTap",
    brandKey: "clevertap",
    partnerBrandKey: "barakat",
    period: "Jun 2024 – Present",
    title: "FreshCoins Pro/VIP Loyalty & CleverTap Retention",
    caption:
      "Unified rewards across in-store, web, and app while recovering 8% of abandoned carts and lifting 30-day retention by +22%.",
    headlineMetric: "+22% Retention",
    stageType: "portrait-split",
    problem:
      "Repeat grocery frequency needed a unified omnichannel incentive across physical stores and digital channels alongside automated lifecycle recovery for dropped sessions.",
    execution: [
      "Co-designed FreshCoins, a tiered loyalty program (Pro and VIP) featuring cashback, category bonuses, and bonus-day multipliers across in-store, web, and app.",
      "Built automated CleverTap retention journeys: welcome flows, abandoned-cart nudges, and inactive-user win-back campaigns.",
      "Recovered 8% of dropped cart sessions and drove a +22% improvement in 30-day user retention.",
    ],
    outcomes: [
      { value: "+22%", label: "30-day retention improvement" },
      { value: "8%", label: "Abandoned cart sessions recovered" },
      { value: "3 Channels", label: "In-store, web & app unified" },
    ],
    stack: [
      "CleverTap",
      "FreshCoins Loyalty",
      "Omnichannel CRM",
      "Cohort Segmentation",
    ],
  },
  {
    id: "barakat-delivery-slots",
    section: "project",
    featuredOnHome: false,
    category: "Last-Mile Logistics UX",
    company: "Barakat Fresh",
    brandKey: "barakat",
    period: "Jun 2024 – Present",
    title: "Dynamic Delivery Slot UX & Fleet Cost Optimization",
    caption:
      "Engineered 'Popular Slot' badges and dynamic pricing nudges from order data, cutting last-mile costs by ~5–6% with steady NPS.",
    headlineMetric: "-5–6% Fleet Cost",
    stageType: "blue-phones",
    problem:
      "Unbalanced delivery window selection created peak-hour dispatch bottlenecks and elevated last-mile cold-chain delivery costs across the UAE.",
    execution: [
      "Queried historical order density and route data in SQL to identify cost-efficient delivery windows by zone.",
      "Designed 'Popular Slot' visual badges and dynamic pricing nudges inside the checkout slot picker to steer demand into optimal windows.",
      "Reduced last-mile logistics costs by ~5–6% while preserving on-time SLA and customer NPS.",
    ],
    outcomes: [
      { value: "~5–6%", label: "Last-mile delivery cost reduction" },
      { value: "NPS Held", label: "Zero drop in customer satisfaction" },
      { value: "SQL + UX", label: "Data-backed slot steering" },
    ],
    stack: [
      "SQL",
      "Dynamic Pricing",
      "OMS / WMS",
      "Last-Mile Logistics",
      "Behavioral UX",
    ],
  },
  {
    id: "formcase-edtech",
    section: "project",
    featuredOnHome: false,
    category: "Product Strategy & GTM",
    company: "Formcase GMBH (IServ)",
    brandKey: "formcase",
    period: "Aug 2022 – Mar 2023",
    title: "IServ Middle East Launch & Self-Serve Help Hub",
    caption:
      "Led 50+ institutional demos at GITEX, GESS & DIDACTA and launched an analytics help hub that cut support tickets by 25%.",
    headlineMetric: "-25% Tickets",
    stageType: "tag-pattern",
    problem:
      "Entering the UAE EdTech sector required localized feature prioritization with a Germany-based engineering team and scalable onboarding to reduce repetitive support requests.",
    execution: [
      "Collaborated with an 8-member Germany-based product and sales team to prioritize regional roadmap features for IServ's Middle East launch.",
      "Led 50+ client discovery and live demo sessions across GITEX, GESS, and DIDACTA with government and institutional stakeholders.",
      "Conducted qualitative enterprise user research, synthesizing personas and journey maps to guide product-market fit.",
      "Built and launched a self-serve help hub (guides, FAQs, video tutorials) instrumented with usage analytics to close knowledge gaps.",
    ],
    outcomes: [
      { value: "-25%", label: "Reduction in support tickets" },
      { value: "50+", label: "Demos at GITEX, GESS & DIDACTA" },
      { value: "8", label: "Germany-based team aligned" },
    ],
    stack: [
      "Product Roadmap",
      "Market Entry GTM",
      "User Research",
      "Usage Analytics",
      "Self-Serve Onboarding",
    ],
  },
];

export const HOME_SELECTED_WORKS = ALL_PROJECTS.filter(
  (p) => p.featuredOnHome
);

export const EXPERIENCE_DATA: {
  id: string;
  role: string;
  company: string;
  location: string;
  period: string;
  brandKey: BrandKey;
  partnerBrands?: BrandKey[];
  summary: string;
  highlights: string[];
  partnerships?: {
    partner: string;
    brandKey: BrandKey;
    metric: string;
    detail: string;
  }[];
}[] = [
  {
    id: "barakat-fresh",
    role: "Digital Product Specialist",
    company: "Barakat Fresh",
    location: "Dubai, United Arab Emirates",
    period: "Jun 2024 – Present",
    brandKey: "barakat",
    partnerBrands: ["spotdraft", "dynamics365", "procol", "checkout", "clevertap"],
    summary:
      "Leading a cross-functional squad of 5 (Developers, QA, UX/Design) owning end-to-end digital product delivery across BarakatFresh.ae web, mobile apps, and internal enterprise AI platforms.",
    highlights: [
      "Identified user journey drop-offs and led a UX revamp across search, PDP, and PLP, improving Add-to-Cart (ATC) by ~24%.",
      "Led end-to-end checkout redesign integrating Checkout.com, Apple Pay, Google Pay, and BNPL, increasing checkout conversion by +18%.",
      "Engineered delivery slot UX using order data ('Popular Slot' badges and dynamic pricing nudges), reducing last-mile costs by ~5–6% while maintaining customer NPS.",
      "Co-designed FreshCoins, a tiered loyalty program (Pro and VIP) with cashback, category bonuses, and bonus-day multipliers unifying rewards across in-store, web, and app.",
      "Built automated retention campaigns in CleverTap (welcome, abandoned-cart recovering 8% of dropped sessions, win-back), driving a +22% improvement in 30-day retention.",
      "Led development of BEXA, an AI-powered competitor intelligence platform monitoring 10+ regional competitors and 5,000+ SKUs to uncover pricing gaps and category opportunities.",
    ],
    partnerships: [
      {
        partner: "SpotDraft",
        brandKey: "spotdraft",
        metric: "48h TAT · +20% Faster Onboarding",
        detail:
          "Partnered with SpotDraft to implement a custom AI-Native CLM for 500+ supplier agreements, establishing standardized evaluation and compliance frameworks.",
      },
      {
        partner: "Microsoft Dynamics 365 × GRV AI",
        brandKey: "dynamics365",
        metric: "-85% Manual Effort · 10,000+ Docs/Mo",
        detail:
          "Managed end-to-end implementation of the GRV AI-based invoice processing module integrated with Microsoft Dynamics 365 ERP.",
      },
      {
        partner: "Procol",
        brandKey: "procol",
        metric: "-30% Cycle Time · 35M AED Spend",
        detail:
          "Partnered with Procol to implement custom E-sourcing across 150+ supplier relationships, digitizing procurement evaluation and PR-to-PO workflows.",
      },
    ],
  },
  {
    id: "formcase-gmbh",
    role: "Product Executive",
    company: "Formcase GMBH (IServ Middle East)",
    location: "Dubai, United Arab Emirates",
    period: "Aug 2022 – Mar 2023",
    brandKey: "formcase",
    summary:
      "Bridged Middle East institutional requirements with an 8-member Germany-based product and sales team for IServ's UAE EdTech market entry.",
    highlights: [
      "Collaborated with an 8-member Germany-based product and sales team to align product features with regional market needs.",
      "Contributed to market entry strategy for IServ's Middle East launch, conducting UAE EdTech competitive analysis and shaping the GTM roadmap.",
      "Led 50+ client discovery and demo sessions at GITEX, GESS, and DIDACTA, translating institutional feedback into prioritized backlog items.",
      "Conducted qualitative user research with enterprise clients, synthesizing findings into personas and user journey maps.",
      "Launched a self-serve help hub (guides, FAQs, video tutorials) instrumented with usage analytics, reducing support tickets by 25%.",
    ],
  },
  {
    id: "gmg-retail",
    role: "Product Analyst",
    company: "GMG (Sun & Sand Sports / Nike)",
    location: "Dubai, United Arab Emirates",
    period: "Jul 2021 – Jun 2022",
    brandKey: "gmg",
    summary:
      "Supported data-driven e-commerce and omnichannel growth for Sun & Sand Sports and Nike across mobile apps and 50+ retail stores on Salesforce Commerce Cloud.",
    highlights: [
      "Coordinated sprint deliverables and aligned product requirements across design, tech, and retail store teams across 50+ stores on Salesforce Commerce Cloud.",
      "Supported the A/B testing program for PLP, PDP, and promotional banners, driving measurable conversion lifts on the Sun & Sand Sports app.",
      "Designed the GA4 event tracking taxonomy across web and app, validated data quality, and built performance dashboards to track funnel metrics.",
      "Led UAT and quality control by logging bugs, validating fixes, and writing test cases for every release cycle.",
    ],
  },
];

export const WHAT_I_DO_PILLARS = [
  {
    tag: "D2C Commerce",
    title: "D2C Conversion & Checkout Architecture",
    description:
      "I diagnose search, PLP, PDP, and checkout funnels using cohort telemetry, then ship high-converting payment experiences (Checkout.com, Apple Pay, Google Pay, BNPL) and behavioral delivery-slot nudges.",
    metrics: "+24% ATC · +18% Checkout · -5–6% Last-Mile Cost",
  },
  {
    tag: "Enterprise AI & ERP",
    title: "Enterprise AI & ERP Automation",
    description:
      "I take internal AI tools from concept to production, from BEXA's 5,000+ SKU competitor intelligence engine to automated OCR invoice pipelines synced with Microsoft Dynamics 365 ERP.",
    metrics: "5,000+ SKUs Tracked · 10,000+ Docs/Mo · -85% Manual Work",
  },
  {
    tag: "SaaS Partnerships",
    title: "Strategic Vendor & Partnership Delivery",
    description:
      "I lead procurement, legal, and technical integrations with enterprise SaaS partners (SpotDraft CLM, Procol E-Sourcing, CleverTap) to govern multi-million-dirham spend and 500+ supplier contracts.",
    metrics: "35M AED Spend · 48h Contract TAT · 500+ Agreements",
  },
  {
    tag: "Omnichannel & CRM",
    title: "Omnichannel Retail & Lifecycle CRM",
    description:
      "I unify physical store POS and digital commerce (50+ Nike & Sun & Sand Sports stores, FreshCoins Pro/VIP loyalty) backed by clean GA4/Mixpanel event taxonomies and CleverTap retention loops.",
    metrics: "+22% 30-Day Retention · 8% Carts Recovered · 50+ Stores",
  },
];

export const EDUCATION_AND_VOLUNTEERING = [
  {
    id: "uowd-volunteer",
    type: "Volunteering",
    title: "Alumni & Student Community Volunteer",
    institution: "University of Wollongong in Dubai",
    location: "Dubai, United Arab Emirates",
    period: "Sep 2025 – Present",
    brandKey: "uowd" as BrandKey,
    detail:
      "Mentoring computer science students and supporting university-industry product management initiatives in Dubai.",
  },
  {
    id: "uowd-bsc",
    type: "Education",
    title: "Bachelor of Science in Computer Science",
    institution: "University of Wollongong in Dubai (UOWD)",
    location: "Dubai, United Arab Emirates",
    period: "Sep 2019 – Dec 2023",
    brandKey: "uowd" as BrandKey,
    detail:
      "Rigorous foundation in software engineering, algorithms, database systems, system architecture, and full-stack development.",
  },
];

export const SKILL_CATEGORIES = [
  {
    category: "Product Strategy & Growth",
    skills: [
      "Pricing Strategy",
      "KPI / OKR Setting",
      "Product Roadmaps",
      "User Segmentation",
      "User Journey Mapping",
      "A/B Testing",
      "Retention & CRM",
      "Loyalty Programs",
    ],
  },
  {
    category: "Retail & E-Commerce",
    skills: [
      "Omnichannel",
      "OMS",
      "WMS",
      "RMS",
      "Oracle Retail POS",
      "Salesforce Commerce Cloud",
      "Shopify",
      "SAP Hybris",
      "Magento",
    ],
  },
  {
    category: "Delivery & Execution",
    skills: [
      "Agile / Scrum",
      "Kanban",
      "Waterfall",
      "SDLC",
      "PRD & BRD Writing",
      "Wireframing",
      "Release Planning",
      "Vendor Management",
      "CAPEX / OPEX",
    ],
  },
  {
    category: "Technology, Cloud & AI Systems",
    skills: [
      "REST / API",
      "API Gateway",
      "Middleware & SOA",
      "AWS",
      "Azure",
      "GCP",
      "Python",
      "JavaScript & HTML/CSS",
      "LLMs & RAG",
      "LangChain & LangGraph",
      "Prompt Engineering",
      "Agentic AI",
    ],
  },
  {
    category: "Data & Product Analytics",
    skills: [
      "SQL",
      "Power BI",
      "Advanced Excel",
      "Mixpanel",
      "Google Analytics 4 (GA4)",
      "CleverTap",
      "Cohort & Funnel Analysis",
    ],
  },
  {
    category: "Enterprise Tools & Platforms",
    skills: [
      "Jira",
      "Asana",
      "Notion",
      "Salesforce",
      "Microsoft Dynamics 365",
      "Oracle",
      "NetSuite",
      "Figma",
      "SpotDraft",
      "Procol",
    ],
  },
];

export const SPOKEN_LANGUAGES = [
  { language: "English", level: "Full Professional / Native Fluency" },
  { language: "Arabic", level: "Working Conversational" },
  { language: "Hindi", level: "Native / Bilingual" },
  { language: "Urdu", level: "Fluent Conversational" },
  { language: "Gujarati", level: "Conversational" },
];

export const ARCHIVE_CREDENTIALS = [
  {
    id: "cspo",
    title: "Certified Scrum Product Owner® (CSPO)",
    org: "Scrum Alliance",
    category: "Certification",
    year: "2026",
    color: "#22C55E",
    badge: "CS",
  },
  {
    id: "pac",
    title: "Product Analytics Micro-Certification (PAC)™",
    org: "Product School",
    category: "Certification",
    year: "2026",
    color: "#3B82F6",
    badge: "PA",
  },
  {
    id: "leaders-award",
    title: "Leaders Award, Digital Product Delivery",
    org: "Barakat Fresh",
    category: "Award",
    year: "2026",
    color: "#FACC15",
    badge: "LA",
  },
  {
    id: "psc",
    title: "Product Strategy Micro-Certification (PSC)™",
    org: "Product School",
    category: "Certification",
    year: "2025",
    color: "#14B8A6",
    badge: "PS",
  },
  {
    id: "ibm-pm",
    title: "Product Manager Professional Certificate",
    org: "IBM",
    category: "Certification",
    year: "2025",
    color: "#0EA5E9",
    badge: "IB",
  },
  {
    id: "ga4-cert",
    title: "Google Analytics 4 (GA4) Certification",
    org: "Google",
    category: "Certification",
    year: "2025",
    color: "#EA580C",
    badge: "G4",
  },
  {
    id: "az-900",
    title: "Microsoft Certified: Azure Fundamentals (AZ-900)",
    org: "Microsoft",
    category: "Cloud",
    year: "2024",
    color: "#2563EB",
    badge: "AZ",
  },
  {
    id: "aws-cp",
    title: "AWS Certified: Cloud Practitioner Essentials",
    org: "Amazon Web Services",
    category: "Cloud",
    year: "2024",
    color: "#F59E0B",
    badge: "AW",
  },
  {
    id: "google-pm",
    title: "Google Project Management Certificate",
    org: "Google",
    category: "Certification",
    year: "2023",
    color: "#10B981",
    badge: "PM",
  },
];

export const CONTACT_LINKS = {
  topmate: "https://topmate.io/ocean_dsouza10",
  linkedin: "https://www.linkedin.com/in/oceands/",
  email: "oceands06@gmail.com",
  emailHref: "mailto:oceands06@gmail.com",
  phone: "+971 50 698 9926",
  phoneHref: "tel:+971506989926",
  location: "Dubai, United Arab Emirates",
};
