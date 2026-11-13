import { interpolate, spring } from "remotion";

export const springEntrance = (
  frame: number,
  fps: number,
  delayInFrames: number = 0,
  config = { damping: 14, stiffness: 120, mass: 0.9 }
) => {
  return spring({
    frame: frame - delayInFrames,
    fps,
    config,
  });
};

export const springPop = (
  frame: number,
  fps: number,
  delayInFrames: number = 0
) => {
  return spring({
    frame: frame - delayInFrames,
    fps,
    config: { damping: 12, stiffness: 220, mass: 0.8 },
  });
};

export const fadeIn = (
  frame: number,
  startFrame: number,
  durationInFrames: number = 15
) => {
  return interpolate(
    frame,
    [startFrame, startFrame + durationInFrames],
    [0, 1],
    {
      extrapolateLeft: "clamp",
      extrapolateRight: "clamp",
    }
  );
};

export const fadeOut = (
  frame: number,
  startFrame: number,
  durationInFrames: number = 15
) => {
  return interpolate(
    frame,
    [startFrame, startFrame + durationInFrames],
    [1, 0],
    {
      extrapolateLeft: "clamp",
      extrapolateRight: "clamp",
    }
  );
};

