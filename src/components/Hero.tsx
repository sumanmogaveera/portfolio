import React from 'react';
import { 
  ArrowRight, 
  Download, 
  Send, 
  MapPin, 
  CheckCircle2, 
  Code2
} from 'lucide-react';
import { personalInfo } from '../data/portfolioData';
import { TiltCard } from './TiltCard';

interface HeroProps {
  onResumeClick: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onResumeClick }) => {

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

        {/* Faint Circuit Line & Grid Pattern Overlay */}
        <div className="absolute inset-0 bg-grid-pattern opacity-40"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Personal Introduction & Action CTAs */}
          <div className="lg:col-span-7 space-y-6 text-left">
            
            {/* Status & Welcome Pill */}
            <div className="flex flex-wrap items-center gap-2">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-[11px] font-mono font-medium">
                <span>WELCOME TO MY PORTFOLIO</span>
              </div>
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-900/90 border border-slate-800 text-xs text-slate-300 backdrop-blur-md shadow-md">
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
                className="btn-magnetic inline-flex items-center gap-2 px-6 py-3.5 rounded-xl font-semibold text-sm text-white bg-gradient-to-r from-cyan-500 via-sky-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 shadow-xl shadow-cyan-500/20 hover:shadow-cyan-500/30 transition-all cursor-pointer"
              >
                <span>View My Projects</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <button
                onClick={onResumeClick}
                className="btn-magnetic inline-flex items-center gap-2 px-5 py-3.5 rounded-xl font-medium text-sm text-slate-200 bg-slate-800/80 hover:bg-slate-800 hover:text-white border border-slate-700/80 hover:border-slate-600 transition-all shadow-sm cursor-pointer"
              >
                <Download className="w-4 h-4 text-cyan-400" />
                <span>Download Resume</span>
              </button>

              <a
                href="#contact"
                className="btn-magnetic inline-flex items-center gap-2 px-5 py-3.5 rounded-xl font-medium text-sm text-slate-300 hover:text-white hover:bg-slate-900/60 border border-transparent hover:border-slate-800 transition-all"
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

          {/* Right Column: Clean Software Engineering System & Developer Specs Panel */}
          <div className="lg:col-span-5 relative">
            <TiltCard maxTilt={3} className="w-full">
              
              {/* Card Ambient Glow Behind */}
              <div className="absolute -inset-1 rounded-3xl bg-gradient-to-r from-cyan-500/20 via-blue-600/20 to-indigo-500/20 blur-xl opacity-60 pointer-events-none"></div>
              
              <div className="relative glass-card rounded-2xl overflow-hidden border border-slate-800/90 shadow-2xl">
                
                {/* Header Control */}
                <div className="bg-slate-900/90 px-4 py-3 border-b border-slate-800 flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 rounded-full bg-rose-500/80"></div>
                    <div className="w-3 h-3 rounded-full bg-amber-500/80"></div>
                    <div className="w-3 h-3 rounded-full bg-emerald-500/80"></div>
                    <span className="ml-2 text-xs font-mono text-slate-300 font-semibold flex items-center gap-1.5">
                      developer.config.json
                    </span>
                  </div>
                  
                  <span className="px-2.5 py-1 rounded bg-cyan-950/60 border border-cyan-800/40 text-[10px] font-mono text-cyan-300">
                    B.E. CSE 2024–2028
                  </span>
                </div>

                {/* Developer Specification Content */}
                <div className="p-6 font-mono text-xs text-left bg-[#080b13]/95 min-h-[320px] text-slate-300 space-y-4">
                  <div className="p-3.5 rounded-xl bg-slate-900/80 border border-slate-800 space-y-1">
                    <div className="text-[10px] text-cyan-400 font-bold uppercase tracking-wider">
                      UNDERGRADUATE PROFILE
                    </div>
                    <div className="text-sm font-bold text-white font-sans">
                      {personalInfo.name}
                    </div>
                    <div className="text-[11px] text-slate-400">
                      3rd Year Computer Science &amp; Engineering
                    </div>
                  </div>

                  <div className="space-y-2">
                    <div className="text-[10px] text-slate-400 uppercase tracking-wider font-semibold">
                      Core Engineering Focus:
                    </div>
                    <div className="grid grid-cols-2 gap-2 text-[11px]">
                      <div className="p-2 rounded bg-slate-900/60 border border-slate-800 text-slate-300">
                        <span className="text-cyan-400 font-bold block mb-0.5">Languages</span>
                        Java &bull; Python &bull; C
                      </div>
                      <div className="p-2 rounded bg-slate-900/60 border border-slate-800 text-slate-300">
                        <span className="text-blue-400 font-bold block mb-0.5">Databases</span>
                        MySQL &bull; SQLite (3NF)
                      </div>
                      <div className="p-2 rounded bg-slate-900/60 border border-slate-800 text-slate-300">
                        <span className="text-sky-400 font-bold block mb-0.5">Web Stack</span>
                        HTML &bull; CSS &bull; JavaScript
                      </div>
                      <div className="p-2 rounded bg-slate-900/60 border border-slate-800 text-slate-300">
                        <span className="text-emerald-400 font-bold block mb-0.5">Foundations</span>
                        DSA &bull; DBMS &bull; OS
                      </div>
                    </div>
                  </div>

                  <div className="p-3 rounded-xl bg-cyan-950/20 border border-cyan-500/20 flex items-center justify-between text-[11px]">
                    <span className="text-slate-300">Featured Application:</span>
                    <span className="text-cyan-300 font-bold">Lost &amp; Found Item Finder</span>
                  </div>
                </div>

                {/* Card Footer Bar */}
                <div className="bg-slate-900/70 px-4 py-2.5 border-t border-slate-800/80 flex items-center justify-between text-[11px] text-slate-400 font-mono">
                  <span className="flex items-center gap-1.5 text-slate-300">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                    SMVITM &bull; VTU Affiliated
                  </span>
                  <span className="text-emerald-400 font-semibold">Active &bull; Available</span>
                </div>
              </div>

            </TiltCard>

          </div>

        </div>
      </div>
    </section>
  );
};
