import SkillItem from "../molecules/SkillItem";
import {
  languages,
  programmingLanguages,
} from "../../data/portfolio";

export default function LeftSidebar() {
  return (
    <aside className="flex flex-col gap-8 p-6">
      {/* Información personal */}
      <section>
        <div className="mx-auto mb-4 flex h-28 w-28 items-center justify-center rounded-full bg-slate-700 text-4xl">
          👤
        </div>

        <h1 className="text-center text-xl font-bold text-white">
          Tu Nombre
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
          <p>Bogotá, Colombia</p>
          <p>tu-correo@email.com</p>
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
