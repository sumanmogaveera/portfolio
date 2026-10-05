import React, { useState } from 'react';
import { 
  ArrowRight, 
  Download, 
  Send, 
  MapPin, 
  CheckCircle2, 
  Code2, 
  FolderGit2,
  Database,
  Cloud,
  Cpu,
  ShieldCheck,
  Globe,
  Terminal as TerminalIcon
} from 'lucide-react';
import { personalInfo } from '../data/portfolioData';
import { TiltCard } from './TiltCard';

interface HeroProps {
  onResumeClick: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onResumeClick }) => {
  const [activeTab, setActiveTab] = useState<'terminal' | 'profile'>('terminal');

  return (
    <section 
      id="hero" 
      className="relative min-h-[95vh] flex items-center justify-center pt-28 pb-16 overflow-hidden"
    >
      {/* 
        HERO ENVIRONMENT BACKGROUND LAYER:
        Abstract floating elements for Code, Database, Cloud, AI, Cybersecurity, Web Development
      */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden select-none z-0">
        
        {/* Subtle Ambient Radial Light Spheres */}
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] bg-gradient-to-tr from-cyan-600/10 via-blue-600/10 to-indigo-600/5 blur-[140px] rounded-full"></div>
        <div className="absolute top-10 right-10 w-96 h-96 bg-cyan-500/10 blur-[110px] rounded-full"></div>
        <div className="absolute bottom-10 left-10 w-96 h-96 bg-blue-600/10 blur-[120px] rounded-full"></div>

        {/* Floating Abstract Tech Nodes (Code, DB, Cloud, AI, Security, Web) */}
        <div className="absolute top-20 left-12 p-3 rounded-2xl bg-slate-900/40 border border-cyan-500/20 backdrop-blur-md opacity-30 animate-bounce duration-[4000ms] hidden lg:flex items-center gap-2 text-xs font-mono text-cyan-300">
          <Code2 className="w-4 h-4 text-cyan-400" />
          <span>class Algorithm &#123;...&#125;</span>
        </div>

        <div className="absolute top-1/4 right-16 p-3 rounded-2xl bg-slate-900/40 border border-blue-500/20 backdrop-blur-md opacity-30 animate-pulse duration-[3500ms] hidden lg:flex items-center gap-2 text-xs font-mono text-blue-300">
          <Database className="w-4 h-4 text-blue-400" />
          <span>SQL DB Node &bull; Normalized 3NF</span>
        </div>

        <div className="absolute bottom-1/4 left-16 p-3 rounded-2xl bg-slate-900/40 border border-sky-500/20 backdrop-blur-md opacity-25 hidden lg:flex items-center gap-2 text-xs font-mono text-sky-300">
          <Cloud className="w-4 h-4 text-sky-400" />
          <span>Cloud Sync &bull; Intranet API</span>
        </div>

        <div className="absolute top-1/2 left-8 p-3 rounded-2xl bg-slate-900/40 border border-purple-500/20 backdrop-blur-md opacity-25 hidden xl:flex items-center gap-2 text-xs font-mono text-purple-300">
          <Cpu className="w-4 h-4 text-purple-400" />
          <span>AI / ML Data Model</span>
        </div>

        <div className="absolute bottom-32 right-24 p-3 rounded-2xl bg-slate-900/40 border border-emerald-500/20 backdrop-blur-md opacity-30 hidden lg:flex items-center gap-2 text-xs font-mono text-emerald-300">
          <ShieldCheck className="w-4 h-4 text-emerald-400" />
          <span>Privacy &amp; Security Layer</span>
        </div>

        <div className="absolute top-36 right-1/3 p-2.5 rounded-xl bg-slate-900/40 border border-indigo-500/20 backdrop-blur-md opacity-20 hidden md:flex items-center gap-2 text-[11px] font-mono text-indigo-300">
          <Globe className="w-3.5 h-3.5 text-indigo-400" />
          <span>DOM Hierarchy Wireframe</span>
        </div>

        {/* Faint Circuit Line & Grid Pattern Overlay */}
        <div className="absolute inset-0 bg-grid-pattern opacity-40"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Personal Introduction & Action CTAs */}
          <div className="lg:col-span-7 space-y-6 text-left">
            
            {/* Status Pill */}
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-slate-900/90 border border-slate-800 text-xs text-slate-300 backdrop-blur-md shadow-md">
              <span className="flex h-2 w-2 relative">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
              <span className="font-medium text-emerald-400">Open to Internship Opportunities</span>
              <span className="text-slate-500">&bull;</span>
              <span className="flex items-center gap-1 text-slate-400 font-mono">
                <MapPin className="w-3 h-3 text-cyan-400" />
                {personalInfo.location}
              </span>
            </div>

            {/* Main Headings */}
            <div className="space-y-3">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-tight">
                Hi, I'm{' '}
                <span className="gradient-text-cyan inline-block">
                  {personalInfo.name}
                </span>
              </h1>
              
              <h2 className="text-lg sm:text-xl lg:text-2xl font-semibold text-slate-300">
                Computer Science Engineering Student &amp;{' '}
                <span className="text-cyan-400 font-semibold">Aspiring Software Developer</span>
              </h2>
            </div>

            {/* Tagline / Introduction */}
            <p className="text-base sm:text-lg text-slate-400 max-w-2xl leading-relaxed">
              {personalInfo.tagline}
            </p>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-3 pt-2">
              <a
                href="#projects"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl font-semibold text-sm text-white bg-gradient-to-r from-cyan-500 via-sky-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 shadow-xl shadow-cyan-500/20 hover:shadow-cyan-500/30 transition-all transform hover:-translate-y-0.5 cursor-pointer"
              >
                <span>View My Projects</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <button
                onClick={onResumeClick}
                className="inline-flex items-center gap-2 px-5 py-3.5 rounded-xl font-medium text-sm text-slate-200 bg-slate-800/80 hover:bg-slate-800 hover:text-white border border-slate-700/80 hover:border-slate-600 transition-all shadow-sm cursor-pointer"
              >
                <Download className="w-4 h-4 text-cyan-400" />
                <span>Download Resume</span>
              </button>

              <a
                href="#contact"
                className="inline-flex items-center gap-2 px-5 py-3.5 rounded-xl font-medium text-sm text-slate-300 hover:text-white hover:bg-slate-900/60 border border-transparent hover:border-slate-800 transition-all"
              >
                <Send className="w-4 h-4 text-slate-400" />
                <span>Contact Me</span>
              </a>
            </div>

            {/* Tech Badges List */}
            <div className="pt-6 border-t border-slate-800/80">
              <p className="text-xs uppercase tracking-wider font-mono text-slate-400 mb-3 flex items-center gap-2">
                <Code2 className="w-3.5 h-3.5 text-cyan-400" />
                Core Technologies &amp; Languages:
              </p>
              <div className="flex flex-wrap items-center gap-2">
                {personalInfo.heroBadges.map((badge) => (
                  <span
                    key={badge}
                    className="px-3 py-1 rounded-lg text-xs font-mono font-medium text-slate-300 bg-slate-900/80 border border-slate-800 hover:border-cyan-500/40 hover:text-cyan-300 hover:bg-slate-800/50 transition-all shadow-xs"
                  >
                    {badge}
                  </span>
                ))}
              </div>
            </div>

          </div>

          {/* Right Column: Interactive Developer Terminal Card with 3D Tilt */}
          <div className="lg:col-span-5 relative">
            <TiltCard maxTilt={3} className="w-full">
              
              {/* Card Ambient Glow Behind */}
              <div className="absolute -inset-1 rounded-3xl bg-gradient-to-r from-cyan-500/20 via-blue-600/20 to-indigo-500/20 blur-xl opacity-60 pointer-events-none"></div>
              
              <div className="relative glass-card rounded-2xl overflow-hidden border border-slate-800/90 shadow-2xl">
                
                {/* Window Header */}
                <div className="bg-slate-900/90 px-4 py-3 border-b border-slate-800 flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 rounded-full bg-rose-500/80"></div>
                    <div className="w-3 h-3 rounded-full bg-amber-500/80"></div>
                    <div className="w-3 h-3 rounded-full bg-emerald-500/80"></div>
                    <span className="ml-2 text-xs font-mono text-slate-400 flex items-center gap-1.5">
                      <TerminalIcon className="w-3 h-3 text-cyan-400" />
                      suman-mogaveera@dev-box:~
                    </span>
                  </div>
                  
                  {/* Tab Controls */}
                  <div className="flex items-center gap-1 bg-slate-950/70 p-0.5 rounded-lg border border-slate-800/70">
                    <button
                      onClick={() => setActiveTab('terminal')}
                      className={`px-2.5 py-1 rounded text-[11px] font-mono transition-all cursor-pointer ${
                        activeTab === 'terminal'
                          ? 'bg-slate-800 text-cyan-400 font-medium shadow-xs'
                          : 'text-slate-400 hover:text-slate-200'
                      }`}
                    >
                      terminal
                    </button>
                    <button
                      onClick={() => setActiveTab('profile')}
                      className={`px-2.5 py-1 rounded text-[11px] font-mono transition-all cursor-pointer ${
                        activeTab === 'profile'
                          ? 'bg-slate-800 text-cyan-400 font-medium shadow-xs'
                          : 'text-slate-400 hover:text-slate-200'
                      }`}
                    >
                      developer.json
                    </button>
                  </div>
                </div>

                {/* Window Content */}
                {activeTab === 'terminal' ? (
                  <div className="p-5 font-mono text-xs text-left space-y-3 bg-[#080b13]/95 min-h-[340px]">
                    <div className="flex items-center gap-2 text-slate-400">
                      <span className="text-cyan-400">suman@cse-terminal:~$</span>
                      <span className="text-emerald-300">whoami</span>
                    </div>
                    <p className="text-slate-300 pl-4 border-l-2 border-cyan-500/40">
                      Suman Mogaveera • 3rd Year B.E. (Computer Science &amp; Engineering)
                    </p>

                    <div className="flex items-center gap-2 text-slate-400 pt-1">
                      <span className="text-cyan-400">suman@cse-terminal:~$</span>
                      <span className="text-emerald-300">cat skills.txt | grep -E "Java|Python|SQL"</span>
                    </div>
                    <div className="text-slate-300 pl-4 border-l-2 border-blue-500/40 space-y-1">
                      <div className="flex items-center justify-between text-[11px]">
                        <span className="text-amber-300">✓ Core Java &amp; OOP</span>
                        <span className="text-slate-400">Academic &amp; DSA</span>
                      </div>
                      <div className="flex items-center justify-between text-[11px]">
                        <span className="text-sky-300">✓ Python &amp; Flask</span>
                        <span className="text-slate-400">Applied Systems</span>
                      </div>
                      <div className="flex items-center justify-between text-[11px]">
                        <span className="text-indigo-300">✓ MySQL &amp; SQLite</span>
                        <span className="text-slate-400">Relational Databases</span>
                      </div>
                    </div>

                    <div className="flex items-center gap-2 text-slate-400 pt-1">
                      <span className="text-cyan-400">suman@cse-terminal:~$</span>
                      <span className="text-emerald-300">git status</span>
                    </div>
                    <div className="text-slate-400 pl-4 border-l-2 border-emerald-500/40 text-[11px]">
                      <span className="text-emerald-400">On branch main</span>: 10+ projects tracked.<br/>
                      Featured Build: <span className="text-cyan-300 font-semibold">Lost &amp; Found Item Finder</span>
                    </div>

                    <div className="flex items-center gap-2 text-slate-400 pt-2">
                      <span className="text-cyan-400">suman@cse-terminal:~$</span>
                      <span className="inline-block w-2.5 h-4 bg-cyan-400 animate-pulse"></span>
                    </div>
                  </div>
                ) : (
                  <div className="p-5 font-mono text-xs text-left bg-[#080b13]/95 min-h-[340px] text-slate-300 overflow-x-auto">
                    <pre className="text-[12px] leading-relaxed">
{`{
  "developer": "Suman Mogaveera",
  "github": "sumanmogaveera",
  "status": "3rd Year CSE Undergraduate",
  "location": "Karnataka, India",
  "core_competencies": [
    "Software Engineering",
    "Data Structures & Algorithms",
    "Database Normalization (3NF)",
    "Computer Vision & Privacy"
  ],
  "featured_projects": [
    "Lost & Found Item Finder",
    "Smart Hostel Attendance",
    "Medical Data Privacy Protection"
  ],
  "available_for_work": true
}`}
                    </pre>
                  </div>
                )}

                {/* Card Footer Bar */}
                <div className="bg-slate-900/70 px-4 py-2.5 border-t border-slate-800/80 flex items-center justify-between text-[11px] text-slate-400 font-mono">
                  <span className="flex items-center gap-1.5 text-slate-300">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                    SMVITM &bull; VTU Affiliated
                  </span>
                  <span className="text-cyan-400 font-semibold">B.E. CSE 2024–2028</span>
                </div>
              </div>

            </TiltCard>

            {/* Floating Mini Experience Badge */}
            <div className="absolute -bottom-4 -right-2 sm:right-4 bg-slate-900/95 border border-cyan-500/40 rounded-xl px-3.5 py-2 shadow-xl shadow-cyan-500/10 flex items-center gap-2.5 backdrop-blur-md z-30">
              <div className="w-8 h-8 rounded-lg bg-cyan-500/10 flex items-center justify-center text-cyan-400">
                <FolderGit2 className="w-4 h-4" />
              </div>
              <div className="text-left">
                <div className="text-xs font-semibold text-white">10+ Projects</div>
                <div className="text-[10px] text-slate-400 font-mono">Tested &amp; Documented</div>
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};
