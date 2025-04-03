"use client";

import React from "react";
import Navbar from "@/components/home/header/navbar";
import Footer from "@/components/home/footer-section";

const APIDevelopmentPage = () => {
  return (
    <div className="bg-gray-100 min-h-screen flex flex-col">
      <Navbar />

      {/* Hero Section */}
      <header
        className="relative w-full bg-cover bg-center h-[500px]"
        style={{ backgroundImage: "url('/sapi.jpg')" }}
      >
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="relative z-10 flex flex-col items-center justify-center h-full text-white text-center px-6">
          <h1 className="text-5xl font-bold">API Development & Integration</h1>
          <p className="mt-4 text-lg max-w-2xl">
            Build robust APIs and integrate third-party services seamlessly into your applications.
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
        <h2 className="text-4xl font-bold text-gray-800">Our API Services</h2>
        <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
          We design, develop, and integrate secure APIs for seamless data exchange and system interoperability.
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
          {[
            { title: "REST API Development", image: "/rest-api.jpg" },
            { title: "GraphQL API", image: "/graphql-api.jpg" },
            { title: "Third-Party API Integration", image: "/third-party-api.jpg" },
            { title: "Custom API Solutions", image: "/custom-api.jpg" },
            { title: "API Security & Authentication", image: "/api-security.jpg" },
            { title: "Microservices & Cloud APIs", image: "/microservices-api.jpg" }
          ].map((service, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-md text-center transition hover:shadow-lg">
              <img src={service.image} alt={service.title} className="w-full h-48 object-cover rounded-md mb-4" />
              <h3 className="text-xl font-semibold text-gray-800">{service.title}</h3>
            </div>
          ))}
        </div>
      </main>

      {/* Call to Action */}
      <section className="bg-blue-600 text-white text-center py-16">
        <h2 className="text-3xl font-bold">Seamless API Integrations</h2>
        <p className="mt-4 text-lg max-w-2xl mx-auto">
          Enhance your software ecosystem with our scalable and secure API solutions.
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
};

export default APIDevelopmentPage;
