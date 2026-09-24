interface EducationCardProps {
  institution: string;
  dates: string;
  degree: string;
  description: string;
}

export default function EducationCard({
  institution,
  dates,
  degree,
  description,
}: EducationCardProps) {
  return (
    <article className="group relative border-l-2 border-slate-800 pl-6 transition-colors duration-300 hover:border-cyan-400">
      {/* Punto de la línea de tiempo */}
      <div className="absolute -left-[7px] top-1 h-3 w-3 rounded-full bg-slate-700 ring-4 ring-slate-950 transition-colors duration-300 group-hover:bg-cyan-400" />

      <div className="rounded-2xl border border-slate-800 bg-slate-900/60 p-6 transition-all duration-300 hover:border-cyan-400/30 hover:bg-slate-900">
        <p className="text-sm font-medium text-cyan-400">
          {dates}
        </p>

        <h3 className="mt-2 text-xl font-semibold text-white">
          {degree}
        </h3>

        <p className="mt-1 text-sm font-medium text-slate-300">
          {institution}
        </p>

        <p className="mt-4 text-sm leading-7 text-slate-400">
          {description}
        </p>
      </div>
    </article>
  );
}
