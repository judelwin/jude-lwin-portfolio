import React from 'react';
import { Analytics } from '@vercel/analytics/react';
import Navigation from './components/Navigation';
import Hero from './components/Hero';
import AboutSection from './components/AboutSection';
import ExperienceSection from './components/ExperienceSection';
import SkillsSection from './components/SkillsSection';
import ProjectsSection from './components/ProjectsSection';

const App: React.FC = () => {
  return (
    <div className="bg-black text-white min-h-screen">
      <Navigation />
      <Hero />
      <SkillsSection />
      <ProjectsSection />
      <ExperienceSection />
      <AboutSection />
      <Analytics />
    </div>
  );
};

export default App;
