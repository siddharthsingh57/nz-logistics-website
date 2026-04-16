import { type ClassValue, clsx } from 'clsx'
import { twMerge } from 'tailwind-merge'

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

/** Shared Framer Motion easing — Expo Out */
export const EXPO_OUT = [0.16, 1, 0.3, 1] as const

/** Reusable fade-up variant for whileInView animations */
export const fadeUp = (delay = 0) => ({
  hidden: { opacity: 0, y: 22 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: EXPO_OUT, delay },
  },
})

/** Stagger container — children receive staggered delays */
export const staggerContainer = (stagger = 0.1, delayChildren = 0) => ({
  hidden: {},
  visible: {
    transition: {
      staggerChildren: stagger,
      delayChildren,
    },
  },
})

/** Spring config for interactive micro-interactions */
export const SPRING = { type: 'spring', stiffness: 120, damping: 20 } as const
export const SPRING_SNAPPY = { type: 'spring', stiffness: 220, damping: 28 } as const
