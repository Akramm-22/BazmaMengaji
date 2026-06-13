'use client'

import { motion } from 'framer-motion'
import { useState } from 'react'
import { MessageCircle, Mail, Phone, User, Calendar } from 'lucide-react'

export function Registration() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    age: '',
    program: '',
    message: '',
  })

  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Create WhatsApp message
    const whatsappNumber = '6287881234567'
    const message = `
Halo, saya tertarik mendaftar untuk program BAZMA Mengaji.

*Data Diri:*
Nama: ${formData.name}
Email: ${formData.email}
Nomor: ${formData.phone}
Usia: ${formData.age}
Program: ${formData.program}
Pesan: ${formData.message}

Terima kasih.
    `.trim()

    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`
    window.open(whatsappUrl, '_blank')

    setSubmitted(true)
    setTimeout(() => {
      setFormData({ name: '', email: '', phone: '', age: '', program: '', message: '' })
      setSubmitted(false)
    }, 2000)
  }

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  }

  return (
    <section id="registration" className="space-y-12 bg-secondary/20 px-4 py-20 md:px-8 md:py-32">
      <motion.div
        className="mx-auto max-w-6xl space-y-4 text-center"
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <p className="inline-block rounded-full bg-primary/10 px-4 py-2 text-sm font-semibold text-primary">
          Daftar Sekarang
        </p>
        <h2 className="text-3xl font-bold text-foreground md:text-4xl">
          Mulai Perjalanan Mengaji Anda
        </h2>
        <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
          Isi formulir di bawah untuk mendaftar dan kami akan menghubungi Anda melalui WhatsApp.
        </p>
      </motion.div>

      <motion.div
        className="mx-auto max-w-2xl"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-100px' }}
      >
        <motion.form
          onSubmit={handleSubmit}
          className="space-y-6 rounded-xl border border-border bg-card p-8 shadow-lg"
          variants={itemVariants}
        >
          {/* Name */}
          <motion.div variants={itemVariants}>
            <label className="mb-2 block text-sm font-semibold text-foreground">Nama Lengkap</label>
            <div className="relative">
              <User className="absolute left-3 top-3 h-5 w-5 text-primary" />
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Masukkan nama Anda"
                required
                className="w-full rounded-lg border border-border bg-input pl-10 pr-4 py-3 text-foreground placeholder-muted-foreground transition-all focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/30"
              />
            </div>
          </motion.div>

          {/* Email */}
          <motion.div variants={itemVariants}>
            <label className="mb-2 block text-sm font-semibold text-foreground">Email</label>
            <div className="relative">
              <Mail className="absolute left-3 top-3 h-5 w-5 text-primary" />
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="email@example.com"
                required
                className="w-full rounded-lg border border-border bg-input pl-10 pr-4 py-3 text-foreground placeholder-muted-foreground transition-all focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/30"
              />
            </div>
          </motion.div>

          {/* Phone */}
          <motion.div variants={itemVariants}>
            <label className="mb-2 block text-sm font-semibold text-foreground">Nomor WhatsApp</label>
            <div className="relative">
              <Phone className="absolute left-3 top-3 h-5 w-5 text-primary" />
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="62812345678"
                required
                className="w-full rounded-lg border border-border bg-input pl-10 pr-4 py-3 text-foreground placeholder-muted-foreground transition-all focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/30"
              />
            </div>
          </motion.div>

          {/* Age & Program Grid */}
          <motion.div variants={itemVariants} className="grid gap-6 md:grid-cols-2">
            <div>
              <label className="mb-2 block text-sm font-semibold text-foreground">Usia</label>
              <div className="relative">
                <Calendar className="absolute left-3 top-3 h-5 w-5 text-primary" />
                <input
                  type="number"
                  name="age"
                  value={formData.age}
                  onChange={handleChange}
                  placeholder="Masukkan usia"
                  required
                  className="w-full rounded-lg border border-border bg-input pl-10 pr-4 py-3 text-foreground placeholder-muted-foreground transition-all focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/30"
                />
              </div>
            </div>

            <div>
              <label className="mb-2 block text-sm font-semibold text-foreground">Program</label>
              <select
                name="program"
                value={formData.program}
                onChange={handleChange}
                required
                className="w-full rounded-lg border border-border bg-input px-4 py-3 text-foreground transition-all focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/30"
              >
                <option value="">Pilih Program</option>
                <option value="anak-anak">Program Anak-Anak (4-8 Tahun)</option>
                <option value="pemula">Program Pemula (9-14 Tahun)</option>
                <option value="menengah">Program Menengah (15+ Tahun)</option>
                <option value="hafiz">Program Hafiz (Semua Usia)</option>
              </select>
            </div>
          </motion.div>

          {/* Message */}
          <motion.div variants={itemVariants}>
            <label className="mb-2 block text-sm font-semibold text-foreground">Pesan Tambahan</label>
            <div className="relative">
              <MessageCircle className="absolute left-3 top-3 h-5 w-5 text-primary" />
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Tuliskan pertanyaan atau harapan Anda..."
                rows={4}
                className="w-full rounded-lg border border-border bg-input pl-10 pr-4 py-3 text-foreground placeholder-muted-foreground transition-all focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/30"
              />
            </div>
          </motion.div>

          {/* Submit Button */}
          <motion.button
            type="submit"
            variants={itemVariants}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            disabled={submitted}
            className="w-full rounded-lg bg-primary px-6 py-3 font-semibold text-primary-foreground transition-all hover:shadow-lg disabled:opacity-50"
          >
            {submitted ? '✓ Redirecting to WhatsApp...' : 'Hubungi Kami via WhatsApp'}
          </motion.button>

          {submitted && (
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center text-sm text-green-600 font-semibold"
            >
              Terima kasih! Anda akan diarahkan ke WhatsApp.
            </motion.p>
          )}
        </motion.form>
      </motion.div>

      {/* WhatsApp Support */}
      <motion.div
        className="mx-auto max-w-2xl"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.3 }}
      >
        <div className="rounded-lg border border-primary/30 bg-primary/5 p-6 text-center">
          <p className="mb-4 font-semibold text-foreground">Atau hubungi kami langsung di WhatsApp</p>
          <a
            href="https://wa.me/6287881234567"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-lg bg-green-500 px-6 py-3 font-semibold text-white transition-all hover:bg-green-600 hover:shadow-lg"
          >
            <MessageCircle className="h-5 w-5" />
            Chat WhatsApp
          </a>
        </div>
      </motion.div>
    </section>
  )
}
