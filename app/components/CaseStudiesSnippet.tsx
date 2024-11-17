"use client";

const caseStudies = [
    {
        title: "Revolutionizing Supply Chain with Blockchain",
        description:
            "Streamlined global logistics operations with transparent, decentralized blockchain solutions.",
        link: "/case-studies/supply-chain-blockchain",
    },
    {
        title: "AI-Driven Personalization for E-commerce",
        description:
            "Enhanced customer engagement with AI-powered recommendation systems, increasing sales by 30%.",
        link: "/case-studies/ecommerce-ai",
    },
    {
        title: "Decentralized Finance Platform Development",
        description:
            "Built a secure, scalable DeFi platform enabling users to trade and manage crypto assets effortlessly.",
        link: "/case-studies/defi-platform",
    },
];

const CaseStudiesSnippet: React.FC = () => {
    return (
        <section className="py-20 bg-gradient-to-br from-gray-100 to-white text-gray-900">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Title and Description */}
                <div className="text-center">
                    <h2 className="text-4xl font-extrabold text-gray-900">
                        Discover Our Impact
                    </h2>
                    <p className="mt-4 text-lg text-gray-600">
                        Dive into real-world stories showcasing how InnoNexus
                        transforms businesses through innovative solutions.
                    </p>
                </div>

                {/* Case Studies Grid */}
                <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
                    {caseStudies.map((study, index) => (
                        <div
                            key={index}
                            className="relative bg-white shadow-lg rounded-lg overflow-hidden hover:shadow-2xl hover:scale-105 transform transition-all duration-300"
                        >
                            <div className="p-6">
                                <h3 className="text-xl font-bold text-gray-800">
                                    {study.title}
                                </h3>
                                <p className="mt-4 text-gray-600">
                                    {study.description}
                                </p>
                                <a
                                    href={study.link}
                                    className="inline-block mt-6 text-[#5E17EB] font-semibold hover:text-[#1CDAFF] transition"
                                >
                                    Read More →
                                </a>
                            </div>
                        </div>
                    ))}
                </div>

                {/* CTA */}
                <div className="mt-16 flex justify-center">
                    <a
                        href="/case-studies"
                        className="bg-[#5E17EB] text-white px-8 py-4 rounded-full text-lg font-semibold shadow-lg hover:bg-[#1CDAFF] transition-transform transform hover:scale-105"
                    >
                        View All Case Studies
                    </a>
                </div>
            </div>
        </section>
    );
};

export default CaseStudiesSnippet;
