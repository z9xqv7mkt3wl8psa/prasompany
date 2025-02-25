"use client";

import React from "react";
import Image from "next/image";
import { Linkedin, X } from "lucide-react";
import { useTheme } from "next-themes";

const teamMembers = [
  {
    name: "Pramod Prajapat",
    role: "Founder & CEO",
    image: "/team/pramod.jpg",
    linkedin: "https://www.linkedin.com/in/pramod-prajapat-833bb52a1",
    twitter: "https://x.com/pramodprajpat",
  },
  {
    name: "Aryan Sharma",
    role: "Co-Founder & Android Developer",
    image: "/team/aryan.jpg",
    linkedin: "https://www.linkedin.com/in/aryansharma121",
    twitter: "https://x.com/AryanSh07q",
  },
  {
    name: "Abhishek Raj",
    role: "CTO & Lead Developer",
    image: "/team/abhishek.jpg",
    linkedin: "https://www.linkedin.com/in/abhishek-raj-28b253258/",
    twitter: "https://x.com/AbhishekRa8597",
  },
];

const Team = () => {
  const { theme } = useTheme();
  const isDark = theme === "dark";

  return (
    <section className="relative h-screen flex flex-col items-center justify-center px-4">
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
      <div className="relative z-10 max-w-4xl text-center">
        <h2 className={`text-4xl font-extrabold ${isDark ? "text-white" : "text-gray-900"}`}>
          Meet Our Team
        </h2>
        <p className={`text-lg mt-4 ${isDark ? "text-gray-400" : "text-gray-600"}`}>
          A passionate team dedicated to bringing your ideas to life.
        </p>

        <div className="mt-12 grid md:grid-cols-3 gap-10 px-6">
          {teamMembers.map((member, index) => (
            <div
              key={index}
              className={`rounded-lg shadow-lg p-6 text-center transition-transform transform hover:-translate-y-2 
                ${isDark ? "bg-gray-800 text-white" : "bg-white text-gray-900"}`}
            >
              <div className="relative w-32 h-32 mx-auto">
                <Image
                  src={member.image}
                  alt={member.name}
                  fill
                  className="rounded-full object-cover border-4 border-gray-200 dark:border-gray-700"
                />
              </div>
              <h3 className="text-2xl font-bold mt-4">{member.name}</h3>
              <p className={`${isDark ? "text-gray-400" : "text-gray-600"}`}>{member.role}</p>

              {/* Social Icons */}
              <div className="flex justify-center gap-4 mt-4">
                <a
                  href={member.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`transition ${
                    isDark ? "text-blue-400 hover:text-blue-600" : "text-blue-600 hover:text-blue-800"
                  }`}
                >
                  <Linkedin size={24} />
                </a>
                <a
                  href={member.twitter}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`transition ${
                    isDark ? "text-gray-400 hover:text-gray-200" : "text-blue-400 hover:text-blue-600"
                  }`}
                >
                  <X size={24} />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;
