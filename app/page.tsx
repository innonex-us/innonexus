"use client";
import React from 'react';
import HeroSection from './components/HeroSection';
import ServicesSection from './components/ServicesSection';
import CaseStudiesSection from './components/CaseStudiesSection';
import Team from './components/teamMembers';
import Contact from './components/Contact';


const page = () => {
  return (
    <div>
      <HeroSection />
      <ServicesSection />
      <CaseStudiesSection />
      <Team />
      <Contact />
    </div>
  );
};

export default page;