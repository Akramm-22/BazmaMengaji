'use client'

import { motion } from 'framer-motion'
import { Star, Award, BookOpen } from 'lucide-react'

export function Teachers() {
  const teachers = [
    {
      id: 1,
      name: 'Ustadz Ahmad Wijaya',
      title: 'Kepala Program & Pengajar Utama',
      bio: 'Hafiz Al-Quran dengan 15 tahun pengalaman mengajar Quran dengan metode terpercaya dan efektif untuk semua usia.',
      rating: 4.9,
      specialty: 'Program Hafiz & Tajweed Lanjutan',
      badge: 'Instruktur Premium',
      initials: 'AW',
    },
    {
      id: 2,
      name: "Ustadzah Fatimah Sa'id",
      title: 'Pengajar Pra Tahsin',
      bio: 'Spesialis mengajar dasar Al-Quran dengan metode interaktif dan menyenangkan untuk santri pemula.',
      rating: 4.8,
      specialty: 'Program Dasar & Pengenalan',
      badge: 'Instruktur Bersertifikat',
      initials: 'FS',
    },
    {
      id: 3,
      name: 'Ustadz Muhammad Hasan',
      title: 'Pengajar Tajweed',
      bio: 'Lulusan Al-Azhar dengan keahlian tajweed mendalam dan pengalaman sertifikasi internasional.',
      rating: 4.7,
      specialty: 'Tajweed Menengah & Lanjutan',
      badge: 'Instruktur Bersertifikat',
      initials: 'MH',
    },
    {
      id: 4,
      name: 'Ustadzah Aisyah Nur',
      title: 'Pengajar Tahfidz',
      bio: 'Spesialis hafalan Al-Quran dengan pendekatan personal dan bimbingan yang fokus pada kualitas hafalan.',
      rating: 4.9,
      specialty: 'Program Hafalan & Murajaah',
      badge: 'Instruktur Premium',
      initials: 'AN',
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
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.4, ease: 'easeOut' },
    },
  }

  return (
    <section id="teachers" className="islamic-section-bg relative space-y-16 bg-background/40 backdrop-blur-md px-4 py-16 md:px-8 md:py-24 overflow-hidden border-t border-border/40">
      
      {/* Header Section */}
      <motion.div
        className="mx-auto max-w-4xl space-y-3 text-center"
        initial={{ opacity: 0, y: 15 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <span className="inline-block rounded-full bg-primary/10 px-4 py-1 text-xs font-semibold text-primary uppercase tracking-wider">
          Tim Pendidik
        </span>
        <h2 className="text-3xl font-bold text-foreground md:text-4xl tracking-tight">
          Asatidz & Pengajar Berpengalaman
        </h2>
        <p className="mx-auto max-w-2xl text-sm md:text-base text-muted-foreground">
          Tim pengajar profesional kami berdedikasi memberikan bimbingan terbaik untuk setiap santri dengan metode yang telah terbukti efektif.
        </p>
      </motion.div>

      {/* Grid Cards Teachers */}
      <motion.div
        className="mx-auto grid max-w-6xl gap-5 sm:grid-cols-2 lg:grid-cols-4"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-100px' }}
      >
        {teachers.map((teacher) => (
          <motion.div
            key={teacher.id}
            variants={itemVariants}
            className="group flex flex-col justify-between overflow-hidden rounded-2xl border border-border/40 bg-card/60 p-5 backdrop-blur-sm transition-all duration-300 hover:border-primary/30 hover:shadow-md hover:-translate-y-1"
          >
            <div className="space-y-4">
              {/* Card Header Info */}
              <div className="flex items-start justify-between">
                {/* Initial Avatar */}
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-primary/10 font-bold text-primary text-sm tracking-wider border border-primary/20">
                  {teacher.initials}
                </div>
                {/* Rating Badge */}
                <div className="flex items-center gap-1 rounded-md bg-amber-500/10 px-2 py-0.5 text-xs font-semibold text-amber-600">
                  <Star className="h-3 w-3 fill-amber-500 text-amber-500" />
                  <span>{teacher.rating}</span>
                </div>
              </div>

              {/* Identity */}
              <div className="space-y-1">
                <h3 className="text-base font-bold text-foreground tracking-tight group-hover:text-primary transition-colors duration-200">
                  {teacher.name}
                </h3>
                <p className="text-xs font-medium text-primary flex items-center gap-1">
                  <Award className="h-3 w-3 flex-shrink-0" />
                  {teacher.title}
                </p>
              </div>

              {/* Short Bio */}
              <p className="text-xs md:text-sm text-muted-foreground leading-relaxed line-clamp-3">
                {teacher.bio}
              </p>
            </div>

            {/* Card Footer Info */}
            <div className="mt-5 pt-4 border-t border-border/30 space-y-4">
              <div className="flex items-center gap-1.5 text-xs text-muted-foreground">
                <BookOpen className="h-3.5 w-3.5 text-primary/70 flex-shrink-0" />
                <span className="line-clamp-1">{teacher.specialty}</span>
              </div>

              <button className="w-full rounded-xl border border-border bg-background/50 px-4 py-2 text-xs font-semibold text-foreground transition-all duration-200 hover:bg-primary hover:text-primary-foreground hover:border-primary shadow-sm">
                Lihat Profil
              </button>
            </div>
          </motion.div>
        ))}
      </motion.div>
      
    </section>
  )
}