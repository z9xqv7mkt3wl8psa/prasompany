"use client";
import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";
import Link from "next/link";

const backgroundData = [
  {
    src: "/background1.jpg",
    title: "Creating and Transforming Companies",
    content:
      "Prasunet has empowered 100+ companies by turning ideas into successful products. We specialize in advanced application development, legacy modernization, and innovative tech solutions to drive business growth."
  },
  {
    src: "/background2.jpg",
    title: "Accelerating Growth",
    content:
      "Prasunet transforms complex challenges into innovative solutions, accelerating time to market. Our cutting-edge products impact industries like healthcare, transport, automotive, e-commerce, and more, driving business growth and success."
  },
  {
    src: "/background3.jpg",
    title: "Pioneers of Modern Development",
    content:
      "Prasunet combines decades of experience in hybrid onshore and offshore development to enhance speed to market, maximize ROI, and scale efficiently. Our advanced collaborative processes give us a competitive edge, ensuring innovative and high-impact solutions."
  }
];

const HeroSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % backgroundData.length);
    }, 6000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative h-screen w-full overflow-hidden z-10">
      {/* Background Image Transition */}
      <div className="absolute inset-0">
        {backgroundData.map((item, index) => (
          <div
            key={index}
            className={cn(
              "absolute inset-0 bg-cover bg-center transition-opacity duration-1000",
              index === currentIndex ? "opacity-100" : "opacity-0"
            )}
            style={{ backgroundImage: `url(${item.src})` }}
          />
        ))}
      </div>

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/50"></div>

      {/* Content Wrapper */}
      <div className="relative z-10 flex flex-col md:flex-row h-screen w-full items-end md:items-center pb-20 px-6 md:px-20 text-center md:text-left">
        {/* Left Side: Heading */}
        <div className="max-w-lg mb-6 md:mb-10 pt-16 sm:pt-20 md:pt-0">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white">
            Innovate, Scale, and Succeed <br />
            <span className="bg-gradient-to-r from-violet-400 to-indigo-400 bg-clip-text text-transparent">
              With Prasunet IT Services
            </span>
          </h1>
        </div>

        {/* Middle Partition Line (Hidden on Small Screens) */}
        <div className="hidden md:block h-40 w-[5px] bg-blue-300 bg-opacity-50 mx-6 rounded-full"></div>

        {/* Right Side: Dynamic Description */}
        <div className="max-w-sm flex flex-col space-y-2 p-4">
          <h2 className="text-lg md:text-xl font-semibold text-white">
            {backgroundData[currentIndex].title}
          </h2>
          <p className="text-sm md:text-base text-white">
            {backgroundData[currentIndex].content}
          </p>
          <Link href="/Learnmore" className="text-blue-400 font-semibold hover:underline">
            Read more →
          </Link>
        </div>
      </div>

      {/* Wave Animation */}
      <div
        className="absolute bottom-0 left-0 w-full h-[100px] md:h-[120px]"
        style={{
          backgroundImage: "url('/wave.png')",
          backgroundSize: "1000px 120px",
          animation: "waveMove 8s linear infinite",
        }}
      ></div>

      <div
        className="absolute bottom-0 left-0 w-full h-[100px] md:h-[120px] opacity-40"
        style={{
          backgroundImage: "url('/wave.png')",
          backgroundSize: "1000px 120px",
          animation: "waveMove 6s linear infinite reverse",
        }}
      ></div>

      <div
        className="absolute bottom-0 left-0 w-full h-[100px] md:h-[120px] opacity-70"
        style={{
          backgroundImage: "url('/wave.png')",
          backgroundSize: "1000px 120px",
          animation: "waveMove 4s linear infinite",
        }}
      ></div>

      {/* Inline Keyframes */}
      <style jsx>{`
        @keyframes waveMove {
          0% {
            background-position: 0px;
          }
          100% {
            background-position: 1000px;
          }
        }
      `}</style>
    </section>
  );
};

export default HeroSection;
