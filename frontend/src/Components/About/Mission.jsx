import React from "react";
import { motion } from "framer-motion";
import { DotLottieReact } from '@lottiefiles/dotlottie-react';
import { SectionHeader } from "../WhyChooseUs/SectionHeader";

const purposeData = [
  {
    id: 1,
    title: "Our Expertise",
    description: "Founded by IIT alumni, we excel in deep-tech across Climate Risk, Geophysical Exploration, and Water Management—empowering businesses with reliable IT solutions to thrive in the digital era.",
    lottieSrc: "https://lottie.host/ee7ee08e-12f5-46d6-9f9c-ae0596c7b02d/wawsYz6ew6.lottie",
  },
  {
    id: 2,
    title: "Our Philosophy",
    description: "Our core mission is to achieve environmental sustainability through a dedicated eco-centric approach, providing practical solutions within the UN's SDG framework.",
    lottieSrc: "https://lottie.host/68a6f114-e3dd-4b39-8a9d-59a53cb19074/KFgACO7RCb.lottie",
  },
  {
    id: 3,
    title: "Our Approach",
    description: "We utilize data-driven tools like our customized Sustainability Dashboard to deliver comprehensive ESG assessments and ensure regulatory compliance (BRSR).",
    lottieSrc: "https://lottie.host/45c78a2b-83b8-4019-b7bd-b5b4adabbeee/TkllICNioR.lottie",
  },
];

function PurposeCard({ lottieSrc, title, description }) {
  return (
    <motion.div 
      variants={{
        hidden: { opacity: 0, y: 30 },
        visible: { opacity: 1, y: 0 }
      }}
      className="purpose-card group relative overflow-hidden bg-white p-6 sm:p-8 lg:p-10 rounded-2xl shadow-lg border border-slate-200 flex flex-col items-center text-center transition-all duration-300 ease-in-out"
    >
      <div className="h-[10em] w-[10em] sm:h-[12em] sm:w-[12em] bg-[#19a289] rounded-full absolute bottom-full -left-[6em] scale-[850%] z-[-1] duration-[400ms]" />
      <div className="h-[8em] w-[8em] sm:h-[10em] sm:w-[10em] bg-[#138c76] rounded-full absolute bottom-full -left-[5em] scale-[650%] z-[-1] duration-[400ms]" />
      <div className="h-[6em] w-[6em] sm:h-[8em] sm:w-[8em] bg-[#0d6d5b] rounded-full absolute bottom-full -left-[4em] scale-[500%] z-[-1] duration-[400ms] " />
      <div className="h-[4em] w-[4em] sm:h-[6em] sm:w-[6em] bg-[#08493e] rounded-full absolute bottom-full -left-[3em] scale-[400%] z-[-1] duration-[400ms]" />

      <div className="relative z-10 flex flex-col items-center text-center">
        <DotLottieReact
          autoplay
          loop
          src={lottieSrc}
          className="w-24 h-24 sm:w-28 sm:h-28 lg:w-32 lg:h-32"
        />
        <h2 className="text-2xl sm:text-3xl font-bold mt-4 mb-3 text-white transition-colors duration-200">
          {title}
        </h2>
        <p className="text-sm sm:text-base md:text-lg leading-relaxed text-white transition-colors duration-200">
          {description}
        </p>
      </div>
    </motion.div>
  );
}

export default function Mission() {
  return (
    <section className="about-section py-12 md:py-16 lg:py-20 bg-gradient-to-b from-white to-slate-100 text-slate-800 overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={{
            hidden: { opacity: 0 },
            visible: { 
              opacity: 1,
              transition: { staggerChildren: 0.2 }
            }
          }}
          className="text-center mb-8 sm:mb-6 lg:mb-6 -translate-y-8 sm:-translate-y-12 md:-translate-y-16"
        >
          <div className="intro-title">
            <SectionHeader title="Why Choose us" subtitle="" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-10 lg:gap-12 mt-12">
            {purposeData.map((card) => (
              <PurposeCard
                key={card.id}
                lottieSrc={card.lottieSrc}
                title={card.title}
                description={card.description}
              />
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}