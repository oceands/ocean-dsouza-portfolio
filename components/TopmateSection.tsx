"use client";

import React from "react";
import Link from "next/link";
import { Magnet } from "./react-bits/Magnet";
import { CONTACT_LINKS } from "@/data/projects";
import { Mail, ArrowRight, Linkedin, Calendar } from "lucide-react";

export const TopmateSection: React.FC = () => {
  return (
    <footer
      id="connect"
      className="w-full max-w-[1080px] mx-auto px-4 sm:px-8 pt-8 sm:pt-10 pb-14 sm:pb-16"
    >
      {/* Clean Two-Column Let's Connect Card (Contact button mails oceands06@gmail.com) */}
      <div className="rounded-[24px] sm:rounded-[28px] bg-canvas-surface p-6 sm:p-10 md:p-12 grid grid-cols-1 md:grid-cols-12 gap-6 sm:gap-8 items-center">
        {/* Left Side: Heading + Copy + 2 Action Buttons */}
        <div className="md:col-span-7 flex flex-col items-start justify-between space-y-5 sm:space-y-6">
          <div className="space-y-3 sm:space-y-4">
            <h2 className="text-2xl sm:text-4xl font-semibold tracking-[-0.02em] text-ink">
              Let&apos;s connect
            </h2>
            <p className="text-sm sm:text-lg text-ink-muted leading-relaxed max-w-[38ch]">
              I&apos;m always open to discussing roles in AI, Product
              or anything that helps you realize your vision. Just reach out!
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-3 pt-1">
            <Magnet strength={8}>
              <a
                href={CONTACT_LINKS.emailHref}
                className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-ink text-canvas font-semibold text-sm hover:opacity-90 transition-opacity"
              >
                <Mail className="w-4 h-4" />
                <span>Contact</span>
              </a>
            </Magnet>

            <Magnet strength={8}>
              <Link
                href="/projects"
                className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-canvas text-ink font-medium text-sm hover:bg-canvas-elevated transition-colors"
              >
                <span>See projects</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </Magnet>
          </div>
        </div>

        {/* Right Side: Nested Minimal Social & Copyright Card */}
        <div className="md:col-span-5">
          <div className="rounded-2xl bg-canvas py-8 sm:py-10 px-5 sm:px-6 flex flex-col items-center justify-center text-center">
            {/* 3 Icon Tiles: Email, LinkedIn, Topmate */}
            <div className="flex items-center gap-3 mb-5 sm:mb-6">
              <Magnet strength={8}>
                <a
                  href={CONTACT_LINKS.emailHref}
                  aria-label="Send an email to Ocean D'souza"
                  title={CONTACT_LINKS.email}
                  className="w-11 h-11 rounded-xl bg-canvas-surface flex items-center justify-center text-ink-muted hover:text-ink hover:bg-canvas-elevated transition-colors"
                >
                  <Mail className="w-4 h-4" />
                </a>
              </Magnet>

              <Magnet strength={8}>
                <a
                  href={CONTACT_LINKS.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  aria-label="Ocean D'souza on LinkedIn"
                  title="LinkedIn"
                  className="w-11 h-11 rounded-xl bg-canvas-surface flex items-center justify-center text-ink-muted hover:text-ink hover:bg-canvas-elevated transition-colors"
                >
                  <Linkedin className="w-4 h-4" />
                </a>
              </Magnet>

              <Magnet strength={8}>
                <a
                  href={CONTACT_LINKS.topmate}
                  target="_blank"
                  rel="noreferrer"
                  aria-label="Book a session with Ocean D'souza on Topmate"
                  title="Topmate"
                  className="w-11 h-11 rounded-xl bg-canvas-surface flex items-center justify-center text-ink-muted hover:text-ink hover:bg-canvas-elevated transition-colors"
                >
                  <Calendar className="w-4 h-4" />
                </a>
              </Magnet>
            </div>

            <div className="text-xs font-medium text-ink">
              {new Date().getFullYear()} © Ocean D&apos;souza
            </div>
            <div className="text-xs text-ink-subtle mt-1">
              Platform Product Manager · Dubai, UAE
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default TopmateSection;
