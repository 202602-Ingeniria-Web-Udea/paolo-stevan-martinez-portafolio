import {
  Braces,
  Code2,
  Database,
  GitBranch,
  Layers3,
  Palette,
} from "lucide-react";

export const languages = [
  {
    name: "Español",
    percentage: 100,
  },
  {
    name: "Inglés",
    percentage: 70,
  },
];

export const programmingLanguages = [
  {
    name: "JavaScript",
    percentage: 85,
  },
  {
    name: "TypeScript",
    percentage: 75,
  },
  {
    name: "Python",
    percentage: 65,
  },
];

export const knowledge = [
  {
    title: "React",
    description:
      "Desarrollo de interfaces dinámicas utilizando componentes reutilizables y manejo de estados.",
    icon: Code2,
  },
  {
    title: "TypeScript",
    description:
      "Desarrollo de aplicaciones utilizando tipado estático para mejorar la calidad y mantenibilidad del código.",
    icon: Braces,
  },
  {
    title: "Next.js",
    description:
      "Construcción de aplicaciones web modernas utilizando React y las herramientas de Next.js.",
    icon: Layers3,
  },
  {
    title: "Tailwind CSS",
    description:
      "Creación de interfaces responsivas utilizando clases utilitarias y sistemas de diseño consistentes.",
    icon: Palette,
  },
  {
    title: "Git",
    description:
      "Control de versiones, manejo de ramas y trabajo colaborativo utilizando Git y GitHub.",
    icon: GitBranch,
  },
  {
    title: "Bases de datos",
    description:
      "Conocimientos en conceptos fundamentales de bases de datos y almacenamiento de información.",
    icon: Database,
  },
];
export const education = [
  {
    institution: "Universidad de Antioquia",
    dates: "2024 - Actualmente",
    degree: "Ingeniería de Sistemas Regiones",
    description:
      "Formación en desarrollo de software, programación, bases de datos, ingeniería de requisitos y tecnologías web.",
  },
  {
    institution: "Colegio Cooperativo Carlos Arturo Roldan Betancur.",
    dates: "2010 - 2023",
    degree: "Bachiller Académico con enfasis en contabilidad",
    description:
      "Formación académica integral con énfasis en el desarrollo de habilidades analíticas, comunicación y trabajo en equipo.",
  },
];
export const projects = [
  {
    id: 1,
    title: "Mi primer proyecto web",
    shortDescription:
      "Aplicación web desarrollada como parte de mi proceso de aprendizaje.",
    description:
      "Proyecto desarrollado para poner en práctica conceptos de desarrollo web, diseño de interfaces y programación.",
    image: "/images/project-1.jpeg",
    technologies: ["HTML", "CSS", "JavaScript"],
    github: "https://github.com/",
    demo: "https://github.com/",
  },
  {
    id: 2,
    title: "Aplicación React",
    shortDescription:
      "Aplicación construida utilizando React y componentes reutilizables.",
    description:
      "Proyecto enfocado en el desarrollo de interfaces utilizando React, manejo de estados y componentes reutilizables.",
    image: "/images/project-2.jpeg",
    technologies: ["React", "JavaScript", "CSS"],
    github: "https://github.com/",
    demo: "https://github.com/",
  },
  {
    id: 3,
    title: "Proyecto Next.js",
    shortDescription:
      "Aplicación web moderna desarrollada utilizando Next.js y TypeScript.",
    description:
      "Proyecto desarrollado utilizando Next.js, TypeScript y Tailwind CSS, aplicando buenas prácticas de organización y reutilización de componentes.",
    image: "/images/project-3.jpeg",
    technologies: ["Next.js", "TypeScript", "Tailwind CSS"],
    github: "https://github.com/",
    demo: "https://github.com/",
  },
];
