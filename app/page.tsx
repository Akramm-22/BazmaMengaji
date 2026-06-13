'use client'

import { motion } from 'framer-motion'
import { Navigation } from '../components/navigation'
import { Hero } from '../components/hero'
import { ProgramHighlights } from '../components/program-highlights'
import { WhyChooseUs } from '../components/why-choose-us'
import { Testimonials } from '../components/testimonials'
import { CtaSection } from '../components/cta-section'
import { FAQ } from '../components/faq'
import { Footer } from '../components/footer'

export default function Page() {
  return (
    <div className="min-h-screen bg-background text-foreground selection:bg-primary/20">
      
      {/* Navigation - Tetap berada di paling atas saat di-scroll */}
      <Navigation />

      {/* Main Container dengan Efek Dekorasi Cahaya Latar Sesuai Gambar Referensi */}
      <main className="relative overflow-hidden flex flex-col">
        
        {/* Ornamen Cahaya Ambient 1: Pojok Kanan Atas (Area Hero) */}
        <div className="absolute top-[-10%] right-[-5%] -z-10 h-[600px] w-[600px] rounded-full bg-primary/10 blur-[130px] opacity-70 pointer-events-none" />
        
        {/* Ornamen Cahaya Ambient 2: Kiri Tengah (Area Antara Program & WhyChooseUs) */}
        <div className="absolute top-[35%] left-[-10%] -z-10 h-[500px] w-[500px] rounded-full bg-primary/5 blur-[120px] opacity-60 pointer-events-none" />

        {/* Ornamen Cahaya Ambient 3: Kanan Bawah (Dekat Area FAQ) */}
        <div className="absolute bottom-[15%] right-[-10%] -z-10 h-[550px] w-[550px] rounded-full bg-secondary/20 blur-[140px] opacity-50 pointer-events-none" />

        {/* 1. Hero Section - Sambutan Utama */}
        <Hero />

        {/* 2. Program Highlights - Cuplikan Singkat Program */}
        <div className="relative z-10">
          <ProgramHighlights />
        </div>

        {/* Spacer Elegan Antar-Section menggunakan Border Tipis Transparan */}
        <div className="mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="border-t border-border/30" />
        </div>

        {/* 3. Why Choose Us - Keunggulan Metode */}
        <div className="relative z-10">
          <WhyChooseUs />
        </div>

        {/* 4. Testimonials - Bukti & Feedback Santri */}
        <div className="w-full bg-secondary/5 py-4 border-y border-border/20 backdrop-blur-sm">
          <Testimonials />
        </div>

        {/* 5. CTA Section - Ajakan Mendaftar */}
        <div className="relative z-10 my-8 sm:my-12">
          <CtaSection />
        </div>

        {/* 6. FAQ - Tanya Jawab Umum */}
        <div className="relative z-10 pb-16 md:pb-24">
          <FAQ />
        </div>

      </main>

      {/* Footer Premium */}
      <Footer />
    </div>
  )
}