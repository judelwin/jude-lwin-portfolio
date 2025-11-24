import React from 'react';
import { FaJava, FaPython, FaJs, FaReact, FaDatabase } from 'react-icons/fa';
import { SiTypescript, SiFirebase, SiGit, SiLinux, SiRust, SiR, SiCplusplus, SiGo, SiNodedotjs, SiExpress, SiFlask, SiAmazon, SiDocker, SiPostgresql, SiMongodb, SiPandas } from 'react-icons/si';
import CIcon from '../assets/c-icon.png';
import OcamlIcon from '../assets/ocaml-icon.png';

export interface Skill {
  name: string;
  icon: React.ReactNode;
  category: 'language' | 'framework' | 'tool' | 'other';
}

export const skills: Skill[] = [
  { name: 'Python', icon: <FaPython className="w-6 h-6 text-yellow-500" />, category: 'language' },
  { name: 'C++', icon: <SiCplusplus className="w-6 h-6 text-blue-500" />, category: 'language' },
  { name: 'Java', icon: <FaJava className="w-6 h-6 text-orange-500" />, category: 'language' },
  { name: 'TypeScript', icon: <SiTypescript className="w-6 h-6 text-blue-600" />, category: 'language' },
  { name: 'JavaScript', icon: <FaJs className="w-6 h-6 text-yellow-300" />, category: 'language' },
  { name: 'C', icon: <img src={CIcon} alt="C" className="w-6 h-6" />, category: 'language' },
  { name: 'Rust', icon: <SiRust className="w-6 h-6 text-orange-600" />, category: 'language' },
  { name: 'OCaml', icon: <img src={OcamlIcon} alt="OCaml" className="w-6 h-6" />, category: 'language' },
  { name: 'Go', icon: <SiGo className="w-6 h-6 text-cyan-400" />, category: 'language' },
  { name: 'SQL', icon: <FaDatabase className="w-6 h-6 text-green-600" />, category: 'language' },
  { name: 'R', icon: <SiR className="w-6 h-6 text-blue-700" />, category: 'language' },
  { name: 'Scikit-Learn', icon: <FaPython className="w-6 h-6 text-orange-400" />, category: 'framework' },
  { name: 'Pandas', icon: <SiPandas className="w-6 h-6 text-blue-400" />, category: 'framework' },
  { name: 'FastAPI', icon: <FaPython className="w-6 h-6 text-teal-400" />, category: 'framework' },
  { name: 'Flask', icon: <SiFlask className="w-6 h-6 text-gray-300" />, category: 'framework' },
  { name: 'React', icon: <FaReact className="w-6 h-6 text-cyan-500" />, category: 'framework' },
  { name: 'Node.js', icon: <SiNodedotjs className="w-6 h-6 text-green-500" />, category: 'framework' },
  { name: 'Express', icon: <SiExpress className="w-6 h-6 text-gray-400" />, category: 'framework' },
  { name: 'Firebase', icon: <SiFirebase className="w-6 h-6 text-orange-500" />, category: 'framework' },
  { name: 'Git', icon: <SiGit className="w-6 h-6 text-gray-600" />, category: 'tool' },
  { name: 'AWS', icon: <SiAmazon className="w-6 h-6 text-orange-400" />, category: 'tool' },
  { name: 'Docker', icon: <SiDocker className="w-6 h-6 text-blue-500" />, category: 'tool' },
  { name: 'PostgreSQL', icon: <SiPostgresql className="w-6 h-6 text-blue-600" />, category: 'tool' },
  { name: 'Snowflake', icon: <FaDatabase className="w-6 h-6 text-blue-400" />, category: 'tool' },
  { name: 'MongoDB', icon: <SiMongodb className="w-6 h-6 text-green-500" />, category: 'tool' },
  { name: 'Linux', icon: <SiLinux className="w-6 h-6 text-black" />, category: 'tool' },
];

export const skillCategories = {
  language: 'Languages',
  framework: 'Frameworks & Libraries',
  tool: 'Tools & Technologies',
  other: 'Other',
};

