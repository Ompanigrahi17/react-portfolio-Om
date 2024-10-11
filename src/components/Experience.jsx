import React from 'react';
import { EXPERIENCE } from '../constants/index.js';
import { motion } from 'framer-motion';

const Experience = () => {
  return (
    <div className='border-b border-neutral-900 pb-4 lg:mb-35'>
      <motion.h2 
        className="my-20 text-center text-4xl"
      >
        Experience
      </motion.h2>
      
      <div className="grid gap-8 lg:grid-cols-2">
        {EXPERIENCE.map((experience, index) => (
          <motion.div
            key={index}
            className='bg-neutral-800 p-6 rounded-lg shadow-lg transition-transform duration-300 ease-in-out transform hover:scale-105'
            // Make sure to remove style={{ willChange: 'transform' }} for now
          >
            <div className="mb-4">
              <p className='text-sm text-neutral-400'>{experience.year}</p>
              <h6 className='text-lg font-semibold'>
                {experience.role} - <span className='text-sm text-purple-00'>{experience.company}</span>
              </h6>
            </div>
            <p className='text-neutral-400 mb-4'>{experience.description}</p>
            
            <div className="flex flex-wrap justify-center">
              {experience.technologies.map((tech, index) => (
                <span 
                  key={index}
                  className='mr-2 mb-2 rounded bg-neutral-900 px-2 py-1 text-sm font-medium text-purple-800'
                >
                  {tech}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Experience;