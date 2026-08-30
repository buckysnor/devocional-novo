import { product } from '@/lib/product'

export function Footer() {
  return (
    <footer className="border-t border-border bg-background">
      <div className="mx-auto max-w-6xl px-4 py-10 sm:px-6">
        <div className="flex flex-col items-center gap-3 text-center">
          <p className="font-serif text-xl font-semibold text-wine">
            Mulheres com Deus
          </p>
          <p className="max-w-md text-sm text-muted-foreground">
            {product.tagline} — um momento com Deus para cada dia do ano.
          </p>
          <p className="mt-2 text-xs text-muted-foreground">
            ISBN {product.specs.isbn}
          </p>
        </div>

        <div className="mt-8 border-t border-border pt-6 text-center text-xs text-muted-foreground">
          <p>
            © {new Date().getFullYear()} Mulheres com Deus. Todos os direitos
            reservados.
          </p>
          {/* TODO: adicionar links de Política de Privacidade, Termos e Contato */}
        </div>
      </div>
    </footer>
  )
}
