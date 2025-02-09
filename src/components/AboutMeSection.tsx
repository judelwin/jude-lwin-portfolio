import React from 'react';
import { motion } from 'framer-motion';


const AboutMeSection: React.FC = () => {
  return (
    <div className="h-screen flex flex-col items-center justify-center bg-gradient-to-b from-[#D1C1F2] to-[#BCA4E3] text-black px-4">
      <h2 className="text-4xl font-bold mb-4 ">About Me</h2>
      <p className="text-center max-w-2xl">
      Hi, I’m Jude Lwin—a Computer Science and Mathematics student passionate about software engineering, statistics, and finance. I love building full-stack applications, exploring data-driven systems, and solving complex problems at the intersection of these fields. Outside of tech, I enjoy playing video games, going to the gym, and trying new foods.
      </p>

      <motion.button
        className="mt-8 px-6 py-3 bg-white text-black font-semibold rounded-lg shadow-lg hover:bg-violet hover:text-white"
        whileHover={{ scale: 1.1 }}
        onClick={() => {
          const projectsSection = document.getElementById("projects");
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

export default AboutMeSection;
