interface TimelineBadgeProps {
  timeline: string;
}

export default function TimelineBadge({ timeline }: TimelineBadgeProps) {
  const lower = timeline.toLowerCase();
  let color = "bg-muted text-muted-foreground";
  if (lower.includes("short") || lower.includes("0–1") || lower.includes("0-1") || lower === "now") {
    color = "bg-critical/10 text-critical";
  } else if (lower.includes("mid") || lower.includes("1–3") || lower.includes("1-3")) {
    color = "bg-warning/10 text-warning";
  } else if (lower.includes("long") || lower.includes("3–5") || lower.includes("3-5")) {
    color = "bg-success/10 text-success";
  }
  return (
    <span className={`inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-semibold ${color}`}>
      {timeline}
    </span>
  );
}
