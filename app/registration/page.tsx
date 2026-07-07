import type { Metadata } from 'next'
import { Navigation } from '../../components/navigation'
import { Registration } from '../../components/registration'
import { Footer } from '../../components/footer'

export const metadata: Metadata = {
  title: 'Registrasi - BAZMA Mengaji',
  description: 'Form pendaftaran program belajar Al-Quran BAZMA Mengaji. Isi data Anda untuk dihubungi via WhatsApp.',
}

export default function RegistrationPage() {
  return (
    <main className="min-h-screen bg-background">
      <Navigation />
      <Registration />
      <Footer />
    </main>
  )
}

