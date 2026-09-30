export type Project = {
  number: string;
  slug: string;
  title: string;
  category: string;
  description: string;
  tech: readonly string[];
  year: string;
  /** TODO: point at the live case study / site once available. */
  href: string;
  desktop: string;
  mobile: string;
  desktopAlt: string;
  mobileAlt: string;
  /** Screenshot has a light UI: keep the frame subtle on the dark page. */
  light?: boolean;
};

export const projects: readonly Project[] = [
  {
    number: "01",
    slug: "mednova",
    title: "MEDNOVA",
    category: "Healthcare Experience",
    description:
      "A modern healthcare website with a clean design, easy appointment booking and a smooth user experience.",
    tech: ["Next.js", "TypeScript", "Tailwind CSS"],
    year: "2026",
    href: "https://template-health-care.vercel.app/",
    desktop: "/images/projects/mednova/desktop.png",
    mobile: "/images/projects/mednova/mobile.png",
    desktopAlt: "MedNova healthcare website, desktop home page",
    mobileAlt: "MedNova healthcare website, mobile home page",
    light: true,
  },
  {
    number: "02",
    slug: "sakura",
    title: "sakura",
    category: "Japanese Restaurant",
    description:
      "A stunning website for a Japanese restaurant with an immersive design, online menu and table reservation.",
    tech: ["Next.js", "TypeScript", "Tailwind CSS"],
    year: "2026",
    href: "https://sakura-restaurant-blush.vercel.app/",
    desktop: "/images/projects/sakura/desktop.png",
    mobile: "/images/projects/sakura/mobile.png",
    desktopAlt: "Sakura Japanese restaurant website, desktop home page",
    mobileAlt: "Sakura Japanese restaurant website, mobile home page",
  },
];
