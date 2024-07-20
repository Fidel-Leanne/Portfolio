'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';

const Techfact = () => {
  const [disabled, setDisabled] = useState(false);


  return (
    <motion.div
      className={`flex flex-col items-center justify-center h-full bg-teal-900/70 text-center p-4 ${
        disabled ? 'pointer-events-none opacity-50' : ''
      }`}
      initial={{ opacity: 1 }}
      animate={{ opacity: disabled ? 0.5 : 1 }}
      transition={{ duration: 0.3, ease: 'easeOut' }}
    >
      <h1 className="text-white text-4xl mb-4">Hello, World!</h1>
      <p className="text-white-100 mb-6">
        Did you know? The first computer virus was created in 1983 and was named "Elk Cloner".
      </p>

      
    </motion.div>
  );
};

export default Techfact;
