import { SectionHeading } from '@/components/section-heading'

const PARTNERS = [
  'Domaine des Oliviers',
  'Château Belvédère',
  'Fleurs & Sens',
  'Studio Lumière',
  'Maison Ambre',
  'Les Salons du Lac',
]

export function Partners() {
  return (
    <section id="partenaires" className="mx-auto max-w-7xl scroll-mt-20 px-5 py-20 md:px-8 lg:py-28">
      <SectionHeading
        eyebrow="Partenaires"
        title="Ils nous font confiance"
        description="Lieux de réception, fleuristes et photographes avec qui nous aimons collaborer."
      />
      <ul className="mt-12 grid grid-cols-2 gap-px overflow-hidden rounded-2xl bg-border ring-1 ring-border md:grid-cols-3">
        {PARTNERS.map((name) => (
          <li
            key={name}
            className="flex h-28 items-center justify-center bg-background px-4 text-center font-serif text-xl italic text-foreground/70"
          >
            {name}
          </li>
        ))}
      </ul>
    </section>
  )
}
