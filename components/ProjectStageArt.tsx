"use client";

import React from "react";
import { ProjectItem } from "@/data/projects";
import { BrandLogo } from "./BrandLogo";

export const ProjectStageArt: React.FC<{ project: ProjectItem }> = ({
  project,
}) => {
  switch (project.stageType) {
    /* 1. GMG Omnichannel — Dark radial node graph with GMG Brand Badge */
    case "node-graph":
      return (
        <div
          data-ui="true"
          className="relative w-full aspect-[16/10] bg-[#141416] rounded-xl overflow-hidden flex flex-col justify-between p-4 sm:p-5 select-none"
        >
          <div className="flex items-center justify-between gap-2 z-10">
            <BrandLogo brand="gmg" size="sm" theme="dark" />
            <span className="px-2.5 py-1 rounded-full bg-[#1E1E22] text-[#22C55E] text-[10px] sm:text-[11px] font-semibold whitespace-nowrap">
              50+ Stores + App
            </span>
          </div>

          <svg
            viewBox="0 0 600 280"
            className="w-full h-36 sm:h-44"
            aria-label="GMG Salesforce Commerce Cloud and GA4 Omnichannel Node Graph"
          >
            <circle
              cx="135"
              cy="140"
              r="90"
              fill="none"
              stroke="#27272A"
              strokeDasharray="4 6"
              strokeWidth="1.5"
            />
            <circle
              cx="135"
              cy="140"
              r="150"
              fill="none"
              stroke="#27272A"
              strokeDasharray="4 6"
              strokeWidth="1.5"
            />
            <path
              d="M 135 140 C 225 140, 255 45, 340 45"
              fill="none"
              stroke="#3F3F46"
              strokeWidth="1.5"
            />
            <path
              d="M 135 140 C 225 140, 255 110, 340 110"
              fill="none"
              stroke="#52525B"
              strokeWidth="1.5"
            />
            <path
              d="M 135 140 C 225 140, 255 175, 340 175"
              fill="none"
              stroke="#52525B"
              strokeWidth="1.5"
            />
            <path
              d="M 135 140 C 225 140, 255 240, 340 240"
              fill="none"
              stroke="#3F3F46"
              strokeWidth="1.5"
            />

            <circle cx="135" cy="140" r="22" fill="#27272A" />
            <circle cx="135" cy="140" r="9" fill="#F5F5F7" />
            <text
              x="135"
              y="182"
              textAnchor="middle"
              fill="#A1A1AA"
              fontSize="12"
              fontWeight="500"
            >
              SFCC + GA4 Core
            </text>

            <g transform="translate(340, 25)">
              <rect width="205" height="38" rx="19" fill="#1E1E22" />
              <circle cx="20" cy="19" r="10" fill="#F5F5F7" />
              <circle cx="20" cy="19" r="4" fill="#141416" />
              <text x="40" y="23" fill="#F5F5F7" fontSize="13" fontWeight="500">
                50+ Retail Stores
              </text>
            </g>

            <g transform="translate(340, 90)">
              <rect width="205" height="38" rx="19" fill="#1E1E22" />
              <circle cx="20" cy="19" r="10" fill="#22C55E" />
              <text x="40" y="23" fill="#F5F5F7" fontSize="13" fontWeight="500">
                Nike &amp; SSS App
              </text>
            </g>

            <g transform="translate(340, 155)">
              <rect width="205" height="38" rx="19" fill="#1E1E22" />
              <circle cx="20" cy="19" r="10" fill="#3B82F6" />
              <text x="40" y="23" fill="#F5F5F7" fontSize="13" fontWeight="500">
                GA4 Event Schema
              </text>
            </g>

            <g transform="translate(340, 220)">
              <rect width="205" height="38" rx="19" fill="#1E1E22" />
              <circle cx="20" cy="19" r="10" fill="#FACC15" />
              <text x="40" y="23" fill="#F5F5F7" fontSize="13" fontWeight="500">
                PLP / PDP A/B Lift
              </text>
            </g>
          </svg>
        </div>
      );

    /* 2. Barakat Checkout × Checkout.com — White Analytics & Checkout UI Card */
    case "analytics-white":
      return (
        <div
          data-ui="true"
          className="relative w-full aspect-[16/10] bg-[#ECECEE] rounded-xl overflow-hidden p-3 sm:p-5 flex items-end justify-center select-none"
        >
          <div className="w-full h-full bg-white rounded-lg p-3 sm:p-4 flex flex-col justify-between text-[#111111]">
            <div className="flex items-center justify-between gap-2 pb-1.5 sm:pb-2">
              <div className="flex items-center gap-2 sm:gap-3 min-w-0">
                <BrandLogo brand="checkout" size="sm" theme="light" />
                <span className="text-xs text-[#94A3B8]">×</span>
                <BrandLogo
                  brand="barakat"
                  size="sm"
                  showText={false}
                  theme="light"
                />
              </div>
              <span className="px-2 sm:px-2.5 py-0.5 sm:py-1 rounded-full bg-[#DCFCE7] text-[#15803D] text-[10px] sm:text-xs font-bold whitespace-nowrap">
                +18% Conversion
              </span>
            </div>

            <div className="flex gap-2.5 sm:gap-3 flex-1 items-stretch min-h-0">
              <div className="w-2/5 sm:w-1/3 bg-[#F7F7F9] rounded-md p-2 sm:p-2.5 flex flex-col justify-between">
                <div className="space-y-1">
                  <div className="px-1.5 sm:px-2 py-1 rounded bg-[#E8F0FE] text-[#1D4ED8] text-[10px] sm:text-[11px] font-semibold truncate">
                    Apple Pay · 1-Tap
                  </div>
                  <div className="px-1.5 sm:px-2 py-1 rounded bg-white text-[#0F172A] text-[10px] sm:text-[11px] font-medium truncate">
                    Google Pay Express
                  </div>
                  <div className="px-1.5 sm:px-2 py-1 rounded bg-white text-[#0F172A] text-[10px] sm:text-[11px] font-medium truncate">
                    BNPL Split Pay
                  </div>
                </div>
                <div className="text-[9px] sm:text-[10px] font-semibold text-[#16A34A] truncate">
                  ● Live Platform
                </div>
              </div>

              <div className="flex-1 flex flex-col justify-between min-w-0">
                <svg viewBox="0 0 320 100" className="w-full h-20 sm:h-24">
                  <line
                    x1="0"
                    y1="20"
                    x2="320"
                    y2="20"
                    stroke="#F1F1F4"
                    strokeWidth="1"
                  />
                  <line
                    x1="0"
                    y1="50"
                    x2="320"
                    y2="50"
                    stroke="#F1F1F4"
                    strokeWidth="1"
                  />
                  <line
                    x1="0"
                    y1="80"
                    x2="320"
                    y2="80"
                    stroke="#F1F1F4"
                    strokeWidth="1"
                  />
                  <path
                    d="M 10 80 Q 90 75, 160 66 T 310 58"
                    fill="none"
                    stroke="#CBD5E1"
                    strokeWidth="2"
                    strokeDasharray="4 4"
                  />
                  <path
                    d="M 10 74 Q 85 48, 165 38 T 310 14"
                    fill="none"
                    stroke="#0284C7"
                    strokeWidth="2.8"
                  />
                  <circle cx="85" cy="52" r="3.5" fill="#EA580C" />
                  <circle cx="165" cy="38" r="3.5" fill="#0284C7" />
                  <circle cx="245" cy="24" r="3.5" fill="#16A34A" />
                  <circle cx="310" cy="14" r="4" fill="#16A34A" />
                </svg>

                <div className="flex items-center justify-between text-[9px] sm:text-[10px] text-[#636366]">
                  <span>Basket</span>
                  <span>Slot</span>
                  <span>Wallet</span>
                  <span className="font-bold text-[#16A34A]">Confirmed</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      );

    /* 3. Formcase GMBH (IServ) — Repeating Tag Pattern + Brand Header */
    case "tag-pattern":
      return (
        <div
          data-ui="true"
          className="relative w-full aspect-[16/10] bg-[#F8FAFC] rounded-xl overflow-hidden flex flex-col justify-between p-4 sm:p-5 select-none"
        >
          <div className="flex items-center justify-between gap-2">
            <BrandLogo brand="formcase" size="sm" theme="light" />
            <span className="px-2 sm:px-2.5 py-1 rounded-full bg-[#DCFCE7] text-[#166534] text-[10px] sm:text-xs font-bold whitespace-nowrap">
              -25% Support Tickets
            </span>
          </div>

          <div className="flex flex-col justify-center gap-2 sm:gap-3 my-auto overflow-hidden">
            {[
              [
                { label: "GITEX", bg: "#DBEAFE", fg: "#1D4ED8" },
                { label: "50+ Demos", bg: "#FEF3C7", fg: "#B45309" },
                { label: "IServ Launch", bg: "#DCFCE7", fg: "#15803D" },
              ],
              [
                { label: "Germany Squad", bg: "#FEE2E2", fg: "#B91C1C" },
                { label: "GESS & DIDACTA", bg: "#E0F2FE", fg: "#0369A1" },
                { label: "UAE EdTech", bg: "#D1FAE5", fg: "#065F46" },
              ],
              [
                { label: "Help Hub", bg: "#F1F5F9", fg: "#0F172A" },
                { label: "-25% Tickets", bg: "#DCFCE7", fg: "#166534" },
                { label: "User Research", bg: "#FCE7F3", fg: "#9D174D" },
              ],
            ].map((row, rIdx) => (
              <div
                key={rIdx}
                className={`flex items-center gap-2.5 sm:gap-3 whitespace-nowrap ${
                  rIdx % 2 === 1 ? "-ml-3" : "ml-1"
                }`}
              >
                {row.map((item, idx) => (
                  <div key={idx} className="flex items-center gap-1.5 sm:gap-2">
                    <span
                      style={{ backgroundColor: item.bg, color: item.fg }}
                      className="px-1.5 sm:px-2 py-0.5 rounded-md text-[10px] sm:text-xs font-semibold"
                    >
                      +
                    </span>
                    <span className="text-sm sm:text-lg font-bold tracking-tight text-[#0F172A]">
                      {item.label}
                    </span>
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>
      );

    /* 4. Barakat Fresh Discovery — Solid Emerald Brand Stage */
    case "emerald-brand":
      return (
        <div
          data-ui="true"
          className="relative w-full aspect-[16/10] bg-[#16A34A] rounded-xl overflow-hidden flex flex-col justify-between p-4 sm:p-6 select-none"
        >
          <div className="flex items-center justify-between gap-2">
            <BrandLogo brand="barakat" size="sm" theme="dark" />
            <span className="px-2.5 py-1 rounded-full bg-[#052E16] text-[#86EFAC] text-[10px] sm:text-xs font-bold whitespace-nowrap">
              ~24% ATC Lift
            </span>
          </div>

          <div className="my-auto text-white text-center space-y-2">
            <div className="text-2xl sm:text-4xl font-bold tracking-tight">
              BarakatFresh.ae
            </div>
            <div className="inline-flex flex-wrap items-center justify-center gap-1.5 sm:gap-2 px-3 py-1 rounded-full bg-[#052E16]/45 text-white text-[10px] sm:text-xs font-semibold">
              <span>Search Engine</span>
              <span>·</span>
              <span>PLP Filters</span>
              <span>·</span>
              <span>PDP Revamp</span>
            </div>
          </div>

          <div className="flex items-center justify-between text-[10px] sm:text-[11px] text-[#DCFCE7] font-medium">
            <span>Web + iOS &amp; Android Platform</span>
            <span>5-Member Squad</span>
          </div>
        </div>
      );

    /* 5. FreshCoins Loyalty × CleverTap — Soft Sky Split with Brand Badges */
    case "portrait-split":
      return (
        <div
          data-ui="true"
          className="relative w-full aspect-[16/10] bg-[#DCEEFB] rounded-xl overflow-hidden grid grid-cols-12 items-center p-3.5 sm:p-5 gap-3 sm:gap-4 select-none"
        >
          <div className="col-span-7 h-full rounded-lg bg-[#0F172A] p-3 sm:p-4 flex flex-col justify-between text-white">
            <div className="flex items-center justify-between gap-1">
              <BrandLogo brand="barakat" size="sm" showText={false} />
              <span className="px-1.5 sm:px-2 py-0.5 rounded bg-[#22C55E] text-[#0A0A0A] text-[9px] sm:text-[10px] font-bold">
                FRESHCOINS PRO / VIP
              </span>
            </div>
            <div className="space-y-0.5">
              <div className="text-xl sm:text-3xl font-bold tracking-tight text-[#4ADE80]">
                +22% Retention
              </div>
              <div className="text-[10px] sm:text-xs text-[#94A3B8] leading-snug">
                30-Day Cohort Lift Across Store, Web &amp; App
              </div>
            </div>
            <div className="flex items-center gap-1.5 text-[9px] sm:text-[11px] text-[#E2E8F0]">
              <span className="px-1.5 py-0.5 rounded bg-[#1E293B]">Store</span>
              <span className="px-1.5 py-0.5 rounded bg-[#1E293B]">Web</span>
              <span className="px-1.5 py-0.5 rounded bg-[#1E293B]">App</span>
            </div>
          </div>

          <div className="col-span-5 h-full bg-white rounded-xl p-2.5 sm:p-3.5 flex flex-col justify-between text-[#0F172A]">
            <BrandLogo brand="clevertap" size="sm" theme="light" />
            <div className="space-y-1 my-1">
              <div className="p-1 sm:p-1.5 rounded bg-[#FEE2E2] text-[#991B1B] text-[9px] sm:text-[10px] font-bold">
                8% Carts Recovered
              </div>
              <div className="p-1 sm:p-1.5 rounded bg-[#DCFCE7] text-[#166534] text-[9px] sm:text-[10px] font-semibold">
                2x Bonus Multipliers
              </div>
            </div>
            <div className="w-full py-1 rounded bg-[#0F172A] text-white text-center text-[9px] sm:text-[10px] font-semibold">
              Rewards Engine Live
            </div>
          </div>
        </div>
      );

    /* 6. Delivery Slots — Royal Blue Stage with 3 Mobile Screens */
    case "blue-phones":
      return (
        <div
          data-ui="true"
          className="relative w-full aspect-[16/10] bg-[#16368F] rounded-xl overflow-hidden flex items-center justify-center gap-2 sm:gap-4 px-3 sm:px-5 py-4 sm:py-6 select-none"
        >
          <div className="w-1/3 h-full bg-white rounded-lg p-2 sm:p-2.5 flex flex-col justify-between text-[#0F172A]">
            <div className="rounded bg-[#0284C7] p-1.5 sm:p-2 text-white">
              <div className="text-[9px] sm:text-[10px] font-bold">Density</div>
              <div className="text-[10px] sm:text-xs font-extrabold truncate">
                SQL Slot Engine
              </div>
            </div>
            <div className="space-y-1 text-[9px] sm:text-[10px]">
              <div className="p-1 rounded bg-[#F1F5F9] flex justify-between">
                <span>08–10</span>
                <span className="font-bold">Peak</span>
              </div>
              <div className="p-1 rounded bg-[#DCFCE7] text-[#166534] flex justify-between font-semibold">
                <span>14–16</span>
                <span>Optimal</span>
              </div>
            </div>
            <div className="text-[9px] sm:text-[10px] font-semibold text-[#64748B] truncate">
              Dubai Zones
            </div>
          </div>

          <div className="w-1/3 h-full bg-white rounded-lg p-2 sm:p-2.5 flex flex-col justify-between text-[#0F172A]">
            <div className="rounded bg-[#FACC15] p-1.5 sm:p-2 text-[#0F172A]">
              <div className="text-[9px] sm:text-[10px] font-bold">
                Popular Slot
              </div>
              <div className="text-[10px] sm:text-xs font-extrabold truncate">
                Dynamic Nudge
              </div>
            </div>
            <div className="space-y-1 text-[9px] sm:text-[10px]">
              <div className="p-1 rounded bg-[#FEF9C3] font-semibold truncate">
                Eco-Window
              </div>
              <div className="p-1 rounded bg-[#F1F5F9] truncate">
                Smart Batching
              </div>
            </div>
            <div className="text-[9px] sm:text-[10px] font-bold text-[#16A34A] truncate">
              NPS Maintained
            </div>
          </div>

          <div className="w-1/3 h-full bg-white rounded-lg p-2 sm:p-2.5 flex flex-col justify-between text-[#0F172A]">
            <div className="rounded bg-[#16A34A] p-1.5 sm:p-2 text-white">
              <div className="text-[9px] sm:text-[10px] font-bold">
                Efficiency
              </div>
              <div className="text-[10px] sm:text-xs font-extrabold">
                -5% to -6%
              </div>
            </div>
            <div className="space-y-1 text-[9px] sm:text-[10px]">
              <div className="p-1 rounded bg-[#F1F5F9] truncate">
                Dynamic Pricing
              </div>
              <div className="p-1 rounded bg-[#F1F5F9] truncate">
                Slot Steering ↑
              </div>
            </div>
            <div className="text-[9px] sm:text-[10px] font-semibold text-[#0F172A] truncate">
              Barakat Platform
            </div>
          </div>
        </div>
      );

    /* 7. BEXA AI — Dot-Matrix Typography on Pitch Black */
    case "matrix-type":
      return (
        <div
          data-ui="true"
          className="relative w-full aspect-[16/10] bg-[#08080A] rounded-xl overflow-hidden flex flex-col justify-between p-4 sm:p-6 select-none"
        >
          <div className="flex items-center justify-between gap-2">
            <BrandLogo brand="barakat" size="sm" theme="dark" />
            <span className="px-2.5 py-1 rounded-full bg-[#18181B] text-[#22C55E] text-[10px] sm:text-xs font-semibold">
              Internal AI Platform
            </span>
          </div>

          <div className="my-auto text-center">
            <div className="tracking-[0.2em] text-2xl sm:text-5xl font-extrabold text-[#F5F5F7] uppercase">
              B E X A · A I
            </div>
            <div className="mt-2.5 flex items-center justify-center gap-2 sm:gap-3 text-[10px] sm:text-xs text-[#A1A1AA]">
              <span>10+ Competitors</span>
              <span>·</span>
              <span className="text-[#22C55E] font-semibold">
                5,000+ SKUs Monitored
              </span>
            </div>
          </div>

          <div className="grid grid-cols-3 gap-1.5 sm:gap-2 text-[9px] sm:text-[10px] text-[#A1A1AA]">
            <div className="p-1.5 sm:p-2 rounded bg-[#141416] text-center truncate">
              Price Gap Alerts
            </div>
            <div className="p-1.5 sm:p-2 rounded bg-[#141416] text-center truncate">
              Entity Matching
            </div>
            <div className="p-1.5 sm:p-2 rounded bg-[#141416] text-center truncate">
              Margin Radar
            </div>
          </div>
        </div>
      );

    /* 8. SpotDraft AI CLM Partnership */
    case "annotate-badge":
      return (
        <div
          data-ui="true"
          className="relative w-full aspect-[16/10] bg-[#0B1F17] rounded-xl overflow-hidden flex flex-col justify-between p-4 sm:p-6 select-none"
        >
          <div className="flex items-center justify-between gap-2">
            <div className="flex items-center gap-2 min-w-0">
              <BrandLogo brand="spotdraft" size="sm" theme="dark" />
              <span className="text-xs text-[#86EFAC] font-semibold">×</span>
              <BrandLogo
                brand="barakat"
                size="sm"
                showText={false}
                theme="dark"
              />
            </div>
            <span className="px-2 sm:px-2.5 py-1 rounded-full bg-[#22C55E] text-[#052E16] text-[10px] sm:text-xs font-bold whitespace-nowrap">
              48h TAT
            </span>
          </div>

          <div className="my-auto rounded-xl bg-[#112E22] p-3 sm:p-4 space-y-2 text-[#F5F5F7]">
            <div className="flex items-center justify-between gap-2 text-[11px] sm:text-xs">
              <span className="font-semibold text-[#86EFAC] truncate">
                SpotDraft VerifAI · CLM Platform
              </span>
              <span className="px-2 py-0.5 rounded bg-[#EAB308] text-[#0A0A0A] text-[9px] sm:text-[10px] font-bold shrink-0">
                500+ Agreements
              </span>
            </div>
            <div className="grid grid-cols-2 gap-2 text-[10px] sm:text-[11px]">
              <div className="p-1.5 sm:p-2 rounded bg-[#091912] flex items-center justify-between gap-1">
                <span className="text-[#A7F3D0] truncate">Compliance</span>
                <span className="font-bold text-[#4ADE80] shrink-0">
                  Verified
                </span>
              </div>
              <div className="p-1.5 sm:p-2 rounded bg-[#091912] flex items-center justify-between gap-1">
                <span className="text-[#A7F3D0] truncate">Onboarding</span>
                <span className="font-bold text-[#FACC15] shrink-0">+20%</span>
              </div>
            </div>
          </div>

          <div className="flex items-center justify-between text-[10px] sm:text-[11px] text-[#A7F3D0]">
            <span>AI-Native CLM Partnership</span>
            <span>Automated Governance</span>
          </div>
        </div>
      );

    /* 9. GRV AI × Microsoft Dynamics 365 ERP Partnership */
    case "orange-tablet":
      return (
        <div
          data-ui="true"
          className="relative w-full aspect-[16/10] bg-[#EA580C] rounded-xl overflow-hidden flex items-center justify-center p-3.5 sm:p-6 select-none"
        >
          <div className="w-full h-full bg-[#0D0D11] rounded-xl p-3.5 sm:p-5 flex flex-col justify-between text-[#F5F5F7]">
            <div className="flex items-center justify-between gap-2">
              <div className="flex items-center gap-2 min-w-0">
                <BrandLogo brand="dynamics365" size="sm" theme="dark" />
                <span className="text-xs text-[#FB923C] font-semibold">×</span>
                <BrandLogo
                  brand="barakat"
                  size="sm"
                  showText={false}
                  theme="dark"
                />
              </div>
              <span className="px-2 sm:px-2.5 py-1 rounded-full bg-[#22C55E]/20 text-[#4ADE80] text-[10px] sm:text-xs font-bold whitespace-nowrap">
                -85% Manual Work
              </span>
            </div>

            <div className="grid grid-cols-12 gap-2.5 sm:gap-3 items-center my-auto">
              <div className="col-span-5 p-2.5 sm:p-3 rounded-lg bg-[#18181F]">
                <div className="text-[10px] sm:text-[11px] text-[#FB923C] font-semibold truncate">
                  GRV AI Engine
                </div>
                <div className="text-base sm:text-xl font-bold mt-0.5">
                  10,000+
                </div>
                <div className="text-[9px] sm:text-[11px] text-[#A1A1AA] truncate">
                  Docs / Month
                </div>
              </div>
              <div className="col-span-7 text-[10px] sm:text-[11px] text-[#A1A1AA] space-y-1">
                <div className="p-1.5 sm:p-2 rounded bg-[#18181F] flex justify-between gap-1">
                  <span className="truncate">OCR Extraction</span>
                  <span className="text-[#F5F5F7] font-semibold shrink-0">
                    Auto
                  </span>
                </div>
                <div className="p-1.5 sm:p-2 rounded bg-[#18181F] flex justify-between gap-1">
                  <span className="truncate">3-Way Matching</span>
                  <span className="text-[#4ADE80] font-semibold shrink-0">
                    Live
                  </span>
                </div>
                <div className="p-1.5 sm:p-2 rounded bg-[#18181F] flex justify-between gap-1">
                  <span className="truncate">Dynamics 365 Sync</span>
                  <span className="text-[#38BDF8] font-semibold shrink-0">
                    API
                  </span>
                </div>
              </div>
            </div>

            <div className="flex items-center justify-between text-[10px] sm:text-[11px] text-[#A1A1AA]">
              <span>Enterprise AI Partnership</span>
              <span>Zero-Touch Sync</span>
            </div>
          </div>
        </div>
      );

    /* 10. Procol B2B Workflow Partnership */
    case "yellow-sheet":
    default:
      return (
        <div
          data-ui="true"
          className="relative w-full aspect-[16/10] bg-[#FACC15] rounded-xl overflow-hidden flex items-end justify-center pt-4 sm:pt-5 px-4 sm:px-6 select-none"
        >
          <div className="w-full h-full bg-white rounded-t-xl p-4 sm:p-5 flex flex-col justify-between text-[#0F172A]">
            <div className="flex items-center justify-between gap-2">
              <div className="flex items-center gap-2 min-w-0">
                <BrandLogo brand="procol" size="sm" theme="light" />
                <span className="text-xs text-[#64748B] font-semibold">×</span>
                <BrandLogo
                  brand="barakat"
                  size="sm"
                  showText={false}
                  theme="light"
                />
              </div>
              <span className="px-2 sm:px-2.5 py-1 rounded-full bg-[#DCFCE7] text-[#15803D] text-[10px] sm:text-xs font-bold whitespace-nowrap">
                -30% Cycle Time
              </span>
            </div>

            <div className="my-auto">
              <div className="text-base sm:text-2xl font-bold leading-snug text-[#0F172A]">
                35M AED Annual Volume Across 150+ Partners
              </div>
              <div className="text-[11px] sm:text-xs text-[#475569] mt-1">
                Automated evaluation matrices &amp; B2B workflow orchestration
              </div>
            </div>

            <div className="flex items-center justify-between text-[10px] sm:text-[11px] text-[#64748B] font-medium">
              <span>Procol Platform Partnership</span>
              <span className="text-[#0F172A] font-semibold">
                150+ Active Partners
              </span>
            </div>
          </div>
        </div>
      );
  }
};

export default ProjectStageArt;
