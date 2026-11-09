import React from "react";
import {
  AbsoluteFill,
  useCurrentFrame,
  useVideoConfig,
  staticFile,
  Img,
  interpolate,
} from "remotion";
import { COLORS } from "../constants";
import { springEntrance, fadeIn, fadeOut } from "../utils/animations";

export const Scene1HookReveal: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  // Entrance springs
  const pillProgress = springEntrance(frame, fps, 5);
  const titleProgress = springEntrance(frame, fps, 12, {
    damping: 13,
    stiffness: 140,
    mass: 0.9,
  });
  const subtitleProgress = springEntrance(frame, fps, 20);
  const tagsProgress = springEntrance(frame, fps, 28);
  const portraitProgress = springEntrance(frame, fps, 10, {
    damping: 15,
    stiffness: 110,
    mass: 1.0,
  });
  const badgeProgress = springEntrance(frame, fps, 35);

  // Scene exit at end of scene (frame 80-96)
  const exitOpacity = fadeOut(frame, 80, 16);
  const exitX = interpolate(frame, [80, 96], [0, -80], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });
  const exitScale = interpolate(frame, [80, 96], [1, 0.97], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  return (
    <AbsoluteFill
      style={{
        opacity: exitOpacity,
        transform: `translateX(${exitX}px) scale(${exitScale})`,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "0 140px",
      }}
    >
      <div
        style={{
          width: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          gap: "80px",
        }}
      >
        {/* Left Side: Editorial Typography & Role Positioning */}
        <div style={{ flex: 1.2, display: "flex", flexDirection: "column", gap: "24px" }}>
          {/* Status Pill */}
          <div
            style={{
              opacity: pillProgress,
              transform: `translateY(${interpolate(pillProgress, [0, 1], [20, 0])}px)`,
              display: "inline-flex",
              alignItems: "center",
              gap: "10px",
              padding: "10px 20px",
              borderRadius: "999px",
              backgroundColor: "rgba(255, 255, 255, 0.05)",
              border: `1px solid rgba(34, 197, 94, 0.3)`,
              width: "fit-content",
            }}
          >
            <div
              style={{
                width: "10px",
                height: "10px",
                borderRadius: "50%",
                backgroundColor: COLORS.emerald,
                boxShadow: `0 0 12px ${COLORS.emerald}`,
              }}
            />
            <span
              style={{
                fontSize: "16px",
                fontWeight: 600,
                letterSpacing: "0.08em",
                textTransform: "uppercase",
                color: COLORS.primary,
                fontFamily: "system-ui, sans-serif",
              }}
            >
              Live in Dubai, UAE · Platform Product Manager
            </span>
          </div>

          {/* Headline */}
          <div
            style={{
              opacity: titleProgress,
              transform: `translateY(${interpolate(titleProgress, [0, 1], [40, 0])}px)`,
            }}
          >
            <h1
              style={{
                fontSize: "82px",
                fontWeight: 800,
                letterSpacing: "-0.04em",
                lineHeight: 1.04,
                margin: 0,
                color: COLORS.primary,
                fontFamily: "system-ui, -apple-system, sans-serif",
              }}
            >
              Ocean D&apos;souza
            </h1>
            <div
              style={{
                fontSize: "36px",
                fontWeight: 600,
                color: COLORS.emerald,
                letterSpacing: "-0.02em",
                marginTop: "12px",
                fontFamily: "system-ui, sans-serif",
              }}
            >
              Platform Product Manager &amp; AI Builder
            </div>
          </div>

          {/* Subtitle Description */}
          <p
            style={{
              opacity: subtitleProgress,
              transform: `translateY(${interpolate(subtitleProgress, [0, 1], [24, 0])}px)`,
              fontSize: "24px",
              lineHeight: 1.5,
              color: COLORS.muted,
              margin: 0,
              maxWidth: "680px",
              fontFamily: "system-ui, sans-serif",
            }}
          >
            Scaling core e-commerce storefronts, checkout &amp; payment architectures,
            and AI-powered enterprise platforms that feel calm, fast, and robust.
          </p>

          {/* Capability Tags */}
          <div
            style={{
              opacity: tagsProgress,
              transform: `translateY(${interpolate(tagsProgress, [0, 1], [16, 0])}px)`,
              display: "flex",
              gap: "12px",
              marginTop: "8px",
            }}
          >
            {["Checkout & Wallets", "Omnichannel Data", "Enterprise AI & ERP"].map(
              (tag, idx) => (
                <div
                  key={idx}
                  style={{
                    padding: "8px 18px",
                    borderRadius: "10px",
                    backgroundColor: "rgba(255, 255, 255, 0.04)",
                    border: `1px solid ${COLORS.cardBorder}`,
                    fontSize: "15px",
                    color: COLORS.muted,
                    fontFamily: "system-ui, sans-serif",
                    fontWeight: 500,
                  }}
                >
                  {tag}
                </div>
              )
            )}
          </div>
        </div>

        {/* Right Side: Framed Portrait Card with Float & Glow */}
        <div
          style={{
            flex: 0.85,
            display: "flex",
            justifyContent: "center",
            position: "relative",
          }}
        >
          <div
            style={{
              opacity: portraitProgress,
              transform: `scale(${interpolate(
                portraitProgress,
                [0, 1],
                [0.9, 1]
              )}) translateY(${interpolate(
                portraitProgress,
                [0, 1],
                [40, 0]
              )}px) rotate(${interpolate(frame, [0, 96], [-1, 1])}deg)`,
              width: "480px",
              height: "480px",
              borderRadius: "36px",
              backgroundColor: COLORS.surface,
              padding: "14px",
              border: `1px solid rgba(255, 255, 255, 0.12)`,
              boxShadow: `0 30px 80px rgba(0, 0, 0, 0.7), 0 0 50px rgba(34, 197, 94, 0.15)`,
              position: "relative",
            }}
          >
            <div
              style={{
                width: "100%",
                height: "100%",
                borderRadius: "24px",
                overflow: "hidden",
                position: "relative",
              }}
            >
              <Img
                src={staticFile("ocean-portrait.jpg")}
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                  objectPosition: "top",
                }}
              />
            </div>

            {/* Floating Impact Badge */}
            <div
              style={{
                opacity: badgeProgress,
                transform: `scale(${interpolate(
                  badgeProgress,
                  [0, 1],
                  [0.8, 1]
                )}) translateY(${interpolate(
                  badgeProgress,
                  [0, 1],
                  [20, 0]
                )}px)`,
                position: "absolute",
                bottom: "-18px",
                left: "24px",
                backgroundColor: "#0D0D10",
                border: `1px solid ${COLORS.emerald}`,
                borderRadius: "16px",
                padding: "12px 22px",
                display: "flex",
                alignItems: "center",
                gap: "12px",
                boxShadow: "0 10px 30px rgba(0, 0, 0, 0.8)",
              }}
            >
              <div
                style={{
                  fontSize: "24px",
                  fontWeight: 800,
                  color: COLORS.emerald,
                  fontFamily: "system-ui, sans-serif",
                }}
              >
                5+ Years
              </div>
              <div
                style={{
                  fontSize: "13px",
                  color: COLORS.primary,
                  fontFamily: "system-ui, sans-serif",
                  lineHeight: 1.2,
                  fontWeight: 600,
                }}
              >
                Leading Digital Products &amp;<br />Platform Squads
              </div>
            </div>
          </div>
        </div>
      </div>
    </AbsoluteFill>
  );
};
