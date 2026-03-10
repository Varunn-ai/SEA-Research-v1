import { useState } from "react";
import { ChevronDown, ChevronUp, Menu, X } from "lucide-react";

interface Section {
  id: string;
  label: string;
}

interface CountrySidebarProps {
  sections: Section[];
  activeSection?: string;
}

export default function CountrySidebar({ sections, activeSection }: CountrySidebarProps) {
  const [mobileOpen, setMobileOpen] = useState(false);

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
      setMobileOpen(false);
    }
  };

  return (
    <>
      {/* Mobile toggle */}
      <div className="sticky top-16 z-40 border-b border-border bg-card p-2 lg:hidden">
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="flex w-full items-center justify-between rounded-md bg-muted px-3 py-2 text-sm font-medium text-foreground"
        >
          <span className="flex items-center gap-2">
            <Menu className="h-4 w-4" /> Sections
          </span>
          {mobileOpen ? <ChevronUp className="h-4 w-4" /> : <ChevronDown className="h-4 w-4" />}
        </button>
        {mobileOpen && (
          <div className="mt-1 rounded-md border border-border bg-card p-1 shadow-lg">
            {sections.map((s) => (
              <button
                key={s.id}
                onClick={() => scrollTo(s.id)}
                className={`block w-full rounded px-3 py-2 text-left text-sm transition-colors ${
                  activeSection === s.id
                    ? "bg-primary text-primary-foreground"
                    : "text-muted-foreground hover:bg-muted hover:text-foreground"
                }`}
              >
                {s.label}
              </button>
            ))}
          </div>
        )}
      </div>

      {/* Desktop sidebar */}
      <aside className="sticky top-16 hidden h-[calc(100vh-4rem)] w-64 shrink-0 overflow-y-auto border-r border-border bg-card p-4 lg:block">
        <nav className="space-y-0.5">
          {sections.map((s) => (
            <button
              key={s.id}
              onClick={() => scrollTo(s.id)}
              className={`block w-full rounded-md px-3 py-2 text-left text-sm transition-colors ${
                activeSection === s.id
                  ? "bg-teal-light font-medium text-primary"
                  : "text-muted-foreground hover:bg-muted hover:text-foreground"
              }`}
            >
              {s.label}
            </button>
          ))}
        </nav>
      </aside>
    </>
  );
}
