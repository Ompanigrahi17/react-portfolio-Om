import React from 'react';
import { EXPERTISE } from '../constants/index.js';
import { motion } from 'framer-motion';
import aiIcon from '../assets/aiml.png'; // Adjust the path and name as needed

const Expertise = () => {
  return (
    <div className='border-b border-neutral-900 pb-4 lg:mb-35'>
      <div className="flex items-center justify-center my-20">
        <img 
          src={aiIcon} 
          alt="AI/ML Icon" 
          className="w-8 h-8 mr-2" // Adjust size as needed
        />
        <motion.h2 className="text-4xl">
          Expertise
        </motion.h2>
      </div>
      
      <div className="grid gap-8 lg:grid-cols-2">
        {EXPERTISE.map((expertise, index) => (
          <motion.div
            key={index}
            className='bg-neutral-800 p-6 rounded-2xl shadow-lg'
            whileHover={{ 
              translateY: '-5px', 
              boxShadow: '0 4px 30px rgba(200, 150, 255, 0.7)', // Purple shadow on hover
            }}
            transition={{ 
              type: 'spring', // Use spring for a more natural feel
              stiffness: 300, // Controls the spring's stiffness
              damping: 15, // Controls the bounce effect
              duration: 0.3 // Set duration for smoothness
            }}
          >
            <div className="mb-4">
              <h6 className='text-2xl font-bold text-left text-purple-700'>
                {expertise.role}
              </h6>
            </div>
            <p className='text-neutral-400 mb-4 text-left'>{expertise.description}</p>

            {/* Skills Section */}
            <div className="mb-2 text-left">
              <span className="text-white font-bold">Skills:</span>
            </div>
            <ul className="list-disc list-inside pl-6 space-y-0 text-white text-left">
              {expertise.technologies.map((tech, index) => (
                <li key={index}>
                  {tech}
                </li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Expertise;