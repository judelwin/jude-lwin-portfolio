import React from 'react';
import { motion } from 'framer-motion';

const AboutMeSection: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-b from-[#D1C1F2] to-[#C7B3EB] text-black p-12 pt-[15vh] pb-[15vh]">
      <h2 className="text-4xl font-bold mb-4 ">About Me</h2>
      <p className="text-center max-w-2xl pb-16">
        Hi, I’m Jude Lwin, a Computer Science and Mathematics student at the University of Maryland. Right now, I’m especially interested in the applications of mathematics and statistics in machine learning!

        Aside from that, I love seeing my code come to life on the screen, so I have experience in full-stack web and app development. When I’m not doing computer science things, you’ll probably find me eating, sleeping, or playing video games with friends!
      </p>
      
      <motion.button
        className="mt-8 px-6 py-3 bg-white text-black font-semibold rounded-lg shadow-lg hover:bg-violet hover:text-white"
        whileHover={{ scale: 1.1 }}
        onClick={() => {
          const projectsSection = document.getElementById("skills");
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
