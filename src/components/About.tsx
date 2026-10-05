import React from 'react';
import { 
  Terminal, 
  Layers, 
  Lightbulb, 
  Sparkles, 
  BookOpen, 
  Check 
} from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

export const About: React.FC = () => {
  return (
    <section id="about" className="py-24 relative overflow-hidden">
      {/* Decorative gradient blur */}
      <div className="absolute top-1/2 left-0 w-72 h-72 bg-blue-600/5 blur-[120px] rounded-full pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-xs font-mono font-medium">
            <Sparkles className="w-3.5 h-3.5" />
            <span>GET TO KNOW ME</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Engineering Foundations &amp;{' '}
            <span className="gradient-text-cyan">Problem-Solving Drive</span>
          </h2>
          <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
            A 3rd-year undergraduate committed to building practical software solutions, understanding core fundamentals, and turning theory into working systems.
          </p>
        </div>

        {/* 4 Realistic Key Statistics */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mb-16">
          {personalInfo.stats.map((stat, idx) => (
            <div 
              key={idx}
              className="glass-card glass-card-hover rounded-2xl p-6 text-center border border-slate-800/80 bg-slate-900/40 relative overflow-hidden group"
            >
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-cyan-500/30 to-transparent group-hover:via-cyan-400 transition-all"></div>
              <div className="text-3xl sm:text-4xl font-extrabold text-white font-mono tracking-tight text-cyan-400 mb-2">
                {stat.value}
              </div>
              <div className="text-sm font-semibold text-slate-200 mb-1">
                {stat.label}
              </div>
              <div className="text-xs text-slate-400 leading-snug">
                {stat.detail}
              </div>
            </div>
          ))}
        </div>

        {/* Detailed Narrative & Core Focus Pillars */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Narrative */}
          <div className="lg:col-span-7 glass-card rounded-2xl p-6 sm:p-8 border border-slate-800/80 space-y-5 text-left">
            <div className="flex items-center gap-3 pb-4 border-b border-slate-800">
              <div className="w-10 h-10 rounded-xl bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center text-cyan-400">
                <BookOpen className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-white">Who I Am</h3>
                <p className="text-xs text-slate-400 font-mono">B.E. Computer Science &bull; Karnataka, India</p>
              </div>
            </div>

            <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
              I am a 3rd-year Computer Science Engineering student with an eager appetite for software engineering, system architecture, and computational problem solving. My academic journey combines deep classroom rigor with practical hands-on building.
            </p>

            <p className="text-sm sm:text-base text-slate-400 leading-relaxed">
              Rather than merely memorizing concepts, I strive to understand how algorithms behave, how data travels across network sockets, how relational databases maintain consistency, and how modern interfaces delight users. My project portfolio reflects practical solutions—such as an automated QR and face-recognition attendance system for campus hostels.
            </p>

            <div className="pt-2">
              <h4 className="text-xs uppercase tracking-wider font-mono text-cyan-400 mb-3">
                Core Philosophies I Follow:
              </h4>
              <ul className="space-y-2.5 text-xs sm:text-sm text-slate-300">
                <li className="flex items-start gap-2.5">
                  <span className="p-0.5 rounded-full bg-cyan-500/20 text-cyan-400 mt-0.5">
                    <Check className="w-3.5 h-3.5" />
                  </span>
                  <span><strong>First-Principles Foundations:</strong> Solid command of data structures, algorithms, and DBMS rather than just framework hype.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="p-0.5 rounded-full bg-cyan-500/20 text-cyan-400 mt-0.5">
                    <Check className="w-3.5 h-3.5" />
                  </span>
                  <span><strong>Practical Utility:</strong> Writing software that solves real pain points encountered by students and institutions.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="p-0.5 rounded-full bg-cyan-500/20 text-cyan-400 mt-0.5">
                    <Check className="w-3.5 h-3.5" />
                  </span>
                  <span><strong>Consistent Growth:</strong> Regularly refining my problem-solving ability, Git hygiene, and clean architectural habits.</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Right Highlights & Areas of Excitement */}
          <div className="lg:col-span-5 space-y-4 text-left">
            
            <div className="glass-card rounded-2xl p-6 border border-slate-800/80 space-y-3">
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center text-blue-400">
                  <Terminal className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-white">Software Development</h4>
                  <p className="text-xs text-slate-400">Object-Oriented &amp; Procedural</p>
                </div>
              </div>
              <p className="text-xs text-slate-400 leading-relaxed">
                Writing structured, maintainable code in Java, Python, and C. Emphasizing clean class design, error handling, and algorithmic efficiency.
              </p>
            </div>

            <div className="glass-card rounded-2xl p-6 border border-slate-800/80 space-y-3">
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-xl bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center text-cyan-400">
                  <Layers className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-white">Database Engineering</h4>
                  <p className="text-xs text-slate-400">Relational &amp; Normalized Systems</p>
                </div>
              </div>
              <p className="text-xs text-slate-400 leading-relaxed">
                Designing normalized 3NF schemas in MySQL and SQLite, ensuring transactional integrity, index optimization, and reliable data persistence.
              </p>
            </div>

            <div className="glass-card rounded-2xl p-6 border border-slate-800/80 space-y-3">
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-xl bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center text-indigo-400">
                  <Lightbulb className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-white">Emerging Technologies</h4>
                  <p className="text-xs text-slate-400">Computer Vision &amp; Data Privacy</p>
                </div>
              </div>
              <p className="text-xs text-slate-400 leading-relaxed">
                Exploring computer vision (OpenCV face recognition) and machine learning approaches to preserve sensitive healthcare information.
              </p>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
