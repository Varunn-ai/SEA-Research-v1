import { useState } from "react";
import ImpactDots from "@/components/ImpactDots";
import TimelineBadge from "@/components/TimelineBadge";
import PriorityBadge from "@/components/PriorityBadge";

interface HorizonCell {
  trend: string;
  category: string;
  shortTerm: string;
  midTerm: string;
  longTerm: string;
  impact: number;
  detail?: string;
}

interface TrendHorizonMapProps {
  data: HorizonCell[];
}

export default function TrendHorizonMap({ data }: TrendHorizonMapProps) {
  const [selected, setSelected] = useState<HorizonCell | null>(null);

  const getCellColor = (val: string) => {
    if (val === "●" || val === "●●●" || val.toLowerCase().includes("red") || val.toLowerCase().includes("immediate")) return "bg-critical/20 hover:bg-critical/30 cursor-pointer";
    if (val === "◐" || val === "●●○" || val.toLowerCase().includes("amber") || val.toLowerCase().includes("strategic")) return "bg-warning/20 hover:bg-warning/30 cursor-pointer";
    if (val === "○" || val === "●○○" || val.toLowerCase().includes("green") || val.toLowerCase().includes("long")) return "bg-success/20 hover:bg-success/30 cursor-pointer";
    if (val === "–" || val === "○○○" || !val) return "bg-muted";
    return "bg-muted hover:bg-muted/80 cursor-pointer";
  };

  return (
    <div>
      <div className="overflow-x-auto">
        <table className="w-full text-sm">
          <thead>
            <tr className="border-b border-border">
              <th className="px-3 py-2 text-left font-semibold text-foreground">Trend</th>
              <th className="px-3 py-2 text-left font-semibold text-foreground">Category</th>
              <th className="px-3 py-2 text-center font-semibold text-foreground">0–1 yr</th>
              <th className="px-3 py-2 text-center font-semibold text-foreground">1–3 yr</th>
              <th className="px-3 py-2 text-center font-semibold text-foreground">3–5 yr</th>
              <th className="px-3 py-2 text-center font-semibold text-foreground">Impact</th>
            </tr>
          </thead>
          <tbody>
            {data.map((row, i) => (
              <tr key={i} className="border-b border-border">
                <td className="px-3 py-2 font-medium text-foreground">{row.trend}</td>
                <td className="px-3 py-2 text-muted-foreground">{row.category}</td>
                <td className={`px-3 py-2 text-center rounded ${getCellColor(row.shortTerm)}`} onClick={() => setSelected(row)}>
                  {row.shortTerm}
                </td>
                <td className={`px-3 py-2 text-center rounded ${getCellColor(row.midTerm)}`} onClick={() => setSelected(row)}>
                  {row.midTerm}
                </td>
                <td className={`px-3 py-2 text-center rounded ${getCellColor(row.longTerm)}`} onClick={() => setSelected(row)}>
                  {row.longTerm}
                </td>
                <td className="px-3 py-2 text-center">{row.impact}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {selected && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-foreground/40 p-4" onClick={() => setSelected(null)}>
          <div className="max-h-[80vh] w-full max-w-lg overflow-y-auto rounded-xl border border-border bg-card p-6 shadow-xl" onClick={(e) => e.stopPropagation()}>
            <h3 className="font-heading text-lg font-bold text-foreground">{selected.trend}</h3>
            <p className="mt-1 text-sm text-muted-foreground">{selected.category}</p>
            <div className="mt-3 flex flex-wrap gap-2">
              {selected.shortTerm && selected.shortTerm !== "–" && <TimelineBadge timeline="Short-Term (0–1 yr)" />}
              {selected.midTerm && selected.midTerm !== "–" && <TimelineBadge timeline="Mid-Term (1–3 yr)" />}
              {selected.longTerm && selected.longTerm !== "–" && <TimelineBadge timeline="Long-Term (3–5 yr)" />}
            </div>
            <div className="mt-3">
              <ImpactDots score={selected.impact} />
            </div>
            {selected.detail && <p className="mt-4 text-sm leading-relaxed text-foreground">{selected.detail}</p>}
            <button onClick={() => setSelected(null)} className="mt-4 rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground">
              Close
            </button>
          </div>
        </div>
      )}

      <div className="mt-4 flex items-center gap-4 text-xs text-muted-foreground">
        <span className="flex items-center gap-1"><span className="inline-block h-3 w-3 rounded bg-critical/30" /> 🔴 Immediate Action (0–1yr)</span>
        <span className="flex items-center gap-1"><span className="inline-block h-3 w-3 rounded bg-warning/30" /> 🟠 Strategic Positioning (1–3yr)</span>
        <span className="flex items-center gap-1"><span className="inline-block h-3 w-3 rounded bg-success/30" /> 🟢 Long-Range (3–5yr)</span>
      </div>
    </div>
  );
}
