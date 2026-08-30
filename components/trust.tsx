import { ShieldCheck, Truck, Lock, BookOpenCheck } from 'lucide-react'

const items = [
  { icon: BookOpenCheck, label: 'Livro físico de verdade' },
  { icon: Truck, label: 'Envio para todo o Brasil' },
  { icon: Lock, label: 'Compra 100% segura' },
  { icon: ShieldCheck, label: 'Pagamento protegido' },
]

export function Trust() {
  return (
    <section className="bg-background">
      <div className="mx-auto max-w-5xl px-4 py-10 sm:px-6">
        <ul className="grid grid-cols-2 gap-4 sm:grid-cols-4">
          {items.map(({ icon: Icon, label }) => (
            <li
              key={label}
              className="flex flex-col items-center gap-2 rounded-2xl border border-border bg-card/60 px-3 py-5 text-center"
            >
              <Icon className="h-6 w-6 text-dusty-rose" strokeWidth={1.5} />
              <span className="text-xs font-medium leading-snug text-foreground/80">
                {label}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
