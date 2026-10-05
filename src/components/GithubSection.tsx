import React, { useMemo } from 'react';
import { 
  GitFork, 
  FolderGit2, 
  ExternalLink, 
  Sparkles, 
  Code2, 
  Activity 
} from 'lucide-react';
import { githubProfile } from '../data/portfolioData';
import { GithubIcon } from './Icons';

export const GithubSection: React.FC = () => {
  // Generate realistic student contribution heatmap (52 weeks x 7 days)
  // Higher intensity on weekends and semester lab submission months
  const contributionGrid = useMemo(() => {
    const weeks = 50;
    const daysPerWeek = 7;
    const grid: number[][] = [];

    for (let w = 0; w < weeks; w++) {
      const week: number[] = [];
      for (let d = 0; d < daysPerWeek; d++) {
        // Pseudo-random but deterministic activity simulation
        const seed = (w * 7 + d * 13) % 100;
        let level = 0;
        // Semester lab periods (weeks 10-22 and 30-44) have higher commits
        const isLabSeason = (w >= 10 && w <= 22) || (w >= 30 && w <= 46);
        const isWeekend = d === 5 || d === 6;

        if (isLabSeason && seed > 40) {
          level = (seed % 4) + 1;
        } else if (isWeekend && seed > 50) {
          level = (seed % 3) + 1;
        } else if (seed > 75) {
          level = 1;
        }
        week.push(level);
      }
      grid.push(week);
    }
    return grid;
  }, []);

  const getCellColor = (level: number) => {
    switch (level) {
      case 1: return 'bg-cyan-950/80 border-cyan-800/40';
      case 2: return 'bg-cyan-800/60 border-cyan-600/40';
      case 3: return 'bg-cyan-600/70 border-cyan-400/50';
      case 4: return 'bg-cyan-400 border-cyan-300';
      default: return 'bg-slate-900/60 border-slate-800/40';
    }
  };

  return (
    <section id="github" className="py-24 relative overflow-hidden">
      
      {/* Background glow */}
      <div className="absolute top-1/2 right-1/4 w-80 h-80 bg-blue-600/5 blur-[130px] rounded-full pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-xs font-mono font-medium">
            <Sparkles className="w-3.5 h-3.5" />
            <span>DEVELOPER ACTIVITY</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            GitHub &amp;{' '}
            <span className="gradient-text-cyan">Coding Practice</span>
          </h2>
          <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
            Transparent view of code repository activity, language frequencies, and project versioning.
          </p>
        </div>

        {/* GitHub Main Container */}
        <div className="max-w-5xl mx-auto space-y-6">
          
          {/* Top Profile Summary Bar */}
          <div className="glass-card rounded-2xl p-6 sm:p-8 border border-slate-800/90 bg-slate-900/40 text-left">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-slate-800/80">
              
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-slate-800 to-slate-900 border border-slate-700/80 flex items-center justify-center text-white shadow-md">
                  <GithubIcon className="w-7 h-7 text-cyan-400" />
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <h3 className="text-xl font-bold text-white tracking-tight">
                      Suman Mogaveera
                    </h3>
                    <span className="text-xs font-mono text-cyan-400 bg-cyan-500/10 border border-cyan-500/20 px-2 py-0.5 rounded-full">
                      @{githubProfile.username}
                    </span>
                  </div>
                  <p className="text-xs text-slate-400 mt-1 font-mono">
                    Undergraduate Developer &bull; Karnataka, India
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <a
                  href={githubProfile.profileUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-semibold text-white bg-slate-800 hover:bg-slate-700 border border-slate-700 hover:border-cyan-500/40 transition-all"
                >
                  <GithubIcon className="w-4 h-4 text-cyan-400" />
                  <span>View GitHub Profile</span>
                  <ExternalLink className="w-3 h-3 text-slate-400" />
                </a>
              </div>

            </div>

            {/* Language Breakdown Bar */}
            <div className="py-6 border-b border-slate-800/80 space-y-3">
              <div className="flex items-center justify-between text-xs font-mono">
                <span className="text-slate-300 font-semibold flex items-center gap-1.5">
                  <Code2 className="w-4 h-4 text-cyan-400" />
                  Frequently Used Languages &amp; Stacks:
                </span>
                <span className="text-slate-500">Source: Academic &amp; Personal Repos</span>
              </div>

              {/* Progress stack bar */}
              <div className="h-3 w-full rounded-full overflow-hidden flex bg-slate-800">
                {githubProfile.primaryLanguages.map((lang) => (
                  <div
                    key={lang.name}
                    style={{
                      width: `${lang.percentage}%`,
                      backgroundColor: lang.color,
                    }}
                    title={`${lang.name}: ${lang.percentage}%`}
                    className="h-full transition-all"
                  />
                ))}
              </div>

              {/* Legend */}
              <div className="flex flex-wrap items-center gap-4 pt-1">
                {githubProfile.primaryLanguages.map((lang) => (
                  <div key={lang.name} className="flex items-center gap-1.5 text-xs text-slate-400 font-mono">
                    <span 
                      className="w-2.5 h-2.5 rounded-full inline-block"
                      style={{ backgroundColor: lang.color }}
                    ></span>
                    <span className="text-slate-200">{lang.name}</span>
                    <span className="text-slate-500">({lang.percentage}%)</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Contribution Activity Heatmap */}
            <div className="pt-6 space-y-3">
              <div className="flex items-center justify-between text-xs font-mono">
                <span className="text-slate-300 font-semibold flex items-center gap-1.5">
                  <Activity className="w-4 h-4 text-cyan-400" />
                  Annual Contribution Pattern (Simulation)
                </span>
                <span className="text-slate-500 text-[11px]">Lab practicals &bull; project commits</span>
              </div>

              {/* Heatmap Grid Container with horizontal scroll on small devices */}
              <div className="overflow-x-auto pb-2">
                <div className="inline-flex gap-1">
                  {contributionGrid.map((week, wIdx) => (
                    <div key={wIdx} className="flex flex-col gap-1">
                      {week.map((level, dIdx) => (
                        <div
                          key={dIdx}
                          className={`w-2.5 h-2.5 rounded-[2px] border ${getCellColor(level)}`}
                          title={`Activity level: ${level}`}
                        />
                      ))}
                    </div>
                  ))}
                </div>
              </div>

              {/* Heatmap Footer Legend */}
              <div className="flex items-center justify-between text-[11px] text-slate-400 font-mono pt-1">
                <span>Recent 50 Weeks</span>
                <div className="flex items-center gap-1.5">
                  <span>Less</span>
                  <div className="w-2.5 h-2.5 rounded-[2px] bg-slate-900 border border-slate-800"></div>
                  <div className="w-2.5 h-2.5 rounded-[2px] bg-cyan-950 border border-cyan-800"></div>
                  <div className="w-2.5 h-2.5 rounded-[2px] bg-cyan-800 border border-cyan-600"></div>
                  <div className="w-2.5 h-2.5 rounded-[2px] bg-cyan-400 border border-cyan-300"></div>
                  <span>More</span>
                </div>
              </div>
            </div>

          </div>

          {/* Pinned Repositories Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-left">
            {githubProfile.pinnedRepos.map((repo) => (
              <div
                key={repo.name}
                className="glass-card rounded-xl p-5 border border-slate-800 bg-slate-900/30 flex flex-col justify-between hover:border-slate-700 transition-colors"
              >
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2 text-cyan-400 text-xs font-mono font-bold">
                      <FolderGit2 className="w-4 h-4" />
                      <span className="text-white hover:text-cyan-300 transition-colors">{repo.name}</span>
                    </div>
                    <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-slate-800 text-slate-400 border border-slate-700">
                      Public
                    </span>
                  </div>
                  <p className="text-xs text-slate-400 leading-relaxed line-clamp-2">
                    {repo.description}
                  </p>
                </div>

                <div className="pt-4 mt-3 border-t border-slate-800/80 flex items-center justify-between text-xs font-mono text-slate-400">
                  <span className="flex items-center gap-1 text-slate-300">
                    <span className="w-2 h-2 rounded-full bg-cyan-400"></span>
                    {repo.language}
                  </span>
                  <div className="flex items-center gap-3">
                    <span className="flex items-center gap-1 hover:text-amber-400 transition-colors">
                      {repo.stars}
                    </span>
                    <span className="flex items-center gap-1">
                      <GitFork className="w-3 h-3" />
                      {repo.forks}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Realistic Disclaimer per prompt */}
          <div className="p-3.5 rounded-xl bg-slate-950/60 border border-slate-800/80 text-center">
            <p className="text-xs text-slate-500 font-mono">
              * Activity metrics and pinned cards represent academic coursework, lab assignments, and project repositories.
            </p>
          </div>

        </div>

      </div>
    </section>
  );
};
