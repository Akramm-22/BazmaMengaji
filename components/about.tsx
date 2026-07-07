'use client'

import { motion } from 'framer-motion'
import { Heart, Target, Lightbulb, Users, CheckCircle2, BookOpen } from 'lucide-react'

export function About() {
  const values = [
    {
      icon: Heart,
      title: 'Niat & Komitmen',
      description: 'Kami berkomitmen membantu setiap peserta menghafal dan memahami Al-Quran dengan tulus.',
    },
    {
      icon: Target,
      title: 'Fokus Hasil',
      description: 'Program kami dirancang untuk mencapai hasil yang terukur dan berkelanjutan.',
    },
    {
      icon: Lightbulb,
      title: 'Inovasi Metode',
      description: 'Menggunakan metode pembelajaran modern yang terbukti efektif.',
    },
    {
      icon: Users,
      title: 'Dukungan Komunitas',
      description: 'Membangun komunitas pembelajar yang saling mendukung dan memotivasi.',
    },
  ]

  const metodologiData = [
    {
      program: 'Pra Tahsin',
      metode: 'Metode Tilawati',
      keterangan: "Diperuntukkan bagi peserta yang belum mampu membaca Al-Qur'an. Mengenal huruf hijaiyah, harakat, dan huruf sambung hingga siap masuk Tahsin.",
      teknis: 'Online & Offline',
    },
    {
      program: 'Tahsin',
      metode: 'Metode Tilawati',
      keterangan: 'Memperbaiki dan menyempurnakan bacaan sesuai makharijul huruf dan kaidah tajwid hingga membaca dengan tartil.',
      teknis: 'Online & Offline',
    },
    {
      program: 'Tahfidz',
      metode: 'Mumtaza',
      keterangan: "Pendampingan hafalan Al-Qur'an secara terstruktur memanfaatkan Al-Qur'an tikrar dan pendekatan khusus untuk menjaga kualitas hafalan.",
      teknis: 'Online & Offline',
    },
    {
      program: 'Tilawah',
      metode: 'Naghom Islamiyyah',
      keterangan: 'Membiasakan interaksi harian serta menyempurnakan teknik membaca dengan irama Al-Qur\'an yang indah dan harmonis.',
      teknis: 'Online & Offline',
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
    hidden: { opacity: 0, y: 12 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.4, ease: 'easeOut' },
    },
  }

  return (
    <section id="about" className="islamic-section-bg relative space-y-28 bg-background/40 backdrop-blur-md px-4 py-16 md:px-8 md:py-24 overflow-hidden border-t border-border/40">
      
      {/* 1. VISION & MISSION SECTION */}
      <motion.div
        className="mx-auto max-w-6xl space-y-12"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-100px' }}
        variants={containerVariants}
      >
        <motion.div variants={itemVariants} className="space-y-4 text-center">
          <span className="inline-block rounded-full bg-primary/10 px-4 py-1 text-xs font-semibold text-primary uppercase tracking-wider">
            Visi & Misi
          </span>
          <h2 className="text-3xl font-bold text-foreground md:text-4xl tracking-tight">
            Arah Gerakan BAZMA Mengaji
          </h2>
          <p className="mx-auto max-w-2xl text-base text-muted-foreground">
            Ikhtiar bersama untuk melahirkan masyarakat yang bertumbuh, mencintai, dan menjadikan Al-Qur'an sebagai kompas kehidupan.
          </p>
        </motion.div>

        <div className="grid gap-6 lg:grid-cols-5 items-stretch">
          {/* Card Visi */}
          <motion.div
            variants={itemVariants}
            className="lg:col-span-2 rounded-2xl border border-border/50 bg-card/70 p-6 md:p-8 backdrop-blur shadow-sm flex flex-col justify-center"
          >
            <div className="space-y-4">
              <div className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-primary/10 text-primary text-lg">
                🕌
              </div>
              <h3 className="text-xl font-bold text-foreground">Visi Kami</h3>
              <p className="text-muted-foreground text-sm md:text-base leading-relaxed">
                Menjadi gerakan pembelajaran Al-Qur'an yang melahirkan generasi dan masyarakat yang cinta, dekat, serta bertumbuh bersama Al-Qur'an sepanjang hayat.
              </p>
            </div>
          </motion.div>

          {/* List Misi */}
          <motion.div variants={itemVariants} className="lg:col-span-3 grid gap-3 sm:grid-cols-1">
            {[
              'Memudahkan akses belajar Al-Qur\'an bagi seluruh kalangan melalui pembelajaran yang terstruktur dan berkualitas.',
              'Meningkatkan kemampuan membaca Al-Qur\'an melalui program Pra Tahsin dan Tahsin.',
              'Menumbuhkan budaya menghafal dan menjaga Al-Qur\'an melalui program Tahfidz.',
              'Membiasakan interaksi harian dengan Al-Qur\'an melalui program Tilawah.',
              'Menanamkan nilai-nilai Al-Qur\'an sebagai pedoman dalam kehidupan pribadi, keluarga, dan masyarakat.',
            ].map((misi, idx) => (
              <div
                key={idx}
                className="rounded-xl border border-border/40 bg-card/40 p-4 backdrop-blur-sm flex items-start gap-3 transition-colors hover:border-primary/20 hover:bg-card/60"
              >
                <CheckCircle2 className="mt-0.5 h-4 w-4 text-primary flex-shrink-0" />
                <p className="text-xs md:text-sm font-medium text-foreground/90 leading-relaxed">{misi}</p>
              </div>
            ))}
          </motion.div>
        </div>
      </motion.div>

      {/* 2. HISTORY & TIMELINE SECTION */}
      <div className="mx-auto max-w-4xl space-y-12">
        <motion.div
          className="space-y-3 text-center"
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
        >
          <span className="inline-block rounded-full bg-primary/10 px-4 py-1 text-xs font-semibold text-primary uppercase tracking-wider">
            Tentang Kami
          </span>
          <h2 className="text-3xl font-bold text-foreground tracking-tight">
            Kenali Lebih Jauh BAZMA Mengaji
          </h2>
        </motion.div>

        <div className="grid gap-8 md:grid-cols-3 items-start">
          <motion.div
            className="md:col-span-1 rounded-2xl border border-border/50 bg-card/70 p-6 backdrop-blur shadow-sm md:sticky md:top-24"
            initial={{ opacity: 0, x: -15 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
          >
            <h3 className="text-lg font-bold text-foreground mb-2">Gerakan Pembelajaran</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">
              BAZMA Mengaji hadir untuk memudahkan masyarakat dalam belajar, membaca, memperbaiki bacaan, menghafal, dan membiasakan interaksi dengan Al-Qur'an.
            </p>
          </motion.div>

          {/* Timeline Deskripsi Gerakan */}
          <div className="md:col-span-2 relative pl-6 border-l border-border space-y-8 ml-2 md:ml-0">
            {[
              { 
                tag: 'Inklusif', 
                title: 'Terbuka untuk Semua Kalangan', 
                desc: 'Memanfaatkan teknologi dan sistem terstruktur, kami membuka kesempatan bagi setiap muslim untuk belajar sesuai kemampuan dan kebutuhannya, tanpa dibatasi usia, profesi, maupun latar belakang pendidikan.' 
              },
              { 
                tag: 'Lebih Dari Belajar', 
                title: 'Ikhtiar Menumbuhkan Cinta', 
                desc: 'Bukan sekadar program belajar, ini adalah ikhtiar konkrit menghadirkan Al-Qur\'an lebih dekat dalam kehidupan sehari-hari demi menumbuhkan kecintaan yang mendalam terhadap kitab suci.' 
              },
              { 
                tag: 'Tujuan Akhir', 
                title: 'Al-Qur\'an Sebagai Pedoman Hidup', 
                desc: 'Melalui program berkala, kami berkomitmen mendampingi setiap peserta agar Al-Qur\'an tidak hanya menjadi bacaan yang dilafalkan, melainkan pedoman utama yang mengarahkan cara berpikir, bersikap, dan menjalani kehidupan.' 
              }
            ].map((item, index) => (
              <motion.div
                key={index}
                className="relative space-y-1.5"
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.08, duration: 0.4 }}
              >
                {/* Bulat Ring Glow */}
                <span className="absolute -left-[30px] top-1.5 h-3 w-3 rounded-full bg-primary ring-4 ring-primary/10 border border-background shadow-inner" />
                <span className="text-[10px] font-bold text-primary tracking-wider uppercase bg-primary/10 px-2 py-0.5 rounded">{item.tag}</span>
                <h4 className="text-sm font-semibold text-foreground">{item.title}</h4>
                <p className="text-xs md:text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* 3. CORE VALUES SECTION */}
      <motion.div
        className="mx-auto max-w-6xl space-y-10"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-100px' }}
        variants={containerVariants}
      >
        <motion.div variants={itemVariants} className="space-y-2 text-center">
          <h3 className="text-2xl font-bold text-foreground md:text-3xl tracking-tight">Nilai-Nilai Fundamental</h3>
          <p className="mx-auto max-w-xl text-sm text-muted-foreground">
            Prinsip utama yang senantiasa memandu keputusan, metode pengajaran, dan dedikasi kami.
          </p>
        </motion.div>

        <motion.div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4" variants={containerVariants}>
          {values.map((val, idx) => {
            const IconComponent = val.icon
            return (
              <motion.div
                key={idx}
                className="rounded-2xl border border-border/40 bg-card/60 p-5 backdrop-blur-sm transition-all shadow-sm hover:border-primary/30 hover:shadow-md hover:-translate-y-0.5 duration-300"
                variants={itemVariants}
              >
                <div className="inline-flex rounded-xl p-2.5 bg-primary/10 text-primary mb-3">
                  <IconComponent className="h-5 w-5" />
                </div>
                <h4 className="font-semibold text-foreground text-sm md:text-base mb-1">{val.title}</h4>
                <p className="text-xs md:text-sm text-muted-foreground leading-relaxed">{val.description}</p>
              </motion.div>
            )
          })}
        </motion.div>
      </motion.div>

      {/* 4. METHODOLOGY DATA SECTION */}
      <motion.div
        className="mx-auto max-w-6xl space-y-10"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={containerVariants}
      >
        <motion.div variants={itemVariants} className="space-y-2 text-center">
          <div className="inline-flex h-8 w-8 items-center justify-center rounded-xl bg-primary/10 text-primary">
            <BookOpen className="h-4 w-4" />
          </div>
          <h3 className="text-2xl font-bold text-foreground md:text-3xl tracking-tight">Program & Metodologi Belajar</h3>
          <p className="mx-auto max-w-xl text-sm text-muted-foreground">
            Kurikulum berjenjang terstruktur yang disesuaikan dengan kapasitas pemahaman dasar setiap peserta.
          </p>
        </motion.div>

        <motion.div variants={itemVariants} className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
          {metodologiData.map((metode, idx) => (
            <div
              key={idx}
              className="rounded-2xl border border-border/40 bg-card/70 p-5 backdrop-blur-sm flex flex-col justify-between shadow-sm border-l-4 border-l-primary transition-all hover:shadow-md hover:-translate-y-0.5"
            >
              <div className="space-y-3">
                <span className="text-[10px] font-semibold text-primary bg-primary/10 px-2 py-0.5 rounded">{metode.metode}</span>
                <h4 className="text-base font-bold text-foreground tracking-tight">{metode.program}</h4>
                <p className="text-xs md:text-sm text-muted-foreground leading-relaxed">{metode.keterangan}</p>
              </div>
              <div className="mt-4 pt-3 border-t border-border/30 flex justify-between items-center text-[11px] text-muted-foreground">
                <span>Format:</span>
                <span className="font-medium text-foreground">{metode.teknis}</span>
              </div>
            </div>
          ))}
        </motion.div>
      </motion.div>

    </section>
  )
}