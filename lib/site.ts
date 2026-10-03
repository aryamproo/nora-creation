export const WHATSAPP_NUMBER = '33612345678'

export function whatsappUrl(message = "Bonjour Nora Création, je souhaiterais organiser un événement.") {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`
}

export const NAV_LINKS = [
  { href: '#services', label: 'Services' },
  { href: '#menus', label: 'Nos Menus' },
  { href: '#galerie', label: 'Galerie' },
  { href: '#partenaires', label: 'Partenaires' },
  { href: '#contact', label: 'Contact' },
] as const
