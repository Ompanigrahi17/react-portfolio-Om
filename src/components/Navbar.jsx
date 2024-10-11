import React, { useState, useEffect, useRef } from 'react';
import { Menu, X } from 'lucide-react';
import logo from "../assets/kevinRushLogo.png";
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = () => {
  const [activeSection, setActiveSection] = useState('home');
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isGlassEffect, setIsGlassEffect] = useState(false);
  const [navbarHeight, setNavbarHeight] = useState(0);
  
  const navbarRef = useRef(null); // Ref for the navbar to calculate height

  const handleLogoClick = () => {
    window.location.reload();
  };

  const handleSectionClick = (section) => {
    setActiveSection(section);
    setIsMenuOpen(false);
    const sectionElement = document.getElementById(section);
    if (sectionElement) {
      sectionElement.scrollIntoView({ behavior: "smooth" });
    }
  };

  const toggleMenu = () => {
    setIsMenuOpen(prev => !prev);
  };

  const handleScroll = () => {
    const sections = ['home', 'about', 'expertise', 'technologies', 'experience', 'projects', 'certifications'];
    sections.forEach((section) => {
      const sectionElement = document.getElementById(section);
      if (sectionElement) {
        const rect = sectionElement.getBoundingClientRect();
        if (rect.top >= 0 && rect.top <= 150) {
          setActiveSection(section);
        }
      }
    });
    const homeSection = document.getElementById('home');
    if (homeSection) {
      const homeBottom = homeSection.getBoundingClientRect().bottom;
      setIsGlassEffect(homeBottom <= 0);
    }
  };

  useEffect(() => {
    // Update the navbar height when component mounts
    if (navbarRef.current) {
      setNavbarHeight(navbarRef.current.offsetHeight);
    }

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <nav ref={navbarRef} className={`fixed top-0 left-0 right-0 z-50 gap-8 flex items-center justify-between py-6 px-4 ${isGlassEffect ? 'glass-effect' : ''}`}>
      <div className="flex items-center">
        <img className="w-20 hover:opacity-50 transition duration-300 cursor-pointer" src={logo} alt="logo" onClick={handleLogoClick} />
      </div>
      
      {/* Desktop Nav Links */}
      <div className="flex-1 flex justify-center">
        <ul className="hidden md:flex flex-wrap items-center justify-center">
          {['home', 'about', 'expertise', 'technologies', 'experience', 'projects', 'certifications'].map(section => (
            <li key={section} className="mr-6 relative">
              <a 
                href={`#${section}`} 
                className={`text-purple-600 capitalize font-medium hover:text-purple-300 transition-all relative ${activeSection === section ? 'text-purple-300' : ''}`} 
                onClick={() => handleSectionClick(section)}
              >
                {section === 'home' ? 'Home' : section === 'technologies' ? 'Skills' : section.charAt(0).toUpperCase() + section.slice(1)}
              </a>
              <span 
                className={`absolute bottom-0 left-0 h-0.5 w-full bg-purple-600 transition-transform duration-300 ease-in-out transform ${activeSection === section ? 'scale-x-100' : 'scale-x-0'}`} 
              />
            </li>
          ))}
        </ul>
      </div>

      {/* Hamburger and Contact Me Button */}
      <div className="flex items-center">
        <button
          onClick={() => handleSectionClick('contact')}
          className="bg-purple-600 text-white px-4 py-2 rounded-lg font-medium transition duration-300 hover:bg-purple-700 hover:shadow-lg mr-4"
        >
          Contact Me
        </button>
        <motion.button 
          onClick={toggleMenu} 
          className="focus:outline-none md:hidden"
          animate={{ rotate: isMenuOpen ? 180 : 0 }} // Smooth rotation animation for menu button
          transition={{ duration: 0.3 }} // Duration of animation
        >
          {isMenuOpen ? <X className="w-6 h-6 transition-transform duration-300" /> : <Menu className="w-6 h-6 transition-transform duration-300" />}
        </motion.button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.ul 
            initial={{ y: '-100%', opacity: 0 }} 
            animate={{ y: 0, opacity: 1 }} 
            exit={{ y: '-100%', opacity: 0 }} 
            transition={{ duration: 0.5, ease: 'easeInOut' }} // Smooth top to bottom transition
            className="absolute left-0 w-full bg-black shadow-md z-10 md:hidden flex flex-col items-center py-6"
            style={{ top: `${navbarHeight}px` }} // Use dynamic navbar height
          >
            {['home', 'about', 'expertise', 'technologies', 'experience', 'projects', 'certifications'].map((section, index) => (
              <motion.li
                key={section}
                initial={{ opacity: 0, scale: 0.5 }} 
                animate={{ opacity: 1, scale: 1 }} 
                exit={{ opacity: 0, scale: 0.5 }} 
                transition={{ delay: index * 0.1 }} 
                className="py-4 w-full text-center"
              >
                <a 
                  href={`#${section}`} 
                  className="text-purple-600 capitalize font-medium hover:text-purple-300 transition-all" 
                  onClick={() => handleSectionClick(section)}
                >
                  {section === 'home' ? 'Home' : section === 'technologies' ? 'Skills' : section.charAt(0).toUpperCase() + section.slice(1)}
                </a>
              </motion.li>
            ))}
          </motion.ul>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;