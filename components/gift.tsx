import Image from 'next/image'
import { Gift as GiftIcon } from 'lucide-react'
import { product } from '@/lib/product'
import { CtaButton } from '@/components/cta-button'

// mostra o valor real quando confirmado; caso contrário, um marcador honesto
function displayValue(value: string) {
  return /^[A-Z0-9_]+$/.test(value) ? 'A confirmar' : value
}

const options = [
  {
    title: '1 Unidade',
    subtitle: 'Para você começar sua jornada',
    price: product.price.now,
    installments: product.price.installments,
    href: product.buyUrl,
    highlight: false,
  },
  {
    title: 'Kit 2 Unidades',
    subtitle: 'Um para você, outro para presentear',
    price: displayValue(product.kits.kit2.price),
    installments: displayValue(product.kits.kit2.installments),
    href: product.kits.kit2.buyUrl,
    highlight: true,
  },
  {
    title: 'Kit 3 Unidades',
    subtitle: 'Compartilhe fé com quem você ama',
    price: displayValue(product.kits.kit3.price),
    installments: displayValue(product.kits.kit3.installments),
    href: product.kits.kit3.buyUrl,
    highlight: false,
  },
]

export function Gift() {
  return (
    <section className="bg-background">
      <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6 md:py-20">
        <div className="grid items-center gap-8 md:grid-cols-2 md:gap-12">
          <div className="order-2 md:order-1">
            <span className="inline-flex items-center gap-2 rounded-full bg-blush px-4 py-1.5 text-xs font-bold uppercase tracking-wide text-wine">
              <GiftIcon className="h-4 w-4" strokeWidth={1.75} />
              Presenteie quem você ama
            </span>
            <h2 className="mt-4 text-balance font-serif text-3xl font-medium leading-tight text-foreground sm:text-4xl">
              Um presente que renova a fé todos os dias.
            </h2>
            <p className="mt-4 max-w-md text-pretty text-[15px] leading-relaxed text-muted-foreground md:text-base">
              Leve mais de um exemplar e transforme o devocional em um presente
              especial para uma mãe, irmã, amiga ou para o seu grupo.
            </p>
          </div>

          <div className="order-1 flex justify-center md:order-2">
            <Image
              src={product.images.duo || '/placeholder.svg'}
              alt="Duas unidades do Devocional Mulheres com Deus"
              width={1200}
              height={1200}
              className="w-full max-w-md drop-shadow-lg"
            />
          </div>
        </div>

        <div className="mt-12 grid gap-4 md:grid-cols-3">
          {options.map((opt) => (
            <div
              key={opt.title}
              className={`relative flex flex-col rounded-2xl border p-6 ${
                opt.highlight
                  ? 'border-gold bg-blush/60 shadow-md'
                  : 'border-border bg-card/60'
              }`}
            >
              {opt.highlight && (
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-gold px-3 py-1 text-[10px] font-bold uppercase tracking-wide text-accent-foreground">
                  Mais escolhido
                </span>
              )}
              <h3 className="font-serif text-2xl font-semibold text-foreground">
                {opt.title}
              </h3>
              <p className="mt-1 text-sm text-muted-foreground">
                {opt.subtitle}
              </p>
              <p className="mt-4 font-serif text-3xl font-semibold text-wine">
                {opt.price}
              </p>
              <p className="mb-6 mt-1 text-xs text-muted-foreground">
                {opt.installments}
              </p>
              <CtaButton
                href={opt.href}
                variant={opt.highlight ? 'primary' : 'outline'}
                size="md"
                className="mt-auto w-full"
              >
                Escolher
              </CtaButton>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
