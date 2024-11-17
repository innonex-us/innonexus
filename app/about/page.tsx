"use client";

import { Player } from "@lottiefiles/react-lottie-player";
import Image from "next/image";

const page: React.FC = () => {
    return (
        <main className="bg-white text-gray-900">
            {/* Hero Section */}
            <section className="relative bg-gradient-to-r from-[#5E17EB] to-[#1CDAFF] text-white py-20">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h1 className="text-4xl sm:text-5xl font-extrabold leading-tight">
                        About InnoNexus
                    </h1>
                    <p className="mt-4 text-lg sm:text-xl text-gray-100">
                        Empowering innovation across the digital spectrum. Discover our story and meet the team driving transformation.
                    </p>
                </div>
            </section>

            {/* Our Mission Section */}
            <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">
                    Our Mission
                </h2>
                <p className="mt-6 text-lg text-gray-600 leading-relaxed">
                    At InnoNexus, our mission is to deliver cutting-edge solutions that empower businesses to embrace the future. From blockchain to AI, we specialize in transforming ideas into impactful innovations.
                </p>
                <div className="mt-12">
                    <Player
                        autoplay
                        loop
                        src="./animations/mission-animation.json" // Replace with your Lottie animation path or URL
                        className="w-full max-w-lg mx-auto"
                    />
                </div>
            </section>

            {/* Our Values Section */}
            <section className="py-20 bg-gray-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">
                        Our Values
                    </h2>
                    <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
                        {[
                            {
                                title: "Innovation",
                                description:
                                    "We embrace creativity and out-of-the-box thinking to deliver cutting-edge solutions.",
                            },
                            {
                                title: "Collaboration",
                                description:
                                    "Teamwork is at the core of everything we do, fostering partnerships that drive success.",
                            },
                            {
                                title: "Excellence",
                                description:
                                    "We are committed to delivering exceptional quality in every project.",
                            },
                        ].map((value, index) => (
                            <div
                                key={index}
                                className="bg-white shadow-md rounded-lg p-8 hover:shadow-lg transition"
                            >
                                <h3 className="text-xl font-semibold text-gray-800">
                                    {value.title}
                                </h3>
                                <p className="mt-4 text-gray-600">
                                    {value.description}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Meet the Team Section */}
            <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">
                    Meet the Team
                </h2>
                <p className="mt-4 text-lg text-gray-600">
                    Our team of experts brings passion, creativity, and dedication to every project.
                </p>
                <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
                    {[
                        {
                            name: "John Doe",
                            role: "CEO & Founder",
                            image: "/team/john.jpg",
                        },
                        {
                            name: "Jane Smith",
                            role: "CTO",
                            image: "/team/jane.jpg",
                        },
                        {
                            name: "Michael Lee",
                            role: "Lead Developer",
                            image: "/team/michael.jpg",
                        },
                    ].map((teamMember, index) => (
                        <div
                            key={index}
                            className="text-center bg-white shadow-md rounded-lg p-6 hover:shadow-lg transition"
                        >
                            <Image
                                src={teamMember.image}
                                alt={teamMember.name}
                                className="mx-auto rounded-full object-cover shadow-md"
                                width={80}
                                height={80}
                            />
                            <h3 className="mt-4 text-xl font-semibold text-gray-800">
                                {teamMember.name}
                            </h3>
                            <p className="text-sm text-gray-500">
                                {teamMember.role}
                            </p>
                        </div>
                    ))}
                </div>
            </section>

            {/* Call-to-Action Section */}
            <section className="relative bg-gradient-to-r from-[#5E17EB] to-[#1CDAFF] text-white py-16">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h2 className="text-4xl font-extrabold leading-tight">
                        Ready to Partner with InnoNexus?
                    </h2>
                    <p className="mt-4 text-lg sm:text-xl text-gray-100">
                        Join us on our journey to redefine innovation and success.
                    </p>
                    <div className="mt-8 flex justify-center space-x-4">
                        <a
                            href="/contact"
                            className="bg-white text-[#5E17EB] px-8 py-4 rounded-md text-lg font-semibold shadow-lg hover:bg-gray-100 transition-transform transform hover:scale-105"
                        >
                            Contact Us
                        </a>
                        <a
                            href="/services"
                            className="bg-[#5E17EB] border border-white px-8 py-4 rounded-md text-lg font-semibold shadow-lg hover:bg-[#1CDAFF] transition-transform transform hover:scale-105"
                        >
                            Explore Services
                        </a>
                    </div>
                </div>
            </section>
        </main>
    );
};

export default page;
