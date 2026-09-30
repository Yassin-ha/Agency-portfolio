import { MaskLines, Reveal } from "./Reveal";

const details = ["Based in Morocco", "2026", "Available for projects"] as const;

export function About() {
  return (
    <section
      id="about"
      aria-labelledby="about-title"
      className="border-t border-line px-5 py-24 md:px-10 md:py-40"
    >
      <div className="mx-auto grid max-w-[1600px] gap-12 lg:grid-cols-12">
        <div className="lg:col-span-7">
          <MaskLines
            className="font-display text-[clamp(3rem,11vw,11rem)]"
            lines={["We are", "YH."]}
          />
          <span id="about-title" className="sr-only">
            We are YH.
          </span>
        </div>
        <div className="flex flex-col justify-end gap-10 lg:col-span-5">
          <Reveal as="p" className="max-w-md text-lg leading-relaxed md:text-xl">
            YH is a digital studio focused on creating modern websites, interactive interfaces
            and digital experiences for businesses that want a stronger online presence.
          </Reveal>
          <ul className="grid gap-0 border-t border-line">
            {details.map((d, i) => (
              <Reveal
                as="li"
                key={d}
                delay={i * 0.06}
                className="border-b border-line py-4 text-[0.72rem] font-medium uppercase tracking-[0.24em] text-muted"
              >
                {d}
              </Reveal>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
