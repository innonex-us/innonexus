import { motion } from "framer-motion";
import { AiOutlineCloudServer } from "react-icons/ai";
import { FaMobileAlt, FaRobot } from "react-icons/fa";
import { RiCodeSSlashLine } from "react-icons/ri";

const ServicesSection = () => {
  const services = [
    {
      icon: <AiOutlineCloudServer />,
      title: "Blockchain Solutions",
      description:
        "Empower your business with secure, transparent blockchain technologies.",
    },
    {
      icon: <RiCodeSSlashLine />,
      title: "Web 3.0 Development",
      description:
        "Leverage decentralized, user-centric technologies for your digital future.",
    },
    {
      icon: <FaMobileAlt />,
      title: "Mobile App Development",
      description:
        "Deliver cutting-edge mobile apps with seamless cross-platform experiences.",
    },
    {
      icon: <FaRobot />,
      title: "AI & Machine Learning",
      description:
        "Transform data into actionable insights with intelligent AI solutions.",
    },
  ];

  return (
    <section className="relative flex flex-col items-center justify-center min-h-screen px-6 py-16">
      {/* Heading */}
      <div className="text-center max-w-4xl mb-12 z-10">
        <h2 className="text-5xl font-extrabold bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
          Our Services
        </h2>
        <p className="mt-4 text-lg text-gray-300">
          Revolutionizing industries with cutting-edge technology solutions.
        </p>
      </div>

      {/* Services Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 max-w-7xl z-10">
        {services.map((service, index) => (
          <motion.div
            key={index}
            className="relative p-6 rounded-2xl bg-gradient-to-br from-[#1a1a1a] to-[#232323] shadow-xl hover:shadow-2xl transform transition-transform hover:-translate-y-4"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            {/* Glowing Border */}
            <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-purple-600 via-blue-500 to-purple-600 opacity-30 blur-lg group-hover:opacity-60"></div>

            {/* Content */}
            <div className="relative z-10 text-center">
              <div className="flex justify-center items-center mb-6">
                <motion.div
                  className="text-6xl bg-gradient-to-r from-purple-500 to-blue-500 text-white p-4 rounded-full shadow-lg"
                  whileHover={{ rotate: 15 }}
                >
                  {service.icon}
                </motion.div>
              </div>
              <h3 className="text-xl font-bold bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
                {service.title}
              </h3>
              <p className="mt-4 text-gray-400 group-hover:text-gray-300">
                {service.description}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default ServicesSection;
