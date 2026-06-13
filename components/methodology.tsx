'use client'

import { motion } from 'framer-motion'

export function Methodology() {
  const metodologiData = [
    {
      program: 'Pra Tahsin',
      metode: 'Metode Tilawati',
      keterangan:
        'Diperuntukkan bagi santri yang belum mampu membaca Al-Qur\'an. Mengenal huruf hijaiyah, harakat, dan huruf sambung hingga siap masuk Tahsin.',
      teknis: 'Online via Zoom',
    },
    {
      program: 'Tahsin',
      metode: 'Metode Tilawati',
      keterangan:
        'Memperbaiki dan menyempurnakan bacaan sesuai makharijul huruf dan kaidah tajwid hingga membaca dengan tartil.',
      teknis: 'Online via Zoom',
    },
    {
      program: 'Tahfidz',
      metode: 'Mumtaza',
      keterangan:
        'Pendampingan hafalan Al-Qur\'an secara terstruktur memanfaatkan Al-Qur\'an tikrar dan pendekatan khusus.',
      teknis: 'Online via Zoom',
    },
    {
      program: 'Tartil & Tajwid',
      metode: 'Naghom Islamiyyah',
      keterangan:
        'Menyempurnakan teknik membaca dengan tartil dan penerapan hukum tajwid yang sempurna serta irama Al-Qur\'an.',
      teknis: 'Online via Zoom',
    },
  ]

  return (
    <section id="metodologi" className="bg-muted/30 px-4 py-20 md:px-8 md:py-28">
      <motion.div
        className="mx-auto max-w-6xl"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-100px' }}
        transition={{ duration: 0.6 }}
      >
        <div className="space-y-4 text-center">
          <p className="inline-block rounded-full bg-primary/10 px-4 py-2 text-sm font-semibold text-primary">
            Metodologi
          </p>
          <h2 className="text-balance text-3xl font-bold text-foreground md:text-4xl">
            Metode Pembelajaran Setiap Program
          </h2>
          <p className="mx-auto max-w-2xl text-pretty text-lg text-muted-foreground">
            Setiap program dirancang dengan metode khusus yang terbukti efektif dan dibimbing pengajar berpengalaman.
          </p>
        </div>

        {/* Desktop Table */}
        <div className="mt-12 hidden overflow-hidden rounded-xl border border-border md:block">
          <table className="w-full">
            <thead>
              <tr className="bg-primary text-primary-foreground">
                <th className="px-6 py-4 text-left font-semibold">Program</th>
                <th className="px-6 py-4 text-left font-semibold">Metodologi</th>
                <th className="px-6 py-4 text-left font-semibold">Keterangan</th>
                <th className="px-6 py-4 text-left font-semibold">Teknis</th>
              </tr>
            </thead>
            <tbody>
              {metodologiData.map((item, idx) => (
                <tr
                  key={idx}
                  className="border-t border-border bg-card transition-colors hover:bg-primary/5"
                >
                  <td className="px-6 py-4 font-semibold text-foreground">{item.program}</td>
                  <td className="px-6 py-4 text-muted-foreground">{item.metode}</td>
                  <td className="px-6 py-4 text-sm leading-relaxed text-muted-foreground">{item.keterangan}</td>
                  <td className="px-6 py-4">
                    <span className="font-semibold text-primary">{item.teknis}</span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Mobile Cards */}
        <div className="mt-12 grid gap-4 md:hidden">
          {metodologiData.map((item, idx) => (
            <div key={idx} className="space-y-3 rounded-xl border border-border bg-card p-5">
              <div className="flex items-center justify-between">
                <h3 className="text-lg font-bold text-foreground">{item.program}</h3>
                <span className="rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold text-primary">
                  {item.teknis}
                </span>
              </div>
              <p className="text-sm font-semibold text-primary">{item.metode}</p>
              <p className="text-sm leading-relaxed text-muted-foreground">{item.keterangan}</p>
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  )
}
