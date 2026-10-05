import React from 'react';
import { X, Printer, MapPin, Mail } from 'lucide-react';
import { personalInfo, educationInfo, projects } from '../data/portfolioData';
import { GithubIcon, LinkedinIcon } from './Icons';

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ResumeModal: React.FC<ResumeModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/85 backdrop-blur-md animate-in fade-in duration-200">
      <div 
        className="relative w-full max-w-4xl max-h-[92vh] overflow-y-auto glass-card rounded-2xl border border-slate-700 bg-[#090d16] shadow-2xl p-6 sm:p-10 text-left space-y-6"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Controls Header */}
        <div className="flex items-center justify-between pb-4 border-b border-slate-800 print:hidden">
          <div className="flex items-center gap-2">
            <span className="text-xs font-mono font-semibold text-cyan-400 bg-cyan-500/10 border border-cyan-500/20 px-2.5 py-1 rounded-full">
              Curriculum Vitae Preview
            </span>
            <span className="text-xs text-slate-400 hidden sm:inline">
              &bull; ATS-Formatted Student Resume
            </span>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handlePrint}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium text-slate-200 bg-slate-800 hover:bg-slate-700 border border-slate-700 transition-colors cursor-pointer"
            >
              <Printer className="w-3.5 h-3.5 text-cyan-400" />
              <span>Print / Save as PDF</span>
            </button>
            <button
              onClick={onClose}
              className="p-1.5 rounded-lg text-slate-400 hover:text-white bg-slate-800 hover:bg-slate-700 transition-colors"
              aria-label="Close resume preview"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Resume Content Sheet */}
        <div className="bg-slate-950 p-6 sm:p-8 rounded-xl border border-slate-800/80 font-sans space-y-6 text-slate-200 print:bg-white print:text-black">
          
          {/* Header */}
          <div className="text-center space-y-1.5 border-b border-slate-800 pb-4">
            <h1 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
              {personalInfo.name}
            </h1>
            <p className="text-xs sm:text-sm font-medium text-cyan-400 font-mono">
              3rd-Year Computer Science Engineering Student &bull; Aspiring Software Developer
            </p>
            <div className="flex flex-wrap items-center justify-center gap-4 text-xs text-slate-400 pt-1">
              <span className="flex items-center gap-1">
                <MapPin className="w-3 h-3 text-cyan-400" />
                {personalInfo.location}
              </span>
              <span className="flex items-center gap-1">
                <Mail className="w-3 h-3 text-cyan-400" />
                {personalInfo.email}
              </span>
              <span className="flex items-center gap-1">
                <GithubIcon className="w-3 h-3 text-cyan-400" />
                github.com/sumanmogaveera79
              </span>
              <span className="flex items-center gap-1">
                <LinkedinIcon className="w-3 h-3 text-cyan-400" />
                linkedin.com/in/suman-mogaveera
              </span>
            </div>
          </div>

          {/* Education */}
          <div className="space-y-2">
            <h2 className="text-xs font-mono font-bold uppercase tracking-wider text-cyan-400 border-b border-slate-800 pb-1">
              Education
            </h2>
            <div className="flex justify-between items-start text-xs sm:text-sm">
              <div>
                <strong className="text-white block font-semibold">{educationInfo.degree} - Computer Science &amp; Engineering</strong>
                <span className="text-slate-400 text-xs">{educationInfo.institution} ({educationInfo.affiliation})</span>
              </div>
              <div className="text-right text-xs font-mono text-slate-400">
                <span className="block font-medium text-cyan-400">2024 – 2028</span>
                <span>Karnataka, India</span>
              </div>
            </div>
            <p className="text-xs text-slate-400 pt-1">
              <strong>Key Coursework:</strong> {educationInfo.coursework.join(', ')}.
            </p>
          </div>

          {/* Technical Skills */}
          <div className="space-y-2">
            <h2 className="text-xs font-mono font-bold uppercase tracking-wider text-cyan-400 border-b border-slate-800 pb-1">
              Technical Competencies
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-slate-300">
              <div>
                <strong className="text-white">Programming Languages:</strong> Java (OOP &amp; Collections), C, Python
              </div>
              <div>
                <strong className="text-white">Web Development:</strong> HTML5, CSS3, JavaScript (ES6+), Responsive UI
              </div>
              <div>
                <strong className="text-white">Database Management:</strong> MySQL, SQLite, Normalization, Query Optimization
              </div>
              <div>
                <strong className="text-white">CS Fundamentals:</strong> Data Structures, Algorithms, DBMS, Operating Systems
              </div>
              <div className="sm:col-span-2">
                <strong className="text-white">Developer Tools:</strong> Git, GitHub, VS Code, Eclipse, Command Line
              </div>
            </div>
          </div>

          {/* Projects */}
          <div className="space-y-3">
            <h2 className="text-xs font-mono font-bold uppercase tracking-wider text-cyan-400 border-b border-slate-800 pb-1">
              Selected Technical Projects
            </h2>

            {projects.map((proj) => (
              <div key={proj.id} className="space-y-1 text-xs">
                <div className="flex justify-between items-baseline">
                  <strong className="text-white font-semibold text-xs sm:text-sm">
                    {proj.title}
                  </strong>
                  <span className="text-[11px] font-mono text-cyan-400">
                    {proj.technologies.slice(0, 4).join(' &bull; ')}
                  </span>
                </div>
                <p className="text-slate-300 text-xs leading-relaxed">
                  {proj.solution}
                </p>
                <ul className="list-disc list-inside space-y-0.5 text-slate-400 text-[11px]">
                  {proj.keyFeatures.slice(0, 2).map((feat, i) => (
                    <li key={i}>{feat}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Experience / Learning Milestones */}
          <div className="space-y-2">
            <h2 className="text-xs font-mono font-bold uppercase tracking-wider text-cyan-400 border-b border-slate-800 pb-1">
              Academic &amp; Practical Training
            </h2>
            <div className="text-xs text-slate-300 space-y-1">
              <p>
                &bull; <strong>Departmental Coding &amp; Laboratory Practicals:</strong> Developed foundational implementations of core data structures (Trees, Queues, Stacks, Linked Lists) in C and Java.
              </p>
              <p>
                &bull; <strong>Relational Database Laboratory:</strong> Formulated ER models and 3NF normalized tables with stored queries and constraints in MySQL.
              </p>
            </div>
          </div>

        </div>

      </div>
    </div>
  );
};
