'use client';

import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Star, Award, BookOpen, Calendar, ShieldCheck, Quote } from 'lucide-react';

type Teacher = {
  id: number;
  name: string;
  title: string;
  bio: string;
  rating: number;
  specialty: string;
  experience: string;
  details: string[];
  schedule: string;
  initials: string;
};

export function Teachers() {
  const [teachers, setTeachers] = useState<Teacher[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchTeachers = async () => {
      try {
        const res = await fetch('http://localhost:5000/api/teachers');
        const result = await res.json();

        if (result.success) {
          setTeachers(result.data);
        }
      } catch (error) {
        console.error('Gagal mengambil data guru:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchTeachers();
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.08 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: 'easeOut' },
    },
  };

  return (
    <section id="teachers" className="relative bg-background/40 backdrop-blur-md px-4 py-20 md:px-8 md:py-28 overflow-hidden border-t border-border/40">
      <div aria-hidden="true" className="pointer-events-none absolute right-1/4 top-0 h-80 w-80 rounded-full bg-primary/5 blur-[100px]" />

      <motion.div className="mx-auto max-w-4xl space-y-3 text-center mb-16" initial={{ opacity: 0, y: 15 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }}>
        <span className="inline-block rounded-full bg-primary/10 px-4 py-1 text-xs font-semibold text-primary uppercase tracking-wider">Tim Pendidik</span>
        <h2 className="text-3xl font-bold text-foreground md:text-4xl tracking-tight">Ustadz & Pengajar Berpengalaman</h2>
        <p className="mx-auto max-w-2xl text-sm md:text-base text-muted-foreground">Tim pengajar profesional kami berdedikasi memberikan bimbingan terbaik untuk setiap murid dengan metode yang terstruktur dan bersanad.</p>
      </motion.div>

      {loading ? (
        <p className="text-center text-muted-foreground">Memuat data guru...</p>
      ) : (
        <motion.div className="mx-auto grid max-w-6xl gap-6 sm:grid-cols-2 lg:grid-cols-4" variants={containerVariants} initial="hidden" whileInView="visible" viewport={{ once: true, margin: '-100px' }}>
          {teachers.map((teacher) => (
            <motion.div
              key={teacher.id}
              variants={itemVariants}
              className="group flex flex-col justify-between overflow-hidden rounded-2xl border border-border/50 bg-card/50 p-6 backdrop-blur-md transition-all duration-300 hover:border-primary/30 hover:shadow-xl hover:shadow-primary/[0.02] hover:-translate-y-1"
            >
              <div className="space-y-4">
                <div className="flex items-start justify-between">
                  <img src={teacher.photo} alt={teacher.name} className="h-12 w-12 rounded-2xl object-cover" />

                  <div className="flex flex-col items-end gap-1.5">
                    <div className="flex items-center gap-1 rounded-md bg-amber-500/10 px-2 py-0.5 text-[11px] font-bold text-amber-600 border border-amber-500/10">
                      <Star className="h-3 w-3 fill-amber-500 text-amber-500" />
                      <span>{teacher.rating}</span>
                    </div>
                    <span className="text-[10px] font-medium text-muted-foreground bg-muted px-2 py-0.5 rounded-md">XP {teacher.experience}</span>
                  </div>
                </div>

                <div className="space-y-1">
                  <h3 className="text-base font-bold text-foreground tracking-tight group-hover:text-primary transition-colors duration-200">{teacher.name}</h3>
                  <p className="text-xs font-semibold text-primary flex items-center gap-1">
                    <Award className="h-3.5 w-3.5 flex-shrink-0" />
                    {teacher.title}
                  </p>
                </div>

                <div className="relative rounded-xl bg-muted/40 p-3 border border-border/30">
                  <Quote className="absolute -top-1 -left-1 h-4 w-4 text-primary/10 rotate-180" />
                  <p className="text-xs text-muted-foreground italic leading-relaxed relative z-10 pl-2">{teacher.bio}</p>
                </div>

                <div className="space-y-1.5 pt-1">
                  {teacher.details?.map((detail, idx) => (
                    <div key={idx} className="flex items-center gap-2 text-xs font-medium text-foreground/80">
                      <ShieldCheck className="h-3.5 w-3.5 text-emerald-600 shrink-0" />
                      <span>{detail}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-6 pt-4 border-t border-border/40 space-y-4">
                <div className="space-y-2">
                  <div className="flex items-center gap-2 text-xs text-muted-foreground">
                    <BookOpen className="h-3.5 w-3.5 text-primary/70 shrink-0" />
                    <span className="font-medium text-foreground/90">{teacher.specialty}</span>
                  </div>

                  <div className="flex items-center gap-2 text-xs text-muted-foreground">
                    <Calendar className="h-3.5 w-3.5 text-primary/70 shrink-0" />
                    <span>
                      Tersedia: <strong className="text-foreground/90 font-semibold">{teacher.schedule}</strong>
                    </span>
                  </div>
                </div>

                <button className="w-full rounded-xl border border-border bg-background px-4 py-2.5 text-xs font-semibold text-foreground transition-all duration-200 hover:bg-primary hover:text-primary-foreground hover:border-primary shadow-sm active:scale-[0.98]">
                  Lihat Profil
                </button>
              </div>
            </motion.div>
          ))}
        </motion.div>
      )}
    </section>
  );
}
