import { ChefHat, Flower2, Sparkles } from 'lucide-react'
import { SectionHeading } from '@/components/section-heading'

const SERVICES = [
  {
    icon: ChefHat,
    title: 'Traiteur gastronomique',
    description:
      'Cocktails dînatoires, buffets et repas servis à table. Une cuisine franco-orientale, élaborée à partir de produits frais et de saison.',
  },
  {
    icon: Flower2,
    title: 'Décoration événementielle',
    description:
      'Scénographie, compositions florales, arts de la table et mise en lumière, pensés dans les moindres détails pour votre thème.',
  },
  {
    icon: Sparkles,
    title: 'Organisation clé en main',
    description:
      'Coordination des prestataires, service en salle et installation : vous profitez, nous orchestrons chaque instant.',
  },
]

export function Services() {
  return (
    <section id="services" className="scroll-mt-20 bg-secondary py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <SectionHeading
          eyebrow="Nos services"
          title="Une signature, de l'assiette au décor"
          description="Un interlocuteur unique pour donner à votre réception une cohérence et une élégance sans compromis."
        />
        <ul className="mt-14 grid gap-6 md:grid-cols-3">
          {SERVICES.map(({ icon: Icon, title, description }) => (
            <li key={title} className="flex flex-col gap-5 rounded-2xl bg-card p-8 shadow-sm ring-1 ring-border/60">
              <span className="flex size-12 items-center justify-center rounded-full bg-accent/10 text-accent">
                <Icon className="size-6" aria-hidden="true" />
              </span>
              <h3 className="font-serif text-2xl font-medium">{title}</h3>
              <p className="leading-relaxed text-muted-foreground">{description}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
