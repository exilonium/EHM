import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const DiversifiedExpertiseIcon = () => (
  <div className="flex h-14 w-14 sm:h-16 sm:w-16 items-center justify-center rounded-2xl bg-white/10 backdrop-blur-sm border border-white/20">
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.5">
      <path d="M12 14l-8-4 8-4 8 4-8 4z"></path>
      <path d="M4 14v4l8 4 8-4v-4"></path>
      <path d="M20 10V6l-8-4-8 4v4l8 4 8-4z"></path>
    </svg>
  </div>
);

const PhilosophyIcon = () => (
  <div className="flex h-14 w-14 sm:h-16 sm:w-16 items-center justify-center rounded-2xl bg-white/10 backdrop-blur-sm border border-white/20">
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.5">
      <path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z"></path>
      <path d="M12 2a10 10 0 00-9.95 9.13M22 12a10 10 0 01-9.13 9.95"></path>
    </svg>
  </div>
);

const ApproachIcon = () => (
  <div className="flex h-14 w-14 sm:h-16 sm:w-16 items-center justify-center rounded-2xl bg-white/10 backdrop-blur-sm border border-white/20">
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.5">
      <path d="M3 3l7.07 16.97 2.51-7.39 7.39-2.51L3 3z"></path>
      <path d="M13 13l6 6"></path>
    </svg>
  </div>
);

const features = [
  {
    icon: PhilosophyIcon,
    title: "Interdisciplinary Expertise",
    desc: "Our team combines expertise in engineering, environmental science, climate science, and urban planning to deliver integrated and practical solutions."
  },
  {
    icon: DiversifiedExpertiseIcon,
    title: "Data-Driven Decision-Making",
    desc: "We leverage analytics, AI, and geospatial intelligence to transform data into actionable insights that drive effective decision-making."
  },
  {
    icon: PhilosophyIcon,
    title: "Sustainable Innovation",
    desc: "We design adaptive, nature-based, and circular solutions that balance growth with environmental responsibility and long-term impact."
  },
  {
    icon: ApproachIcon,
    title: "Institutional Credibility",
    desc: "Founded by IIT alumni and supported by leading accelerators and innovation networks, we bring academic rigor, technical excellence, and reliability to every project."
  }
];

const WhyChooseUsSection = () => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  // Title animations
  const titleX = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], ["50%", "25%", "25%", "50%"]);
  const titleScale = useTransform(scrollYProgress, [0, 0.1], [0.8, 1]);
  const titleOpacity = useTransform(scrollYProgress, [0, 0.05, 0.95, 1], [0, 1, 1, 0]);

  // Card visibilities
  const card1Opacity = useTransform(scrollYProgress, [0.1, 0.15, 0.3, 0.35], [0, 1, 1, 0]);
  const card2Opacity = useTransform(scrollYProgress, [0.35, 0.4, 0.55, 0.6], [0, 1, 1, 0]);
  const card3Opacity = useTransform(scrollYProgress, [0.6, 0.65, 0.8, 0.85], [0, 1, 1, 0]);
  const card4Opacity = useTransform(scrollYProgress, [0.85, 0.9, 0.98, 1], [0, 1, 1, 0]);

  const cardY = useTransform(scrollYProgress, [0, 1], [50, -50]);

  return (
    <section ref={containerRef} className="w-full h-[300vh] relative bg-[#022c22]">
      {/* Background - Using local reference or keeping current one */}
      <div className="sticky top-0 h-screen w-full overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="https://res.cloudinary.com/dlpluej6w/image/upload/v1757114594/forest-wallpaper-3840x2160-trees-vibrant-3326_wp7uji.jpg"
            alt="Sustainability Background"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-[#022c22]/60 backdrop-blur-[2px]"></div>
        </div>

        {/* Content Layer */}
        <div className="relative z-10 w-full h-full max-w-7xl mx-auto px-6 flex items-center">
          
          {/* Desktop Layout */}
          <div className="hidden lg:flex w-full items-center justify-between">
            {/* Title Block */}
            <motion.div 
              style={{ x: titleX, scale: titleScale, opacity: titleOpacity, left: 0, position: 'absolute' }}
              className="w-1/2 -translate-x-1/2"
            >
              <h2 className="text-6xl font-black text-white mb-6 uppercase tracking-tighter leading-none">
                Why Choose <span className="text-emerald-400">Us?</span>
              </h2>
              <p className="text-xl text-emerald-50/80 max-w-md font-light leading-relaxed">
                As a sustainability and deep-tech startup founded by IIT alumni, we are dedicated to providing innovative solutions aligned with global goals.
              </p>
            </motion.div>

            {/* Cards Stack */}
            <div className="relative w-2/5 h-[400px] ml-auto">
              {features.map((feature, index) => {
                const opacities = [card1Opacity, card2Opacity, card3Opacity, card4Opacity];
                const Icon = feature.icon;
                return (
                  <motion.div
                    key={index}
                    style={{ opacity: opacities[index], y: cardY }}
                    className="absolute inset-0 flex flex-col justify-end p-10 rounded-[2.5rem] bg-white/10 backdrop-blur-2xl border border-white/20 shadow-2xl glass-card"
                  >
                    <div className="mb-6">
                      <Icon />
                    </div>
                    <h3 className="text-3xl font-bold text-white mb-4 leading-tight">
                      {feature.title}
                    </h3>
                    <p className="text-white/70 text-lg font-light leading-relaxed">
                      {feature.desc}
                    </p>
                  </motion.div>
                );
              })}
            </div>
          </div>

          {/* Mobile Layout */}
          <div className="lg:hidden w-full space-y-12">
            <div className="text-center">
              <h2 className="text-4xl font-bold text-white mb-4">Why Choose Us?</h2>
              <p className="text-gray-300">Our interdisciplinary approach for global impact.</p>
            </div>
            <div className="space-y-6">
              {features.map((feature, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className="p-6 rounded-2xl bg-white/5 backdrop-blur-xl border border-white/10"
                >
                  <feature.icon />
                  <h3 className="text-xl font-bold text-white mt-4 mb-2">{feature.title}</h3>
                  <p className="text-gray-400 text-sm">{feature.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default WhyChooseUsSection;
