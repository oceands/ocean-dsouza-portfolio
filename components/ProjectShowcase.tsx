"use client";

import React, { useRef, useState } from "react";
import Link from "next/link";
import {
  ProjectItem,
  HOME_SELECTED_WORKS,
  ALL_PROJECTS,
  CONTACT_LINKS,
} from "@/data/projects";
import { ProjectStageArt } from "./ProjectStageArt";
import { BrandLogo } from "./BrandLogo";
import { TiltedCard } from "./react-bits/TiltedCard";
import { Magnet } from "./react-bits/Magnet";
import {
  ChevronLeft,
  ChevronRight,
  LayoutGrid,
  GalleryHorizontalEnd,
  ArrowRight,
  X,
} from "lucide-react";

interface ProjectShowcaseProps {
  mode?: "home-selected" | "all-projects";
}

export const ProjectShowcase: React.FC<ProjectShowcaseProps> = ({
  mode = "home-selected",
}) => {
  const [viewMode, setViewMode] = useState<"grid" | "carousel">("grid");
  const [filterTab, setFilterTab] = useState<"all" | "project" | "partnership">(
    "all"
  );
  const [activeProject, setActiveProject] = useState<ProjectItem | null>(null);
  const carouselRef = useRef<HTMLDivElement>(null);

  const displayedProjects =
    mode === "home-selected"
      ? HOME_SELECTED_WORKS
      : ALL_PROJECTS.filter((p) =>
          filterTab === "all" ? true : p.section === filterTab
        );

  const scrollCarousel = (dir: "prev" | "next") => {
    if (!carouselRef.current) return;
    const width = carouselRef.current.clientWidth;
    carouselRef.current.scrollBy({
      left: dir === "next" ? width * 0.72 : -width * 0.72,
      behavior: "smooth",
    });
  };

  return (
    <>
      <section
        id="work"
        className="w-full max-w-[1080px] mx-auto px-4 sm:px-8 py-8 sm:py-16"
      >
        {/* Section Header Row + Filter / View Mode Controls */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-7 sm:mb-8">
          <div>
            <h2 className="text-xl sm:text-2xl font-semibold tracking-[-0.02em] text-ink">
              {mode === "home-selected"
                ? "Selected work"
                : "All platform projects & partnerships"}
            </h2>
            <p className="text-xs sm:text-sm text-ink-muted mt-1">
              {mode === "home-selected"
                ? "2 flagship consumer platform initiatives and 2 enterprise AI & SaaS platform partnerships."
                : "10 shipped consumer platforms, payment engines, omnichannel data systems, and enterprise AI partnerships."}
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-2">
            {/* Category Filter Pills on /projects page */}
            {mode === "all-projects" && (
              <div
                role="group"
                aria-label="Filter projects by type"
                className="inline-flex items-center rounded-lg bg-canvas-surface p-1 overflow-x-auto max-w-full no-scrollbar"
              >
                {[
                  { id: "all", label: "All (10)" },
                  { id: "project", label: "Projects (6)" },
                  { id: "partnership", label: "Partnerships (4)" },
                ].map((tab) => (
                  <button
                    key={tab.id}
                    type="button"
                    onClick={() =>
                      setFilterTab(tab.id as "all" | "project" | "partnership")
                    }
                    className={`px-2.5 sm:px-3 py-1.5 rounded-md text-xs font-medium transition-colors whitespace-nowrap ${
                      filterTab === tab.id
                        ? "bg-[#22C55E] text-[#0A0A0A] font-semibold"
                        : "text-ink-muted hover:text-ink"
                    }`}
                  >
                    {tab.label}
                  </button>
                ))}
              </div>
            )}

            {/* Grid / Carousel View Switcher */}
            <div
              role="group"
              aria-label="Display mode"
              className="inline-flex items-center rounded-lg bg-canvas-surface p-1"
            >
              <button
                type="button"
                onClick={() => setViewMode("grid")}
                className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-md text-xs font-medium transition-colors ${
                  viewMode === "grid"
                    ? "bg-canvas-elevated text-ink"
                    : "text-ink-muted hover:text-ink"
                }`}
              >
                <LayoutGrid className="w-3.5 h-3.5" />
                <span>Grid</span>
              </button>
              <button
                type="button"
                onClick={() => setViewMode("carousel")}
                className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-md text-xs font-medium transition-colors ${
                  viewMode === "carousel"
                    ? "bg-canvas-elevated text-ink"
                    : "text-ink-muted hover:text-ink"
                }`}
              >
                <GalleryHorizontalEnd className="w-3.5 h-3.5" />
                <span>Carousel</span>
              </button>
            </div>

            {viewMode === "carousel" && (
              <div className="flex items-center gap-1.5 ml-1">
                <Magnet strength={8}>
                  <button
                    type="button"
                    onClick={() => scrollCarousel("prev")}
                    aria-label="Previous project"
                    className="p-2 rounded-lg bg-canvas-surface text-ink-muted hover:text-ink hover:bg-canvas-elevated transition-colors"
                  >
                    <ChevronLeft className="w-4 h-4" />
                  </button>
                </Magnet>
                <Magnet strength={8}>
                  <button
                    type="button"
                    onClick={() => scrollCarousel("next")}
                    aria-label="Next project"
                    className="p-2 rounded-lg bg-canvas-surface text-ink-muted hover:text-ink hover:bg-canvas-elevated transition-colors"
                  >
                    <ChevronRight className="w-4 h-4" />
                  </button>
                </Magnet>
              </div>
            )}
          </div>
        </div>

        {/* Mode A: 2-Column Visual Card Grid (Responsive for iPhone, iPhone Duo & Desktop) */}
        {viewMode === "grid" ? (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-10 sm:gap-y-12">
            {displayedProjects.map((project) => (
              <article key={project.id} className="group">
                <button
                  type="button"
                  onClick={() => setActiveProject(project)}
                  className="w-full text-left focus:outline-none"
                >
                  <TiltedCard maxAngle={4} scaleOnHover={1.01}>
                    <ProjectStageArt project={project} />
                  </TiltedCard>

                  {/* Unboxed Caption Below Stage */}
                  <div className="mt-3.5 space-y-1">
                    <div className="flex flex-wrap items-center justify-between gap-2 text-xs text-ink-subtle">
                      <span className="inline-flex items-center gap-1.5 min-w-0">
                        <span
                          className={`px-2 py-0.5 rounded text-[10px] font-semibold shrink-0 ${
                            project.section === "partnership"
                              ? "bg-[#22C55E]/15 text-[#22C55E]"
                              : "bg-canvas-surface text-ink-muted"
                          }`}
                        >
                          {project.section === "partnership"
                            ? "Partnership"
                            : "Platform"}
                        </span>
                        <span className="truncate">{project.company}</span>
                      </span>
                      <span className="text-ink-muted font-medium shrink-0">
                        {project.headlineMetric}
                      </span>
                    </div>

                    <h3 className="text-base font-semibold text-ink group-hover:text-[#22C55E] transition-colors">
                      {project.title}
                    </h3>

                    <p className="text-sm text-ink-muted leading-relaxed">
                      {project.caption}
                    </p>
                  </div>
                </button>
              </article>
            ))}
          </div>
        ) : (
          /* Mode B: Interactive Horizontal Scroll-Snap Carousel */
          <div
            ref={carouselRef}
            className="flex gap-4 sm:gap-6 overflow-x-auto snap-x snap-mandatory no-scrollbar pb-4 -mx-4 px-4 sm:mx-0 sm:px-0"
          >
            {displayedProjects.map((project) => (
              <article
                key={project.id}
                className="snap-start shrink-0 w-[86vw] sm:w-[440px] md:w-[490px] group"
              >
                <button
                  type="button"
                  onClick={() => setActiveProject(project)}
                  className="w-full text-left focus:outline-none"
                >
                  <TiltedCard maxAngle={4} scaleOnHover={1.01}>
                    <ProjectStageArt project={project} />
                  </TiltedCard>

                  <div className="mt-3.5 space-y-1">
                    <div className="flex items-center justify-between gap-2 text-xs text-ink-subtle">
                      <span className="truncate">
                        {project.category} · {project.company}
                      </span>
                      <span className="text-ink-muted font-medium shrink-0">
                        {project.headlineMetric}
                      </span>
                    </div>

                    <h3 className="text-base font-semibold text-ink group-hover:text-[#22C55E] transition-colors">
                      {project.title}
                    </h3>

                    <p className="text-sm text-ink-muted leading-relaxed">
                      {project.caption}
                    </p>
                  </div>
                </button>
              </article>
            ))}
          </div>
        )}

        {/* Bottom "All Projects Page" Button on Home Page */}
        {mode === "home-selected" && (
          <div className="mt-12 sm:mt-14 flex flex-col sm:flex-row sm:items-center justify-between gap-4 p-5 sm:p-6 rounded-2xl bg-canvas-surface">
            <div>
              <div className="text-base font-semibold text-ink">
                Explore all 10 platform projects &amp; partnerships
              </div>
              <p className="text-xs sm:text-sm text-ink-muted mt-0.5">
                Includes BEXA AI Intelligence, FreshCoins Loyalty Engine, GMG
                Omnichannel Platform (50+ Nike &amp; SSS stores), Procol B2B
                Platform, and IServ.
              </p>
            </div>

            <Magnet strength={10}>
              <Link
                href="/projects"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-ink text-canvas font-semibold text-sm hover:opacity-90 transition-opacity shrink-0"
              >
                <span>View All Projects</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </Magnet>
          </div>
        )}
      </section>

      {/* Case Study Deep-Dive Modal when any project card is clicked */}
      {activeProject && (
        <div
          role="dialog"
          aria-modal="true"
          aria-labelledby="modal-project-title"
          className="fixed inset-0 z-50 bg-black/80 flex items-end sm:items-center justify-center p-0 sm:p-6 overflow-y-auto"
          onClick={() => setActiveProject(null)}
        >
          <div
            className="w-full max-w-2xl rounded-t-3xl sm:rounded-2xl bg-canvas-surface p-5 sm:p-8 text-ink sm:my-auto max-h-[92dvh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-start justify-between gap-4 mb-5">
              <div className="space-y-2 min-w-0">
                <div className="flex flex-wrap items-center gap-2.5">
                  <BrandLogo brand={activeProject.brandKey} size="sm" />
                  {activeProject.partnerBrandKey && (
                    <>
                      <span className="text-xs text-ink-muted">×</span>
                      <BrandLogo
                        brand={activeProject.partnerBrandKey}
                        size="sm"
                      />
                    </>
                  )}
                </div>
                <div className="text-xs text-ink-muted">
                  {activeProject.company} · {activeProject.period}
                </div>
                <h3
                  id="modal-project-title"
                  className="text-lg sm:text-2xl font-bold text-ink"
                >
                  {activeProject.title}
                </h3>
              </div>

              <button
                type="button"
                onClick={() => setActiveProject(null)}
                aria-label="Close case study"
                className="p-2 rounded-lg bg-canvas-elevated text-ink-muted hover:text-ink transition-colors shrink-0"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            {/* Visual Stage Inside Modal */}
            <div className="mb-6">
              <ProjectStageArt project={activeProject} />
            </div>

            {/* Quantified Outcomes Row */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5 sm:gap-3 mb-6">
              {activeProject.outcomes.map((o, idx) => (
                <div key={idx} className="p-3.5 rounded-xl bg-canvas">
                  <div className="text-lg sm:text-xl font-bold text-[#22C55E]">
                    {o.value}
                  </div>
                  <div className="text-xs text-ink-muted mt-0.5">{o.label}</div>
                </div>
              ))}
            </div>

            {/* Problem & Execution */}
            <div className="space-y-4 text-sm">
              <div>
                <div className="font-semibold text-ink mb-1">
                  Platform Challenge
                </div>
                <p className="text-ink-muted leading-relaxed">
                  {activeProject.problem}
                </p>
              </div>

              <div>
                <div className="font-semibold text-ink mb-2">
                  What I Shipped
                </div>
                <ul className="space-y-2 text-ink-muted">
                  {activeProject.execution.map((step, sIdx) => (
                    <li key={sIdx} className="flex items-start gap-2.5">
                      <span className="text-[#22C55E] mt-0.5">●</span>
                      <span className="leading-relaxed">{step}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <div className="font-semibold text-ink mb-2">
                  Architecture &amp; Stack
                </div>
                <div className="flex flex-wrap gap-2">
                  {activeProject.stack.map((tech, tIdx) => (
                    <span
                      key={tIdx}
                      className="px-3 py-1 rounded-md bg-canvas text-xs text-ink-muted"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Modal Footer CTA */}
            <div className="mt-8 pt-4 flex flex-wrap items-center justify-between gap-4">
              <a
                href={CONTACT_LINKS.emailHref}
                className="px-5 py-2.5 rounded-lg bg-[#22C55E] text-[#0A0A0A] font-semibold text-xs hover:opacity-90 transition-opacity"
              >
                Discuss This Project via Email
              </a>

              <button
                type="button"
                onClick={() => setActiveProject(null)}
                className="text-xs text-ink-muted hover:text-ink"
              >
                Close window
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default ProjectShowcase;
