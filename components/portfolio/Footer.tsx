import { site } from "@/data/site";

const links = [
  { label: "Instagram", href: site.instagram, external: true },
  { label: "LinkedIn", href: site.linkedin, external: true },
  { label: "Email", href: `mailto:${site.email}`, external: false },
] as const;

export function Footer() {
  return (
    <footer className="border-t border-line px-5 py-10 md:px-10">
      <div className="mx-auto flex max-w-[1600px] flex-col gap-8 md:flex-row md:items-center md:justify-between">
        <p className="font-display text-2xl tracking-normal">YH.Studio</p>
        <ul className="flex flex-wrap gap-x-8 gap-y-2 text-sm text-muted">
          {links.map((l) => (
            <li key={l.label}>
              <a
                href={l.href}
                {...(l.external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                className="inline-flex min-h-11 items-center transition-colors hover:text-accent"
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>
        <p className="text-sm text-muted">&copy; {site.year} YH.Studio</p>
      </div>
    </footer>
  );
}
