"use client";

import CareerSection from "@/components/home/careerS";
import ClientSection from "@/components/home/client";
import ContactForm from "@/components/home/Cont";
import Footer from "@/components/home/footer-section";
import Navbar from "@/components/home/header/navbar";
import HeroSection from "@/components/home/hero-section";
import InternshipSection from "@/components/home/Intern";
import FAQ from "@/components/home/faq";
import Project from "@/components/home/project";
import RegisterSection from "@/components/home/register";
import Services from "@/components/home/Services";
import Stats from "@/components/home/stat";
import Testimonials from "@/components/home/testimonail";
import Industries from "@/components/home/Industries";
import Image from "next/image"; 
import { useState } from "react";
import Link from "next/link";


export default function Home() {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div>
      <Navbar />
      <HeroSection />

      {/* Section with Image on Left and Text on Right */}
      <section 
        className={`relative w-full py-16 flex flex-col md:flex-row items-center justify-center gap-10 px-6 transition-all duration-500 ${
          isHovered ? "bg-green-50" : "bg-white"
        }`}
      >
        {/* Left: Image Section */}
        <div className="w-full md:w-2/5 flex justify-center">
          <div 
            className="relative w-[300px] h-[350px] md:w-[350px] md:h-[400px] cursor-pointer"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            <div 
              className={`absolute inset-0 bg-[#3CAF58] rounded-lg transition-transform duration-300 ${
                isHovered ? "translate-x-3" : "translate-x-0"
              }`}
            ></div>
            <div 
              className="relative w-full h-full transition-transform duration-300"
              style={{
                transform: isHovered ? "rotate(6deg)" : "rotate(0deg)",
              }}
            >
              <Image
                src="/imagewhoweare.jpg" 
                alt="Creative Team"
                layout="fill"
                objectFit="cover"
                className="rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>

        {/* Right: Text Content */}
        <div className="w-full md:w-3/5 text-center md:text-left">
          <p className="text-sm text-[#3CAF58] font-semibold uppercase">Who We Are</p>
          <h2 className="text-3xl md:text-5xl font-bold text-gray-800 leading-tight mt-2">
            Elevating Creativity for Your Brand!
          </h2>
          <p className="text-lg text-gray-700 mt-4">
            <span className="bg-gradient-to-r from-purple-600 to-pink-500 bg-clip-text text-transparent font-bold">
              We&apos;re a team of creatives constantly brainstorming great ideas.
            </span>{" "}
            With our combined skills, we&apos;re capable of fulfilling all your brand&apos;s needs.
          </p>
          <ul className="mt-6 space-y-3">
            <li className="flex items-center space-x-3">
              <span className="text-[#3CAF58] text-xl">✔</span>
              <span className="text-gray-800 font-semibold">Innovative Branding Solutions.</span>
            </li>
            <li className="flex items-center space-x-3">
              <span className="text-[#3CAF58] text-xl">✔</span>
              <span className="text-gray-800 font-semibold">Data-Driven Digital Marketing.</span>
            </li>
            <li className="flex items-center space-x-3">
              <span className="text-[#3CAF58] text-xl">✔</span>
              <span className="text-gray-800 font-semibold">Strategic Growth and Engagement.</span>
            </li>
          </ul>
          <Link href="/Learnmore">
  <button className="mt-6 px-6 py-3 bg-[#3CAF58] text-white font-bold rounded-lg shadow-md hover:bg-green-700 transition">
    Learn More →
  </button>
</Link>
        </div>
      </section>

     {/* What We Do Section - Hidden on Mobile */}
<div className="hidden md:block">
  <section className="w-full py-16 flex flex-col md:flex-row items-center justify-center gap-10 px-6 bg-gray-100 relative">
    {/* Left: Text Content */}
    <div className="w-full md:w-2/5 text-center md:text-left">
      <p className="text-sm text-[#3CAF58] font-semibold uppercase">What We Do</p>
      <h2 className="text-3xl md:text-5xl font-bold text-gray-800 leading-tight mt-2">
        Innovative IT Solutions for a Digital Future
      </h2>
      <p className="text-lg text-gray-700 mt-4">
        We are dedicated to transforming businesses through innovative IT solutions, strategic consulting, and digital excellence. Our expertise empowers organizations to thrive in an ever-evolving digital landscape.
      </p>
      <div className="mt-4 space-y-3 w-4/5 md:w-3/5">
        {[
          { title: "Advanced IT Consulting", percentage: 98 },
          { title: "Business Process Optimization", percentage: 93 },
          { title: "Digital Transformation Strategies", percentage: 95 }
        ].map((item, index) => (
          <div key={index} className="relative mb-3">
            <div className="flex justify-between">
              <p className="text-gray-800 font-semibold">{item.title}</p>
              <span className="text-gray-800 font-semibold">{item.percentage}%</span>
            </div>
            <div className="relative w-full bg-gray-300 rounded-full h-2.5 mt-1">
              <div className="bg-[#3CAF58] h-2.5 rounded-full" style={{ width: `${item.percentage}%` }}></div>
            </div>
          </div>
        ))}
      </div>
    </div>
    
    {/* Right: Background Image */}
    <div className="relative w-full md:w-2/5 flex justify-end">
      <div className="relative w-[450px] h-[400px] md:w-[450px] md:h-[500px] overflow-hidden rounded-lg shadow-lg">
        <Image 
          src="/imagewhatwedo.jpg" 
          alt="Campaign Success"
          layout="fill"
          objectFit="cover"
          className="rounded-lg"
        />
      </div>
      <div className="absolute left-0 md:-left-30 top-1/2 transform -translate-y-1/2 w-[260px] h-[260px] md:w-[280px] md:h-[280px] rounded-full overflow-hidden border-4 border-white shadow-xl">
        <video autoPlay loop muted className="w-full h-full object-cover rounded-full">
          <source src="/video1.mp4" type="video/mp4" />
        </video>
      </div>
    </div>
  </section>
</div>

      
      <Services />
      <Stats />
      <Project />
      <InternshipSection />
      <Testimonials />
      <CareerSection />
      <Industries />
      <ClientSection />
      <RegisterSection />
      <FAQ />
      <ContactForm />
      <Footer />
    </div>
  );
}
