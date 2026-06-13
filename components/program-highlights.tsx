'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { ArrowRight, BookOpen, Video } from 'lucide-react'

export function ProgramHighlights() {
  const programs = [
    {
      name: 'Pra Tahsin',
      description: "Langkah awal belajar Al-Qur'an bagi yang belum mampu membaca, dari huruf hijaiyah hingga membaca dasar.",
      price: 'Rp 150.000/bln',
    },
    {
      name: 'Tahsin',
      description: 'Memperbaiki dan menyempurnakan bacaan sesuai makharijul huruf dan kaidah tajwid.',
      price: 'Rp 250.000/bln',
    },
    {
      name: 'Tahfidz',
      description: "Pendampingan hafalan Al-Qur'an secara terstruktur dengan metode Mumtaza.",
      price: 'Rp 350.000/bln',
    },
    {
      name: 'Tartil & Tajwid',
      description: 'Menyempurnakan teknik membaca dengan tartil dan penerapan hukum tajwid yang sempurna.',
      price: 'Rp 200.000/bln',
    },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.08 } },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 16 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.4, ease: 'easeOut' } },
  }

  return (
    <section id="program-unggulan" className="islamic-section-bg relative bg-secondary/15 px-4 py-16 md:px-8 md:py-24 border-t border-border/40">
      
      {/* Header Section */}
      <motion.div
        className="mx-auto max-w-4xl space-y-3 text-center"
        initial={{ opacity: 0, y: 15 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <span className="inline-block rounded-full bg-primary/10 px-4 py-1 text-xs font-semibold text-primary uppercase tracking-wider">
          Program Unggulan
        </span>
        <h2 className="text-3xl font-bold text-foreground md:text-4xl tracking-tight">
          Pilih Program yang Sesuai dengan Kebutuhan Anda
        </h2>
        <p className="mx-auto max-w-xl text-sm md:text-base text-muted-foreground">
          Temukan program bimbingan Al-Quran terbaik yang dirancang khusus untuk meningkatkan kemampuan Anda di setiap tingkatan.
        </p>
      </motion.div>

      {/* Grid Cards Program */}
      <motion.div
        className="mx-auto mt-12 grid max-w-6xl gap-5 sm:grid-cols-2 lg:grid-cols-4"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-100px' }}
      >
        {programs.map((program, idx) => (
          <motion.div
            key={idx}
            variants={itemVariants}
            className="group flex flex-col justify-between rounded-2xl border border-border/40 bg-card/60 p-5 md:p-6 backdrop-blur-sm transition-all duration-300 hover:border-primary/30 hover:shadow-md hover:-translate-y-1"
          >
            <div className="space-y-4">
              {/* Icon Container */}
              <div className="inline-flex rounded-xl bg-primary/10 p-2.5 text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground duration-300">
                <BookOpen className="h-5 w-5" />
              </div>
              
              {/* Title & Description */}
              <div className="space-y-1.5">
                <h3 className="text-base md:text-lg font-bold text-foreground tracking-tight">{program.name}</h3>
                <p className="text-xs md:text-sm leading-relaxed text-muted-foreground">
                  {program.description}
                </p>
              </div>
            </div>

            {/* Bottom Info Section */}
            <div className="mt-5 pt-4 border-t border-border/30 space-y-2">
              <span className="inline-flex items-center gap-1.5 rounded-md bg-primary/5 px-2 py-0.5 text-[11px] font-medium text-primary">
                <Video className="h-3 w-3" />
                Online via Zoom
              </span>
              <div className="flex items-baseline justify-between gap-1">
                <span className="text-[11px] text-muted-foreground">Investasi Belajar:</span>
                <span className="text-sm md:text-base font-bold text-primary">{program.price}</span>
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>

      {/* CTA Button */}
      <div className="mt-12 text-center">
        <Link
          href="/program"
          className="group inline-flex items-center gap-2 rounded-xl bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground shadow-sm transition-all hover:bg-primary/95 hover:shadow-md"
        >
          Lihat Detail Program
          <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
        </Link>
      </div>
    </section>
  )
}