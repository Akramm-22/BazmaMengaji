'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { Video, CheckCircle2, MessageSquare, BookOpen, GraduationCap } from 'lucide-react'

export function Programs() {
  const programs = [
    {
      id: 1,
      name: 'Pra Tahsin',
      description: "Langkah awal belajar Al-Qur'an. Program intensif bagi santri yang belum mampu membaca Al-Qur'an atau masih dalam tahap pengenalan huruf dasar.",
      image: '/pra-tahsin.png',
      targets: [
        'Pengenalan huruf hijaiyah secara mendalam',
        'Pemahaman harakat dan tanda baca utama',
        'Aturan penyambungan antar huruf',
        'Latihan membaca Al-Qur\'an tingkat dasar',
      ],
      result: "Santri mampu membaca Al-Qur'an dasar dan siap mengikuti program Tahsin.",
      price: 'Rp 150.000/bulan',
    },
    {
      id: 2,
      name: 'Tahsin',
      description: "Memperbaiki dan menyempurnakan bacaan Al-Qur'an. Program bagi santri yang ingin meningkatkan kualitas bacaan sesuai makharijul huruf dan kaidah tajwid.",
      image: '/tahsin.png',
      targets: [
        'Ketepatan makharijul huruf',
        'Karakteristik dan sifat-sifat huruf',
        'Penerapan hukum tajwid fundamental',
        'Kaidah mad panjang dan waqaf pemberhentian',
        'Praktik tilawah terbimbing',
      ],
      result: "Santri mampu membaca Al-Qur'an dengan baik, benar, dan tartil.",
      price: 'Rp 250.000/bulan',
    },
    {
      id: 3,
      name: 'Tahfidz',
      description: "Menghafal dan menjaga Al-Qur'an. Program bimbingan dan pendampingan hafalan Al-Qur'an secara terstruktur dengan metode yang adaptif.",
      image: '/tahfidz.png',
      targets: [
        'Teknik menghafal cepat dan efektif',
        'Setoran hafalan berkala via tatap muka',
        'Sistem murajaah (pengulangan) intensif',
        'Evaluasi kualitas hafalan berkala',
      ],
      result: 'Santri memiliki hafalan yang terjaga kualitasnya dan terus bertambah.',
      price: 'Rp 350.000/bulan',
    },
    {
      id: 4,
      name: 'Tartil & Tajwid',
      description: "Program khusus untuk menyempurnakan teknik membaca Al-Qur'an dengan keindahan tartil serta penerapan seluruh hukum tajwid yang sempurna.",
      image: '/tartil-tajwid.png',
      targets: [
        'Pendalaman tingkat lanjut hukum tajwid',
        'Akurasi tinggi makhraj dan sifat huruf',
        'Praktik membaca tartil berkelanjutan',
        'Standardisasi irama membaca Al-Qur\'an',
      ],
      result: "Santri dapat membaca Al-Qur'an dengan tartil yang indah dan hukum tajwid yang mutqin.",
      price: 'Rp 200.000/bulan',
    },
  ]

  return (
    <section id="programs" className="w-full bg-background/40 backdrop-blur-md">
      
      {/* Premium Header Banner */}
      <div className="relative w-full border-b border-border/40 bg-secondary/15 py-16 md:py-24 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-transparent pointer-events-none" />
        <div className="relative mx-auto max-w-4xl px-4 text-center space-y-3">
          <span className="inline-block rounded-full bg-primary/10 px-4 py-1 text-xs font-semibold text-primary uppercase tracking-wider">
            Kurikulum Pilihan
          </span>
          <h2 className="text-3xl font-bold tracking-tight text-foreground md:text-5xl">
            Program Belajar Kami
          </h2>
          <p className="mx-auto max-w-xl text-sm md:text-base text-muted-foreground">
            Sistem pembelajaran berjenjang yang dirancang secara profesional untuk membantu Anda berinteraksi dengan Al-Qur'an secara fasih.
          </p>
        </div>
      </div>

      {/* Programs Detailed Content */}
      <div className="mx-auto max-w-6xl px-4 py-16 md:py-28">
        <div className="space-y-24 md:space-y-36">
          {programs.map((program, index) => (
            <motion.div
              key={program.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.6, ease: 'easeOut' }}
              className="relative grid gap-8 md:grid-cols-12 items-center"
            >
              {/* Decorative Background Number */}
              <span className="absolute -top-10 -left-6 hidden lg:block text-[12rem] font-black text-primary/[0.02] select-none pointer-events-none">
                0{program.id}
              </span>

              {/* Image Column */}
              <div className={`md:col-span-5 ${index % 2 === 0 ? '' : 'md:order-last'}`}>
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.3 }}
                  className="relative aspect-[4/3] w-full overflow-hidden rounded-2xl border border-border/40 bg-muted shadow-sm group"
                >
                  <Image
                    src={program.image}
                    alt={program.name}
                    fill
                    sizes="(max-w-768px) 100vw, 450px"
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                    priority={index === 0}
                  />
                </motion.div>
              </div>

              {/* Spacer Column for Desktop */}
              <div className="hidden md:block md:col-span-1" />

              {/* Content Column */}
              <div className="md:col-span-6 space-y-6">
                <div className="space-y-3">
                  {/* Header Title with Uniform Book Icon */}
                  <div className="flex items-center gap-3">
                    <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-primary/10 text-primary border border-primary/20">
                      <BookOpen className="h-4 w-4" />
                    </div>
                    <h3 className="text-2xl md:text-3xl font-bold tracking-tight text-foreground">
                      {program.name}
                    </h3>
                  </div>
                  <p className="text-sm md:text-base text-muted-foreground leading-relaxed">
                    {program.description}
                  </p>
                </div>

                {/* Target Section (Glassmorphic Box) */}
                <div className="rounded-2xl border border-border/40 bg-card/60 p-5 md:p-6 backdrop-blur-sm space-y-4 shadow-sm">
                  <div className="space-y-3">
                    <h4 className="text-xs font-bold text-primary uppercase tracking-wider flex items-center gap-2">
                      <span className="h-1.5 w-1.5 rounded-full bg-primary" />
                      Materi & Target Capaian:
                    </h4>
                    <ul className="grid gap-2.5">
                      {program.targets.map((target, idx) => (
                        <li
                          key={idx}
                          className="flex items-start gap-2.5 text-xs md:text-sm text-muted-foreground leading-snug"
                        >
                          <CheckCircle2 className="h-4 w-4 text-primary/80 mt-0.5 flex-shrink-0" />
                          <span>{target}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Output / Result Alert Box */}
                  <div className="rounded-xl bg-primary/[0.03] border border-primary/10 p-3.5 flex gap-2.5 items-start">
                    <GraduationCap className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                    <div className="space-y-0.5">
                      <span className="text-[10px] font-bold text-primary uppercase tracking-wider block">Target Akhir Kelulusan</span>
                      <p className="text-xs text-muted-foreground leading-normal">{program.result}</p>
                    </div>
                  </div>
                </div>

                {/* Meta Tag: Price & Platform */}
                <div className="flex flex-wrap items-center gap-4 pt-1">
                  <div className="text-xl md:text-2xl font-black tracking-tight text-primary">
                    {program.price}
                  </div>
                  <span className="inline-flex items-center gap-1.5 rounded-lg bg-primary/5 px-2.5 py-1 text-xs font-semibold text-primary border border-primary/10">
                    <Video className="h-3.5 w-3.5" />
                    Online via Zoom
                  </span>
                </div>

                {/* WhatsApp Dynamic CTA */}
                <div className="pt-1">
                  <a
                    href={`https://wa.me/+6287881234567?text=Assalamu'alaikum,%20saya%20ingin%20mendaftar%20program%20${encodeURIComponent(program.name)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group inline-flex items-center gap-2.5 rounded-xl bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground shadow-sm transition-all hover:bg-primary/95 hover:shadow-md"
                  >
                    <MessageSquare className="h-4 w-4 transition-transform group-hover:rotate-6" />
                    Daftar Via WhatsApp
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
      
    </section>
  )
}