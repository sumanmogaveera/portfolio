import React from 'react';
import { 
  GraduationCap, 
  MapPin, 
  BookOpen, 
  Award, 
  CheckCircle2, 
  Building2, 
  Sparkles 
} from 'lucide-react';
import { educationInfo } from '../data/portfolioData';

export const Education: React.FC = () => {
  return (
    <section id="education" className="py-24 relative overflow-hidden">
      
      {/* Background glow */}
      <div className="absolute top-1/2 right-10 w-72 h-72 bg-cyan-600/5 blur-[120px] rounded-full pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-xs font-mono font-medium">
            <Sparkles className="w-3.5 h-3.5" />
            <span>ACADEMIC BACKGROUND</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Education &amp;{' '}
            <span className="gradient-text-cyan">Academic Profile</span>
          </h2>
          <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
            Formal engineering curriculum focused on theoretical rigor, mathematical logic, and practical laboratory exercises.
          </p>
        </div>

        {/* Education Hero Card */}
        <div className="max-w-4xl mx-auto">
          <div className="glass-card rounded-2xl border border-slate-800/90 bg-slate-900/40 p-6 sm:p-8 lg:p-10 relative overflow-hidden group hover:border-slate-700 transition-all text-left">
            
            {/* Top gradient glow bar */}
            <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-cyan-500 via-blue-600 to-indigo-600"></div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
              
              {/* Left Column: Degree & Institution Meta */}
              <div className="lg:col-span-6 space-y-5">
                
                {/* Degree & Year */}
                <div className="space-y-2">
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 text-cyan-400 border border-cyan-500/30 text-xs font-mono font-medium">
                    <GraduationCap className="w-4 h-4" />
                    <span>{educationInfo.year}</span>
                  </div>

                  <h3 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
                    {educationInfo.degree}
                  </h3>
                  
                  <p className="text-base font-semibold text-cyan-300">
                    {educationInfo.major}
                  </p>
                </div>

                {/* College Info */}
                <div className="space-y-2 pt-2 border-t border-slate-800/80">
                  <div className="flex items-start gap-2.5 text-slate-300">
                    <Building2 className="w-5 h-5 text-cyan-400 mt-0.5 flex-shrink-0" />
                    <div>
                      <div className="font-semibold text-white text-sm">
                        {educationInfo.institution}
                      </div>
                      <div className="text-xs text-slate-400 mt-0.5">
                        {educationInfo.affiliation}
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center gap-2 text-xs text-slate-400 pl-7">
                    <MapPin className="w-3.5 h-3.5 text-cyan-400" />
                    <span>{educationInfo.location}</span>
                  </div>
                </div>

                {/* Academic Highlights */}
                <div className="space-y-2 pt-3 border-t border-slate-800/80">
                  <div className="text-xs uppercase tracking-wider font-mono text-slate-400 font-semibold">
                    Academic Focus Areas:
                  </div>
                  <ul className="space-y-2">
                    {educationInfo.highlights.map((highlight, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-xs text-slate-300">
                        <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400 mt-0.5 flex-shrink-0" />
                        <span>{highlight}</span>
                      </li>
                    ))}
                  </ul>
                </div>

              </div>

              {/* Right Column: Key Coursework Matrix */}
              <div className="lg:col-span-6 space-y-4">
                
                <div className="p-5 rounded-xl bg-slate-950/70 border border-slate-800/80 space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-xs uppercase tracking-wider font-mono text-cyan-400 font-bold flex items-center gap-1.5">
                      <BookOpen className="w-4 h-4" />
                      Relevant Coursework Completed &amp; Ongoing:
                    </span>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 pt-1">
                    {educationInfo.coursework.map((course, cIdx) => (
                      <div
                        key={cIdx}
                        className="p-2.5 rounded-lg bg-slate-900/80 border border-slate-800/80 text-xs text-slate-300 font-medium flex items-center gap-2 hover:border-cyan-500/30 transition-colors"
                      >
                        <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 flex-shrink-0"></span>
                        <span className="line-clamp-1">{course}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Practical Laboratory Experience Card */}
                <div className="p-4 rounded-xl bg-gradient-to-br from-cyan-950/20 to-blue-950/20 border border-cyan-800/30 text-xs text-slate-300 space-y-1.5">
                  <div className="flex items-center gap-2 text-cyan-300 font-semibold font-mono">
                    <Award className="w-4 h-4" />
                    <span>Laboratory Rigor:</span>
                  </div>
                  <p className="text-slate-400 leading-relaxed text-[11px]">
                    Rigorous practical sessions involving C Data Structures laboratory experiments, Java Object-Oriented design exercises, and SQL relational schema implementations.
                  </p>
                </div>

              </div>

            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
