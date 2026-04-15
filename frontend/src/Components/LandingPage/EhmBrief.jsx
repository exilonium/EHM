import React from "react";
import { motion } from "framer-motion";
import ScrollRevealElements from '../Animations/ScrollRevealElements';
import SectionHeading from '../../Common/SectionHeading';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const EhmBrief = () => {
  return (
     <section className="relative overflow-hidden py-24 bg-white font-outfit">
      {/* Subtle Background Elements */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-gray-100 to-transparent"></div>
      <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-gray-100 to-transparent"></div>
      
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* Visual Element */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative order-2 lg:order-1"
          >
            <div className="absolute -inset-4 bg-emerald-50 rounded-[2.5rem] -rotate-2"></div>
            <img
              className="relative w-full aspect-[4/3] object-cover rounded-[2rem] shadow-2xl"
              src="https://res.cloudinary.com/dlpluej6w/image/upload/v1756388167/Screenshot_1st_u2ghdl.png"
              alt="Sustainable agriculture landscapes"
            />
            {/* Trust Badge */}
            <div className="absolute -bottom-6 -right-6 glass-effect bg-white/80 backdrop-blur-xl p-6 rounded-2xl shadow-xl border border-emerald-100 max-w-[200px]">
              <p className="text-emerald-800 font-extrabold text-sm mb-1">IIT ALUMNI FOUNDED</p>
              <p className="text-gray-500 text-xs font-medium leading-relaxed">Driving global sustainability through deep-tech innovation.</p>
            </div>
          </motion.div>

          {/* Text Content */}
          <div className="order-1 lg:order-2 space-y-8">
            <div className="space-y-4">
              <h4 className="text-emerald-500 font-bold uppercase tracking-[0.2em] text-xs">Our Heritage</h4>
              <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 leading-tight">
                Engineering a <br />
                <span className="text-gray-400 font-light italic">Resilient Future</span>
              </h2>
            </div>

            <div className="space-y-6 text-gray-600 text-lg leading-relaxed font-light">
              <p>
                Founded by IIT alumni, EHM is a sustainability pioneer dedicated to advancing the UN Sustainable Development Goals (SDGs). 
              </p>
              <p>
                We bridge the gap between complex environmental challenges and data-driven solutions. By partnering with industries and institutions, we enhance ESG performance and navigate climate risks with precision.
              </p>
            </div>

            <div className="pt-4">
              <Link
                to="/about"
                className="group inline-flex items-center gap-4 bg-gray-900 text-white font-bold px-8 py-4 rounded-full hover:bg-emerald-600 hover:shadow-[0_10px_30px_rgba(16,185,129,0.3)] transition-all duration-500"
              >
                Learn Our Story
                <span className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center group-hover:bg-white/20 transition-colors">
                   <ArrowRight className="w-4 h-4" />
                </span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EhmBrief;