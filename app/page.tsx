"use client";
import React from 'react';
import HeroSection from './components/HeroSection';
import AboutUsSnippet from './components/AboutUsSnippet';
import ServicesOverview from './components/ServicesOverview';
import CaseStudiesSnippet from './components/CaseStudiesSnippet';
import TestimonialsPartners from './components/TestimonialsPartners';
// import CTASection from './components/CTASection';

const page = () => {
  return (
    <div>
      <HeroSection />
      <AboutUsSnippet />
      <ServicesOverview />
      <CaseStudiesSnippet />
      <TestimonialsPartners />
      {/* <CTASection /> */}
    </div>
  );
};

export default page;