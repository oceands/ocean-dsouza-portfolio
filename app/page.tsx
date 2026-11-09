import React from "react";
import ClickSpark from "@/components/react-bits/ClickSpark";
import HeroSection from "@/components/HeroSection";
import ProjectShowcase from "@/components/ProjectShowcase";
import TopmateSection from "@/components/TopmateSection";

export default function Home() {
  return (
    <ClickSpark sparkColor="#22C55E" sparkSize={8} sparkRadius={20}>
      <main className="min-h-[100dvh] bg-canvas text-ink">
        <HeroSection />
        <ProjectShowcase mode="home-selected" />
        <TopmateSection />
      </main>
    </ClickSpark>
  );
}
