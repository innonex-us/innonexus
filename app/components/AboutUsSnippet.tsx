"use client";

import { Player } from "@lottiefiles/react-lottie-player";

const AboutUsSnippet: React.FC = () => {
    return (
        <section className="relative bg-white text-gray-900 py-20 overflow-hidden">
            {/* Background Lottie Animation */}
            <div className="absolute inset-0 overflow-hidden z-0">
                <Player
                    autoplay
                    loop
                    src="./animations/about-background.json" // Replace with your Lottie animation path or URL
                    className="absolute w-full h-full object-cover opacity-10"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-white via-white to-transparent opacity-70"></div>
            </div>

            {/* Content */}
            <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col-reverse lg:flex-row items-center">
                {/* Left Section: Lottie Animation */}
                <div className="lg:w-1/2 flex justify-center">
                    <Player
                        autoplay
                        loop
                        src="./animations/about-us-animation.json" // Replace with your Lottie animation path or URL
                        className="w-full max-w-sm lg:max-w-lg"
                    />
                </div>

                {/* Right Section: Text */}
                <div className="lg:w-1/2 text-center lg:text-left">
                    <h2 className="text-4xl sm:text-5xl font-extrabold leading-tight">
                        About InnoNexus
                    </h2>
                    <p className="mt-6 text-lg sm:text-xl text-gray-600 leading-relaxed">
                        InnoNexus drives digital transformation with cutting-edge solutions in blockchain, Web 3.0, AI, and mobile development. Together, we redefine innovation.
                    </p>
                    <div className="mt-8 flex justify-center lg:justify-start space-x-4">
                        <a
                            href="/about"
                            className="bg-[#5E17EB] text-white px-6 py-3 rounded-lg text-lg font-semibold shadow-xl hover:bg-[#1CDAFF] transition-transform transform hover:scale-105"
                        >
                            Learn More
                        </a>
                        <a
                            href="/contact"
                            className="bg-gray-100 text-[#5E17EB] border border-[#5E17EB] px-6 py-3 rounded-lg text-lg font-semibold shadow-xl hover:bg-[#5E17EB] hover:text-white transition-transform transform hover:scale-105"
                        >
                            Contact Us
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AboutUsSnippet;
