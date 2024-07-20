// components/Welcome.tsx
import React, { useEffect, useState, useRef } from 'react';
import { motion, AnimatePresence, Variants } from 'framer-motion';
import { Canvas, useFrame } from '@react-three/fiber';
import { Box, Sphere } from '@react-three/drei';
import * as THREE from 'three';

interface FloatingObjectProps {
  position: [number, number, number];
  color: string;
}

const FloatingObject: React.FC<FloatingObjectProps> = ({ position, color }) => {
  const meshRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.position.y = position[1] + Math.sin(state.clock.elapsedTime) * 0.2;
      meshRef.current.rotation.x = state.clock.elapsedTime * 0.5;
      meshRef.current.rotation.y = state.clock.elapsedTime * 0.3;
    }
  });

  return (
    <mesh ref={meshRef} position={position}>
      {Math.random() > 0.5 ? (
        <Box args={[0.5, 0.5, 0.5]} >
          <meshStandardMaterial color={color} />
        </Box>
      ) : (
        <Sphere args={[0.25, 32, 32]}>
          <meshStandardMaterial color={color} />
        </Sphere>
      )}
    </mesh>
  );
};

const Background3D: React.FC = () => {
  return (
    <Canvas camera={{ position: [0, 0, 5] }}>
      <ambientLight intensity={0.5} />
      <pointLight position={[10, 10, 10]} />
      {[...Array(20)].map((_, i) => (
        <FloatingObject
          key={i}
          position={[
            Math.random() * 10 - 5,
            Math.random() * 10 - 5,
            Math.random() * 5 - 10
          ]}
          color={`hsl(${Math.random() * 360}, 50%, 75%)`}
        />
      ))}
    </Canvas>
  );
};
interface WelcomeProps {
    onEnd: () => void;
  }
  
  const Welcome: React.FC<WelcomeProps> = ({ onEnd }) => {
    const [isVisible, setIsVisible] = useState(true);
  
    useEffect(() => {
      const timer = setTimeout(() => {
        handleExit();
      }, 15000); // Show welcome message for 15 seconds
      return () => clearTimeout(timer);
    }, []);
  
    const handleExit = () => {
      setIsVisible(false);
      // Delay the onEnd callback to allow for exit animations
      setTimeout(onEnd, 1000);
    };
  
    const containerVariants: Variants = {
      hidden: { opacity: 0 },
      visible: {
        opacity: 1,
        transition: {
          when: "beforeChildren",
          staggerChildren: 0.2,
        },
      },
      exit: {
        opacity: 0,
        transition: {
          when: "afterChildren",
          staggerChildren: 0.05,
          staggerDirection: -1,
          duration: 0.5,
        },
      },
    };
  
    const itemVariants: Variants = {
      hidden: { y: 50, opacity: 0, rotateX: 90 },
      visible: {
        y: 0,
        opacity: 1,
        rotateX: 0,
        transition: {
          type: "spring",
          damping: 12,
          stiffness: 100,
        },
      },
      exit: {
        y: -50,
        opacity: 0,
        rotateX: -90,
        transition: {
          duration: 0.2,
        },
      },
    };
  
    const words = ["Hello,", "Welcome", "to", "My", "Portfolio", "Website"];
  
    return (
      <AnimatePresence mode="wait" onExitComplete={onEnd}>
        {isVisible && (
          <motion.div
            className="fixed inset-0 flex flex-col justify-center items-center bg-black-100 z-50 overflow-hidden"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
          >
            <div className="absolute inset-0">
              <Background3D />
            </div>
            <div className="relative z-10">
              {words.map((word, index) => (
                <motion.span
                  key={index}
                  className="text-6xl text-yellow-600 font-bold mb-2 inline-block mx-2"
                  variants={itemVariants}
                >
                  {word}
                </motion.span>
              ))}
            </div>
            <motion.div
              className="mt-8 relative z-10"
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0 }}
              transition={{ type: "spring", stiffness: 260, damping: 20 }}
            >
              <motion.button
                className="px-6 py-3 bg-white text-black-100 rounded-full text-xl font-semibold"
                whileHover={{ scale: 1.05, boxShadow: "0 0 15px rgba(255,255,255,0.5)" }}
                whileTap={{ scale: 0.95 }}
                onClick={handleExit}
              >
                Explore Now
              </motion.button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    );
  };
  
  export default Welcome;