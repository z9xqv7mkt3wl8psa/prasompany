import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import Navbar from "@/components/home/header/navbar"; // Importing Navbar

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
      <Navbar /> {/* Added Navbar at the top */}
      <div className="2xl:container 2xl:mx-auto lg:py-20 lg:px-24 md:py-16 md:px-12 py-12 px-6">
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
            <h2 className="font-bold lg:text-4xl text-3xl">Our Story</h2>
            <p className="text-gray-600 text-lg mt-4 leading-relaxed">
              We started with a simple mission: to empower businesses with seamless digital solutions...
            </p>
          </div>

          {/* Video with Play Button */}
          <div className="relative lg:flex items-center w-full lg:w-6/12">
            <video id="company-video" className="w-full rounded-lg shadow-lg" src="/video.mp4" controls />
            {!isPlaying && (
              <button
                onClick={handlePlay}
                className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 rounded-lg"
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
            <h2 className="font-bold lg:text-4xl text-3xl">Our Mission</h2>
            <p className="text-gray-600 text-lg mt-4 leading-relaxed">
              Our mission is to help businesses build and scale with innovative web and app development solutions...
            </p>
          </div>
          <div className="w-full lg:w-6/12">
            <h2 className="font-bold lg:text-4xl text-3xl">Our Vision</h2>
            <p className="text-gray-600 text-lg mt-4 leading-relaxed">
              We envision a world where technology empowers businesses to bring their ideas to life effortlessly...
            </p>
          </div>
        </section>

        {/* CTA Section */}
        <section className="lg:mt-20 sm:mt-16 mt-12 text-center">
          <h2 className="font-bold lg:text-4xl text-3xl">Join Us</h2>
          <p className="text-gray-600 text-lg mt-4 leading-relaxed">
            Interested in being part of our journey? Let's create something amazing together.
          </p>
          <Link href="/business">
            <button className="mt-6 bg-indigo-600 text-white font-semibold px-6 py-3 rounded-lg shadow-md hover:bg-indigo-700 transition">
              Contact Us
            </button>
          </Link>
        </section>
      </div>
    </>
  );
};

export default About;
