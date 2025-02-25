"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";

const clients = [
  "/clients/clientimg1.png",
  "/clients/clientimg2.png",
  "/clients/clientimg3.png",
  "/clients/clientimg4.png",
  "/clients/clientimg5.jpg",
  "/clients/clientimg6.png",
  "/clients/clientimg7.png",
  "/clients/clientimg8.jpg",
  "/clients/images.jpg",
  "/clients/images1.png",
];

const ClientSection = () => {
  const [index, setIndex] = useState(0);
  const groupSize = 5; // Show 5 images at a time

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + groupSize) % clients.length);
    }, 5000); // Change every 3 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="py-12 bg-gradient-to-r from-blue-200 to-gray-100">
      <div className="text-center mb-8">
        <h2 className="text-5xl font-extrabold text-gray-900 mb-4">Our Clients</h2>
        <p className="bg-gradient-to-r from-purple-600 to-pink-500 bg-clip-text text-transparent font-bold text-xl">
        We're not just crafting software, We're sculpting your business's success.
        </p>
      </div>

      {/* Client Carousel */}
      <div className="overflow-hidden relative px-12">
        <motion.div
          key={index}
          className="flex justify-center gap-8"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -50 }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
        >
          {clients.slice(index, index + groupSize).map((logo, idx) => (
            <img
              key={idx}
              src={logo}
              alt={`Client ${idx + 1}`}
              className="w-32 h-auto rounded-xl shadow-lg transition-transform transform hover:scale-105"
            />
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default ClientSection;
