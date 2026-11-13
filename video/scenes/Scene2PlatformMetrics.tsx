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

export const Scene2PlatformMetrics: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  // Overall scene entrance & exit
  const sceneEntrance = fadeIn(frame, 0, 12);
  const sceneExit = fadeOut(frame, 96, 18);
  const sceneScale = interpolate(frame, [0, 114], [0.98, 1.02]);

  const cards = [
    {
      metric: "+24%",
      title: "BarakatFresh.ae Platform",
      detail: "Add-to-Cart lift via search autocomplete & PDP revamp",
      logo: "brands/barakat.png",
      tag: "D2C Commerce",
      accent: COLORS.emerald,
    },
    {
      metric: "+18%",
      title: "Checkout.com & Wallets",
      detail: "Checkout conversion lift via Apple Pay, Google Pay & BNPL",
      logo: null,
      customIcon: "PSPs & Wallets",
      tag: "Payment Architecture",
      accent: COLORS.cyan,
    },
    {
      metric: "5,000+",
      title: "BEXA Competitor AI",
      detail: "Daily SKUs and 10+ regional competitors monitored",
      logo: null,
      customIcon: "AI Radar",
      tag: "Market Intelligence",
      accent: "#A855F7",
    },
    {
      metric: "-85%",
      title: "Dynamics 365 ERP & GRV AI",
      detail: "Manual effort cut across 10,000+ monthly documents",
      logo: null,
      customIcon: "ERP Automation",
      tag: "Enterprise AI",
      accent: COLORS.gold,
    },
  ];

  return (
    <AbsoluteFill
      style={{
        opacity: sceneEntrance * sceneExit,
        transform: `scale(${sceneScale})`,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        padding: "0 140px",
        gap: "40px",
      }}
    >
      {/* Section Header */}
      <div style={{ textAlign: "center", display: "flex", flexDirection: "column", gap: "10px" }}>
        <div
          style={{
            fontSize: "15px",
            fontWeight: 700,
            letterSpacing: "0.18em",
            textTransform: "uppercase",
            color: COLORS.emerald,
            fontFamily: "system-ui, sans-serif",
          }}
        >
          Shipped Platform Architectures
        </div>
        <h2
          style={{
            fontSize: "52px",
            fontWeight: 800,
            letterSpacing: "-0.03em",
            color: COLORS.primary,
            margin: 0,
            fontFamily: "system-ui, sans-serif",
          }}
        >
          Measurable scale across consumer &amp; enterprise systems
        </h2>
      </div>

      {/* 4 Cards Grid */}
      <div
        style={{
          width: "100%",
          display: "grid",
          gridTemplateColumns: "repeat(4, 1fr)",
          gap: "24px",
        }}
      >
        {cards.map((card, idx) => {
          const cardSpring = springEntrance(frame, fps, 8 + idx * 7, {
            damping: 14,
            stiffness: 140,
            mass: 0.9,
          });

          return (
            <div
              key={idx}
              style={{
                opacity: cardSpring,
                transform: `translateY(${interpolate(
                  cardSpring,
                  [0, 1],
                  [50, 0]
                )}px) scale(${interpolate(cardSpring, [0, 1], [0.92, 1])})`,
                backgroundColor: COLORS.surface,
                borderRadius: "24px",
                padding: "32px 28px",
                border: `1px solid rgba(255, 255, 255, 0.08)`,
                boxShadow: "0 20px 50px rgba(0, 0, 0, 0.5)",
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
                height: "360px",
                position: "relative",
                overflow: "hidden",
              }}
            >
              {/* Top Accent Line */}
              <div
                style={{
                  position: "absolute",
                  top: 0,
                  left: 0,
                  right: 0,
                  height: "4px",
                  background: `linear-gradient(90deg, ${card.accent}, transparent)`,
                }}
              />

              {/* Tag & Icon */}
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                <span
                  style={{
                    fontSize: "12px",
                    fontWeight: 700,
                    textTransform: "uppercase",
                    letterSpacing: "0.08em",
                    color: card.accent,
                    padding: "4px 10px",
                    borderRadius: "6px",
                    backgroundColor: "rgba(255, 255, 255, 0.04)",
                    fontFamily: "system-ui, sans-serif",
                  }}
                >
                  {card.tag}
                </span>

                {card.logo && (
                  <div
                    style={{
                      width: "36px",
                      height: "36px",
                      borderRadius: "8px",
                      overflow: "hidden",
                    }}
                  >
                    <Img
                      src={staticFile(card.logo)}
                      style={{ width: "100%", height: "100%", objectFit: "cover" }}
                    />
                  </div>
                )}
              </div>

              {/* Massive Metric */}
              <div>
                <div
                  style={{
                    fontSize: "64px",
                    fontWeight: 800,
                    letterSpacing: "-0.04em",
                    color: COLORS.primary,
                    fontFamily: "system-ui, sans-serif",
                    lineHeight: 1,
                  }}
                >
                  {card.metric}
                </div>
                <div
                  style={{
                    fontSize: "20px",
                    fontWeight: 700,
                    color: COLORS.primary,
                    marginTop: "12px",
                    fontFamily: "system-ui, sans-serif",
                  }}
                >
                  {card.title}
                </div>
              </div>

              {/* Detail */}
              <p
                style={{
                  fontSize: "15px",
                  color: COLORS.muted,
                  margin: 0,
                  lineHeight: 1.45,
                  fontFamily: "system-ui, sans-serif",
                }}
              >
                {card.detail}
              </p>
            </div>
          );
        })}
      </div>

      {/* Partner Logos Strip */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: "40px",
          opacity: interpolate(frame, [30, 50], [0, 0.85], { extrapolateRight: "clamp" }),
        }}
      >
        <span
          style={{
            fontSize: "13px",
            color: COLORS.subtle,
            textTransform: "uppercase",
            letterSpacing: "0.12em",
            fontWeight: 600,
            fontFamily: "system-ui, sans-serif",
          }}
        >
          Strategic Ecosystem Partners:
        </span>
        {["SpotDraft AI CLM (48h TAT)", "Procol E-Sourcing (35M AED)", "GMG (50+ Nike & SSS Stores)", "Formcase GMBH (IServ)"].map(
          (partner, idx) => (
            <div
              key={idx}
              style={{
                fontSize: "15px",
                color: COLORS.muted,
                fontWeight: 600,
                fontFamily: "system-ui, sans-serif",
                display: "flex",
                alignItems: "center",
                gap: "8px",
              }}
            >
              <span style={{ color: COLORS.emerald }}>●</span>
              <span>{partner}</span>
            </div>
          )
        )}
      </div>
    </AbsoluteFill>
  );
};

