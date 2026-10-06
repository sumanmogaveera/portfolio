import React from 'react';
import { X, Printer, MapPin, Mail, Phone } from 'lucide-react';
import { personalInfo, educationInfo } from '../data/portfolioData';
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
              &bull; Official Student Resume
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
          
          {/* Resume Header */}
          <div className="text-center space-y-1.5 border-b border-slate-800 pb-4">
            <h1 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight uppercase">
              {personalInfo.name}
            </h1>
            <p className="text-xs sm:text-sm font-semibold text-cyan-400 font-mono">
              Computer Science &amp; Engineering Student
            </p>
            <div className="flex flex-wrap items-center justify-center gap-x-4 gap-y-1.5 text-xs text-slate-400 pt-1">
              <span className="flex items-center gap-1">
                <MapPin className="w-3 h-3 text-cyan-400" />
                {personalInfo.location}
              </span>
              <span className="flex items-center gap-1">
                <Phone className="w-3 h-3 text-cyan-400" />
                +91 9019950693
              </span>
              <span className="flex items-center gap-1">
                <Mail className="w-3 h-3 text-cyan-400" />
                {personalInfo.email}
              </span>
              <span className="flex items-center gap-1">
                <LinkedinIcon className="w-3 h-3 text-cyan-400" />
                linkedin.com/in/suman-mogaveera-409b1432a
              </span>
              <span className="flex items-center gap-1">
                <GithubIcon className="w-3 h-3 text-cyan-400" />
                github.com/sumanmogaveera
              </span>
            </div>
          </div>

          {/* Career Objective */}
          <div className="space-y-1.5">
            <h2 className="text-xs font-mono font-bold uppercase tracking-wider text-cyan-400 border-b border-slate-800 pb-1">
              CAREER OBJECTIVE
            </h2>
            <p className="text-xs text-slate-300 leading-relaxed">
              Motivated third-year Computer Science Engineering student with a strong foundation in Java, C, Python, SQL, Data Structures, DBMS, and Web Development. Interested in software development, cybersecurity, and building practical real-world applications. Seeking an opportunity to apply my technical skills, gain industry experience, and contribute to meaningful software projects.
            </p>
          </div>

          {/* Education */}
          <div className="space-y-3">
            <h2 className="text-xs font-mono font-bold uppercase tracking-wider text-cyan-400 border-b border-slate-800 pb-1">
              EDUCATION
            </h2>
            
            <div className="space-y-2 text-xs">
              <div className="flex justify-between items-start">
                <div>
                  <strong className="text-white block font-semibold">Bachelor of Engineering – Computer Science and Engineering</strong>
                  <span className="text-slate-400">{educationInfo.institution}</span>
                </div>
                <div className="text-right font-mono text-cyan-400">
                  CGPA: 8.5 | 2024 – Present
                </div>
              </div>

              <div className="flex justify-between items-start pt-1 border-t border-slate-900">
                <div>
                  <strong className="text-white block font-semibold">{educationInfo.puc.course}</strong>
                  <span className="text-slate-400">{educationInfo.puc.college}</span>
                </div>
                <div className="text-right font-mono text-cyan-400">
                  Percentage: {educationInfo.puc.score}
                </div>
              </div>

              <div className="flex justify-between items-start pt-1 border-t border-slate-900">
                <div>
                  <strong className="text-white block font-semibold">{educationInfo.sslc.course}</strong>
                  <span className="text-slate-400">{educationInfo.sslc.school}</span>
                </div>
                <div className="text-right font-mono text-cyan-400">
                  Percentage: {educationInfo.sslc.score}
                </div>
              </div>
            </div>
          </div>

          {/* Technical Skills */}
          <div className="space-y-2">
            <h2 className="text-xs font-mono font-bold uppercase tracking-wider text-cyan-400 border-b border-slate-800 pb-1">
              TECHNICAL SKILLS
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-slate-300">
              <div><strong className="text-white">Programming Languages:</strong> Java, C, Python</div>
              <div><strong className="text-white">Web Technologies:</strong> HTML, CSS, JavaScript, PHP</div>
              <div><strong className="text-white">Databases:</strong> MySQL, SQL</div>
              <div><strong className="text-white">Core Computer Science:</strong> Data Structures &amp; Algorithms, DBMS, Operating Systems, OOP</div>
              <div><strong className="text-white">Frameworks:</strong> Flask</div>
              <div><strong className="text-white">Tools:</strong> VS Code, Eclipse, Git, GitHub</div>
            </div>
          </div>

          {/* Projects */}
          <div className="space-y-3">
            <h2 className="text-xs font-mono font-bold uppercase tracking-wider text-cyan-400 border-b border-slate-800 pb-1">
              PROJECTS
            </h2>

            <div className="space-y-2 text-xs text-slate-300">
              <div>
                <div className="flex justify-between font-semibold text-white">
                  <span>Lost &amp; Found Item Management System</span>
                  <span className="text-[11px] font-mono text-emerald-400">Status: Completed</span>
                </div>
                <ul className="list-disc list-inside space-y-0.5 text-slate-400 text-[11px] pt-1">
                  <li>Developed a web-based platform for reporting, searching, and recovering lost items.</li>
                  <li>Implemented functionality for users to post lost and found item details.</li>
                  <li>Designed a simple and user-friendly interface to help users find and recover belongings.</li>
                  <li>Focused on making the process of connecting lost items with their owners easier and more efficient.</li>
                </ul>
              </div>

              <div>
                <div className="flex justify-between font-semibold text-white pt-1">
                  <span>Privacy-Preserving Framework for Sensitive Medical Data</span>
                  <span className="text-[11px] font-mono text-cyan-400">Status: Currently Working</span>
                </div>
                <ul className="list-disc list-inside space-y-0.5 text-slate-400 text-[11px] pt-1">
                  <li>Developing a privacy-preserving framework for detecting and protecting sensitive information in multimodal medical data.</li>
                  <li>Exploring techniques for sensitive information detection, anonymization, and privacy protection.</li>
                  <li>Working toward secure handling and processing of medical information while reducing privacy risks.</li>
                </ul>
              </div>

              <div>
                <div className="flex justify-between font-semibold text-white pt-1">
                  <span>Smart Hostel Attendance Management System</span>
                  <span className="text-[11px] font-mono text-cyan-400">Status: Currently Working</span>
                </div>
                <ul className="list-disc list-inside space-y-0.5 text-slate-400 text-[11px] pt-1">
                  <li>Developing a web-based hostel attendance management system using Python, Flask, and SQLite.</li>
                  <li>Implementing student registration, login, attendance recording, and dashboard functionality.</li>
                  <li>Working on QR-based attendance and face-recognition-based attendance.</li>
                  <li>Implementing attendance percentage calculation and student attendance management.</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Technical Interests & Strengths Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-1 border-t border-slate-800">
            <div className="space-y-1.5">
              <h3 className="text-xs font-mono font-bold uppercase tracking-wider text-cyan-400">
                TECHNICAL INTERESTS
              </h3>
              <ul className="grid grid-cols-1 gap-1 text-xs text-slate-300">
                <li>&bull; Software Development</li>
                <li>&bull; Data Structures &amp; Algorithms</li>
                <li>&bull; Web Development</li>
                <li>&bull; Artificial Intelligence</li>
                <li>&bull; Cybersecurity &amp; Cryptography</li>
                <li>&bull; Database Management</li>
              </ul>
            </div>

            <div className="space-y-1.5">
              <h3 className="text-xs font-mono font-bold uppercase tracking-wider text-cyan-400">
                STRENGTHS
              </h3>
              <ul className="grid grid-cols-1 gap-1 text-xs text-slate-300">
                <li>&bull; Problem Solving</li>
                <li>&bull; Quick Learner</li>
                <li>&bull; Teamwork</li>
                <li>&bull; Adaptability</li>
                <li>&bull; Willingness to Learn</li>
                <li>&bull; Communication Skills</li>
              </ul>
            </div>
          </div>

        </div>

      </div>
    </div>
  );
};
