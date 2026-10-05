import React, { useState } from 'react';
import { 
  Award, 
  PlusCircle, 
  Sparkles, 
  FileCheck, 
  Clock 
} from 'lucide-react';
import { certifications } from '../data/portfolioData';

export const Certifications: React.FC = () => {
  const [showUploadModal, setShowUploadModal] = useState(false);

  return (
    <section id="certifications" className="py-24 relative overflow-hidden bg-slate-950/40 border-t border-slate-800/60">
      
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/3 w-96 h-96 bg-cyan-600/5 blur-[150px] rounded-full pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-xs font-mono font-medium">
            <Sparkles className="w-3.5 h-3.5" />
            <span>CREDENTIALS &amp; CERTIFICATIONS</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Certifications &amp;{' '}
            <span className="gradient-text-cyan">Skill Verifications</span>
          </h2>
          <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
            Standardized coursework, lab completions, and modular credential placeholders ready to attach official certification URLs and certificate IDs.
          </p>
        </div>

        {/* Certifications Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {certifications.map((cert) => (
            <div
              key={cert.id}
              className="glass-card glass-card-hover rounded-2xl p-6 border border-slate-800/80 bg-slate-900/40 flex flex-col justify-between text-left group relative"
            >
              <div className="space-y-4">
                {/* Header Icon & Status Pill */}
                <div className="flex items-center justify-between">
                  <div className="w-10 h-10 rounded-xl bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center text-cyan-400 group-hover:scale-105 transition-transform">
                    <Award className="w-5 h-5" />
                  </div>
                  <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[10px] font-mono bg-amber-500/10 text-amber-400 border border-amber-500/30">
                    <Clock className="w-3 h-3" />
                    <span>{cert.status}</span>
                  </span>
                </div>

                {/* Title & Description */}
                <div>
                  <h3 className="text-base font-bold text-white group-hover:text-cyan-300 transition-colors">
                    {cert.title}
                  </h3>
                  <p className="text-xs text-slate-400 font-mono mt-0.5">
                    {cert.issuer}
                  </p>
                  <p className="text-xs text-slate-300 mt-2 leading-relaxed">
                    {cert.description}
                  </p>
                </div>

                {/* Covered Skills */}
                <div className="pt-2">
                  <div className="text-[10px] font-mono uppercase tracking-wider text-slate-400 mb-1.5">
                    Verified Competencies:
                  </div>
                  <div className="flex flex-wrap gap-1">
                    {cert.skillsCovered.map((skill) => (
                      <span
                        key={skill}
                        className="px-2 py-0.5 rounded text-[10px] font-mono bg-slate-800 text-slate-300 border border-slate-700/60"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Action Button */}
              <div className="pt-4 mt-4 border-t border-slate-800/60">
                <button
                  onClick={() => setShowUploadModal(true)}
                  className="w-full flex items-center justify-center gap-1.5 py-2 rounded-xl text-xs font-semibold text-slate-300 hover:text-white bg-slate-800/60 hover:bg-slate-800 border border-slate-700/80 hover:border-cyan-500/40 transition-all cursor-pointer"
                >
                  <PlusCircle className="w-3.5 h-3.5 text-cyan-400" />
                  <span>Attach / View Certificate</span>
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Explanatory Note */}
        <div className="mt-8 text-center">
          <p className="text-xs text-slate-400 font-mono">
            * Note: These credential slots are structured templates. Formal certificates will be linked directly upon completion of external certifications.
          </p>
        </div>

      </div>

      {/* Attach Certificate Information Modal */}
      {showUploadModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md">
          <div className="w-full max-w-md glass-card rounded-2xl border border-slate-700 bg-[#0c121e] p-6 text-left space-y-4 shadow-2xl">
            <div className="flex items-center justify-between pb-3 border-b border-slate-800">
              <div className="flex items-center gap-2 text-cyan-400 font-bold text-sm font-mono">
                <FileCheck className="w-4 h-4" />
                <span>Certificate Integration Guide</span>
              </div>
              <button
                onClick={() => setShowUploadModal(false)}
                className="text-slate-400 hover:text-white text-xs font-mono px-2 py-1 rounded bg-slate-800 border border-slate-700"
              >
                Close
              </button>
            </div>

            <p className="text-xs text-slate-300 leading-relaxed">
              This portfolio is built with realistic placeholders. To connect your actual certificates from NPTEL, Coursera, HackerRank, or Oracle:
            </p>

            <div className="p-3 rounded-xl bg-slate-900/90 border border-slate-800 text-xs font-mono text-slate-300 space-y-1.5">
              <p className="text-cyan-400"># In src/data/portfolioData.ts:</p>
              <p className="text-slate-400">status: 'Verified',</p>
              <p className="text-slate-400">certificateUrl: 'https://...',</p>
              <p className="text-slate-400">credentialId: 'VTU-2025-XXXX'</p>
            </div>

            <button
              onClick={() => setShowUploadModal(false)}
              className="w-full py-2.5 rounded-xl text-xs font-semibold text-white bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 transition-all cursor-pointer"
            >
              Understood
            </button>
          </div>
        </div>
      )}
    </section>
  );
};
