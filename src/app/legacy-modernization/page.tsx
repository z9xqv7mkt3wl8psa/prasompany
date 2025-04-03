import React from "react";
import Navbar from "@/components/home/header/navbar";
import Footer from "@/components/home/footer-section";

export default function LegacyModernization() {
  return (
    <div className="bg-gray-100 min-h-screen flex flex-col">
      <Navbar />

      {/* Hero Section */}
      <header className="relative w-full bg-cover bg-center h-[500px]" style={{ backgroundImage: "url('/images/legacy-modernization.jpg')" }}>
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="relative z-10 flex flex-col items-center justify-center h-full text-white text-center px-6">
          <h1 className="text-5xl font-bold">Legacy System Modernization</h1>
          <p className="mt-4 text-lg max-w-2xl">
            Upgrade and modernize outdated software to improve performance, security, and usability.
          </p>
          <a href="/contact" className="mt-6 inline-block bg-blue-600 text-white px-6 py-3 rounded-full text-lg font-semibold hover:bg-blue-700 transition">
            Get a Consultation
          </a>
        </div>
      </header>

      {/* Services Section */}
      <main className="container mx-auto py-16 px-6 text-center">
        <h2 className="text-4xl font-bold text-gray-800">Our Modernization Services</h2>
        <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
          We help businesses transform their legacy systems with updated technologies, ensuring better performance and future-proofing operations.
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
          {[
            { title: "Software Re-engineering", image: "/software-reengineering.jpg", description: "Refactor and enhance existing software for improved efficiency." },
            { title: "Cloud Migration", image: "/cloud-migration.jpg", description: "Move legacy applications to cloud platforms for scalability and security." },
            { title: "Database Modernization", image: "/database-modernization.jpg", description: "Upgrade outdated databases for better speed and security." },
            { title: "Microservices Transition", image: "/microservices.jpg", description: "Transform monolithic architectures into microservices for flexibility." },
            { title: "UI/UX Modernization", image: "/ui-ux-modernization.jpg", description: "Redesign old interfaces to provide better user experiences." },
            { title: "API Enablement", image: "/api-integration.jpg", description: "Integrate APIs to enhance system interoperability and connectivity." }
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
        <h2 className="text-3xl font-bold">Ready to Upgrade Your Systems?</h2>
        <p className="mt-4 text-lg max-w-2xl mx-auto">
          Let us help you modernize your IT infrastructure for better performance and security.
        </p>
        <a href="/contact" className="mt-6 inline-block bg-white text-blue-600 px-6 py-3 rounded-full text-lg font-semibold hover:bg-gray-200 transition">
          Contact Us
        </a>
      </section>

      <Footer />
    </div>
  );
}
