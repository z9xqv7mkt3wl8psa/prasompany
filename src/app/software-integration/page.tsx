"use client";
import React from "react";
import Navbar from "@/components/home/header/navbar";
import Footer from "@/components/home/footer-section";

interface ServiceCardProps {
  title: string;
  image: string;
  description: string;
}

const services: ServiceCardProps[] = [
  { 
    title: "API Development & Integration", 
    image: "/api-integration.jpg", 
    description: "Build and integrate custom APIs for seamless data exchange between systems." 
  },
  { 
    title: "CRM & ERP Integration", 
    image: "/crm-erp.jpg", 
    description: "Enhance business operations by integrating CRM and ERP platforms like Salesforce, SAP, and HubSpot." 
  },
  { 
    title: "Third-Party Software Integration", 
    image: "/thirdparty.jpg", 
    description: "Connect external applications like payment gateways, accounting tools, and more into your workflow." 
  },
  { 
    title: "Cloud Service Integration", 
    image: "/cloud-integration.jpg", 
    description: "Sync on-premise and cloud-based applications for better performance and scalability." 
  },
  { 
    title: "Custom Middleware Development", 
    image: "/middleware.jpg", 
    description: "Create middleware solutions to bridge communication between disparate systems." 
  },
  { 
    title: "Database Integration & Migration", 
    image: "/database-integration.jpg", 
    description: "Ensure smooth data flow and consistency across multiple database environments." 
  },
];

function ServiceCard({ title, image, description }: ServiceCardProps) {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md text-center transition hover:shadow-lg">
      <img src={image} alt={title} className="w-full h-48 object-cover rounded-md mb-4" />
      <h3 className="text-xl font-semibold text-gray-800">{title}</h3>
      <p className="text-gray-600 mt-2">{description}</p>
    </div>
  );
}

export default function CustomSoftwareIntegrationPage() {
  return (
    <div className="bg-gray-100 min-h-screen flex flex-col">
      <Navbar />

      {/* Hero Section */}
      <header className="relative w-full bg-cover bg-center h-[500px]" style={{ backgroundImage: "url('/images/custom-software-banner.jpg')" }}>
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="relative z-10 flex flex-col items-center justify-center h-full text-white text-center px-6">
          <h1 className="text-5xl font-bold">Custom Software Integration</h1>
          <p className="mt-4 text-lg max-w-2xl">
            Seamlessly integrate third-party software into your existing systems for enhanced functionality and efficiency.
          </p>
          <a href="/contact" className="mt-6 inline-block bg-blue-600 text-white px-6 py-3 rounded-full text-lg font-semibold hover:bg-blue-700 transition">
            Get a Consultation
          </a>
        </div>
      </header>

      {/* Services Section */}
      <main className="container mx-auto py-16 px-6 text-center">
        <h2 className="text-4xl font-bold text-gray-800">Our Custom Software Integration Services</h2>
        <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
          Our experts integrate and optimize software solutions tailored to your business needs.
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
          {services.map((service, index) => (
            <ServiceCard key={index} {...service} />
          ))}
        </div>
      </main>

      {/* Call to Action */}
      <section className="bg-blue-600 text-white text-center py-16">
        <h2 className="text-3xl font-bold">Enhance Your Business with Seamless Integration</h2>
        <p className="mt-4 text-lg max-w-2xl mx-auto">
          Let us help you streamline your software ecosystem with secure and efficient integrations.
        </p>
        <a href="/contact" className="mt-6 inline-block bg-white text-blue-600 px-6 py-3 rounded-full text-lg font-semibold hover:bg-gray-200 transition">
          Contact Us
        </a>
      </section>

      <Footer />
    </div>
  );
}
