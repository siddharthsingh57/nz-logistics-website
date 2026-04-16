'use client'

import { cn } from '@/lib/utils'
import { motion, useMotionValue, useSpring } from 'framer-motion'
import Link from 'next/link'
import { ButtonHTMLAttributes, ReactNode, useRef } from 'react'

type Variant = 'primary' | 'secondary' | 'ghost'
type Size = 'sm' | 'md' | 'lg'

interface BaseProps {
  variant?: Variant
  size?: Size
  children: ReactNode
  magnetic?: boolean
  className?: string
}

type ButtonProps = BaseProps &
  ButtonHTMLAttributes<HTMLButtonElement> & {
    href?: undefined
  }

type LinkButtonProps = BaseProps & {
  href: string
  target?: string
  rel?: string
  onClick?: () => void
}

type Props = ButtonProps | LinkButtonProps

function getClasses(variant: Variant, size: Size, className?: string) {
  return cn(
    'relative inline-flex items-center justify-center gap-2 font-sans font-medium rounded-full select-none transition-all duration-300',
    'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2',
    'disabled:opacity-50 disabled:pointer-events-none',
    {
      'bg-accent text-white hover:bg-accent-hover shadow-btn-accent hover:-translate-y-0.5':
        variant === 'primary',
      'border border-primary/70 text-primary hover:bg-primary hover:text-white hover:border-primary':
        variant === 'secondary',
      'text-primary hover:text-accent': variant === 'ghost',
    },
    {
      'text-sm px-5 py-2.5 tracking-wide': size === 'sm',
      'text-base px-7 py-3.5 tracking-wide': size === 'md',
      'text-lg px-9 py-4 tracking-wide': size === 'lg',
    },
    className
  )
}

export function Button(props: Props) {
  const { variant = 'primary', size = 'md', children, magnetic = false, className } = props
  const ref = useRef<HTMLDivElement>(null)
  const rawX = useMotionValue(0)
  const rawY = useMotionValue(0)
  const x = useSpring(rawX, { stiffness: 280, damping: 28 })
  const y = useSpring(rawY, { stiffness: 280, damping: 28 })

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!magnetic || !ref.current) return
    const rect = ref.current.getBoundingClientRect()
    rawX.set((e.clientX - (rect.left + rect.width / 2)) * 0.28)
    rawY.set((e.clientY - (rect.top + rect.height / 2)) * 0.28)
  }

  const handleMouseLeave = () => {
    rawX.set(0)
    rawY.set(0)
  }

  const inner =
    'href' in props && props.href !== undefined ? (
      <Link
        href={props.href}
        target={props.target}
        rel={props.rel}
        className={getClasses(variant, size, className)}
        onClick={props.onClick}
      >
        {children}
      </Link>
    ) : (
      <button
        className={getClasses(variant, size, className)}
        {...(props as ButtonHTMLAttributes<HTMLButtonElement>)}
      >
        {children}
      </button>
    )

  if (!magnetic) return inner

  return (
    <motion.div
      ref={ref}
      style={{ x, y, display: 'inline-block' }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      {inner}
    </motion.div>
  )
}
