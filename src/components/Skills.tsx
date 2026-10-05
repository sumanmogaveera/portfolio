import React, { useState } from 'react';
import { 
  Code2, 
  Globe, 
  Database, 
  Cpu, 
  Wrench, 
  Sparkles, 
  Layers
} from 'lucide-react';
import { skillCategories } from '../data/portfolioData';

export const Skills: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  const getCategoryIcon = (iconName: string) => {
    switch (iconName) {
      case 'Code2': return <Code2 className="w-5 h-5 text-cyan-400" />;
      case 'Globe': return <Globe className="w-5 h-5 text-sky-400" />;
      case 'Database': return <Database className="w-5 h-5 text-blue-400" />;
      case 'Cpu': return <Cpu className="w-5 h-5 text-indigo-400" />;
      case 'Wrench': return <Wrench className="w-5 h-5 text-teal-400" />;
      default: return <Layers className="w-5 h-5 text-cyan-400" />;
    }
  };

  const filteredCategories = selectedCategory === 'all'
    ? skillCategories
    : skillCategories.filter(cat => cat.title.toLowerCase().includes(selectedCategory.toLowerCase()));

  return (
    <section id="skills" className="py-24 relative overflow-hidden bg-slate-950/40 border-y border-slate-800/60">
      
      {/* Background glow */}
      <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-cyan-500/5 blur-[140px] rounded-full pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-xs font-mono font-medium">
            <Sparkles className="w-3.5 h-3.5" />
            <span>TECHNICAL PROFICIENCY</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Skills &amp;{' '}
            <span className="gradient-text-cyan">Technical Competencies</span>
          </h2>
          <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
            Honest and grounded assessment of technical capabilities acquired through 2 years of Computer Science coursework, lab sessions, and independent projects.
          </p>
        </div>

        {/* Filter Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          <button
            onClick={() => setSelectedCategory('all')}
            className={`px-4 py-2 rounded-xl text-xs font-medium transition-all ${
              selectedCategory === 'all'
                ? 'bg-cyan-500/20 text-cyan-300 border border-cyan-500/40 shadow-sm shadow-cyan-500/10'
                : 'bg-slate-900/60 text-slate-400 hover:text-slate-200 border border-slate-800 hover:bg-slate-800/50'
            }`}
          >
            All Competencies
          </button>
          {skillCategories.map((category) => (
            <button
              key={category.title}
              onClick={() => setSelectedCategory(category.title)}
              className={`px-4 py-2 rounded-xl text-xs font-medium transition-all ${
                selectedCategory === category.title
                  ? 'bg-cyan-500/20 text-cyan-300 border border-cyan-500/40 shadow-sm shadow-cyan-500/10'
                  : 'bg-slate-900/60 text-slate-400 hover:text-slate-200 border border-slate-800 hover:bg-slate-800/50'
              }`}
            >
              {category.title}
            </button>
          ))}
        </div>

        {/* Skill Category Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredCategories.map((category) => (
            <div
              key={category.title}
              className="glass-card glass-card-hover rounded-2xl p-6 border border-slate-800/80 bg-slate-900/40 flex flex-col justify-between text-left relative group"
            >
              <div className="space-y-4">
                {/* Category Header */}
                <div className="flex items-center gap-3 pb-3 border-b border-slate-800">
                  <div className="w-10 h-10 rounded-xl bg-slate-800/80 border border-slate-700/60 flex items-center justify-center">
                    {getCategoryIcon(category.icon)}
                  </div>
                  <div>
                    <h3 className="text-base font-bold text-white group-hover:text-cyan-300 transition-colors">
                      {category.title}
                    </h3>
                    <p className="text-[11px] text-slate-400 line-clamp-1">
                      {category.description}
                    </p>
                  </div>
                </div>

                {/* Individual Skill Items */}
                <div className="space-y-4 pt-1">
                  {category.skills.map((skill) => (
                    <div key={skill.name} className="space-y-1.5">
                      <div className="flex items-center justify-between text-xs">
                        <span className="font-semibold text-slate-200 font-mono flex items-center gap-1.5">
                          {skill.name}
                        </span>
                        <span className={`text-[10px] font-mono px-2 py-0.5 rounded-full border ${
                          skill.level === 'Core Focus'
                            ? 'bg-cyan-500/10 text-cyan-400 border-cyan-500/30'
                            : skill.level === 'Proficient'
                            ? 'bg-blue-500/10 text-blue-400 border-blue-500/30'
                            : skill.level === 'Working Knowledge'
                            ? 'bg-indigo-500/10 text-indigo-400 border-indigo-500/30'
                            : 'bg-slate-700/30 text-slate-300 border-slate-700'
                        }`}>
                          {skill.level}
                        </span>
                      </div>

                      {/* Clean realistic progress indicator */}
                      <div className="w-full h-1.5 bg-slate-800 rounded-full overflow-hidden">
                        <div
                          className="h-full bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full transition-all duration-500"
                          style={{ width: `${skill.percentage}%` }}
                        ></div>
                      </div>

                      <p className="text-[11px] text-slate-400 leading-tight">
                        {skill.experience}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Bottom tag */}
              <div className="pt-4 mt-4 border-t border-slate-800/60 flex items-center justify-between text-[11px] text-slate-400 font-mono">
                <span>{category.skills.length} core topics</span>
                <span className="text-cyan-400/80">Active in labs</span>
              </div>
            </div>
          ))}
        </div>

        {/* Realism Notice Banner */}
        <div className="mt-12 p-4 rounded-xl glass-card border border-slate-800/80 max-w-2xl mx-auto flex items-center gap-3 text-left">
          <div className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse flex-shrink-0"></div>
          <p className="text-xs text-slate-400">
            <strong className="text-slate-300">Self-Assessment Standard:</strong> Proficiency ratings reflect active college lab coursework, coding problem sets, and practical software implementations.
          </p>
        </div>

      </div>
    </section>
  );
};
