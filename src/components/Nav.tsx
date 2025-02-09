import React from 'react';

const Nav: React.FC = () => {
  return (
    <nav className="bg-gradient-to-r from-violet-800 via-lavender-700 to-transparent p-4 fixed w-full top-0 z-10 shadow-lg">
      <ul className="drop-shadow-[0_0_4px_rgba(0,0,0,1.0)] flex items-center space-x-10">
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
      <div className="drop-shadow-[0_0_4px_rgba(0,0,0,1.0)] flex items-center justify-center absolute right-6 top-1/2 transform -translate-y-1/2 space-x-6">
        <a href="https://www.linkedin.com/in/jude-lwin/" target="_blank" rel="noopener noreferrer" className="transition-transform transform hover:scale-110">
          <i className="fab fa-linkedin text-white" style={{ fontSize: '24px' }}></i>
        </a>
        <a href="https://github.com/judelwin" target="_blank" rel="noopener noreferrer" className="transition-transform transform hover:scale-110">
          <i className="fab fa-github text-white" style={{ fontSize: '24px' }}></i>
        </a>
        <a href="\Jude_N_Lwin_Resume.pdf" target="_blank" rel="noopener noreferrer" className="transition-transform transform hover:scale-110">
          <i className="fas fa-file-alt text-white" style={{ fontSize: '24px' }}></i>
        </a>
      </div>
    </nav>
  );
};

export default Nav;
