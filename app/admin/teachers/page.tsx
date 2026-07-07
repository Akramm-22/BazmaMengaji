'use client'

import { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'
import {
  ArrowLeft,
  Plus,
  Pencil,
  Trash2,
  Star,
} from 'lucide-react'
import { toast } from 'sonner'

const API_URL = 'http://localhost:5000'

type Teacher = {
  id: number
  name: string
  title: string
  bio: string
  rating: number
  specialty: string
  experience: string
  schedule: string
  photo: string | null
}

export default function TeachersPage() {
  const router = useRouter()

  const [teachers, setTeachers] = useState<Teacher[]>([])
  const [loading, setLoading] = useState(false)

  const [openModal, setOpenModal] = useState(false)
  const [editingId, setEditingId] = useState<number | null>(null)

  const [photo, setPhoto] = useState<File | null>(null)

  const [form, setForm] = useState({
    name: '',
    title: '',
    bio: '',
    specialty: '',
    experience: '',
    schedule: '',
    rating: '',
  })

  const fetchTeachers = async () => {
    try {
      const res = await fetch(
        `${API_URL}/api/admin/teachers`
      )

      const result = await res.json()

      if (result.success) {
        setTeachers(result.data)
      }
    } catch (err) {
      console.log(err)
    }
  }

  useEffect(() => {
    const auth = localStorage.getItem('auth')

    if (!auth) {
      router.push('/login')
      return
    }

    const user = JSON.parse(auth)

    if (user.role !== 'admin') {
      router.push('/profile')
      return
    }

    fetchTeachers()
  }, [])

  const resetForm = () => {
    setEditingId(null)

    setForm({
      name: '',
      title: '',
      bio: '',
      specialty: '',
      experience: '',
      schedule: '',
      rating: '',
    })

    setPhoto(null)
  }

  const openAddModal = () => {
    resetForm()
    setOpenModal(true)
  }

  const openEditModal = (teacher: Teacher) => {
    setEditingId(teacher.id)

    setForm({
      name: teacher.name,
      title: teacher.title,
      bio: teacher.bio,
      specialty: teacher.specialty,
      experience: teacher.experience,
      schedule: teacher.schedule,
      rating: String(teacher.rating),
    })

    setOpenModal(true)
  }

  const saveTeacher = async () => {
    try {
      setLoading(true)

      const formData = new FormData()

      formData.append('name', form.name)
      formData.append('title', form.title)
      formData.append('bio', form.bio)
      formData.append('specialty', form.specialty)
      formData.append('experience', form.experience)
      formData.append('schedule', form.schedule)
      formData.append('rating', form.rating)

      if (photo) {
        formData.append('photo', photo)
      }

      let url = `${API_URL}/api/admin/teachers`
      let method = 'POST'

      if (editingId) {
        url = `${API_URL}/api/admin/teachers/${editingId}`
        method = 'PUT'
      }

      const res = await fetch(url, {
        method,
        body: formData,
      })

      const result = await res.json()

      if (!result.success) {
        toast.error(result.message)
        return
      }

      toast.success(
        editingId
          ? 'Guru berhasil diperbarui'
          : 'Guru berhasil ditambahkan'
      )

      setOpenModal(false)

      resetForm()

      fetchTeachers()
    } catch (err) {
      console.log(err)
      toast.error('Terjadi kesalahan')
    } finally {
      setLoading(false)
    }
  }

  const deleteTeacher = async (id: number) => {
    if (!confirm('Hapus guru ini?')) return

    const res = await fetch(
      `${API_URL}/api/admin/teachers/${id}`,
      {
        method: 'DELETE',
      }
    )

    const result = await res.json()

    if (!result.success) {
      toast.error(result.message)
      return
    }

    toast.success('Guru berhasil dihapus')

    fetchTeachers()
  }

  return (
    <main className="min-h-screen bg-secondary/20 p-6">
      <div className="mx-auto max-w-7xl">

        <div className="mb-8 flex items-center justify-between">

          <div>
            <h1 className="text-3xl font-bold">
              Data Guru
            </h1>

            <p className="text-muted-foreground">
              Kelola data pengajar
            </p>
          </div>

          <div className="flex gap-3">

            <button
              onClick={() => router.push('/admin')}
              className="flex items-center gap-2 rounded-xl border px-4 py-2"
            >
              <ArrowLeft size={18} />
              Kembali
            </button>

            <button
              onClick={openAddModal}
              className="flex items-center gap-2 rounded-xl bg-primary px-4 py-2 font-semibold text-white"
            >
              <Plus size={18} />
              Tambah Guru
            </button>

          </div>
        </div>

        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">

          {teachers.map((teacher) => (
            <div
              key={teacher.id}
              className="overflow-hidden rounded-3xl border bg-card shadow-sm"
            >
              <img
                src={
                  teacher.photo
                    ? `${API_URL}${teacher.photo}`
                    : '/placeholder.jpg'
                }
                alt={teacher.name}
                className="h-64 w-full object-cover"
              />

              <div className="space-y-4 p-5">

                <div>
                  <h3 className="text-lg font-bold">
                    {teacher.name}
                  </h3>

                  <p className="text-sm text-primary">
                    {teacher.title}
                  </p>
                </div>

                <p className="line-clamp-3 text-sm text-muted-foreground">
                  {teacher.bio}
                </p>

                <div className="space-y-2 text-sm">

                  <div>
                    <strong>Spesialis:</strong>{' '}
                    {teacher.specialty}
                  </div>

                  <div>
                    <strong>Pengalaman:</strong>{' '}
                    {teacher.experience}
                  </div>

                  <div>
                    <strong>Jadwal:</strong>{' '}
                    {teacher.schedule}
                  </div>

                  <div className="flex items-center gap-1">
                    <Star
                      size={16}
                      className="fill-yellow-400 text-yellow-400"
                    />
                    {teacher.rating}
                  </div>

                </div>

                <div className="flex gap-2 pt-2">

                  <button
                    onClick={() =>
                      openEditModal(teacher)
                    }
                    className="flex flex-1 items-center justify-center gap-2 rounded-xl bg-blue-600 py-2 text-white"
                  >
                    <Pencil size={16} />
                    Edit
                  </button>

                  <button
                    onClick={() =>
                      deleteTeacher(teacher.id)
                    }
                    className="flex flex-1 items-center justify-center gap-2 rounded-xl bg-red-600 py-2 text-white"
                  >
                    <Trash2 size={16} />
                    Hapus
                  </button>

                </div>
              </div>
            </div>
          ))}
        </div>

        {openModal && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-4">

            <div className="w-full max-w-2xl rounded-3xl bg-white p-6">

              <h2 className="mb-6 text-2xl font-bold">
                {editingId
                  ? 'Edit Guru'
                  : 'Tambah Guru'}
              </h2>

              <div className="grid gap-4">

                <input
                  placeholder="Nama"
                  value={form.name}
                  onChange={(e) =>
                    setForm({
                      ...form,
                      name: e.target.value,
                    })
                  }
                  className="rounded-xl border p-3"
                />

                <input
                  placeholder="Jabatan"
                  value={form.title}
                  onChange={(e) =>
                    setForm({
                      ...form,
                      title: e.target.value,
                    })
                  }
                  className="rounded-xl border p-3"
                />

                <textarea
                  placeholder="Bio"
                  rows={4}
                  value={form.bio}
                  onChange={(e) =>
                    setForm({
                      ...form,
                      bio: e.target.value,
                    })
                  }
                  className="rounded-xl border p-3"
                />

                <input
                  placeholder="Specialty"
                  value={form.specialty}
                  onChange={(e) =>
                    setForm({
                      ...form,
                      specialty: e.target.value,
                    })
                  }
                  className="rounded-xl border p-3"
                />

                <input
                  placeholder="Experience"
                  value={form.experience}
                  onChange={(e) =>
                    setForm({
                      ...form,
                      experience: e.target.value,
                    })
                  }
                  className="rounded-xl border p-3"
                />

                <input
                  placeholder="Schedule"
                  value={form.schedule}
                  onChange={(e) =>
                    setForm({
                      ...form,
                      schedule: e.target.value,
                    })
                  }
                  className="rounded-xl border p-3"
                />

                <input
                  type="number"
                  step="0.1"
                  placeholder="Rating"
                  value={form.rating}
                  onChange={(e) =>
                    setForm({
                      ...form,
                      rating: e.target.value,
                    })
                  }
                  className="rounded-xl border p-3"
                />

                <input
                  type="file"
                  accept="image/*"
                  onChange={(e) =>
                    setPhoto(
                      e.target.files?.[0] || null
                    )
                  }
                />

              </div>

              <div className="mt-6 flex justify-end gap-3">

                <button
                  onClick={() => setOpenModal(false)}
                  className="rounded-xl border px-5 py-2"
                >
                  Batal
                </button>

                <button
                  onClick={saveTeacher}
                  disabled={loading}
                  className="rounded-xl bg-primary px-5 py-2 text-white"
                >
                  {loading
                    ? 'Menyimpan...'
                    : 'Simpan'}
                </button>

              </div>
            </div>
          </div>
        )}
      </div>
    </main>
  )
}