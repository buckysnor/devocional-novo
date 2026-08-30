import Image from 'next/image'
import { product } from '@/lib/product'

const specs = [
  'Livro físico',
  '224 páginas',
  '365 dias de proposta devocional',
  'Reflexões',
  'Versículos',
  'Espaço para anotações',
]

export function InsideBook() {
  return (
    <section className="bg-secondary/70">
      <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6 md:py-20">
        <h2 className="mx-auto max-w-2xl text-balance text-center font-serif text-3xl font-medium leading-tight text-foreground sm:text-4xl">
          Abra. Leia. Reflita. Faça desse momento seu.
        </h2>

        <div className="mt-10 grid items-center gap-8 md:grid-cols-2 md:gap-12">
          <div className="overflow-hidden rounded-3xl border border-border bg-card shadow-sm">
            {/* TODO: substituir por fotografia REAL do livro aberto quando disponível */}
            <Image
              src={product.images.interior || '/placeholder.svg'}
              alt="Interior do devocional: página de reflexão do dia e espaço para anotações"
              width={1200}
              height={900}
              className="h-full w-full object-cover"
            />
          </div>

          <div>
            <p className="text-pretty text-[15px] leading-relaxed text-muted-foreground md:text-base">
              Cada dia traz uma leitura, uma reflexão e um espaço para a sua
              oração — organizados para que você não precise pensar por onde
              começar.
            </p>

            <ul className="mt-6 grid grid-cols-2 gap-x-4 gap-y-3">
              {specs.map((s) => (
                <li
                  key={s}
                  className="flex items-center gap-2 text-sm text-foreground/90"
                >
                  <span
                    aria-hidden
                    className="h-1.5 w-1.5 shrink-0 rounded-full bg-gold"
                  />
                  {s}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
