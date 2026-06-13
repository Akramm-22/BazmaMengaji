import type { Metadata } from 'next'
import { Navigation } from '../../components/navigation'
import { Programs } from '../../components/programs'
import { Methodology } from '../../components/methodology'
import { Footer } from '../../components/footer'

export const metadata: Metadata = {
  title: 'Program Belajar - BAZMA Mengaji',
  description: 'Pilihan program pembelajaran Al-Quran BAZMA Mengaji: Pra Tahsin, Tahsin, Tahfidz, dan Tartil & Tajwid.',
}

export default function ProgramPage() {
  return (
    <main className="min-h-screen bg-background">
      <Navigation />
      <Programs />
      <Methodology />
      <Footer />
    </main>
  )
}
