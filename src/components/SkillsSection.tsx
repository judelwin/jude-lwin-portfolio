import React from 'react';
import { FaJava, FaPython, FaJs, FaCogs, FaReact, FaDatabase } from 'react-icons/fa'; // Example icons
import { SiTypescript, SiFirebase, SiGit, SiLinux, SiRust, SiR } from 'react-icons/si'; // More icons
import CIcon from '../assets/c-icon.png';  // C icon as PNG
import OcamlIcon from '../assets/ocaml-icon.png'; // OCaml icon as PNG
import { motion } from 'framer-motion';

const skills = [
  { name: 'Python', icon: <FaPython className="icon-size text-yellow-500" /> },
  { name: 'Java', icon: <FaJava className="icon-size text-orange-500" /> },
  { name: 'JavaScript', icon: <FaJs className="icon-size text-yellow-300" /> },
  { name: 'OCaml', icon: <img src={OcamlIcon} alt="OCaml" className="icon-size" /> },  // Use img tag for OCaml icon
  { name: 'C', icon: <img src={CIcon} alt="C" className="icon-size" /> }, // Use img tag for C icon
  { name: 'React', icon: <FaReact className="icon-size text-cyan-500" /> },
  { name: 'TypeScript', icon: <SiTypescript className="icon-size text-blue-600" /> },
  { name: 'SQL', icon: <FaDatabase className="icon-size text-green-600" /> },
  { name: 'Rust', icon: <SiRust className="icon-size text-orange-600" /> },
  { name: 'R', icon: <SiR className="icon-size text-blue-700" /> },
  { name: 'Git', icon: <SiGit className="icon-size text-gray-600" /> },
  { name: 'Linux', icon: <SiLinux className="icon-size text-black" /> },
];


const SkillsSection: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-b from-[#C7B3EB] to-[#BCA4E3] text-black p-12">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-4xl font-bold mb-8">Skills & Technologies</h2>
        <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-8 justify-center icon-grid ">
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
      {/* Ramen credit at the bottom */}
      {/* <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 text-center text-xs text-white opacity-70">
        <a href="https://www.flaticon.com/free-icons/ramen" title="ramen icon">
          Ramen icon created by Freepik - Flaticon
        </a>
      </div> */}
    </div>
  );
};

export default SkillsSection;
