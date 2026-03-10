interface ImpactDotsProps {
  score: number;
  max?: number;
}

export default function ImpactDots({ score, max = 10 }: ImpactDotsProps) {
  const color = score >= 9 ? "bg-critical" : score >= 7 ? "bg-orange" : "bg-warning";
  return (
    <div className="flex items-center gap-0.5" title={`${score}/${max}`}>
      {Array.from({ length: max }, (_, i) => (
        <span
          key={i}
          className={`inline-block h-2.5 w-2.5 rounded-full ${i < score ? color : "bg-border"}`}
        />
      ))}
      <span className="ml-1.5 text-xs font-semibold text-muted-foreground">{score}/{max}</span>
    </div>
  );
}
