import { useState, useEffect } from "react";
import Navbar from "@/components/Navbar";
import CountrySidebar from "@/components/CountrySidebar";

interface Section {
  id: string;
  label: string;
}

interface CountryPageLayoutProps {
  sections: Section[];
  children: React.ReactNode;
}

export default function CountryPageLayout({ sections, children }: CountryPageLayoutProps) {
  const [activeSection, setActiveSection] = useState(sections[0]?.id || "");

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        }
      },
      { rootMargin: "-100px 0px -60% 0px", threshold: 0 }
    );

    sections.forEach((s) => {
      const el = document.getElementById(s.id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, [sections]);

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <div className="flex">
        <CountrySidebar sections={sections} activeSection={activeSection} />
        <main className="min-w-0 flex-1 px-4 py-8 sm:px-6 lg:px-10">
          <div className="mx-auto max-w-4xl space-y-12">
            {children}
          </div>
        </main>
      </div>
    </div>
  );
}
