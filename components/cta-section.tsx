'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { MessageSquare, ArrowRight, HelpCircle, CheckCircle2, Sparkles } from 'lucide-react'

export function CtaSection() {
  return (
    <section
      id="cta"
      className="relative overflow-hidden bg-background px-4 py-20 md:px-8 md:py-28 border-t border-border/40"
    >
      {/* Decorative blurred background ambient glow */}
      <div aria-hidden="true" className="pointer-events-none absolute left-1/2 top-[-10%] h-[380px] w-[380px] -translate-x-1/2 rounded-full bg-primary/15 blur-[120px]" />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-24 top-1/4 h-72 w-72 rounded-full bg-emerald-500/10 blur-[100px]"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-24 bottom-1/4 h-72 w-72 rounded-full bg-primary/10 blur-[100px]"
      />

      <motion.div
        className="mx-auto flex max-w-6xl items-center justify-center"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-100px' }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
      >
        <div className="relative w-full overflow-hidden rounded-3xl border border-border/70 bg-gradient-to-b from-card/80 to-card/30 p-8 shadow-[0_24px_60px_rgba(0,0,0,0.03)] backdrop-blur-xl md:p-12">
          {/* Geometric subtle SVG background pattern */}
          <div aria-hidden="true" className="absolute inset-0 opacity-[0.06] pointer-events-none mix-blend-overlay">
            <svg className="h-full w-full" viewBox="0 0 1200 600" preserveAspectRatio="none">
              <path
                d="M0 120C120 80 240 80 360 120s240 40 360 0 240-40 480 40"
                fill="none"
                className="stroke-primary"
                strokeWidth="2"
                strokeDasharray="8 12"
              />
              <path
                d="M0 320C140 260 280 260 420 320s280 60 420 0 280-60 360 50"
                fill="none"
                className="stroke-primary"
                strokeWidth="2"
                strokeDasharray="12 16"
              />
              <circle cx="1060" cy="140" r="40" fill="none" className="stroke-primary" strokeWidth="2" />
              <circle cx="200" cy="450" r="50" fill="none" className="stroke-primary" strokeWidth="2" />
            </svg>
          </div>

          <div className="relative grid gap-12 md:grid-cols-2 md:items-center">
            {/* Left Content Column */}
            <div className="space-y-6 text-center md:text-left">
              <motion.div
                className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-1.5 text-xs font-semibold text-primary uppercase tracking-wider"
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.1 }}
              >
                <HelpCircle className="h-3.5 w-3.5" />
                Masih Bingung Memilih Program?
              </motion.div>

              <h2 className="text-balance text-3xl font-bold tracking-tight text-foreground md:text-4xl lg:text-5xl leading-[1.15]">
                Konsultasikan kebutuhan belajar Anda
              </h2>

              <p className="text-pretty text-base md:text-lg text-muted-foreground leading-relaxed">
                Tim kami siap membantu merekomendasikan program terbaik yang paling sesuai dengan target dan tingkat kemampuan awal Anda. Diskusi santai, gratis, dan langsung via WhatsApp.
              </p>

              <div className="flex flex-col sm:flex-row flex-wrap justify-center md:justify-start gap-4 pt-2">
                <a
                  href="https://wa.me/+6287881234567?text=Saya%20ingin%20konsultasi%20memilih%20program%20BAZMA%20Mengaji"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 rounded-xl bg-primary px-7 py-3.5 font-semibold text-primary-foreground shadow-sm shadow-primary/20 transition-all hover:bg-primary/95 hover:shadow-lg hover:shadow-primary/30 active:scale-[0.98]"
                >
                  <MessageSquare className="h-4 w-4" />
                  Konsultasi via WhatsApp
                </a>

                <Link
                  href="/program"
                  className="group inline-flex items-center justify-center gap-2 rounded-xl border border-border bg-background px-7 py-3.5 font-semibold text-foreground shadow-sm transition-all hover:bg-muted active:scale-[0.98]"
                >
                  Lihat Program
                  <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                </Link>
              </div>

              <p className="text-xs text-muted-foreground flex items-center justify-center md:justify-start gap-1.5">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                </span>
                Respon cepat aktif dari tim BAZMA Mengaji.
              </p>
            </div>

            {/* Right Display Card Column */}
            <motion.div
              className="relative"
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <div className="mx-auto w-full max-w-md rounded-2xl border border-border/60 bg-background/50 p-6 md:p-8 backdrop-blur-xl shadow-xl shadow-foreground/[0.01]">
                <div className="flex items-center gap-4">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-primary/10 text-primary">
                    <Sparkles className="h-5 w-5" />
                  </div>
                  <div className="space-y-0.5">
                    <p className="text-sm font-bold text-foreground">Siap Dibimbing Intensif</p>
                    <p className="text-xs text-muted-foreground font-medium tracking-wide">
                      Pra Tahsin • Tahsin • Tahfidz • Tartil
                    </p>
                  </div>
                </div>

                <div className="mt-6 space-y-3.5">
                  {[
                    "Pilihan fleksibel Kelas Online atau Offline",
                    "Bimbingan tatap muka bersama pengajar bersanad",
                    "Metode terstruktur & kurikulum berjenjang"
                  ].map((text, idx) => (
                    <div 
                      key={idx} 
                      className="flex items-center gap-3.5 rounded-xl border border-border/40 bg-muted/30 p-3.5 transition-colors hover:bg-muted/60"
                    >
                      <CheckCircle2 className="h-4 w-4 shrink-0 text-primary" />
                      <p className="text-sm font-medium text-muted-foreground leading-snug">{text}</p>
                    </div>
                  ))}
                </div>

                <div className="mt-6 h-px w-full bg-gradient-to-r from-border/80 via-border/20 to-transparent" />

                <p className="mt-5 text-center text-xs font-semibold text-muted-foreground">
                  Klik tombol Hubungi WhatsApp untuk memulai program.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </motion.div>
    </section>
  )
}