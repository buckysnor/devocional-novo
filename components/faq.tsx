'use client'

import { useState } from 'react'
import { ChevronDown } from 'lucide-react'
import { product } from '@/lib/product'

const faqs = [
  {
    q: 'O devocional é um livro físico?',
    a: `Sim. É um livro físico com ${product.specs.pages}, em ${product.specs.cover.toLowerCase()}, medindo ${product.specs.dimensions}.`,
  },
  {
    q: 'Como funciona a proposta de 365 dias?',
    a: 'São 365 reflexões, uma para cada dia do ano. A ideia é reservar alguns minutos diários para leitura, reflexão e oração — no seu ritmo.',
  },
  {
    q: 'Preciso começar em uma data específica?',
    a: 'Não. Você pode começar no dia em que o devocional chegar e seguir um dia de cada vez. O que importa é a constância.',
  },
  {
    q: 'Posso presentear alguém?',
    a: 'Com certeza. Muitas leitoras levam mais de um exemplar para presentear mães, irmãs, amigas ou o grupo da igreja.',
  },
  {
    q: 'O pagamento é seguro?',
    a: 'Sim. O pagamento é processado em ambiente seguro e você pode parcelar sua compra.',
  },
  {
    q: 'Vocês entregam em todo o Brasil?',
    a: 'Sim, realizamos envio para todo o Brasil.',
  },
]

export function Faq() {
  const [open, setOpen] = useState<number | null>(0)

  return (
    <section className="bg-secondary/70">
      <div className="mx-auto max-w-3xl px-4 py-14 sm:px-6 md:py-20">
        <h2 className="text-center font-serif text-3xl font-medium leading-tight text-foreground sm:text-4xl">
          Perguntas frequentes
        </h2>

        <div className="mt-8 divide-y divide-border overflow-hidden rounded-2xl border border-border bg-card">
          {faqs.map((item, i) => {
            const isOpen = open === i
            return (
              <div key={item.q}>
                <button
                  type="button"
                  onClick={() => setOpen(isOpen ? null : i)}
                  aria-expanded={isOpen}
                  className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left"
                >
                  <span className="font-sans text-[15px] font-semibold text-foreground">
                    {item.q}
                  </span>
                  <ChevronDown
                    className={`h-5 w-5 shrink-0 text-dusty-rose transition-transform duration-200 ${
                      isOpen ? 'rotate-180' : ''
                    }`}
                  />
                </button>
                <div
                  className={`grid transition-all duration-200 ease-out ${
                    isOpen
                      ? 'grid-rows-[1fr] opacity-100'
                      : 'grid-rows-[0fr] opacity-0'
                  }`}
                >
                  <div className="overflow-hidden">
                    <p className="px-5 pb-5 text-[15px] leading-relaxed text-muted-foreground">
                      {item.a}
                    </p>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
