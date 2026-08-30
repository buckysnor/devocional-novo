import { CalendarHeart, Sun, Leaf, HandHeart, Infinity } from 'lucide-react'

const benefits = [
  {
    icon: CalendarHeart,
    title: 'Mais constância',
    text: 'Um convite diário para não deixar seu momento com Deus sempre para depois.',
  },
  {
    icon: Sun,
    title: 'Mais intenção',
    text: 'Comece o dia lembrando daquilo que realmente importa.',
  },
  {
    icon: Leaf,
    title: 'Reflexão',
    text: 'Um espaço para desacelerar e olhar para dentro.',
  },
  {
    icon: HandHeart,
    title: 'Oração',
    text: 'Um ponto de partida para seu momento pessoal com Deus.',
  },
  {
    icon: Infinity,
    title: 'Continuidade',
    text: 'Uma jornada que não termina depois de algumas páginas.',
  },
]

export function Benefits() {
  return (
    <section className="bg-background">
      <div className="mx-auto max-w-5xl px-4 py-14 sm:px-6 md:py-20">
        <h2 className="mx-auto max-w-2xl text-balance text-center font-serif text-3xl font-medium leading-tight text-foreground sm:text-4xl">
          Não são apenas páginas.
          <br />
          <span className="text-wine">
            É o espaço que você decide reservar para sua fé.
          </span>
        </h2>

        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {benefits.map(({ icon: Icon, title, text }) => (
            <div
              key={title}
              className="rounded-2xl border border-border bg-card/60 p-6"
            >
              <span className="flex h-10 w-10 items-center justify-center rounded-full bg-blush">
                <Icon className="h-5 w-5 text-wine" strokeWidth={1.5} />
              </span>
              <h3 className="mt-4 font-serif text-xl font-semibold text-foreground">
                {title}
              </h3>
              <p className="mt-1.5 text-[15px] leading-relaxed text-muted-foreground">
                {text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
