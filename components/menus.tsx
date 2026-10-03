'use client'

import { useState } from 'react'
import { cn } from '@/lib/utils'
import { SectionHeading } from '@/components/section-heading'

type Dish = { name: string; description: string; image: string }

const CATEGORIES: { id: string; label: string; dishes: Dish[] }[] = [
  {
    id: 'entrees',
    label: 'Entrées & Cocktails',
    dishes: [
      {
        name: 'Verrines de la mer',
        description: 'Mousse d’avocat, crevettes marinées et agrumes.',
        image: '/images/menu-verrines.png',
      },
      {
        name: 'Feuilletés croustillants',
        description: 'Briouates et mini-pastillas au sésame doré.',
        image: '/images/menu-briouates.png',
      },
    ],
  },
  {
    id: 'plats',
    label: 'Plats',
    dishes: [
      {
        name: 'Tajine d’agneau royal',
        description: 'Pruneaux confits, amandes grillées et sésame.',
        image: '/images/menu-tajine.png',
      },
      {
        name: 'Filet de bar au safran',
        description: 'Risotto crémeux et légumes de saison.',
        image: '/images/menu-filet.png',
      },
    ],
  },
  {
    id: 'desserts',
    label: 'Desserts',
    dishes: [
      {
        name: 'Pièce montée florale',
        description: 'Génoise vanille, crème légère et fleurs fraîches.',
        image: '/images/hero-dessert.png',
      },
      {
        name: 'Mignardises de la maison',
        description: 'Macarons, tartelettes et choux gourmands.',
        image: '/images/menu-patisseries.png',
      },
    ],
  },
]

export function Menus() {
  const [active, setActive] = useState(CATEGORIES[0].id)
  const current = CATEGORIES.find((c) => c.id === active) ?? CATEGORIES[0]

  return (
    <section id="menus" className="mx-auto max-w-7xl scroll-mt-20 px-5 py-20 md:px-8 lg:py-28">
      <SectionHeading
        eyebrow="Nos menus"
        title="Une cuisine généreuse et raffinée"
        description="Chaque menu est entièrement personnalisable selon vos envies, votre nombre d'invités et vos contraintes alimentaires."
      />

      <div role="tablist" aria-label="Catégories de menu" className="mt-12 flex flex-wrap justify-center gap-2">
        {CATEGORIES.map((category) => (
          <button
            key={category.id}
            role="tab"
            id={`tab-${category.id}`}
            aria-selected={active === category.id}
            aria-controls={`panel-${category.id}`}
            onClick={() => setActive(category.id)}
            className={cn(
              'rounded-full border px-5 py-2.5 text-sm font-medium transition-colors',
              active === category.id
                ? 'border-primary bg-primary text-primary-foreground'
                : 'border-border bg-card text-foreground hover:border-foreground/40',
            )}
          >
            {category.label}
          </button>
        ))}
      </div>

      <div
        role="tabpanel"
        id={`panel-${current.id}`}
        aria-labelledby={`tab-${current.id}`}
        className="mt-12 grid gap-8 md:grid-cols-2"
      >
        {current.dishes.map((dish) => (
          <article key={dish.name} className="group overflow-hidden rounded-2xl bg-card ring-1 ring-border/60">
            <div className="aspect-[4/3] overflow-hidden">
              <img
                src={dish.image || '/placeholder.svg'}
                alt={dish.name}
                className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
            </div>
            <div className="flex flex-col gap-2 p-6">
              <h3 className="font-serif text-2xl font-medium">{dish.name}</h3>
              <p className="text-muted-foreground">{dish.description}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}
