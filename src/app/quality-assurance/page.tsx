"use client";

import React from "react";
import Navbar from "@/components/home/header/navbar";
import Footer from "@/components/home/footer-section";

const QualityAssurancePage = () => {
  return (
    <div className="bg-gray-100 min-h-screen flex flex-col">
      <Navbar />

      {/* Hero Section */}
      <header
        className="relative w-full bg-cover bg-center h-[500px]"
        style={{ backgroundImage: "url('/sqa.jpg')" }}
      >
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="relative z-10 flex flex-col items-center justify-center h-full text-white text-center px-6">
          <h1 className="text-5xl font-bold">Quality Assurance & Testing Services</h1>
          <p className="mt-4 text-lg max-w-2xl">
            Ensure software reliability with manual and automated testing solutions.
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
        <h2 className="text-4xl font-bold text-gray-800">Our Testing Services</h2>
        <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
          We offer end-to-end software testing, including functional, performance, security, and automation testing.
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
          {[
            { title: "Manual Testing", image: "/manual-testing.jpg" },
            { title: "Automation Testing", image: "/automation-testing.jpg" },
            { title: "Performance Testing", image: "/performance-testing.jpg" },
            { title: "Security Testing", image: "/security-testing.jpg" },
            { title: "Usability Testing", image: "/usability-testing.jpg" },
            { title: "Regression Testing", image: "/regression-testing.jpg" }
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
        <h2 className="text-3xl font-bold">Enhance Your Software Quality</h2>
        <p className="mt-4 text-lg max-w-2xl mx-auto">
          Our expert QA team ensures your applications are error-free and meet industry standards.
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

export default QualityAssurancePage;
