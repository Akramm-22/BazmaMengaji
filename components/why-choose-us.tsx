'use client'

import { motion } from 'framer-motion'
import { BookOpen, Sparkles, GraduationCap, HeartHandshake, Newspaper, Building2 } from 'lucide-react'

export function WhyChooseUs() {
  const reasons = [
    {
      icon: BookOpen,
      title: 'Program Belajar Lengkap',
      description: 'Berbagai pilihan program dari dasar hingga mahir yang bisa disesuaikan dengan kebutuhan kamu.',
    },
    {
      icon: Sparkles,
      title: 'Metode Pembelajaran Terkini',
      description: 'Menggunakan metode modern yang telah terbukti efektif dan mudah dipahami oleh semua kalangan.',
    },
    {
      icon: GraduationCap,
      title: 'Guru Berkualitas',
      description: 'Pengajar berpengalaman dan tersertifikasi yang siap membimbing perjalanan belajar kamu.',
    },
    {
      icon: HeartHandshake,
      title: 'Belajar Sambil Beramal',
      description: 'Setiap biaya pendaftaran sebagian dialokasikan untuk program sosial dan dakwah.',
    },
    {
      icon: Newspaper,
      title: 'Informasi Terkini',
      description: 'Akses informasi dan artikel terbaru seputar kajian Al-Quran dan perkembangan pendidikan Islam.',
    },
    {
      icon: Building2,
      title: 'Fasilitas Belajar Terbaik',
      description: 'Ruang belajar nyaman dan platform online yang memudahkan proses pembelajaran.',
    },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.06 },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 16 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.4, ease: 'easeOut' } },
  }

  return (
    <section id="kenapa-kami" className="islamic-section-bg relative bg-background/40 backdrop-blur-md px-4 py-16 md:px-8 md:py-24 border-t border-border/40 overflow-hidden">
      
      {/* Header Section */}
      <motion.div
        className="mx-auto max-w-4xl space-y-3 text-center"
        initial={{ opacity: 0, y: 15 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <span className="inline-block rounded-full bg-primary/10 px-4 py-1 text-xs font-semibold text-primary uppercase tracking-wider">
          Kenapa Memilih Kami?
        </span>
        <h2 className="text-3xl font-bold text-foreground md:text-4xl tracking-tight">
          Tempat Terbaik untuk Belajar Al-Quran
        </h2>
        <p className="mx-auto max-w-2xl text-sm md:text-base text-muted-foreground">
          Bazma Mengaji hadir untuk mendampingi setiap langkah perjalanan Anda dalam belajar, memahami, dan mengamalkan Al-Qur'an.
        </p>
      </motion.div>

      {/* Reasons Grid */}
      <motion.div
        className="mx-auto mt-12 grid max-w-6xl gap-5 sm:grid-cols-2 lg:grid-cols-3"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-100px' }}
      >
        {reasons.map((reason, idx) => {
          const Icon = reason.icon
          return (
            <motion.div
              key={idx}
              variants={itemVariants}
              className="group space-y-4 rounded-2xl border border-border/40 bg-card/60 p-5 md:p-6 backdrop-blur-sm transition-all duration-300 hover:border-primary/30 hover:shadow-md hover:-translate-y-1"
            >
              {/* Icon Wrapping Box */}
              <div className="inline-flex rounded-xl bg-primary/10 p-2.5 text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground duration-300">
                <Icon className="h-5 w-5" />
              </div>

              {/* Text Information */}
              <div className="space-y-1.5">
                <h3 className="text-base font-bold text-foreground tracking-tight group-hover:text-primary transition-colors duration-200">
                  {reason.title}
                </h3>
                <p className="text-xs md:text-sm leading-relaxed text-muted-foreground">
                  {reason.description}
                </p>
              </div>
            </motion.div>
          )
        })}
      </motion.div>
      
    </section>
  )
}