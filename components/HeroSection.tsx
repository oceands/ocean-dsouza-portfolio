"use client";

import React from "react";
import Link from "next/link";
import { TileReveal } from "./react-bits/TileReveal";
import { TiltedCard } from "./react-bits/TiltedCard";
import { Magnet } from "./react-bits/Magnet";
import { CONTACT_LINKS } from "@/data/projects";
import { Mail, ArrowRight } from "lucide-react";

export const HeroSection: React.FC = () => {
  return (
    <header className="w-full max-w-[1080px] mx-auto px-4 sm:px-8 pt-8 sm:pt-14 pb-12 sm:pb-20">
      <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-10 lg:gap-12 items-center">
        {/* Left Column: Platform PM Positioning + TileReveal Headline + 2 Action Buttons */}
        <div className="md:col-span-7 flex flex-col items-start text-left">
          <div className="inline-flex items-center gap-2 text-xs sm:text-sm font-medium text-ink-muted mb-3">
            <span className="w-2 h-2 rounded-full bg-[#22C55E]" />
            <span>Hey, I&apos;m Ocean D&apos;souza</span>
          </div>

          <TileReveal rows={4} cols={10}>
            <h1 className="text-[28px] sm:text-[40px] lg:text-[52px] font-semibold tracking-[-0.03em] leading-[1.08] text-ink max-w-[19ch]">
              Platform Product Manager &amp; AI Builder
            </h1>
          </TileReveal>

          <p className="mt-4 text-sm sm:text-base lg:text-lg text-ink-muted max-w-[50ch] leading-relaxed">
            I architect scalable digital platforms in Dubai, from high-converting
            checkout, payments, and loyalty engines to AI-native internal
            products and omnichannel data systems that feel calm, considered,
            and fast.
          </p>

          {/* Two Action Buttons (Contact mails oceands06@gmail.com) */}
          <div className="mt-7 sm:mt-8 flex flex-wrap items-center gap-3 w-full sm:w-auto">
            <Magnet strength={8}>
              <a
                href={CONTACT_LINKS.emailHref}
                className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-ink text-canvas font-semibold text-sm hover:opacity-90 transition-opacity"
              >
                <Mail className="w-4 h-4" />
                <span>Contact</span>
              </a>
            </Magnet>

            <Magnet strength={8}>
              <Link
                href="/projects"
                className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-canvas-surface text-ink font-medium text-sm hover:bg-canvas-elevated transition-colors"
              >
                <span>View My Work</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </Magnet>
          </div>
        </div>

        {/* Right Column: Framed Portrait Image (Responsive across iPhone SE, Pro Max & iPhone Duo) */}
        <div className="md:col-span-5 flex justify-center md:justify-end w-full">
          <div className="w-full max-w-[290px] sm:max-w-[340px] lg:max-w-[380px]">
            <TiltedCard maxAngle={4} scaleOnHover={1.01}>
              <div
                data-ui="true"
                className="w-full aspect-square rounded-[26px] bg-canvas-surface p-2 sm:p-2.5 overflow-hidden"
              >
                <div className="w-full h-full rounded-[18px] overflow-hidden relative bg-[#0F172A]">
                  <img
                    src="/ocean-portrait.jpg"
                    alt="Ocean D'souza working at his desk with laptop and notebook"
                    className="w-full h-full object-cover object-top"
                  />
                </div>
              </div>
            </TiltedCard>
          </div>
        </div>
      </div>
    </header>
  );
};

export default HeroSection;
