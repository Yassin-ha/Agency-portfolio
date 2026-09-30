"use client";

import { motion, type MotionValue } from "framer-motion";
import type { Project } from "@/data/projects";

type Props = {
  projects: readonly Project[];
  activeIndex: number;
  progress: MotionValue<number>;
  onSelect: (index: number) => void;
};

/** Numbered project index with a scroll-linked progress rule. */
export function ProjectNavigation({ projects, activeIndex, progress, onSelect }: Props) {
  return (
    <nav
      aria-label="Project navigation"
      className="absolute inset-x-0 bottom-0 z-10 mx-auto flex max-w-[1600px] items-center gap-6 px-10 pb-8"
    >
      <ol className="flex items-center gap-6">
        {projects.map((p, i) => (
          <li key={p.slug}>
            <button
              type="button"
              onClick={() => onSelect(i)}
              aria-label={`Go to project ${p.number}: ${p.title}`}
              aria-current={i === activeIndex ? "step" : undefined}
              className={`min-h-11 text-[0.72rem] font-medium tracking-[0.24em] transition-colors hover:text-accent ${
                i === activeIndex ? "text-accent" : "text-muted"
              }`}
            >
              {p.number}
            </button>
          </li>
        ))}
      </ol>
      <div aria-hidden className="relative h-px flex-1 bg-line">
        <motion.div
          style={{ scaleX: progress }}
          className="absolute inset-0 origin-left bg-accent"
        />
      </div>
      <span aria-live="polite" className="w-32 text-right text-[0.72rem] uppercase tracking-[0.24em] text-muted">
        {projects[activeIndex].title}
      </span>
    </nav>
  );
}
