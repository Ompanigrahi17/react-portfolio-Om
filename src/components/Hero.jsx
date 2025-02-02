import React, { useEffect, useRef, useState } from 'react';
import { HERO_CONTENT } from '../constants';
import profilePic from "../assets/new.png";
import { motion } from "framer-motion";

// Animation variants for the container
const container = (delay) => ({
  hidden: { x: -100, opacity: 0 },
  visible: {
    x: 0,
    opacity: 1,
    transition: { duration: 0.5, delay: delay }
  }
});

// Hero component
const Hero = () => {
  const heroRef = useRef(null);
  const [displayText, setDisplayText] = useState(""); // State to hold the displayed text
  const phrases = ["Associate Cloud Devops Engineer @ SoftwareOne", "AI/ML Enthusiast"]; // Phrases to cycle through
  const typingSpeed = 80; // Speed of typing
  const deletingSpeed = 40; // Speed of deleting
  const pauseDuration = 300; // Pause duration before deleting

  useEffect(() => {
    if (heroRef.current) {
      heroRef.current.style.marginBottom = '200px'; // adjust the margin-bottom value as needed
    }

    let phraseIndex = 0; // Index for the current phrase
    let charIndex = 0; // Index for the current character in the phrase
    let isDeleting = false; // Flag to indicate if currently deleting
    let timer; // Timer reference

    const typeWriterEffect = () => {
      const currentPhrase = phrases[phraseIndex];

      if (!isDeleting) {
        // Typing phase
        setDisplayText(currentPhrase.substring(0, charIndex + 1));
        charIndex++;

        if (charIndex === currentPhrase.length) {
          isDeleting = true; // Move to deleting phase after typing
          timer = setTimeout(typeWriterEffect, pauseDuration); // Pause before deleting
        } else {
          timer = setTimeout(typeWriterEffect, typingSpeed); // Continue typing
        }
      } else {
        // Deleting phase
        setDisplayText(currentPhrase.substring(0, charIndex - 1)); // Remove last character
        charIndex--;

        if (charIndex < 0) {
          isDeleting = false; // Move to typing the next phrase
          phraseIndex = (phraseIndex + 1) % phrases.length; // Cycle to next phrase
          charIndex = 0; // Reset character index for new phrase
        }
        timer = setTimeout(typeWriterEffect, deletingSpeed); // Continue deleting
      }
    };

    typeWriterEffect(); // Start the typing effect

    // Cleanup the timer on component unmount
    return () => clearTimeout(timer);
  }, []);

  return (
    <div
      ref={heroRef}
      id="home"
      className="border-b border-neutral-900 pb-24 lg:mb-35 pt-48"  // Increased top padding
    >
      <div className="flex flex-wrap flex-col-reverse lg:flex-row">
        <div className="w-full lg:w-1/2">
          <div className="flex flex-col items-center lg:items-start"> {/* Changed items-start to items-center for mobile */}
            <motion.h1
              variants={container(0)}
              initial="hidden"
              animate="visible"
              className="pb-16 text-2xl font-bold tracking-tight lg:mt-20 lg:text-8xl text-center lg:text-left" // Added text-center for mobile
            >
              Greetings! I'm Om,
            </motion.h1>
            <motion.span
              variants={container(0.5)}
              initial="hidden"
              animate="visible"
              className="bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 bg-clip-text text-4xl font-bold tracking-tight text-transparent inline-flex items-center"
              style={{ minWidth: '300px', display: 'inline-block', minHeight: '40px' }} // Added display: inline-block
            >
              {displayText} {/* Display the typing effect here */}
              <span className="cursor" /> {/* Cursor element */}
            </motion.span>
            <motion.p
              variants={container(1)}
              initial="hidden"
              animate="visible"
              className="my-2 max-w-xl py-6 font-light tracking-tight text-center lg:text-left" // Added text-center for mobile
            >
              {HERO_CONTENT}
            </motion.p>
          </div>
        </div>
        <div className="w-full lg:w-1/2 lg:p-4 flex justify-center"> {/* Moved justify-center here for mobile alignment */}
          <motion.img
            initial={{ x: 100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 1, delay: 1.2 }}
            src={profilePic}
            alt="Om Panigrahi"
            className='rounded-full w-[500px] h-[540px] object-contain mt-[-40px]'
          />
        </div>
      </div>
      <style jsx>{`
        .cursor {
          display: inline-block;
          margin-left: 5px; /* Space between text and cursor */
          width: 4px; /* Width of the cursor */
          height: 30px; /* Height should match the text height */
          background-color: purple; /* Change cursor color to white */
          vertical-align: middle; /* Align cursor vertically in line with text */
          animation: blink 0.9s step-end infinite; /* Cursor blinking animation */
        }

        @keyframes blink {
          50% {
            opacity: 0; /* Cursor becomes invisible halfway through the animation */
          }
        }
      `}</style>
    </div>
  );
};

export default Hero;