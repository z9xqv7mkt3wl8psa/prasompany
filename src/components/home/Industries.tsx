"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";

const Industries = () => {
  const industries = [
    { name: "Hi-Tech", icon: "⚙️" },
    { name: "Travel, Transportation, Logistics & Hospitality", icon: "✈️" },
    { name: "Manufacturing", icon: "🏭" },
    { name: "Media & Entertainment", icon: "🎬" },
    { name: "Private Equity", icon: "💰" },
    { name: "Professional Services", icon: "📈" },
    { name: "Insurance", icon: "🛡️" },
    { name: "Retail & Consumer Goods", icon: "🛍️" },
    { name: "Banking & Financial Services", icon: "🏦" },
    { name: "Communications", icon: "📡" },
    { name: "Energy & Utilities", icon: "⚡" },
    { name: "Healthcare & Life Sciences", icon: "🏥" },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  // Auto-slide every 3 seconds unless paused
  useEffect(() => {
    if (!isPaused) {
      const interval = setInterval(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 3) % industries.length);
      }, 3000);
      return () => clearInterval(interval);
    }
  }, [industries.length, isPaused]);

  // Manual navigation handlers
  const handleNext = () => setCurrentIndex((prevIndex) => (prevIndex + 3) % industries.length);
  const handlePrev = () => setCurrentIndex((prevIndex) => (prevIndex - 3 + industries.length) % industries.length);

  // Get 3 visible industries
  const getVisibleIndustries = () => {
    return Array.from({ length: 3 }, (_, i) => industries[(currentIndex + i) % industries.length]);
  };

  return (
    <section
      className="h-auto flex flex-col items-center justify-center bg-gradient-to-r from-blue-100 to-blue-300 py-10 px-4"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      {/* Styled Header Section */}
      <h1 className="text-4xl md:text-5xl font-extrabold text-center mb-4 text-gray-800 drop-shadow-md">
          Industries
      </h1>
      <p className="text-center mb-8 text-gray-600 max-w-lg leading-relaxed text-lg md:text-xl font-medium">
        <span className="bg-gradient-to-r from-blue-500 to-purple-600 text-transparent bg-clip-text font-bold">
          Empowering Innovation
        </span>
        &nbsp;across diverse sectors — from technology and healthcare to finance, manufacturing, and beyond.  
        <span className="text-blue-600 font-semibold"> We make industries smarter.</span>
      </p>

      {/* Industry Carousel */}
      <div className="relative w-full max-w-xs md:max-w-4xl grid grid-cols-1 md:grid-cols-3 md:gap-8 gap-4">
        {/* Left Navigation Button */}
        <button
          onClick={handlePrev}
          className="absolute left-0 top-1/2 transform -translate-y-1/2 p-3 bg-white rounded-full shadow-md hover:bg-gray-200 transition z-10"
          aria-label="Previous"
        >
          <ChevronLeft size={28} />
        </button>

        {/* Industry Cards */}
        <AnimatePresence mode="popLayout">
          {getVisibleIndustries().map((industry) => (
            <motion.div
              key={industry.name}
              className="flex flex-col items-center justify-center p-6 md:p-8 bg-white rounded-2xl shadow-md hover:shadow-lg transition transform hover:-translate-y-1 hover:scale-105 md:text-lg"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -50 }}
              transition={{ duration: 0.8 }}
            >
              <span className="text-4xl md:text-5xl mb-2">{industry.icon}</span>
              <h3 className="text-base md:text-lg font-semibold text-gray-700">{industry.name}</h3>
            </motion.div>
          ))}
        </AnimatePresence>

        {/* Right Navigation Button */}
        <button
          onClick={handleNext}
          className="absolute right-0 top-1/2 transform -translate-y-1/2 p-3 bg-white rounded-full shadow-md hover:bg-gray-200 transition z-10"
          aria-label="Next"
        >
          <ChevronRight size={28} />
        </button>
      </div>
    </section>
  );
};

export default Industries;
