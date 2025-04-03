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
    title: "Custom ERP Development", 
    image: "/erp-development.jpg", 
    description: "Tailor-made ERP solutions to streamline your business processes and improve efficiency." 
  },
  { 
    title: "CRM System Integration", 
    image: "/crm-integration.jpg", 
    description: "Seamlessly integrate CRM with your existing systems for better customer relationship management." 
  },
  { 
    title: "Cloud-Based ERP & CRM", 
    image: "/cloud-erp.jpg", 
    description: "Leverage cloud technology for scalable and accessible ERP & CRM solutions." 
  },
  { 
    title: "Sales & Marketing Automation", 
    image: "/sales-marketing.jpg", 
    description: "Automate sales, marketing, and lead generation processes with powerful CRM tools." 
  },
  { 
    title: "Inventory & Supply Chain Management", 
    image: "/supply-chain.jpg", 
    description: "Optimize inventory control, procurement, and logistics with integrated ERP solutions." 
  },
  { 
    title: "Business Analytics & Reporting", 
    image: "/business-analytics.jpg", 
    description: "Gain real-time insights and generate reports to enhance decision-making." 
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

export default function ERPCrmPage() {
  return (
    <div className="bg-gray-100 min-h-screen flex flex-col">
      <Navbar />

      {/* Hero Section */}
      <header className="relative w-full bg-cover bg-center h-[500px]" style={{ backgroundImage: "url('/images/erp-crm-banner.jpg')" }}>
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="relative z-10 flex flex-col items-center justify-center h-full text-white text-center px-6">
          <h1 className="text-5xl font-bold">ERP & CRM Solutions</h1>
          <p className="mt-4 text-lg max-w-2xl">
            Optimize business operations and customer relationships with powerful ERP & CRM solutions tailored for your needs.
          </p>
          <a href="/contact" className="mt-6 inline-block bg-blue-600 text-white px-6 py-3 rounded-full text-lg font-semibold hover:bg-blue-700 transition">
            Get a Consultation
          </a>
        </div>
      </header>

      {/* Services Section */}
      <main className="container mx-auto py-16 px-6 text-center">
        <h2 className="text-4xl font-bold text-gray-800">Our ERP & CRM Services</h2>
        <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
          From custom ERP development to cloud-based CRM solutions, we help businesses enhance efficiency and customer engagement.
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
          {services.map((service, index) => (
            <ServiceCard key={index} {...service} />
          ))}
        </div>
      </main>

      {/* Call to Action */}
      <section className="bg-blue-600 text-white text-center py-16">
        <h2 className="text-3xl font-bold">Upgrade Your Business with ERP & CRM</h2>
        <p className="mt-4 text-lg max-w-2xl mx-auto">
          Streamline operations and enhance customer engagement with our ERP & CRM solutions.
        </p>
        <a href="/contact" className="mt-6 inline-block bg-white text-blue-600 px-6 py-3 rounded-full text-lg font-semibold hover:bg-gray-200 transition">
          Contact Us
        </a>
      </section>

      <Footer />
    </div>
  );
}
