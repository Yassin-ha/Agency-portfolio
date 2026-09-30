"use client";

import Image from "next/image";
import { motion, useTransform, type MotionValue } from "framer-motion";
import { ArrowRight } from "lucide-react";
import type { Project } from "@/data/projects";
import { Reveal } from "./Reveal";

function Meta({ project }: { project: Project }) {
    return (
        <>
            <p className="text-[0.72rem] font-medium uppercase tracking-[0.24em] text-accent">
                {project.category}
            </p>
            <p className="mt-6 max-w-md text-base leading-relaxed text-muted md:text-lg">
                {project.description}
            </p>
            <ul className="mt-6 flex flex-wrap gap-x-5 gap-y-1 text-sm text-bone/80">
                {project.tech.map((t) => (
                    <li key={t}>{t}</li>
                ))}
            </ul>
            <a
                href={project.href}
                target="_blank"
                className="group mt-8 inline-flex min-h-11 items-center gap-3 border-b border-accent pb-1 text-[0.72rem] font-medium uppercase tracking-[0.24em] transition-colors hover:text-accent"
            >
                View project
                <ArrowRight
                    aria-hidden
                    className="size-4 transition-transform group-hover:translate-x-1"
                />
            </a>
        </>
    );
}

/* ---------- Desktop: one full-viewport panel inside the sticky track ---------- */

type PanelProps = {
    project: Project;
    index: number;
    count: number;
    progress: MotionValue<number>;
    reduce: boolean;
};

export function ProjectPanel({
    project,
    index,
    count,
    progress,
    reduce,
}: PanelProps) {
    const step = 1 / (count - 1);
    const center = index * step;
    const enter = [center - step, center - step * 0.15];
    const exit = [center - step, center, center + step];

    // Reveal as the panel slides in; first panel is fully revealed from the start.
    const clip = useTransform(
        progress,
        enter,
        index === 0 || reduce
            ? ["inset(0% 0% 0% 0%)", "inset(0% 0% 0% 0%)"]
            : ["inset(0% 100% 0% 0%)", "inset(0% 0% 0% 0%)"],
    );
    const imgX = useTransform(
        progress,
        exit,
        reduce ? ["0%", "0%", "0%"] : ["8%", "0%", "-8%"],
    );
    const imgScale = useTransform(
        progress,
        exit,
        reduce ? [1, 1, 1] : [1.12, 1.04, 1.12],
    );
    const textOpacity = useTransform(
        progress,
        exit,
        index === 0 ? [1, 1, 0] : [0, 1, 0],
    );
    const textY = useTransform(
        progress,
        exit,
        reduce ? [0, 0, 0] : [40, 0, -40],
    );
    const mobileY = useTransform(
        progress,
        exit,
        reduce ? [0, 0, 0] : [80, 0, -60],
    );

    return (
        <article
            aria-labelledby={`project-${project.slug}`}
            className="relative grid h-svh w-screen shrink-0 grid-cols-12 items-center gap-6 px-10 pt-20 pb-24"
        >
            <motion.div
                style={{ opacity: textOpacity, y: textY }}
                className="relative z-10 col-span-4 xl:col-span-4"
            >
                <span
                    aria-hidden
                    className="font-display block text-[clamp(5rem,11vw,11rem)] text-transparent [-webkit-text-stroke:1px_rgb(241_238_232/0.45)]"
                >
                    {project.number}
                </span>
                <h3
                    id={`project-${project.slug}`}
                    className="font-display -mt-2 mb-4 text-[clamp(2.75rem,6vw,6.5rem)]"
                >
                    {project.title}
                </h3>
                <Meta project={project} />
            </motion.div>

            <div className="relative col-span-8 col-start-5 xl:col-span-8">
                <motion.div
                    style={{ clipPath: clip }}
                    className="relative aspect-video w-full overflow-hidden"
                >
                    <motion.div
                        style={{ x: imgX, scale: imgScale }}
                        className="absolute inset-0 will-change-transform"
                    >
                        <Image
                            src={project.desktop}
                            alt={project.desktopAlt}
                            fill
                            sizes="(min-width: 1024px) 66vw, 100vw"
                            quality={80}
                            className="object-cover"
                        />
                    </motion.div>
                </motion.div>
                <motion.div
                    style={{ y: mobileY }}
                    className="absolute -bottom-10 -left-16 z-10 w-[14%] border border-line bg-ink"
                >
                    <Image
                        src={project.mobile}
                        alt={project.mobileAlt}
                        width={786}
                        height={1704}
                        sizes="14vw"
                        quality={75}
                        className="h-auto w-full"
                    />
                </motion.div>
            </div>
        </article>
    );
}

/* ---------- Mobile / tablet / reduced motion: clean vertical layout ---------- */

export function ProjectStacked({ project }: { project: Project }) {
    return (
        <article
            aria-labelledby={`project-m-${project.slug}`}
            className="border-t border-line px-5 py-16 md:px-10 md:py-24"
        >
            <Reveal>
                <div className="relative aspect-[16/10] w-full overflow-hidden">
                    <Image
                        src={project.desktop}
                        alt={project.desktopAlt}
                        fill
                        sizes="(min-width: 768px) 90vw, 100vw"
                        quality={75}
                        className="object-cover"
                    />
                </div>
            </Reveal>
            <div className="mt-8 grid gap-8 md:grid-cols-12">
                <Reveal className="md:col-span-6">
                    <span
                        aria-hidden
                        className="font-display block text-6xl text-transparent [-webkit-text-stroke:1px_rgb(241_238_232/0.45)] md:text-8xl"
                    >
                        {project.number}
                    </span>
                    <h3
                        id={`project-m-${project.slug}`}
                        className="font-display text-[clamp(2.75rem,12vw,5.5rem)]"
                    >
                        {project.title}
                    </h3>
                </Reveal>
                <Reveal delay={0.08} className="md:col-span-6 md:pt-4">
                    <Meta project={project} />
                </Reveal>
            </div>
        </article>
    );
}
