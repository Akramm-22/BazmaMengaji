'use client'

import { motion, useMotionValue, useTransform } from 'framer-motion'
import Link from 'next/link'
import { ArrowRight, BookOpen } from 'lucide-react'

export function Hero() {
  // 1. Setup nilai koordinat untuk efek interaksi kemiringan 3D saat disentuh kursor
  const x = useMotionValue(0)
  const y = useMotionValue(0)

  // Mengubah pergerakan kursor mouse menjadi derajat rotasi kemiringan 3D yang halus
  const rotateX = useTransform(y, [-150, 150], [15, -15])
  const rotateY = useTransform(x, [-150, 150], [-15, 15])

  function handleMouseMove(event: React.MouseEvent<HTMLDivElement, MouseEvent>) {
    const element = event.currentTarget
    const rect = element.getBoundingClientRect()
    const width = rect.width
    const height = rect.height
    
    // Menghitung titik koordinat presisi dari pusat tengah kartu
    const mouseX = event.clientX - rect.left - width / 2
    const mouseY = event.clientY - rect.top - height / 2
    x.set(mouseX)
    y.set(mouseY)
  }

  function handleMouseLeave() {
    // Mengembalikan posisi kartu tegak lurus secara otomatis saat kursor keluar
    x.set(0)
    y.set(0)
  }

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 15 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: 'easeOut' },
    },
  }

  // Varian animasi khusus untuk Kartu Utama saat pertama kali masuk halaman
  const cardEntranceVariants = {
    hidden: { 
      opacity: 0, 
      scale: 0.85,
      y: 40,
      rotateX: -10,
      rotateY: 10
    },
    visible: { 
      opacity: 1, 
      scale: 1,
      y: 0,
      rotateX: 0,
      rotateY: 0,
      transition: { 
        type: 'spring',
        stiffness: 100,
        damping: 15,
        duration: 0.8,
        // Memberikan jeda waktu agar muncul tepat setelah teks di sisi kiri selesai beranimasi
        delay: 0.4 
      }
    }
  }

  return (
    <section className="relative min-h-screen overflow-hidden bg-gradient-to-b from-secondary/40 via-background to-background px-4 pt-24 pb-16 md:px-8 md:pt-32 md:pb-24">
      
      {/* Ambient Glow Lingkaran Halus Latar Belakang */}
      <div className="absolute top-[-10%] right-[-10%] -z-10 h-[500px] w-[500px] rounded-full bg-primary/10 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-[10%] left-[-10%] -z-10 h-[450px] w-[450px] rounded-full bg-accent/5 blur-[100px] pointer-events-none" />

      <div className="relative z-10 mx-auto max-w-6xl">
        <motion.div
          className="grid items-center gap-12 md:grid-cols-2"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Sisi Kiri: Text Content */}
          <motion.div className="space-y-6 md:space-y-8" variants={itemVariants}>
            <div className="space-y-4">
              <div className="inline-flex items-center gap-1.5 rounded-full border border-primary/20 bg-primary/5 px-3.5 py-1.5 text-xs font-semibold text-primary backdrop-blur-sm">
                <BookOpen className="h-3.5 w-3.5" />
                <span>Tumbuh Bersama Al-Quran</span>
              </div>

              <h1 className="text-4xl font-black tracking-tight text-foreground sm:text-5xl lg:text-6xl leading-[1.15]">
                Metode Mengaji
                <br />
                <span className="bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent">
                  Terpercaya & Efektif
                </span>
              </h1>

              <p className="max-w-xl text-base text-muted-foreground leading-relaxed md:text-lg">
                Program pendidikan Al-Quran inklusif untuk seluruh kelompok usia bersama jajaran ustadz berkompeten. Nikmati pengalaman belajar yang adaptif dan terukur.
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-3">
              <Link
                href="/program"
                className="group inline-flex items-center justify-center gap-2 rounded-xl bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground shadow-sm transition-all duration-200 hover:bg-primary/95 hover:shadow-md hover:shadow-primary/10 active:scale-[0.98]"
              >
                Mulai Belajar Sekarang
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
              </Link>
              <Link
                href="/tentang"
                className="inline-flex items-center justify-center rounded-xl border border-border bg-background/50 px-6 py-3 text-sm font-semibold text-foreground transition-all duration-200 hover:bg-muted active:scale-[0.98]"
              >
                Pelajari Silabus Kami
              </Link>
            </div>
          </motion.div>

          {/* Sisi Kanan: Kartu Premium Glassmorphism Cerah dengan Efek Melayang */}
          <motion.div 
            className="relative flex items-center justify-center md:h-full [perspective:1000px]" 
            variants={itemVariants}
          >
            {/* 1. EDIT BELAKANG CARD: Animasi denyut aura pendaran cahaya (Glowing Background Pulse) */}
            <motion.div 
              className="absolute -inset-4 rounded-[2.5rem] bg-primary/20 blur-3xl pointer-events-none" 
              animate={{
                scale: [1, 1.1, 1],
                opacity: [0.5, 0.75, 0.5]
              }}
              transition={{
                duration: 6,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />

            {/* 2. EDIT BELAKANG CARD: Ornamen Vektor Estetik yang berputar perlahan */}
            <motion.div 
              className="pointer-events-none absolute -left-6 -top-6 h-28 w-28 text-primary/20 opacity-70"
              animate={{ rotate: 360 }}
              transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
            >
              <svg className="h-full w-full" viewBox="0 0 100 100" fill="none">
                <path d="M50 6 L78 24 L78 60 L50 94 L22 60 L22 24 Z" stroke="currentColor" strokeWidth="1" />
                <circle cx="50" cy="50" r="16" stroke="currentColor" strokeWidth="1" />
              </svg>
            </motion.div>
            
            <motion.div 
              className="pointer-events-none absolute -right-6 -bottom-6 h-32 w-32 text-accent/20 opacity-60"
              animate={{ rotate: -360 }}
              transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
            >
              <svg className="h-full w-full" viewBox="0 0 120 120" fill="none">
                <path d="M60 14 L92 34 L92 78 L60 106 L28 78 L28 34 Z" stroke="currentColor" strokeWidth="1" />
              </svg>
            </motion.div>

            {/* KARTU UTAMA DENGAN ANIMASI MASUK DAN MELAYANG KONTINU */}
            <motion.div
              variants={cardEntranceVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: false, amount: 0.3 }} // Memicu animasi ulang setiap kali kartu masuk ke layar viewport beranda
              className="relative w-full max-w-[360px] rounded-[2.5rem] border border-white/40 dark:border-white/10 bg-white/60 dark:bg-card/60 p-8 backdrop-blur-xl shadow-[0_20px_50px_-12px_rgba(0,121,121,0.12)] cursor-grab active:cursor-grabbing [transform-style:preserve-3d] overflow-hidden"
              style={{ rotateX, rotateY }}
              onMouseMove={handleMouseMove}
              onMouseLeave={handleMouseLeave}
              whileHover={{ scale: 1.03 }}
              // Animasi melayang otomatis (auto-floating) berjalan terus setelah animasi masuk selesai
              animate={{
                y: [0, -12, 0]
              }}
              transition={{
                y: {
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut"
                },
                scale: { type: 'spring', stiffness: 300, damping: 20 }
              }}
            >
              {/* 3. EDIT DI DALAM CARD: Efek Kilauan Menyapu Permukaan (Shimmer Effect) */}
              <motion.div 
                className="absolute inset-0 w-[200%] -left-full bg-gradient-to-r from-transparent via-white/30 dark:via-white/5 to-transparent -skew-x-12 pointer-events-none"
                animate={{ x: ["0%", "200%"] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", repeatDelay: 1.5 }}
              />

              {/* Badge Kategori Atas (Efek Kedalaman 3D tingkat 1) */}
              <div className="flex items-center gap-2 [transform:translateZ(25px)]">
                <span className="h-2 w-2 rounded-full bg-primary animate-pulse" />
                <span className="text-[10px] font-bold uppercase tracking-widest text-primary bg-primary/10 rounded-md px-2 py-0.5">
                  Mutiara Hadits
                </span>
              </div>

              {/* Blok Konten Utama (Efek Kedalaman 3D tingkat 2) */}
              <div className="mt-6 space-y-5 [transform:translateZ(50px)]">
                
                {/* Kaligrafi Arab (Warna Teks Tetap Asli) */}
                <p 
                  className="text-center text-3xl font-bold leading-loose text-primary select-none drop-shadow-[0_1px_2px_rgba(0,0,0,0.05)]" 
                  dir="rtl" 
                  lang="ar"
                >
                  خَيْرُكُمْ مَنْ تَعَلَّمَ الْقُرْآنَ وَعَلَّمَهُ
                </p>

                {/* Garis Pembatas Minimalis */}
                <div className="h-[1px] w-12 bg-primary/20 mx-auto my-1" />

                {/* Arti Terjemahan (Warna Teks Tetap Asli) */}
                <p className="text-center text-sm md:text-base font-semibold leading-relaxed text-foreground/90">
                  "Sebaik-baik kalian adalah orang yang mempelajari Al-Qur'an dan mengajarkannya."
                </p>

                {/* Perawi Hadits */}
                <p className="text-center text-xs font-bold tracking-wider text-primary/80">
                  — HR. Bukhari
                </p>
              </div>

              {/* Lapisan Mengkilap Pantulan Cahaya Atas Kartu */}
              <div className="pointer-events-none absolute inset-x-0 top-0 h-32 rounded-t-[2.5rem] bg-gradient-to-b from-white/40 to-transparent [transform:translateZ(5px)]" />
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}