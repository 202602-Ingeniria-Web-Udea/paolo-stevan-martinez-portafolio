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
