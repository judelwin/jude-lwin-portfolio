import React from 'react';
import { motion } from 'framer-motion';
import IntroSection from './components/IntroSection';
import AboutMeSection from './components/AboutMeSection';
import ProjectsSection from './components/ProjectsSection';
import Nav from './components/Nav';

const App: React.FC = () => {
  return (
    
    <div className="bg-black text-white min-h-screen">
      <Nav />
      <div id="intro">
        
      </div>
      <IntroSection />
      <div id="about">
      
      </div>
      <AboutMeSection />
      <div id="intro">
      
      </div>
      <div id="projects">
      <ProjectsSection />
      </div>
      
    </div>
  );
};

export default App;
