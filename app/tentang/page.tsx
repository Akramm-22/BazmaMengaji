'use client'

import { useEffect, useRef } from 'react'
import { motion, useMotionValue, useTransform, animate, useInView } from 'framer-motion'
import { Heart, Users, GraduationCap } from 'lucide-react'
import { Navigation } from '../../components/navigation'
import { About } from '../../components/about'
import { Teachers } from '../../components/teachers'
import { Footer } from '../../components/footer'

// 1. Komponen Kustom untuk Menggerakkan Angka secara Halus
function AnimatedCounter({ value }: { value: string }) {
  const ref = useRef<HTMLSpanElement>(null)
  
  // Memeriksa jika target memiliki tanda '+' atau desimal seperti '4.9'
  const isPlus = value.includes('+')
  const isDecimal = value.includes('.')
  
  // Mengambil angka murninya saja untuk dianimasikan
  const numericTarget = parseFloat(value.replace(/[^0-9.]/g, ''))
  
  const count = useMotionValue(0)
  
  // Mengatur format output (desimal 1 angka di belakang koma atau pembulatan biasa)
  const rounded = useTransform(count, (latest) => {
    if (isDecimal) {
      return latest.toFixed(1)
    }
    return Math.floor(latest).toString()
  })

  // Memastikan animasi berjalan saat elemen terlihat di layar (InView)
  const isInView = useInView(ref, { once: true, margin: "-50px" })

  useEffect(() => {
    if (isInView) {
      const controls = animate(count, numericTarget, {
        duration: 2, // Durasi pergerakan angka (2 detik)
        ease: [0.16, 1, 0.3, 1], // Efek easeOutExpo yang sangat premium
      })
      return controls.stop
    }
  }, [isInView, count, numericTarget])

  return (
    <span ref={ref}>
      <motion.span>{rounded}</motion.span>
      {isPlus && '+'}
    </span>
  )
}

export default function TentangContent() {
  const stats = [
    { icon: Users, value: '500+', label: 'Santri Aktif' },
    { icon: GraduationCap, value: '15+', label: 'Guru Berkompeten' },
    { icon: Heart, value: '4.9', label: 'Rating Kepuasan' },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 15 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: 'easeOut' },
    },
  }

  return (
    <div className="min-h-screen bg-background text-foreground selection:bg-primary/20">
      <Navigation />

      <main className="relative overflow-hidden islamic-quran-continuous">
        {/* Decorative Background Lighting Blur */}
        <div className="absolute top-0 left-1/2 -z-10 h-[500px] w-full max-w-7xl -translate-x-1/2 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-primary/10 via-transparent to-transparent opacity-60 pointer-events-none" />

        {/* Premium Animated Page Header Banner */}
        <section className="relative w-full border-b border-border/40 bg-secondary/15 py-20 md:py-28 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-transparent pointer-events-none" />
          
          <div className="relative mx-auto max-w-4xl px-4 text-center space-y-4">
            <motion.span 
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4 }}
              className="inline-block rounded-full bg-primary/10 px-4 py-1 text-xs font-semibold text-primary uppercase tracking-wider"
            >
              Kenali Lebih Dekat
            </motion.span>
            
            <motion.h1 
              initial={{ opacity: 0, y: -15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-4xl font-black tracking-tight text-foreground md:text-6xl"
            >
              Tentang Kami
            </motion.h1>
            
            <motion.p 
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="mx-auto max-w-2xl text-sm md:text-base text-muted-foreground leading-relaxed text-balance"
            >
              Temukan nilai-nilai luhur, metodologi pengajaran yang adaptif, serta dedikasi tim pengajar profesional yang melandasi setiap gerak langkah perjuangan dakwah BAZMA Mengaji.
            </motion.p>

            {/* Quick Micro Stats Dashboard dengan Animasi Muncul Berurutan & Angka Bergerak */}
            <motion.div 
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              className="mx-auto pt-8 grid grid-cols-3 max-w-lg gap-4"
            >
              {stats.map((stat, idx) => {
                const Icon = stat.icon
                return (
                  <motion.div 
                    key={idx} 
                    variants={itemVariants}
                    className="flex flex-col items-center justify-center p-3 rounded-2xl border border-border/30 bg-background/40 backdrop-blur-sm shadow-sm hover:border-primary/30 transition-colors duration-300"
                  >
                    <Icon className="h-4 w-4 text-primary mb-1 opacity-80" />
                    <span className="text-base font-black tracking-tight text-foreground md:text-xl">
                      {/* Mengganti string statis dengan komponen counter dinamis */}
                      <AnimatedCounter value={stat.value} />
                    </span>
                    <span className="text-[10px] md:text-xs text-muted-foreground font-medium truncate w-full">{stat.label}</span>
                  </motion.div>
                )
              })}
            </motion.div>
          </div>
        </section>

        {/* Section Content */}
        <About />
        <Teachers />
      </main>

      <Footer />
    </div>
  )
}