"use client";

import React from "react";
import Image from "next/image";
import { useTheme } from "next-themes";

const teamMembers = [
  {
    name: "Pramod Prajapat",
    role: "Founder & CEO",
    image: "/team/pramod.jpg",
  },
  {
    name: "Aryan Sharma",
    role: "Co-Founder & Android Developer",
    image: "/team/aryan.jpg",
  },
  {
    name: "Abhishek Raj",
    role: "CTO & Lead Developer",
    image: "/team/abhishek.jpg",
  },
  {
    name: "Dharamjeet Yadav",
    role: "Chief Marketing Officer",
    image: "/team/dharamjeet.jpg",
  },
];

const Team = () => {
  const { theme } = useTheme();
  const isDark = theme === "dark";

  return (
    <section className="relative h-auto flex flex-col items-center justify-center px-4 py-20">
      {/* Background Pattern */}
      <div className="absolute inset-0 -z-10">
        <div
          className={`absolute inset-0 h-full w-full transition-colors ${
            isDark
              ? "bg-gray-900"
              : "bg-white [background:radial-gradient(125%_125%_at_50%_10%,#fff_40%,#63e_100%)]"
          }`}
        ></div>
      </div>

      {/* Team Content */}
      <div className="relative z-10 max-w-6xl text-center">
        <h2 className={`text-4xl font-extrabold ${isDark ? "text-white" : "text-gray-900"}`}>
          Meet Our Team
        </h2>
        <p className={`text-lg mt-4 ${isDark ? "text-gray-400" : "text-gray-600"}`}>
          A passionate team dedicated to bringing your ideas to life.
        </p>

        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 px-6">
          {teamMembers.map((member, index) => (
            <div
              key={index}
              className={`rounded-lg shadow-lg p-6 text-center transition-transform transform hover:-translate-y-2 
                ${isDark ? "bg-gray-800 text-white" : "bg-white text-gray-900"}`}
            >
              <div className="w-32 h-32 mx-auto rounded-full overflow-hidden border-4 border-gray-200 dark:border-gray-700">
                <Image
                  src={member.image}
                  alt={member.name}
                  width={128}
                  height={128}
                  className="object-cover w-full h-full"
                />
              </div>
              <h3 className="text-2xl font-bold mt-4">{member.name}</h3>
              <p className={`${isDark ? "text-gray-400" : "text-gray-600"}`}>{member.role}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;
