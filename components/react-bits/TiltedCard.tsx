"use client";

import React, { useRef, useState } from "react";
import { motion } from "framer-motion";

interface TiltedCardProps {
  children: React.ReactNode;
  maxAngle?: number;
  scaleOnHover?: number;
  className?: string;
}

export const TiltedCard: React.FC<TiltedCardProps> = ({
  children,
  maxAngle = 5,
  scaleOnHover = 1.015,
  className = "",
}) => {
  const ref = useRef<HTMLDivElement>(null);
  const [rotate, setRotate] = useState({ x: 0, y: 0, scale: 1 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const rotateX = ((y - centerY) / centerY) * -maxAngle;
    const rotateY = ((x - centerX) / centerX) * maxAngle;

    setRotate({ x: rotateX, y: rotateY, scale: scaleOnHover });
  };

  const handleMouseLeave = () => {
    setRotate({ x: 0, y: 0, scale: 1 });
  };

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      animate={{
        rotateX: rotate.x,
        rotateY: rotate.y,
        scale: rotate.scale,
      }}
      transition={{ type: "spring", stiffness: 260, damping: 22 }}
      style={{ transformStyle: "preserve-3d", perspective: 1000 }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

export default TiltedCard;

