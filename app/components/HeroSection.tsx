"use client";

import { Player } from "@lottiefiles/react-lottie-player";

const HeroSection: React.FC = () => {
    return (
        <section className="relative bg-white text-gray-900">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col-reverse lg:flex-row items-center py-20 lg:py-32">
                {/* Left Text Content */}
                <div className="text-center lg:text-left lg:w-1/2">
                    <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight">
                        Empowering Innovation<br />
                        Across the Digital Spectrum
                    </h1>
                    <p className="mt-6 text-lg sm:text-xl text-gray-700">
                        At InnoNexus, we push boundaries with cutting-edge technology solutions in blockchain, Web 3.0, AI, and more.
                    </p>
                    <div className="mt-8 flex justify-center lg:justify-start space-x-4">
                        <a
                            href="/about"
                            className="bg-[#5E17EB] text-white px-6 py-3 rounded-md text-lg font-semibold shadow-lg hover:bg-[#1CDAFF] transition"
                        >
                            Learn More
                        </a>
                        <a
                            href="/contact"
                            className="bg-gray-100 text-[#5E17EB] border border-[#5E17EB] px-6 py-3 rounded-md text-lg font-semibold shadow-lg hover:bg-[#5E17EB] hover:text-white transition"
                        >
                            Contact Us
                        </a>
                    </div>
                </div>

                {/* Right Visual Content with Lottie Animation (Hidden on mobile) */}
                <div className="hidden sm:flex lg:w-1/2 justify-center">
                    <Player
                        autoplay
                        loop
                        src="./animations/hero-animation.json" // Replace with your Lottie animation path or URL
                        className="w-full max-w-md lg:max-w-lg"
                    />
                </div>
            </div>

            {/* Decorative Shapes */}
            <div className="absolute top-0 left-0 w-48 h-48 bg-[#5E17EB]/10 rounded-full blur-3xl"></div>
            <div className="absolute bottom-0 right-0 w-64 h-64 bg-[#1CDAFF]/10 rounded-full blur-3xl"></div>
        </section>
    );
};

export default HeroSection;
