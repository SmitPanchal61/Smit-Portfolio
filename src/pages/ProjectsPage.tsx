import React, { useEffect } from "react";
import { PROJECTS } from "../data";
import { Section, SectionHeader, ProjectCard } from "../components/Shared";

export default function ProjectsPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <Section id="projects" className="pt-40 md:pt-48 pb-40">
      <SectionHeader 
         title="Project Portfolio" 
         subtitle="A comprehensive look at my technical work, from AI/ML research to full-stack engineering." 
      />
      <div className="flex flex-col gap-16">
          {PROJECTS.map((p, i) => (
              <ProjectCard key={i} project={p} index={i} />
          ))}
      </div>
    </Section>
  );
}
