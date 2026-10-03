import { ArrowRight } from 'lucide-react'
import { buttonVariants } from '@/components/ui/button'
import { cn } from '@/lib/utils'
import { whatsappUrl } from '@/lib/site'

export function Hero() {
  return (
    <section className="mx-auto grid max-w-7xl items-center gap-12 px-5 pb-20 pt-12 md:px-8 lg:grid-cols-2 lg:gap-16 lg:pb-28 lg:pt-20">
      <div className="flex flex-col gap-8">
        <p className="text-xs font-semibold uppercase tracking-[0.3em] text-accent">Traiteur & Décoration</p>
        <h1 className="text-balance font-serif text-5xl font-medium leading-[1.05] tracking-tight md:text-6xl lg:text-7xl">
          L&apos;art de recevoir, <em className="font-normal italic text-accent">sublimé</em>.
        </h1>
        <p className="max-w-lg text-pretty text-lg leading-relaxed text-muted-foreground">
          Mariages, anniversaires, événements d&apos;entreprise : nous imaginons une gastronomie raffinée et une
          décoration sur mesure pour des moments qui vous ressemblent.
        </p>
        <div className="flex flex-col gap-3 sm:flex-row">
          <a href="#contact" className={cn(buttonVariants({ size: 'lg' }), 'h-12 gap-2 rounded-full px-8')}>
            Demander un devis
            <ArrowRight className="size-4" aria-hidden="true" />
          </a>
          <a
            href={whatsappUrl()}
            target="_blank"
            rel="noopener noreferrer"
            className={cn(buttonVariants({ size: 'lg', variant: 'outline' }), 'h-12 rounded-full bg-transparent px-8')}
          >
            Nous écrire sur WhatsApp
          </a>
        </div>
        <dl className="grid max-w-md grid-cols-3 gap-6 border-t border-border pt-8">
          {[
            ['12+', "ans d'expérience"],
            ['600', 'événements'],
            ['100%', 'fait maison'],
          ].map(([value, label]) => (
            <div key={label}>
              <dt className="sr-only">{label}</dt>
              <dd className="font-serif text-3xl font-medium">{value}</dd>
              <dd className="text-xs text-muted-foreground">{label}</dd>
            </div>
          ))}
        </dl>
      </div>

      <div className="grid h-[480px] grid-cols-2 grid-rows-2 gap-4 md:h-[580px]">
        <img
          src="/images/hero-table.png"
          alt="Table de réception de mariage dressée avec des compositions florales et des bougies"
          className="row-span-2 h-full w-full rounded-2xl object-cover"
        />
        <img
          src="/images/hero-canapes.png"
          alt="Canapés gastronomiques présentés sur un plateau de marbre"
          className="h-full w-full rounded-2xl object-cover"
        />
        <img
          src="/images/hero-dessert.png"
          alt="Pièce montée blanche décorée de fleurs fraîches"
          className="h-full w-full rounded-2xl object-cover"
        />
      </div>
    </section>
  )
}
