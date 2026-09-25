"use client";

import type { Project } from "../../types/portafolio";

interface ProjectCardProps {
  project: Project;
  onLearnMore: (project: Project) => void;
}

export default function ProjectCard({
  project,
  onLearnMore,
}: ProjectCardProps) {
  return (
    <article className="group w-[320px] shrink-0 overflow-hidden rounded-2xl border border-slate-800 bg-slate-900/70 transition-all duration-300 hover:-translate-y-1 hover:border-cyan-400/40 hover:shadow-xl hover:shadow-cyan-400/5">
      
      {/* Imagen del proyecto */}
      <div className="h-48 overflow-hidden bg-slate-800">
        <img
          src={project.image}
          alt={`Imagen del proyecto ${project.title}`}
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
      </div>

      {/* Información del proyecto */}
      <div className="p-6">
        <h3 className="text-xl font-semibold text-white">
          {project.title}
        </h3>

        <p className="mt-3 text-sm leading-6 text-slate-400">
          {project.shortDescription}
        </p>

        {/* Tecnologías */}
        <div className="mt-4 flex flex-wrap gap-2">
          {project.technologies.map((technology) => (
            <span
              key={technology}
              className="rounded-full bg-cyan-400/10 px-3 py-1 text-xs font-medium text-cyan-400"
            >
              {technology}
            </span>
          ))}
        </div>

        {/* Botón */}
        <button
          type="button"
          onClick={() => onLearnMore(project)}
          className="mt-6 rounded-lg bg-cyan-400 px-4 py-2 text-sm font-semibold text-slate-950 transition hover:bg-cyan-300"
        >
          Saber más
        </button>
      </div>
    </article>
  );
}
