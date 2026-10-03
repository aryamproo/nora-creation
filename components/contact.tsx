import { Mail, MapPin, Phone } from 'lucide-react'
import { ContactForm } from '@/components/contact-form'

export function Contact() {
  return (
    <section id="contact" className="scroll-mt-20 bg-primary py-20 text-primary-foreground lg:py-28">
      <div className="mx-auto grid max-w-7xl gap-12 px-5 md:px-8 lg:grid-cols-[1fr_1.2fr] lg:gap-20">
        <div className="flex flex-col gap-6">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-amber-400">Contact</p>
          <h2 className="text-balance font-serif text-4xl font-medium tracking-tight md:text-5xl">
            Parlons de votre événement
          </h2>
          <p className="max-w-md leading-relaxed text-primary-foreground/70">
            Décrivez-nous votre projet : nous revenons vers vous sous 24h avec une proposition personnalisée.
          </p>
          <ul className="mt-4 flex flex-col gap-4 text-primary-foreground/85">
            <li className="flex items-center gap-3">
              <Phone className="size-5 text-amber-400" aria-hidden="true" />
              <a href="tel:+33612345678" className="hover:underline">
                +33 6 12 34 56 78
              </a>
            </li>
            <li className="flex items-center gap-3">
              <Mail className="size-5 text-amber-400" aria-hidden="true" />
              <a href="mailto:contact@noracreation.fr" className="hover:underline">
                contact@noracreation.fr
              </a>
            </li>
            <li className="flex items-center gap-3">
              <MapPin className="size-5 text-amber-400" aria-hidden="true" />
              Île-de-France et alentours
            </li>
          </ul>
        </div>
        <ContactForm />
      </div>
    </section>
  )
}
