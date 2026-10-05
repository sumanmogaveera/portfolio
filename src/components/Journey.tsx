import React from 'react';
import { 
  Milestone, 
  Calendar, 
  Sparkles, 
  CheckCircle2, 
  Code2, 
  Database, 
  Globe, 
  Rocket 
} from 'lucide-react';
import { journeyTimeline } from '../data/portfolioData';

export const Journey: React.FC = () => {
  const getStepIcon = (index: number) => {
    switch (index) {
      case 0:
        return <Rocket className="w-5 h-5 text-cyan-400" />;
      case 1:
        return <Database className="w-5 h-5 text-blue-400" />;
      case 2:
        return <Globe className="w-5 h-5 text-sky-400" />;
      case 3:
        return <Code2 className="w-5 h-5 text-indigo-400" />;
      default:
        return <Milestone className="w-5 h-5 text-cyan-400" />;
    }
  };

  return (
    <section id="journey" className="py-24 relative overflow-hidden bg-slate-950/30 border-y border-slate-800/60">
      
      {/* Background glow */}
      <div className="absolute top-1/2 left-10 w-80 h-80 bg-blue-600/5 blur-[120px] rounded-full pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-xs font-mono font-medium">
            <Sparkles className="w-3.5 h-3.5" />
            <span>PROGRESSION &amp; GROWTH</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Experience &amp;{' '}
            <span className="gradient-text-cyan">Learning Journey</span>
          </h2>
          <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
            The chronological progression of my computer science education, from core fundamentals to applied database and real-world system implementations.
          </p>
        </div>

        {/* Timeline Container */}
        <div className="relative max-w-4xl mx-auto">
          
          {/* Vertical Connecting Line */}
          <div className="absolute left-4 sm:left-1/2 top-4 bottom-4 -translate-x-1/2 w-0.5 bg-gradient-to-b from-cyan-500/50 via-blue-500/30 to-slate-800 hidden sm:block"></div>

          <div className="space-y-12">
            {journeyTimeline.map((item, index) => {
              const isEven = index % 2 === 0;

              return (
                <div 
                  key={index}
                  className={`relative flex flex-col sm:flex-row items-start ${
                    isEven ? 'sm:flex-row-reverse' : ''
                  } gap-6 group`}
                >
                  {/* Central Node Badge (Desktop) */}
                  <div className="hidden sm:flex absolute left-1/2 -translate-x-1/2 w-10 h-10 rounded-full bg-slate-900 border-2 border-cyan-500/50 group-hover:border-cyan-400 group-hover:scale-110 items-center justify-center transition-all shadow-md shadow-cyan-500/20 z-10">
                    {getStepIcon(index)}
                  </div>

                  {/* Content Card */}
                  <div className="w-full sm:w-[calc(50%-2rem)] text-left">
                    <div className="glass-card glass-card-hover rounded-2xl p-6 border border-slate-800/80 bg-slate-900/40 relative">
                      
                      {/* Period Badge */}
                      <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-slate-800/80 text-[11px] font-mono text-cyan-400 border border-slate-700/80 mb-3">
                        <Calendar className="w-3 h-3" />
                        <span>{item.period}</span>
                      </div>

                      <h3 className="text-lg font-bold text-white mb-1 group-hover:text-cyan-300 transition-colors">
                        {item.title}
                      </h3>
                      
                      <div className="text-xs font-semibold text-slate-400 font-mono mb-3">
                        {item.role}
                      </div>

                      <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-4">
                        {item.description}
                      </p>

                      {/* Highlights */}
                      <div className="space-y-1.5 pt-3 border-t border-slate-800/80 mb-4">
                        {item.highlights.map((highlight, hIdx) => (
                          <div key={hIdx} className="flex items-start gap-2 text-xs text-slate-400">
                            <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400 mt-0.5 flex-shrink-0" />
                            <span>{highlight}</span>
                          </div>
                        ))}
                      </div>

                      {/* Tech Skills Chips */}
                      <div className="flex flex-wrap gap-1.5 pt-2">
                        {item.skills.map((skill) => (
                          <span
                            key={skill}
                            className="px-2 py-0.5 rounded text-[11px] font-mono bg-slate-800 text-slate-300 border border-slate-700"
                          >
                            {skill}
                          </span>
                        ))}
                      </div>

                    </div>
                  </div>

                  {/* Empty Spacer Column for Desktop */}
                  <div className="hidden sm:block w-[calc(50%-2rem)]"></div>

                </div>
              );
            })}
          </div>

        </div>

      </div>
    </section>
  );
};
