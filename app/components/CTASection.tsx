"use client";

const CTASection: React.FC = () => {
    return (
        <section className="relative bg-gradient-to-r from-[#5E17EB] to-[#1CDAFF] text-white py-16">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                {/* Title */}
                <h2 className="text-4xl sm:text-5xl font-extrabold leading-tight">
                    Ready to Transform Your Business?
                </h2>
                <p className="mt-4 text-lg sm:text-xl text-gray-100">
                    Partner with InnoNexus for cutting-edge technology solutions that
                    drive innovation and success.
                </p>

                {/* Buttons */}
                <div className="mt-8 flex justify-center space-x-4">
                    <a
                        href="/contact"
                        className="bg-white text-[#5E17EB] px-8 py-4 rounded-md text-lg font-semibold shadow-lg hover:bg-gray-100 transition-transform transform hover:scale-105"
                    >
                        Contact Us
                    </a>
                    <a
                        href="/about"
                        className="bg-[#5E17EB] border border-white px-8 py-4 rounded-md text-lg font-semibold shadow-lg hover:bg-[#1CDAFF] transition-transform transform hover:scale-105"
                    >
                        Learn More
                    </a>
                </div>

                {/* Decorative Elements */}
                <div className="absolute -top-10 -left-10 w-40 h-40 bg-white/20 rounded-full blur-3xl"></div>
                <div className="absolute -bottom-10 -right-10 w-64 h-64 bg-white/10 rounded-full blur-3xl"></div>
            </div>
        </section>
    );
};

export default CTASection;
