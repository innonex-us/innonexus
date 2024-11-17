"use client";

import { FaMobileAlt, FaBrain, FaCloud } from "react-icons/fa";
import { SiBlockchaindotcom } from "react-icons/si";
import { MdWeb } from "react-icons/md";

const services = [
    {
        icon: <SiBlockchaindotcom size={48} />,
        title: "Blockchain Solutions",
        description:
            "Leverage secure, decentralized blockchain technology to transform your business operations.",
    },
    {
        icon: <MdWeb size={48} />,
        title: "Web & Web 3.0 Development",
        description:
            "Build responsive, scalable web applications with cutting-edge Web 3.0 integration.",
    },
    {
        icon: <FaMobileAlt size={48} />,
        title: "Mobile Application Development",
        description:
            "Create intuitive, cross-platform mobile apps that deliver a seamless user experience.",
    },
    {
        icon: <FaBrain size={48} />,
        title: "AI & Machine Learning",
        description:
            "Implement AI-driven solutions to automate processes and unlock actionable insights.",
    },
    {
        icon: <FaCloud size={48} />,
        title: "Cloud Solutions",
        description:
            "Scale your business with reliable, secure, and cost-effective cloud computing services.",
    },
];

const ServicesOverview: React.FC = () => {
    return (
        <section className="py-20  text-gray-900">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Title and Description */}
                <div className="text-center">
                    <h2 className="text-4xl font-extrabold text-gray-900 tracking-tight">
                        What We Offer
                    </h2>
                    <p className="mt-4 text-lg text-gray-600">
                        Discover how InnoNexus delivers cutting-edge technology solutions tailored for your business success.
                    </p>
                </div>

                {/* Services Grid */}
                <div className="mt-16 grid gap-12 sm:grid-cols-2 lg:grid-cols-3">
                    {services.map((service, index) => (
                        <div
                            key={index}
                            className="relative flex flex-col items-center text-center bg-white shadow-lg rounded-xl p-8 group hover:bg-gradient-to-r hover:from-[#5E17EB] hover:to-[#1CDAFF] hover:text-white transition-transform transform hover:-translate-y-2 hover:shadow-2xl"
                        >
                            <div className="text-[#5E17EB] group-hover:text-white mb-6">
                                {service.icon}
                            </div>
                            <h3 className="text-xl font-semibold text-gray-800 group-hover:text-white">
                                {service.title}
                            </h3>
                            <p className="mt-4 text-gray-600 group-hover:text-gray-100">
                                {service.description}
                            </p>
                            {/* Decorative Underline */}
                            <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-12 h-1 bg-[#5E17EB] group-hover:bg-white mt-6 rounded"></div>
                        </div>
                    ))}
                </div>

                {/* CTA */}
                <div className="mt-16 flex justify-center">
                    <a
                        href="/services"
                        className="bg-[#5E17EB] text-white px-8 py-4 rounded-full text-lg font-semibold shadow-lg hover:bg-[#1CDAFF] transition-transform transform hover:scale-105"
                    >
                        Explore All Services
                    </a>
                </div>
            </div>
        </section>
    );
};

export default ServicesOverview;
