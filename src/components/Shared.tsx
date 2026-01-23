import React from "react";
import { motion } from "framer-motion";
import { Github, Linkedin, Mail, ExternalLink, Hammer, MapPin, Trophy, Award } from "lucide-react";
import { PROFILE } from "../data";
import { Link, useLocation } from "react-router-dom";

export const Section = ({ id, className = "", children }: any) => (
  <section id={id} className={`py-24 sm:py-32 scroll-mt-0 ${className}`}>
    <motion.div 
      initial={{ opacity: 0, y: 60, scale: 0.98 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
      className="mx-auto max-w-7xl px-6"
    >
      {children}
    </motion.div>
  </section>
);

export const SectionHeader = ({ title, subtitle }: any) => (
  <motion.div 
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.6, delay: 0.1 }}
    className="mb-16 max-w-2xl"
  >
    <h2 className="text-4xl sm:text-5xl font-heading font-bold text-earth-text mb-6 tracking-tight leading-tight">{title}</h2>
    {subtitle && <p className="text-lg text-earth-muted leading-relaxed">{subtitle}</p>}
  </motion.div>
);

export const PillButton = ({ href, children, variant = "primary", icon: Icon, isExternal = true }: any) => {
  const base = "inline-flex items-center gap-2 px-8 py-4 rounded-full font-heading font-bold text-sm tracking-wide transition-all duration-300 hover:-translate-y-1";
  const styles = variant === "primary" 
    ? "bg-earth-accent text-white hover:bg-earth-accent/90 shadow-lg shadow-earth-accent/20" 
    : "bg-white text-earth-text border border-earth-secondary hover:border-earth-accent/30";
  
  if (!isExternal && href.startsWith("/")) {
    return (
      <Link to={href} className={`${base} ${styles}`}>
        {children}
        {Icon && <Icon className="w-4 h-4" />}
      </Link>
    );
  }

  return (
    <a href={href} target={isExternal ? "_blank" : undefined} rel={isExternal ? "noreferrer" : undefined} className={`${base} ${styles}`}>
      {children}
      {Icon && <Icon className="w-4 h-4" />}
    </a>
  );
};

export const Navbar = () => {
    const location = useLocation();
    const isHome = location.pathname === "/";

    return (
      <header className="fixed top-0 w-full z-40 bg-earth-bg/80 backdrop-blur-md border-b border-earth-accent/30">
        <nav className="mx-auto max-w-7xl px-6 py-5 flex items-center justify-between">
          <Link to="/" className="text-xl font-heading font-bold tracking-tight text-earth-text">
            SMIT PANCHAL.
          </Link>
          <div className="flex items-center gap-1">
            <a href={PROFILE.links.linkedin} target="_blank" rel="noreferrer" className="p-3 rounded-full hover:bg-white hover:scale-105 transition-all text-earth-text"><Linkedin className="w-5 h-5"/></a>
            <a href={PROFILE.links.github} target="_blank" rel="noreferrer" className="p-3 rounded-full hover:bg-white hover:scale-105 transition-all text-earth-text"><Github className="w-5 h-5"/></a>
            <a href={`mailto:${PROFILE.email}`} className="p-3 rounded-full hover:bg-white hover:scale-105 transition-all text-earth-text"><Mail className="w-5 h-5"/></a>
          </div>
        </nav>
      </header>
    );
};

export const Footer = () => (
  <footer className="bg-earth-primary text-white py-20 rounded-t-[3rem] md:rounded-t-[5rem] -mt-10 relative z-10">
      <div className="mx-auto max-w-7xl px-6 flex flex-col md:flex-row justify-between items-center gap-10">
          <div className="text-center md:text-left">
              <h2 className="text-4xl sm:text-5xl font-heading font-bold mb-4">Always excited to work on meaningful engineering challenges.</h2>
              <p className="text-white/80 max-w-md text-lg italic">Open to full-time roles, internships, and collaborations.</p>
              <p className="text-earth-accent font-heading font-bold text-2xl mt-4">let's connect.</p>
          </div>
           <div className="flex items-center gap-4">
              <a href={PROFILE.links.linkedin} target="_blank" rel="noreferrer" className="w-16 h-16 flex items-center justify-center rounded-full bg-earth-secondary/20 hover:bg-earth-accent hover:text-white transition-all text-white"><Linkedin className="w-6 h-6"/></a>
              <a href={`mailto:${PROFILE.email}`} className="px-10 py-5 rounded-full bg-earth-accent text-white font-heading font-bold hover:bg-white hover:text-earth-primary transition-all shadow-lg shadow-earth-accent/30">
                  Contact Me
              </a>
           </div>
      </div>
      <div className="mx-auto max-w-7xl px-6 mt-16 pt-8 border-t border-white/10 flex flex-col sm:flex-row justify-between items-center text-sm text-white/40">
          <p>© {new Date().getFullYear()} Smit Panchal</p>
          <p>Crafted to reflect skills, experience, and the ability to solve real problems</p>
      </div>
  </footer>
);

