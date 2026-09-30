"use client";

import { useRef } from "react";
import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import { process } from "@/data/services";
import { MaskLines, Reveal } from "./Reveal";

export function Process() {
  const ref = useRef<HTMLElement>(null);
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start 75%", "end 65%"] });
  const fill = useTransform(scrollYProgress, [0, 1], [reduce ? 1 : 0, 1]);

  return (
    <section
      id="process"
      ref={ref}
      aria-labelledby="process-title"
      className="border-t border-line px-5 py-24 md:px-10 md:py-40"
    >
      <div className="mx-auto max-w-[1600px]">
        <MaskLines
          className="font-display text-[clamp(2.75rem,8vw,8rem)]"
          lines={["How we work"]}
        />
        <span id="process-title" className="sr-only">
          How we work
        </span>

        <ol className="relative mt-16 grid gap-0 md:mt-24 md:grid-cols-4 md:gap-8">
          {/* Progress rule: vertical timeline on mobile, horizontal from md up. */}
          <div aria-hidden className="absolute top-0 bottom-0 left-0 w-px bg-line md:hidden">
            <motion.div style={{ scaleY: fill }} className="h-full origin-top bg-accent" />
          </div>
          <div aria-hidden className="absolute inset-x-0 top-0 hidden h-px bg-line md:block">
            <motion.div style={{ scaleX: fill }} className="h-full origin-left bg-accent" />
          </div>

          {process.map((step, i) => (
            <Reveal as="li" key={step.number} delay={i * 0.1} className="relative pt-0 pb-12 pl-8 md:pt-8 md:pb-0 md:pl-0">
              <span className="text-sm tracking-[0.2em] text-accent">{step.number}</span>
              <h3 className="font-display mt-4 text-[clamp(2rem,4vw,3.75rem)]">{step.title}</h3>
              <p className="mt-4 max-w-[16rem] text-base leading-relaxed text-muted">
                {step.description}
              </p>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  );
}
