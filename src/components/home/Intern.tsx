"use client";

import { motion } from "framer-motion";

const InternshipSection = () => {
  return (
    <section
      className="relative w-full h-[450px] bg-fixed bg-cover bg-center"
      style={{ backgroundImage: "url('/i1.jpg')" }} // Ensure the correct path
    >
      {/* Overlay for readability */}
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-white text-center px-6">
        <motion.h2
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-5xl font-extrabold"
        >
          Internship Opportunities for Students
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="mt-4 text-lg md:text-2xl"
        >
          Summer Internship
        </motion.p>

        {/* Button */}
        <motion.a
  href="https://docs.google.com/forms/d/e/1FAIpQLSd_IXUmj1XFUT8ydvWbqoWJ9ImZffOsc0rHwsMHICO_E5F5dA/viewform"
    target="_blank"
  rel="noopener noreferrer"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          className="mt-6 px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg shadow-lg transition"
        >
          Apply Now
        </motion.a>
      </div>
    </section>
  );
};

export default InternshipSection;
