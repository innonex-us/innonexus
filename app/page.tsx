"use client";
import React from 'react';
import HeroSection from './components/HeroSection';
import ServicesSection from './components/ServicesSection';
import IndustriesSection from './components/IndustriesSection';
import CaseStudiesSection from './components/CaseStudiesSection';


const page = () => {
  return (
    <div>
      <HeroSection />
      <ServicesSection />
      <IndustriesSection />
      <CaseStudiesSection />
    </div>
  );
};

export default page;