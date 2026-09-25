import SkillItem from "../molecules/SkillItem";


import {
  languages,
  programmingLanguages,
} from "../../data/portfolio";
import Image from "next/image";

export default function LeftSidebar() {
  return (
    <aside className="fixed left-0 top-0 z-40 hidden h-screen w-72 flex-col gap-8 overflow-y-auto border-r border-slate-800 bg-slate-950 p-6 lg:flex">

      {/* Información personal */}
      <section>
        <div className="mx-auto mb-4 h-28 w-28 overflow-hidden rounded-full border-4 border-cyan-400/30">
          <Image
            src="/images/profile.jpg"
            alt="Foto de perfil"
            width={112}
            height={112}
            className="h-full w-full object-cover"
          />
        </div>


        <h1 className="text-center text-xl font-bold text-white">
          Paolo Stevan Martinez Cardona
        </h1>

        <p className="mt-1 text-center text-sm text-cyan-400">
          Estudiante de Ingeniería
        </p>
      </section>

      {/* Información de contacto */}
      <section>
        <h2 className="mb-4 text-sm font-semibold uppercase tracking-wider text-white">
          Contacto
        </h2>

        <div className="space-y-2 text-sm text-slate-400">
          <p>San Jose de Cucuta, Norte de Santander, Colombia</p>
          <p>paolo.martinez@udea.edu.co</p>
        </div>
      </section>

      {/* Idiomas */}
      <section>
        <h2 className="mb-4 text-sm font-semibold uppercase tracking-wider text-white">
          Idiomas
        </h2>

        <div className="space-y-4">
          {languages.map((language) => (
            <SkillItem
              key={language.name}
              name={language.name}
              percentage={language.percentage}
            />
          ))}
        </div>
      </section>

      {/* Lenguajes de programación */}
      <section>
        <h2 className="mb-4 text-sm font-semibold uppercase tracking-wider text-white">
          Lenguajes
        </h2>

        <div className="space-y-4">
          {programmingLanguages.map((language) => (
            <SkillItem
              key={language.name}
              name={language.name}
              percentage={language.percentage}
            />
          ))}
        </div>
      </section>
    </aside>
  );
}
