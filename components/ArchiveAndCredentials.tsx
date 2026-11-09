"use client";

import React, { useState } from "react";
import { BrandLogo, BrandKey } from "./BrandLogo";
import { TileReveal } from "./react-bits/TileReveal";
import { ChevronDown, ChevronUp } from "lucide-react";

interface ExperienceEntry {
  id: string;
  company: string;
  role: string;
  period: string;
  brandKey: BrandKey;
  highlights: string[];
}

const EXPERIENCE_ITEMS: ExperienceEntry[] = [
  {
    id: "barakat",
    company: "Barakat Fresh",
    role: "Digital Product Specialist",
    period: "Jun 2024 – Present",
    brandKey: "barakat",
    highlights: [
      "Lead a 5-member cross-functional squad (Developers, QA, UX/Design) owning consumer and internal platform products across web and mobile apps.",
      "Architected search, PLP, and PDP platform discovery revamps (+24% Add-to-Cart) and a unified payment orchestration layer with Checkout.com, Apple Pay, Google Pay, and BNPL (+18% conversion).",
      "Co-designed the FreshCoins Pro/VIP omnichannel loyalty engine and automated CleverTap retention pipelines (+22% 30-day retention, 8% abandoned carts recovered).",
      "Spearheaded BEXA, an internal AI market intelligence platform tracking 10+ regional competitors and 5,000+ SKUs.",
    ],
  },
  {
    id: "formcase",
    company: "Formcase GMBH (IServ Middle East)",
    role: "Product Executive",
    period: "Aug 2022 – Mar 2023",
    brandKey: "formcase",
    highlights: [
      "Collaborated with an 8-member Germany-based product and sales team to localize the IServ platform for its Middle East EdTech launch.",
      "Led 50+ institutional discovery and demo sessions across GITEX, GESS, and DIDACTA.",
      "Built and launched a self-serve analytics help hub that reduced customer support tickets by 25%.",
    ],
  },
  {
    id: "gmg",
    company: "GMG (Sun & Sand Sports / Nike)",
    role: "Product Analyst",
    period: "Jul 2021 – Jun 2022",
    brandKey: "gmg",
    highlights: [
      "Aligned platform sprint delivery across mobile apps and 50+ retail stores on Salesforce Commerce Cloud.",
      "Designed the cross-platform GA4 event tracking taxonomy and supported A/B experimentation across PLP, PDP, and promotional surfaces.",
    ],
  },
  {
    id: "spotdraft-partner",
    company: "SpotDraft × Barakat Fresh",
    role: "AI-Native CLM Platform Partnership",
    period: "2024 – Present",
    brandKey: "spotdraft",
    highlights: [
      "Delivered a custom AI-Native Contract Lifecycle Management platform governing 500+ agreements, cutting turnaround time to 48h and accelerating onboarding by 20%.",
    ],
  },
  {
    id: "dynamics-partner",
    company: "Microsoft Dynamics 365 × GRV AI",
    role: "Enterprise Document AI Platform Lead",
    period: "2024 – Present",
    brandKey: "dynamics365",
    highlights: [
      "Integrated an AI document extraction pipeline with Microsoft Dynamics 365 ERP, reducing manual data entry by 85% across 10,000+ monthly documents.",
    ],
  },
  {
    id: "procol-partner",
    company: "Procol × Barakat Fresh",
    role: "B2B Workflow Platform Partnership",
    period: "2024 – Present",
    brandKey: "procol",
    highlights: [
      "Implemented custom B2B workflow automation across 150+ external partners, cutting approval cycle time by 30% on 35M AED in annual volume.",
    ],
  },
];

interface EducationAndCertEntry {
  id: string;
  brandKey: BrandKey;
  institution: string;
  credential: string;
  year: string;
}

