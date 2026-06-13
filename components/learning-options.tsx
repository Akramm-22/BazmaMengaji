'use client'

import { motion } from 'framer-motion'
import { Check, X } from 'lucide-react'

export function LearningOptions() {
  const options = [
    {
      name: 'Kelas Grup',
      price: 'Rp 99.000',
      period: '/bulan',
      description: 'Belajar bersama dalam kelas grup dengan guru profesional',
      features: [
        { text: 'Guru Berpengalaman', included: true },
        { text: 'Materi Terstruktur', included: true },
        { text: 'Kuis & Ujian', included: true },
        { text: 'Sertifikat', included: true },
        { text: 'Chat 24/7', included: false },
        { text: 'Bimbingan Personal', included: false },
      ],
      highlight: false,
      icon: '👥',
    },
    {
      name: 'Kelas Privat',
      price: 'Rp 199.000',
      period: '/bulan',
      description: 'Pembelajaran private dengan fokus individual dan personal',
      features: [
        { text: 'Guru Berpengalaman', included: true },
        { text: 'Materi Terstruktur', included: true },
        { text: 'Kuis & Ujian', included: true },
        { text: 'Sertifikat', included: true },
        { text: 'Chat 24/7', included: true },
        { text: 'Bimbingan Personal', included: true },
      ],
      highlight: true,
      icon: '👨‍🏫',
    },
    {
      name: 'Paket Hafiz',
      price: 'Rp 399.000',
      period: '/bulan',
      description: 'Program intensif penghafalan Al-Quran dengan mentor terbaik',
      features: [
        { text: 'Guru Berpengalaman', included: true },
        { text: 'Materi Terstruktur', included: true },
        { text: 'Kuis & Ujian', included: true },
        { text: 'Sertifikat', included: true },
        { text: 'Chat 24/7', included: true },
        { text: 'Bimbingan Personal', included: true },
      ],
      highlight: false,
      icon: '💎',
    },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  }

  return (
    <section id="pricing" className="space-y-12 bg-background px-4 py-20 md:px-8 md:py-32">
      <motion.div
        className="mx-auto max-w-6xl space-y-4 text-center"
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <p className="inline-block rounded-full bg-primary/10 px-4 py-2 text-sm font-semibold text-primary">
          Pilihan Paket
        </p>
        <h2 className="text-3xl font-bold text-foreground md:text-4xl">
          Paket Pembelajaran Yang Fleksibel
        </h2>
        <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
          Pilih paket yang sesuai dengan kebutuhan dan preferensi belajar Anda.
        </p>
      </motion.div>

      <motion.div
        className="mx-auto grid max-w-6xl gap-8 md:grid-cols-3"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-100px' }}
      >
        {options.map((option, idx) => (
          <motion.div
            key={idx}
            variants={itemVariants}
            className={`relative flex flex-col overflow-hidden rounded-2xl border-2 transition-all duration-300 ${
              option.highlight
                ? 'border-primary bg-gradient-to-b from-primary/5 to-background shadow-2xl'
                : 'border-border bg-card'
            }`}
            whileHover={{
              y: option.highlight ? -12 : -8,
              boxShadow: option.highlight
                ? '0 30px 60px rgba(0, 121, 121, 0.2)'
                : '0 15px 30px rgba(0, 0, 0, 0.1)',
            }}
          >
            {option.highlight && (
              <div className="absolute right-4 top-4 rounded-full bg-primary px-4 py-1 text-sm font-bold text-primary-foreground">
                Terpopuler
              </div>
            )}

            {/* Header */}
            <div className="space-y-4 p-8">
              <div className="text-4xl">{option.icon}</div>
              <h3 className="text-2xl font-bold text-foreground">{option.name}</h3>
              <p className="text-sm text-muted-foreground">{option.description}</p>

              {/* Price */}
              <div className="space-y-2 border-t border-border pt-6">
                <div className="flex items-baseline gap-1">
                  <span className="text-4xl font-bold text-primary">{option.price}</span>
                  <span className="text-sm text-muted-foreground">{option.period}</span>
                </div>
                <p className="text-xs text-muted-foreground">Akses penuh ke semua materi</p>
              </div>
            </div>

            {/* Features */}
            <div className="flex-1 space-y-4 p-8">
              {option.features.map((feature, featureIdx) => (
                <div key={featureIdx} className="flex items-start gap-3">
                  {feature.included ? (
                    <Check className="h-5 w-5 flex-shrink-0 text-green-500" />
                  ) : (
                    <X className="h-5 w-5 flex-shrink-0 text-muted-foreground" />
                  )}
                  <span className={feature.included ? 'text-foreground' : 'text-muted-foreground'}>
                    {feature.text}
                  </span>
                </div>
              ))}
            </div>

            {/* CTA Button */}
            <div className="border-t border-border p-8">
              <button
                className={`w-full rounded-lg px-6 py-3 font-bold transition-all ${
                  option.highlight
                    ? 'bg-primary text-primary-foreground hover:shadow-lg'
                    : 'border-2 border-primary bg-transparent text-primary hover:bg-primary/10'
                }`}
              >
                Pilih Paket
              </button>
            </div>
          </motion.div>
        ))}
      </motion.div>

      {/* FAQ Section */}
      <motion.div
        className="mx-auto max-w-2xl space-y-4 rounded-xl border border-border bg-secondary/20 p-8"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.3, duration: 0.6 }}
      >
        <h3 className="text-lg font-bold text-foreground">Pertanyaan Umum</h3>
        <div className="space-y-3 text-sm">
          <div>
            <p className="font-semibold text-foreground">Apakah bisa trial gratis?</p>
            <p className="text-muted-foreground">Ya, Anda bisa mencoba 1 kelas gratis untuk memastikan cocok dengan metode kami.</p>
          </div>
          <div>
            <p className="font-semibold text-foreground">Berapa lama durasi kelas?</p>
            <p className="text-muted-foreground">Setiap kelas berlangsung selama 30-60 menit tergantung paket yang dipilih.</p>
          </div>
          <div>
            <p className="font-semibold text-foreground">Apa saja benefit sertifikat?</p>
            <p className="text-muted-foreground">Sertifikat diakui secara nasional dan dapat digunakan untuk keperluan akademik.</p>
          </div>
        </div>
      </motion.div>
    </section>
  )
}
