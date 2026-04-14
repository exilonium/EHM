import React, { useRef, useEffect, useState } from 'react';
import HeroVideo from '../../assets/hero/Updated - EHM - Website -  Home Page.mp4';
import { ArrowRight, ExternalLink } from 'lucide-react';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';

import ScrollRevealElements from '../Animations/ScrollRevealElements';
import { Link } from 'react-router-dom';
import RotatingText from '../Animations/TextAnimation';


const purposeData = [
  {
    id: 1,
    title: "Book now"
  },
]

export default function Homepage() {
  const targetRef = useRef(null);
  const [showCard, setShowCard] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      if (!targetRef.current) return;

      const rect = targetRef.current.getBoundingClientRect();

      if (rect.bottom < 0) {
        setShowCard(false);
      } else {
        setShowCard(true);
      }
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);


  return (
    <div>
      <style>{`
        @keyframes bounceHorizontal {
          0%, 100% { transform: translateX(0); }
          50% { transform: translateX(10px); }
        }
        @keyframes bounceVertical {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(10px); }
        }
        .animate-bounce-horizontal { animation: bounceHorizontal 2s infinite; }
        .animate-bounce-vertical { animation: bounceVertical 2s infinite; }
        .animate-fade-in { animation: fadeIn 0.5s ease-out forwards; }
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }

        @keyframes float {
          0% {
            transform: translateY(0) translateX(0);
          }
          50% {
            transform: translateY(-50vh) translateX(20px);
          }
          100% {
            transform: translateY(-120vh) translateX(-20px);
          }
        }

        .animate-float {
          animation: float linear infinite;
        }
      `}</style>

      <div className="relative min-h-screen text-white overflow-hidden">
        {/* Background Video */}
        <video
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 w-full h-full object-cover z-0"
        >
          <source src={HeroVideo} type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        {/* Optional Overlay for Tint (to blend with eco-theme) */}
        <div className="absolute inset-0 bg-gradient-to-b from-white/60 via-black/40 to-black/50 z-5"></div>
        {/* Main Content */}
        <div className="relative z-10 flex flex-col min-h-screen px-6 py-24 md:px-20 lg:px-24 max-w-[1400px] mx-auto">
          {/* Hero Section */}
          <div className="flex-1 flex flex-col lg:flex-row items-center justify-between gap-16">
            {/* Left Side - Text Content */}
            <div className="flex-1 max-w-3xl">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
              >
                <h1
                  className="text-5xl md:text-6xl lg:text-7xl font-extrabold leading-[1.1] mb-8 tracking-tight"
                  style={{
                    fontFamily: "Outfit",
                    textShadow: "0px 10px 40px rgba(0,0,0,0.2)"
                  }}
                >
                  <span
                    className="bg-clip-text text-transparent bg-gradient-to-r from-emerald-400 via-teal-300 to-blue-400"
                  >
                    Sustainability
                  </span>
                  <br />
                  <span className="text-white">Through Eco-Centric</span>
                  <br />
                  <span className="text-white/90 font-light">Approach</span>
                </h1>

                <p className="text-lg md:text-xl text-white/80 max-w-xl mb-10 leading-relaxed font-light">
                  Transforming complex environmental challenges into data-driven opportunities. We empower organizations with expert Climate Risk Intelligence.
                </p>

                <div className="flex flex-wrap gap-4">
                  <Link to="/contact#form">
                    <motion.button
                      whileHover={{ scale: 1.02, translateY: -2 }}
                      whileTap={{ scale: 0.98 }}
                      className="relative flex items-center justify-center rounded-full px-8 py-4 font-bold text-white bg-emerald-600 shadow-[0_0_20px_rgba(16,185,129,0.3)] hover:shadow-[0_0_30px_rgba(16,185,129,0.5)] transition-all duration-300 overflow-hidden group"
                    >
                      Book a Call
                      <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                    </motion.button>
                  </Link>

                  <Link to="/offerings">
                    <motion.button
                      whileHover={{ scale: 1.02, translateY: -2 }}
                      whileTap={{ scale: 0.98 }}
                      className="px-8 py-4 rounded-full font-bold text-white border border-white/30 backdrop-blur-md hover:bg-white/10 transition-all duration-300"
                    >
                      Our Services
                    </motion.button>
                  </Link>
                </div>
              </motion.div>
            </div>

            {/* Right Side - Impact Card (Glassmorphism) */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9, x: 50 }}
              animate={{ opacity: 1, scale: 1, x: 0 }}
              transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
              className="lg:flex-1 hidden lg:flex justify-center items-center"
            >
              <div className="relative group">
                {/* Decorative Glow */}
                <div className="absolute -inset-1 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-3xl blur opacity-25 group-hover:opacity-40 transition duration-1000 group-hover:duration-200"></div>
                
                <div className="relative glass-effect bg-white/10 backdrop-blur-2xl border border-white/20 p-10 rounded-3xl shadow-2xl max-w-sm">
                  <div className="space-y-8">
                    <div>
                      <h4 className="text-emerald-400 font-bold uppercase tracking-widest text-xs mb-2">Sustainability Score</h4>
                      <div className="flex items-baseline gap-2">
                        <span className="text-5xl font-extrabold text-white">98%</span>
                        <span className="text-emerald-400 text-sm font-medium">↑ 12%</span>
                      </div>
                    </div>

                    <div className="h-px bg-white/10"></div>

                    <div className="grid grid-cols-2 gap-6">
                      <div>
                        <p className="text-white/50 text-xs font-medium uppercase mb-1">Impact Made</p>
                        <p className="text-xl font-bold text-white">450+</p>
                        <p className="text-[10px] text-white/40">Projects Globally</p>
                      </div>
                      <div>
                        <p className="text-white/50 text-xs font-medium uppercase mb-1">Efficiency</p>
                        <p className="text-xl font-bold text-white">2.4x</p>
                        <p className="text-[10px] text-white/40">Resource Savings</p>
                      </div>
                    </div>

                    <div className="flex -space-x-3 overflow-hidden">
                      {[1, 2, 3, 4].map((i) => (
                        <div key={i} className="inline-block h-8 w-8 rounded-full ring-2 ring-white/10 bg-emerald-800 flex items-center justify-center text-[10px] font-bold">
                          {String.fromCharCode(64 + i)}
                        </div>
                      ))}
                      <div className="flex items-center justify-center h-8 w-8 rounded-full ring-2 ring-white/10 bg-white/5 text-[10px] font-bold text-white/60">
                        +12
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Scroll Indicator */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.5, duration: 1 }}
            className="absolute bottom-10 left-1/2 -translate-x-1/2 hidden md:flex flex-col items-center gap-2"
          >
            <span className="text-[10px] uppercase tracking-[0.2em] text-white/40 font-bold">Discover More</span>
            <div className="w-px h-12 bg-gradient-to-b from-emerald-500 to-transparent"></div>
          </motion.div>
        </div>
      </div>
    </div>

  );
}
