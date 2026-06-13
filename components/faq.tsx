'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { ChevronDown } from 'lucide-react'
import { useState } from 'react'

export function FAQ() {
  // Mengubah state awal menjadi -1 agar semua list FAQ tertutup rapat secara default
  const [expandedFaq, setExpandedFaq] = useState(-1)

  const faqs = [
    {
      question: 'Apa itu BAZMA Mengaji?',
      answer: 'BAZMA Mengaji adalah layanan pembelajaran Al-Quran yang dirancang untuk membantu santri meningkatkan kemampuan membaca, menghafal, dan memahami Al-Quran secara bertahap sesuai dengan kemampuan masing-masing.',
    },
    {
      question: 'Siapa saja yang bisa ikut program ini?',
      answer: 'Program kami terbuka untuk semua usia, baik anak-anak, remaja, maupun dewasa. Kami memiliki kelas yang disesuaikan dengan usia dan tingkat kemampuan tiap santri.',
    },
    {
      question: 'Apakah program ini online atau offline?',
      answer: 'Kami menyediakan pilihan kelas online (via Zoom/Google Meet) dan offline (tatap muka di cabang terdekat atau di rumah masing-masing). Silakan pilih sesuai kebutuhan Anda.',
    },
    {
      question: 'Bagaimana metode pembelajarannya?',
      answer: 'Kami menggunakan metode Pra Tahsin, Tahsin, Tahfidz, dan Tartil & Tajwid yang terbukti efektif, dibimbing oleh pengajar bersanad dan berpengalaman. Materi disesuaikan dengan kemampuan peserta dan mencakup teori serta praktik langsung.',
    },
    {
      question: 'Bagaimana cara mendaftar?',
      answer: 'Silakan klik tombol Daftar via WhatsApp di website. Tim kami akan menghubungi Anda dalam waktu 1×24 jam untuk proses selanjutnya.',
    },
  ]

  return (
    // Background diubah menjadi semi-transparan tipis dengan efek blur kaca (glassmorphism mewah)
    <section className="islamic-section-bg relative space-y-12 bg-background/30 backdrop-blur-md px-4 py-16 md:px-8 md:py-24 border-t border-border/40">
      <div className="mx-auto max-w-4xl space-y-12">
        
        {/* Header Section */}
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl font-bold text-foreground md:text-4xl tracking-tight">
            Pertanyaan Seputar Layanan
          </h2>
          <p className="mt-4 text-pretty text-muted-foreground max-w-2xl mx-auto">
            Dalam upaya untuk memberikan kemudahan kepada Anda, kami telah mengumpulkan jawaban atas beberapa pertanyaan umum terkait layanan BAZMA Mengaji.
          </p>
        </motion.div>

        {/* FAQ Accordion List */}
        <motion.div
          className="space-y-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.6 }}
        >
          {faqs.map((faq, idx) => (
            <motion.div
              key={idx}
              className="overflow-hidden rounded-2xl border border-border/50 bg-card/70 backdrop-blur-sm shadow-sm transition-all hover:border-primary/30 hover:shadow-md"
            >
              {/* Tombol pemicu klik */}
              <button
                onClick={() => setExpandedFaq(expandedFaq === idx ? -1 : idx)}
                className="w-full flex items-center justify-between px-6 py-5 text-left font-semibold text-foreground hover:bg-primary/5 transition gap-4"
              >
                <span className="text-sm md:text-base tracking-wide">{faq.question}</span>
                <ChevronDown
                  size={18}
                  className={`transition-transform duration-300 flex-shrink-0 text-muted-foreground ${
                    expandedFaq === idx ? 'rotate-180 text-primary' : ''
                  }`}
                />
              </button>

              {/* Konten jawaban dengan transisi animasi drop-down yang sangat mulus */}
              <AnimatePresence initial={false}>
                {expandedFaq === idx && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.3, ease: [0.04, 0.62, 0.23, 0.98] }}
                    className="border-t border-border/30 bg-primary/[0.02] px-6 py-5"
                  >
                    <p className="text-muted-foreground leading-relaxed text-sm md:text-base">
                      {faq.answer}
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}