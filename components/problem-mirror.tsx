import { Sunrise, Repeat, Compass, Heart } from 'lucide-react'

const thoughts = [
  {
    icon: Sunrise,
    text: 'Acordo e já começo pensando no que preciso resolver.',
  },
  {
    icon: Repeat,
    text: 'Quero ter mais constância, mas não consigo manter uma rotina.',
  },
  {
    icon: Compass,
    text: 'Às vezes nem sei por onde começar minha reflexão.',
  },
  {
    icon: Heart,
    text: 'Sinto falta de separar um momento realmente meu com Deus.',
  },
]

export function ProblemMirror() {
  return (
    <section className="bg-background">
      <div className="mx-auto max-w-3xl px-4 py-14 sm:px-6 md:py-20">
        <h2 className="text-balance text-center font-serif text-3xl font-medium leading-tight text-foreground sm:text-4xl">
          Às vezes, não é falta de fé.
          <br />
          <span className="text-wine">É a correria tomando conta do dia.</span>
        </h2>

        <p className="mx-auto mt-5 max-w-xl text-pretty text-center text-[15px] leading-relaxed text-muted-foreground md:text-base">
          Você deseja estar mais perto de Deus, mas entre compromissos,
          trabalho, família e tantas coisas para resolver, aquele momento que
          seria só seu e Dele acaba ficando para depois.
        </p>

        <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2">
          {thoughts.map(({ icon: Icon, text }) => (
            <div
              key={text}
              className="flex items-start gap-3 rounded-2xl border border-border bg-card/60 p-5"
            >
              <span className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-blush">
                <Icon className="h-5 w-5 text-dusty-rose" strokeWidth={1.5} />
              </span>
              <p className="text-[15px] leading-snug text-foreground/90">
                {'\u201C'}
                {text}
                {'\u201D'}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
