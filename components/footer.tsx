'use client'

import Link from 'next/link'
import { Mail, Phone, MessageSquare, ArrowUpRight, BookOpen } from 'lucide-react'

export function Footer() {
  const currentYear = new Date().getFullYear()

  const quickLinks = [
    { label: 'Beranda', href: '/' },
    { label: 'Program Belajar', href: '/program' },
    { label: 'Tentang Kami', href: '/tentang' },
    { label: 'Tim Pengajar', href: '/tentang#teachers' },
  ]

  const programLinks = [
    { label: 'Pra Tahsin', href: '/program' },
    { label: 'Tahsin Al-Qur\'an', href: '/program' },
    { label: 'Tahfidz Al-Qur\'an', href: '/program' },
    { label: 'Tartil & Tajwid', href: '/program' },
  ]

  return (
    <footer className="w-full border-t border-border/40 bg-card/50 backdrop-blur-md text-foreground">
      {/* Main Footer Content */}
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-10 sm:grid-cols-2 md:grid-cols-12 lg:gap-12">
          
          {/* Brand Column (Spans 4 cols) */}
          <div className="space-y-4 md:col-span-4">
            <Link href="/" className="group inline-flex items-center gap-1.5 text-xl font-black tracking-wider text-primary">
              <span>BAZMA</span>
              <span className="text-xs font-medium tracking-normal text-muted-foreground bg-primary/10 rounded-md px-1.5 py-0.5">
                Mengaji
              </span>
            </Link>
            <p className="max-w-sm text-sm text-muted-foreground leading-relaxed">
              Platform bimbingan Al-Qur'an terpercaya. Kami berkomitmen menghadirkan pembelajaran interaktif berkualitas tinggi secara online maupun offline.
            </p>
          </div>

          {/* Quick Links Column (Spans 2 cols) */}
          <div className="space-y-4 md:col-span-2">
            <div className="space-y-1.5">
              <h4 className="text-xs font-bold uppercase tracking-wider text-primary">Navigasi</h4>
              <div className="h-0.5 w-6 rounded-full bg-primary/30" />
            </div>
            <ul className="space-y-2.5 text-sm">
              {quickLinks.map((link, idx) => (
                <li key={idx}>
                  <Link 
                    href={link.href} 
                    className="inline-flex items-center text-muted-foreground transition-all duration-200 hover:text-primary hover:translate-x-0.5"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Programs Column (Spans 3 cols) */}
          <div className="space-y-4 md:col-span-3">
            <div className="space-y-1.5">
              <h4 className="text-xs font-bold uppercase tracking-wider text-primary">Program Belajar</h4>
              <div className="h-0.5 w-6 rounded-full bg-primary/30" />
            </div>
            <ul className="space-y-2.5 text-sm">
              {programLinks.map((program, idx) => (
                <li key={idx}>
                  <Link 
                    href={program.href} 
                    className="inline-flex items-center gap-1 text-muted-foreground transition-all duration-200 hover:text-primary hover:translate-x-0.5"
                  >
                    <BookOpen className="h-3 w-3 text-primary/40" />
                    {program.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Column (Spans 3 cols) */}
          <div className="space-y-4 md:col-span-3">
            <div className="space-y-1.5">
              <h4 className="text-xs font-bold uppercase tracking-wider text-primary">Hubungi Kami</h4>
              <div className="h-0.5 w-6 rounded-full bg-primary/30" />
            </div>
            <div className="space-y-3 text-sm">
              <a
                href="mailto:ach21fauzi@gmail.com"
                className="flex items-center gap-2.5 text-muted-foreground transition-colors duration-200 hover:text-primary group"
              >
                <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-secondary/50 border border-border/40 group-hover:border-primary/30">
                  <Mail className="h-3.5 w-3.5 text-muted-foreground group-hover:text-primary" />
                </div>
                <span className="truncate">ach21fauzi@gmail.com</span>
              </a>
              
              <a
                href="tel:+6281515910511"
                className="flex items-center gap-2.5 text-muted-foreground transition-colors duration-200 hover:text-primary group"
              >
                <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-secondary/50 border border-border/40 group-hover:border-primary/30">
                  <Phone className="h-3.5 w-3.5 text-muted-foreground group-hover:text-primary" />
                </div>
                <span>0815-1591-0511</span>
              </a>

              <a
                href="https://wa.me/6281515910511"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2.5 text-muted-foreground transition-colors duration-200 hover:text-green-600 dark:hover:text-green-400 group"
              >
                <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-secondary/50 border border-border/40 group-hover:border-green-500/20">
                  <MessageSquare className="h-3.5 w-3.5 text-muted-foreground group-hover:text-green-500" />
                </div>
                <span className="inline-flex items-center gap-0.5">
                  Chat via WhatsApp
                  <ArrowUpRight className="h-3 w-3 opacity-60 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </span>
              </a>
            </div>
          </div>

        </div>

        {/* Thick Elegant Divider */}
        <div className="my-10 border-t border-border/40" />

        {/* Bottom Bar Content */}
        <div className="flex flex-col items-center justify-between gap-4 text-center text-xs text-muted-foreground md:flex-row">
          <p>&copy; {currentYear} BAZMA Mengaji. Hak Cipta Dilindungi.</p>
          <div className="flex gap-6">
            <Link href="#" className="transition-colors duration-200 hover:text-primary">
              Kebijakan Privasi
            </Link>
            <Link href="#" className="transition-colors duration-200 hover:text-primary">
              Syarat & Ketentuan
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}