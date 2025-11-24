import React from 'react';
import { motion } from 'framer-motion';
import { interests } from '../data/interests';

const InterestsSection: React.FC = () => {
  return (
    <section id="interests" className="min-h-screen py-24 px-6 bg-gradient-to-b from-black via-gray-900 to-black text-white">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-white to-lavender-200 bg-clip-text text-transparent">
            Interests
          </h2>
          <p className="text-gray-400 text-lg">What drives and inspires me</p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6">
          {interests.map((interest, index) => (
            <motion.div
              key={interest.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-lg p-6 hover:border-violet-500/50 transition-all duration-300 group"
            >
              <h3 className="text-xl font-semibold mb-3 text-lavender-200 group-hover:text-lavender-100 transition-colors">
                {interest.title}
              </h3>
              <p className="text-gray-400 leading-relaxed">{interest.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default InterestsSection;

