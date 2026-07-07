'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { Mail, Lock, LogIn } from 'lucide-react'
import { toast } from 'sonner'

export default function LoginPage() {
  const router = useRouter()

  const [formData, setFormData] = useState({
    phoneOrEmail: '',
    password: '',
  })

  const [loading, setLoading] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    try {
      setLoading(true)

      const res = await fetch('http://localhost:5000/api/auth/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      })

      const result = await res.json()

      if (!result.success) {
        toast.error(result.message || 'Login gagal')
        return
      }

      localStorage.setItem('auth', JSON.stringify(result.data))

      toast.success('Login berhasil')

      if (result.data.role === 'admin') {
        router.push('/admin')
      } else {
        router.push('/profile')
      }
    } catch (error) {
      console.error(error)
      toast.error('Terjadi kesalahan saat login')
    } finally {
      setLoading(false)
    }
  }

  return (
    <main className="flex min-h-screen items-center justify-center bg-secondary/20 px-4">
      <form
        onSubmit={handleSubmit}
        className="w-full max-w-md rounded-2xl border border-border/50 bg-card/80 p-8 shadow-xl backdrop-blur-sm"
      >
        <div className="mb-8 text-center">
          <h1 className="text-3xl font-bold text-foreground">
            Login
          </h1>
          <p className="mt-2 text-sm text-muted-foreground">
            Masuk sebagai santri atau admin
          </p>
        </div>

        <div className="space-y-5">
          <div>
            <label className="mb-1.5 block text-xs font-semibold">
              Email Admin / Nomor WA Santri
            </label>
            <div className="relative">
              <Mail className="absolute left-3.5 top-3 h-4 w-4 text-muted-foreground" />
              <input
                type="text"
                name="phoneOrEmail"
                value={formData.phoneOrEmail}
                onChange={handleChange}
                placeholder="admin@gmail.com / 628xxxx"
                required
                className="w-full rounded-xl border border-border bg-input/40 py-2.5 pl-11 pr-4 text-sm outline-none focus:border-primary"
              />
            </div>
          </div>

          <div>
            <label className="mb-1.5 block text-xs font-semibold">
              Password
            </label>
            <div className="relative">
              <Lock className="absolute left-3.5 top-3 h-4 w-4 text-muted-foreground" />
              <input
                type="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                placeholder="Masukkan password"
                required
                className="w-full rounded-xl border border-border bg-input/40 py-2.5 pl-11 pr-4 text-sm outline-none focus:border-primary"
              />
            </div>
          </div>

          <button
            type="submit"
            disabled={loading}
            className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-primary px-5 py-3 text-sm font-semibold text-primary-foreground disabled:opacity-50"
          >
            <LogIn className="h-4 w-4" />
            {loading ? 'Memproses...' : 'Login'}
          </button>
        </div>
      </form>
    </main>
  )
}