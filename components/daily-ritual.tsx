const steps = [
  {
    n: '01',
    title: 'Reserve alguns minutos',
    text: 'Antes da correria começar — ou quando seu dia permitir.',
  },
  {
    n: '02',
    title: 'Abra a reflexão do dia',
    text: 'Você não precisa ficar pensando por onde começar.',
  },
  {
    n: '03',
    title: 'Leia e reflita',
    text: 'Diminua o ritmo por alguns minutos.',
  },
  {
    n: '04',
    title: 'Ore',
    text: 'Faça daquele momento um espaço entre você e Deus.',
  },
  {
    n: '05',
    title: 'Volte amanhã',
    text: 'Porque constância é construída um dia de cada vez.',
  },
]

export function DailyRitual() {
  return (
    <section className="bg-background">
      <div className="mx-auto max-w-3xl px-4 py-14 sm:px-6 md:py-20">
        <p className="text-center text-xs font-bold uppercase tracking-[0.2em] text-gold">
          O ritual
        </p>
        <h2 className="mt-3 text-center font-serif text-3xl font-medium leading-tight text-foreground sm:text-4xl">
          Seu momento com Deus
        </h2>

        <ol className="mt-10 space-y-3">
          {steps.map((step) => (
            <li
              key={step.n}
              className="flex items-start gap-4 rounded-2xl border border-border bg-card/60 p-5"
            >
              <span className="font-serif text-2xl font-semibold text-dusty-rose">
                {step.n}
              </span>
              <div>
                <h3 className="font-sans text-base font-bold uppercase tracking-wide text-wine">
                  {step.title}
                </h3>
                <p className="mt-1 text-[15px] leading-snug text-muted-foreground">
                  {step.text}
                </p>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}
