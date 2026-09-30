"use client";

import { useRef } from "react";
import Image from "next/image";
import {
    motion,
    useReducedMotion,
    useScroll,
    useTransform,
} from "framer-motion";
import { ease } from "@/lib/animations";
import { MaskLines } from "./Reveal";

const HERO_IMAGE = "/images/hero/hero.png";

export function Hero() {
    const ref = useRef<HTMLElement>(null);
    const reduce = useReducedMotion();

    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start start", "end start"],
    });

    // Move the visual slightly downward while scrolling.
    const visualY = useTransform(
        scrollYProgress,
        [0, 1],
        ["0%", reduce ? "0%" : "10%"],
    );

    // Move the text slightly upward while scrolling.
    const textY = useTransform(
        scrollYProgress,
        [0, 1],
        ["0%", reduce ? "0%" : "-8%"],
    );

    return (
        <section
            id="home"
            ref={ref}
            aria-labelledby="hero-title"
            className="relative min-h-screen overflow-hidden pt-28 pb-16 md:pt-32 md:pb-20"
        >
            {/* =====================================================
                BACKGROUND ATMOSPHERE
            ====================================================== */}
            <div
                aria-hidden
                className="pointer-events-none absolute inset-0 overflow-hidden"
            >
                {/* Main subtle orange atmosphere */}
                <div
                    className="
                        absolute
                        left-1/2
                        top-1/2
                        size-[500px]
                        -translate-x-1/2
                        -translate-y-1/2
                        rounded-full
                        bg-accent/[0.06]
                        blur-[140px]
                        lg:left-[72%]
                    "
                />

                {/* Secondary subtle glow */}
                <div
                    className="
                        absolute
                        right-[-15%]
                        top-[20%]
                        hidden
                        size-[500px]
                        rounded-full
                        bg-accent/[0.035]
                        blur-[120px]
                        lg:block
                    "
                />
            </div>

            {/* =====================================================
                MAIN HERO GRID
            ====================================================== */}
            <div
                className="
                    relative
                    mx-auto
                    grid
                    min-h-[calc(100vh-8rem)]
                    max-w-[1600px]
                    items-center
                    gap-10
                    px-5
                    md:px-10
                    lg:grid-cols-[0.85fr_1.15fr]
                    lg:gap-4
                    xl:px-12
                "
            >
                {/* =================================================
                    LEFT — HERO CONTENT
                ================================================== */}
                <motion.div
                    style={{ y: textY }}
                    className="relative z-20 max-w-3xl"
                >
                    {/* Small eyebrow */}
                    <motion.p
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{
                            duration: 0.8,
                            ease,
                            delay: 0.1,
                        }}
                        className="
                            mb-6
                            text-[0.7rem]
                            font-medium
                            uppercase
                            tracking-[0.3em]
                            text-accent
                            md:mb-7
                        "
                    >
                        Digital studio
                    </motion.p>

                    {/* Main headline */}
                    <MaskLines
                        as="h1"
                        immediate
                        delay={0.15}
                        className="
                            font-display
                            text-[clamp(3rem,6.5vw,6.8rem)]
                            leading-[0.88]
                            tracking-[-0.045em]
                        "
                        lines={[
                            "We build",
                            "digital",
                            <span key="experience" className="text-accent">
                                experiences
                            </span>,
                            "that move.",
                        ]}
                    />

                    {/* Accessible heading */}
                    <span id="hero-title" className="sr-only">
                        We build digital experiences that move.
                    </span>

                    {/* Description */}
                    <motion.p
                        initial={{ opacity: 0, y: 18 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{
                            duration: 0.9,
                            ease,
                            delay: 0.75,
                        }}
                        className="
                            mt-8
                            max-w-lg
                            text-sm
                            leading-relaxed
                            text-muted
                            md:mt-10
                            md:text-base
                            lg:text-lg
                        "
                    >
                        Modern websites, interactive interfaces and digital
                        experiences designed to help businesses stand out
                        online.
                    </motion.p>

                    {/* Scroll indicator */}
                    <motion.a
                        href="#intro"
                        initial={{ opacity: 0, y: 12 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{
                            duration: 0.9,
                            ease,
                            delay: 1,
                        }}
                        className="
                            group
                            mt-10
                            inline-flex
                            min-h-11
                            items-center
                            gap-4
                            md:mt-12
                        "
                    >
                        <span
                            className="
                                relative
                                grid
                                size-10
                                shrink-0
                                place-items-center
                                rounded-full
                                border
                                border-accent/70
                                transition-colors
                                duration-300
                                group-hover:bg-accent
                            "
                        >
                            <motion.span
                                aria-hidden
                                className="
                                    block
                                    h-2.5
                                    w-px
                                    bg-accent
                                    transition-colors
                                    duration-300
                                    group-hover:bg-ink
                                "
                                animate={
                                    reduce
                                        ? undefined
                                        : {
                                              y: [0, 4, 0],
                                              opacity: [1, 0.3, 1],
                                          }
                                }
                                transition={
                                    reduce
                                        ? undefined
                                        : {
                                              duration: 1.6,
                                              repeat: Infinity,
                                              ease,
                                          }
                                }
                            />
                        </span>

                        <span
                            className="
                                text-[0.68rem]
                                font-medium
                                uppercase
                                tracking-[0.24em]
                            "
                        >
                            Scroll to explore
                        </span>
                    </motion.a>
                </motion.div>

                {/* =================================================
                    RIGHT — LARGE HERO PROJECT COMPOSITION
                ================================================== */}
                <motion.div
                    style={{ y: visualY }}
                    className="
                        pointer-events-none
                        relative
                        z-10
                        mx-auto
                        w-full
                        lg:-mr-[14vw]
                        lg:w-[calc(100%+14vw)]
                    "
                >
                    {/* =================================================
                        ORANGE AMBIENT GLOW
                    ================================================== */}
                    <div
                        aria-hidden
                        className="
                            absolute
                            left-1/2
                            top-1/2
                            -z-10
                            aspect-square
                            w-[75%]
                            -translate-x-1/2
                            -translate-y-1/2
                            rounded-full
                            bg-accent/[0.16]
                            blur-[120px]
                        "
                    />

                    {/* =================================================
                        DECORATIVE ARC
                    ================================================== */}
                    <div
                        aria-hidden
                        className="
                            absolute
                            -right-10
                            -top-16
                            -z-10
                            hidden
                            size-[360px]
                            rounded-full
                            border
                            border-accent/25
                            lg:block
                        "
                    />

                    {/* =================================================
                        MAIN IMAGE
                        Transparent PNG containing Sakura + MedNova
                    ================================================== */}
                    <motion.div
                        initial={{
                            opacity: 0,
                            scale: 0.94,
                            x: 40,
                        }}
                        animate={{
                            opacity: 1,
                            scale: 1,
                            x: 0,
                        }}
                        transition={{
                            duration: 1.2,
                            ease,
                            delay: 0.25,
                        }}
                        className="relative w-full"
                    >
                        <Image
                            src={HERO_IMAGE}
                            alt="Sakura and MedNova website projects"
                            width={1664}
                            height={936}
                            priority
                            sizes="
                                (max-width: 640px) 100vw,
                                (max-width: 1024px) 90vw,
                                65vw
                            "
                            className="
                                h-auto
                                w-full
                                object-contain
                                drop-shadow-[0_30px_80px_rgba(0,0,0,0.55)]
                            "
                        />
                    </motion.div>

                    {/* =================================================
                        SMALL FLOATING ACCENT
                    ================================================== */}
                    <motion.div
                        aria-hidden
                        animate={
                            reduce
                                ? undefined
                                : {
                                      y: [0, -8, 0],
                                  }
                        }
                        transition={
                            reduce
                                ? undefined
                                : {
                                      duration: 4,
                                      repeat: Infinity,
                                      ease: "easeInOut",
                                  }
                        }
                        className="
                            absolute
                            -bottom-5
                            -left-5
                            hidden
                            size-12
                            rounded-full
                            border
                            border-accent/40
                            bg-ink
                            lg:block
                        "
                    >
                        <span
                            className="
                                absolute
                                left-1/2
                                top-1/2
                                size-1.5
                                -translate-x-1/2
                                -translate-y-1/2
                                rounded-full
                                bg-accent
                            "
                        />
                    </motion.div>

                    {/* =================================================
                        GROUND GLOW
                    ================================================== */}
                    <div
                        aria-hidden
                        className="
                            absolute
                            bottom-[-3%]
                            left-[15%]
                            -z-10
                            h-16
                            w-[70%]
                            rounded-full
                            bg-accent/[0.14]
                            blur-3xl
                        "
                    />
                </motion.div>
            </div>
        </section>
    );
}
