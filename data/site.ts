// TODO: replace placeholder contact details with YH.Studio real ones.
export const site = {
  name: "YH.Studio",
  year: "2026",
  location: "Morocco",
  email: "nadayassinhamdi@gmail.com",
  instagram: "https://www.instagram.com/yh.webstudio/",
  linkedin: "https://www.linkedin.com/in/yassine-hamdi-9a6067278",
} as const;

export const navLinks = [
  { label: "Home", href: "#home", match: ["home", "intro"] },
  { label: "Work", href: "#work", match: ["work"] },
  { label: "Services", href: "#services", match: ["services", "process"] },
  { label: "About", href: "#about", match: ["about"] },
  { label: "Contact", href: "#contact", match: ["contact"] },
] as const;
