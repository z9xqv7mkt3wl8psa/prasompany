"use client";
import { useEffect, useState } from "react";
import { Globe, Gift, Users, Award } from "lucide-react"; // Changed to 'Globe' for worldwide effect

const Stats = () => {
  const [offsetX, setOffsetX] = useState(0);
  const [offsetY, setOffsetY] = useState(0);

  // Track mouse movement for live background effect
  const handleMouseMove = (e) => {
    const { innerWidth, innerHeight } = window;
    const x = (e.clientX / innerWidth) * 20 - 10; // Horizontal parallax
    const y = (e.clientY / innerHeight) * 20 - 10; // Vertical parallax
    setOffsetX(x);
    setOffsetY(y);
  };

  useEffect(() => {
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <section
      className="relative bg-cover bg-center py-24 text-white overflow-hidden"
      style={{
        backgroundImage: "url('/a2.jpg')",
        backgroundPosition: `${50 + offsetX}% ${50 + offsetY}%`, // Smooth live movement
      }}
    >
      {/* Dark Overlay for better readability */}
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>

      {/* Stats Content */}
      <div className="relative z-10 container mx-auto px-6 text-center grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-12">
        {/* Global Reach Stat Item */}
        <div className="flex flex-col items-center space-y-4">
          <Globe size={60} className="text-pink-400" />
          <h3 className="text-5xl font-bold">65+</h3>
          <p className="text-lg">Global Presence</p>
        </div>

        {/* Completed Projects */}
        <div className="flex flex-col items-center space-y-4">
          <Gift size={60} className="text-blue-400" />
          <h3 className="text-5xl font-bold">150+</h3>
          <p className="text-lg">Completed Projects</p>
        </div>

        {/* Happy Clients */}
        <div className="flex flex-col items-center space-y-4">
          <Users size={60} className="text-green-400" />
          <h3 className="text-5xl font-bold">200</h3>
          <p className="text-lg">Happy Clients</p>
        </div>

        {/* Awards */}
        <div className="flex flex-col items-center space-y-4">
          <Award size={60} className="text-yellow-400" />
          <h3 className="text-5xl font-bold">20</h3>
          <p className="text-lg">Awards Received</p>
        </div>
      </div>
    </section>
  );
};

export default Stats;
