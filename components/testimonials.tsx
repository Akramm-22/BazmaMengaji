'use client'

import { motion } from 'framer-motion'
import { Star, Quote } from 'lucide-react'

export function Testimonials() {
  const testimonials = [
    {
      name: 'Bunda Valeeqa',
      role: 'Wali Santri Cabang Ciawi',
      image: 'BV',
      rating: 5,
      text: 'Alhamdulillah setelah anak saya mengaji di BAZMA Mengaji, anak saya sudah dapat mengenal huruf hijaiyah. Untuk pelayanan pengajar di BAZMA Mengaji baik dan dapat membuat anak saya semangat dalam mengaji. Dampak positif yang dirasakan tanggapan anak saya selalu bersemangat untuk pergi mengaji.',
    },
    {
      name: 'Zafran',
      role: 'Santri Cabang Pondok Pinang',
      image: 'ZF',
      rating: 5,
      text: 'Aku merasa senang belajar di sini karena tempatnya nyaman, ada AC-nya, cara mengajarnya bagus. Aku gak nyesel ngaji di sini. Aku memilih ngaji di sini lagi walaupun sudah final test.',
    },
    {
      name: 'Bahri',
      role: 'Santri Cabang Pondok Pinang',
      image: 'BH',
      rating: 5,
      text: 'Selama ngaji di BAZMA Mengaji aku senang karena bertemu teman-teman, mengaji di sini sangat seru karena ada kuis tajwidnya.',
    },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08,
      },
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
    <section id="testimonials" className="islamic-section-bg relative bg-background/40 backdrop-blur-md px-4 py-16 md:px-8 md:py-24 border-t border-border/40 overflow-hidden">
      
      {/* Header Section */}
      <motion.div
        className="mx-auto max-w-4xl space-y-3 text-center"
        initial={{ opacity: 0, y: 15 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <span className="inline-block rounded-full bg-primary/10 px-4 py-1 text-xs font-semibold text-primary uppercase tracking-wider">
          Testimoni
        </span>
        <h2 className="text-3xl font-bold text-foreground md:text-4xl tracking-tight">
          Cerita dari Santri & Wali Santri
        </h2>
        <p className="mx-auto max-w-2xl text-sm md:text-base text-muted-foreground">
          Pengalaman nyata mereka yang telah belajar dan merasakan perubahan positif dalam perjalanan mengaji bersama kami.
        </p>
      </motion.div>

      {/* Testimonials Grid */}
      <motion.div
        className="mx-auto mt-12 max-w-6xl"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-100px' }}
      >
        <div className="grid gap-6 md:grid-cols-3">
          {testimonials.map((testimonial, idx) => (
            <motion.div
              key={idx}
              variants={itemVariants}
              className="relative flex flex-col justify-between rounded-2xl border border-border/40 bg-card/60 p-6 backdrop-blur-sm transition-all duration-300 hover:border-primary/30 hover:shadow-md hover:-translate-y-1"
            >
              {/* Decorative Quote Icon */}
              <div className="absolute top-6 right-6 text-primary/10 pointer-events-none">
                <Quote className="h-8 w-8 fill-current" />
              </div>

              <div className="space-y-4">
                {/* Rating Stars */}
                <div className="flex gap-0.5">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-3.5 w-3.5 fill-amber-400 text-amber-400" />
                  ))}
                </div>

                {/* Testimonial Text */}
                <p className="text-xs md:text-sm text-muted-foreground leading-relaxed italic">
                  "{testimonial.text}"
                </p>
              </div>

              {/* User Identity */}
              <div className="mt-6 flex items-center gap-3 pt-4 border-t border-border/30">
                <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-xl bg-primary/10 font-bold text-primary text-xs tracking-wider border border-primary/20">
                  {testimonial.image}
                </div>
                <div className="overflow-hidden">
                  <h4 className="text-sm font-bold text-foreground tracking-tight truncate">
                    {testimonial.name}
                  </h4>
                  <p className="text-xs text-muted-foreground truncate">
                    {testimonial.role}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
      
    </section>
  )
}