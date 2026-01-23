import React, { useEffect } from "react";
import { Hammer, ExternalLink } from "lucide-react";
import { PROFILE, EDUCATION, EXPERIENCE, EXTRACURRICULAR, PROJECTS, SKILLS, AWARDS } from "../data";
import { Section, SectionHeader, ExperienceCard, ProjectCard, PillButton, AwardCard } from "../components/Shared";

export default function Home() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      {/* Hero */}
      <Section id="home" className="pt-40 md:pt-48 pb-20">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-16">
            <div className="flex-1 text-center lg:text-left">
                 <div className="inline-flex items-center gap-2 mb-8 px-6 py-3 rounded-full bg-earth-secondary/50 text-earth-primary text-sm font-bold uppercase tracking-widest border border-earth-secondary">
                     <span className="w-2 h-2 rounded-full bg-earth-accent animate-pulse"></span>
                     Software Engineer • Master's Student
                 </div>
                 
                 <h1 className="text-5xl sm:text-7xl md:text-8xl font-heading font-bold text-earth-text leading-[1] tracking-tight mb-10">
                     Building digital <br/>
                     <span className="text-earth-accent relative inline-block">
                        experiences
                        <svg className="absolute w-full h-3 -bottom-1 left-0 text-earth-secondary -z-10" viewBox="0 0 100 10" preserveAspectRatio="none"><path d="M0 5 Q 50 10 100 5" stroke="currentColor" strokeWidth="8" fill="none" /></svg>
                     </span> that matter.
                 </h1>
                 
                 <div className="text-xl sm:text-2xl text-earth-muted leading-relaxed max-w-3xl mx-auto lg:mx-0 mb-12 space-y-2">
                     <p className="font-semibold text-earth-primary">M.S. in Software Engineering @ ASU (’26).</p>
                     <p>Full-stack engineer with experience in scalable systems, cloud-native services, and AI-powered applications.</p>
                     <p>Focused on performance, reliability, and clean, user-centric design.</p>
                 </div>
                 
                 <div className="flex flex-wrap justify-center lg:justify-start gap-6">
                     <PillButton href="/projects" isExternal={false} icon={Hammer}>View Projects</PillButton>
                     <PillButton href={PROFILE.links.resume} variant="secondary" icon={ExternalLink}>Resume</PillButton>
                 </div>
            </div>

            {/* Profile Image - Hidden on Mobile */}
            <div className="hidden lg:block flex-1 relative">
                <div className="relative z-10 w-full max-w-md mx-auto aspect-square rounded-[3rem] overflow-hidden border-8 border-white shadow-2xl shadow-earth-accent/20">
                    <img 
                        src="/images/me.jpg" 
                        alt="Smit Panchal" 
                        className="w-full h-full object-cover"
                    />
                </div>
                {/* Decorative Background Elements */}
                <div className="absolute -top-10 -right-10 w-64 h-64 bg-earth-secondary/30 rounded-full blur-3xl -z-10 animate-pulse"></div>
                <div className="absolute -bottom-10 -left-10 w-64 h-64 bg-earth-accent/10 rounded-full blur-3xl -z-10"></div>
                <div className="absolute inset-0 border-2 border-dashed border-earth-accent/20 rounded-[3.5rem] -m-4 -z-10"></div>
            </div>
        </div>
      </Section>

      {/* Education */}
      <Section id="education" className="bg-earth-bg rounded-t-[3rem] md:rounded-t-[5rem] -mt-10 pt-24 md:pt-32">
           <SectionHeader 
             title="Education" 
             subtitle="Academic qualifications and honors." 
          />
          <div className="grid md:grid-cols-2 gap-10">
              {EDUCATION.map((e, i) => (
                  <div key={i} className="p-8 rounded-[2.5rem] bg-white shadow-sm border border-earth-accent/20">
                      <h4 className="text-2xl font-heading font-bold text-earth-text mb-2">{e.school}</h4>
                      <p className="text-earth-primary font-medium text-lg mb-4">{e.degree}</p>
                      <div className="flex flex-wrap items-center gap-4 text-sm text-earth-muted font-bold tracking-wide uppercase">
                           <span className="bg-earth-bg px-3 py-1 rounded-full">{e.date}</span>
                           <span className="bg-earth-accent/10 text-earth-accent px-3 py-1 rounded-full">{e.gpa} GPA</span>
                      </div>
                      
                      {e.coursework && (
                          <div className="mt-8 pt-6 border-t border-earth-bg">
                              <h5 className="text-xs font-bold uppercase tracking-widest text-earth-muted mb-4">Relevant Coursework</h5>
                              <div className="flex flex-wrap gap-2">
                                  {e.coursework.map((course: string) => (
                                      <span key={course} className="px-3 py-1 bg-earth-bg/50 rounded-lg text-sm text-earth-text/70 border border-earth-accent/10">
                                          {course}
                                      </span>
                                  ))}
                              </div>
                          </div>
                      )}
                  </div>
              ))}
          </div>
      </Section>

      {/* Experience */}
      <Section id="experience" className="bg-white rounded-t-[3rem] md:rounded-t-[5rem] -mt-10 pt-24 md:pt-32">
           <SectionHeader 
             title="Professional Experience" 
             subtitle="Industry experience gained through internships and applied projects." 
          />
          <div className="flex flex-col gap-6">
              {EXPERIENCE.map((exp, i) => (
                  <ExperienceCard key={i} {...exp} />
              ))}
          </div>
      </Section>

      {/* Featured Projects Preview */}
      <Section id="projects" className="bg-earth-bg rounded-t-[3rem] md:rounded-t-[5rem] -mt-10 pt-24 md:pt-32">
          <SectionHeader 
             title="Featured Projects" 
             subtitle="A selection of software engineering work, spanning from AI/ML models to full-stack web applications." 
          />
          <div className="flex flex-col gap-16 mb-16">
              {PROJECTS.slice(0, 3).map((p, i) => (
                  <ProjectCard key={i} project={p} index={i} />
              ))}
          </div>
          <div className="flex justify-center">
              <PillButton href="/projects" isExternal={false} icon={Hammer}>
                  View All Projects
              </PillButton>
          </div>
      </Section>

      {/* Extracurricular Experience */}
      <Section id="extracurricular" className="bg-white rounded-t-[3rem] md:rounded-t-[5rem] -mt-10 pt-24 md:pt-32">
           <SectionHeader 
             title="Extracurricular Experience" 
             subtitle="On-campus leadership and professional contributions." 
          />
          <div className="flex flex-col gap-6">
              {EXTRACURRICULAR.map((exp, i) => (
                  <ExperienceCard key={i} {...exp} />
              ))}
          </div>
      </Section>

      {/* Achievements / Awards */}
      <Section id="achievements" className="bg-earth-bg rounded-t-[3rem] md:rounded-t-[5rem] -mt-10 pt-24 md:pt-32">
           <SectionHeader 
             title="Achievements" 
             subtitle="Recognition for technical excellence and innovation." 
          />
          <div className="flex flex-col gap-10">
              {AWARDS.map((award, i) => (
                  <AwardCard key={i} {...award} />
              ))}
          </div>
      </Section>

      {/* Skills */}
      <Section id="skills" className="bg-white rounded-t-[3rem] md:rounded-t-[5rem] -mt-10 pt-24 md:pt-32 pb-40">
           <div>
               <h3 className="text-3xl font-heading font-bold text-earth-text mb-12">Technical & Professional Skills</h3>
               <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-y-12 gap-x-8">
                    <div>
                        <h4 className="font-bold text-earth-text uppercase tracking-widest text-xs mb-4">Languages</h4>
                            <div className="flex flex-wrap gap-2">
                                {SKILLS.languages.map(s => <span key={s} className="px-3 py-1.5 bg-earth-bg rounded-lg text-sm text-earth-muted">{s}</span>)}
                            </div>
                        </div>
                        <div>
                            <h4 className="font-bold text-earth-text uppercase tracking-widest text-xs mb-4">AI & Machine Learning</h4>
                            <div className="flex flex-wrap gap-2">
                                {SKILLS.ai_ml.map(s => <span key={s} className="px-3 py-1.5 bg-earth-bg rounded-lg text-sm text-earth-muted">{s}</span>)}
                            </div>
                        </div>
                        <div>
                            <h4 className="font-bold text-earth-text uppercase tracking-widest text-xs mb-4">GenAI Tools</h4>
                            <div className="flex flex-wrap gap-2">
                                {SKILLS.genai.map(s => <span key={s} className="px-3 py-1.5 bg-earth-bg rounded-lg text-sm text-earth-muted">{s}</span>)}
                            </div>
                        </div>
                         <div>
                            <h4 className="font-bold text-earth-text uppercase tracking-widest text-xs mb-4">Frameworks & Backend</h4>
                            <div className="flex flex-wrap gap-2">
                                {SKILLS.frameworks.map(s => <span key={s} className="px-3 py-1.5 bg-earth-bg rounded-lg text-sm text-earth-muted">{s}</span>)}
                            </div>
                        </div>
                        <div>
                            <h4 className="font-bold text-earth-text uppercase tracking-widest text-xs mb-4">Cloud & MLOps</h4>
                            <div className="flex flex-wrap gap-2">
                                {SKILLS.cloud.map(s => <span key={s} className="px-3 py-1.5 bg-earth-bg rounded-lg text-sm text-earth-muted">{s}</span>)}
                            </div>
                        </div>
                        <div>
                            <h4 className="font-bold text-earth-text uppercase tracking-widest text-xs mb-4">Databases</h4>
                            <div className="flex flex-wrap gap-2">
                                {SKILLS.databases.map(s => <span key={s} className="px-3 py-1.5 bg-earth-bg rounded-lg text-sm text-earth-muted">{s}</span>)}
                            </div>
                        </div>
                         <div>
                            <h4 className="font-bold text-earth-text uppercase tracking-widest text-xs mb-4">Professional & Soft Skills</h4>
                            <div className="flex flex-wrap gap-2">
                                {SKILLS.professional.map(s => <span key={s} className="px-3 py-1.5 bg-earth-bg rounded-lg text-sm text-earth-muted">{s}</span>)}
                            </div>
                        </div>
                   </div>
           </div>
      </Section>
    </>
  );
}
