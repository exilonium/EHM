import { Sparkles, ArrowRight } from "lucide-react";
import { useState } from "react";
import { motion } from "framer-motion";
import ScrollRevealElements from "../Animations/ScrollRevealElements";
import SectionHeading from "../../Common/SectionHeading";
import { Link } from "react-router-dom";

import ClimateRiskImg from "../../assets/offering/Updated - CLIMATE RISK.webp";
import GeophysicalImg from "../../assets/offering/Updated - Geophysical .webp";
import SustainabilityImg from "../../assets/offering/Updated - Sustainability & ESG.webp";
import EnvManagementImg from "../../assets/offering/Updated - Sustainable Environmental Management .webp";

const data = [
  {
    title: "Sustainability Assessment & Reporting",
    paragraph:
      "Supporting ESG disclosure, performance tracking, and SDG-aligned sustainability reporting for organizations and HEIs",
    image: SustainabilityImg,
  },
  {
    title: "Sustainable Environmental Management",
    paragraph:
      "EHM’s work in this domain spans nature-based wastewater treatment, ecosystem restoration, environmental audits, and sustainability monitoring",
    image: EnvManagementImg,
  },
  {
    title: "Climate Risk Intelligence",
    paragraph:
      "Using AI and analytics to assess risks, model impacts, and guide adaptation strategies.",
    image: ClimateRiskImg,
  },
  {
    title: "Geophysical Investigation",
    paragraph:
      "Conducting subsurface and hydrogeological surveys for resource mapping and environmental planning.",
    image: GeophysicalImg,
  },
  {
    title: "Urban Planning & Management",
    paragraph:
      "Designing data-driven, inclusive, and climate-resilient urban systems through smart planning, water restoration, and sustainable infrastructure",
    image: "/offering/img3.png",
  },
  {
    title: "Training & Capacity Building",
    paragraph:
      "Professional training on ESG, climate, AI, and geophysical applications.",
    image: "/offering/product5.png",
  },
];

const ServiceSection = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  return (
    <div
      className="min-h-screen w-full flex flex-col items-center justify-center p-8 
                 bg-gradient-to-b from-teal-50 via-teal-100/40 to-teal-50"
    >
      <ScrollRevealElements
        className="text-center mb-12 py-8"
        staggerAmount={0.6}
      >
        <SectionHeading>Offerings</SectionHeading>
      </ScrollRevealElements>

      <ScrollRevealElements
        className="flex flex-col justify-center items-center gap-8 w-full max-w-[1600px] mx-auto"
        staggerAmount={0.3}
      >
        {[0, 1].map((row) => (
          <div key={row} className="grid grid-cols-3 gap-6 w-full">
            {data.slice(row * 3, row * 3 + 3).map((item, index) => {
              const actualIndex = row * 3 + index;
              const isHovered = hoveredIndex === actualIndex;
               return (
                <motion.div
                  key={actualIndex}
                  className="relative rounded-[2rem] shadow-xl overflow-hidden cursor-pointer h-[420px] transition-all duration-700 ease-in-out hover:shadow-2xl border border-gray-100/10"
                  onMouseEnter={() => setHoveredIndex(actualIndex)}
                  onMouseLeave={() => setHoveredIndex(null)}
                  onClick={() => setHoveredIndex(hoveredIndex === actualIndex ? null : actualIndex)}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  {/* Background Image with Lazy Loading */}
                  <img 
                    src={item.image} 
                    alt={item.title}
                    className="absolute inset-0 w-full h-full object-cover"
                    loading="lazy"
                  />

                  {/* Premium Overlay System */}
                  <div
                    className={`absolute inset-0 transition-opacity duration-700 ${isHovered ? "opacity-90" : "opacity-40"
                      } bg-gradient-to-t from-gray-950 via-gray-900/60 to-transparent`}
                  ></div>

                  {/* Card Content */}
                  <div className="absolute inset-0 p-8 flex flex-col justify-end text-white z-10">
                    <div className={`transition-all duration-700 ${isHovered ? "translate-y-0" : "translate-y-4"}`}>
                      <h2
                        className="font-extrabold text-2xl lg:text-3xl mb-3 tracking-tight leading-tight"
                        style={{
                          fontFamily: "Outfit",
                          textShadow: "0 2px 20px rgba(0,0,0,0.5)",
                        }}
                      >
                        {item.title}
                      </h2>
                      
                      <p
                        className={`text-sm lg:text-base text-white/80 mb-6 leading-relaxed transition-all duration-500 overflow-hidden ${isHovered
                            ? "opacity-100 max-h-40"
                            : "opacity-0 max-h-0"
                          }`}
                      >
                        {item.paragraph}
                      </p>

                      <Link to={
                        item.title === 'Sustainability Assessment & Reporting' ? '/offerings/sustainability-assessment-reporting' :
                          item.title === 'Geophysical Investigation' ? '/offerings/geophysical-investigation' :
                            '/offerings'
                      }>
                        <motion.button
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                          className={`bg-white/10 backdrop-blur-md text-white px-6 py-2.5 rounded-full flex items-center gap-2 font-bold border border-white/20 hover:bg-white hover:text-gray-900 transition-all duration-300 ${isHovered
                              ? "opacity-100 translate-y-0"
                              : "opacity-0 translate-y-4 pointer-events-none"
                            }`}
                        >
                          Learn More
                          <ArrowRight className="w-4 h-4" />
                        </motion.button>
                      </Link>
                    </div>
                  </div>

                  {/* Top Badge */}
                  <div className="absolute top-6 left-6 z-20">
                    <div className="glass-effect bg-white/5 backdrop-blur-md px-3 py-1 rounded-full border border-white/10">
                       <span className="text-[10px] font-bold uppercase tracking-widest text-white/60">EHM Intelligence</span>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        ))}
      </ScrollRevealElements>
    </div>
  );
};

export default ServiceSection;
