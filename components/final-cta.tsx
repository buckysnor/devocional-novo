import { product } from '@/lib/product'
import { CtaButton } from '@/components/cta-button'

export function FinalCta() {
  return (
    <section className="bg-wine text-primary-foreground">
      <div className="mx-auto max-w-2xl px-6 py-16 text-center md:py-24">
        <p className="text-xs font-bold uppercase tracking-[0.25em] text-gold">
          365 dias de fé
        </p>
        <h2 className="mt-4 text-balance font-serif text-3xl font-medium leading-tight sm:text-[2.5rem]">
          Que tal começar hoje seu momento diário com Deus?
        </h2>
        <p className="mx-auto mt-4 max-w-md text-pretty text-[15px] leading-relaxed text-primary-foreground/80">
          Alguns minutos por dia podem transformar a forma como você vive sua
          fé ao longo do ano inteiro.
        </p>

        <div className="mt-8 flex flex-col items-center gap-3">
          <div className="flex items-end gap-3">
            <span className="text-base text-primary-foreground/60 line-through">
              {product.price.from}
            </span>
            <span className="font-serif text-4xl font-semibold text-gold">
              {product.price.now}
            </span>
          </div>
          <p className="text-sm text-primary-foreground/70">
            ou {product.price.installments}
          </p>
          <CtaButton
            href={product.buyUrl}
            className="mt-3 w-full bg-gold text-accent-foreground hover:bg-[#b3891c] sm:w-auto"
          >
            Quero meu devocional
          </CtaButton>
        </div>
      </div>
    </section>
  )
}
