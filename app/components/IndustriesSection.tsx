import { FaUniversity, FaHeartbeat, FaShoppingCart, FaIndustry } from "react-icons/fa";

const IndustriesSection = () => {
  const industries = [
    {
      icon: <FaUniversity size={48} />,
      title: "Education",
      description: "Empowering the next generation with digital learning solutions.",
    },
    {
      icon: <FaHeartbeat size={48} />,
      title: "Healthcare",
      description: "Transforming patient care with secure and innovative solutions.",
    },
    {
      icon: <FaShoppingCart size={48} />,
      title: "E-commerce",
      description: "Revolutionizing shopping with personalized, scalable platforms.",
    },
    {
      icon: <FaIndustry size={48} />,
      title: "Manufacturing",
      description: "Optimizing processes with AI, IoT, and blockchain technologies.",
    },
  ];

  return (
    <section className="relative min-h-screen px-6 py-16 bg-gradient-to-br">
      {/* Heading */}
      <div className="text-center max-w-4xl mx-auto mb-12">
        <h2 className="text-5xl font-extrabold bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
          Industries We Serve
        </h2>
        <p className="mt-4 text-lg text-gray-300">
          Delivering tailored digital solutions across diverse sectors.
        </p>
      </div>

      {/* Cards */}
      <div className="mt-16 grid gap-12 sm:grid-cols-2 lg:grid-cols-3">
        {industries.map((industry, index) => (
          <div
            key={index}
            className="relative flex flex-col items-center text-center bg-white shadow-lg rounded-xl p-8 group hover:bg-gradient-to-r hover:from-[#5E17EB] hover:to-[#1CDAFF] hover:text-white transition-transform transform hover:-translate-y-2 hover:shadow-2xl"
          >
            <div className="text-[#5E17EB] group-hover:text-white mb-6">
              {industry.icon}
            </div>
            <h3 className="text-xl font-semibold text-gray-800 group-hover:text-white">
              {industry.title}
            </h3>
            <p className="mt-4 text-gray-600 group-hover:text-gray-100">
              {industry.description}
            </p>
            {/* Decorative Underline */}
            <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-12 h-1 bg-[#5E17EB] group-hover:bg-white mt-6 rounded"></div>
          </div>
        ))}
      </div>

      {/* Background Decorations */}
      {/* <div className="absolute top-0 left-10 w-96 h-96 bg-gradient-to-r from-purple-600 to-blue-600 opacity-30 blur-3xl animate-pulse -z-10"></div>
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-gradient-to-r from-blue-600 to-purple-600 opacity-30 blur-3xl animate-pulse -z-10"></div> */}
    </section>
  );
};

export default IndustriesSection;
