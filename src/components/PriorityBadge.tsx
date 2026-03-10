interface PriorityBadgeProps {
  level: "critical" | "high" | "medium" | "medium-high" | "low" | "neutral" | "weak";
  label?: string;
}

const styles: Record<string, string> = {
  critical: "bg-critical/10 text-critical border-critical/30",
  high: "bg-orange-light text-orange border-orange/30",
  "medium-high": "bg-orange-light text-orange border-orange/30",
  medium: "bg-warning/10 text-warning border-warning/30",
  low: "bg-success/10 text-success border-success/30",
  neutral: "bg-muted text-muted-foreground border-border",
  weak: "bg-muted text-muted-foreground border-border",
};

const defaultLabels: Record<string, string> = {
  critical: "🔴 Critical",
  high: "🟠 High",
  "medium-high": "🟠 Medium-High",
  medium: "🟡 Medium",
  low: "🟢 Low",
  neutral: "Neutral",
  weak: "Weak",
};

export default function PriorityBadge({ level, label }: PriorityBadgeProps) {
  return (
    <span className={`inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold ${styles[level] || styles.medium}`}>
      {label || defaultLabels[level]}
    </span>
  );
}
