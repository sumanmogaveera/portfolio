import React, { useState } from 'react';
import { 
  ExternalLink, 
  Sparkles, 
  CheckCircle2, 
  AlertCircle, 
  QrCode, 
  PackageSearch, 
  ShieldCheck, 
  Eye,
  MapPin,
  Scan,
  Lock,
  Search,
  UserCheck
} from 'lucide-react';
import { projects } from '../data/portfolioData';
import type { Project } from '../types';
import { ProjectModal } from './ProjectModal';
import { GithubIcon } from './Icons';
import { TiltCard } from './TiltCard';

export const Projects: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const renderProjectVisualMockup = (id: string, badge: string) => {
    switch (id) {
      case 'lost-and-found':
        return (
          <div className="relative rounded-xl border border-slate-800/90 bg-[#070b14] p-5 shadow-2xl overflow-hidden min-h-[300px] flex flex-col justify-between group">
            {/* Background Digital Map Grid & Radar Scan Animation */}
            <div className="absolute inset-0 bg-grid-pattern opacity-30 pointer-events-none" />
            <div className="absolute -top-12 -right-12 w-56 h-56 rounded-full bg-cyan-500/10 blur-3xl pointer-events-none" />
            
            {/* Header window control */}
            <div className="relative z-10 flex items-center justify-between pb-3 border-b border-slate-800/80 text-xs font-mono">
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-rose-500/80"></span>
                <span className="w-2.5 h-2.5 rounded-full bg-amber-500/80"></span>
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/80"></span>
                <span className="ml-1 text-[11px] text-cyan-400 font-bold font-mono">lost-and-found.app</span>
              </div>
              <span className="px-2 py-0.5 rounded bg-cyan-950/60 border border-cyan-800/40 text-[10px] text-cyan-300 font-mono">
                {badge}
              </span>
            </div>

            {/* Custom Interactive Campus Map & Location Pins Visualization */}
            <div className="relative z-10 my-4 p-4 rounded-xl bg-slate-950/70 border border-slate-800/80 space-y-3">
              
              {/* Search Bar Simulation */}
              <div className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-slate-900 border border-slate-800 text-xs text-slate-400 font-mono">
                <Search className="w-3.5 h-3.5 text-cyan-400" />
                <span>Search lost item: "ID Card", "Calculator"...</span>
              </div>

              {/* Digital Map Grid with Location Nodes */}
              <div className="grid grid-cols-2 gap-2 text-left pt-1">
                
                {/* Node 1: Campus Library */}
                <div className="p-2.5 rounded-lg bg-slate-900/80 border border-cyan-500/30 flex items-start gap-2 text-xs">
                  <MapPin className="w-4 h-4 text-cyan-400 flex-shrink-0 mt-0.5 animate-bounce" />
                  <div>
                    <div className="font-semibold text-white text-[11px]">Campus Library</div>
                    <div className="text-[10px] text-slate-400 font-mono">Found: Casio FX-991 Calculator</div>
                  </div>
                </div>

                {/* Node 2: Student Center */}
                <div className="p-2.5 rounded-lg bg-slate-900/80 border border-slate-800 flex items-start gap-2 text-xs">
                  <MapPin className="w-4 h-4 text-sky-400 flex-shrink-0 mt-0.5" />
                  <div>
                    <div className="font-semibold text-white text-[11px]">Central Cafeteria</div>
                    <div className="text-[10px] text-slate-400 font-mono">Reported: Blue Backpack</div>
                  </div>
                </div>

              </div>

              {/* Verification Claim Indicator */}
              <div className="pt-2 border-t border-slate-800/80 flex items-center justify-between text-[11px] font-mono text-slate-400">
                <span className="flex items-center gap-1.5 text-emerald-400">
                  <UserCheck className="w-3.5 h-3.5" />
                  Verification Claim: Verified
                </span>
                <span className="text-cyan-400 font-semibold">4 Active Listings</span>
              </div>

            </div>

            {/* Bottom Meta Bar */}
            <div className="relative z-10 pt-2 border-t border-slate-800/80 flex items-center justify-between text-xs text-slate-400 font-mono">
              <span className="flex items-center gap-1.5 text-slate-300">
                <PackageSearch className="w-4 h-4 text-cyan-400" />
                Interactive Map &amp; Listings
              </span>
              <span className="text-emerald-400 font-semibold text-[11px]">Live Prototype</span>
            </div>
          </div>
        );

      case 'hostel-attendance':
        return (
          <div className="relative rounded-xl border border-slate-800/90 bg-[#070b14] p-5 shadow-2xl overflow-hidden min-h-[300px] flex flex-col justify-between group">
            <div className="absolute inset-0 bg-grid-pattern opacity-30 pointer-events-none" />
            <div className="absolute -top-12 -right-12 w-56 h-56 rounded-full bg-sky-500/10 blur-3xl pointer-events-none" />
            
            {/* Header window control */}
            <div className="relative z-10 flex items-center justify-between pb-3 border-b border-slate-800/80 text-xs font-mono">
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-rose-500/80"></span>
                <span className="w-2.5 h-2.5 rounded-full bg-amber-500/80"></span>
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/80"></span>
                <span className="ml-1 text-[11px] text-sky-400 font-bold font-mono">hostel-attendance.app</span>
              </div>
              <span className="px-2 py-0.5 rounded bg-sky-950/60 border border-sky-800/40 text-[10px] text-sky-300 font-mono">
                {badge}
              </span>
            </div>

            {/* QR Pattern & Face Recognition Matrix Simulation */}
            <div className="relative z-10 my-4 p-4 rounded-xl bg-slate-950/70 border border-slate-800/80 space-y-3">
              
              <div className="grid grid-cols-12 gap-3 items-center">
                
                {/* Simulated Scanner Box */}
                <div className="col-span-5 relative p-3 rounded-lg bg-slate-900 border border-sky-500/40 flex flex-col items-center justify-center text-center space-y-1">
                  {/* Laser Scan Line Animation */}
                  <div className="w-full h-0.5 bg-gradient-to-r from-transparent via-cyan-400 to-transparent animate-pulse my-1"></div>
                  <QrCode className="w-10 h-10 text-sky-400" />
                  <div className="text-[10px] font-mono text-cyan-300 mt-1">QR Verified</div>
                </div>

                {/* Face Recognition Details */}
                <div className="col-span-7 space-y-2 text-left font-mono text-[11px]">
                  <div className="p-2 rounded bg-slate-900/90 border border-slate-800 space-y-1">
                    <div className="flex items-center justify-between text-slate-300">
                      <span className="flex items-center gap-1">
                        <Scan className="w-3.5 h-3.5 text-emerald-400" />
                        Face ID Match:
                      </span>
                      <span className="text-emerald-400 font-bold">99.4%</span>
                    </div>
                    <div className="text-[10px] text-slate-400">Timestamp: 21:42:05 IST</div>
                  </div>

                  <div className="flex items-center justify-between text-[10px] text-slate-400 pt-1">
                    <span>Hostel Block A:</span>
                    <span className="text-sky-300 font-bold">96% Present</span>
                  </div>
                </div>

              </div>

            </div>

            {/* Bottom Meta Bar */}
            <div className="relative z-10 pt-2 border-t border-slate-800/80 flex items-center justify-between text-xs text-slate-400 font-mono">
              <span className="flex items-center gap-1.5 text-slate-300">
                <QrCode className="w-4 h-4 text-sky-400" />
                Dual QR + OpenCV Verification
              </span>
              <span className="text-emerald-400 font-semibold text-[11px]">Tested Locally</span>
            </div>
          </div>
        );

      case 'medical-data-protection':
        return (
          <div className="relative rounded-xl border border-slate-800/90 bg-[#070b14] p-5 shadow-2xl overflow-hidden min-h-[300px] flex flex-col justify-between group">
            <div className="absolute inset-0 bg-grid-pattern opacity-30 pointer-events-none" />
            <div className="absolute -top-12 -right-12 w-56 h-56 rounded-full bg-indigo-500/10 blur-3xl pointer-events-none" />
            
            {/* Header window control */}
            <div className="relative z-10 flex items-center justify-between pb-3 border-b border-slate-800/80 text-xs font-mono">
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-rose-500/80"></span>
                <span className="w-2.5 h-2.5 rounded-full bg-amber-500/80"></span>
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/80"></span>
                <span className="ml-1 text-[11px] text-indigo-400 font-bold font-mono">privacy-protection.py</span>
              </div>
              <span className="px-2 py-0.5 rounded bg-indigo-950/60 border border-indigo-800/40 text-[10px] text-indigo-300 font-mono">
                {badge}
              </span>
            </div>

            {/* Encrypted Data Streams & Privacy Shield Visualization */}
            <div className="relative z-10 my-4 p-4 rounded-xl bg-slate-950/70 border border-slate-800/80 space-y-3">
              
              {/* Encrypted Data Stream Header */}
              <div className="flex items-center justify-between font-mono text-[11px]">
                <span className="flex items-center gap-1.5 text-indigo-300">
                  <Lock className="w-3.5 h-3.5 text-indigo-400" />
                  Encrypted PII Data Stream
                </span>
                <span className="text-emerald-400 font-semibold text-[10px]">k-Anonymity (k=5)</span>
              </div>

              {/* Data Anonymization Matrix Preview */}
              <div className="p-2.5 rounded-lg bg-slate-900/90 border border-indigo-500/30 font-mono text-[11px] space-y-1.5 text-left">
                <div className="flex justify-between items-center">
                  <span className="text-slate-400">Patient Identifier:</span>
                  <span className="px-2 py-0.5 rounded bg-slate-800 text-rose-400 font-semibold text-[10px]">
                    [REDACTED / HASH 0x7F9]
                  </span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-slate-400">Diagnostic Feature:</span>
                  <span className="text-slate-200 text-[11px]">Cardiovascular Metric</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-slate-400">Utility Preservation:</span>
                  <span className="text-emerald-400 font-bold text-[10px]">98.6% Retained</span>
                </div>
              </div>

            </div>

            {/* Bottom Meta Bar */}
            <div className="relative z-10 pt-2 border-t border-slate-800/80 flex items-center justify-between text-xs text-slate-400 font-mono">
              <span className="flex items-center gap-1.5 text-slate-300">
                <ShieldCheck className="w-4 h-4 text-indigo-400" />
                Differential Privacy Pipeline
              </span>
              <span className="text-indigo-300 font-semibold text-[11px]">Research Prototype</span>
            </div>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <section id="projects" className="py-24 relative overflow-hidden">
      
      {/* Background radial glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[850px] h-[550px] bg-cyan-600/5 blur-[170px] rounded-full pointer-events-none"></div>

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

        {/* Project Cards Stack with 3D Tilt */}
        <div className="space-y-12">
          {projects.map((project, idx) => (
            <TiltCard key={project.id} maxTilt={2.5} className="w-full">
              <div
                className="glass-card rounded-2xl border border-slate-800/80 bg-slate-900/40 overflow-hidden relative group hover:border-cyan-500/30 transition-all duration-300 shadow-2xl"
              >
                {/* Top Accent Gradient Bar */}
                <div className="h-1.5 w-full bg-gradient-to-r from-cyan-500/30 via-sky-500/20 to-transparent"></div>

                <div className="p-6 sm:p-8 lg:p-10">
                  <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                    
                    {/* Left Column: Visual Realistic Environment Mockup */}
                    <div className="lg:col-span-5">
                      {renderProjectVisualMockup(project.id, project.badge)}

                      {/* Technology Badges */}
                      <div className="mt-4 text-left">
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
                        <div className="p-3.5 rounded-xl bg-slate-900/70 border border-slate-800 space-y-1.5">
                          <div className="flex items-center gap-1.5 text-rose-400 text-xs font-mono font-bold">
                            <AlertCircle className="w-3.5 h-3.5" />
                            <span>The Challenge:</span>
                          </div>
                          <p className="text-xs text-slate-300 leading-relaxed">
                            {project.problem}
                          </p>
                        </div>

                        <div className="p-3.5 rounded-xl bg-slate-900/70 border border-slate-800 space-y-1.5">
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
                          Key Technical Features:
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
            </TiltCard>
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
