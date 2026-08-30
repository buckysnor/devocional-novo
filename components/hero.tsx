import Image from 'next/image'
import { BookOpen, ShieldCheck } from 'lucide-react'
import { product } from '@/lib/product'
import { CtaButton } from '@/components/cta-button'

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-blush/60">
      <div className="mx-auto grid max-w-6xl items-center gap-8 px-4 pb-12 pt-10 sm:px-6 md:grid-cols-2 md:gap-10 md:pb-20 md:pt-16">
        {/* Copy + oferta */}
        <div className="order-1 text-center md:text-left">
          <p className="text-[11px] font-bold uppercase tracking-[0.22em] text-gold sm:text-xs">
            Devocional feminino • 365 dias
          </p>

          <h1 className="mt-4 text-balance font-serif text-4xl font-semibold leading-[1.08] text-foreground sm:text-5xl md:text-[3.35rem]">
            Fortaleça sua{' '}
            <span className="italic text-wine">fé</span> e comece cada dia mais
            perto de Deus.
          </h1>

          <p className="mx-auto mt-4 max-w-md text-pretty text-[15px] leading-relaxed text-muted-foreground md:mx-0 md:text-base">
            365 dias de reflexões para transformar alguns minutos da sua rotina
            em um momento de fé, reflexão e oração.
          </p>

          {/* Preço */}
          <div className="mt-6 flex items-center justify-center gap-3 md:justify-start">
            <span className="text-sm text-muted-foreground line-through">
              {product.price.from}
            </span>
            <span className="font-serif text-4xl font-semibold text-wine sm:text-[2.75rem]">
              {product.price.now}
            </span>
          </div>
          <p className="mt-1 text-sm text-muted-foreground">
            ou {product.price.installments}
          </p>

          {/* CTA */}
          <div className="mt-6">
            <CtaButton href={product.buyUrl} className="w-full sm:w-auto">
              Quero meu devocional
            </CtaButton>
          </div>

          {/* Micro-indicadores */}
          <div className="mt-5 flex items-center justify-center gap-6 text-xs text-muted-foreground md:justify-start">
            <span className="inline-flex items-center gap-1.5">
              <BookOpen className="h-4 w-4 text-dusty-rose" strokeWidth={1.75} />
              Livro físico
            </span>
            <span className="inline-flex items-center gap-1.5">
              <ShieldCheck
                className="h-4 w-4 text-dusty-rose"
                strokeWidth={1.75}
              />
              Pagamento seguro
            </span>
          </div>
        </div>

        {/* Produto */}
        <div className="order-2 flex justify-center md:justify-end">
          <div className="relative w-56 sm:w-72 md:w-full md:max-w-sm">
            <div
              aria-hidden
              className="absolute inset-x-6 bottom-3 top-8 rounded-[50%] bg-dusty-rose/20 blur-2xl"
            />
            <Image
              src={product.images.cover || '/placeholder.svg'}
              alt="Capa do livro Devocional Mulheres com Deus — 365 Dias de Fé"
              width={1000}
              height={1000}
              priority
              className="relative drop-shadow-xl"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
