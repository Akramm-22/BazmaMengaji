'use client'

import { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'
import {Navigation} from '../../components/navigation'
import {
  LogOut,
  Lock,
  Edit,
  X,
  BookOpen,
  MapPin,
  User,
} from 'lucide-react'
import { toast } from 'sonner'

const API_URL = 'https://backend-ngaji.smktibazma.sch.id'

export default function ProfilePage() {
  const router = useRouter()

  const [user, setUser] = useState<any>(null)
  const [registrations, setRegistrations] = useState<any[]>([])

  const [password, setPassword] = useState('')

  const [openEdit, setOpenEdit] = useState(false)

  const [editForm, setEditForm] = useState({
    name: '',
    phone: '',
    email: '',
    domicile: '',
    age: '',
    gender: '',
  })

  useEffect(() => {
    const auth = localStorage.getItem('auth')

    if (!auth) {
      router.push('/login')
      return
    }

    const authData = JSON.parse(auth)

    fetchProfile(authData.id)
  }, [])

  const fetchProfile = async (id: number) => {
    try {
      const res = await fetch(
        `${API_URL}/api/profile/${id}`
      )

      const result = await res.json()

      if (result.success) {
        setUser(result.user)
        setRegistrations(result.registrations)

        setEditForm({
          name: result.user.name || '',
          phone: result.user.phone || '',
          email: result.user.email || '',
          domicile: result.user.domicile || '',
          age: result.user.age || '',
          gender: result.user.gender || '',
        })
      }
    } catch (error) {
      console.error(error)
    }
  }

  const logout = () => {
    localStorage.removeItem('auth')
    router.push('/login')
  }

  const updateProfile = async () => {
    const res = await fetch(
      `${API_URL}/api/profile/update/${user.id}`,
      {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(editForm),
      }
    )

    const result = await res.json()

    if (!result.success) {
      toast.error(result.message)
      return
    }

    toast.success('Profil berhasil diperbarui')

    setOpenEdit(false)

    fetchProfile(user.id)
  }

  const changePassword = async () => {
    if (!password) {
      toast.error('Password wajib diisi')
      return
    }

    const res = await fetch(
      `${API_URL}/api/profile/change-password`,
      {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          userId: user.id,
          password,
        }),
      }
    )

    const result = await res.json()

    if (!result.success) {
      toast.error(result.message)
      return
    }

    toast.success('Password berhasil diubah')
    setPassword('')
  }

  const cancelRegistration = async (
    registrationId: number
  ) => {
    if (
      !confirm(
        'Yakin ingin membatalkan pendaftaran ini?'
      )
    ) {
      return
    }

    const res = await fetch(
      `${API_URL}/api/profile/registration/${registrationId}`,
      {
        method: 'DELETE',
      }
    )

    const result = await res.json()

    if (!result.success) {
      toast.error(result.message)
      return
    }

    toast.success(
      'Pendaftaran berhasil dibatalkan'
    )

    fetchProfile(user.id)
  }

  if (!user) return null

  const pendingCount = registrations.filter(
    (x) => x.status === 'pending'
  ).length

  const acceptedCount = registrations.filter(
    (x) => x.status === 'diterima'
  ).length

  return (
    <main className="min-h-screen bg-secondary/20">
      <Navigation/>

      <div className="mx-auto max-w-6xl space-y-6 pt-5">

        {/* HERO */}

        <div className="rounded-3xl bg-gradient-to-r from-primary to-primary/80 p-8 text-white">

          <div className="flex flex-col gap-5 md:flex-row md:items-center md:justify-between">

            <div className="flex items-center gap-5">

              <div className="flex h-24 w-24 items-center justify-center rounded-full bg-white/20 text-3xl font-bold">
                {user.name?.charAt(0)}
              </div>

              <div>

                <h1 className="text-3xl font-bold">
                  {user.name}
                </h1>

                <p className="mt-1 text-white/80">
                  Santri Aktif
                </p>

                <div className="mt-2 flex items-center gap-2 text-sm text-white/80">
                  <MapPin size={15} />
                  {user.domicile}
                </div>

              </div>

            </div>

            <button
              onClick={logout}
              className="rounded-xl bg-red-500 px-5 py-3 font-semibold text-white"
            >
              Logout
            </button>

          </div>

        </div>

        {/* STATS */}

        <div className="grid gap-4 md:grid-cols-3">

          <div className="rounded-3xl border bg-card p-6">
            <p className="text-sm text-muted-foreground">
              Total Program
            </p>
            <h2 className="mt-2 text-3xl font-bold">
              {registrations.length}
            </h2>
          </div>

          <div className="rounded-3xl border bg-card p-6">
            <p className="text-sm text-muted-foreground">
              Pending
            </p>
            <h2 className="mt-2 text-3xl font-bold text-yellow-600">
              {pendingCount}
            </h2>
          </div>

          <div className="rounded-3xl border bg-card p-6">
            <p className="text-sm text-muted-foreground">
              Diterima
            </p>
            <h2 className="mt-2 text-3xl font-bold text-green-600">
              {acceptedCount}
            </h2>
          </div>

        </div>

        {/* BIODATA */}

        <div className="rounded-3xl border bg-card p-8">

          <div className="mb-6 flex items-center justify-between">

            <h2 className="text-2xl font-bold">
              Biodata
            </h2>

            <button
              onClick={() => setOpenEdit(true)}
              className="flex items-center gap-2 rounded-xl bg-primary px-4 py-2 text-white"
            >
              <Edit size={16} />
              Edit
            </button>

          </div>

          <div className="grid gap-5 md:grid-cols-2">

            <Info title="Nama" value={user.name} />
            <Info title="Nomor WA" value={user.phone} />
            <Info title="Email" value={user.email || '-'} />
            <Info title="Domisili" value={user.domicile} />
            <Info title="Gender" value={user.gender} />
            <Info title="Umur" value={`${user.age} Tahun`} />

          </div>

        </div>

        {/* PROGRAM */}

        <div className="rounded-3xl border bg-card p-8">

          <h2 className="mb-6 text-2xl font-bold">
            Program Saya
          </h2>

          <div className="space-y-4">

            {registrations.map((item) => {

              const badge =
                item.status === 'pending'
                  ? 'bg-yellow-100 text-yellow-700'
                  : item.status === 'diterima'
                  ? 'bg-green-100 text-green-700'
                  : 'bg-red-100 text-red-700'

              return (
                <div
                  key={item.id}
                  className="rounded-2xl border p-5"
                >
                  <div className="flex items-center justify-between">

                    <div>

                      <h3 className="font-bold">
                        {item.program_name}
                      </h3>

                      <div className="mt-3 space-y-1 text-sm">

                        <p>
                          Guru:
                          {' '}
                          {item.teacher_name || '-'}
                        </p>

                        <p>
                          Kelas:
                          {' '}
                          {item.class_type}
                        </p>

                        <p>
                          Jadwal:
                          {' '}
                          {item.schedule}
                        </p>

                      </div>

                    </div>

                    <span
                      className={`rounded-full px-3 py-1 text-xs font-bold ${badge}`}
                    >
                      {item.status}
                    </span>

                  </div>

                  {item.status === 'pending' && (
                    <button
                      onClick={() =>
                        cancelRegistration(item.id)
                      }
                      className="mt-4 rounded-xl bg-red-600 px-4 py-2 text-sm text-white"
                    >
                      Batalkan
                    </button>
                  )}

                </div>
              )
            })}

          </div>

        </div>

        {/* PASSWORD */}

        <div className="rounded-3xl border bg-card p-8">

          <h2 className="mb-5 text-xl font-bold">
            Ubah Password
          </h2>

          <div className="flex gap-3">

            <input
              type="password"
              value={password}
              onChange={(e) =>
                setPassword(e.target.value)
              }
              placeholder="Password baru"
              className="flex-1 rounded-xl border px-4 py-3"
            />

            <button
              onClick={changePassword}
              className="flex items-center gap-2 rounded-xl bg-primary px-5 py-3 text-white"
            >
              <Lock size={18} />
              Simpan
            </button>

          </div>

        </div>

      </div>

      {/* MODAL EDIT */}

      {openEdit && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4">

          <div className="w-full max-w-lg rounded-3xl bg-white p-6">

            <div className="mb-5 flex items-center justify-between">

              <h2 className="text-xl font-bold">
                Edit Biodata
              </h2>

              <button
                onClick={() => setOpenEdit(false)}
              >
                <X />
              </button>

            </div>

            <div className="space-y-4">

              <input
                value={editForm.name}
                onChange={(e) =>
                  setEditForm({
                    ...editForm,
                    name: e.target.value,
                  })
                }
                placeholder="Nama"
                className="w-full rounded-xl border p-3"
              />

              <input
                value={editForm.phone}
                onChange={(e) =>
                  setEditForm({
                    ...editForm,
                    phone: e.target.value,
                  })
                }
                placeholder="Nomor WA"
                className="w-full rounded-xl border p-3"
              />

              <input
                value={editForm.email}
                onChange={(e) =>
                  setEditForm({
                    ...editForm,
                    email: e.target.value,
                  })
                }
                placeholder="Email"
                className="w-full rounded-xl border p-3"
              />

              <input
                value={editForm.domicile}
                onChange={(e) =>
                  setEditForm({
                    ...editForm,
                    domicile: e.target.value,
                  })
                }
                placeholder="Domisili"
                className="w-full rounded-xl border p-3"
              />

            </div>

            <button
              onClick={updateProfile}
              className="mt-5 w-full rounded-xl bg-primary py-3 text-white"
            >
              Simpan Perubahan
            </button>

          </div>

        </div>
      )}
    </main>
  )
}

function Info({
  title,
  value,
}: {
  title: string
  value: string
}) {
  return (
    <div>
      <p className="text-sm text-muted-foreground">
        {title}
      </p>
      <p className="font-semibold">
        {value}
      </p>
    </div>
  )
}