// Dados centralizados do produto.
// Onde a informação ainda não foi confirmada, usamos TODO explícito.

export const product = {
  name: 'Devocional Mulheres com Deus',
  tagline: '365 Dias de Fé',
  bigIdea: 'Um momento com Deus para cada dia do ano',

  // Preços confirmados (unidade)
  price: {
    from: 'R$ 119,90',
    now: 'R$ 79,90',
    installments: '6x de R$ 13,31 sem juros',
  },

  // URL de checkout da unidade — TODO: substituir pela URL real
  buyUrl: '#comprar', // TODO: BUY_URL (checkout da unidade)

  // Especificações confirmadas do livro físico
  specs: {
    format: 'Livro físico',
    pages: '224 páginas',
    days: '365 dias de proposta devocional',
    cover: 'Capa brochura',
    dimensions: '23 × 15,1 × 1,3 cm',
    isbn: '9786583195050',
  },

  // Kits — preços NÃO confirmados. Placeholders explícitos.
  kits: {
    kit2: {
      price: 'KIT_2_PRICE', // TODO
      installments: 'KIT_2_INSTALLMENTS', // TODO
      buyUrl: '#comprar', // TODO: KIT_2_BUY_URL
    },
    kit3: {
      price: 'KIT_3_PRICE', // TODO
      installments: 'KIT_3_INSTALLMENTS', // TODO
      buyUrl: '#comprar', // TODO: KIT_3_BUY_URL
    },
  },

  // Vídeos UGC reais — 3 URLs MP4 externas. TODO: substituir.
  videos: {
    ugc1: 'UGC_VIDEO_1', // TODO
    ugc2: 'UGC_VIDEO_2', // TODO
    ugc3: 'UGC_VIDEO_3', // TODO
  },

  images: {
    cover: '/livro-capa.jpg',
    duo: '/livro-duplo.png',
    interior: '/livro-interior.png',
    lifestyle: '/lifestyle-manha.png',
  },
} as const

export type Product = typeof product
