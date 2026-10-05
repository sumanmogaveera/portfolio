import { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Skills } from './components/Skills';
import { Projects } from './components/Projects';
import { Journey } from './components/Journey';
import { Education } from './components/Education';
import { Certifications } from './components/Certifications';
import { GithubSection } from './components/GithubSection';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { ResumeModal } from './components/ResumeModal';
import { InteractiveBackground } from './components/InteractiveBackground';

export function App() {
  const [resumeOpen, setResumeOpen] = useState(false);

  return (
    <div className="min-h-screen bg-[#06080e] text-slate-200 antialiased relative selection:bg-cyan-500/20 selection:text-cyan-300">
      
      {/* Interactive 3D Developer Environment Background Layer */}
      <InteractiveBackground />

      {/* Sticky Navigation Bar */}
      <Navbar onResumeClick={() => setResumeOpen(true)} />

      {/* Main Content Area */}
      <main className="relative z-10">
        {/* Hero Section */}
        <Hero onResumeClick={() => setResumeOpen(true)} />

        {/* About Section */}
        <About />

        {/* Technical Skills Section */}
        <Skills />

        {/* Featured Projects Section */}
        <Projects />

        {/* Experience & Learning Journey Timeline */}
        <Journey />

        {/* Education Section */}
        <Education />

        {/* Certifications Section */}
        <Certifications />

        {/* GitHub & Developer Activity Section */}
        <GithubSection />

        {/* Contact Section */}
        <Contact />
      </main>

      {/* Footer */}
      <Footer />

      {/* Interactive Resume Modal */}
      <ResumeModal
        isOpen={resumeOpen}
        onClose={() => setResumeOpen(false)}
      />

    </div>
  );
}

export default App;
