'use client'

import { useRef, useState } from 'react'
import { Play, Pause, Volume2, VolumeX, Film } from 'lucide-react'
import { product } from '@/lib/product'

const sources = [product.videos.ugc1, product.videos.ugc2, product.videos.ugc3]

function isRealUrl(src: string) {
  return /^https?:\/\//.test(src)
}

export function VideoCarousel() {
  const refs = useRef<(HTMLVideoElement | null)[]>([])
  const [playing, setPlaying] = useState<number | null>(null)
  const [muted, setMuted] = useState<Record<number, boolean>>({
    0: true,
    1: true,
    2: true,
  })

  const handlePlay = (i: number) => {
    const video = refs.current[i]
    if (!video) return

    if (playing === i) {
      video.pause()
      setPlaying(null)
      return
    }

    // pausa qualquer outro vídeo — apenas um toca por vez
    refs.current.forEach((v, idx) => {
      if (v && idx !== i) v.pause()
    })
    void video.play()
    setPlaying(i)
  }

  const toggleMute = (i: number) => {
    const video = refs.current[i]
    if (!video) return
    const next = !muted[i]
    video.muted = next
    setMuted((m) => ({ ...m, [i]: next }))
  }

  return (
    <section className="bg-secondary/70">
      <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6 md:py-20">
        <h2 className="text-balance text-center font-serif text-3xl font-medium leading-tight text-foreground sm:text-4xl">
          Veja Mulheres com Deus fora desta página.
        </h2>
        <p className="mx-auto mt-4 max-w-xl text-pretty text-center text-[15px] leading-relaxed text-muted-foreground md:text-base">
          Veja de perto o livro, os detalhes e como ele fica nas mãos de quem
          recebeu.
        </p>

        <div className="no-scrollbar snap-x-mandatory mt-10 flex gap-4 overflow-x-auto pb-2 md:grid md:grid-cols-3 md:overflow-visible">
          {sources.map((src, i) => (
            <div
              key={i}
              className="snap-start relative aspect-[9/16] w-[78%] shrink-0 overflow-hidden rounded-2xl border border-border bg-blush sm:w-[46%] md:w-full"
            >
              {isRealUrl(src) ? (
                <>
                  <video
                    ref={(el) => {
                      refs.current[i] = el
                    }}
                    src={src}
                    playsInline
                    preload="metadata"
                    muted={muted[i]}
                    onClick={() => handlePlay(i)}
                    onEnded={() => setPlaying(null)}
                    className="h-full w-full cursor-pointer object-cover"
                  />
                  <div className="pointer-events-none absolute inset-0 flex items-end justify-between p-3">
                    <button
                      type="button"
                      onClick={() => handlePlay(i)}
                      aria-label={playing === i ? 'Pausar vídeo' : 'Reproduzir vídeo'}
                      className="pointer-events-auto flex h-10 w-10 items-center justify-center rounded-full bg-wine/85 text-primary-foreground backdrop-blur"
                    >
                      {playing === i ? (
                        <Pause className="h-5 w-5" />
                      ) : (
                        <Play className="h-5 w-5 translate-x-[1px]" />
                      )}
                    </button>
                    <button
                      type="button"
                      onClick={() => toggleMute(i)}
                      aria-label={muted[i] ? 'Ativar som' : 'Desativar som'}
                      className="pointer-events-auto flex h-10 w-10 items-center justify-center rounded-full bg-black/40 text-white backdrop-blur"
                    >
                      {muted[i] ? (
                        <VolumeX className="h-5 w-5" />
                      ) : (
                        <Volume2 className="h-5 w-5" />
                      )}
                    </button>
                  </div>
                </>
              ) : (
                // Placeholder até termos as URLs reais dos 3 vídeos (UGC_VIDEO_1..3)
                <div className="flex h-full w-full flex-col items-center justify-center gap-3 text-center text-dusty-rose">
                  <Film className="h-8 w-8" strokeWidth={1.5} />
                  <span className="px-4 text-xs font-medium uppercase tracking-wide text-muted-foreground">
                    Vídeo {i + 1}
                    <br />
                    (em breve)
                  </span>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