const EDUCATION_AND_CERTS: EducationAndCertEntry[] = [
  {
    id: "cspo-2026",
    brandKey: "scrum",
    institution: "Scrum Alliance",
    credential: "Certified Scrum Product Owner® (CSPO)",
    year: "2026",
  },
  {
    id: "pac-2026",
    brandKey: "productschool",
    institution: "Product School",
    credential: "Product Analytics Micro-Certification (PAC)™",
    year: "2026",
  },
  {
    id: "leaders-award-2026",
    brandKey: "barakat",
    institution: "Barakat Fresh",
    credential: "Leaders Award, Digital Product Delivery",
    year: "Jun 2026",
  },
  {
    id: "uowd-volunteer-2025",
    brandKey: "uowd",
    institution: "University of Wollongong in Dubai",
    credential: "Alumni & Student Community Mentor",
    year: "Sep 2025 – Present",
  },
  {
    id: "psc-2025",
    brandKey: "productschool",
    institution: "Product School",
    credential: "Product Strategy Micro-Certification (PSC)™",
    year: "2025",
  },
  {
    id: "ibm-pm-2025",
    brandKey: "ibm",
    institution: "IBM",
    credential: "Product Manager Professional Certificate",
    year: "2025",
  },
  {
    id: "google-ga4-2025",
    brandKey: "google",
    institution: "Google",
    credential: "Google Analytics 4 (GA4) Certification",
    year: "2025",
  },
  {
    id: "microsoft-az900-2024",
    brandKey: "microsoft",
    institution: "Microsoft",
    credential: "Microsoft Certified: Azure Fundamentals (AZ-900)",
    year: "2024",
  },
  {
    id: "aws-cp-2024",
    brandKey: "aws",
    institution: "Amazon Web Services",
    credential: "AWS Certified: Cloud Practitioner Essentials",
    year: "2024",
  },
  {
    id: "google-pm-2023",
    brandKey: "google",
    institution: "Google",
    credential: "Google Project Management Certificate",
    year: "2023",
  },
  {
    id: "uowd-bsc-2023",
    brandKey: "uowd",
    institution: "University of Wollongong in Dubai",
    credential: "B.Sc. in Computer Science",
    year: "Sep 2019 – Dec 2023",
  },
];

const WHAT_I_DO_PILLS = [
  "Platform Product Strategy",
  "D2C Commerce & Checkout Architecture",
  "Payment Orchestration & Wallets",
  "Enterprise AI & Agentic Systems",
  "Omnichannel Retail Platforms",
  "A/B Experimentation & Conversion",
  "Event Taxonomy & Data Architecture",
  "Lifecycle CRM & Loyalty Engines",
  "Agile / Scrum Squad Leadership",
];

const SKILLS_PILLS = [
  "SQL",
  "Mixpanel",
  "Google Analytics 4",
  "CleverTap",
  "Power BI",
  "Microsoft Dynamics 365",
  "Salesforce Commerce Cloud",
  "Oracle Retail POS",
  "OMS / WMS / RMS",
  "SpotDraft CLM",
  "Procol Platform",
  "Checkout.com",
  "REST APIs & API Gateways",
  "LLMs, RAG & LangChain",
  "Python & JavaScript",
  "AWS, Azure & GCP",
  "Figma",
  "Jira, Asana & Notion",
];

const LANGUAGES_PILLS = [
  "English",
  "Arabic",
  "Hindi",
  "Urdu",
  "Gujarati",
];

