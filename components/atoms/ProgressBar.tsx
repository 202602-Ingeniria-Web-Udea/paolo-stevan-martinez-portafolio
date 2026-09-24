interface ProgressBarProps {
  percentage: number;
}

export default function ProgressBar({
  percentage,
}: ProgressBarProps) {
  return (
    <div className="h-2 w-full overflow-hidden rounded-full bg-slate-700">
      <div
        className="h-full rounded-full bg-cyan-400 transition-all duration-500"
        style={{ width: `${percentage}%` }}
      />
    </div>
  );
}
