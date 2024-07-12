'use client'
// pages/index.tsx
import { useState } from 'react';
import Grid from '@/components/Grid';
import Hero from '@/components/Hero';
import { FloatingNav } from '@/components/ui/FloatingNavbar';
import { FaHome } from 'react-icons/fa';
import Welcome from '@/components/Welcome'; // Import your updated Welcome component
import RecentProjects from '@/components/RecentProjects';
import { navItems } from '@/data';
import Clients from '@/components/Clients';
import Experience from '@/components/Experience';
import Approach from '@/components/Approach';

const HomePage = () => {
  const [showContent, setShowContent] = useState(false);

  return (
    <main className="relative bg-teal-950 flex justify-center items-center flex-col overflow-hidden mx-auto sm:px-10 px-5 ">
      <Welcome onEnd={() => setShowContent(true)} /> {/* Render the updated Welcome component */}
      {showContent && (
        <div className="max-w-7xl w-full">
          <FloatingNav
            navItems={navItems}
          />
          <h1 className="text-2xl">
            Hello Portfolio
          </h1>
          <Hero />
          <Grid />
          <RecentProjects/>
          <Clients/>
          <Experience/>
          <Approach/>
        </div>
      )}
    </main>
  );
};

export default HomePage;
