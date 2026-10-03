'use client'

import { useState } from 'react'
import { cn } from '@/lib/utils'
import { SectionHeading } from '@/components/section-heading'

const FILTERS = ['Tous', 'Mariages', 'Anniversaires', 'Entreprises'] as const
type Filter = (typeof FILTERS)[number]

const PHOTOS: { src: string; alt: string; category: Exclude<Filter, 'Tous'> }[] = [
  { src: '/images/deco-arche.png', alt: 'Arche florale de cérémonie de mariage', category: 'Mariages' },
  { src: '/images/deco-anniversaire.png', alt: "Table d'anniversaire décorée de ballons dorés", category: 'Anniversaires' },
  { src: '/images/deco-corporate.png', alt: "Dîner de gala d'entreprise", category: 'Entreprises' },
  { src: '/images/hero-table.png', alt: 'Longue table de réception de mariage', category: 'Mariages' },
  { src: '/images/deco-lounge.png', alt: 'Espace lounge bohème sous une tente nomade', category: 'Anniversaires' },
  { src: '/images/hero-canapes.png', alt: "Cocktail dînatoire pour un séminaire d'entreprise", category: 'Entreprises' },
]

export function Gallery() {
  const [filter, setFilter] = useState<Filter>('Tous')
  const photos = filter === 'Tous' ? PHOTOS : PHOTOS.filter((p) => p.category === filter)

  return (
    <section id="galerie" className="scroll-mt-20 bg-secondary py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <SectionHeading
          eyebrow="Galerie"
          title="Nos plus belles réceptions"
          description="Un aperçu des univers que nous avons imaginés pour nos clients."
        />

        <div className="mt-12 flex flex-wrap justify-center gap-2" role="group" aria-label="Filtrer la galerie">
          {FILTERS.map((f) => (
            <button
              key={f}
              onClick={() => setFilter(f)}
              aria-pressed={filter === f}
              className={cn(
                'rounded-full border px-5 py-2.5 text-sm font-medium transition-colors',
                filter === f
                  ? 'border-primary bg-primary text-primary-foreground'
                  : 'border-border bg-card text-foreground hover:border-foreground/40',
              )}
            >
              {f}
            </button>
          ))}
        </div>

        <ul className="mt-12 grid grid-cols-2 gap-4 md:grid-cols-3">
          {photos.map((photo) => (
            <li key={photo.src} className="group relative aspect-square overflow-hidden rounded-2xl">
              <img
                src={photo.src || '/placeholder.svg'}
                alt={photo.alt}
                className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <span className="absolute bottom-3 left-3 rounded-full bg-background/90 px-3 py-1 text-xs font-medium">
                {photo.category}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
