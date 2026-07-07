'use client'

import { useEffect } from 'react'
import { useRouter } from 'next/navigation'
import { Navigation } from '../../components/navigation'
import {
  Users,
  GraduationCap,
  BookOpen,
  ClipboardCheck,
  LogOut,
} from 'lucide-react'

export default function AdminPage() {
  const router = useRouter()

  useEffect(() => {
    const auth = localStorage.getItem('auth')

    if (!auth) {
      router.push('/login')
      return
    }

    const user = JSON.parse(auth)

    if (user.role !== 'admin') {
      router.push('/profile')
    }
  }, [router])

  const menus = [
    {
      title: 'Konfirmasi Pendaftaran',
      description: 'Setujui atau tolak pendaftaran santri',
      icon: ClipboardCheck,
      href: '/admin/registrations',
    },
    {
      title: 'Data Santri',
      description: 'Lihat seluruh data santri',
      icon: Users,
      href: '/admin/students',
    },
    {
      title: 'Data Guru',
      description: 'Kelola guru pengajar',
      icon: GraduationCap,
      href: '/admin/teachers',
    },
    {
      title: 'Data Program',
      description: 'Kelola program belajar',
      icon: BookOpen,
      href: '/admin/programs',
    },
  ]

  const logout = () => {
    localStorage.removeItem('auth')
    router.push('/login')
  }

  return (
    <main className="min-h-screen bg-secondary/20">
      <Navigation/>
      <div className="mx-auto max-w-7xl px-4 py-10">

        <div className="mb-10 flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold">
              Dashboard Admin
            </h1>

            <p className="mt-1 text-muted-foreground">
              Selamat datang di panel administrasi Bazma Mengaji
            </p>
          </div>

          <button
            onClick={logout}
            className="inline-flex items-center gap-2 rounded-xl bg-red-600 px-4 py-2 text-sm font-semibold text-white"
          >
            <LogOut className="h-4 w-4" />
            Logout
          </button>
        </div>

        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {menus.map((menu) => {
            const Icon = menu.icon

            return (
              <button
                key={menu.href}
                onClick={() => router.push(menu.href)}
                className="group rounded-3xl border border-border bg-card p-6 text-left transition-all hover:-translate-y-1 hover:border-primary hover:shadow-xl"
              >
                <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-2xl bg-primary/10">
                  <Icon className="h-7 w-7 text-primary" />
                </div>

                <h2 className="text-lg font-bold">
                  {menu.title}
                </h2>

                <p className="mt-2 text-sm text-muted-foreground">
                  {menu.description}
                </p>
              </button>
            )
          })}
        </div>
      </div>
    </main>
  )
}