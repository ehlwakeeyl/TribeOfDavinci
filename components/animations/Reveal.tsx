"use client";

import { motion, type Variants } from "framer-motion";
import type { ReactNode } from "react";

// Ease + timing lifted from springs.estate's own reveal transitions
// (cubic-bezier(0.25,0.74,0.22,0.99), ~1.1s).
const EASE: [number, number, number, number] = [0.25, 0.74, 0.22, 0.99];

type RevealProps = {
  children: ReactNode;
  className?: string;
  as?: "div" | "section";
  variant?: "fade" | "scale";
  delay?: number;
  once?: boolean;
};

const variants: Record<"fade" | "scale", Variants> = {
  fade: {
    hidden: { opacity: 0, y: 46 },
    show: { opacity: 1, y: 0 },
  },
  scale: {
    hidden: { opacity: 0, scale: 0.92 },
    show: { opacity: 1, scale: 1 },
  },
};

export function Reveal({
  children,
  className,
  variant = "fade",
  delay = 0,
  once = true,
}: RevealProps) {
  return (
    <motion.div
      className={className}
      initial="hidden"
      whileInView="show"
      viewport={{ once, margin: "-80px" }}
      variants={variants[variant]}
      transition={{ duration: 1.1, delay, ease: EASE }}
    >
      {children}
    </motion.div>
  );
}

/** Same as Reveal but staggers its direct children — used for grids of cards. */
export function RevealGroup({
  children,
  className,
  stagger = 0.12,
}: {
  children: ReactNode;
  className?: string;
  stagger?: number;
}) {
  return (
    <motion.div
      className={className}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: "-80px" }}
      variants={{ show: { transition: { staggerChildren: stagger } } }}
    >
      {children}
    </motion.div>
  );
}

export function RevealItem({
  children,
  className,
  variant = "fade",
}: {
  children: ReactNode;
  className?: string;
  variant?: "fade" | "scale";
}) {
  return (
    <motion.div
      className={className}
      variants={variants[variant]}
      transition={{ duration: 1, ease: EASE }}
    >
      {children}
    </motion.div>
  );
}
