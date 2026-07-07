'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { ArrowLeft, Search } from 'lucide-react';
import { toast } from 'sonner';

type Student = {
  id: number;
  name: string;
  gender: string;
  age: number;
  phone: string;
  email: string | null;
  domicile: string;
  status: string;
  program_name: string | null;
  teacher_name: string | null;
};

export default function StudentsPage() {
  const router = useRouter();
const [isEditOpen, setIsEditOpen] = useState(false)
  const [students, setStudents] = useState<Student[]>([]);
  const [search, setSearch] = useState('');
  const [editData, setEditData] = useState({
  id: 0,
  name: '',
  gender: '',
  age: '',
  phone: '',
  email: '',
  domicile: '',
})

const openEditModal = (student: Student) => {
  setEditData({
    id: student.id,
    name: student.name,
    gender: student.gender,
    age: student.age.toString(),
    phone: student.phone,
    email: student.email || '',
    domicile: student.domicile,
  })

  setIsEditOpen(true)
}



  useEffect(() => {
    const auth = localStorage.getItem('auth');

    if (!auth) {
      router.push('/login');
      return;
    }

    const user = JSON.parse(auth);

    if (user.role !== 'admin') {
      router.push('/profile');
      return;
    }

    fetchStudents();
  }, []);

  const fetchStudents = async () => {
    const res = await fetch('http://localhost:5000/api/admin/students');

    const result = await res.json();

    if (result.success) {
      setStudents(result.data);
    }
  };

  const saveStudent = async () => {
  const res = await fetch(
    `http://localhost:5000/api/admin/students/${editData.id}`,
    {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(editData),
    }
  )

  const result = await res.json()

  if (!result.success) {
    toast.error(result.message)
    return
  }

  toast.success('Data santri berhasil diperbarui')

  setIsEditOpen(false)

  fetchStudents()
}

  const filtered = students.filter((student) => student.name.toLowerCase().includes(search.toLowerCase()));

  return (
    <main className="min-h-screen bg-secondary/20 p-6">
      <div className="mx-auto max-w-7xl space-y-6">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold">Data Santri</h1>

            <p className="text-muted-foreground">Seluruh data santri Bazma Mengaji</p>
          </div>

          <button onClick={() => router.push('/admin')} className="inline-flex items-center gap-2 rounded-xl bg-primary px-4 py-2 text-white">
            <ArrowLeft className="h-4 w-4" />
            Kembali
          </button>
        </div>

        <div className="relative">
          <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />

          <input type="text" placeholder="Cari santri..." value={search} onChange={(e) => setSearch(e.target.value)} className="w-full rounded-xl border border-border bg-card py-3 pl-10 pr-4" />
        </div>

        <div className="overflow-hidden rounded-2xl border border-border bg-card">
          <table className="w-full text-sm">
            <thead className="bg-muted/60">
              <tr>
                <th className="px-4 py-3 text-left">Nama</th>
                <th className="px-4 py-3 text-left">JK</th>
                <th className="px-4 py-3 text-left">Umur</th>
                <th className="px-4 py-3 text-left">WA</th>
                <th className="px-4 py-3 text-left">Program</th>
                <th className="px-4 py-3 text-left">Guru</th>
                <th className="px-4 py-3 text-left">Status</th>
                <th className="px-4 py-3 text-left">Aksi</th>
              </tr>
            </thead>

            <tbody>
              {filtered.map((student) => (
                <tr key={student.id} className="border-t border-border">
                  <td className="px-4 py-3 font-medium">{student.name}</td>

                  <td className="px-4 py-3">{student.gender}</td>

                  <td className="px-4 py-3">{student.age}</td>

                  <td className="px-4 py-3">{student.phone}</td>

                  <td className="px-4 py-3">{student.program_name || '-'}</td>

                  <td className="px-4 py-3">{student.teacher_name || '-'}</td>

                  <td className="px-4 py-3">
                    <span className="rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold text-primary">{student.status || '-'}</span>
                  </td>
                  <td className="px-4 py-3">
                    <button onClick={() => openEditModal(student)} className="rounded-lg bg-primary px-3 py-2 text-xs font-semibold text-white">
                      Edit
                    </button>
                  </td>
                </tr>
              ))}

              {filtered.length === 0 && (
                <tr>
                  <td colSpan={7} className="py-10 text-center text-muted-foreground">
                    Tidak ada data santri
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
      {
  isEditOpen && (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4">
      <div className="w-full max-w-xl rounded-3xl bg-card p-6 shadow-2xl">

        <div className="mb-6">
          <h2 className="text-xl font-bold">
            Edit Santri
          </h2>

          <p className="text-sm text-muted-foreground">
            Perbarui data santri
          </p>
        </div>

        <div className="grid gap-4">

          <input
            value={editData.name}
            onChange={(e) =>
              setEditData({
                ...editData,
                name: e.target.value,
              })
            }
            placeholder="Nama"
            className="rounded-xl border p-3"
          />

          <select
            value={editData.gender}
            onChange={(e) =>
              setEditData({
                ...editData,
                gender: e.target.value,
              })
            }
            className="rounded-xl border p-3"
          >
            <option value="Laki-laki">
              Laki-laki
            </option>

            <option value="Perempuan">
              Perempuan
            </option>
          </select>

          <input
            value={editData.age}
            onChange={(e) =>
              setEditData({
                ...editData,
                age: e.target.value,
              })
            }
            placeholder="Umur"
            className="rounded-xl border p-3"
          />

          <input
            value={editData.phone}
            onChange={(e) =>
              setEditData({
                ...editData,
                phone: e.target.value,
              })
            }
            placeholder="WhatsApp"
            className="rounded-xl border p-3"
          />

          <input
            value={editData.email}
            onChange={(e) =>
              setEditData({
                ...editData,
                email: e.target.value,
              })
            }
            placeholder="Email"
            className="rounded-xl border p-3"
          />

          <input
            value={editData.domicile}
            onChange={(e) =>
              setEditData({
                ...editData,
                domicile: e.target.value,
              })
            }
            placeholder="Domisili"
            className="rounded-xl border p-3"
          />
        </div>

        <div className="mt-6 flex justify-end gap-3">
          <button
            onClick={() => setIsEditOpen(false)}
            className="rounded-xl border px-4 py-2"
          >
            Batal
          </button>

          <button
            onClick={saveStudent}
            className="rounded-xl bg-primary px-4 py-2 font-semibold text-white"
          >
            Simpan
          </button>
        </div>
      </div>
    </div>
  )
}
    </main>
  );
}
