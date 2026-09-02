import Image from 'next/image'
import { BookOpen, Heart, ShoppingBag, Coffee } from 'lucide-react'
import { product } from '@/lib/product'
import { CtaButton } from '@/components/cta-button'

const benefits = [
  {
    icon: BookOpen,
    title: 'Devocional 365 dias',
    text: 'Um devocional completo para te guiar em uma jornada diária com Deus.',
  },
  {
    icon: Coffee,
    title: 'Caneca exclusiva',
    text: 'Para te lembrar todos os dias que Deus é o seu refúgio e sua força.',
  },
  {
    icon: Heart,
    title: 'Presente perfeito',
    text: 'Para você ou para aquela mulher especial que precisa de fé e inspiração.',
  },
]

export function Gift() {
  return (
    <section className="overflow-hidden bg-[linear-gradient(180deg,#fffafa_0%,#fff8f8_100%)]">
      <div className="mx-auto max-w-3xl px-5 py-14 sm:px-8 md:py-20">
        <div className="text-center">
          <span className="inline-flex items-center gap-2 rounded-full bg-blush px-5 py-2 text-xs font-extrabold uppercase tracking-[0.08em] text-wine sm:text-sm">
            <Heart className="h-4 w-4 fill-current" strokeWidth={1.8} />
            Kit Mulheres com Deus
          </span>

          <h2 className="mx-auto mt-6 max-w-2xl text-balance font-serif text-[2.25rem] font-semibold leading-[1.04] text-wine sm:text-5xl md:text-6xl">
            Um kit completo para transformar seus dias
          </h2>

          <div className="mx-auto mt-6 flex max-w-xl items-center gap-4 text-wine/80">
            <span className="h-px flex-1 bg-wine/50" />
            <Heart className="h-5 w-5 fill-current" strokeWidth={1.6} />
            <span className="h-px flex-1 bg-wine/50" />
          </div>

          <p className="mx-auto mt-5 max-w-2xl text-pretty text-[15px] leading-7 text-foreground/80 sm:text-lg sm:leading-8">
            Fortaleça sua fé e se aproxime de Deus todos os dias com este kit
            exclusivo, feito para mulheres que desejam renovar a mente, o coração
            e o espírito.
          </p>
        </div>

        <div className="mt-8 flex justify-center sm:mt-10">
          <Image
            src={product.images.kitMug || '/placeholder.svg'}
            alt="Kit Mulheres com Deus com devocional e caneca"
            width={1200}
            height={1000}
            sizes="(max-width: 768px) 92vw, 720px"
            className="h-auto w-full max-w-2xl object-contain"
          />
        </div>

        <div className="mx-auto mt-8 max-w-2xl divide-y divide-wine/15 sm:mt-10">
          {benefits.map(({ icon: Icon, title, text }) => (
            <div key={title} className="flex items-start gap-4 py-4 sm:gap-5 sm:py-5">
              <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-full bg-blush text-wine sm:h-20 sm:w-20">
                <Icon className="h-8 w-8 sm:h-10 sm:w-10" strokeWidth={1.7} />
              </div>
              <div className="pt-1 text-left">
                <h3 className="font-serif text-2xl font-semibold leading-tight text-wine sm:text-3xl">
                  {title}
                </h3>
                <p className="mt-1 text-[15px] leading-6 text-foreground/80 sm:text-lg sm:leading-7">
                  {text}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="mx-auto mt-10 max-w-2xl text-center sm:mt-12">
          <p className="text-sm font-extrabold uppercase tracking-[0.08em] text-wine sm:text-base">
            Por apenas
          </p>
          <p className="mt-1 font-serif text-6xl font-semibold leading-none tracking-tight text-wine sm:text-8xl">
            {product.kits.kit2.price}
          </p>

          <CtaButton
            href={product.kits.kit2.buyUrl}
            size="lg"
            className="mt-6 w-full rounded-xl py-5 text-base font-extrabold uppercase tracking-wide sm:text-lg"
          >
            <ShoppingBag className="mr-2 h-5 w-5" strokeWidth={1.8} />
            Quero meu kit
          </CtaButton>
        </div>
      </div>
    </section>
  )
}
