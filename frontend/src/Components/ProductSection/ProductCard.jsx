import React from "react";
import Tilt from "react-parallax-tilt";
import { motion } from "framer-motion";

const ProductCard = ({ title, description, imageUrl, delay }) => {
  return (
    <Tilt
      glareEnable={true}
      glareMaxOpacity={0.2}
      scale={1.05}
      transitionSpeed={1500}
      tiltMaxAngleX={10}
      tiltMaxAngleY={10}
    >
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: delay / 1000 }}
        className="bg-white rounded-2xl shadow-xl overflow-hidden transform transition-all duration-500 hover:scale-105 hover:shadow-2xl"
      >
        <div className="relative h-64 overflow-hidden">
          <img
            src={imageUrl}
            alt={title}
            className="w-full h-full object-cover hover:scale-110 transition-transform duration-700"
          />
        </div>
        <div className="p-6 text-left">
          <h3 className="text-xl font-semibold text-green-800 mb-2">{title}</h3>
          <p className="text-gray-600 text-sm">{description}</p>
        </div>
      </motion.div>
    </Tilt>
  );
};

export default ProductCard;