export const ArchiveAndCredentials: React.FC = () => {
  const [showAllExp, setShowAllExp] = useState(false);
  const [expandedExpId, setExpandedExpId] = useState<string | null>("barakat");
  const [showAllEdu, setShowAllEdu] = useState(false);

  const visibleExperience = showAllExp
    ? EXPERIENCE_ITEMS
    : EXPERIENCE_ITEMS.slice(0, 3);

  const visibleEducation = showAllEdu
    ? EDUCATION_AND_CERTS
    : EDUCATION_AND_CERTS.slice(0, 4);

  return (
    <div className="w-full max-w-[780px] mx-auto px-4 sm:px-8 pt-8 sm:pt-10 pb-12 sm:pb-14 space-y-12 sm:space-y-14">
      {/* 1. ABOUT ME INTRO */}
      <section aria-labelledby="about-me-heading" className="space-y-5">
        <TileReveal rows={2} cols={10}>
          <h1
            id="about-me-heading"
            className="text-2xl sm:text-4xl md:text-5xl font-semibold tracking-[-0.03em] leading-[1.1] text-ink"
          >
            Hello, I&apos;m Ocean D&apos;souza
          </h1>
        </TileReveal>

        <div className="space-y-4 text-sm sm:text-base text-ink-muted leading-relaxed">
          <p>
            I&apos;m a Platform Product Manager based in Dubai with five years
            of experience building high-scale consumer storefronts, payment and
            loyalty engines, and AI-powered internal platforms. I focus on
            designing core systems that make customer journeys intuitive while
            giving engineering and business teams clean, scalable foundations.
          </p>
          <p>
            Today, I lead digital product delivery at Barakat Fresh across our
            web and mobile commerce platform, checkout and wallet orchestration,
            and the FreshCoins loyalty ecosystem. On the enterprise platform
            side, I spearhead our AI market intelligence engine (BEXA) alongside
            platform integrations with SpotDraft, Microsoft Dynamics 365, and
            Procol.
          </p>
          <p>
            Previously, I helped shape the Middle East platform launch of IServ
            at Formcase GMBH and scaled omnichannel data and experimentation
            across 50+ Nike and Sun &amp; Sand Sports stores at GMG. With a
            Computer Science degree from the University of Wollongong in Dubai,
            I bridge API and data architecture directly with product strategy.
          </p>
        </div>
      </section>

      {/* 2. EXPERIENCE (Uses Official Brand Logos from Images 1, 2, 3) */}
      <section aria-labelledby="experience-heading" className="space-y-3">
        <h2
          id="experience-heading"
          className="text-sm font-semibold tracking-tight text-ink"
        >
          Experience
        </h2>

        <div className="rounded-[24px] bg-canvas-surface p-2.5 sm:p-4 space-y-2.5">
          {visibleExperience.map((item) => {
            const isExpanded = expandedExpId === item.id;
            return (
              <div
                key={item.id}
                className="rounded-2xl bg-canvas p-3.5 sm:p-4 transition-colors"
              >
                <button
                  type="button"
                  onClick={() =>
                    setExpandedExpId(isExpanded ? null : item.id)
                  }
                  className="w-full flex items-center justify-between gap-3 sm:gap-4 text-left"
                >
                  <div className="flex items-center gap-3 sm:gap-4 min-w-0">
                    <BrandLogo
                      brand={item.brandKey}
                      size="lg"
                      showText={false}
                    />
                    <div className="min-w-0">
                      <div className="text-sm sm:text-base font-semibold text-ink truncate">
                        {item.company}
                      </div>
                      <div className="text-xs sm:text-sm text-ink-muted mt-0.5 leading-snug">
                        <span>{item.role}</span>
                        <span className="mx-1.5">•</span>
                        <span className="whitespace-nowrap">{item.period}</span>
                      </div>
                    </div>
                  </div>

                  <span className="text-ink-subtle shrink-0">
                    {isExpanded ? (
                      <ChevronUp className="w-4 h-4" />
                    ) : (
                      <ChevronDown className="w-4 h-4" />
                    )}
                  </span>
                </button>

                {isExpanded && (
                  <ul className="mt-3.5 pt-3 space-y-2 text-xs sm:text-sm text-ink-muted pl-2 sm:pl-16">
                    {item.highlights.map((bullet, idx) => (
                      <li key={idx} className="leading-relaxed">
                        • {bullet}
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            );
          })}

          <button
            type="button"
            onClick={() => setShowAllExp((prev) => !prev)}
            className="w-full py-2.5 inline-flex items-center justify-center gap-1.5 text-xs font-semibold text-ink-muted hover:text-ink transition-colors"
          >
            <span>
              {showAllExp
                ? "Show fewer roles"
                : `Show ${EXPERIENCE_ITEMS.length - 3} more partnerships`}
            </span>
            {showAllExp ? (
              <ChevronUp className="w-3.5 h-3.5" />
            ) : (
              <ChevronDown className="w-3.5 h-3.5" />
            )}
          </button>
        </div>
      </section>

      {/* 3. EDUCATION & CREDENTIALS (Uses Official Brand Logos for UOWD, Google, IBM, Microsoft, AWS, Scrum Alliance, Product School) */}
      <section aria-labelledby="education-heading" className="space-y-3">
        <h2
          id="education-heading"
          className="text-sm font-semibold tracking-tight text-ink"
        >
          Education &amp; Credentials
        </h2>

        <div className="rounded-[24px] bg-canvas-surface p-2.5 sm:p-4 space-y-2.5">
          {visibleEducation.map((edu) => (
            <div
              key={edu.id}
              className="rounded-2xl bg-canvas p-3.5 sm:p-4 flex items-center gap-3 sm:gap-4"
            >
              <BrandLogo brand={edu.brandKey} size="lg" showText={false} />

              <div className="min-w-0 flex-1">
                <div className="text-sm sm:text-base font-semibold text-ink truncate">
                  {edu.institution}
                </div>
                <div className="text-xs sm:text-sm text-ink-muted mt-0.5 leading-snug">
                  <span>{edu.credential}</span>
                  <span className="mx-1.5">•</span>
                  <span className="whitespace-nowrap">{edu.year}</span>
                </div>
              </div>
            </div>
          ))}

          <button
            type="button"
            onClick={() => setShowAllEdu((prev) => !prev)}
            className="w-full py-2.5 inline-flex items-center justify-center gap-1.5 text-xs font-semibold text-ink-muted hover:text-ink transition-colors"
          >
            <span>
              {showAllEdu
                ? "Show fewer"
                : `Show ${EDUCATION_AND_CERTS.length - 4} more credentials`}
            </span>
            {showAllEdu ? (
              <ChevronUp className="w-3.5 h-3.5" />
            ) : (
              <ChevronDown className="w-3.5 h-3.5" />
            )}
          </button>
        </div>
      </section>

      {/* 4. WHAT I DO */}
      <section aria-labelledby="what-i-do-heading" className="space-y-3">
        <h2
          id="what-i-do-heading"
          className="text-sm font-semibold tracking-tight text-ink"
        >
          What I do
        </h2>

        <div className="rounded-[24px] bg-canvas-surface p-4 sm:p-6 flex flex-wrap gap-2">
          {WHAT_I_DO_PILLS.map((pill) => (
            <span
              key={pill}
              className="px-3.5 sm:px-4 py-2 sm:py-2.5 rounded-full bg-canvas text-xs sm:text-sm font-medium text-ink"
            >
              {pill}
            </span>
          ))}
        </div>
      </section>

      {/* 5. SKILLS & PLATFORMS */}
      <section aria-labelledby="skills-heading" className="space-y-3">
        <h2
          id="skills-heading"
          className="text-sm font-semibold tracking-tight text-ink"
        >
          Skills &amp; Platforms
        </h2>

        <div className="rounded-[24px] bg-canvas-surface p-4 sm:p-6 flex flex-wrap gap-2">
          {SKILLS_PILLS.map((skill) => (
            <span
              key={skill}
              className="px-3.5 sm:px-4 py-2 rounded-full bg-canvas text-xs sm:text-sm font-medium text-ink-muted hover:text-ink transition-colors"
            >
              {skill}
            </span>
          ))}
        </div>
      </section>

      {/* 6. LANGUAGES */}
      <section aria-labelledby="languages-heading" className="space-y-3">
        <h2
          id="languages-heading"
          className="text-sm font-semibold tracking-tight text-ink"
        >
          Languages
        </h2>

        <div className="rounded-[24px] bg-canvas-surface p-4 sm:p-6 flex flex-wrap gap-2">
          {LANGUAGES_PILLS.map((lang) => (
            <span
              key={lang}
              className="px-3.5 sm:px-4 py-2 rounded-full bg-canvas text-xs sm:text-sm font-medium text-ink"
            >
              {lang}
            </span>
          ))}
        </div>
      </section>
    </div>
  );
};

export default ArchiveAndCredentials;
