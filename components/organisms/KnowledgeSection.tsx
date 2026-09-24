import KnowledgeCard from "../molecules/KnowledgeCard";
import { knowledge } from "../../data/portfolio";

export default function KnowledgeSection() {
  return (
    <section
      id="conocimientos"
      className="px-6 py-24 lg:px-12"
    >
      <div className="mb-10">
        <p className="text-sm font-semibold uppercase tracking-[0.3em] text-cyan-400">
          Conocimientos
        </p>

        <h2 className="mt-3 text-3xl font-bold text-white md:text-4xl">
          Tecnologías y herramientas
        </h2>

        <p className="mt-4 max-w-2xl leading-7 text-slate-400">
          Estas son algunas de las tecnologías y herramientas
          que conozco y utilizo durante mi proceso de formación
          y desarrollo de proyectos.
        </p>
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        {knowledge.map((item) => (
          <KnowledgeCard
            key={item.title}
            title={item.title}
            description={item.description}
            icon={item.icon}
          />
        ))}
      </div>
    </section>
  );
}
