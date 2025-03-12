"use client";
import { Globe, Gift, Users, Award } from "lucide-react";
import { motion, useMotionValue, useTransform } from "framer-motion";
import React from "react";

const Stats = () => {
  // Parallax effect setup
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const rotateX = useTransform(y, [-50, 50], [15, -15]);
  const rotateY = useTransform(x, [-50, 50], [-15, 15]);

  // Mouse movement handler with TypeScript type annotation
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    const { innerWidth, innerHeight } = window;
    const { clientX, clientY } = e;
    x.set((clientX - innerWidth / 2) / 20);
    y.set((clientY - innerHeight / 2) / 20);
  };

  return (
    <section
      className="relative bg-fixed bg-cover bg-center py-24 text-white bg-[url('/a2.jpg')] overflow-hidden"
      onMouseMove={handleMouseMove}
    >
      {/* Background Image Motion Effect with Parallax Tilt */}
      <motion.div
        className="absolute inset-0 bg-black bg-opacity-50"
        initial={{ scale: 1 }}
        animate={{ scale: 1.05 }}
        transition={{ duration: 20, repeat: Infinity, repeatType: "reverse", ease: "easeInOut" }}
        style={{ rotateX, rotateY }}
        whileHover={{ scale: 1.1, rotateX: 0, rotateY: 0 }}
      ></motion.div>

      {/* Stats Content */}
      <div className="relative z-10 container mx-auto px-6 text-center grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-12">
        {/** Motion variants for staggered animation */}
        {[
          { icon: Globe, color: "text-pink-400", value: "65+", label: "Global Presence" },
          { icon: Gift, color: "text-blue-400", value: "150+", label: "Completed Projects" },
          { icon: Users, color: "text-green-400", value: "200", label: "Happy Clients" },
          { icon: Award, color: "text-yellow-400", value: "20", label: "Awards Received" },
        ].map((stat, index) => (
          <motion.div
            key={index}
            className="flex flex-col items-center space-y-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: index * 0.2 }}
          >
            <motion.div
              animate={{ y: [0, -5, 0] }}
              transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
            >
              <stat.icon size={60} className={stat.color} />
            </motion.div>
            <h3 className="text-5xl font-bold">{stat.value}</h3>
            <p className="text-lg">{stat.label}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Stats;
