'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'

export function CtaSection() {
  return (
    <section
      id="cta"
      className="relative overflow-hidden bg-background px-4 py-16 md:px-8 md:py-24"
    >
      {/* Decorative glass circles */}
      <div aria-hidden className="pointer-events-none absolute left-1/2 top-[-120px] h-[260px] w-[260px] -translate-x-1/2 rounded-full bg-primary/20 blur-3xl" />
      <div
        aria-hidden
        className="pointer-events-none absolute -left-24 top-1/2 h-56 w-56 -translate-y-1/2 rounded-full bg-accent/25 blur-3xl"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -right-24 top-1/2 h-56 w-56 -translate-y-1/2 rounded-full bg-primary/15 blur-3xl"
      />

      <motion.div
        className="mx-auto flex max-w-6xl items-center justify-center"
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-100px' }}
        transition={{ duration: 0.6 }}
      >
        <div className="relative w-full overflow-hidden rounded-2xl border border-border/60 bg-card/40 p-6 shadow-[0_20px_60px_rgba(0,0,0,0.08)] backdrop-blur-md md:p-10">
          {/* Subtle geometric ornaments inside */}
          <div aria-hidden className="absolute inset-0 opacity-20">
            <svg className="h-full w-full" viewBox="0 0 1200 600" preserveAspectRatio="none">
              <path
                d="M0 120C120 80 240 80 360 120s240 40 360 0 240-40 480 40"
                fill="none"
                stroke="#15803d"
                strokeWidth="2"
                strokeDasharray="6 10"
              />
              <path
                d="M0 320C140 260 280 260 420 320s280 60 420 0 280-60 360 50"
                fill="none"
                stroke="#15803d"
                strokeWidth="2"
                strokeDasharray="10 14"
              />
              <circle cx="1050" cy="120" r="36" fill="none" stroke="#15803d" strokeWidth="2" />
              <circle cx="220" cy="420" r="48" fill="none" stroke="#15803d" strokeWidth="2" />
            </svg>
          </div>

          <div className="relative grid gap-8 md:grid-cols-2 md:items-center">
            <div className="space-y-4">
              <motion.div
                className="inline-flex items-center rounded-full bg-primary/10 px-4 py-2 text-sm font-semibold text-primary"
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4 }}
              >
                Masih Bingung Memilih Program?
              </motion.div>

              <h2 className="text-balance text-3xl font-bold text-foreground md:text-4xl">
                Konsultasikan kebutuhan belajar Anda
              </h2>

              <p className="text-pretty text-lg text-muted-foreground">
                Tim kami akan membantu Anda memilih program yang paling sesuai dengan tujuan dan kemampuan Anda.
                Diskusi bisa langsung melalui WhatsApp.
              </p>

              <div className="flex flex-wrap gap-3 pt-2">
                <a
                  href="https://wa.me/+6287881234567?text=Saya%20ingin%20konsultasi%20memilih%20program%20BAZMA%20Mengaji"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 rounded-lg bg-primary px-6 py-3 font-semibold text-primary-foreground shadow-lg transition-all hover:scale-[1.02] hover:shadow-xl"
                >
                  Konsultasi via WhatsApp
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M21 15a4 4 0 0 1-4 4H7l-4 4V7a4 4 0 0 1 4-4h10a4 4 0 0 1 4 4z" />
                  </svg>
                </a>

                <Link
                  href="/program"
                  className="inline-flex items-center justify-center gap-2 rounded-lg border border-primary/40 px-6 py-3 font-semibold text-primary transition-all hover:bg-primary/10 hover:shadow-sm"
                >
                  Lihat Program
                </Link>
              </div>

              <p className="text-sm text-muted-foreground">
                Respon cepat dari tim BAZMA Mengaji.
              </p>
            </div>

            <motion.div
              className="relative"
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.6 }}
            >
              {/* Glass badge card */}
              <div className="mx-auto w-full max-w-md rounded-2xl border border-white/20 bg-white/10 p-6 backdrop-blur-xl shadow-[0_20px_80px_rgba(21,128,61,0.18)]">
                <div className="flex items-center gap-3">
                  <div
                    className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary/15"
                    style={{ backgroundColor: '#15803d1A' }}
                  >
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#15803d" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M21 10c0 6-3 10-9 10S3 16 3 10c0-4.5 4-8 9-8s9 3.5 9 8z" />
                      <path d="M12 6v6l4 2" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-foreground">Siap dibantu memilih</p>
                    <p className="text-xs text-muted-foreground">Pra Tahsin • Tahsin • Tahfidz • Tartil & Tajwid</p>
                  </div>
                </div>

                <div className="mt-5 space-y-3">
                  {["Online via Zoom", "Bimbingan pengajar bersanad", "Metode terstruktur"].map((t, idx) => (
                    <div key={idx} className="flex items-start gap-3 rounded-lg border border-border/60 bg-background/40 p-3">
                      <span className="mt-1 inline-flex h-2.5 w-2.5 rounded-full bg-primary" />
                      <p className="text-sm text-muted-foreground">{t}</p>
                    </div>
                  ))}
                </div>

                <div className="mt-6 h-px w-full bg-gradient-to-r from-primary/30 via-primary/10 to-transparent" />

                <p className="mt-4 text-sm font-medium text-foreground">
                  Klik tombol WhatsApp untuk mulai konsultasi.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </motion.div>
    </section>
  )
}

