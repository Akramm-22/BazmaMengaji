'use client';

import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { Video, CheckCircle2, ArrowRight, BookOpen, GraduationCap, MapPin } from 'lucide-react';

type Program = {
  id: number;
  name: string;
  slug: string;
  description: string;
  image: string;
  targets: string[];
  result: string;
  price: string;
};

export function Programs() {
  const [programs, setPrograms] = useState<Program[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPrograms = async () => {
      try {
        const res = await fetch('http://localhost:5000/api/programs');
        const result = await res.json();

        if (result.success) {
          setPrograms(result.data);
        }
      } catch (error) {
        console.error('Gagal mengambil data program:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchPrograms();
  }, []);

  return (
    <section id="programs" className="w-full bg-background/40 backdrop-blur-md">
      <div className="relative w-full border-b border-border/40 bg-secondary/15 py-16 md:py-24 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-transparent pointer-events-none" />
        <div className="relative mx-auto max-w-4xl px-4 text-center space-y-3">
          <span className="inline-block rounded-full bg-primary/10 px-4 py-1 text-xs font-semibold text-primary uppercase tracking-wider">Kurikulum Pilihan</span>
          <h2 className="text-3xl font-bold tracking-tight text-foreground md:text-5xl">Program Belajar Kami</h2>
          <p className="mx-auto max-w-xl text-sm md:text-base text-muted-foreground">Sistem pembelajaran berjenjang yang dirancang secara profesional untuk membantu Anda berinteraksi dengan Al-Qur&apos;an secara fasih.</p>
        </div>
      </div>

      <div className="mx-auto max-w-6xl px-4 py-16 md:py-28">
        {loading ? (
          <p className="text-center text-muted-foreground">Memuat data program...</p>
        ) : (
          <div className="space-y-24 md:space-y-36">
            {programs.map((program, index) => (
              <motion.div
                key={program.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-100px' }}
                transition={{ duration: 0.6, ease: 'easeOut' }}
                className="relative grid gap-8 md:grid-cols-12 items-center"
              >
                <span className="absolute -top-10 -left-6 hidden lg:block text-[12rem] font-black text-primary/[0.02] select-none pointer-events-none">0{program.id}</span>

                <div className={`md:col-span-5 ${index % 2 === 0 ? '' : 'md:order-last'}`}>
                  <motion.div whileHover={{ scale: 1.02 }} transition={{ duration: 0.3 }} className="relative aspect-[4/3] w-full overflow-hidden rounded-2xl border border-border/40 bg-muted shadow-sm group">
                    {program.image ? (
                      <Image src={program.image} alt={program.name} fill sizes="(max-width: 768px) 100vw, 450px" className="object-cover transition-transform duration-500 group-hover:scale-105" priority={index === 0} />
                    ) : (
                      <div className="flex h-full w-full items-center justify-center bg-muted text-muted-foreground">
                        <BookOpen className="h-12 w-12 opacity-40" />
                      </div>
                    )}
                  </motion.div>
                </div>

                <div className="hidden md:block md:col-span-1" />

                <div className="md:col-span-6 space-y-6">
                  <div className="space-y-3">
                    <div className="flex items-center gap-3">
                      <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-primary/10 text-primary border border-primary/20">
                        <BookOpen className="h-4 w-4" />
                      </div>
                      <h3 className="text-2xl md:text-3xl font-bold tracking-tight text-foreground">{program.name}</h3>
                    </div>
                    <p className="text-sm md:text-base text-muted-foreground leading-relaxed">{program.description}</p>
                  </div>

                  <div className="rounded-2xl border border-border/40 bg-card/60 p-5 md:p-6 backdrop-blur-sm space-y-4 shadow-sm">
                    <div className="space-y-3">
                      <h4 className="text-xs font-bold text-primary uppercase tracking-wider flex items-center gap-2">
                        <span className="h-1.5 w-1.5 rounded-full bg-primary" />
                        Materi & Target Capaian:
                      </h4>

                      <ul className="grid gap-2.5">
                        {program.targets?.map((target, idx) => (
                          <li key={idx} className="flex items-start gap-2.5 text-xs md:text-sm text-muted-foreground leading-snug">
                            <CheckCircle2 className="h-4 w-4 text-primary/80 mt-0.5 flex-shrink-0" />
                            <span>{target}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="rounded-xl bg-primary/[0.03] border border-primary/10 p-3.5 flex gap-2.5 items-start">
                      <GraduationCap className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                      <div className="space-y-0.5">
                        <span className="text-[10px] font-bold text-primary uppercase tracking-wider block">Target Akhir Kelulusan</span>
                        <p className="text-xs text-muted-foreground leading-normal">{program.result}</p>
                      </div>
                    </div>
                  </div>

                  <div className="flex flex-wrap items-center gap-3 pt-1">
                    <div className="text-xl md:text-2xl font-black tracking-tight text-primary">{program.price}</div>

                    <div className="flex gap-2">
                      <span className="inline-flex items-center gap-1.5 rounded-lg bg-primary/5 px-2.5 py-1 text-xs font-semibold text-primary border border-primary/10">
                        <Video className="h-3.5 w-3.5" />
                        Online
                      </span>
                      <span className="inline-flex items-center gap-1.5 rounded-lg bg-emerald-600/5 px-2.5 py-1 text-xs font-semibold text-emerald-600 border border-emerald-600/10">
                        <MapPin className="h-3.5 w-3.5" />
                        Offline
                      </span>
                    </div>
                  </div>

                  <div className="pt-1">
                    <Link
                      href={`/registration?program=${program.slug}`}
                      aria-label={`Daftar Program ${program.name}`}
                      className="group inline-flex items-center gap-2 rounded-xl bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground shadow-sm shadow-primary/10 transition-all hover:bg-primary/95 hover:shadow-md active:scale-[0.98] cursor-pointer"
                    >
                      Daftar Program
                      <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                    </Link>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
