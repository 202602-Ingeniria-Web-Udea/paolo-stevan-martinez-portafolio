"use client";

import { useState } from "react";
import Modal from "../ui/Modal";

export default function ProfileSection() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <section
        id="perfil"
        className="flex min-h-screen items-center px-6 py-20 lg:px-12"
      >
        <div className="max-w-3xl">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.3em] text-cyan-400">
            Perfil
          </p>

          <h1 className="text-5xl font-bold tracking-tight text-white md:text-6xl">
            Tu Nombre
          </h1>

          <h2 className="mt-4 text-xl text-slate-400 md:text-2xl">
            Estudiante de Ingeniería de Sistemas
          </h2>

          <p className="mt-6 max-w-2xl text-base leading-8 text-slate-400">
            Soy estudiante apasionado por el desarrollo de software
            y la creación de soluciones tecnológicas. Me interesa
            especialmente el desarrollo web, el aprendizaje continuo
            y la construcción de aplicaciones modernas.
          </p>

          <button
            type="button"
            onClick={() => setIsModalOpen(true)}
            className="mt-8 rounded-lg bg-cyan-400 px-6 py-3 font-semibold text-slate-950 transition duration-300 hover:bg-cyan-300 hover:shadow-lg hover:shadow-cyan-400/20"
          >
            Conoce más sobre mí
          </button>
        </div>
      </section>

      <Modal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        title="Sobre mí"
      >
        <div className="space-y-4">
          <p>
            Soy estudiante de Ingeniería de Sistemas interesado
            en el desarrollo de aplicaciones web y tecnologías
            modernas.
          </p>

          <p>
            Me gusta aprender nuevas herramientas, trabajar en
            proyectos y convertir ideas en soluciones funcionales.
          </p>

          <div className="rounded-lg bg-slate-800 p-4">
            <p className="text-sm text-cyan-400">
              Actualmente aprendiendo
            </p>

            <p className="mt-2 text-sm text-slate-300">
              Next.js · React · TypeScript · Tailwind CSS
            </p>
          </div>
        </div>
      </Modal>
    </>
  );
}
