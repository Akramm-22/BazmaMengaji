'use client'

import { useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Menu, X, ArrowRight } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false)
  const pathname = usePathname()

  const closeMenu = () => setIsOpen(false)

  const tabs = [
    { label: 'Beranda', href: '/' },
    { label: 'Program Belajar', href: '/program' },
    { label: 'Tentang Kami', href: '/tentang' },
  ]

  const isActive = (href: string) => pathname === href

  return (
    <nav className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/80 backdrop-blur-md transition-all duration-300">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          
          {/* Logo Brand */}
          <Link href="/" className="group flex items-center gap-1.5 text-xl font-black tracking-wider text-primary">
            <span>BAZMA</span>
            <span className="text-xs font-medium tracking-normal text-muted-foreground bg-primary/10 rounded-md px-1.5 py-0.5 group-hover:bg-primary group-hover:text-primary-foreground transition-colors duration-300">
              Mengaji
            </span>
          </Link>

          {/* Desktop Navigation Links */}
          <div className="hidden items-center gap-8 md:flex">
            {tabs.map((tab) => (
              <Link
                key={tab.href}
                href={tab.href}
                className={`text-sm font-medium transition-colors duration-200 relative py-1 ${
                  isActive(tab.href)
                    ? 'text-primary'
                    : 'text-muted-foreground hover:text-primary'
                }`}
              >
                {tab.label}
                {/* Active Underline Pill Effect */}
                {isActive(tab.href) && (
                  <motion.div 
                    layoutId="activeNavTab"
                    className="absolute bottom-0 left-0 right-0 h-0.5 rounded-full bg-primary"
                    transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                  />
                )}
              </Link>
            ))}
          </div>

          {/* Desktop Action CTA Button */}
          <div className="hidden md:flex items-center">
            <Link
              href="/program"
              className="group inline-flex items-center gap-1.5 rounded-xl bg-primary px-4 py-2 text-xs font-semibold text-primary-foreground shadow-sm transition-all hover:bg-primary/9ba hover:shadow-md"
            >
              Mulai Belajar
              <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" />
            </Link>
          </div>

          {/* Mobile Menu Interactive Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="flex h-9 w-9 items-center justify-center rounded-xl border border-border/50 bg-card/50 text-foreground transition-colors hover:bg-muted md:hidden"
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
          </button>
        </div>
      </div>

      {/* Mobile Animated Dropdown Drawer */}
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25, ease: 'easeInOut' }}
            className="border-t border-border/40 bg-background/95 backdrop-blur-lg overflow-hidden md:hidden"
          >
            <div className="space-y-1.5 px-4 py-4">
              {tabs.map((tab) => (
                <Link
                  key={tab.href}
                  href={tab.href}
                  onClick={closeMenu}
                  className={`block rounded-xl px-4 py-2.5 text-sm font-medium transition-all ${
                    isActive(tab.href) 
                      ? 'bg-primary/10 text-primary font-bold' 
                      : 'text-muted-foreground hover:bg-muted/60 hover:text-foreground'
                  }`}
                >
                  {tab.label}
                </Link>
              ))}
              
              {/* Divider Inside Drawer */}
              <div className="my-3 border-t border-border/40 pt-3">
                <Link
                  href="/program"
                  onClick={closeMenu}
                  className="flex w-full items-center justify-center gap-2 rounded-xl bg-primary py-2.5 text-sm font-semibold text-primary-foreground shadow-sm"
                >
                  Mulai Belajar
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  )
}