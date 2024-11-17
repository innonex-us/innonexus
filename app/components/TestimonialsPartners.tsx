"use client";

import { useState } from "react";
import { motion } from "framer-motion";

const testimonials = [
    {
        name: "John Doe",
        designation: "CEO, TechCorp",
        feedback:
            "InnoNexus transformed our operations with innovative blockchain solutions. Their expertise is unparalleled!",
        image: "/testimonials/partner1.jpg",
    },
    {
        name: "Jane Smith",
        designation: "CTO, FinTech Solutions",
        feedback:
            "Working with InnoNexus was a game-changer. Their AI-driven tools increased our efficiency by 40%.",
        image: "/testimonials/partner2.jpg",
    },
    {
        name: "Michael Lee",
        designation: "Founder, StartupPro",
        feedback:
            "The InnoNexus team delivered an outstanding Web 3.0 platform that exceeded our expectations.",
        image: "/testimonials/partner3.jpg",
    },
];

const partners = [
    "./partners/partner1.png",
    "./partners/partner2.png",
    "./partners/partner3.png",
    "./partners/partner4.png",
];

const TestimonialsPartners: React.FC = () => {
    const [activeTestimonial, setActiveTestimonial] = useState(0);

    const handleNext = () => {
        setActiveTestimonial((prev) => (prev + 1) % testimonials.length);
    };

    const handlePrev = () => {
        setActiveTestimonial(
            (prev) => (prev - 1 + testimonials.length) % testimonials.length
        );
    };

    return (
        <section className="py-20 bg-gradient-to-r from-[#f9f9f9] to-[#ffffff]">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Title */}
                <div className="text-center">
                    <h2 className="text-4xl font-extrabold text-gray-900">
                        What Our Clients Say
                    </h2>
                    <p className="mt-4 text-lg text-gray-600">
                        See what our clients have to say and explore our trusted
                        partnerships.
                    </p>
                </div>

                {/* Testimonials Slider */}
                <div className="mt-16">
                    <motion.div
                        className="relative bg-white shadow-xl rounded-xl p-8 text-center"
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.5 }}
                        key={activeTestimonial}
                    >
                        <img
                            src={testimonials[activeTestimonial].image}
                            alt={testimonials[activeTestimonial].name}
                            className="mx-auto w-24 h-24 rounded-full object-cover shadow-md"
                        />
                        <p className="mt-6 text-lg text-gray-600">
                        &quot;{testimonials[activeTestimonial].feedback}&quot;
                        </p>
                        <h3 className="mt-4 text-xl font-bold text-gray-800">
                            {testimonials[activeTestimonial].name}
                        </h3>
                        <p className="text-sm text-gray-500">
                            {testimonials[activeTestimonial].designation}
                        </p>

                        {/* Navigation Buttons */}
                        <div className="mt-6 flex justify-center space-x-4">
                            <button
                                onClick={handlePrev}
                                className="w-10 h-10 flex items-center justify-center bg-gray-100 rounded-full shadow-md hover:bg-gray-200"
                            >
                                ❮
                            </button>
                            <button
                                onClick={handleNext}
                                className="w-10 h-10 flex items-center justify-center bg-gray-100 rounded-full shadow-md hover:bg-gray-200"
                            >
                                ❯
                            </button>
                        </div>
                    </motion.div>
                </div>

                {/* Partner Logos */}
                <div className="mt-16">
                    <h3 className="text-2xl font-semibold text-center text-gray-800">
                        Our Partners
                    </h3>
                    <div className="mt-8 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-8">
                        {partners.map((logo, index) => (
                            <motion.img
                                key={index}
                                src={logo}
                                alt={`Partner ${index + 1}`}
                                className="mx-auto w-32 h-16 object-contain hover:scale-105 transition-transform duration-300 bg-transparent"
                                initial={{ opacity: 0, y: 50 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{
                                    delay: index * 0.2,
                                    duration: 0.5,
                                }}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default TestimonialsPartners;
