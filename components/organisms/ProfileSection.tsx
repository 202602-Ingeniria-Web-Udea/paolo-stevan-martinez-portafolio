"use client";

import { useState } from "react";
import Image from "next/image";
import { ArrowDown, X } from "lucide-react";

export default function ProfileSection() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <section
        id="perfil"
        className="flex min-h-screen items-center px-6 py-24 lg:px-12"
      >
        <div className="grid w-full items-center gap-12 lg:grid-cols-2">
          {/* Información principal */}
          <div>
            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.3em] text-cyan-400">
              Hola, soy
            </p>

            <h1 className="text-5xl font-bold tracking-tight text-white md:text-6xl">
              Paolo Stevan Martinez Cardona
            </h1>

            <h2 className="mt-4 text-2xl font-semibold text-slate-300">
              Estudiante de Ingeniería de Sistemas
            </h2>

            <p className="mt-6 max-w-xl text-base leading-8 text-slate-400">
              Soy estudiante apasionado por el desarrollo de software,
              la tecnología y la creación de soluciones digitales.
              Me interesa seguir aprendiendo y desarrollar proyectos
              que me permitan aplicar mis conocimientos.
            </p>

            <button
              type="button"
              onClick={() => setIsOpen(true)}
              className="mt-8 inline-flex items-center gap-2 rounded-xl bg-cyan-400 px-6 py-3 font-semibold text-slate-950 transition hover:bg-cyan-300"
            >
              Conoce más sobre mí
              <ArrowDown className="h-4 w-4" />
            </button>
          </div>

          {/* Foto */}
          <div className="flex justify-center lg:justify-end">
            <div className="relative">
              <div className="absolute -inset-4 rounded-full bg-cyan-400/10 blur-2xl" />

              <div className="relative h-72 w-72 overflow-hidden rounded-full border-4 border-cyan-400/30 bg-white shadow-2xl md:h-80 md:w-80">
                <Image
                  src="/images/profile.jpg"
                  alt="Foto de perfil"
                  width={320}
                  height={320}
                  className="h-full w-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Modal */}
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/80 p-6 backdrop-blur-sm">
          <div className="relative w-full max-w-lg rounded-3xl border border-slate-800 bg-slate-900 p-8 shadow-2xl">
            <button
              type="button"
              onClick={() => setIsOpen(false)}
              className="absolute right-5 top-5 rounded-full p-2 text-slate-400 transition hover:bg-slate-800 hover:text-white"
              aria-label="Cerrar"
            >
              <X className="h-5 w-5" />
            </button>

            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-cyan-400">
              Sobre mí
            </p>

            <h3 className="mt-3 text-3xl font-bold text-white">
              Un poco más sobre mí
            </h3>

            <p className="mt-5 leading-8 text-slate-400">
              Actualmente me encuentro en formación como profesional
              de Ingeniería de Sistemas. Me interesa especialmente
              el desarrollo web, la creación de interfaces y el
              aprendizaje de nuevas tecnologías.
            </p>

            <div className="mt-6 rounded-2xl bg-slate-950 p-5">
              <p className="text-sm leading-7 text-slate-400">
                Mi objetivo es continuar fortaleciendo mis habilidades,
                participar en proyectos interesantes y convertir cada
                reto en una oportunidad de aprendizaje.
              </p>
            </div>

            <button
              type="button"
              onClick={() => setIsOpen(false)}
              className="mt-6 rounded-xl border border-slate-700 px-5 py-2.5 text-sm font-medium text-white transition hover:border-cyan-400 hover:text-cyan-400"
            >
              Cerrar
            </button>
          </div>
        </div>
      )}
    </>
  );
}
