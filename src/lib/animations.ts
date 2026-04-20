import type { Variants } from "framer-motion";

export const fadeUp: Variants = {
  hidden: { opacity: 0, y: 28 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

export const stagger = (delay = 0.1): Variants => ({
  hidden: {},
  show: { transition: { staggerChildren: delay } },
});

export const scaleIn: Variants = {
  hidden: { opacity: 0, scale: 0.96 },
  show: { opacity: 1, scale: 1, transition: { duration: 0.55, ease: "easeOut" } },
};

export const viewportOnce = { once: true, margin: "-60px" } as const;
