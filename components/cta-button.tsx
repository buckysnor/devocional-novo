import Link from 'next/link'
import { cn } from '@/lib/utils'

type Props = {
  href: string
  children: React.ReactNode
  className?: string
  variant?: 'primary' | 'outline'
  size?: 'md' | 'lg'
}

export function CtaButton({
  href,
  children,
  className,
  variant = 'primary',
  size = 'lg',
}: Props) {
  return (
    <Link
      href={href}
      className={cn(
        'inline-flex items-center justify-center gap-2 rounded-full font-sans font-bold uppercase tracking-wide text-center transition-colors duration-200',
        'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-dusty-rose focus-visible:ring-offset-2 focus-visible:ring-offset-background',
        size === 'lg' ? 'px-8 py-4 text-sm' : 'px-6 py-3 text-xs',
        variant === 'primary' &&
          'bg-wine text-primary-foreground shadow-sm hover:bg-[#5c151c]',
        variant === 'outline' &&
          'border border-wine text-wine hover:bg-wine hover:text-primary-foreground',
        className,
      )}
    >
      {children}
    </Link>
  )
}
