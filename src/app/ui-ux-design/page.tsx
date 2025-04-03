"use client";

import React from "react";
import Navbar from "@/components/home/header/navbar";
import Footer from "@/components/home/footer-section";

export default function UIUXDesignPage() {
  return (
    <div className="bg-gray-100 min-h-screen flex flex-col">
      <Navbar />

      {/* Hero Section */}
      <header
        className="relative w-full bg-cover bg-center h-[500px]"
        style={{ backgroundImage: "url('/suiux.jpg')" }}
      >
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="relative z-10 flex flex-col items-center justify-center h-full text-white text-center px-6">
          <h1 className="text-5xl font-bold">UI/UX Design & Prototyping</h1>
          <p className="mt-4 text-lg max-w-2xl">
            Craft intuitive interfaces and interactive prototypes for web and mobile applications.
          </p>
          <a
            href="/contact"
            className="mt-6 inline-block bg-blue-600 text-white px-6 py-3 rounded-full text-lg font-semibold hover:bg-blue-700 transition"
          >
            Get a Consultation
          </a>
        </div>
      </header>

      {/* Content Section */}
      <main className="container mx-auto py-16 px-6 text-center">
        <h2 className="text-4xl font-bold text-gray-800">Our UI/UX Services</h2>
        <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
          Enhance user engagement with modern UI/UX design solutions tailored to your business needs.
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
          {[
            { title: "User Research", description: "Understand your users with in-depth research and analysis." },
            { title: "Wireframing & Prototyping", description: "Create interactive wireframes to visualize user flow." },
            { title: "Visual Design", description: "Craft aesthetically pleasing designs aligned with your brand." },
            { title: "Usability Testing", description: "Ensure seamless user experience through rigorous testing." },
            { title: "Mobile & Web UI/UX", description: "Responsive and adaptive designs for mobile and web platforms." },
            { title: "Design System Development", description: "Establish a consistent UI framework for your products." },
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
        <h2 className="text-3xl font-bold">Ready to Transform Your Digital Experience?</h2>
        <p className="mt-4 text-lg max-w-2xl mx-auto">
          Partner with us to build intuitive and engaging user interfaces.
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
