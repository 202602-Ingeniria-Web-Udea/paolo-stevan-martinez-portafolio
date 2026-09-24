import ProgressBar from "../atoms/ProgressBar";

interface SkillItemProps {
  name: string;
  percentage: number;
}

export default function SkillItem({
  name,
  percentage,
}: SkillItemProps) {
  return (
    <div className="space-y-2">
      <div className="flex items-center justify-between">
        <span className="text-sm text-slate-200">
          {name}
        </span>

        <span className="text-xs text-slate-400">
          {percentage}%
        </span>
      </div>

      <ProgressBar percentage={percentage} />
    </div>
  );
}
