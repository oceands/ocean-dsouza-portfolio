import React from "react";
import type { Metadata } from "next";
import ClickSpark from "@/components/react-bits/ClickSpark";
import ProjectShowcase from "@/components/ProjectShowcase";
import TopmateSection from "@/components/TopmateSection";

export const metadata: Metadata = {
  title: "Projects & Platform Partnerships",
  description:
    "Explore 10 shipped consumer platforms, payment engines, omnichannel data systems, and enterprise AI partnerships led by Platform Product Manager Ocean D'souza.",
  alternates: {
    canonical: "/projects",
  },
};

export default function ProjectsPage() {
  return (
    <ClickSpark sparkColor="#22C55E" sparkSize={8} sparkRadius={20}>
      <main className="min-h-[100dvh] bg-canvas text-ink">
        <ProjectShowcase mode="all-projects" />
        <TopmateSection />
      </main>
    </ClickSpark>
  );
}
