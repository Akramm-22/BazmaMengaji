'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { Check, X, LogOut, ArrowLeft } from 'lucide-react';
import { toast } from 'sonner';

type Registration = {
  id: number;
  status: 'pending' | 'diterima' | 'ditolak';
  class_type: string;
  schedule: string;
  user_name: string;
  phone: string;
  email: string | null;
  program_name: string;
  teacher_name: string | null;
  created_at: string;
};

export default function AdminPage() {
  const router = useRouter();
  const [registrations, setRegistrations] = useState<Registration[]>([]);

  const fetchRegistrations = async () => {
    const res = await fetch('http://localhost:5000/api/admin/registrations');
    const result = await res.json();

    if (result.success) {
      setRegistrations(result.data);
    }
  };

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

    fetchRegistrations();
  }, [router]);

  const approveRegistration = async (id: number) => {
    const res = await fetch(`http://localhost:5000/api/admin/registrations/${id}/approve`, {
      method: 'PUT',
    });

    const result = await res.json();

    if (!result.success) {
      toast.error(result.message);
      return;
    }

    toast.success('Pendaftaran disetujui');

    if (result.whatsappUrl) {
      window.open(result.whatsappUrl, '_blank');
    }

    fetchRegistrations();
  };

  const rejectRegistration = async (id: number) => {
    const res = await fetch(`http://localhost:5000/api/admin/registrations/${id}/reject`, {
      method: 'PUT',
    });

    const result = await res.json();

    if (!result.success) {
      toast.error(result.message);
      return;
    }

    toast.success('Pendaftaran ditolak');
    fetchRegistrations();
  };

  const logout = () => {
    localStorage.removeItem('auth');
    router.push('/login');
  };

  return (
    <main className="min-h-screen bg-secondary/20 px-4 py-10">
      <div className="mx-auto max-w-7xl space-y-6">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold">Dashboard Admin</h1>
            <p className="text-sm text-muted-foreground">Kelola data pendaftaran santri</p>
          </div>

          <button onClick={() => router.push('/admin')} className="inline-flex items-center gap-2 rounded-xl bg-primary px-4 py-2 text-sm font-semibold text-white hover:opacity-90">
            <ArrowLeft className="h-4 w-4" />
            Kembali
          </button>
        </div>

        <div className="overflow-x-auto rounded-2xl border border-border bg-card shadow-sm">
          <table className="w-full min-w-[1000px] text-sm">
            <thead className="bg-muted/60">
              <tr>
                <th className="px-4 py-3 text-left">Nama</th>
                <th className="px-4 py-3 text-left">WA</th>
                <th className="px-4 py-3 text-left">Program</th>
                <th className="px-4 py-3 text-left">Guru</th>
                <th className="px-4 py-3 text-left">Kelas</th>
                <th className="px-4 py-3 text-left">Jadwal</th>
                <th className="px-4 py-3 text-left">Status</th>
                <th className="px-4 py-3 text-left">Aksi</th>
              </tr>
            </thead>

            <tbody>
              {registrations.map((item) => (
                <tr key={item.id} className="border-t border-border">
                  <td className="px-4 py-3 font-semibold">{item.user_name}</td>
                  <td className="px-4 py-3">{item.phone}</td>
                  <td className="px-4 py-3">{item.program_name}</td>
                  <td className="px-4 py-3">{item.teacher_name || '-'}</td>
                  <td className="px-4 py-3">{item.class_type}</td>
                  <td className="px-4 py-3">{item.schedule}</td>
                  <td className="px-4 py-3">
                    <span className="rounded-full bg-yellow-100 px-3 py-1 text-xs font-semibold text-yellow-700">{item.status}</span>
                  </td>
                  <td className="px-4 py-3">
                    {item.status === 'pending' ? (
                      <div className="flex gap-2">
                        <button onClick={() => approveRegistration(item.id)} className="inline-flex items-center gap-1 rounded-lg bg-emerald-600 px-3 py-2 text-xs font-semibold text-white">
                          <Check className="h-3 w-3" />
                          Setujui
                        </button>

                        <button onClick={() => rejectRegistration(item.id)} className="inline-flex items-center gap-1 rounded-lg bg-red-600 px-3 py-2 text-xs font-semibold text-white">
                          <X className="h-3 w-3" />
                          Tolak
                        </button>
                      </div>
                    ) : (
                      <span className="text-xs text-muted-foreground">Sudah diproses</span>
                    )}
                  </td>
                </tr>
              ))}

              {registrations.length === 0 && (
                <tr>
                  <td colSpan={8} className="px-4 py-10 text-center text-muted-foreground">
                    Belum ada pendaftaran.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </main>
  );
}
