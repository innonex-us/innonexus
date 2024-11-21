import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const CaseStudiesSection = () => {
  const caseStudies = [
    {
      title: "Blockchain for Supply Chain",
      description:
        "Streamlined supply chain management with a custom blockchain solution, improving transparency and reducing delays by 30%.",
      image: "/images/case-study-1.jpg",
    },
    {
      title: "AI-Powered E-commerce Personalization",
      description:
        "Enhanced customer retention by 20% with an AI-driven recommendation engine for a leading e-commerce platform.",
      image: "/images/case-study-2.jpg",
    },
    {
      title: "Decentralized Finance Platform",
      description:
        "Developed a scalable DeFi platform that attracted over 10,000 users within the first three months of launch.",
      image: "/images/case-study-3.jpg",
    },
  ];

  return (
    <section className="relative min-h-screen px-6 py-16 ">
      {/* Heading */}
      <div className="text-center max-w-4xl mx-auto mb-12">
        <h2 className="text-6xl font-extrabold bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
          Case Studies & Success Stories
        </h2>
        <p className="mt-4 text-lg text-gray-300">
          Discover how we’ve transformed businesses with innovative solutions.
        </p>
      </div>

      {/* Swiper Carousel */}
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        spaceBetween={50}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        autoplay={{ delay: 5000 }}
        loop={true}
        className="max-w-6xl mx-auto"
      >
        {caseStudies.map((caseStudy, index) => (
          <SwiperSlide key={index}>
            <div className="relative bg-gradient-to-br from-[#1a1a1a] via-[#2c2c2c] to-[#1a1a1a] shadow-xl rounded-2xl overflow-hidden hover:shadow-2xl transform transition-transform">
              {/* Image */}
              <div className="relative w-full h-72">
                <img
                  src={caseStudy.image}
                  alt={caseStudy.title}
                  className="absolute inset-0 w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-60"></div>
              </div>

              {/* Content */}
              <div className="p-8 text-center">
                <h3 className="text-2xl font-semibold bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
                  {caseStudy.title}
                </h3>
                <p className="mt-4 text-gray-300">{caseStudy.description}</p>
                {/* Call-to-Action */}
                <a
                  href="#"
                  className="inline-block mt-6 bg-gradient-to-r from-[#5E17EB] to-[#1CDAFF] text-white px-6 py-2 rounded-full font-semibold shadow-lg hover:shadow-xl transition-shadow"
                >
                  Learn More
                </a>
              </div>

              {/* Glow Effect */}
              <div className="absolute -bottom-6 -right-6 w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-500 rounded-full opacity-40 blur-3xl animate-pulse"></div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default CaseStudiesSection;
