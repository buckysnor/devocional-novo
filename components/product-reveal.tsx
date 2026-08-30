import Image from 'next/image'
import { product } from '@/lib/product'

export function ProductReveal() {
  return (
    <section className="bg-secondary/70">
      <div className="mx-auto grid max-w-6xl items-center gap-8 px-4 py-14 sm:px-6 md:grid-cols-2 md:gap-12 md:py-20">
        <div className="order-2 flex justify-center md:order-1">
          <div className="relative w-52 sm:w-64 md:w-full md:max-w-sm">
            <div
              aria-hidden
              className="absolute inset-x-6 bottom-2 top-8 rounded-[50%] bg-dusty-rose/20 blur-2xl"
            />
            <Image
              src={product.images.cover || '/placeholder.svg'}
              alt="Livro Devocional Mulheres com Deus em destaque"
              width={1000}
              height={1000}
              className="relative drop-shadow-xl"
            />
          </div>
        </div>

        <div className="order-1 text-center md:order-2 md:text-left">
          <h2 className="text-balance font-serif text-3xl font-medium leading-tight text-foreground sm:text-4xl">
            Foi para esses pequenos momentos que nasceu o{' '}
            <span className="text-wine">Devocional Mulheres com Deus</span>.
          </h2>

          <p className="mx-auto mt-5 max-w-md text-pretty text-[15px] leading-relaxed text-muted-foreground md:mx-0 md:text-base">
            Uma proposta devocional para acompanhar você ao longo do ano,
            trazendo um momento de leitura, reflexão e oração para dentro da sua
            rotina.
          </p>

          <div className="mt-7 flex flex-col items-center gap-1 md:items-start">
            <span className="font-serif text-2xl font-semibold text-gold sm:text-3xl">
              365 Dias de Fé
            </span>
            <span className="text-sm uppercase tracking-[0.15em] text-muted-foreground">
              Um momento com Deus para cada dia do ano
            </span>
          </div>
        </div>
      </div>
    </section>
  )
}
