import type { LucideIcon } from "lucide-react";

interface KnowledgeCardProps {
  title: string;
  description: string;
  icon: LucideIcon;
}

export default function KnowledgeCard({
  title,
  description,
  icon: Icon,
}: KnowledgeCardProps) {
  return (
    <article className="group rounded-2xl border border-slate-800 bg-slate-900/60 p-6 transition-all duration-300 hover:-translate-y-1 hover:border-cyan-400/50 hover:bg-slate-900 hover:shadow-xl hover:shadow-cyan-400/5">
      <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-cyan-400/10 text-cyan-400 transition-colors duration-300 group-hover:bg-cyan-400 group-hover:text-slate-950">
        <Icon size={24} />
      </div>

      <h3 className="text-lg font-semibold text-white">
        {title}
      </h3>

      <p className="mt-3 text-sm leading-6 text-slate-400">
        {description}
      </p>
    </article>
  );
}
