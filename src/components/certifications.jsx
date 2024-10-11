import React from 'react';
import { motion } from 'framer-motion';

const Certifications = () => {
  const certifications = [
    {
      title: "Azure Fundamentals (AZ-900)",
      issuer: "Microsoft",
      date: "Issued June 2023",
    },
    {
      title: "Azure AI Fundamentals (AI-900)",
      issuer: "Microsoft",
      date: "Issued June 2024",
    },
    {
      title: "Azure Data Engineer Associate (DP-203)",
      issuer: "Microsoft",
      date: "Issued July 2024",
    },
    {
      title: "Microsoft 365 Fundamentals (MS-900)",
      issuer: "Microsoft",
      date: "Issued July 2024",
    },
    {
      title: "Python",
      issuer: "HackerRank",
      date: "Issued April 2024",
    },
    {
      title: "SQL (Basic)",
      issuer: "HackerRank",
      date: "Issued April 2024",
    },
    {
      title: "SQL (Intermediate)",
      issuer: "HackerRank",
      date: "Issued April 2024",
    },
    {
      title: "SQL (Advanced)",
      issuer: "HackerRank",
      date: "Issued April 2024",
    },
  ];

  return (
    <div className='border-b border-neutral-900 pb-4 lg:mb-35'>
      <motion.h2 
        className="my-20 text-center text-4xl"
      >
        Certifications
      </motion.h2>
      
      <div className="grid gap-8 lg:grid-cols-2">
        {certifications.map((cert, index) => (
          <motion.div
            key={index}
            className='bg-neutral-800 p-6 rounded-lg shadow-lg transition-transform duration-300 ease-in-out transform hover:scale-105 hover:shadow-lg hover:shadow-purple-500'
          >
            <div className="mb-4">
              <h6 className='text-lg font-semibold'>
                {cert.title} - <span className='text-sm text-purple-500'>{cert.issuer}</span>
              </h6>
              <p className='text-neutral-400'>{cert.date}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Certifications;