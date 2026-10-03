import { SiteHeader } from '@/components/site-header'
import { Hero } from '@/components/hero'
import { Services } from '@/components/services'
import { Menus } from '@/components/menus'
import { Gallery } from '@/components/gallery'
import { Partners } from '@/components/partners'
import { Contact } from '@/components/contact'
import { SiteFooter } from '@/components/site-footer'
import { WhatsAppButton } from '@/components/whatsapp-button'

export default function Page() {
  return (
    <>
      <SiteHeader />
      <main>
        <Hero />
        <Services />
        <Menus />
        <Gallery />
        <Partners />
        <Contact />
      </main>
      <SiteFooter />
      <WhatsAppButton />
    </>
  )
}
