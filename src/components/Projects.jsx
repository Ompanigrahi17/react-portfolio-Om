import React from 'react';
import { PROJECTS } from '../constants';
import { motion } from 'framer-motion';

const Projects = () => {
  return (
    <div className='border-b border-neutral-900 pb-4'>
      <motion.h2 
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 0.8 }}
        className="my-20 text-center text-4xl"
      >
        Projects
      </motion.h2>
      <div>
        {PROJECTS.map((project, index) => (
          <div key={index} className='mb-8 flex flex-wrap'>
            <motion.div 
              whileInView={{ opacity: 1, x: 0 }}
              initial={{ opacity: 0, x: -100 }}
              transition={{ duration: 1 }}
              className='w-full lg:w-1/4 mb-4 lg:mb-0 flex justify-start'
            >
              <img 
                src={project.image} 
                width={150} // Set fixed width
                height={150} // Set fixed height
                alt={project.title}
                className='rounded object-contain' // Changed to object-contain
              />
            </motion.div>
            <motion.div 
              whileInView={{ opacity: 1, x: 0 }}
              initial={{ opacity: 0, x: 100 }}
              transition={{ duration: 1 }}
              className='w-full lg:w-3/4'
            >
              {/* Title and Description now aligned to the left */}
              <h6 className='font-semibold mb-1 text-left'> 
                {project.title} - <span className='text-sm text-purple-100'>{project.company}</span>
              </h6>
              <p className='text-neutral-400 mb-2 text-left'>{project.description}</p>
              
              {/* Skills section aligned in the same line */}
              <div className='flex flex-wrap'>
                {project.technologies.map((tech, index) => (
                  <span key={index} className='mr-2 mb-1 rounded bg-neutral-900 px-2 py-1 text-sm font-medium text-purple-800'>
                    {tech}
                  </span>
                ))}
              </div>
            </motion.div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;