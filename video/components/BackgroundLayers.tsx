import React from "react";
import { AbsoluteFill, useCurrentFrame, useVideoConfig, interpolate } from "remotion";
import { COLORS } from "../constants";

export const BackgroundLayers: React.FC = () => {
  const frame = useCurrentFrame();
  const { width, height } = useVideoConfig();

  // Slow ambient drift of primary emerald glow
  const orb1X = interpolate(frame, [0, 300], [width * 0.2, width * 0.35]);
  const orb1Y = interpolate(frame, [0, 300], [height * 0.25, height * 0.4]);
  const orb2X = interpolate(frame, [0, 300], [width * 0.8, width * 0.65]);
  const orb2Y = interpolate(frame, [0, 300], [height * 0.75, height * 0.6]);

  const gridOpacity = interpolate(frame, [0, 40], [0, 0.15], {
    extrapolateRight: "clamp",
  });

  return (
    <AbsoluteFill style={{ backgroundColor: COLORS.background, overflow: "hidden" }}>
      {/* Layer 1: Ambient Radial Gradients */}
      <div
        style={{
          position: "absolute",
          left: orb1X - 450,
          top: orb1Y - 450,
          width: 900,
          height: 900,
          borderRadius: "50%",
          background: `radial-gradient(circle, rgba(34, 197, 94, 0.18) 0%, rgba(34, 197, 94, 0) 70%)`,
          filter: "blur(60px)",
          pointerEvents: "none",
        }}
      />
      <div
        style={{
          position: "absolute",
          left: orb2X - 400,
          top: orb2Y - 400,
          width: 800,
          height: 800,
          borderRadius: "50%",
          background: `radial-gradient(circle, rgba(56, 189, 248, 0.12) 0%, rgba(56, 189, 248, 0) 70%)`,
          filter: "blur(70px)",
          pointerEvents: "none",
        }}
      />

      {/* Layer 2: Subtle Grid Pattern */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          opacity: gridOpacity,
          backgroundImage: `
            linear-gradient(to right, rgba(255, 255, 255, 0.08) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(255, 255, 255, 0.08) 1px, transparent 1px)
          `,
          backgroundSize: "80px 80px",
          maskImage: "radial-gradient(ellipse at center, rgba(0,0,0,1) 40%, rgba(0,0,0,0) 80%)",
          WebkitMaskImage: "radial-gradient(ellipse at center, rgba(0,0,0,1) 40%, rgba(0,0,0,0) 80%)",
        }}
      />

      {/* Layer 3: Subtle Noise Grain */}
      <svg
        style={{
          position: "absolute",
          inset: 0,
          width: "100%",
          height: "100%",
          opacity: 0.04,
          pointerEvents: "none",
          mixBlendMode: "overlay",
        }}
      >
        <filter id="noiseFilter">
          <feTurbulence
            type="fractalNoise"
            baseFrequency="0.8"
            numOctaves="3"
            stitchTiles="stitch"
          />
        </filter>
        <rect width="100%" height="100%" filter="url(#noiseFilter)" />
      </svg>
    </AbsoluteFill>
  );
};

