"use client";

import React from "react";
import Navbar from "@/components/home/header/navbar";
import Footer from "@/components/home/footer-section";

const BigDataSolutions = () => {
  return (
    <div className="bg-gray-100 min-h-screen flex flex-col">
      <Navbar />

      {/* Hero Section */}
      <header
        className="relative w-full bg-cover bg-center h-[500px]"
        style={{ backgroundImage: "url('/sbigdata.jpg')" }}
      >
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="relative z-10 flex flex-col items-center justify-center h-full text-white text-center px-6">
          <h1 className="text-5xl font-bold">Big Data Solutions</h1>
          <p className="mt-4 text-lg max-w-2xl">
            Leverage big data frameworks to process, analyze, and visualize complex data sets.
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
        <h2 className="text-4xl font-bold text-gray-800">Our Big Data Services</h2>
        <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
          From real-time analytics to predictive modeling, we provide advanced big data solutions to enhance business intelligence.
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
          <div className="bg-white p-6 rounded-lg shadow-md text-center">
            <h3 className="text-xl font-semibold text-gray-800">Data Processing</h3>
            <p className="text-gray-600 mt-2">
              Process and transform large-scale data efficiently with cutting-edge technologies.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md text-center">
            <h3 className="text-xl font-semibold text-gray-800">Predictive Analytics</h3>
            <p className="text-gray-600 mt-2">
              Use machine learning to identify trends and forecast business outcomes.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md text-center">
            <h3 className="text-xl font-semibold text-gray-800">Big Data Visualization</h3>
            <p className="text-gray-600 mt-2">
              Turn raw data into actionable insights with interactive dashboards and reports.
            </p>
          </div>
        </div>
      </main>

      {/* Call to Action */}
      <section className="bg-blue-600 text-white text-center py-16">
        <h2 className="text-3xl font-bold">Leverage Big Data for Smarter Decisions</h2>
        <p className="mt-4 text-lg max-w-2xl mx-auto">
          Unlock the power of big data with our end-to-end solutions tailored to your business needs.
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

export default BigDataSolutions;
