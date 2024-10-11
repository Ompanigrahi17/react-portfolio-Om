import React, { useState, useEffect } from 'react';
import aboutImg from '../assets/abouti.png';
import { ABOUT_TEXT } from '../constants';
import { motion } from 'framer-motion';
import mongoIcon from '../assets/mongodb.svg';
import expressIcon from '../assets/express.svg';
import reactIcon from '../assets/react.svg';
import nodeIcon from '../assets/node.svg';
import coderImg from '../assets/coder.svg';

const About = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isClosing, setIsClosing] = useState(false);

  const handleOpen = () => {
    setIsOpen(true);
  };

  const handleClose = () => {
    setIsClosing(true);
    setTimeout(() => {
      setIsOpen(false);
      setIsClosing(false);
    }, 500);
  };

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [isOpen]);

  return (
    <div className="border-b border-neutral-900 pb-4 lg:mb-35">
      <h2 className="my-20 text-center text-4xl">About <span className="text-neutral-500">Me</span></h2>
      <div className="flex flex-wrap lg:flex-nowrap justify-center gap-10 lg:gap-16">
        {/* Image Section */}
        <motion.div 
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: -100 }}
          transition={{ duration: 0.8 }}
          className="w-full lg:w-1/2 lg:p-8"
        >
          <div className="flex items-center justify-center lg:justify-start">
            <img className="rounded-2xl mt-[-40px]" src={aboutImg} alt="about" />
          </div>
        </motion.div>

        {/* Text Section */}
        <motion.div 
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: 100 }}
          transition={{ duration: 0.8 }}
          className="w-full lg:w-1/2 lg:p-8"
        >
          <div className="flex flex-col justify-center lg:justify-start">
            <p className="my-2 max-w-xl py-6 font-light tracking-tight text-left text-justify">
              {ABOUT_TEXT}
            </p>
            <div className="flex justify-center lg:justify-start">
              <button 
                className="hidden lg:block bg-neutral-900 hover:bg-purple-900 active:bg-purple-900 text-purple-100 font-bold py-2 px-5 rounded hover:scale-110 active:scale-110 ease-in-out duration-300"
                onClick={handleOpen}
              >
                More
              </button>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Modal for More Information */}
      {isOpen && (
        <motion.div 
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="fixed inset-0 bg-neutral-700 bg-opacity-70 backdrop-blur-sm flex justify-center items-center z-50"
          onClick={handleClose} // Close modal when clicking outside
        >
          <motion.div 
            initial={{ opacity: 0, y: 100 }}
            animate={isClosing ? { opacity: 0, scale: 0 } : { opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="bg-black rounded-lg p-6 sm:p-10 w-[1118.7px] h-[700px] relative z-50 backdrop-filter backdrop-blur-md bg-opacity-30 custom-shadow" // Set modal dimensions
            onClick={(e) => e.stopPropagation()} // Prevent closing modal when clicking inside
          >
            {/* Close Button */}
            <button 
              onClick={handleClose}
              className="absolute top-4 right-4 w-10 h-10 bg-purple-700 hover:bg-purple-800 rounded-full flex items-center justify-center focus:outline-none close-button"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="white"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>

            {/* Modal Title */}
<h2 className="text-2xl font-bold text-purple-800 mb-2 text-left">
  ABOUT ME
</h2>

{/* Description and Skills */}
<div className="flex h-full">
  {/* Left Side: Text and Skills */}
  <div className="flex flex-col w-1/2 h-full p-0"> {/* Set to half of modal width and remove padding */}
    <p className="font-light tracking-tight mb-2 text-left"> {/* Remove extra margin */}
    I assist business owners and busy web developers in crafting innovative websites that align with their vision and captivate visitors. Utilizing the MERN stack, I leverage modern technologies and tools to create engaging and user-friendly web experiences that encourage long-lasting engagement.
    </p>

    {/* Skills List */}
    <div className="flex flex-wrap mb-2"> {/* Remove extra margin */}
      <div className="bg-neutral-900 text-purple-800 rounded-full px-3 py-1 m-1">HTML</div>
      <div className="bg-neutral-900 text-purple-800 rounded-full px-3 py-1 m-1">CSS</div>
      <div className="bg-neutral-900 text-purple-800 rounded-full px-3 py-1 m-1">JavaScript</div>
      <div className="bg-neutral-900 text-purple-800 rounded-full px-3 py-1 m-1">Node.js</div>
      <div className="bg-neutral-900 text-purple-800 rounded-full px-3 py-1 m-1">React</div>
      <div className="bg-neutral-900 text-purple-800 rounded-full px-3 py-1 m-1">Python</div>
      <div className="bg-neutral-900 text-purple-800 rounded-full px-3 py-1 m-1">Tailwind</div>
      <div className="bg-neutral-900 text-purple-800 rounded-full px-3 py-1 m-1">Figma</div>
      <div className="bg-neutral-900 text-purple-800 rounded-full px-3 py-1 m-1">MongoDB</div>
      <div className="bg-neutral-900 text-purple-800 rounded-full px-3 py-1 m-1">Git</div>
      <div className="bg-neutral-900 text-purple-800 rounded-full px-3 py-1 m-1">GitHub</div>
      <div className="bg-neutral-900 text-purple-800 rounded-full px-3 py-1 m-1">Docker</div>
      <div className="bg-neutral-900 text-purple-800 rounded-full px-3 py-1 m-1">SQL</div>
      <div className="bg-neutral-900 text-purple-800 rounded-full px-3 py-1 m-1">adobeXD</div>
      <div className="bg-neutral-900 text-purple-800 rounded-full px-3 py-1 m-1">Redux</div>
      <div className="bg-neutral-900 text-purple-800 rounded-full px-3 py-1 m-1">Express.js</div>
      <div className="bg-neutral-900 text-purple-800 rounded-full px-3 py-1 m-1">Terminal</div>
    </div>

    {/* MERN Stack Section */}
    <h2 className="text-2xl font-bold text-purple-800 mt-10 mb-8 text-left">MERN STACK</h2> {/* Remove extra margin */}
    <div className="flex justify-start mb-4"> {/* Align items to start */}
      {/* MongoDB */}
      <div className="relative group flex flex-col items-center mx-4">
        <img src={mongoIcon} alt="MongoDB" className="w-16 h-16 mb-2" />
        <div className="absolute -top-8 transition-opacity duration-300 opacity-0 group-hover:opacity-100">
          <span className="bg-[#4DB33D] text-white text-sm font-bold rounded px-2 py-1">MongoDB</span>
        </div>
        <span className="text-2xl font-bold" style={{ color: '#4DB33D' }}>M</span>
      </div>

      {/* Express */}
      <div className="relative group flex flex-col items-center mx-4">
        <img src={expressIcon} alt="Express.JS" className="w-16 h-16 mb-2" />
        <div className="absolute -top-8 transition-opacity duration-300 opacity-0 group-hover:opacity-100">
          <span className="bg-white text-black text-sm font-bold rounded px-2 py-1">Express.JS</span>
        </div>
        <span className="text-2xl font-bold" style={{ color: '#FFFFFF' }}>E</span>
      </div>

      {/* React */}
      <div className="relative group flex flex-col items-center mx-4">
        <img src={reactIcon} alt="React.JS" className="w-16 h-16 mb-2" />
        <div className="absolute -top-8 transition-opacity duration-300 opacity-0 group-hover:opacity-100">
          <span className="bg-[#61DAFB] text-black text-sm font-bold rounded px-2 py-1">React.JS</span>
        </div>
        <span className="text-2xl font-bold" style={{ color: '#61DAFB' }}>R</span>
      </div>

      {/* Node.js */}
      <div className="relative group flex flex-col items-center mx-4">
        <img src={nodeIcon} alt="Node.JS" className="w-16 h-16 mb-2" />
        <div className="absolute -top-8 transition-opacity duration-300 opacity-0 group-hover:opacity-100">
          <span className="bg-[#8CC84B] text-white text-sm font-bold rounded px-2 py-1">Node.JS</span>
        </div>
        <span className="text-2xl font-bold" style={{ color: '#8CC84B' }}>N</span>
      </div>
    </div>
  </div>

  {/* Right Side: Image */}
  <div className="flex justify-center items-center w-1/2 h-full"> {/* Set to half of modal width */}
    <img src={coderImg} alt="Coder" className="h-full w-full rounded-full -mt-20" /> {/* Make the image full size */}
  </div>
</div>
          </motion.div>
        </motion.div>
      )}
    </div>
  );
};

export default About;