import { NAV_LINKS, whatsappUrl } from '@/lib/site'

export function SiteFooter() {
  return (
    <footer className="border-t border-border bg-background">
      <div className="mx-auto grid max-w-7xl gap-10 px-5 py-14 md:grid-cols-[1.5fr_1fr_1fr] md:px-8">
        <div className="flex flex-col items-start gap-5">
          <a href="#" aria-label="Nora Création — retour en haut de la page">
            <img src="/logo-full.svg" alt="Nora Création" className="logo-img h-12 w-auto object-contain" />
          </a>
          <p className="max-w-xs text-sm leading-relaxed text-muted-foreground">
            Traiteur gastronomique et décoration événementielle pour des réceptions élégantes et inoubliables, partout au Maroc.
          </p>
        </div>

        <nav aria-label="Liens du pied de page" className="flex flex-col gap-3">
          <h2 className="text-xs font-semibold uppercase tracking-[0.2em]">Navigation</h2>
          {NAV_LINKS.map((link) => (
            <a key={link.href} href={link.href} className="text-sm text-muted-foreground hover:text-accent">
              {link.label}
            </a>
          ))}
        </nav>

        <div className="flex flex-col gap-3">
          <h2 className="text-xs font-semibold uppercase tracking-[0.2em]">Contact</h2>
          <a href="tel:+212667071207" className="text-sm text-muted-foreground hover:text-accent">
            +212 6 67 07 12 07
          </a>
          <a
            href={whatsappUrl()}
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-muted-foreground hover:text-accent"
          >
            WhatsApp
          </a>
        </div>
      </div>
      <div className="border-t border-border">
        <p className="mx-auto max-w-7xl px-5 py-6 text-xs text-muted-foreground md:px-8">
          © {new Date().getFullYear()} Nora Création. Tous droits réservés.
        </p>
      </div>
    </footer>
  )
}
