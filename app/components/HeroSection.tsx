'use client'

import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { TextPlugin } from "gsap/TextPlugin";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import { Hexagon, Code, Globe, Cpu } from 'lucide-react';
import Image from "next/image";

gsap.registerPlugin(TextPlugin);

const HeroSection: React.FC = () => {
  const headlineRef = useRef<HTMLDivElement>(null);
  const subheadlineRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.fromTo(
      headlineRef.current,
      { opacity: 0, y: 50 },
      { opacity: 1, y: 0, duration: 2, ease: "power3.out" }
    );
    gsap.to(headlineRef.current, {
      text: "Empowering Innovation Across the Digital Spectrum",
      duration: 3,
      ease: "power1.inOut",
      delay: 1,
    });
    gsap.fromTo(
      subheadlineRef.current,
      { opacity: 0 },
      { opacity: 1, duration: 2, delay: 4, ease: "power2.inOut" }
    );
  }, []);

  const particlesInit = async (main: any) => {
    await loadFull(main);
  };

  const particlesOptions = {
    fullScreen: { enable: false },
    background: {
      color: {
        value: "transparent",
      },
    },
    particles: {
      number: { value: 80 },
      color: { value: "#4a90e2" },
      shape: {
        type: "circle",
        polygon: { nb_sides: 6 },
      },
      opacity: {
        value: 0.5,
        random: true,
      },
      size: {
        value: 3,
        random: true,
      },
      line_linked: {
        enable: true,
        distance: 150,
        color: "#4a90e2",
        opacity: 0.4,
        width: 1,
      },
      move: {
        enable: true,
        speed: 2,
        direction: "none",
        random: true,
        straight: false,
        out_mode: "out",
        bounce: false,
      },
    },
    interactivity: {
      detect_on: "canvas",
      events: {
        onhover: {
          enable: true,
          mode: "repulse",
        },
      },
      modes: {
        repulse: {
          distance: 100,
          duration: 0.4,
        },
      },
    },
  };

  return (
    <section className="relative h-screen w-full bg-gradient-to-r from-[#1a237e] via-[#283593] to-[#303f9f] overflow-hidden">
      <Particles
        id="tsparticles"
        init={particlesInit}
        // @ts-ignore
        options={particlesOptions}
        className="absolute inset-0"
      />

      <div className="absolute inset-0 bg-gradient-to-r from-[#1a237e] via-[#283593] to-[#303f9f] opacity-90"></div>

      <div className="relative z-10 flex flex-col items-center justify-center text-center text-white h-full px-6">
        <div className="flex items-center justify-center gap-3">
          <Image src="/logo.png" alt="InnoNexus Logo" className="mb-6" width={16} height={16} />
          <h2 className="text-6xl font-semibold">InnoNexus</h2>
        </div>

        <div
          ref={headlineRef}
          className="text-4xl md:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-200 to-indigo-200"
        ></div>

        <div
          ref={subheadlineRef}
          className="text-xl md:text-2xl text-blue-200 mb-8 max-w-3xl"
        >
          Pushing the boundaries of what&apos;s possible in the digital world with blockchain, Web 3.0, mobile apps, and AI solutions.
        </div>

        <div className="flex flex-wrap justify-center gap-6 mt-8">
          <div className="flex flex-col items-center">
            <Hexagon className="w-12 h-12 text-blue-300 mb-2" />
            <span className="text-sm font-semibold">Blockchain</span>
          </div>
          <div className="flex flex-col items-center">
            <Globe className="w-12 h-12 text-blue-300 mb-2" />
            <span className="text-sm font-semibold">Web 3.0</span>
          </div>
          <div className="flex flex-col items-center">
            <Code className="w-12 h-12 text-blue-300 mb-2" />
            <span className="text-sm font-semibold">Mobile Apps</span>
          </div>
          <div className="flex flex-col items-center">
            <Cpu className="w-12 h-12 text-blue-300 mb-2" />
            <span className="text-sm font-semibold">AI & ML</span>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 mt-12">
          <button className="px-8 py-3 text-lg font-semibold text-indigo-900 bg-blue-300 rounded-full shadow-lg hover:bg-blue-400 transform hover:scale-105 transition-all duration-300">
            Explore Services
          </button>
          <button className="px-8 py-3 text-lg font-semibold text-blue-300 bg-transparent border-2 border-blue-300 rounded-full shadow-lg hover:bg-blue-300 hover:text-indigo-900 transform hover:scale-105 transition-all duration-300">
            Contact Us
          </button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;

