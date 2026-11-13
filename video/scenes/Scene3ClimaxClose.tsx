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
import { springEntrance, springPop, fadeIn, fadeOut } from "../utils/animations";

export const Scene3ClimaxClose: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  // Entrance animations (relative to start of this sequence, frame 0 = global frame 198)
  const sceneFade = fadeIn(frame, 0, 10);
  const exitFade = fadeOut(frame, 90, 12); // fade out at the very end

  // Shockwave ring expansion
  const shockwaveScale = interpolate(frame, [8, 45], [0.4, 2.4], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });
  const shockwaveOpacity = interpolate(frame, [8, 45], [0.8, 0], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  // Second shockwave
  const shockwave2Scale = interpolate(frame, [16, 55], [0.3, 2.8], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });
  const shockwave2Opacity = interpolate(frame, [16, 55], [0.6, 0], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  // Hero Logo spring pop
  const logoSpring = springPop(frame, fps, 6);
  const logoScale = interpolate(logoSpring, [0, 1], [0.3, 1.0]);
  const logoRotate = interpolate(logoSpring, [0, 1], [-15, 0]);

  // Headline spring
  const headlineSpring = springEntrance(frame, fps, 16, {
    damping: 14,
    stiffness: 150,
    mass: 0.9,
  });
  const headlineY = interpolate(headlineSpring, [0, 1], [30, 0]);

  // Subtitle / role spring
  const subtitleSpring = springEntrance(frame, fps, 24);
  const subtitleY = interpolate(subtitleSpring, [0, 1], [25, 0]);

  // Production URL Pill spring
  const pillSpring = springPop(frame, fps, 32);
  const pillScale = interpolate(pillSpring, [0, 1], [0.85, 1.0]);
  const pillGlowPulse = Math.sin((frame - 32) * 0.15) * 0.2 + 0.8;

  // Contact badges stagger
  const badgesSpring = springEntrance(frame, fps, 42);
  const badgesY = interpolate(badgesSpring, [0, 1], [20, 0]);

  return (
    <AbsoluteFill
      style={{
        opacity: sceneFade * exitFade,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        padding: "0 80px",
        fontFamily:
          '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", sans-serif',
      }}
    >
      {/* Central Ambient Glow */}
      <div
        style={{
          position: "absolute",
          width: 700,
          height: 700,
          borderRadius: "50%",
          background: `radial-gradient(circle, rgba(34, 197, 94, 0.22) 0%, rgba(56, 189, 248, 0.1) 40%, rgba(0,0,0,0) 70%)`,
          filter: "blur(70px)",
          pointerEvents: "none",
        }}
      />

      {/* Expanding shockwave rings */}
      <div
        style={{
          position: "absolute",
          width: 220,
          height: 220,
          borderRadius: "50%",
          border: `2px solid ${COLORS.emerald}`,
          transform: `scale(${shockwaveScale})`,
          opacity: shockwaveOpacity,
          pointerEvents: "none",
        }}
      />
      <div
        style={{
          position: "absolute",
          width: 220,
          height: 220,
          borderRadius: "50%",
          border: `1.5px solid ${COLORS.cyan}`,
          transform: `scale(${shockwave2Scale})`,
          opacity: shockwave2Opacity,
          pointerEvents: "none",
        }}
      />

      {/* Hero Logo Emblem */}
      <div
        style={{
          transform: `scale(${logoScale}) rotate(${logoRotate}deg)`,
          opacity: interpolate(logoSpring, [0, 0.2], [0, 1]),
          position: "relative",
          marginBottom: 32,
        }}
      >
        <div
          style={{
            width: 130,
            height: 130,
            borderRadius: 36,
            background: `linear-gradient(135deg, ${COLORS.surfaceElevated} 0%, ${COLORS.surface} 100%)`,
            border: `1.5px solid rgba(34, 197, 94, 0.4)`,
            boxShadow: `0 24px 60px rgba(0, 0, 0, 0.6), 0 0 50px rgba(34, 197, 94, 0.35)`,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            overflow: "hidden",
            position: "relative",
          }}
        >
          {/* Specular sheen */}
          <div
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              right: 0,
              height: "45%",
              background:
                "linear-gradient(180deg, rgba(255, 255, 255, 0.15) 0%, rgba(255, 255, 255, 0) 100%)",
            }}
          />
          <Img
            src={staticFile("icon.svg")}
            style={{
              width: 78,
              height: 78,
              objectFit: "contain",
              filter: "drop-shadow(0 4px 12px rgba(34, 197, 94, 0.4))",
            }}
          />
        </div>
      </div>

      {/* Headline: Personal Brand & Portfolio */}
      <div
        style={{
          opacity: headlineSpring,
          transform: `translateY(${headlineY}px)`,
          textAlign: "center",
          marginBottom: 12,
        }}
      >
        <h1
          style={{
            fontSize: 58,
            fontWeight: 800,
            letterSpacing: "-0.035em",
            color: COLORS.primary,
            margin: 0,
            lineHeight: 1.1,
          }}
        >
          Ocean D&apos;souza
        </h1>
      </div>

      {/* Role tag line */}
      <div
        style={{
          opacity: subtitleSpring,
          transform: `translateY(${subtitleY}px)`,
          textAlign: "center",
          marginBottom: 36,
        }}
      >
        <p
          style={{
            fontSize: 24,
            fontWeight: 500,
            color: COLORS.muted,
            margin: 0,
            letterSpacing: "0.01em",
          }}
        >
          Senior Technical &amp; Platform Product Manager &middot; Dubai, UAE
        </p>
      </div>

      {/* Production Live Domain Pill */}
      <div
        style={{
          opacity: interpolate(pillSpring, [0, 0.3], [0, 1]),
          transform: `scale(${pillScale})`,
          marginBottom: 38,
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 16,
            padding: "16px 36px",
            background: "rgba(18, 18, 22, 0.85)",
            border: `1.5px solid rgba(34, 197, 94, ${0.4 * pillGlowPulse})`,
            borderRadius: 9999,
            boxShadow: `0 20px 45px rgba(0, 0, 0, 0.5), 0 0 35px rgba(34, 197, 94, ${
              0.25 * pillGlowPulse
            })`,
            backdropFilter: "blur(16px)",
          }}
        >
          {/* Live pulsing status beacon */}
          <div
            style={{
              width: 12,
              height: 12,
              borderRadius: "50%",
              backgroundColor: COLORS.emerald,
              boxShadow: `0 0 16px ${COLORS.emerald}`,
            }}
          />
          <span
            style={{
              fontSize: 26,
              fontWeight: 600,
              color: COLORS.primary,
              letterSpacing: "-0.01em",
              fontFamily: "ui-monospace, SFMono-Regular, Menlo, monospace",
            }}
          >
            ocean-dsouza-portfolio.vercel.app
          </span>
          <svg
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke={COLORS.emerald}
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M7 17l9.2-9.2M17 17V8H8" />
          </svg>
        </div>
      </div>

      {/* Contact & Professional Connections Badges */}
      <div
        style={{
          opacity: badgesSpring,
          transform: `translateY(${badgesY}px)`,
          display: "flex",
          alignItems: "center",
          gap: 24,
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 10,
            padding: "10px 20px",
            background: "rgba(255, 255, 255, 0.04)",
            border: `1px solid ${COLORS.cardBorder}`,
            borderRadius: 12,
          }}
        >
          <svg
            width="18"
            height="18"
            viewBox="0 0 24 24"
            fill="none"
            stroke={COLORS.muted}
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <rect width="20" height="16" x="2" y="4" rx="2" />
            <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
          </svg>
          <span
            style={{
              fontSize: 16,
              fontWeight: 500,
              color: COLORS.muted,
            }}
          >
            oceands06@gmail.com
          </span>
        </div>

        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 10,
            padding: "10px 20px",
            background: "rgba(255, 255, 255, 0.04)",
            border: `1px solid ${COLORS.cardBorder}`,
            borderRadius: 12,
          }}
        >
          <svg
            width="18"
            height="18"
            viewBox="0 0 24 24"
            fill="none"
            stroke={COLORS.cyan}
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
            <rect width="4" height="12" x="2" y="9" />
            <circle cx="4" cy="4" r="2" />
          </svg>
          <span
            style={{
              fontSize: 16,
              fontWeight: 500,
              color: COLORS.muted,
            }}
          >
            linkedin.com/in/oceandsouza
          </span>
        </div>

        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 10,
            padding: "10px 20px",
            background: "rgba(255, 255, 255, 0.04)",
            border: `1px solid ${COLORS.cardBorder}`,
            borderRadius: 12,
          }}
        >
          <span
            style={{
              width: 8,
              height: 8,
              borderRadius: "50%",
              backgroundColor: COLORS.gold,
            }}
          />
          <span
            style={{
              fontSize: 16,
              fontWeight: 500,
              color: COLORS.muted,
            }}
          >
            topmate.io/ocean_dsouza
          </span>
        </div>
      </div>
    </AbsoluteFill>
  );
};

