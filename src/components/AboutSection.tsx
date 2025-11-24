import React from 'react';
import { motion } from 'framer-motion';
import { personalInfo } from '../data/personal';

const AboutSection: React.FC = () => {
  return (
    <section id="about" className="min-h-screen py-24 px-6 bg-black text-white flex items-center">
      <div className="max-w-4xl mx-auto w-full">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-12 bg-gradient-to-r from-white to-lavender-200 bg-clip-text text-transparent">
            About Me
          </h2>
          <p className="text-lg md:text-xl text-gray-300 leading-relaxed">
            {personalInfo.bio}
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;

