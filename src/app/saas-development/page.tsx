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
    title: "Custom SaaS Development", 
    image: "/custom-saas.jpg", 
    description: "Build powerful cloud-based applications tailored to your business needs." 
  },
  { 
    title: "Multi-Tenant Architecture", 
    image: "/multi-tenant.jpg", 
    description: "Develop scalable, multi-tenant SaaS solutions with high efficiency." 
  },
  { 
    title: "Cloud Hosting & Deployment", 
    image: "/cloud-hosting.jpg", 
    description: "Leverage AWS, Azure, and Google Cloud for reliable cloud infrastructure." 
  },
  { 
    title: "API Development & Integration", 
    image: "/api-integration.jpg", 
    description: "Seamlessly integrate third-party APIs for enhanced SaaS functionality." 
  },
  { 
    title: "Security & Compliance", 
    image: "/saas-security.jpg", 
    description: "Ensure compliance with industry standards and secure user data." 
  },
  { 
    title: "SaaS Maintenance & Support", 
    image: "/saas-maintenance.jpg", 
    description: "Continuous monitoring, updates, and support for your SaaS platform." 
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

export default function SaaSDevelopmentPage() {
  return (
    <div className="bg-gray-100 min-h-screen flex flex-col">
      <Navbar />

      {/* Hero Section */}
      <header className="relative w-full bg-cover bg-center h-[500px]" style={{ backgroundImage: "url('/images/saas-banner.jpg')" }}>
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="relative z-10 flex flex-col items-center justify-center h-full text-white text-center px-6">
          <h1 className="text-5xl font-bold">SaaS Development Solutions</h1>
          <p className="mt-4 text-lg max-w-2xl">
            Create scalable, cloud-based SaaS applications tailored for businesses of all sizes.
          </p>
          <a href="/contact" className="mt-6 inline-block bg-blue-600 text-white px-6 py-3 rounded-full text-lg font-semibold hover:bg-blue-700 transition">
            Get a Free Consultation
          </a>
        </div>
      </header>

      {/* Services Section */}
      <main className="container mx-auto py-16 px-6 text-center">
        <h2 className="text-4xl font-bold text-gray-800">Our SaaS Development Services</h2>
        <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
          From custom SaaS applications to API integration and security, we cover all aspects of SaaS development.
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
          {services.map((service, index) => (
            <ServiceCard key={index} {...service} />
          ))}
        </div>
      </main>

      {/* Call to Action */}
      <section className="bg-blue-600 text-white text-center py-16">
        <h2 className="text-3xl font-bold">Build Your SaaS Product with Us</h2>
        <p className="mt-4 text-lg max-w-2xl mx-auto">
          Let's develop a cloud-based SaaS solution tailored for your business growth.
        </p>
        <a href="/contact" className="mt-6 inline-block bg-white text-blue-600 px-6 py-3 rounded-full text-lg font-semibold hover:bg-gray-200 transition">
          Contact Us
        </a>
      </section>

      <Footer />
    </div>
  );
}
