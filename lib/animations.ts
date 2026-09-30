import type { Transition } from "framer-motion";

/** Single easing curve used across the site (expo-out feel, no bounce). */
export const ease = [0.16, 1, 0.3, 1] as const;

export const reveal: Transition = { duration: 0.9, ease };

export const stagger = (index: number, step = 0.08): Transition => ({
  ...reveal,
  delay: index * step,
});

/** Shared viewport config: fire once, slightly before the element is centred. */
export const viewportOnce = { once: true, margin: "0px 0px -12% 0px" } as const;
