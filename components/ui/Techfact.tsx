'use client';

import { motion } from 'framer-motion';

const TechFact = () => {
  return (
    <motion.div
      className="flex flex-col mi items-center justify-center h-full bg-teal-900/70 text-center p-4"
      initial={{ opacity: 1 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.3, ease: 'easeOut' }}
    >
      <h1 className="text-white text-4xl mb-4">Hello, World!</h1>
      <p className="text-white-100 mb-6">
        Did you know? The first computer virus was created in 1983 and was named &quot;Elk Cloner&quot;.
      </p>
    </motion.div>
  );
};

export default TechFact;
