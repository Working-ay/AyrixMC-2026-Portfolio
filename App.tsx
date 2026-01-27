import React from 'react';
import { Navbar } from './components/Navbar';
import { Section } from './components/Section';
import { ProjectCard } from './components/ProjectCard';
import { SkillBadge } from './components/SkillBadge';
import { PROJECTS, SKILLS, SOCIAL_LINKS } from './constants';
import { Github, Mail, Disc } from 'lucide-react';

const App: React.FC = () => {
  // We want to mix current and past projects but visually distinguish them in the grid
  const allProjects = [...PROJECTS];

  return (
    <div className="min-h-screen bg-black text-white selection:bg-white selection:text-black">
      <Navbar />

      {/* Hero Section */}
      <section id="home" className="min-h-screen flex items-center justify-center px-6 relative overflow-hidden">
        {/* Subtle background element */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-white/[0.02] rounded-full blur-3xl pointer-events-none"></div>

        <div className="max-w-4xl w-full text-center relative z-10">
          <p className="font-mono text-xs text-gray-600 mb-8 tracking-[0.3em] uppercase">
            Commissions Open
          </p>
          
          <h1 className="text-6xl md:text-9xl font-bold tracking-tighter mb-10 text-white">
            AYRIX<span className="text-gray-800">MC</span>
          </h1>
          
          <div className="flex flex-col items-center gap-6 font-mono text-xs md:text-sm text-gray-500">
             <div className="flex gap-4 uppercase tracking-widest">
                <span>SysAdmin</span>
                <span>•</span>
                <span>Developer</span>
                <span>•</span>
                <span>Hosting</span>
             </div>
             {/* Removed vertical line */}
            <p className="max-w-md leading-relaxed text-gray-600">
              Architecting high-performance infrastructure and automated backend systems for gaming networks.
            </p>
          </div>
        </div>
      </section>

      {/* Projects Section - Text Masonry */}
      <Section id="projects" title="Index of Works">
        <div className="columns-1 md:columns-2 lg:columns-3 gap-16 space-y-16">
          {allProjects.map((project, index) => (
            <ProjectCard key={`${project.name}-${index}`} project={project} />
          ))}
        </div>
      </Section>

      {/* Skills Section - Text Clouds */}
      <Section id="skills" title="System Capabilities">
        <div className="flex flex-wrap justify-center gap-x-10 gap-y-6 max-w-3xl mx-auto">
          {SKILLS.map((skill) => (
            <div key={skill.name} className="group flex items-center gap-3">
              <span className="w-0.5 h-0.5 bg-gray-700 group-hover:bg-white transition-colors"></span>
              <span className="font-mono text-sm text-gray-500 group-hover:text-white transition-colors cursor-default">
                {skill.name}
              </span>
            </div>
          ))}
        </div>
      </Section>

      {/* Experience Section - Minimal Text */}
      <Section id="experience" title="Execution Log">
        <div className="max-w-2xl mx-auto space-y-20 text-center md:text-left">
          
          <div className="">
            <div className="flex flex-col items-center md:items-start gap-1 mb-3">
              <h3 className="text-xl font-bold text-white">Director & COO</h3>
              <span className="font-mono text-xs text-gray-600">@ Synclastics Cloud Technologies</span>
            </div>
            <p className="text-gray-500 text-sm leading-relaxed max-w-lg mx-auto md:mx-0">
              Leading operations and strategic infrastructure planning. Managing cloud resources and client deployment strategies.
            </p>
          </div>

           <div className="">
            <div className="flex flex-col items-center md:items-start gap-1 mb-3">
              <h3 className="text-xl font-bold text-gray-300">Developer</h3>
              <span className="font-mono text-xs text-gray-600">@ Sterro Cloud Hosting</span>
            </div>
            <p className="text-gray-500 text-sm leading-relaxed max-w-lg mx-auto md:mx-0">
              Backend development for hosting panels and node management optimization.
            </p>
          </div>

          <div className="">
            <div className="flex flex-col items-center md:items-start gap-1 mb-3">
              <h3 className="text-xl font-bold text-gray-300">Developer</h3>
              <span className="font-mono text-xs text-gray-600">@ JollySMP & Boiga SMP</span>
            </div>
            <p className="text-gray-500 text-sm leading-relaxed max-w-lg mx-auto md:mx-0">
              Established and scaled multiple Minecraft communities. Managed dedicated hardware and custom plugin development.
            </p>
          </div>
        </div>
      </Section>

      {/* Footer */}
      <footer className="py-24 px-6 text-center">
        <div className="flex justify-center gap-12 mb-12">
          <a href={SOCIAL_LINKS.github} className="text-gray-600 hover:text-white transition-colors"><Github size={20} /></a>
          <a href={SOCIAL_LINKS.discord} className="text-gray-600 hover:text-white transition-colors"><Disc size={20} /></a>
          <a href={SOCIAL_LINKS.email} className="text-gray-600 hover:text-white transition-colors"><Mail size={20} /></a>
        </div>
        <p className="text-gray-800 font-mono text-[10px] uppercase tracking-widest">
          AyrixMC System • {new Date().getFullYear()}
        </p>
      </footer>
    </div>
  );
};

export default App;