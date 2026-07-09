'use client';

import { motion } from 'framer-motion';
import { useState, useEffect, Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
import { toast } from 'sonner';
import { useRouter } from 'next/navigation';
import { MessageCircle, Mail, Phone, User, Calendar, MapPin, BookOpen, Users, GraduationCap, Clock, Check, ChevronDown } from 'lucide-react';

type Teacher = {
  id: number;
  name: string;
};

type Program = {
  id: number;
  name: string;
  slug: string;
};

export function Registration() {
  return (
    <Suspense fallback={<div className="flex min-h-[50vh] items-center justify-center text-sm text-muted-foreground">Memuat Formulir Pendaftaran...</div>}>
      <RegistrationFormContent />
    </Suspense>
  );
}

function RegistrationFormContent() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const [teachers, setTeachers] = useState<Teacher[]>([]);
  const [selectedProgram, setSelectedProgram] = useState<Program | null>(null);
  const [submitted, setSubmitted] = useState(false);
  const [activeFocus, setActiveFocus] = useState<string | null>(null);
  const [showExistingModal, setShowExistingModal] = useState(false);

  const [existingUser, setExistingUser] = useState<any>(null);

  const checkPhone = async (phone: string) => {
    if (!phone) return;

    const res = await fetch(`https://backend-ngaji.smktibazma.sch.id/api/registrations/check-phone/${phone}`);

    const result = await res.json();

    if (result.exists) {
      setExistingUser(result.user);
      setShowExistingModal(true);
    }
  };

  const [formData, setFormData] = useState({
    name: '',
    gender: '',
    age: '',
    phone: '',
    email: '',
    domicile: '',
    teacherId: '',
    classType: '',
    schedule: '',
  });

  useEffect(() => {
    const programParam = searchParams.get('program');

    const fetchData = async () => {
      try {
        if (!programParam) return;

        const programRes = await fetch(`https://backend-ngaji.smktibazma.sch.id/api/programs/${programParam}`);

        const programResult = await programRes.json();

        if (programResult.success) {
          setSelectedProgram(programResult.data);
        }

        const teacherRes = await fetch(`https://backend-ngaji.smktibazma.sch.id/api/teachers/program/${programParam}`);

        const teacherResult = await teacherRes.json();

        if (teacherResult.success) {
          setTeachers(teacherResult.data);
        }
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, [searchParams]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!selectedProgram) {
      toast.error('Program tidak ditemukan');
      return;
    }

    try {
      setSubmitted(true);

      const res = await fetch('https://backend-ngaji.smktibazma.sch.id/api/registrations', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: formData.name,
          gender: formData.gender,
          age: Number(formData.age),
          phone: formData.phone,
          email: formData.email,
          domicile: formData.domicile,
          programSlug: selectedProgram.slug,
          teacherId: Number(formData.teacherId),
          classType: formData.classType,
          schedule: formData.schedule,
        }),
      });

      const result = await res.json();

      if (!result.success) {
        toast.error(result.message);
        return;
      }

      localStorage.setItem(
        'auth',
        JSON.stringify({
          id: result.data.userId,
          role: 'santri',
          name: formData.name,
          phone: formData.phone,
        }),
      );

      toast.success('Pendaftaran berhasil!', {
        description: 'Anda akan diarahkan ke halaman login.',
      });

      router.push('/login');

      setFormData({
        name: '',
        gender: '',
        age: '',
        phone: '',
        email: '',
        domicile: '',
        teacherId: '',
        classType: '',
        schedule: '',
      });
    } catch (error) {
      console.error(error);
      toast.error('Terjadi kesalahan saat mengirim pendaftaran');
    } finally {
      setSubmitted(false);
    }
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.05 } },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 15 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.4, ease: 'easeOut' },
    },
  };

  return (
    <section id="register" className="w-full bg-secondary/20 px-4 py-20 md:px-8 md:py-32">
      <motion.div className="mx-auto max-w-4xl space-y-4 text-center mb-12" initial={{ opacity: 0, y: -20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
        <span className="inline-block rounded-full bg-primary/10 px-4 py-1 text-xs font-semibold text-primary uppercase tracking-wider">Formulir Pendaftaran</span>

        <h2 className="text-3xl font-bold tracking-tight text-foreground md:text-4xl">{selectedProgram ? `Pendaftaran Program ${selectedProgram.name}` : 'Mulai Perjalanan Mengaji Anda'}</h2>

        <p className="mx-auto max-w-xl text-sm md:text-base text-muted-foreground">Lengkapi data di bawah ini. Tim BAZMA Mengaji akan segera memvalidasi pendaftaran Anda.</p>
      </motion.div>

      <motion.div className="mx-auto max-w-3xl" variants={containerVariants} initial="hidden" whileInView="visible" viewport={{ once: true, margin: '-100px' }}>
        <motion.form onSubmit={handleSubmit} className="space-y-10 rounded-2xl border border-border/50 bg-card/70 p-6 md:p-10 shadow-xl backdrop-blur-sm" variants={itemVariants}>
          <div className="rounded-2xl border border-primary/20 bg-primary/5 p-5">
            <p className="text-xs font-semibold uppercase tracking-wider text-primary">Anda mendaftar program</p>
            <h3 className="mt-1 text-2xl font-bold text-foreground">{selectedProgram?.name || 'Memuat program...'}</h3>
          </div>

          <div className="space-y-5">
            <h3 className="text-sm font-bold text-primary uppercase tracking-wider flex items-center gap-2 border-b border-border/40 pb-2.5">
              <User className="h-4 w-4 text-primary" />
              Data Peserta
            </h3>

            <div className="grid gap-5 md:grid-cols-2">
              <div className="md:col-span-2">
                <label className="mb-1.5 block text-xs font-semibold text-foreground">Nama Lengkap</label>
                <div className="relative">
                  <User className="absolute left-3.5 top-3 h-4 w-4 text-muted-foreground/70" />
                  <input
                    type="text"
                    name="name"
                    value={formData.name ?? ''}
                    onChange={handleChange}
                    placeholder="Masukkan nama lengkap"
                    required
                    className="w-full rounded-xl border border-border bg-input/40 pl-11 pr-4 py-2.5 text-sm text-foreground transition-all focus:border-primary focus:bg-background focus:outline-none"
                  />
                </div>
              </div>

              <div>
                <label className="mb-1.5 block text-xs font-semibold text-foreground">Jenis Kelamin</label>
                <div className="relative">
                  <Users className="absolute left-3.5 top-3 h-4 w-4 text-muted-foreground/70 pointer-events-none" />
                  <select name="gender" value={formData.gender ?? ''} onChange={handleChange} required className="w-full rounded-xl border border-border bg-input/40 pl-11 pr-10 py-2.5 text-sm text-foreground appearance-none cursor-pointer">
                    <option value="">Pilih Jenis Kelamin</option>
                    <option value="Ikhwan (Laki-laki)">Ikhwan (Laki-laki)</option>
                    <option value="Akhwat (Perempuan)">Akhwat (Perempuan)</option>
                  </select>
                  <ChevronDown className="absolute right-3.5 top-3.5 h-4 w-4 text-muted-foreground/60 pointer-events-none" />
                </div>
              </div>

              <div>
                <label className="mb-1.5 block text-xs font-semibold text-foreground">Usia</label>
                <div className="relative">
                  <Calendar className="absolute left-3.5 top-3 h-4 w-4 text-muted-foreground/70" />
                  <input type="number" name="age" value={formData.age ?? ''} onChange={handleChange} placeholder="Contoh: 23" required className="w-full rounded-xl border border-border bg-input/40 pl-11 pr-4 py-2.5 text-sm text-foreground" />
                </div>
              </div>

              <div>
                <label className="mb-1.5 block text-xs font-semibold text-foreground">Nomor WhatsApp</label>

                <div className="relative">
                  <Phone className="absolute left-3.5 top-3 h-4 w-4 text-muted-foreground/70" />

                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone ?? ''}
                    onChange={handleChange}
                    onBlur={(e) => checkPhone(e.target.value)}
                    placeholder="Contoh: 62812345678"
                    required
                    className="w-full rounded-xl border border-border bg-input/40 pl-11 pr-4 py-2.5 text-sm text-foreground"
                  />
                </div>
              </div>

              <div>
                <label className="mb-1.5 block text-xs font-semibold text-foreground">
                  Email <span className="text-muted-foreground/60 font-normal">(Opsional)</span>
                </label>
                <div className="relative">
                  <Mail className="absolute left-3.5 top-3 h-4 w-4 text-muted-foreground/70" />
                  <input type="email" name="email" value={formData.email ?? ''} onChange={handleChange} placeholder="alamat@email.com" className="w-full rounded-xl border border-border bg-input/40 pl-11 pr-4 py-2.5 text-sm text-foreground" />
                </div>
              </div>

              <div className="md:col-span-2">
                <label className="mb-1.5 block text-xs font-semibold text-foreground">Domisili</label>
                <div className="relative">
                  <MapPin className="absolute left-3.5 top-3 h-4 w-4 text-muted-foreground/70" />
                  <input
                    type="text"
                    name="domicile"
                    value={formData.domicile ?? ''}
                    onChange={handleChange}
                    placeholder="Masukkan kota asal Anda tinggal"
                    required
                    className="w-full rounded-xl border border-border bg-input/40 pl-11 pr-4 py-2.5 text-sm text-foreground"
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="space-y-6 pt-2">
            <h3 className="text-sm font-bold text-primary uppercase tracking-wider flex items-center gap-2 border-b border-border/40 pb-2.5">
              <BookOpen className="h-4 w-4 text-primary" />
              Pilihan Belajar
            </h3>

            <div className="grid gap-6 md:grid-cols-2">
              <div className="space-y-1.5">
                <label className="block text-xs font-semibold text-foreground">Pilihan Kelas</label>
                <motion.div className="relative" animate={{ scale: activeFocus === 'classType' ? 1.012 : 1 }}>
                  <Users className="absolute left-3.5 top-3.5 h-4 w-4 pointer-events-none z-10 text-primary/70" />
                  <select
                    name="classType"
                    value={formData.classType}
                    onChange={handleChange}
                    onFocus={() => setActiveFocus('classType')}
                    onBlur={() => setActiveFocus(null)}
                    required
                    className="w-full rounded-xl border border-border/60 bg-input/30 pl-11 pr-10 py-3 text-sm font-medium appearance-none cursor-pointer"
                  >
                    <option value="">Pilih Jenis Kelas</option>
                    <option value="Personal">Personal (Privat 1 on 1)</option>
                    <option value="Komunitas">Komunitas (Grup)</option>
                  </select>
                  <ChevronDown className="absolute right-3.5 top-3.5 pointer-events-none h-4 w-4 text-muted-foreground/70" />
                </motion.div>
              </div>

              <div className="space-y-1.5">
                <label className="block text-xs font-semibold text-foreground">Pilihan Guru</label>
                <motion.div className="relative" animate={{ scale: activeFocus === 'teacherId' ? 1.012 : 1 }}>
                  <GraduationCap className="absolute left-3.5 top-3.5 h-4 w-4 pointer-events-none z-10 text-primary/70" />
                  <select
                    name="teacherId"
                    value={formData.teacherId}
                    onChange={handleChange}
                    onFocus={() => setActiveFocus('teacherId')}
                    onBlur={() => setActiveFocus(null)}
                    required
                    className="w-full rounded-xl border border-border/60 bg-input/30 pl-11 pr-10 py-3 text-sm font-medium appearance-none cursor-pointer"
                  >
                    <option value="">Pilih Guru</option>
                    {teachers.map((teacher) => (
                      <option key={teacher.id} value={teacher.id}>
                        {teacher.name}
                      </option>
                    ))}
                  </select>
                  <ChevronDown className="absolute right-3.5 top-3.5 pointer-events-none h-4 w-4 text-muted-foreground/70" />
                </motion.div>
              </div>

              <div className="space-y-1.5 md:col-span-2">
                <label className="block text-xs font-semibold text-foreground">Jadwal yang Diinginkan</label>
                <motion.div className="relative" animate={{ scale: activeFocus === 'schedule' ? 1.012 : 1 }}>
                  <Clock className="absolute left-3.5 top-3.5 h-4 w-4 pointer-events-none z-10 text-primary/70" />
                  <select
                    name="schedule"
                    value={formData.schedule}
                    onChange={handleChange}
                    onFocus={() => setActiveFocus('schedule')}
                    onBlur={() => setActiveFocus(null)}
                    required
                    className="w-full rounded-xl border border-border/60 bg-input/30 pl-11 pr-10 py-3 text-sm font-medium appearance-none cursor-pointer"
                  >
                    <option value="">Pilih Waktu Belajar</option>
                    <option value="Pagi">Pagi Hari</option>
                    <option value="Siang">Siang Hari</option>
                    <option value="Sore">Sore Hari</option>
                    <option value="Malam">Malam Hari</option>
                  </select>
                  <ChevronDown className="absolute right-3.5 top-3.5 pointer-events-none h-4 w-4 text-muted-foreground/70" />
                </motion.div>
              </div>
            </div>
          </div>

          <div className="pt-4">
            <motion.button
              type="submit"
              whileHover={{ scale: 1.01 }}
              whileTap={{ scale: 0.99 }}
              disabled={submitted || !selectedProgram}
              className="w-full rounded-xl bg-primary px-6 py-4 text-sm font-semibold text-primary-foreground shadow-lg transition-all disabled:opacity-50 inline-flex items-center justify-center gap-2 cursor-pointer"
            >
              {submitted ? (
                <>
                  <Check className="h-4 w-4 animate-bounce" />
                  Menyimpan Pendaftaran...
                </>
              ) : (
                <>
                  <MessageCircle className="h-4 w-4" />
                  Daftar Sekarang
                </>
              )}
            </motion.button>
          </div>
        </motion.form>
      </motion.div>
      {showExistingModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-sm">
          <div className="w-full max-w-md rounded-3xl bg-white p-6 shadow-2xl">
            <h2 className="text-xl font-bold">Nomor WhatsApp Sudah Terdaftar</h2>

            <p className="mt-2 text-sm text-muted-foreground">Nomor WhatsApp ini sudah pernah digunakan untuk mendaftar.</p>

            <div className="mt-5 rounded-xl bg-muted p-4 space-y-2">
              <div>
                <span className="text-xs text-muted-foreground">Nama</span>
                <div className="font-semibold">{existingUser?.name}</div>
              </div>

              <div>
                <span className="text-xs text-muted-foreground">Email</span>
                <div>{existingUser?.email || '-'}</div>
              </div>

              <div>
                <span className="text-xs text-muted-foreground">Domisili</span>
                <div>{existingUser?.domicile}</div>
              </div>
            </div>

            <div className="mt-6 flex justify-end gap-3">
              <button onClick={() => setShowExistingModal(false)} className="rounded-xl border px-5 py-2">
                Batal
              </button>

              <button
                onClick={() => {
                  setFormData({
                    ...formData,
                    name: existingUser.name ?? '',
                    gender: existingUser.gender ?? '',
                    age: existingUser.age ?? '',
                    phone: existingUser.phone ?? '',
                    email: existingUser.email ?? '',
                    domicile: existingUser.domicile ?? '',
                  });

                  setShowExistingModal(false);
                }}
                className="rounded-xl bg-primary px-5 py-2 text-white"
              >
                Gunakan Data Lama
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
