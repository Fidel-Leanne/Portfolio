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
import Footer from '@/components/Footer';
import FutureEndevours from '@/components/FutureEndevours';
import MainContent from '@/components/Landing';

const HomePage = () => {

  return (
      
        <MainContent/>
    
  );
};

export default HomePage;
