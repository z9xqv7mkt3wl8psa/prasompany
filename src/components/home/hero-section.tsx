"use client";
import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";
import Link from "next/link";

const backgroundImages = ["/img1.jpg", "/img2.jpg", "/home4.jpg"];

const HeroSection = () => {
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % backgroundImages.length);
    }, 6000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative h-screen w-full overflow-hidden z-10">
      {/* Background Image Transition */}
      <div className="absolute inset-0">
        {backgroundImages.map((src, index) => (
          <div
            key={index}
            className={cn(
              "absolute inset-0 bg-cover bg-center transition-opacity duration-1000",
              index === currentImage ? "opacity-100" : "opacity-0"
            )}
            style={{ backgroundImage: `url(${src})` }}
          />
        ))}
      </div>

      {/* Dark Overlay for Readability */}
      <div className="absolute inset-0 bg-black/50"></div>

      {/* Content Wrapper */}
      <div className="relative z-10 flex h-screen w-full items-end pb-32 px-10 md:px-20">
        {/* Left Side: Heading */}
        <div className="max-w-lg mb-10">
          <h1 className="text-4xl sm:text-4xl md:text-5xl font-bold text-white">
            Bring your Business Online <br />
            <span className="bg-gradient-to-r from-violet-400 to-indigo-400 bg-clip-text text-transparent">
              With Prasunet IT Services
            </span>
          </h1>
        </div>

        {/* Middle Partition Line */}
        <div className="h-40 w-[5px] bg-blue-300 bg-opacity-50 mx-10 rounded-full mb-10"></div>

        {/* Right Side: Description */}
        <div className="max-w-sm flex flex-col space-y-2 p-4 mb-10">
          <div className="text-white">
            We are <span className="text-blue-400">Prasunet Team,<br /></span>
            providing IT services <br />
            and consulting to<br />grow your business.
          </div>
          <Link href="/Learnmore" className="text-blue-400 font-semibold hover:underline">
            Read more →
          </Link>
        </div>
      </div>

      {/* Wave Feature (No CSS file needed) */}
      <div
        className="absolute bottom-0 left-0 w-full h-[120px]"
        style={{
          backgroundImage: "url('/wave.png')",
          backgroundSize: "1000px 120px",
          animation: "waveMove 8s linear infinite",
        }}
      ></div>

      <div
        className="absolute bottom-0 left-0 w-full h-[120px] opacity-40"
        style={{
          backgroundImage: "url('/wave.png')",
          backgroundSize: "1000px 120px",
          animation: "waveMove 6s linear infinite reverse",
        }}
      ></div>

      <div
        className="absolute bottom-0 left-0 w-full h-[120px] opacity-70"
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
