'use client'

import { motion } from 'framer-motion'
import { GraduationCap, MessageSquareText, ShieldCheck, BarChart3 } from 'lucide-react'

export function Methodology() {
  const metodologiData = [
    {
      program: 'Pra Tahsin',
      metode: 'Metode Tilawati',
      keterangan:
        "Talaqqi & Praktik pengenalan dasar huruf hijaiyah, harakat, dan huruf sambung bagi yang belum bisa membaca Al-Qur'an. Didukung pendampingan intensif serta evaluasi bertahap hingga siap naik level.",
      teknis: 'Online & Offline',
    },
    {
      program: 'Tahsin',
      metode: 'Metode Tilawati',
      keterangan:
        'Talaqqi perbaikan bacaan sesuai makharijul huruf dan tajwid. Fokus pada praktik tilawah secara nyata, pendampingan berkala, serta evaluasi rutin untuk mencapai standar membaca tartil.',
      teknis: 'Online & Offline',
    },
    {
      program: 'Tahfidz',
      metode: 'Mumtaza & Tikrar',
      keterangan:
        "Talaqqi setoran hafalan baru di depan pengajar dilanjutkan praktik pengulangan (tikrar) yang kuat. Disertai pendampingan motivasi serta evaluasi berkala kelancaran hafalan.",
      teknis: 'Online & Offline',
    },
    {
      program: 'Tartil & Tajwid',
      metode: 'Naghom Islamiyyah',
      keterangan:
        'Talaqqi penjiwaan irama Al-Qur\'an dan hukum tajwid tingkat lanjut. Fokus pada praktik variasi lagu, pendampingan teknik vokal, serta evaluasi kelayakan kualitas tilawah.',
      teknis: 'Online & Offline',
    },
  ]

  const pilars = [
    {
      title: 'Talaqqi',
      desc: 'Belajar dan menyimak langsung bersama pengajar secara interaktif.',
      icon: GraduationCap,
    },
    {
      title: 'Praktik',
      desc: 'Fokus penuh pada penerapan materi membaca dan menghafal secara nyata.',
      icon: MessageSquareText,
    },
    {
      title: 'Pendampingan',
      desc: 'Bimbingan intensif dan motivasi berkelanjutan selama proses belajar.',
      icon: ShieldCheck,
    },
    {
      title: 'Evaluasi',
      desc: 'Penilaian berkala untuk mengukur standar perkembangan santri.',
      icon: BarChart3,
    },
  ]

  return (
    <section id="metodologi" className="bg-muted/30 px-4 py-16 md:px-8 md:py-24 border-t border-border/40">
      <motion.div
        className="mx-auto max-w-6xl space-y-16"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-100px' }}
        transition={{ duration: 0.6 }}
      >
        {/* Top Header & Intro */}
        <div className="grid gap-8 lg:grid-cols-12 lg:items-center">
          <div className="space-y-4 lg:col-span-5 text-center lg:text-left">
            <span className="inline-block rounded-full bg-primary/10 px-4 py-1.5 text-xs font-semibold text-primary uppercase tracking-wider">
              Metodologi Pembelajaran
            </span>
            <h2 className="text-3xl font-bold text-foreground md:text-4xl tracking-tight leading-tight">
              Sistem Belajar Efektif & Terarah
            </h2>
            <p className="text-sm md:text-base text-muted-foreground leading-relaxed">
              BAZMA Mengaji menerapkan pembelajaran berbasis <strong>Talaqqi, Praktik, Pendampingan, dan Evaluasi</strong>. Peserta tidak hanya mempelajari teori, tetapi juga dibimbing langsung untuk mempraktikkan bacaan, hafalan, dan tilawah bersama pengajar melalui monitoring berkala. Melalui sistem ini, setiap peserta dapat berkembang secara bertahap menuju target yang ditetapkan.
            </p>
          </div>

          {/* 4 Pillars Grid */}
          <div className="grid gap-4 sm:grid-cols-2 lg:col-span-7">
            {pilars.map((pilar, idx) => {
              const Icon = pilar.icon
              return (
                <div key={idx} className="flex gap-4 rounded-xl border border-border/60 bg-card p-4 transition-colors hover:border-primary/30">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary">
                    <Icon className="h-5 w-5" />
                  </div>
                  <div className="space-y-1">
                    <h4 className="text-sm font-bold text-foreground">{pilar.title}</h4>
                    <p className="text-xs text-muted-foreground leading-relaxed">{pilar.desc}</p>
                  </div>
                </div>
              )
            })}
          </div>
        </div>

        {/* Section Divider & Sub-Header */}
        <div className="space-y-3 text-center pt-4 border-t border-border/40">
          <h3 className="text-xl font-bold text-foreground md:text-2xl tracking-tight">
            Penerapan Metode di Setiap Program Kelas
          </h3>
          <p className="mx-auto max-w-xl text-xs md:text-sm text-muted-foreground">
            Integrasi 4 pilar kurikulum utama yang diimplementasikan secara konsisten pada setiap program kelas.
          </p>
        </div>

        {/* Desktop Table */}
        <div className="mt-8 hidden overflow-hidden rounded-xl border border-border md:block">
          <table className="w-full">
            <thead>
              <tr className="bg-primary text-primary-foreground">
                <th className="px-6 py-4 text-left font-semibold">Program</th>
                <th className="px-6 py-4 text-left font-semibold">Metodologi Utama</th>
                <th className="px-6 py-4 text-left font-semibold">Keterangan Pendekatan (Talaqqi, Praktik, Pendampingan, Evaluasi)</th>
                <th className="px-6 py-4 text-left font-semibold">Teknis</th>
              </tr>
            </thead>
            <tbody>
              {metodologiData.map((item, idx) => (
                <tr
                  key={idx}
                  className="border-t border-border bg-card transition-colors hover:bg-primary/5"
                >
                  <td className="px-6 py-4 font-semibold text-foreground whitespace-nowrap">{item.program}</td>
                  <td className="px-6 py-4 text-muted-foreground font-medium whitespace-nowrap">{item.metode}</td>
                  <td className="px-6 py-4 text-sm leading-relaxed text-muted-foreground">{item.keterangan}</td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className="font-semibold text-primary">{item.teknis}</span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Mobile Cards */}
        <div className="mt-8 grid gap-4 md:hidden">
          {metodologiData.map((item, idx) => (
            <div key={idx} className="space-y-3 rounded-xl border border-border bg-card p-5">
              <div className="flex items-center justify-between gap-2">
                <h3 className="text-base font-bold text-foreground">{item.program}</h3>
                <span className="rounded-md bg-primary/10 px-2 py-0.5 text-[11px] font-semibold text-primary whitespace-nowrap">
                  {item.teknis}
                </span>
              </div>
              <p className="text-xs font-semibold text-primary">{item.metode}</p>
              <p className="text-xs leading-relaxed text-muted-foreground">{item.keterangan}</p>
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  )
}