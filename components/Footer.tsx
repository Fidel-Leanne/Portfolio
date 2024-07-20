'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  const footerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    }
  };

  return (
    <motion.footer 
      className="bg-black text-white py-8"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={footerVariants}
    >
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap justify-between items-center">
          <div className="w-full md:w-1/3 mb-6 md:mb-0">
            <h3 className="text-2xl font-bold mb-2 text-yellow-600">Fidelia Mahukazuva</h3>
            <p className="text-base text-yellow-600/70">Full-Stack developer</p>
          </div>
          <div className="w-full md:w-1/3 mb-6 md:mb-0">
            <h4 className="text-lg font-semibold mb-2">Quick Links</h4>
            
          </div>
          <div className="w-full md:w-1/3">
            <h4 className="text-lg font-semibold mb-2">Connect</h4>
            <div className="flex space-x-4">
              <a href="https://github.com/Fidel-Leanne" target="_blank" rel="noopener noreferrer" className="hover:text-teal-300 transition-colors">
                <FaGithub size={24} />
              </a>
              <a href="https://linkedin.com/in/yourusername" target="_blank" rel="noopener noreferrer" className="hover:text-teal-300 transition-colors">
                <FaLinkedin size={24} />
              </a>
              <a href="https://twitter.com/yourusername" target="_blank" rel="noopener noreferrer" className="hover:text-teal-300 transition-colors">
                <FaTwitter size={24} />
              </a>
            </div>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-yellow-600 text-center">
          <p className="text-sm">&copy; {currentYear} Fidelia Mahukazuva. All rights reserved.</p>
        </div>
      </div>
    </motion.footer>
  );
};

export default Footer;