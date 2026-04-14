import React from "react";
import { motion } from "framer-motion";
import ScrollRevealElements from '../Animations/ScrollRevealElements';
import SectionHeading from '../../Common/SectionHeading';

const EhmBrief = () => {
  return (
    <section className="relative font-sans overflow-hidden">
      {/* Multiple layered gradients for deep fading effect */}
      <div className="absolute inset-0 bg-gradient-to-b from-white via-teal-100 to-white" />
      <div className="absolute inset-0 bg-gradient-to-b from-white/95 via-teal-200/70 to-white/95" />
      <div className="absolute inset-0 bg-gradient-to-b from-white/90 via-transparent to-white/90" />
      
      {/* Diagonal gradient layers for depth */}
      <div className="absolute inset-0 bg-gradient-to-br from-teal-100/60 via-teal-200/40 to-teal-100/60" />
      <div className="absolute inset-0 bg-gradient-to-tr from-teal-50/50 via-teal-150/30 to-teal-50/50" />
      
      {/* Strong top fade */}
      <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-white via-white/80 to-transparent z-10" />
      
      {/* Strong bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white via-white/80 to-transparent z-10" />

      {/* Top Section */}
      <div className="relative text-center w-full h-auto mx-auto py-16 sm:py-16 md:py-16 z-20">
        {/* Top Section Content */}
        <SectionHeading>About EHM</SectionHeading>
      </div>

      {/* Bottom Section */}
      <div className="w-full relative z-20">
        <div className="col-span-12 lg:col-span-10 pb-16 sm:pb-20 px-4 sm:px-8 md:px-12 lg:px-32">

          {/* Main descriptive area - heading intentionally omitted here to keep page flow concise */}

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-10 md:gap-12 lg:gap-16 xl:gap-20 items-center">

            <motion.div
              className="w-full h-full"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, ease: "easeOut" }}
            >
              <img
                className="w-full h-full object-cover rounded-2xl shadow-lg"
                src="https://res.cloudinary.com/dlpluej6w/image/upload/v1756388167/Screenshot_1st_u2ghdl.png"
                alt="Aerial view of green terrace farms"
              />
            </motion.div>

            <ScrollRevealElements
              className="flex flex-col mt-6 md:mt-0 md:pl-6 lg:pl-12"
              staggerAmount={0.5}
              yOffset={30}
            >
              <motion.p className="text-gray-600 leading-relaxed mb-6 sm:mb-8 text-sm sm:text-base md:text-base lg:text-lg">
                EHM is a sustainability-focused startup founded by IIT alumni, 
                working to advance the United Nations Sustainable Development Goals (SDGs). 
                We partner with industries, government organizations, and higher education institutions 
                to enhance ESG performance, manage climate risks, meet regulatory standards, and implement long-term sustainability strategies.
                <br />
                <br />

              </motion.p>
              <motion.a
                href="/about"
                className="group inline-flex items-center justify-center gap-2 self-start bg-emerald-500 text-white font-semibold px-6 py-3 rounded-lg shadow-md hover:bg-emerald-600 transition-all duration-300"
              >
                Know more
                <span className="transition-transform duration-300 group-hover:translate-x-1">
                  →
                </span>
              </motion.a>
            </ScrollRevealElements>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EhmBrief;