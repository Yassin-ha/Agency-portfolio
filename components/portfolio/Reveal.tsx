"use client";

import type { ReactNode } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { ease, reveal, viewportOnce } from "@/lib/animations";

type RevealProps = {
  children: ReactNode;
  className?: string;
  delay?: number;
  as?: "div" | "p" | "li" | "span";
};

/** Fade + short translate on scroll into view. Renders plain when motion is reduced. */
export function Reveal({ children, className, delay = 0, as = "div" }: RevealProps) {
  const reduce = useReducedMotion();
  const Tag = motion[as];
  if (reduce) {
    const Plain = as;
    return <Plain className={className}>{children}</Plain>;
  }
  return (
    <Tag
      className={className}
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={viewportOnce}
      transition={{ ...reveal, delay }}
    >
      {children}
    </Tag>
  );
}

type MaskLinesProps = {
  lines: readonly ReactNode[];
  className?: string;
  lineClassName?: string;
  /** Animate on mount (hero) instead of on scroll. */
  immediate?: boolean;
  delay?: number;
  as?: "h1" | "h2" | "p";
};

/** Headline where each line slides up from behind a mask. */
export function MaskLines({
  lines,
  className,
  lineClassName,
  immediate = false,
  delay = 0,
  as = "h2",
}: MaskLinesProps) {
  const reduce = useReducedMotion();
  const Tag = as;
  return (
    <Tag className={className}>
      {lines.map((line, i) => (
        <span key={i} className="block overflow-hidden pb-[0.06em] -mb-[0.06em]">
          {reduce ? (
            <span className={`block ${lineClassName ?? ""}`}>{line}</span>
          ) : (
            <motion.span
              className={`block ${lineClassName ?? ""}`}
              initial={{ y: "105%" }}
              {...(immediate
                ? { animate: { y: 0 } }
                : { whileInView: { y: 0 }, viewport: viewportOnce })}
              transition={{ duration: 1.1, ease, delay: delay + i * 0.09 }}
            >
              {line}
            </motion.span>
          )}
        </span>
      ))}
    </Tag>
  );
}
