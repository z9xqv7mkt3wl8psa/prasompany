"use client";

import React from "react";
import Navbar from "@/components/home/header/navbar";
import Footer from "@/components/home/footer-section";

export default function VRARSolutionsPage() {
  return (
    <div className="bg-gray-100 min-h-screen flex flex-col">
      <Navbar />

      {/* Hero Section */}
      <header
        className="relative w-full bg-cover bg-center h-[500px]"
        style={{ backgroundImage: "url('/svrar.jpg')" }}
      >
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="relative z-10 flex flex-col items-center justify-center h-full text-white text-center px-6">
          <h1 className="text-5xl font-bold">Virtual & Augmented Reality Solutions</h1>
          <p className="mt-4 text-lg max-w-2xl">
            Create immersive VR/AR experiences for training, marketing, and interactive solutions.
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
        <h2 className="text-4xl font-bold text-gray-800">Our VR/AR Solutions</h2>
        <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
          We develop innovative virtual and augmented reality applications for various industries, enhancing engagement and interactivity.
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
          {[
            { title: "VR Training & Simulations", image: "/vr-training.jpg", description: "Immersive training solutions for businesses and education." },
            { title: "Augmented Reality for Marketing", image: "/ar-marketing.jpg", description: "Enhance brand engagement with AR-powered marketing campaigns." },
            { title: "Interactive VR Experiences", image: "/interactive-vr.jpg", description: "Develop cutting-edge VR applications for gaming and business use." },
            { title: "AR for Retail & E-commerce", image: "/ar-retail.jpg", description: "Allow customers to visualize products in their real-world environment." },
            { title: "Enterprise VR Solutions", image: "/enterprise-vr.jpg", description: "Customized VR applications for corporate training and presentations." },
            { title: "Medical & Healthcare VR", image: "/medical-vr.jpg", description: "Innovative VR solutions for medical training and patient engagement." },
          ].map((service, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-md text-center transition hover:shadow-lg">
              <img src={service.image} alt={service.title} className="w-full h-48 object-cover rounded-md mb-4" />
              <h3 className="text-xl font-semibold text-gray-800">{service.title}</h3>
              <p className="text-gray-600 mt-2">{service.description}</p>
            </div>
          ))}
        </div>
      </main>

      {/* Call to Action */}
      <section className="bg-blue-600 text-white text-center py-16">
        <h2 className="text-3xl font-bold">Ready to Bring Your Ideas to Life?</h2>
        <p className="mt-4 text-lg max-w-2xl mx-auto">
          Leverage our expertise in VR/AR technology to create compelling digital experiences.
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
