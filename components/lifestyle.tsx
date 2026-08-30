import Image from 'next/image'
import { product } from '@/lib/product'

export function Lifestyle() {
  return (
    <section className="relative">
      {/* TODO: substituir por fotografia REAL de lifestyle quando disponível */}
      <Image
        src={product.images.lifestyle || '/placeholder.svg'}
        alt="Manhã tranquila com o devocional, café e flores"
        width={1600}
        height={1000}
        className="h-[70vh] max-h-[560px] w-full object-cover md:h-[60vh]"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/45 via-black/10 to-transparent" />
      <div className="absolute inset-x-0 bottom-0 p-6 sm:p-10 md:p-14">
        <p className="mx-auto max-w-2xl text-balance text-center font-serif text-2xl font-medium leading-snug text-white sm:text-3xl md:text-4xl">
          Antes do mundo pedir sua atenção, reserve alguns minutos para aquilo
          que alimenta sua fé.
        </p>
      </div>
    </section>
  )
}
