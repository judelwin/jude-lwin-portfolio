import React from 'react';
import { motion } from 'framer-motion';
import { experiences } from '../data/experiences';

const ExperienceSection: React.FC = () => {
  if (experiences.length === 0) {
    return null;
  }

  return (
    <section id="experience" className="min-h-screen py-24 px-6 bg-black text-white">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-white to-lavender-200 bg-clip-text text-transparent">
            Experience
          </h2>
          <p className="text-gray-400 text-lg">My professional journey</p>
        </motion.div>

        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <motion.div
              key={exp.id}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="relative pl-8 border-l-2 border-violet-500/30 hover:border-violet-500 transition-colors"
            >
              <div className="absolute -left-2 top-0 w-4 h-4 bg-violet-500 rounded-full" />
              <div className="bg-gray-800/30 backdrop-blur-sm border border-gray-700 rounded-lg p-6 hover:border-violet-500/50 transition-all duration-300">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-3">
                  <div>
                    <h3 className="text-xl font-semibold text-white">{exp.title}</h3>
                    <p className="text-lavender-200">{exp.company}</p>
                  </div>
                  <div className="text-sm text-gray-400 mt-2 md:mt-0">
                    {exp.startDate} - {exp.endDate}
                  </div>
                </div>
                {exp.location && (
                  <p className="text-sm text-gray-500 mb-4">{exp.location}</p>
                )}
                <ul className="space-y-2">
                  {exp.description.map((desc, i) => (
                    <li key={i} className="text-gray-300 flex items-start">
                      <span className="text-violet-500 mr-2">•</span>
                      <span>{desc}</span>
                    </li>
                  ))}
                </ul>
                {exp.technologies && exp.technologies.length > 0 && (
                  <div className="flex flex-wrap gap-2 mt-4">
                    {exp.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 bg-violet-500/20 text-violet-300 rounded-full text-xs"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;

