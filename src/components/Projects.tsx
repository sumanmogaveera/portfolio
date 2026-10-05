import React, { useState } from 'react';
import { 
  FolderGit2, 
  ExternalLink, 
  Sparkles, 
  CheckCircle2, 
  AlertCircle, 
  QrCode, 
  PackageSearch, 
  ShieldCheck, 
  Eye 
} from 'lucide-react';
import { projects } from '../data/portfolioData';
import type { Project } from '../types';
import { ProjectModal } from './ProjectModal';
import { GithubIcon } from './Icons';

export const Projects: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const getProjectIcon = (id: string) => {
    switch (id) {
      case 'lost-and-found':
        return <PackageSearch className="w-6 h-6 text-cyan-400" />;
      case 'hostel-attendance':
        return <QrCode className="w-6 h-6 text-sky-400" />;
      case 'medical-data-protection':
        return <ShieldCheck className="w-6 h-6 text-indigo-400" />;
      default:
        return <FolderGit2 className="w-6 h-6 text-cyan-400" />;
    }
  };

  const getVisualAccent = (id: string) => {
    switch (id) {
      case 'lost-and-found':
        return 'from-cyan-500/20 via-sky-500/10 to-transparent';
      case 'hostel-attendance':
        return 'from-sky-500/20 via-blue-500/10 to-transparent';
      case 'medical-data-protection':
        return 'from-indigo-500/20 via-purple-500/10 to-transparent';
      default:
        return 'from-cyan-500/20 via-blue-500/10 to-transparent';
    }
  };

  return (
    <section id="projects" className="py-24 relative overflow-hidden">
      
      {/* Background radial gradient */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] bg-cyan-600/5 blur-[160px] rounded-full pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-xs font-mono font-medium">
            <Sparkles className="w-3.5 h-3.5" />
            <span>FEATURED IMPLEMENTATIONS</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Featured Projects &amp;{' '}
            <span className="gradient-text-cyan">Software Systems</span>
          </h2>
          <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
            Detailed case studies of applications designed to solve real-world problems through structured software engineering, database normalization, and emerging tech.
          </p>
        </div>

        {/* Project Cards Stack */}
        <div className="space-y-10">
          {projects.map((project, idx) => (
            <div
              key={project.id}
              className="glass-card rounded-2xl border border-slate-800/80 bg-slate-900/40 overflow-hidden relative group hover:border-slate-700 transition-all duration-300"
            >
              {/* Top Accent Gradient Bar */}
              <div className={`h-1.5 w-full bg-gradient-to-r ${getVisualAccent(project.id)}`}></div>

              <div className="p-6 sm:p-8 lg:p-10">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                  
                  {/* Left Column: Visual Mockup / Architecture Box */}
                  <div className="lg:col-span-5 space-y-4">
                    
                    {/* Visual Card / Interactive Preview Mockup */}
                    <div className="rounded-xl border border-slate-800 bg-[#090d16] p-5 shadow-inner relative overflow-hidden">
                      {/* Window header */}
                      <div className="flex items-center justify-between pb-3 border-b border-slate-800/80 mb-4 text-xs font-mono text-slate-400">
                        <div className="flex items-center gap-2">
                          <span className="w-2.5 h-2.5 rounded-full bg-slate-700"></span>
                          <span className="w-2.5 h-2.5 rounded-full bg-slate-700"></span>
                          <span className="w-2.5 h-2.5 rounded-full bg-slate-700"></span>
                          <span className="ml-1 text-[11px] text-cyan-400 font-bold">{project.id}.app</span>
                        </div>
                        <span className="px-2 py-0.5 rounded bg-slate-800/70 text-[10px] text-slate-300">
                          {project.badge}
                        </span>
                      </div>

                      {/* Schematic Graphic / UI Mock */}
                      <div className="py-6 px-4 rounded-lg bg-slate-950/60 border border-slate-800/60 flex flex-col items-center justify-center text-center space-y-3">
                        <div className="w-14 h-14 rounded-2xl bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center shadow-lg shadow-cyan-500/10">
                          {getProjectIcon(project.id)}
                        </div>
                        <div>
                          <h4 className="text-sm font-bold text-white tracking-tight">
                            {project.title}
                          </h4>
                          <p className="text-[11px] text-slate-400 font-mono mt-0.5">
                            {project.category}
                          </p>
                        </div>
                        <div className="pt-2 flex items-center gap-1.5 text-[11px] text-emerald-400 font-mono">
                          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
                          <span>Verified Architecture &bull; Tested Locally</span>
                        </div>
                      </div>

                      {/* Quick Meta */}
                      <div className="mt-4 pt-3 border-t border-slate-800/80 flex items-center justify-between text-xs text-slate-400 font-mono">
                        <span>Project #{idx + 1}</span>
                        <button
                          onClick={() => setSelectedProject(project)}
                          className="text-cyan-400 hover:text-cyan-300 flex items-center gap-1 text-[11px] font-semibold"
                        >
                          <Eye className="w-3.5 h-3.5" />
                          <span>View System Specs</span>
                        </button>
                      </div>
                    </div>

                    {/* Technology Badges */}
                    <div>
                      <div className="text-[11px] font-mono text-slate-400 mb-2 uppercase tracking-wider">
                        Technologies Deployed:
                      </div>
                      <div className="flex flex-wrap gap-1.5">
                        {project.technologies.map((tech) => (
                          <span
                            key={tech}
                            className="px-2.5 py-1 rounded-md text-xs font-mono font-medium text-cyan-300 bg-cyan-950/40 border border-cyan-800/40"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>

                  </div>

                  {/* Right Column: Problem, Solution & Key Features */}
                  <div className="lg:col-span-7 space-y-5 text-left">
                    
                    <div>
                      <div className="flex items-center gap-2 mb-2">
                        <span className="text-xs font-mono font-semibold px-2.5 py-0.5 rounded-full bg-slate-800 text-slate-300 border border-slate-700">
                          Case Study 0{idx + 1}
                        </span>
                        <span className="text-xs text-slate-500 font-mono">&bull;</span>
                        <span className="text-xs text-cyan-400 font-mono">{project.category}</span>
                      </div>
                      <h3 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
                        {project.title}
                      </h3>
                      <p className="text-sm text-slate-300 mt-2 leading-relaxed">
                        {project.shortDescription}
                      </p>
                    </div>

                    {/* Problem & Solution Cards */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 pt-1">
                      <div className="p-3.5 rounded-xl bg-slate-900/60 border border-slate-800 space-y-1.5">
                        <div className="flex items-center gap-1.5 text-rose-400 text-xs font-mono font-bold">
                          <AlertCircle className="w-3.5 h-3.5" />
                          <span>The Challenge:</span>
                        </div>
                        <p className="text-xs text-slate-300 leading-relaxed">
                          {project.problem}
                        </p>
                      </div>

                      <div className="p-3.5 rounded-xl bg-slate-900/60 border border-slate-800 space-y-1.5">
                        <div className="flex items-center gap-1.5 text-emerald-400 text-xs font-mono font-bold">
                          <CheckCircle2 className="w-3.5 h-3.5" />
                          <span>The Solution:</span>
                        </div>
                        <p className="text-xs text-slate-300 leading-relaxed">
                          {project.solution}
                        </p>
                      </div>
                    </div>

                    {/* Key Technical Features */}
                    <div className="space-y-2 pt-1">
                      <div className="text-xs font-mono uppercase tracking-wider text-slate-400 font-semibold">
                        Key Features:
                      </div>
                      <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                        {project.keyFeatures.slice(0, 4).map((feature, fIdx) => (
                          <li key={fIdx} className="flex items-start gap-2 text-xs text-slate-300">
                            <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 mt-1.5 flex-shrink-0"></span>
                            <span className="leading-snug">{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Action Buttons */}
                    <div className="pt-4 border-t border-slate-800/80 flex flex-wrap items-center gap-3">
                      <button
                        onClick={() => setSelectedProject(project)}
                        className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-xl text-xs font-semibold text-white bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 shadow-md shadow-cyan-500/20 transition-all cursor-pointer"
                      >
                        <Eye className="w-3.5 h-3.5" />
                        <span>Interactive Case Study</span>
                      </button>

                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-xl text-xs font-medium text-slate-200 bg-slate-800/80 hover:bg-slate-700 border border-slate-700 transition-colors"
                      >
                        <GithubIcon className="w-3.5 h-3.5 text-slate-300" />
                        <span>GitHub Repository</span>
                      </a>

                      <button
                        onClick={() => alert(`Live Demo for ${project.title}: Configured for deployment on college intranet / cloud host. Click 'Interactive Case Study' to view detailed technical specifications.`)}
                        className="inline-flex items-center gap-1.5 px-3.5 py-2.5 rounded-xl text-xs font-medium text-slate-400 hover:text-white bg-slate-900/50 hover:bg-slate-800/50 border border-slate-800 transition-colors cursor-pointer"
                      >
                        <ExternalLink className="w-3.5 h-3.5" />
                        <span>Live Demo</span>
                      </button>
                    </div>

                  </div>

                </div>
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Project Details Modal */}
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </section>
  );
};
