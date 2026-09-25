import KnowledgeCard from "../molecules/KnowledgeCard";
import { knowledge } from "../../data/portfolio";
import SectionTitle from "../atoms/SectionTitle";

export default function KnowledgeSection() {
  return (
    <section
      id="conocimientos"
      className="px-6 py-24 lg:px-12"
    >
      <SectionTitle
        eyebrow="Conocimientos"
        title="Tecnologías y herramientas"
        description="Estas son algunas de las tecnologías y herramientas que conozco y utilizo durante mi proceso de formación y desarrollo de proyectos."
      />

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
