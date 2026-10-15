"use client";

import { motion, useMotionTemplate, useMotionValue, useSpring } from "motion/react";
import type { ReactNode, MouseEvent } from "react";

export default function TiltCard({
  children,
  className = "",
  intensity = 7,
}: {
  children: ReactNode;
  className?: string;
  intensity?: number;
}) {
  const rx = useMotionValue(0);
  const ry = useMotionValue(0);
  const gx = useMotionValue(50);
  const gy = useMotionValue(50);
  const srx = useSpring(rx, { stiffness: 180, damping: 18 });
  const sry = useSpring(ry, { stiffness: 180, damping: 18 });
  const glow = useMotionTemplate`radial-gradient(420px circle at ${gx}% ${gy}%, rgba(224,164,88,0.16), transparent 60%)`;

  const onMove = (e: MouseEvent<HTMLDivElement>) => {
    if (window.matchMedia("(hover: none)").matches) return;
    const r = e.currentTarget.getBoundingClientRect();
    const px = (e.clientX - r.left) / r.width;
    const py = (e.clientY - r.top) / r.height;
    ry.set((px - 0.5) * intensity * 2);
    rx.set((0.5 - py) * intensity * 2);
    gx.set(px * 100);
    gy.set(py * 100);
  };
  const onLeave = () => {
    rx.set(0);
    ry.set(0);
  };

  return (
    <motion.div
      onMouseMove={onMove}
      onMouseLeave={onLeave}
      style={{ rotateX: srx, rotateY: sry, transformStyle: "preserve-3d", transformPerspective: 900 }}
      className={`relative group ${className}`}
    >
      <motion.div
        style={{ background: glow }}
        className="absolute inset-0 rounded-[inherit] opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
        aria-hidden="true"
      />
      <div style={{ transform: "translateZ(12px)" }} className="relative h-full">
        {children}
      </div>
    </motion.div>
  );
}