export const AwardCard = ({ title, subtitle, date, bullets }: any) => (
  <motion.div 
    whileHover={{ y: -5 }}
    className="relative p-8 md:p-12 rounded-[3.5rem] bg-white border border-earth-accent/20 shadow-sm hover:shadow-xl transition-all duration-500 group overflow-hidden"
  >
      {/* Decorative Gradient Background */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-earth-secondary/10 rounded-full blur-3xl -z-10 -mr-20 -mt-20 group-hover:bg-earth-accent/10 transition-colors duration-500"></div>
      
      <div className="flex flex-col md:flex-row gap-8 items-start relative z-10">
          <div className="shrink-0 p-5 rounded-2xl bg-earth-bg text-earth-accent border border-earth-accent/10 group-hover:scale-110 transition-transform duration-500">
              <Trophy className="w-10 h-10" />
          </div>
          
          <div className="flex-1">
              <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-6">
                  <div>
                      <h3 className="text-2xl md:text-3xl font-heading font-bold text-earth-text leading-tight mb-2 group-hover:text-earth-primary transition-colors">
                          {title}
                      </h3>
                      {subtitle && (
                          <p className="text-earth-muted font-medium text-lg md:text-xl mb-3">
                              {subtitle}
                          </p>
                      )}
                      <div className="flex items-center gap-2 text-earth-accent font-bold tracking-widest uppercase text-sm">
                          <Award className="w-3.5 h-3.5" />
                          <span>{date}</span>
                      </div>
                  </div>
              </div>
              
              <div className="space-y-4 text-earth-text/80 leading-relaxed text-lg">
                  {bullets.map((b: string, j: number) => (
                      <p key={j} className="relative pl-7 before:absolute before:left-0 before:top-3 before:w-2 before:h-2 before:rounded-full before:bg-earth-accent/30 group-hover:before:bg-earth-accent transition-all duration-500">
                          {b}
                      </p>
                  ))}
              </div>
          </div>
      </div>
      
      {/* Subtle Bottom Accent Decoration */}
      <div className="absolute bottom-0 left-0 w-full h-2 bg-gradient-to-r from-transparent via-earth-accent/20 to-transparent group-hover:via-earth-accent transition-all duration-500"></div>
  </motion.div>
);

export const ExperienceCard = ({ role, company, date, bullets, location }: any) => (
  <div className="flex flex-col md:flex-row gap-8 items-start p-8 md:p-10 rounded-[2.5rem] bg-white shadow-sm hover:shadow-md transition-all duration-300 border border-earth-accent/30 group">
      <div className="shrink-0 md:w-1/3">
          <div className="inline-block px-4 py-2 rounded-full bg-earth-bg text-earth-primary text-xs font-bold uppercase tracking-widest mb-4">
              {date}
          </div>
          <h3 className="text-2xl font-heading font-bold text-earth-text mb-1 leading-tight">{company}</h3>
          <p className="text-earth-muted font-medium mb-3">{role}</p>
          {location && (
            <div className="flex items-center gap-2 text-earth-muted/70 text-sm">
                <MapPin className="w-3.5 h-3.5" />
                <span>{location}</span>
            </div>
          )}
      </div>
      <div className="md:w-2/3 pl-0 md:pl-8 md:border-l border-earth-accent/50 text-earth-text/80 leading-relaxed space-y-3">
           {bullets.map((b: string, i: number) => (
               <p key={i} className="relative pl-5 before:absolute before:left-0 before:top-2.5 before:w-1.5 before:h-1.5 before:rounded-full before:bg-earth-primary/40">
                  {b}
               </p>
           ))}
      </div>
  </div>
);

export const ProjectCard = ({ project, index }: any) => {
  const isEven = index % 2 === 0;
  return (
    <div className={`group flex flex-col md:flex-row gap-8 items-stretch rounded-[2.5rem] overflow-hidden bg-white hover:shadow-xl transition-all duration-500 border border-earth-accent/30 ${!isEven ? 'md:flex-row-reverse' : ''}`}>
        <div className="relative h-64 md:h-auto md:w-1/2 overflow-hidden shrink-0">
           <img src={project.image} alt={project.name} className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105" />
           <div className={`absolute top-4 ${isEven ? 'left-4' : 'right-4'}`}>
               <span className="px-4 py-2 rounded-full bg-white/90 backdrop-blur text-earth-primary text-xs font-bold uppercase tracking-widest shadow-sm">
                  {project.category}
               </span>
           </div>
        </div>
        <div className="flex flex-col justify-between flex-1 p-8 md:p-12">
            <div>
              <h3 className="text-3xl font-heading font-bold text-earth-text mb-4 leading-tight group-hover:text-earth-primary transition-colors">{project.name}</h3>
              <p className="text-earth-muted leading-relaxed mb-6 italic text-lg">{project.desc}</p>
              {project.bullets && project.bullets.length > 0 && (
                  <ul className="space-y-3 mb-8 text-earth-text/80">
                      {project.bullets.map((b: string, i: number) => (
                          <li key={i} className="flex gap-3 items-start">
                               <span className="mt-2 w-1.5 h-1.5 rounded-full bg-earth-accent shrink-0"></span>
                               <span>{b}</span>
                          </li>
                      ))}
                  </ul>
              )}
            </div>
            <div className="flex flex-wrap items-center justify-between pt-6 border-t border-earth-bg mt-auto gap-4">
               <div className="flex flex-wrap gap-2">
                  {project.stack.map((s: string) => (
                      <span key={s} className="px-3 py-1 bg-earth-bg rounded-lg text-[10px] font-bold text-earth-muted uppercase tracking-wider border border-earth-accent/10">
                          {s}
                      </span>
                  ))}
               </div>
               
               <div className="flex flex-wrap gap-3">
                  {project.links?.map((link: any, i: number) => (
                      <a 
                        key={i}
                        href={link.href} 
                        target="_blank" 
                        rel="noreferrer" 
                        className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-earth-primary text-white text-xs font-bold hover:bg-earth-primary/80 transition-all shadow-md shadow-earth-primary/10"
                      >
                         <span>{link.label}</span>
                         <ExternalLink className="w-3 h-3" />
                      </a>
                  ))}
               </div>
            </div>
        </div>
    </div>
  );
};
