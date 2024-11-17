"use client";
import React from 'react';
import HeroSection from './components/HeroSection';
import AboutUsSnippet from './components/AboutUsSnippet';
import ServicesOverview from './components/ServicesOverview';

const page = () => {
  return (
    <div>
      <HeroSection />
      <AboutUsSnippet />
      <ServicesOverview />
    </div>
  );
};

export default page;