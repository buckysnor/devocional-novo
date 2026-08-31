// Dados centralizados do produto.
// Onde a informação ainda não foi confirmada, usamos TODO explícito.

export const product = {
  name: 'Devocional Mulheres com Deus',
  tagline: '365 Dias de Fé',
  bigIdea: 'Um momento com Deus para cada dia do ano',

  // Preços confirmados (unidade)
  price: {
    from: 'R$ 59,90',
    now: 'R$ 29,90',
    installments: 'em até 6x no cartão',
  },

  // URL de checkout confirmada
  buyUrl: 'https://holdrey.pay.yampi.com.br/r/RMQHSS8ZDA',

  // Especificações confirmadas do livro físico
  specs: {
    format: 'Livro físico',
    pages: '224 páginas',
    days: '365 dias de proposta devocional',
    cover: 'Capa brochura',
    dimensions: '23 × 15,1 × 1,3 cm',
    isbn: '9786583195050',
  },

  // Kits
  kits: {
    kit2: {
      price: 'R$ 69,90',
      installments: '',
      buyUrl: '#comprar', // TODO: confirmar URL específica do kit devocional + caneca
    },
    kit3: {
      price: 'KIT_3_PRICE', // TODO
      installments: 'KIT_3_INSTALLMENTS', // TODO
      buyUrl: '#comprar', // TODO: KIT_3_BUY_URL
    },
  },

  // Vídeos UGC reais hospedados no Shopify CDN.
  videos: {
    ugc1: 'https://cdn.shopify.com/videos/c/o/v/887e509971a942d38e1b8034ce2a68b9.mp4',
    ugc2: 'https://cdn.shopify.com/videos/c/o/v/f15e637cbf0b4949b2677b12f9fc7aaf.mp4',
    ugc3: 'https://cdn.shopify.com/videos/c/o/v/209c9bf8721b4d5f97ad7c1c6accdb1d.mp4',
    ugc4: 'https://cdn.shopify.com/videos/c/o/v/47e10a7e552045a3be9819da24859d88.mp4',
    ugc5: 'https://cdn.shopify.com/videos/c/o/v/cdf7b8733eb14a3682de65c46e7faad2.mp4',
  },

  images: {
    cover: '/livro-capa.jpg',
    duo: '/livro-duplo.png',
    kitMug: '/kit-livro-caneca.webp',
    interior: '/livro-interior.png',
    lifestyle: '/lifestyle-manha.png',
  },
} as const

export type Product = typeof product
