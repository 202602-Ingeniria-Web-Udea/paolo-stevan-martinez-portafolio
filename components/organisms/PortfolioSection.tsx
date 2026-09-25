"use client";

import { useState } from "react";
import ProjectCard from "../molecules/ProjectCard";
import Modal from "../ui/Modal";
import { projects } from "../../data/portfolio";
import type { Project } from "../../types/portafolio";

export default function PortfolioSection() {
  const [selectedProject, setSelectedProject] =
    useState<Project | null>(null);

  return (
    <section
      id="portafolio"
      className="px-6 py-24 lg:px-12"
    >
      <div className="mb-10">
        <p className="text-sm font-semibold uppercase tracking-[0.3em] text-cyan-400">
          Portafolio
        </p>

        <h2 className="mt-3 text-3xl font-bold text-white md:text-4xl">
          Mis proyectos
        </h2>

        <p className="mt-4 max-w-2xl leading-7 text-slate-400">
          Algunos de los proyectos que he desarrollado durante
          mi proceso de aprendizaje y formación profesional.
        </p>
      </div>

      <div className="flex gap-6 overflow-x-auto pb-6">
        {projects.map((project) => (
          <ProjectCard
            key={project.id}
            project={project}
            onLearnMore={setSelectedProject}
          />
        ))}
      </div>

      <Modal
        isOpen={selectedProject !== null}
        onClose={() => setSelectedProject(null)}
        title={selectedProject?.title ?? ""}
      >
        {selectedProject && (
          <div className="space-y-5">
            <p className="leading-7 text-slate-300">
              {selectedProject.description}
            </p>

            <div>
              <h3 className="mb-3 font-semibold text-white">
                Tecnologías
              </h3>

              <div className="flex flex-wrap gap-2">
                {selectedProject.technologies.map((technology) => (
                  <span
                    key={technology}
                    className="rounded-full bg-cyan-400/10 px-3 py-1 text-xs text-cyan-400"
                  >
                    {technology}
                  </span>
                ))}
              </div>
            </div>

            <div className="flex flex-wrap gap-3">
              {selectedProject.github && (
                <a
                  href={selectedProject.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-lg border border-slate-700 px-4 py-2 text-sm font-medium text-white transition hover:border-cyan-400 hover:text-cyan-400"
                >
                  GitHub
                </a>
              )}

              {selectedProject.demo && (
                <a
                  href={selectedProject.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-lg bg-cyan-400 px-4 py-2 text-sm font-semibold text-slate-950 transition hover:bg-cyan-300"
                >
                  Ver proyecto
                </a>
              )}
            </div>
          </div>
        )}
      </Modal>
    </section>
  );
}
