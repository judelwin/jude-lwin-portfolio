import React from 'react';
import { motion } from 'framer-motion';
import { skills, skillCategories } from '../data/skills';

const SkillsSection: React.FC = () => {
  const skillsByCategory = {
    language: skills.filter((s) => s.category === 'language'),
    framework: skills.filter((s) => s.category === 'framework'),
    tool: skills.filter((s) => s.category === 'tool'),
    other: skills.filter((s) => s.category === 'other'),
  };

  return (
    <section id="skills" className="min-h-screen py-24 px-6 bg-black text-white">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-white to-lavender-200 bg-clip-text text-transparent">
            Skills & Technologies
          </h2>
          <p className="text-gray-400 text-lg">Tools and technologies I work with</p>
        </motion.div>

        <div className="space-y-12">
          {Object.entries(skillsByCategory).map(([category, categorySkills]) => {
            if (categorySkills.length === 0) return null;
            return (
              <motion.div
                key={category}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.6 }}
              >
                <h3 className="text-xl font-semibold mb-6 text-lavender-200">
                  {skillCategories[category as keyof typeof skillCategories]}
                </h3>
                <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-8 gap-6">
                  {categorySkills.map((skill, index) => (
                    <motion.div
                      key={skill.name}
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, delay: index * 0.05 }}
                      className="flex flex-col items-center group"
                    >
                      <div className="w-16 h-16 bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-lg flex items-center justify-center mb-3 group-hover:border-violet-500/50 group-hover:bg-gray-800 transition-all duration-300">
                        {skill.icon}
                      </div>
                      <span className="text-sm text-gray-400 group-hover:text-gray-300 transition-colors text-center">
                        {skill.name}
                      </span>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
