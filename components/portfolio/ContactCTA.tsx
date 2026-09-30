"use client";

import { useRef } from "react";
import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { site } from "@/data/site";
import { MaskLines, Reveal } from "./Reveal";

export function ContactCTA() {
  const ref = useRef<HTMLElement>(null);
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "center center"] });
  // Orange band wipes in from the left as the section arrives.
  const wipe = useTransform(scrollYProgress, [0, 1], [reduce ? 1 : 0, 1]);

  return (
    <section
      id="contact"
      ref={ref}
      aria-labelledby="contact-title"
      className="relative overflow-hidden border-t border-line px-5 py-24 md:px-10 md:py-44"
    >
      <div className="relative mx-auto max-w-[1600px]">
        <MaskLines
          className="font-display text-[clamp(2.6rem,9.4vw,10rem)]"
          lines={[
            "Have a project",
            "in mind?",
            <span key="a" className="text-accent">
              Let&rsquo;s build
            </span>,
            <span key="b" className="text-accent">
              something good.
            </span>,
          ]}
        />
        <span id="contact-title" className="sr-only">
          Have a project in mind? Let&rsquo;s build something good.
        </span>

        <Reveal className="mt-12 md:mt-16">
          <a
            href={`mailto:${site.email}?subject=New%20project`}
            className="group relative inline-flex min-h-14 items-center gap-4 overflow-hidden border border-accent px-8 text-sm font-medium uppercase tracking-[0.2em] text-bone transition-colors hover:text-ink"
          >
            <span
              aria-hidden
              className="absolute inset-0 z-0 origin-left scale-x-0 bg-accent transition-transform duration-500 ease-out group-hover:scale-x-100 group-focus-visible:scale-x-100"
            />
            <span className="relative">Start a project</span>
            <ArrowRight aria-hidden className="relative size-4 transition-transform group-hover:translate-x-1" />
          </a>
        </Reveal>
      </div>
      <motion.div
        aria-hidden
        style={{ scaleX: wipe }}
        className="absolute inset-x-0 bottom-0 h-1 origin-left bg-accent"
      />
    </section>
  );
}
