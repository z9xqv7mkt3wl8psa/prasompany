"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import Navbar from "@/components/home/header/navbar";
 // Import the Navbar

export default function ProgramPage() {
  return (
    <div>
      {/* Navbar */}
      <Navbar />

      <div className="container mx-auto px-4 py-20 text-center">
        {/* Page Heading */}
        <motion.h1
          className="text-5xl font-extrabold text-gray-900 dark:text-white"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Our Signature Programs
        </motion.h1>

        <p className="mt-4 text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
          Empowering innovation and growth through technology and development.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
          {/* Viksit Bharat Program */}
          <motion.div
            className="relative overflow-hidden rounded-lg shadow-lg hover:shadow-2xl transition duration-300"
            whileHover={{ scale: 1.03 }}
          >
            <Image
              src="/softwarevikshitbharat.jpg"
              alt="Software Viksit Bharat Program"
              width={600}
              height={400}
              className="w-full h-64 object-cover"
              priority
            />
            <div className="p-6 bg-white dark:bg-gray-800">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
                Viksit Bharat Program
              </h2>
              <p className="mt-2 text-gray-600 dark:text-gray-400">
                A nationwide initiative to drive technological advancements and digital transformation.
              </p>
              <Link href="https://docs.google.com/forms/d/e/1FAIpQLScHUY_qP7K1HSVKaazsRF-aOXGtk9KbDJvU2-uuLZ-S7wi6GA/viewform?usp=sf_link">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  className="mt-4 px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg shadow-md"
                >
                  Join Now
                </motion.button>
              </Link>
            </div>
          </motion.div>

          {/* Tech Bharat Global Impact */}
          <motion.div
            className="relative overflow-hidden rounded-lg shadow-lg hover:shadow-2xl transition duration-300"
            whileHover={{ scale: 1.03 }}
          >
            <Image
              src="/Globalimpact.jpg"
              alt="Tech Bharat Global Impact"
              width={600}
              height={400}
              className="w-full h-64 object-cover"
              priority
            />
            <div className="p-6 bg-white dark:bg-gray-800">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
                Tech Bharat Global Impact
              </h2>
              <p className="mt-2 text-gray-600 dark:text-gray-400">
                Connecting innovators and industry leaders to make a global technological impact.
              </p>
              <Link href="https://docs.google.com/forms/d/e/1FAIpQLSdYLa3wVwYgtMgsWyWX7jTBjkUOzjM_ihhBHWKTx4AGAyP79A/viewform?usp=header">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  className="mt-4 px-6 py-3 bg-green-600 hover:bg-green-700 text-white rounded-lg shadow-md"
                >
                  Join Now
                </motion.button>
              </Link>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
