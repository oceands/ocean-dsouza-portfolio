import React from "react";
import type { Metadata } from "next";
import ClickSpark from "@/components/react-bits/ClickSpark";
import ArchiveAndCredentials from "@/components/ArchiveAndCredentials";
import TopmateSection from "@/components/TopmateSection";

export const metadata: Metadata = {
  title: "About, Experience & Credentials",
  description:
    "Background, platform product management experience (Barakat Fresh, Formcase GMBH, GMG), Computer Science education at UOWD, and industry certifications of Ocean D'souza.",
  alternates: {
    canonical: "/about",
  },
};

export default function AboutPage() {
  return (
    <ClickSpark sparkColor="#22C55E" sparkSize={8} sparkRadius={20}>
      <main className="min-h-[100dvh] bg-canvas text-ink">
        <ArchiveAndCredentials />
        <TopmateSection />
      </main>
    </ClickSpark>
  );
}
