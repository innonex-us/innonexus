import { motion } from "framer-motion";
import { Player } from "@lottiefiles/react-lottie-player";

const HeroSection = () => {
  return (
    <section className="relative flex items-center justify-center min-h-screen px-6">
      {/* Content */}
      <div className="text-center max-w-4xl z-10">
        <motion.h1
          className="text-5xl md:text-7xl font-extrabold leading-tight bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          Empowering Innovation Across the Digital Spectrum
        </motion.h1>
        <motion.p
          className="mt-6 text-lg md:text-2xl text-gray-300"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.5 }}
        >
          InnoNexus transforms businesses with cutting-edge technologies, from
          blockchain to AI, tailored for your success.
        </motion.p>
        <motion.div
          className="mt-8 flex justify-center space-x-6"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 2 }}
        >
          <a
            href="#services"
            className="bg-gradient-to-r from-purple-500 to-blue-500 text-white px-8 py-3 rounded-full font-semibold shadow-lg hover:scale-105 transition-transform duration-300"
          >
            Learn More
          </a>
          <a
            href="#contact"
            className="bg-white text-black px-8 py-3 rounded-full font-semibold shadow-lg hover:scale-105 transition-transform duration-300"
          >
            Contact Us
          </a>
        </motion.div>
      </div>

      {/* Animation */}
      <motion.div
        className="absolute bottom-0 right-0 max-w-xl z-0"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 3 }}
      >
        <Player
          autoplay
          loop
          // src="https://assets10.lottiefiles.com/packages/lf20_t9gkkhz4.json"
          src={"/animations/hero-animation.json"}
          className="w-full h-auto opacity-20"
        />
      </motion.div>
    </section>
  );
};

export default HeroSection;
