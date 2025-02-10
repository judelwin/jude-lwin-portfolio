import React from 'react';
import { motion } from 'framer-motion';
import { FaJava, FaPython, FaJs, FaCogs, FaReact, FaDatabase } from 'react-icons/fa'; // Example icons
import { SiTypescript, SiFirebase, SiGit, SiLinux, SiRust, SiR } from 'react-icons/si'; // More icons

const skills = [
  { name: 'Java', icon: <FaJava className="icon-size text-orange-500" /> },
  { name: 'Python', icon: <FaPython className="icon-size text-yellow-500" /> },
  { name: 'JavaScript', icon: <FaJs className="icon-size text-yellow-300" /> },
  { name: 'C', icon: <FaCogs className="icon-size text-blue-500" /> },
  { name: 'TypeScript', icon: <SiTypescript className="icon-size text-blue-600" /> },
  { name: 'React', icon: <FaReact className="icon-size text-cyan-500" /> },
  { name: 'SQL', icon: <FaDatabase className="icon-size text-green-600" /> },
  { name: 'Rust', icon: <SiRust className="icon-size text-orange-600" /> },
  { name: 'R', icon: <SiR className="icon-size text-blue-700" /> },
  { name: 'Firebase', icon: <SiFirebase className="icon-size text-orange-400" /> },
  { name: 'Git', icon: <SiGit className="icon-size text-gray-600" /> },
  { name: 'Linux', icon: <SiLinux className="icon-size text-black" /> },
];

const AboutMeSection: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-b from-[#D1C1F2] to-[#BCA4E3] text-black p-12 pt-20">
      <h2 className="text-4xl font-bold mb-4 ">About Me</h2>
      <p className="text-center max-w-2xl pb-16">
      Hi, I’m Jude Lwin, a Computer Science and Mathematics student at the University of Maryland. Right now, I’m especially interested in the applications of mathematics and statistics in machine learning!

Aside from that, I love seeing my code come to life on the screen, so I have experience in full-stack web and app development. When I’m not doing computer science things, you’ll probably find me eating, sleeping, or playing video games with friends!
      </p>
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-4xl font-bold mb-8">Skills & Technologies</h2>
        <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-8 justify-center">
          {skills.map((skill, index) => (
            <div key={index} className="flex flex-col items-center">
              <div className="p-4 bg-white rounded-full shadow-lg">
                {skill.icon}
              </div>
              <span className="mt-2 text-lg">{skill.name}</span>
            </div>
          ))}
        </div>
      </div>
      {/* Ramen credit at the bottom */}
      
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
