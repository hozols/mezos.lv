"use client";

import { motion, type Variants } from "motion/react";
import type { ReactNode } from "react";

const container: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.09, delayChildren: 0.05 } },
};

const item: Variants = {
  hidden: { opacity: 0, y: 22 },
  show: { opacity: 1, y: 0, transition: { duration: 0.65, ease: [0.22, 1, 0.36, 1] } },
};

export function RevealGroup({ children, className }: { children: ReactNode; className?: string }) {
  return (
    <motion.div
      variants={container}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: "-10% 0px" }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export function RevealItem({ children, className }: { children: ReactNode; className?: string }) {
  return (
    <motion.div variants={item} className={className}>
      {children}
    </motion.div>
  );
}

export function SectionTitle({ title, kicker }: { title: string; kicker?: string }) {
  return (
    <RevealGroup className="mb-14 max-w-2xl">
      {kicker && <RevealItem><p className="text-lichen mb-3">{kicker}</p></RevealItem>}
      <RevealItem>
        <h2 className="text-4xl sm:text-5xl font-medium text-bone leading-[1.08] text-balance">{title}</h2>
      </RevealItem>
    </RevealGroup>
  );
}
