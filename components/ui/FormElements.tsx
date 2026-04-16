import { cn } from '@/lib/utils'
import { forwardRef, InputHTMLAttributes, SelectHTMLAttributes, TextareaHTMLAttributes } from 'react'

const baseInput = [
  'w-full bg-bg border border-border-clr rounded-xl px-4 py-3.5',
  'font-sans text-ink placeholder:text-muted/70',
  'transition-all duration-300',
  'focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/10',
  'disabled:opacity-50',
].join(' ')

/* ─── Input ──────────────────────────────────────────────────────────────── */
interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string
  error?: string
}

export const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ label, error, className, id, ...props }, ref) => {
    const inputId = id ?? label?.toLowerCase().replace(/\s+/g, '-')
    return (
      <div className="flex flex-col gap-1.5">
        {label && (
          <label
            htmlFor={inputId}
            className="text-sm font-medium text-ink/75 font-sans"
          >
            {label}
          </label>
        )}
        <input
          ref={ref}
          id={inputId}
          className={cn(baseInput, error && 'border-red-400 focus:ring-red-200', className)}
          {...props}
        />
        {error && (
          <p className="text-xs text-red-500 font-sans mt-0.5">{error}</p>
        )}
      </div>
    )
  }
)
Input.displayName = 'Input'

/* ─── Select ─────────────────────────────────────────────────────────────── */
interface SelectProps extends SelectHTMLAttributes<HTMLSelectElement> {
  label?: string
  error?: string
}

export const Select = forwardRef<HTMLSelectElement, SelectProps>(
  ({ label, error, className, id, children, ...props }, ref) => {
    const selectId = id ?? label?.toLowerCase().replace(/\s+/g, '-')
    return (
      <div className="flex flex-col gap-1.5">
        {label && (
          <label
            htmlFor={selectId}
            className="text-sm font-medium text-ink/75 font-sans"
          >
            {label}
          </label>
        )}
        <select
          ref={ref}
          id={selectId}
          className={cn(
            baseInput,
            'cursor-pointer appearance-none bg-[image:url("data:image/svg+xml,%3Csvg xmlns=\'http://www.w3.org/2000/svg\' width=\'16\' height=\'16\' viewBox=\'0 0 24 24\' fill=\'none\' stroke=\'%236B6456\' stroke-width=\'2\'%3E%3Cpath d=\'M6 9l6 6 6-6\'/%3E%3C/svg%3E")] bg-no-repeat bg-[right_14px_center]',
            error && 'border-red-400 focus:ring-red-200',
            className
          )}
          {...props}
        >
          {children}
        </select>
        {error && (
          <p className="text-xs text-red-500 font-sans mt-0.5">{error}</p>
        )}
      </div>
    )
  }
)
Select.displayName = 'Select'

/* ─── Textarea ───────────────────────────────────────────────────────────── */
interface TextareaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  label?: string
  error?: string
}

export const Textarea = forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ label, error, className, id, ...props }, ref) => {
    const textareaId = id ?? label?.toLowerCase().replace(/\s+/g, '-')
    return (
      <div className="flex flex-col gap-1.5">
        {label && (
          <label
            htmlFor={textareaId}
            className="text-sm font-medium text-ink/75 font-sans"
          >
            {label}
          </label>
        )}
        <textarea
          ref={ref}
          id={textareaId}
          className={cn(
            baseInput,
            'resize-none min-h-[130px]',
            error && 'border-red-400 focus:ring-red-200',
            className
          )}
          {...props}
        />
        {error && (
          <p className="text-xs text-red-500 font-sans mt-0.5">{error}</p>
        )}
      </div>
    )
  }
)
Textarea.displayName = 'Textarea'
