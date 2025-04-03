"use client";
import React from "react";
import Navbar from "@/components/home/header/navbar";
import Footer from "@/components/home/footer-section";

export default function GameDevelopmentPage() {
  return (
    <div className="bg-gray-100 min-h-screen flex flex-col">
      <Navbar />

      {/* Hero Section */}
      <header
        className="relative w-full bg-cover bg-center h-[500px]"
        style={{ backgroundImage: "url('/sgamedev.jpg')" }}
      >
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="relative z-10 flex flex-col items-center justify-center h-full text-white text-center px-6">
          <h1 className="text-5xl font-bold">Game Development</h1>
          <p className="mt-4 text-lg max-w-2xl">
            Develop engaging, high-performance games for mobile, console, and web platforms.
          </p>
          <a
            href="/contact"
            className="mt-6 inline-block bg-blue-600 text-white px-6 py-3 rounded-full text-lg font-semibold hover:bg-blue-700 transition"
          >
            Get a Consultation
          </a>
        </div>
      </header>

      {/* Services Section */}
      <main className="container mx-auto py-16 px-6 text-center">
        <h2 className="text-4xl font-bold text-gray-800">Our Game Development Services</h2>
        <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
          We provide cutting-edge game development solutions, from concept to deployment, ensuring high-quality graphics and immersive gameplay.
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
          {[
            { title: "Mobile Game Development", description: "iOS & Android games with immersive experiences." },
            { title: "Console & PC Games", description: "High-performance games for PlayStation, Xbox, and PC." },
            { title: "Multiplayer & Online Games", description: "Build interactive and engaging multiplayer experiences." },
            { title: "VR/AR Game Development", description: "Create immersive VR and AR gaming applications." },
            { title: "Game UI/UX Design", description: "Design intuitive and visually stunning game interfaces." },
            { title: "Custom Game Engines", description: "Develop tailored game engines for unique gameplay mechanics." }
          ].map((service, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-md text-center transition hover:shadow-lg">
              <h3 className="text-xl font-semibold text-gray-800">{service.title}</h3>
              <p className="text-gray-600 mt-2">{service.description}</p>
            </div>
          ))}
        </div>
      </main>

      {/* Call to Action */}
      <section className="bg-blue-600 text-white text-center py-16">
        <h2 className="text-3xl font-bold">Ready to Build Your Game?</h2>
        <p className="mt-4 text-lg max-w-2xl mx-auto">
          Let’s bring your game idea to life with expert development and innovative design.
        </p>
        <a
          href="/contact"
          className="mt-6 inline-block bg-white text-blue-600 px-6 py-3 rounded-full text-lg font-semibold hover:bg-gray-200 transition"
        >
          Contact Us
        </a>
      </section>

      <Footer />
    </div>
  );
}
