interface SectionHeaderProps {
  id: string;
  number: string;
  title: string;
  subtitle?: string;
}

export default function SectionHeader({ id, number, title, subtitle }: SectionHeaderProps) {
  return (
    <div id={id} className="scroll-mt-20 border-b border-border pb-4">
      <div className="flex items-baseline gap-3">
        <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-md bg-primary text-xs font-bold text-primary-foreground">
          {number}
        </span>
        <div>
          <h2 className="font-heading text-xl font-bold text-foreground sm:text-2xl">{title}</h2>
          {subtitle && <p className="mt-1 text-sm text-muted-foreground">{subtitle}</p>}
        </div>
      </div>
    </div>
  );
}
