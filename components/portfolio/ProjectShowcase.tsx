"use client";

import { useRef, useState } from "react";
import {
  motion,
  useMotionValueEvent,
  useReducedMotion,
  useScroll,
  useSpring,
  useTransform,
} from "framer-motion";
import { projects } from "@/data/projects";
import { MaskLines } from "./Reveal";
import { ProjectPanel, ProjectStacked } from "./Project";
import { ProjectNavigation } from "./ProjectNavigation";

export function ProjectShowcase() {
  const outerRef = useRef<HTMLDivElement>(null);
  const reduce = !!useReducedMotion();
  const [activeIndex, setActiveIndex] = useState(0);
  const count = projects.length;

  const { scrollYProgress } = useScroll({ target: outerRef, offset: ["start start", "end end"] });
  // Light smoothing so wheel notches don't make the track feel steppy.
  const progress = useSpring(scrollYProgress, { stiffness: 140, damping: 32, mass: 0.6, restDelta: 0.0005 });
  const x = useTransform(progress, [0, 1], ["0vw", `${-(count - 1) * 100}vw`]);

  useMotionValueEvent(progress, "change", (v) => {
    const next = Math.min(count - 1, Math.max(0, Math.round(v * (count - 1))));
    setActiveIndex((prev) => (prev === next ? prev : next));
  });

  const scrollToProject = (index: number) => {
    const el = outerRef.current;
    if (!el) return;
    const top = el.getBoundingClientRect().top + window.scrollY;
    const range = el.offsetHeight - window.innerHeight;
    window.scrollTo({ top: top + (range * index) / (count - 1), behavior: reduce ? "auto" : "smooth" });
  };

  return (
    <section id="work" aria-labelledby="work-title" className="border-t border-line">
      <div className="mx-auto max-w-[1600px] px-5 pt-20 pb-6 md:px-10 md:pt-32 md:pb-10 lg:pb-0">
        <MaskLines
          className="font-display text-[clamp(2.75rem,10vw,9rem)]"
          lines={["Selected work"]}
        />
        <span id="work-title" className="sr-only">
          Selected work
        </span>
      </div>

      {/* Desktop: sticky viewport, vertical scroll drives the horizontal track. */}
      <div
        ref={outerRef}
        style={{ height: `${count * 100}vh` }}
        className={reduce ? "hidden" : "relative hidden lg:block"}
      >
        <div className="sticky top-0 h-svh overflow-hidden">
          <motion.div style={{ x }} className="flex h-full will-change-transform" >
            {projects.map((project, i) => (
              <ProjectPanel
                key={project.slug}
                project={project}
                index={i}
                count={count}
                progress={progress}
                reduce={reduce}
              />
            ))}
          </motion.div>
          <ProjectNavigation
            projects={projects}
            activeIndex={activeIndex}
            progress={scrollYProgress}
            onSelect={scrollToProject}
          />
        </div>
      </div>

      {/* Mobile / tablet (and reduced motion everywhere): vertical case studies. */}
      <div className={reduce ? "block" : "lg:hidden"}>
        {projects.map((project) => (
          <ProjectStacked key={project.slug} project={project} />
        ))}
      </div>
    </section>
  );
}
