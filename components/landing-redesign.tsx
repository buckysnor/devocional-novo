import Image from 'next/image'
import {
  ArrowDown,
  BookOpen,
  CalendarHeart,
  Check,
  Coffee,
  Heart,
  Infinity,
  Leaf,
  Lock,
  PackageCheck,
  PenLine,
  ShieldCheck,
  ShoppingBag,
  Sparkles,
  Sun,
  Sunrise,
  Truck,
} from 'lucide-react'
import { product } from '@/lib/product'
import { CtaButton } from '@/components/cta-button'
import { VideoCarousel } from '@/components/video-carousel'
import { Faq } from '@/components/faq'

const ritual = [
  ['01', 'Reserve alguns minutos', 'Antes da correria começar — ou quando seu dia permitir.'],
  ['02', 'Abra a reflexão do dia', 'Você não precisa ficar pensando por onde começar.'],
  ['03', 'Leia e reflita', 'Diminua o ritmo por alguns minutos.'],
  ['04', 'Ore', 'Faça daquele momento um espaço entre você e Deus.'],
  ['05', 'Volte amanhã', 'Porque constância é construída um dia de cada vez.'],
]

const benefits = [
  { icon: CalendarHeart, title: 'Mais constância', text: 'Um convite diário para não deixar seu momento com Deus sempre para depois.' },
  { icon: Sun, title: 'Mais intenção', text: 'Comece o dia lembrando daquilo que realmente importa.' },
  { icon: Leaf, title: 'Reflexão', text: 'Um espaço para desacelerar e olhar para dentro.' },
  { icon: Heart, title: 'Oração', text: 'Um ponto de partida para seu momento pessoal com Deus.' },
  { icon: Infinity, title: 'Continuidade', text: 'Uma jornada que não termina depois de algumas páginas.' },
]

function FloralDivider() {
  return (
    <div className="mx-auto flex w-full max-w-xs items-center justify-center gap-3 py-2 text-dusty-rose" aria-hidden="true">
      <span className="h-px flex-1 bg-dusty-rose/35" />
      <span className="text-xs">❧</span>
      <Heart className="h-3.5 w-3.5 fill-current" />
      <span className="text-xs">❧</span>
      <span className="h-px flex-1 bg-dusty-rose/35" />
    </div>
  )
}

function OfferCard({
  number,
  title,
  subtitle,
  price,
  href,
  featured = false,
  disabled = false,
}: {
  number: string
  title: string
  subtitle: string
  price: string
  href: string
  featured?: boolean
  disabled?: boolean
}) {
  return (
    <div className={`relative rounded-[22px] border bg-white/75 p-4 shadow-[0_12px_35px_rgba(114,28,37,0.06)] backdrop-blur-sm ${featured ? 'border-gold/70 ring-1 ring-gold/20' : 'border-dusty-rose/20'}`}>
      {featured && (
        <div className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-gold px-4 py-1 text-[9px] font-extrabold uppercase tracking-[0.14em] text-white shadow-sm">
          Melhor escolha
        </div>
      )}
      <div className="flex gap-3">
        <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-blush text-xs font-extrabold text-wine">{number}</span>
        <div className="min-w-0 flex-1">
          <h3 className="font-serif text-[22px] font-semibold leading-tight text-foreground">{title}</h3>
          <p className="mt-1 text-xs leading-relaxed text-muted-foreground">{subtitle}</p>
          <p className="mt-3 font-serif text-[27px] font-semibold text-wine">{price}</p>
        </div>
      </div>
      {disabled ? (
        <div className="mt-4 flex h-11 items-center justify-center rounded-full border border-dusty-rose/30 text-[11px] font-extrabold uppercase tracking-wider text-muted-foreground">
          A confirmar
        </div>
      ) : (
        <CtaButton
          href={href}
          variant={featured ? 'primary' : 'outline'}
          size="md"
          className="mt-4 w-full !rounded-full !py-3 text-[11px]"
        >
          Escolher
        </CtaButton>
      )}
    </div>
  )
}

