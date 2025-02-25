"use client";

import { useRouter } from "next/navigation";
import Image from "next/image";
import { motion } from "framer-motion";

const CareerSection = () => {
  const router = useRouter();

  return (
    <section className="relative w-full h-[400px] md:h-[450px] flex items-center justify-between bg-blue-100/80 px-6 md:px-16 rounded-2xl overflow-hidden">
      
      {/* Text Content */}
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="relative z-10 max-w-2xl text-left"
      >
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
          Careers at <span className="text-purple-600">PRASUNET</span>
        </h2>
        <p className="text-lg text-gray-800 mt-4">
          We invite you to supercharge your potential. Find what inspires and
          drives you. Find your spark.
        </p>
        <button
          onClick={() => router.push("/career")}
          className="mt-6 px-6 py-3 text-lg font-semibold bg-purple-600 text-white rounded-lg shadow-md hover:bg-purple-700 transition duration-300 transform hover:scale-105"
        >
          Visit our careers page →
        </button>
      </motion.div>

      {/* Primary Image */}
      <motion.div
        initial={{ opacity: 0, x: 50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="relative w-1/2 h-full hidden md:flex items-center justify-end z-10"
      >
        <Image
          src="/c1.avif" // Replace with actual image path
          alt="Career at PRASUNET"
          width={500}
          height={500}
          className="object-cover rounded-lg shadow-lg"
        />
      </motion.div>

    </section>
  );
};

export default CareerSection;