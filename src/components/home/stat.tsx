"use client";
import { Globe, Gift, Users, Award } from "lucide-react"; // Changed to 'Globe' for worldwide effect

const Stats = () => {
  return (
    <section
      className="relative bg-fixed bg-cover bg-center py-24 text-white bg-[url('/a2.jpg')]"
    >
      {/* Dark Overlay for better readability */}
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>

      {/* Stats Content */}
      <div className="relative z-10 container mx-auto px-6 text-center grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-12">
        {/* Global Reach Stat Item */}
        <div className="flex flex-col items-center space-y-4">
          <Globe size={60} className="text-pink-400" /> {/* Switched to Globe icon */}
          <h3 className="text-5xl font-bold">65+</h3>
          <p className="text-lg">Global Presence</p> {/* Updated text for a stronger impact */}
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
