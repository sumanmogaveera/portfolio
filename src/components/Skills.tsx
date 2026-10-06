import React, { useState } from 'react';
import { 
  Code2, 
  Globe, 
  Database, 
  Cpu, 
  Wrench, 
  Sparkles, 
  Layers,
  Network
} from 'lucide-react';
import { skillCategories } from '../data/portfolioData';

interface EcoNode {
  id: string;
  name: string;
  category: string;
  level: string;
  detail: string;
  icon: string;
}

export const Skills: React.FC = () => {
  const [viewMode, setViewMode] = useState<'ecosystem' | 'categories'>('ecosystem');
  const [activeNode, setActiveNode] = useState<EcoNode | null>(null);

  const ecoNodes: EcoNode[] = [
    { id: 'java', name: 'Java', category: 'Programming', level: 'Core Focus', detail: 'OOP Principles, Collections, Lab Projects & Algorithms', icon: '☕' },
    { id: 'python', name: 'Python', category: 'Programming', level: 'Proficient', detail: 'Scripting, Flask APIs, OpenCV & Automation', icon: '🐍' },
    { id: 'c', name: 'C', category: 'Programming', level: 'Proficient', detail: 'Pointers, Memory Management, System Data Structures', icon: '⚙️' },
    { id: 'js', name: 'JavaScript', category: 'Web Stack', level: 'Working Knowledge', detail: 'ES6+ Syntax, DOM Manipulation, Async APIs', icon: '⚡' },
    { id: 'html', name: 'HTML5', category: 'Web Stack', level: 'Core Focus', detail: 'Semantic Document Architecture & Accessibility', icon: '🌐' },
    { id: 'css', name: 'CSS3', category: 'Web Stack', level: 'Proficient', detail: 'Flexbox, Grid Layouts, Animations & Responsive Design', icon: '🎨' },
    { id: 'mysql', name: 'MySQL', category: 'Databases', level: 'Proficient', detail: 'Normalized 3NF Schemas, Complex SQL & Indexing', icon: '🐬' },
    { id: 'sqlite', name: 'SQLite', category: 'Databases', level: 'Proficient', detail: 'Lightweight Application Storage & Embedded Schemas', icon: '📁' },
    { id: 'flask', name: 'Flask', category: 'Backend Framework', level: 'Proficient', detail: 'Python Microservices, RESTful Endpoints & Sessions', icon: '🧪' },
    { id: 'git', name: 'Git', category: 'Developer Tools', level: 'Proficient', detail: 'Branching, Commit Staging, Merging & Repository Hygiene', icon: '🌿' },
    { id: 'github', name: 'GitHub', category: 'Developer Tools', level: 'Proficient', detail: 'Remote Hosting, Releases & Project Collaboration', icon: '🐙' },
    { id: 'dsa', name: 'DSA', category: 'CS Fundamentals', level: 'Core Focus', detail: 'Arrays, LinkedLists, Trees, Graphs, Sorting & Complexity', icon: '🧠' },
    { id: 'dbms', name: 'DBMS', category: 'CS Fundamentals', level: 'Core Focus', detail: 'ER Diagrams, Relational Algebra & ACID Transactions', icon: '🗄️' },
  ];

  return (
    <section id="skills" className="py-24 relative overflow-hidden bg-slate-950/40 border-y border-slate-800/60">
      
      {/* Background ambient glow */}
      <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-cyan-500/5 blur-[140px] rounded-full pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-xs font-mono font-medium">
            <Sparkles className="w-3.5 h-3.5" />
            <span>TECHNOLOGY ARCHITECTURE</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Interconnected Technology{' '}
            <span className="gradient-text-cyan">Ecosystem</span>
          </h2>
          <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
            Represented as an interconnected software engineering architecture, spanning programming languages, web standards, relational databases, and core computer science fundamentals.
          </p>
        </div>

        {/* View Mode Toggle */}
        <div className="flex items-center justify-center gap-2 mb-12">
          <button
            onClick={() => setViewMode('ecosystem')}
            className={`flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs font-semibold transition-all ${
              viewMode === 'ecosystem'
                ? 'bg-cyan-500/20 text-cyan-300 border border-cyan-500/40 shadow-sm shadow-cyan-500/10'
                : 'bg-slate-900/60 text-slate-400 hover:text-slate-200 border border-slate-800 hover:bg-slate-800/50'
            }`}
          >
            <Network className="w-4 h-4 text-cyan-400" />
            <span>Architecture Ecosystem</span>
          </button>
          <button
            onClick={() => setViewMode('categories')}
            className={`flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs font-semibold transition-all ${
              viewMode === 'categories'
                ? 'bg-cyan-500/20 text-cyan-300 border border-cyan-500/40 shadow-sm shadow-cyan-500/10'
                : 'bg-slate-900/60 text-slate-400 hover:text-slate-200 border border-slate-800 hover:bg-slate-800/50'
            }`}
          >
            <Layers className="w-4 h-4 text-slate-400" />
            <span>Categorized View</span>
          </button>
        </div>

        {viewMode === 'ecosystem' ? (
          /* Interactive Technology Architecture Ecosystem View */
          <div className="space-y-8">
            <div className="relative glass-card rounded-3xl p-8 sm:p-12 border border-slate-800/80 bg-slate-900/40 text-center overflow-hidden">
              <div className="absolute inset-0 bg-grid-pattern opacity-25 pointer-events-none" />
              
              {/* Central Core Node */}
              <div className="relative z-10 inline-flex flex-col items-center justify-center p-6 rounded-2xl bg-gradient-to-br from-cyan-500/20 via-blue-600/20 to-slate-900 border border-cyan-500/40 shadow-2xl mb-12 group">
                <div className="w-12 h-12 rounded-xl bg-cyan-500/20 border border-cyan-400/40 flex items-center justify-center text-cyan-300 mb-2">
                  <Code2 className="w-6 h-6" />
                </div>
                <div className="text-sm font-extrabold text-white font-mono tracking-wider">
                  SOFTWARE DEVELOPMENT
                </div>
                <div className="text-[11px] text-cyan-300 font-mono mt-0.5">
                  Core Engineering Hub
                </div>
              </div>

              {/* Interconnected Technology Nodes Grid */}
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3.5 relative z-10">
                {ecoNodes.map((node) => {
                  const isActive = activeNode?.id === node.id;
                  return (
                    <div
                      key={node.id}
                      onMouseEnter={() => setActiveNode(node)}
                      className={`p-3.5 rounded-xl border transition-all cursor-pointer text-left relative group ${
                        isActive
                          ? 'bg-slate-800 border-cyan-400 text-white shadow-lg shadow-cyan-500/20 -translate-y-1'
                          : 'bg-slate-900/80 border-slate-800 hover:border-slate-700 text-slate-300 hover:bg-slate-850'
                      }`}
                    >
                      <div className="flex items-center justify-between mb-1.5">
                        <span className="text-base">{node.icon}</span>
                        <span className={`text-[9px] font-mono px-1.5 py-0.5 rounded border ${
                          node.level === 'Core Focus'
                            ? 'bg-cyan-500/10 text-cyan-400 border-cyan-500/30'
                            : 'bg-slate-800 text-slate-400 border-slate-700'
                        }`}>
                          {node.level}
                        </span>
                      </div>
                      <div className="font-mono font-bold text-xs text-white group-hover:text-cyan-300 transition-colors">
                        {node.name}
                      </div>
                      <div className="text-[10px] text-slate-400 font-mono mt-0.5">
                        {node.category}
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* Active Technology Node Architectural Specification Inspector Panel */}
              <div className="mt-8 p-5 rounded-2xl bg-slate-950/90 border border-slate-800 text-left relative z-10 transition-all">
                {activeNode ? (
                  <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 font-mono text-xs">
                    <div className="space-y-1">
                      <div className="flex items-center gap-2">
                        <span className="text-lg">{activeNode.icon}</span>
                        <span className="text-sm font-bold text-white">{activeNode.name}</span>
                        <span className="px-2 py-0.5 rounded bg-cyan-950/60 border border-cyan-800/40 text-cyan-300 text-[10px]">
                          {activeNode.category}
                        </span>
                      </div>
                      <p className="text-slate-300 text-xs">{activeNode.detail}</p>
                    </div>
                    <div className="px-3 py-1.5 rounded-lg bg-slate-900 border border-slate-800 text-slate-400 text-[11px] whitespace-nowrap">
                      Status: <span className="text-emerald-400 font-semibold">{activeNode.level}</span>
                    </div>
                  </div>
                ) : (
                  <div className="text-center text-xs text-slate-500 font-mono py-1">
                    Hover over any technology node to view detailed architecture specifications &amp; lab applications.
                  </div>
                )}
              </div>
            </div>
          </div>
        ) : (
          /* Categorized View Grid */
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {skillCategories.map((category) => (
              <div
                key={category.title}
                className="glass-card glass-card-hover rounded-2xl p-6 border border-slate-800/80 bg-slate-900/40 flex flex-col justify-between text-left"
              >
                <div className="space-y-4">
                  <div className="flex items-center gap-3 pb-3 border-b border-slate-800">
                    <div className="w-10 h-10 rounded-xl bg-slate-800/80 border border-slate-700/60 flex items-center justify-center">
                      {category.icon === 'Code2' && <Code2 className="w-5 h-5 text-cyan-400" />}
                      {category.icon === 'Globe' && <Globe className="w-5 h-5 text-sky-400" />}
                      {category.icon === 'Database' && <Database className="w-5 h-5 text-blue-400" />}
                      {category.icon === 'Cpu' && <Cpu className="w-5 h-5 text-indigo-400" />}
                      {category.icon === 'Wrench' && <Wrench className="w-5 h-5 text-teal-400" />}
                    </div>
                    <div>
                      <h3 className="text-base font-bold text-white">{category.title}</h3>
                      <p className="text-[11px] text-slate-400 line-clamp-1">{category.description}</p>
                    </div>
                  </div>

                  <div className="space-y-3.5 pt-1">
                    {category.skills.map((skill) => (
                      <div key={skill.name} className="space-y-1">
                        <div className="flex items-center justify-between text-xs">
                          <span className="font-semibold text-slate-200 font-mono">{skill.name}</span>
                          <span className="text-[10px] font-mono text-cyan-400">{skill.level}</span>
                        </div>
                        <p className="text-[11px] text-slate-400 leading-tight">{skill.experience}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

      </div>
    </section>
  );
};