export function LandingRedesign() {
  return (
    <div className="overflow-hidden bg-[#fffaf8] text-foreground">
      <div className="bg-wine text-primary-foreground">
        <p className="mx-auto max-w-6xl px-4 py-2 text-center text-[10px] font-bold uppercase tracking-[0.18em] sm:text-xs">
          ♥ &nbsp; Um momento com Deus para cada dia do ano
        </p>
      </div>

      <main>
        <section className="relative overflow-hidden bg-[radial-gradient(circle_at_50%_0%,#fffefe_0%,#fff8f6_45%,#f9eceb_100%)]">
          <div className="absolute -right-20 top-28 h-56 w-56 rounded-full bg-dusty-rose/10 blur-3xl" />
          <div className="mx-auto max-w-5xl px-5 pb-12 pt-7 text-center sm:px-8 md:pb-20 md:pt-14">
            <div className="mx-auto inline-flex items-center gap-2 rounded-full bg-blush px-4 py-1.5 text-[10px] font-extrabold uppercase tracking-[0.12em] text-wine sm:text-xs">
              <Heart className="h-3.5 w-3.5 fill-current" /> Devocional feminino • 365 dias
            </div>
            <h1 className="mx-auto mt-5 max-w-3xl text-balance font-serif text-[2.35rem] font-semibold leading-[0.98] text-foreground sm:text-5xl md:text-6xl">
              Fortaleça sua <span className="italic text-wine">fé</span> e comece cada dia mais perto de Deus.
            </h1>
            <FloralDivider />
            <p className="mx-auto mt-2 max-w-xl text-pretty text-[14px] leading-6 text-muted-foreground sm:text-base">
              Um devocional completo para transformar sua rotina, renovar sua mente e encher seu coração de fé, esperança e propósito.
            </p>

            <div className="mx-auto mt-5 flex max-w-sm flex-col items-center">
              <span className="text-[10px] font-extrabold uppercase tracking-[0.14em] text-wine/75">Por apenas</span>
              <div className="mt-1 flex items-end justify-center gap-2">
                <span className="pb-1 text-sm text-muted-foreground line-through">{product.price.from}</span>
                <span className="font-serif text-5xl font-semibold leading-none text-wine sm:text-6xl">{product.price.now}</span>
              </div>
              <p className="mt-1 text-xs text-muted-foreground">ou {product.price.installments}</p>
              <CtaButton href={product.buyUrl} className="mt-5 w-full !rounded-xl !py-4 text-xs sm:w-auto sm:min-w-80">
                <ShoppingBag className="h-4 w-4" /> Quero meu devocional
              </CtaButton>
            </div>

            <div className="mx-auto mt-5 flex max-w-sm items-center justify-center gap-5 text-[10px] text-muted-foreground sm:text-xs">
              <span className="inline-flex items-center gap-1.5"><ShieldCheck className="h-4 w-4 text-dusty-rose" /> Compra segura</span>
              <span className="inline-flex items-center gap-1.5"><Lock className="h-4 w-4 text-dusty-rose" /> Pagamento protegido</span>
            </div>

            <div className="relative mx-auto mt-5 w-full max-w-md sm:mt-8 sm:max-w-lg">
              <div className="absolute inset-x-12 bottom-3 h-24 rounded-full bg-dusty-rose/20 blur-3xl" />
              <Image src={product.images.cover} alt="Devocional Mulheres com Deus" width={1000} height={1000} priority className="relative mx-auto h-auto w-[72%] max-w-sm drop-shadow-2xl" />
            </div>
          </div>
        </section>

        <section className="bg-[linear-gradient(180deg,#fffaf8_0%,#fff4f3_100%)]">
          <div className="mx-auto max-w-3xl px-5 py-12 text-center sm:px-8 md:py-20">
            <h2 className="font-serif text-[2rem] font-semibold leading-[1.05] text-foreground sm:text-4xl">
              Às vezes, não é falta de fé.<br /><span className="text-dusty-rose">É a correria tomando conta do dia.</span>
            </h2>
            <FloralDivider />
            <p className="mx-auto max-w-xl text-[14px] leading-6 text-muted-foreground sm:text-base">
              Você deseja estar mais perto de Deus, mas entre responsabilidades, cansaço e rotina, fica difícil criar um momento só seu com Ele.
            </p>
          </div>
        </section>

        <section className="bg-[#fffaf8]">
          <div className="mx-auto grid max-w-6xl items-center gap-8 px-5 py-12 sm:px-8 md:grid-cols-2 md:py-20">
            <div>
              <p className="text-xs font-extrabold uppercase tracking-[0.18em] text-gold">O ritual</p>
              <h2 className="mt-2 font-serif text-4xl font-semibold leading-none text-foreground sm:text-5xl">Seu momento<br /><span className="text-dusty-rose">com Deus</span></h2>
              <p className="mt-4 max-w-md text-[14px] leading-6 text-muted-foreground">Um passo a passo simples para transformar a correria do dia em um encontro com Deus.</p>
              <div className="mt-6 space-y-2.5">
                {ritual.map(([n, title, text]) => (
                  <div key={n} className="flex items-center gap-3 rounded-2xl border border-dusty-rose/15 bg-white/80 p-3 shadow-[0_8px_28px_rgba(114,28,37,0.05)]">
                    <span className="font-serif text-xl font-semibold text-dusty-rose">{n}</span>
                    <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-blush text-dusty-rose"><Sparkles className="h-4 w-4" /></span>
                    <div>
                      <h3 className="text-[11px] font-extrabold uppercase tracking-wide text-wine">{title}</h3>
                      <p className="mt-0.5 text-xs leading-5 text-muted-foreground">{text}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="overflow-hidden rounded-[30px] bg-blush shadow-[0_20px_50px_rgba(114,28,37,0.1)]">
              <Image src={product.images.lifestyle} alt="Momento de fé com devocional e café" width={1600} height={1000} className="h-full min-h-[430px] w-full object-cover" />
            </div>
          </div>
        </section>

        <section className="bg-[linear-gradient(180deg,#fff5f2_0%,#fffaf8_100%)]">
          <div className="mx-auto max-w-6xl px-5 py-12 text-center sm:px-8 md:py-20">
            <FloralDivider />
            <h2 className="mx-auto max-w-2xl font-serif text-[2rem] font-semibold leading-[1.05] text-foreground sm:text-4xl">Abra. Leia. Reflita.<br /><span className="text-dusty-rose">Faça desse momento seu.</span></h2>
            <div className="mx-auto mt-7 max-w-4xl overflow-hidden rounded-[30px] shadow-[0_20px_50px_rgba(114,28,37,0.08)]">
              <Image src={product.images.interior} alt="Interior do Devocional Mulheres com Deus" width={1200} height={900} className="h-auto w-full object-cover" />
            </div>
            <p className="mx-auto mt-6 max-w-2xl text-[14px] leading-6 text-muted-foreground sm:text-base">Cada dia traz uma leitura, uma reflexão e um espaço para sua oração — organizados para que você não precise pensar por onde começar.</p>
            <div className="mx-auto mt-6 grid max-w-xl grid-cols-2 gap-3 text-left text-xs text-foreground/85 sm:text-sm">
              {['Livro físico', '224 páginas', '365 dias de proposta devocional', 'Reflexões', 'Versículos', 'Espaço para anotações'].map((item) => (
                <div key={item} className="flex items-center gap-2 rounded-xl bg-white/70 px-3 py-2"><Check className="h-4 w-4 shrink-0 text-dusty-rose" />{item}</div>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-[#fffaf8]">
          <div className="mx-auto max-w-5xl px-5 py-12 sm:px-8 md:py-20">
            <FloralDivider />
            <h2 className="mx-auto max-w-2xl text-center font-serif text-[2rem] font-semibold leading-[1.05] text-foreground sm:text-4xl">Não são apenas páginas.<br /><span className="text-dusty-rose">É o espaço que você decide reservar para sua fé.</span></h2>
            <div className="mx-auto mt-8 max-w-2xl space-y-3">
              {benefits.map(({ icon: Icon, title, text }) => (
                <div key={title} className="flex gap-4 rounded-2xl border border-dusty-rose/15 bg-white/80 p-4 shadow-[0_8px_30px_rgba(114,28,37,0.04)]">
                  <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-blush text-dusty-rose"><Icon className="h-5 w-5" strokeWidth={1.6} /></span>
                  <div><h3 className="font-serif text-xl font-semibold text-wine">{title}</h3><p className="mt-1 text-[13px] leading-5 text-muted-foreground sm:text-sm">{text}</p></div>
                </div>
              ))}
            </div>
            <div className="relative mx-auto mt-8 max-w-3xl overflow-hidden rounded-[28px]">
              <Image src={product.images.lifestyle} alt="Devocional e café em uma manhã tranquila" width={1600} height={1000} className="h-[300px] w-full object-cover sm:h-[420px]" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/35 via-transparent to-transparent" />
            </div>
          </div>
        </section>

        <VideoCarousel />

        <section className="bg-wine text-primary-foreground">
          <div className="mx-auto max-w-3xl px-5 py-14 text-center sm:px-8 md:py-20">
            <div className="text-gold"><span className="font-serif text-7xl font-semibold leading-none">365</span><p className="mt-1 text-[11px] font-extrabold uppercase tracking-[0.24em]">dias de fé</p></div>
            <h2 className="mt-6 font-serif text-3xl font-semibold leading-tight sm:text-4xl">Não é sobre ler tudo de uma vez.<br />É sobre voltar todos os dias.</h2>
            <p className="mx-auto mt-4 max-w-xl text-[14px] leading-6 text-primary-foreground/80 sm:text-base">Um dia de cada vez, ao longo do ano inteiro. Porque a fé se fortalece na constância — e cada retorno é um passo mais perto de Deus.</p>
            <ArrowDown className="mx-auto mt-6 h-5 w-5 text-gold" />
          </div>
        </section>

        <section className="bg-[radial-gradient(circle_at_50%_0%,#fffefe_0%,#fff6f5_52%,#fcedeb_100%)]">
          <div className="mx-auto max-w-3xl px-5 py-12 sm:px-8 md:py-20">
            <div className="text-center">
              <span className="inline-flex items-center gap-2 rounded-full bg-blush px-4 py-1.5 text-[10px] font-extrabold uppercase tracking-[0.12em] text-wine"><Heart className="h-3.5 w-3.5 fill-current" /> Kit Mulheres com Deus</span>
              <h2 className="mx-auto mt-5 max-w-2xl font-serif text-[2.25rem] font-semibold leading-[1.02] text-wine sm:text-5xl">Um kit completo para transformar seus dias</h2>
              <FloralDivider />
              <p className="mx-auto mt-2 max-w-xl text-[14px] leading-6 text-muted-foreground sm:text-base">Fortaleça sua fé e se aproxime de Deus todos os dias com este kit exclusivo, feito para mulheres que desejam renovar a mente, o coração e o espírito.</p>
            </div>
            <div className="mx-auto mt-7 max-w-2xl">
              <Image src={product.images.kitMug} alt="Kit Mulheres com Deus com devocional e caneca" width={1200} height={1000} className="h-auto w-full object-contain drop-shadow-xl" />
            </div>
            <div className="mx-auto mt-6 max-w-2xl divide-y divide-dusty-rose/20">
              {[
                [BookOpen, 'Devocional 365 dias', 'Um devocional completo para te guiar em uma jornada diária com Deus.'],
                [Coffee, 'Caneca exclusiva', 'Para te lembrar todos os dias que Deus é o seu refúgio e sua força.'],
                [Heart, 'Presente perfeito', 'Para você ou para aquela mulher especial que precisa de fé e inspiração.'],
              ].map(([Icon, title, text]) => {
                const I = Icon as typeof BookOpen
                return <div key={String(title)} className="flex items-start gap-4 py-4"><span className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-blush text-wine"><I className="h-7 w-7" strokeWidth={1.6} /></span><div className="pt-1"><h3 className="font-serif text-2xl font-semibold text-wine">{String(title)}</h3><p className="mt-1 text-[13px] leading-5 text-muted-foreground sm:text-sm">{String(text)}</p></div></div>
              })}
            </div>
            <div className="mx-auto mt-8 max-w-xl text-center">
              <p className="text-xs font-extrabold uppercase tracking-[0.12em] text-wine">Por apenas</p>
              <p className="mt-1 font-serif text-6xl font-semibold leading-none text-wine sm:text-7xl">R$ 69,90</p>
              <a href="#ofertas" className="mt-5 inline-flex w-full items-center justify-center gap-2 rounded-xl bg-wine px-7 py-4 text-xs font-extrabold uppercase tracking-wider text-white shadow-sm transition hover:bg-[#5c151c]"><ShoppingBag className="h-4 w-4" /> Quero meu kit</a>
            </div>
          </div>
        </section>

        <section id="ofertas" className="scroll-mt-4 bg-[#fffaf8]">
          <div className="mx-auto max-w-4xl px-5 py-12 sm:px-8 md:py-20">
            <FloralDivider />
            <h2 className="text-center font-serif text-3xl font-semibold leading-tight text-foreground sm:text-4xl">Escolha a opção que<br /><span className="text-dusty-rose">mais combina com você</span></h2>
            <p className="mx-auto mt-3 max-w-lg text-center text-[13px] leading-5 text-muted-foreground sm:text-sm">Comece com o devocional ou escolha o kit para acompanhar seu momento diário de fé.</p>
            <div className="mx-auto mt-8 grid max-w-2xl gap-4">
              <OfferCard number="01" title="1 Unidade" subtitle="Para você começar sua jornada" price={product.price.now} href={product.buyUrl} />
              <OfferCard number="02" title="Kit Devocional + Caneca" subtitle="Devocional 365 dias + caneca" price={product.kits.kit2.price} href="#" featured />
              <OfferCard number="03" title="Kit 3 Unidades" subtitle="Compartilhe fé com quem você ama" price="A confirmar" href="#" disabled />
            </div>
          </div>
        </section>

        <section className="bg-[linear-gradient(180deg,#fff4f2_0%,#fffaf8_100%)]">
          <div className="mx-auto max-w-5xl px-5 py-12 text-center sm:px-8 md:py-20">
            <FloralDivider />
            <h2 className="font-serif text-3xl font-semibold text-foreground sm:text-4xl">Tudo pensado para você<br /><span className="text-dusty-rose">ter a melhor experiência</span></h2>
            <div className="mt-8 grid grid-cols-2 gap-3 sm:grid-cols-4">
              {[
                [BookOpen, 'Um livro de verdade', 'Conteúdo físico para acompanhar sua rotina.'],
                [Truck, 'Envio para todo o Brasil', 'Receba com segurança onde você estiver.'],
                [Lock, 'Compra segura', 'Seus dados protegidos durante a compra.'],
                [ShieldCheck, 'Pagamento protegido', 'Ambiente seguro para finalizar seu pedido.'],
              ].map(([Icon, title, text]) => {
                const I = Icon as typeof BookOpen
                return <div key={String(title)} className="rounded-2xl border border-dusty-rose/15 bg-white/75 px-3 py-5 shadow-[0_8px_25px_rgba(114,28,37,0.04)]"><span className="mx-auto flex h-10 w-10 items-center justify-center rounded-full bg-blush text-dusty-rose"><I className="h-5 w-5" strokeWidth={1.6} /></span><h3 className="mt-3 font-serif text-base font-semibold text-wine">{String(title)}</h3><p className="mt-1 text-[10px] leading-4 text-muted-foreground sm:text-xs">{String(text)}</p></div>
              })}
            </div>
          </div>
        </section>

        <Faq />

        <section className="bg-wine text-primary-foreground">
          <div className="mx-auto max-w-4xl px-5 py-14 text-center sm:px-8 md:py-20">
            <FloralDivider />
            <p className="text-xs font-extrabold uppercase tracking-[0.2em] text-gold">365 dias de fé</p>
            <h2 className="mx-auto mt-4 max-w-2xl font-serif text-3xl font-semibold leading-tight sm:text-4xl">Que tal começar hoje seu momento diário com Deus?</h2>
            <p className="mx-auto mt-4 max-w-lg text-[14px] leading-6 text-primary-foreground/75 sm:text-base">Alguns minutos por dia podem transformar a forma como você vive sua fé ao longo do ano inteiro.</p>
            <div className="mx-auto mt-7 max-w-sm">
              <Image src={product.images.cover} alt="Devocional Mulheres com Deus" width={800} height={800} className="mx-auto w-48 drop-shadow-2xl sm:w-56" />
              <div className="mt-4 flex items-end justify-center gap-3"><span className="text-sm text-primary-foreground/55 line-through">{product.price.from}</span><span className="font-serif text-5xl font-semibold text-gold">{product.price.now}</span></div>
              <p className="mt-1 text-xs text-primary-foreground/65">ou {product.price.installments}</p>
              <CtaButton href={product.buyUrl} variant="gold" className="mt-5 w-full !rounded-xl !py-4 text-xs"><Heart className="h-4 w-4" /> Quero meu devocional</CtaButton>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-dusty-rose/15 bg-[#fffaf8]">
        <div className="mx-auto max-w-6xl px-5 py-8 text-center sm:px-8">
          <p className="font-serif text-2xl font-semibold text-wine">Mulheres com Deus</p>
          <p className="mt-1 text-xs text-muted-foreground">365 Dias de Fé — um momento com Deus para cada dia do ano.</p>
          <p className="mt-3 text-[10px] text-muted-foreground">ISBN 9786583195050</p>
        </div>
      </footer>
    </div>
  )
}
