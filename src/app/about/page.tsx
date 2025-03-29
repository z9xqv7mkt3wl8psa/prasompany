"use client";
import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import Navbar from "@/components/home/header/navbar"; // Importing Navbar
import Footer from "@/components/home/footer-section";

const About = () => {
  const [isPlaying, setIsPlaying] = useState(false);

  const handlePlay = () => {
    const video = document.getElementById("company-video") as HTMLVideoElement;
    if (video) {
      video.play();
      setIsPlaying(true);
    }
  };

  return (
    <>
      <Navbar /> {/* Added Navbar here */}
      <div className="2xl:container 2xl:mx-auto lg:py-20 lg:px-24 md:py-16 md:px-12 py-12 px-6">
        {/* About Us Section */}
        <section className="lg:w-10/12 w-full text-center mx-auto">
          
          <h2 className="font-extrabold lg:text-5xl text-3xl leading-tight mt-3">
            Where Vision Meets Execution
          </h2>
          <p className="bg-gradient-to-r from-purple-600 to-pink-500 text-transparent bg-clip-text text-xl mt-4 leading-relaxed">
            We believe great design should be accessible to everyone. Our goal is to create innovative solutions that are both elegant and impactful.
          </p>
        </section>

        {/* Hero Image */}
        <section className="lg:mt-14 sm:mt-10 mt-12">
          <Image
            className="w-full rounded-lg shadow-lg"
            src="/Group.png"
            alt="Group of people Chilling"
            width={800}
            height={400}
          />
        </section>

        {/* Our Story Section */}
        <section className="lg:mt-20 sm:mt-16 mt-12 flex lg:flex-row flex-col lg:gap-12 gap-10">
          <div className="w-full lg:w-6/12">
            <h2 className=" font-bold lg:text-4xl text-3xl">Our Story</h2>
            <p className="text-gray-600 text-lg mt-4 leading-relaxed">
            We started with a simple mission: to empower businesses with seamless digital solutions. From our humble beginnings, we have grown into a dedicated team of experts, helping startups and enterprises build web and mobile applications that drive success.
            <br />
            Our journey has been fueled by innovation, collaboration, and a commitment to delivering scalable, high-quality solutions. We take pride in turning ideas into reality, ensuring our clients have the tools they need to grow and thrive in the digital world.
          </p>
          </div>

          {/* Video with Centered Play Button */}
          <div className="relative lg:flex items-center w-full lg:w-6/12">
            <video id="company-video" className="w-full rounded-lg shadow-lg" src="/video1.mp4" controls />
            {!isPlaying && (
            <button
            onClick={handlePlay}
            className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 rounded-lg"
            aria-label="Play video"
          >
            <svg className="w-16 h-16 text-white" fill="currentColor" viewBox="0 0 20 20">
              <path d="M4.5 3.5v13l11-6.5-11-6.5z" />
            </svg>
          </button>
            )}
          </div>
        </section>

        {/* Mission & Vision */}
        <section className="lg:mt-20 sm:mt-16 mt-12 flex lg:flex-row flex-col lg:gap-12 gap-10">
          <div className="w-full lg:w-6/12">
            <h2 className=" font-bold lg:text-4xl text-3xl">Our Mission</h2>
            <p className="text-gray-600 text-lg mt-4 leading-relaxed">
            Our mission is to help businesses build and scale with innovative web and app development solutions.
            We strive to make high-quality digital experiences accessible to everyone, empowering startups and enterprises alike.
            By combining creativity, technology, and expertise, we turn ideas into reality. Our commitment is to deliver seamless,
            scalable, and impactful solutions that drive growth and success.
          </p>
          </div>
          <div className="w-full lg:w-6/12">
            <h2 className=" font-bold lg:text-4xl text-3xl">Our Vision</h2>
            <p className="text-gray-600 text-lg mt-4 leading-relaxed">
            We envision a world where technology empowers businesses to bring their ideas to life effortlessly. Our goal is to bridge the gap between vision and execution by providing cutting-edge web and app development solutions. We strive to create a digital landscape where innovation is accessible, growth is seamless, and success is within reach for everyone. Through collaboration and creativity,
            we help businesses thrive in the ever-evolving tech space.
          </p>
          </div>
        </section>

        {/* CTA Section */}
        <section className="lg:mt-20 sm:mt-16 mt-12 text-center">
          <h2 className="font-bold lg:text-4xl text-3xl">Join Us</h2>
          <p className="text-gray-600 text-lg mt-4 leading-relaxed">
            Interested in being part of our journey? Let create something amazing together.
          </p>
          <Link href="/business">
            <button className="mt-6 bg-indigo-600 text-white font-semibold px-6 py-3 rounded-lg shadow-md hover:bg-indigo-700 transition">
              Contact Us
            </button>
          </Link>
        </section>
         <Footer />
      </div>
    </>
  );
};

export default About;
