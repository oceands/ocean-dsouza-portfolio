"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";

interface TileRevealProps {
  children: React.ReactNode;
  rows?: number;
  cols?: number;
  tileColor?: string;
  accentColor?: string;
  duration?: number;
  stagger?: number;
  className?: string;
}

/**
 * @reactbits-starter/tile-reveal-tw
 * Animated grid of tiles that parts in a diagonal wave to reveal the headline underneath,
 * adapting seamlessly to both dark and light mode and all mobile viewports.
 */
export const TileReveal: React.FC<TileRevealProps> = ({
  children,
  rows = 4,
  cols = 10,
  tileColor = "var(--tile-bg)",
  accentColor = "#22C55E",
  duration = 0.55,
  stagger = 0.032,
  className = "",
}) => {
  const [replayKey, setReplayKey] = useState(0);
  const totalTiles = rows * cols;

  return (
    <div
      key={replayKey}
      className={`relative inline-block max-w-full overflow-hidden rounded-2xl py-2 ${className}`}
    >
      {/* Revealed Content (Headline) */}
      <motion.div
        initial={{ opacity: 0, y: 10, filter: "blur(6px)" }}
        animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
        transition={{
          duration: 0.65,
          delay: (rows + cols) * stagger * 0.45,
          ease: [0.22, 1, 0.36, 1],
        }}
        className="relative z-10"
      >
        {children}
      </motion.div>

      {/* Animated Tile Grid Overlay (@reactbits-starter/tile-reveal-tw) */}
      <div
        aria-hidden="true"
        style={{
          gridTemplateColumns: `repeat(${cols}, minmax(0, 1fr))`,
          gridTemplateRows: `repeat(${rows}, minmax(0, 1fr))`,
        }}
        className="pointer-events-none absolute inset-0 z-20 grid gap-[1px]"
      >
        {Array.from({ length: totalTiles }).map((_, index) => {
          const r = Math.floor(index / cols);
          const c = index % cols;
          const waveDelay = (r + c) * stagger;

          return (
            <motion.span
              key={index}
              initial={{
                scaleY: 1,
                opacity: 1,
                backgroundColor:
                  (r + c) % 5 === 0 ? accentColor : tileColor,
              }}
              animate={{
                scaleY: 0,
                opacity: 0,
                backgroundColor: tileColor,
              }}
              transition={{
                duration,
                delay: waveDelay,
                ease: [0.22, 1, 0.36, 1],
              }}
              style={{ transformOrigin: r % 2 === 0 ? "top" : "bottom" }}
              className="w-full h-full rounded-[2px]"
            />
          );
        })}
      </div>

      {/* Subtle Ambient Tile Grid Backdrop that stays interactive */}
      <div
        aria-hidden="true"
        onClick={() => setReplayKey((prev) => prev + 1)}
        title="Click to replay tile reveal"
        style={{
          gridTemplateColumns: `repeat(${cols}, minmax(0, 1fr))`,
          gridTemplateRows: `repeat(${rows}, minmax(0, 1fr))`,
        }}
        className="absolute inset-0 z-0 grid gap-[1px] opacity-25 cursor-pointer"
      >
        {Array.from({ length: totalTiles }).map((_, index) => (
          <span
            key={index}
            className="w-full h-full bg-canvas-surface/40 rounded-[2px]"
          />
        ))}
      </div>
    </div>
  );
};

export default TileReveal;
