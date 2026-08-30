'use client'

import { useEffect, useState } from 'react'
import { product } from '@/lib/product'
import { CtaButton } from '@/components/cta-button'

export function StickyBuy() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const onScroll = () => {
      setVisible(window.scrollY > 640)
    }
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <div
      className={`fixed inset-x-0 bottom-0 z-50 border-t border-border bg-background/95 backdrop-blur transition-transform duration-300 md:hidden ${
        visible ? 'translate-y-0' : 'translate-y-full'
      }`}
    >
      <div className="mx-auto flex max-w-md items-center justify-between gap-3 px-4 py-3">
        <div className="leading-tight">
          <p className="font-serif text-xl font-semibold text-wine">
            {product.price.now}
          </p>
          <p className="text-[11px] text-muted-foreground">
            {product.price.installments}
          </p>
        </div>
        <CtaButton href={product.buyUrl} size="md" className="flex-1">
          Quero meu
        </CtaButton>
      </div>
    </div>
  )
}
