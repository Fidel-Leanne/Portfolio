'use client';

import React, { useState } from 'react';

interface TechStackProps {
  id?: number;
}

interface Category {
  title: string;
  list: string[];
}

const TechStack: React.FC<TechStackProps> = ({ id }) => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const categories: Category[] = [
    {
      title: "Frontend Development",
      list: [
        "JavaScript", "TypeScript", "React", "Next.js", "Tailwind CSS",
        "Bootstrap", "CSS3", "HTML5", "React Native", "Expo"
      ]
    },
    {
      title: "Backend Development",
      list: [
        "Node.js", "Express.js", "Django", "MySQL",
        "PostgreSQL", "MongoDB", "RESTful APIs", "GraphQL"
      ]
    },
    {
      title: "Data Science & AI",
      list: [
        "Python", "TensorFlow", "Scikit-learn", "NumPy",
        "Pandas", "Matplotlib", "Java", "C"
      ]
    },
    {
      title: "DevOps & Deployment",
      list: [
        "Docker", "CI/CD (GitHub Actions)", "Git", "GitHub",
        "AppWrite", "SuperBase"
      ]
    }
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % categories.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + categories.length) % categories.length);
  };

  return (
    <div className="w-full max-w-4xl mx-auto px-4 py-4 md:py-0 lg:py-0 relative text-white cursor-pointer rounded-lg shadow-lg">
      <div className="overflow-hidden">
        <div 
          className="flex transition-transform duration-700 ease-in-out" 
          style={{ transform: `translateX(-${currentSlide * 100}%)` }}
        >
          {categories.map((category, index) => (
            <div key={index} className="w-full flex-shrink-0 px-4">
              <h3 className="text-2xl font-bold mb-6 mt-0">{category.title}</h3>
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
                {category.list.map((item, i) => (
                  <span
                    key={i}
                    className="py-2 px-3 text-sm lg:text-base rounded-lg text-center bg-black-100 hover:bg-[#8a6508] hover:text-black-100 hover:font-bold hover:text-lg transition duration-300 transform hover:scale-105"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
      <button 
        onClick={prevSlide} 
        className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-30 p-2 rounded-full hover:bg-opacity-50 transition duration-300"
      >
        &#8592;
      </button>
      <button 
        onClick={nextSlide} 
        className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-30 p-2 rounded-full hover:bg-opacity-50 transition duration-300"
      >
        &#8594;
      </button>
      <div className="mt-4 text-center">
        {categories.map((_, index) => (
          <button
            key={index}
            className={`mx-1 w-3 h-3 rounded-full ${
              currentSlide === index ? 'bg-white' : 'bg-gray-400'
            }`}
            onClick={() => setCurrentSlide(index)}
          />
        ))}
      </div>
    </div>
  );
};

export default TechStack;
