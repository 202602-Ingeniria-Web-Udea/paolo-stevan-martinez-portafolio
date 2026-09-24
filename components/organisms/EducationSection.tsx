import EducationCard from "../molecules/EducationCard";
import { education } from "../../data/portfolio";

export default function EducationSection() {
  return (
    <section
      id="educacion"
      className="px-6 py-24 lg:px-12"
    >
      <div className="mb-10">
        <p className="text-sm font-semibold uppercase tracking-[0.3em] text-cyan-400">
          Educación
        </p>

        <h2 className="mt-3 text-3xl font-bold text-white md:text-4xl">
          Mi formación académica
        </h2>

        <p className="mt-4 max-w-2xl leading-7 text-slate-400">
          Esta es mi trayectoria académica y algunos de los
          conocimientos adquiridos durante mi formación.
        </p>
      </div>

      <div className="space-y-8">
        {education.map((item) => (
          <EducationCard
            key={`${item.institution}-${item.dates}`}
            institution={item.institution}
            dates={item.dates}
            degree={item.degree}
            description={item.description}
          />
        ))}
      </div>
    </section>
  );
}
