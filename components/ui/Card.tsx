'use client'

import { cn, EXPO_OUT } from '@/lib/utils'
import { motion, HTMLMotionProps } from 'framer-motion'
import { ReactNode } from 'react'

interface CardProps extends Omit<HTMLMotionProps<'div'>, 'children'> {
  children: ReactNode
  className?: string
  /** animate on scroll into view */
  animate?: boolean
  /** stagger delay in seconds */
  delay?: number
  /** lift on hover */
  hover?: boolean
}

export function Card({
  children,
  className,
  animate = true,
  delay = 0,
  hover = true,
  ...rest
}: CardProps) {
  return (
    <motion.div
      initial={animate ? { opacity: 0, y: 20 } : undefined}
      whileInView={animate ? { opacity: 1, y: 0 } : undefined}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.65, ease: EXPO_OUT, delay }}
      whileHover={
        hover
          ? { y: -7, transition: { duration: 0.35, ease: EXPO_OUT } }
          : undefined
      }
      className={cn(
        'bg-surface rounded-2xl p-8 border border-border-clr shadow-card',
        hover && 'transition-shadow duration-350 hover:shadow-card-hover',
        className
      )}
      {...rest}
    >
      {children}
    </motion.div>
  )
}
