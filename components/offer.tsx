import Image from 'next/image'
import { Check } from 'lucide-react'
import { product } from '@/lib/product'
import { CtaButton } from '@/components/cta-button'

const included = [
  '365 reflexões, uma para cada dia do ano',
  'Versículo e oração para guiar seu momento',
  'Espaço para suas anotações pessoais',
  `${product.specs.pages} • ${product.specs.cover}`,
]

export function Offer() {
  return (
    <section id="oferta" className="scroll-mt-4 bg-secondary/70">
      <div className="mx-auto max-w-5xl px-4 py-14 sm:px-6 md:py-20">
        <div className="overflow-hidden rounded-3xl border border-border bg-card shadow-sm">
          <div className="grid md:grid-cols-2">
            <div className="flex items-center justify-center bg-blush/60 p-8">
              <Image
                src={product.images.cover || '/placeholder.svg'}
                alt="Devocional Mulheres com Deus"
                width={800}
                height={800}
                className="w-48 drop-shadow-xl sm:w-60"
              />
            </div>

            <div className="p-7 sm:p-9">
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-gold">
                Oferta especial
              </p>
              <h2 className="mt-2 font-serif text-3xl font-medium leading-tight text-foreground">
                Comece hoje sua jornada de fé
              </h2>

              <ul className="mt-6 space-y-2.5">
                {included.map((item) => (
                  <li key={item} className="flex items-start gap-2.5 text-sm">
                    <Check
                      className="mt-0.5 h-4 w-4 shrink-0 text-gold"
                      strokeWidth={2.5}
                    />
                    <span className="text-foreground/90">{item}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-7 flex items-end gap-3">
                <span className="text-base text-muted-foreground line-through">
                  {product.price.from}
                </span>
                <span className="font-serif text-4xl font-semibold text-wine">
                  {product.price.now}
                </span>
              </div>
              <p className="mt-1 text-sm text-muted-foreground">
                ou {product.price.installments}
              </p>

              <CtaButton
                href={product.buyUrl}
                className="mt-6 w-full"
              >
                Quero meu devocional
              </CtaButton>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
