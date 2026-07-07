'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { ChevronDown, HelpCircle } from 'lucide-react'
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
      answer: 'Program kami terbuka untuk semua usia, baik anak-anak, remaja, maupun dewasa. Setiap peserta akan dikelompokkan dan dibimbing secara fleksibel berdasarkan tingkat kemampuan membaca (bukan berdasarkan usia), sehingga proses belajar menjadi lebih efektif dan nyaman.',
    },
    {
      question: 'Apakah program ini online atau offline?',
      answer: 'Kami menyediakan pilihan kelas online (via Zoom/Google Meet) dan kelas offline (tatap muka yang dilaksanakan langsung di pusat/cabang lembaga kami).',
    },
    {
      question: 'Bagaimana metode pembelajarannya?',
      answer: 'Kami menggunakan metode Pra Tahsin, Tahsin, Tahfidz, dan Tartil & Tajwid yang terbukti efektif, dibimbing oleh pengajar bersanad dan berpengalaman. Materi disesuaikan dengan kemampuan peserta dan mencakup teori serta praktik langsung.',
    },
    {
      question: 'Bagaimana cara mendaftar?',
      answer: 'Anda dapat mendaftar dengan menekan tombol pendaftaran pada menu website, lalu mengisi formulir data diri serta pilihan program belajar secara lengkap. Setelah formulir terkirim, Anda akan diarahkan untuk konfirmasi otomatis ke WhatsApp tim kami.',
    },
  ]

  return (
    <section id="faq" className="w-full bg-background/40 backdrop-blur-md px-4 py-16 md:px-8 md:py-28 border-t border-border/40 overflow-hidden relative">
      {/* Dekorasi Efek Cahaya Latar */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="mx-auto max-w-4xl space-y-16 relative z-10">
        
        {/* Header Section */}
        <motion.div
          className="text-center space-y-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="mx-auto flex h-9 w-9 items-center justify-center rounded-xl bg-primary/10 text-primary border border-primary/20">
            <HelpCircle className="h-4 w-4" />
          </div>
          <h2 className="text-3xl font-bold text-foreground md:text-4xl tracking-tight">
            Pertanyaan Seputar Layanan
          </h2>
          <p className="mx-auto max-w-2xl text-sm md:text-base text-muted-foreground leading-relaxed">
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
          {faqs.map((faq, idx) => {
            const isExpanded = expandedFaq === idx
            return (
              <motion.div
                key={idx}
                className={`overflow-hidden rounded-2xl border transition-all duration-300 bg-card/70 backdrop-blur-sm ${
                  isExpanded 
                    ? 'border-primary/40 shadow-md shadow-primary/[0.02]' 
                    : 'border-border/50 shadow-sm hover:border-primary/20'
                }`}
              >
                {/* Tombol pemicu klik */}
                <button
                  type="button"
                  onClick={() => setExpandedFaq(isExpanded ? -1 : idx)}
                  className="w-full flex items-center justify-between px-6 py-5 text-left font-semibold text-foreground hover:bg-primary/[0.02] transition-colors gap-4 cursor-pointer"
                >
                  <span className="text-sm md:text-base tracking-wide leading-snug">{faq.question}</span>
                  <ChevronDown
                    size={18}
                    className={`transition-transform duration-300 flex-shrink-0 text-muted-foreground ${
                      isExpanded ? 'rotate-180 text-primary' : ''
                    }`}
                  />
                </button>

                {/* Konten jawaban dengan transisi animasi drop-down */}
                <AnimatePresence initial={false}>
                  {isExpanded && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.3, ease: [0.04, 0.62, 0.23, 0.98] }}
                      className="border-t border-border/30 bg-primary/[0.01]"
                    >
                      <div className="px-6 py-5">
                        <p className="text-muted-foreground leading-relaxed text-xs md:text-sm">
                          {faq.answer}
                        </p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            )
          })}
        </motion.div>
      </div>
    </section>
  )
}