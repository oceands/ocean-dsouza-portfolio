import React from "react";
import { Composition, Sequence } from "remotion";
import { VIDEO_CONFIG } from "./constants";
import { BackgroundLayers } from "./components/BackgroundLayers";
import { Scene1HookReveal } from "./scenes/Scene1HookReveal";
import { Scene2PlatformMetrics } from "./scenes/Scene2PlatformMetrics";
import { Scene3ClimaxClose } from "./scenes/Scene3ClimaxClose";

export const LaunchVideoComposition: React.FC = () => {
  return (
    <>
      {/* Persistent dynamic background layers across all scenes */}
      <BackgroundLayers />

      {/* Scene 1: Hook & Reveal (0s - 3.2s) */}
      <Sequence from={0} durationInFrames={96} name="Scene 1: Hook & Reveal">
        <Scene1HookReveal />
      </Sequence>

      {/* Scene 2: Platform Metrics & Scale (3.0s - 6.8s) */}
      <Sequence from={90} durationInFrames={114} name="Scene 2: Platform Metrics">
        <Scene2PlatformMetrics />
      </Sequence>

      {/* Scene 3: Climax & Close (6.6s - 10.0s) */}
      <Sequence from={198} durationInFrames={102} name="Scene 3: Climax & Close">
        <Scene3ClimaxClose />
      </Sequence>
    </>
  );
};

export const RemotionRoot: React.FC = () => {
  return (
    <Composition
      id="ProductLaunch"
      component={LaunchVideoComposition}
      durationInFrames={VIDEO_CONFIG.durationInFrames}
      fps={VIDEO_CONFIG.fps}
      width={VIDEO_CONFIG.width}
      height={VIDEO_CONFIG.height}
    />
  );
};

