import { MaskLines, Reveal } from "./Reveal";

export function Intro() {
  return (
    <section
      id="intro"
      aria-labelledby="intro-title"
      className="border-t border-line px-5 py-24 md:px-10 md:py-40"
    >
      <div className="mx-auto grid max-w-[1600px] gap-14 lg:grid-cols-12">
        <MaskLines
          className="font-display text-[clamp(2.4rem,7.4vw,7.5rem)] lg:col-span-8"
          lines={[
            "We don\u2019t just",
            "build websites.",
            <span key="a" className="text-accent">
              We build digital
            </span>,
            <span key="b" className="text-accent">
              experiences.
            </span>,
          ]}
        />
        <span id="intro-title" className="sr-only">
          We don&rsquo;t just build websites. We build digital experiences.
        </span>

        <div className="flex flex-col justify-end gap-8 lg:col-span-4">
          <Reveal as="p" className="max-w-sm text-base leading-relaxed text-muted md:text-lg">
            We&rsquo;re a small studio that designs and builds fast, considered websites. From first
            concept to launch, every screen, transition and line of code is made with care, so
            your ideas feel as good as they look.
          </Reveal>
          <Reveal
            as="p"
            delay={0.1}
            className="border-l-2 border-accent pl-4 text-[0.72rem] font-medium uppercase tracking-[0.24em]"
          >
            Based in Morocco
          </Reveal>
        </div>
      </div>
    </section>
  );
}
