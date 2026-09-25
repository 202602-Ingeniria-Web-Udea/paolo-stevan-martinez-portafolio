import EducationCard from "../molecules/EducationCard";
import { education } from "../../data/portfolio";
import SectionTitle from "../atoms/SectionTitle";

export default function EducationSection() {
  return (
    <section
      id="educacion"
      className="px-6 py-24 lg:px-12"
    >
      <SectionTitle
        eyebrow="Educación"
        title="Mi formación académica"
        description="Esta es mi trayectoria académica y algunos de los conocimientos adquiridos durante mi formación."
      />

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
