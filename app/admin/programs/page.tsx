'use client'

import { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'
import {
  ArrowLeft,
  Plus,
  Pencil,
  Trash2,
  X,
} from 'lucide-react'
import { toast } from 'sonner'

const API_URL = 'https://backend-ngaji.smktibazma.sch.id'

type Program = {
  id: number
  name: string
  slug: string
  description: string
  result: string
  price: string
  image: string | null
  targets: string[]
}

export default function ProgramsPage() {
  const router = useRouter()

  const [programs, setPrograms] = useState<Program[]>([])
  const [loading, setLoading] = useState(false)

  const [openModal, setOpenModal] = useState(false)
  const [editingId, setEditingId] = useState<number | null>(null)

  const [image, setImage] = useState<File | null>(null)

  const [form, setForm] = useState({
    name: '',
    slug: '',
    description: '',
    result: '',
    price: '',
  })

  const [targets, setTargets] = useState<string[]>([''])

  const fetchPrograms = async () => {
    try {
      const res = await fetch(
        `${API_URL}/api/programs`
      )

      const result = await res.json()

      if (result.success) {
        setPrograms(result.data)
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

    fetchPrograms()
  }, [])

  const resetForm = () => {
    setEditingId(null)

    setForm({
      name: '',
      slug: '',
      description: '',
      result: '',
      price: '',
    })

    setTargets([''])
    setImage(null)
  }

  const openAddModal = () => {
    resetForm()
    setOpenModal(true)
  }

  const openEditModal = (program: Program) => {
    setEditingId(program.id)

    setForm({
      name: program.name,
      slug: program.slug,
      description: program.description,
      result: program.result,
      price: program.price,
    })

    setTargets(
      program.targets?.length
        ? program.targets
        : ['']
    )

    setOpenModal(true)
  }

  const addTarget = () => {
    setTargets([...targets, ''])
  }

  const updateTarget = (
    index: number,
    value: string
  ) => {
    const newTargets = [...targets]
    newTargets[index] = value
    setTargets(newTargets)
  }

  const removeTarget = (index: number) => {
    setTargets(
      targets.filter((_, i) => i !== index)
    )
  }

  const saveProgram = async () => {
    try {
      setLoading(true)

      const formData = new FormData()

      formData.append('name', form.name)
      formData.append('slug', form.slug)
      formData.append(
        'description',
        form.description
      )
      formData.append('result', form.result)
      formData.append('price', form.price)

      formData.append(
        'targets',
        JSON.stringify(targets)
      )

      if (image) {
        formData.append('image', image)
      }

      let url =
        `${API_URL}/api/programs`

      let method = 'POST'

      if (editingId) {
        url =
          `${API_URL}/api/programs/${editingId}`

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
          ? 'Program berhasil diperbarui'
          : 'Program berhasil ditambahkan'
      ) 
 
    } finally {
      setLoading(false)
    }
  }

  const deleteProgram = async (
    id: number
  ) => {
    if (
      !confirm(
        'Yakin ingin menghapus program?'
      )
    )
      return

    const res = await fetch(
      `${API_URL}/api/programs/${id}`,
      {
        method: 'DELETE',  
      }
    )

    const result = await res.json()

    if (!result.success) {
      toast.error(result.message)
      return
    }

    toast.success('Program berhasil dihapus')

    fetchPrograms()
  }

  return (
    <main className="min-h-screen bg-secondary/20 p-6">
      <div className="mx-auto max-w-7xl">

        <div className="mb-8 flex items-center justify-between">

          <div>
            <h1 className="text-3xl font-bold">
              Data Program
            </h1>

            <p className="text-muted-foreground">
              Kelola seluruh program belajar
            </p>
          </div>

          <div className="flex gap-3">

            <button
              onClick={() =>
                router.push('/admin')
              }
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
              Tambah Program
            </button>

          </div>
        </div>

        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">

          {programs.map((program) => (
            <div
              key={program.id}
              className="overflow-hidden rounded-3xl border bg-card shadow-sm"
            >
              <img
                src={
                  program.image
                    ? `${API_URL}${program.image}`
                    : '/placeholder.jpg'
                }
                alt={program.name}
                className="h-60 w-full object-cover"
              />

              <div className="space-y-4 p-5">

                <div>
                  <h3 className="text-xl font-bold">
                    {program.name}
                  </h3>

                  <p className="text-sm text-muted-foreground">
                    {program.price}
                  </p>
                </div>

                <p className="line-clamp-3 text-sm text-muted-foreground">
                  {program.description}
                </p>

                <div className="text-sm">
                  <strong>
                    {program.targets?.length || 0}
                  </strong>{' '}
                  Target Materi
                </div>

                <div className="flex gap-2">

                  <button
                    onClick={() =>
                      openEditModal(program)
                    }
                    className="flex flex-1 items-center justify-center gap-2 rounded-xl bg-blue-600 py-2 text-white"
                  >
                    <Pencil size={16} />
                    Edit
                  </button>

                  <button
                    onClick={() =>
                      deleteProgram(program.id)
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

            <div className="max-h-[90vh] w-full max-w-3xl overflow-y-auto rounded-3xl bg-white p-6">

              <div className="mb-6 flex items-center justify-between">

                <h2 className="text-2xl font-bold">
                  {editingId
                    ? 'Edit Program'
                    : 'Tambah Program'}
                </h2>

                <button
                  onClick={() =>
                    setOpenModal(false)
                  }
                >
                  <X />
                </button>

              </div>

              <div className="space-y-4">

                <input
                  placeholder="Nama Program"
                  value={form.name}
                  onChange={(e) =>
                    setForm({
                      ...form,
                      name: e.target.value,
                    })
                  }
                  className="w-full rounded-xl border p-3"
                />

                <input
                  placeholder="Slug"
                  value={form.slug}
                  onChange={(e) =>
                    setForm({
                      ...form,
                      slug: e.target.value,
                    })
                  }
                  className="w-full rounded-xl border p-3"
                />

                <textarea
                  rows={4}
                  placeholder="Deskripsi"
                  value={form.description}
                  onChange={(e) =>
                    setForm({
                      ...form,
                      description:
                        e.target.value,
                    })
                  }
                  className="w-full rounded-xl border p-3"
                />

                <textarea
                  rows={3}
                  placeholder="Target Kelulusan"
                  value={form.result}
                  onChange={(e) =>
                    setForm({
                      ...form,
                      result: e.target.value,
                    })
                  }
                  className="w-full rounded-xl border p-3"
                />

                <input
                  placeholder="Harga"
                  value={form.price}
                  onChange={(e) =>
                    setForm({
                      ...form,
                      price: e.target.value,
                    })
                  }
                  className="w-full rounded-xl border p-3"
                />

                <div>
                  <h3 className="mb-3 font-semibold">
                    Target Materi
                  </h3>

                  <div className="space-y-3">

                    {targets.map(
                      (target, index) => (
                        <div
                          key={index}
                          className="flex gap-2"
                        >
                          <input
                            value={target}
                            onChange={(e) =>
                              updateTarget(
                                index,
                                e.target.value
                              )
                            }
                            className="flex-1 rounded-xl border p-3"
                          />

                          <button
                            onClick={() =>
                              removeTarget(
                                index
                              )
                            }
                            className="rounded-xl bg-red-600 px-4 text-white"
                          >
                            <Trash2
                              size={16}
                            />
                          </button>
                        </div>
                      )
                    )}

                  </div>

                  <button
                    onClick={addTarget}
                    className="mt-3 rounded-xl bg-primary px-4 py-2 text-white"
                  >
                    + Tambah Materi
                  </button>

                </div>

                <input
                  type="file"
                  accept="image/*"
                  onChange={(e) =>
                    setImage(
                      e.target.files?.[0] ||
                        null
                    )
                  }
                />

              </div>

              <div className="mt-6 flex justify-end gap-3">

                <button
                  onClick={() =>
                    setOpenModal(false)
                  }
                  className="rounded-xl border px-5 py-2"
                >
                  Batal
                </button>

                <button
                  onClick={saveProgram}
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