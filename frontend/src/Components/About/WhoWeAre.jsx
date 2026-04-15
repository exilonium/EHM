import React from "react";
import { Player } from "@lottiefiles/react-lottie-player";
import { motion } from "framer-motion";

const purposeData = [
  {
    id: 1,
    title: "Our Vision",
    description: "To create regenerative, resilient, and sustainable systems through an eco-centric approach that harmonizes growth with environmental stewardship.",
    lottieSrc: "/lottie-assets/vision-animation/animations/10e621af-4237-47b1-a332-563b013787cd.json",
  },
  {
    id: 2,
    title: "Our Mission",
    description: "To empower industries, organizations, and cities to achieve measurable impact by adopting sustainable solutions through data-driven planning and adaptive design — enabling long-term environmental and economic value.",
    lottieSrc: "/lottie-assets/paper-airplane-animation/animations/975d33bb-bc2f-413a-bcdf-0ab3647629ca.json",
  },
];

function PurposeCard({ lottieSrc, title, description, subtitle, subtitleDescription }) {
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
      <div className="h-[6em] w-[6em] sm:h-[8em] sm:w-[8em] bg-[#0d6d5b] rounded-full absolute bottom-full -left-[4em] scale-[500%] z-[-1] duration-[400ms]" />
      <div className="h-[4em] w-[4em] sm:h-[6em] sm:w-[6em] bg-[#08493e] rounded-full absolute bottom-full -left-[3em] scale-[400%] z-[-1] duration-[400ms]" />

      <div className="relative z-10 flex flex-col items-center text-center">
        <Player
          autoplay
          loop
          src={lottieSrc}
          className="w-24 h-24 sm:w-28 sm:h-28 lg:w-32 lg:h-32"
        />
        <h2 className="text-2xl sm:text-3xl font-bold text-slate-800 mt-4 mb-3 text-white transition-colors duration-200">
          {title}
        </h2>
        <p className="text-sm sm:text-base md:text-lg text-slate-600 leading-relaxed text-white transition-colors duration-200 mb-3">
          {description}
        </p>
        
        {subtitle && (
          <>
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-800 mb-3 text-white transition-colors duration-200">
              {subtitle}
            </h2>
            <p className="text-sm sm:text-base md:text-lg text-slate-600 leading-relaxed text-white transition-colors duration-200">
              {subtitleDescription}
            </p>
          </>
        )}
      </div>
    </motion.div>
  );
}

export default function WhoWeAre() {
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
          className="text-center mb-8 sm:mb-12 lg:mb-16 -translate-y-8 sm:-translate-y-12 md:-translate-y-16"
        >
          <motion.p 
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0, transition: { duration: 0.8 } }
            }}
            className="intro-p max-w-4xl mx-auto text-base sm:text-lg md:text-xl text-slate-600 leading-snug mt-8 text-left"
          >
            <span className="font-semibold text-slate-800">EHM</span> is a{" "}
            <span className="font-semibold text-emerald-600">sustainability and deep tech startup</span> founded by{" "}
            <span className="font-semibold text-blue-600">IIT alumni</span>,
            <br className="mb-3" />
            offering services and solutions aligned with the{" "}
            <span className="font-semibold text-emerald-600">Sustainable Development Goals (SDGs).</span>
            <br />
            <span className="block mt-3">
              We assist <span className="font-semibold text-slate-800">industries</span>, 
              <span className="font-semibold text-slate-800"> government organizations</span> 
              and <span className="font-semibold text-slate-800">HEI's</span> in enhancing
              their <span className="font-semibold text-emerald-600">ESG practices</span>, meeting
            </span>
            regulatory requirements, managing climate risks and implementing{" "}
            <span className="font-semibold text-emerald-600">sustainability strategies</span>.
          </motion.p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10 lg:gap-12 mt-12">
            {purposeData.map((card) => (
              <PurposeCard
                key={card.id}
                lottieSrc={card.lottieSrc}
                title={card.title}
                description={card.description}
                subtitle={card.subtitle}
                subtitleDescription={card.subtitleDescription}
              />
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}