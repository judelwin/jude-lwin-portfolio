import React from 'react';
import { motion } from 'framer-motion';

const IntroSection: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-b from-lavender to-violet px-4">
      <motion.h1
        className="text-5xl font-bold text-center"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        Hi, I'm Jude!
      </motion.h1>
      <motion.p
        className="text-xl mt-4 text-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.5 }}
      >
        Learn more about me and my projects below.
      </motion.p>

      <motion.button
        className="mt-8 px-6 py-3 bg-white text-black font-semibold rounded-lg shadow-lg hover:bg-violet hover:text-white"
        whileHover={{ scale: 1.1 }}
        onClick={() => {
          const projectsSection = document.getElementById("about");
          if (projectsSection) {
            projectsSection.scrollIntoView({ behavior: 'smooth' });
          }
        }}
      >
        Scroll Down
      </motion.button>
    </div>
  );
};

export default IntroSection;
