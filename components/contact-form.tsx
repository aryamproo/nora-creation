'use client'

import type { FormEvent } from 'react'
import { Send } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { whatsappUrl } from '@/lib/site'

const fieldClass =
  'w-full rounded-xl border border-border bg-background px-4 py-3 text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring'

export function ContactForm() {
  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    const data = new FormData(event.currentTarget)
    const message = [
      'Bonjour Nora Création,',
      `Je m'appelle ${data.get('name')}.`,
      `Type d'événement : ${data.get('event')}`,
      `Date : ${data.get('date') || 'à définir'} — Invités : ${data.get('guests') || 'à définir'}`,
      `Téléphone : ${data.get('phone')}`,
      '',
      String(data.get('message') ?? ''),
    ].join('\n')
    window.open(whatsappUrl(message), '_blank', 'noopener,noreferrer')
  }

  return (
    <form onSubmit={handleSubmit} className="grid gap-4 rounded-2xl bg-card p-6 text-card-foreground md:grid-cols-2 md:p-8">
      <label className="flex flex-col gap-2 text-sm font-medium">
        Nom complet
        <input name="name" required autoComplete="name" className={fieldClass} placeholder="Nora Benali" />
      </label>
      <label className="flex flex-col gap-2 text-sm font-medium">
        Téléphone
        <input name="phone" type="tel" required autoComplete="tel" className={fieldClass} placeholder="06 12 34 56 78" />
      </label>
      <label className="flex flex-col gap-2 text-sm font-medium">
        Type d&apos;événement
        <select name="event" required defaultValue="" className={fieldClass}>
          <option value="" disabled>
            Choisir…
          </option>
          <option>Mariage</option>
          <option>Anniversaire</option>
          <option>Événement d&apos;entreprise</option>
          <option>Autre</option>
        </select>
      </label>
      <div className="grid grid-cols-2 gap-4">
        <label className="flex flex-col gap-2 text-sm font-medium">
          Date
          <input name="date" type="date" className={fieldClass} />
        </label>
        <label className="flex flex-col gap-2 text-sm font-medium">
          Invités
          <input name="guests" type="number" min={1} inputMode="numeric" className={fieldClass} placeholder="120" />
        </label>
      </div>
      <label className="flex flex-col gap-2 text-sm font-medium md:col-span-2">
        Votre projet
        <textarea
          name="message"
          rows={4}
          className={fieldClass}
          placeholder="Thème, lieu, envies culinaires…"
        />
      </label>
      <Button type="submit" size="lg" className="h-12 rounded-full md:col-span-2">
        <Send className="size-4" aria-hidden="true" />
        Envoyer ma demande via WhatsApp
      </Button>
    </form>
  )
}
