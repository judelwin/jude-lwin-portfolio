import React, { useState } from 'react';

const Nav: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (

    <nav className="bg-gradient-to-r from-violet-800 via-lavender-700 to-transparent p-4 fixed w-full top-0 z-10 shadow-lg">
      <div className="flex justify-between items-center w-full">


        {/* Desktop Navigation */}
        <ul className="hidden md:flex items-center space-x-10 drop-shadow-[0_0_4px_rgba(0,0,0,1.0)]">
          <li className="transition-transform transform hover:scale-105">
            <a href="#intro" className="text-white font-bold text-lg hover:text-violet-400 transition-colors duration-300">Home</a>
          </li>
          <li className="transition-transform transform hover:scale-105">
            <a href="#about" className="text-white font-bold text-lg hover:text-violet-400 transition-colors duration-300">About Me</a>
          </li>
          <li className="transition-transform transform hover:scale-105">
            <a href="#projects" className="text-white font-bold text-lg hover:text-violet-400 transition-colors duration-300">Projects</a>
          </li>
        </ul>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden text-white text-3xl"
          onClick={() => setIsOpen(!isOpen)}
        >
          ☰
        </button>

        {/* Social Icons (Always Visible) */}
        <div className="flex items-center space-x-6 drop-shadow-[0_0_4px_rgba(0,0,0,1.0)] social-icons-container">
          <a href="https://www.linkedin.com/in/jude-lwin/" target="_blank" rel="noopener noreferrer" className="transition-transform transform hover:scale-110">
            <i className="fab fa-linkedin text-white text-2xl"></i>
          </a>
          <a href="https://github.com/judelwin" target="_blank" rel="noopener noreferrer" className="transition-transform transform hover:scale-110">
            <i className="fab fa-github text-white text-2xl"></i>
          </a>
          <a href="/Jude_Lwin_Resume.pdf" target="_blank" rel="noopener noreferrer" className="transition-transform transform hover:scale-110">
            <i className="fas fa-file-alt text-white text-2xl"></i>
          </a>
        </div>
      </div>

      
      {isOpen && (
  <div className="absolute left-0 mt-2">
    <ul className="md:hidden flex flex-col items-start w-full bg-violet-800 pt-4 pb-2 shadow-lg rounded-b-lg">
      <li><a onClick={() => setIsOpen(false)} href="#intro" className="text-white font-bold text-lg hover:text-violet-400 py-2 px-4">Home</a></li>
      <li><a onClick={() => setIsOpen(false)} href="#about" className="text-white font-bold text-lg hover:text-violet-400 py-2 px-4">About Me</a></li>
      <li><a onClick={() => setIsOpen(false)}href="#projects" className="text-white font-bold text-lg hover:text-violet-400 py-2 px-4">Projects</a></li>
    </ul>
  </div>
)}





    </nav>
  );
};

export default Nav;
