import { services } from "@/data/services";
import { MaskLines, Reveal } from "./Reveal";

export function Services() {
  return (
    <section
      id="services"
      aria-labelledby="services-title"
      className="border-t border-line px-5 py-24 md:px-10 md:py-40"
    >
      <div className="mx-auto grid max-w-[1600px] gap-12 lg:grid-cols-12">
        <div className="lg:col-span-4">
          <MaskLines
            className="font-display text-[clamp(2.75rem,8vw,8rem)] lg:sticky lg:top-28"
            lines={["What", "we do"]}
          />
          <span id="services-title" className="sr-only">
            What we do
          </span>
        </div>

        <ul className="svc-list lg:col-span-8">
          {services.map((s, i) => (
            <Reveal as="li" key={s.number} delay={i * 0.06}>
              <div
                tabIndex={0}
                className="svc-item group relative grid cursor-default grid-cols-[3rem_1fr] gap-x-4 border-t border-line py-8 outline-offset-[-2px] md:grid-cols-[5rem_1fr_1fr] md:items-baseline md:py-10"
              >
                <span className="text-sm tracking-[0.2em] text-muted">{s.number}</span>
                <h3 className="svc-title font-display text-[clamp(1.9rem,4.4vw,4.25rem)] transition-colors duration-500">
                  {s.title}
                </h3>
                <p className="col-start-2 mt-4 max-w-xs text-base leading-relaxed text-muted md:col-start-3 md:mt-0">
                  {s.description}
                </p>
                <span
                  aria-hidden
                  className="svc-line absolute inset-x-0 top-0 h-px bg-accent"
                />
              </div>
            </Reveal>
          ))}
          <li aria-hidden className="border-t border-line" />
        </ul>
      </div>
    </section>
  );
}
