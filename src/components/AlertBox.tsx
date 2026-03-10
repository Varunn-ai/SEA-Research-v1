import { AlertTriangle, Info, Zap } from "lucide-react";

interface AlertBoxProps {
  type: "warning" | "info" | "signal";
  children: React.ReactNode;
  title?: string;
}

const iconMap = {
  warning: AlertTriangle,
  info: Info,
  signal: Zap,
};

const styleMap = {
  warning: "border-warning/40 bg-warning/5",
  info: "border-primary/40 bg-teal-light",
  signal: "border-orange/40 bg-orange-light",
};

export default function AlertBox({ type, children, title }: AlertBoxProps) {
  const Icon = iconMap[type];
  return (
    <div className={`my-4 rounded-lg border-l-4 p-4 ${styleMap[type]}`}>
      <div className="flex items-start gap-3">
        <Icon className="mt-0.5 h-5 w-5 shrink-0 text-muted-foreground" />
        <div className="text-sm text-foreground">
          {title && <p className="mb-1 font-semibold">{title}</p>}
          {children}
        </div>
      </div>
    </div>
  );
}
