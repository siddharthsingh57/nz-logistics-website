import { cn } from '@/lib/utils'
import { ReactNode } from 'react'

interface ContainerProps {
  children: ReactNode
  className?: string
}

export function Container({ children, className }: ContainerProps) {
  return (
    <div
      className={cn(
        'mx-auto w-full max-w-[1400px] px-6 md:px-10 lg:px-16',
        className
      )}
    >
      {children}
    </div>
  )
}
