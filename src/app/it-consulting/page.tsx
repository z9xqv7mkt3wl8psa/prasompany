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
    title: "Digital Transformation", 
    image: "/digital-transformation.jpg", 
    description: "Leverage cutting-edge technology to modernize and streamline your business operations."
  },
  { 
    title: "IT Infrastructure Strategy", 
    image: "/it-infrastructure.jpg", 
    description: "Develop scalable IT infrastructure with cloud solutions, networking, and security measures."
  },
  { 
    title: "Business Process Automation", 
    image: "/process-automation.jpg", 
    description: "Enhance efficiency with automation tools that optimize repetitive tasks."
  },
  { 
    title: "Cloud Adoption & Migration", 
    image: "/cloud-migration.jpg", 
    description: "Seamlessly migrate your applications and data to the cloud with expert guidance."
  },
  { 
    title: "Enterprise IT Consulting", 
    image: "/enterprise-it.jpg", 
    description: "Tailored IT solutions for enterprises to enhance productivity and collaboration."
  },
  { 
    title: "Technology Risk Management", 
    image: "/risk-management.jpg", 
    description: "Identify, assess, and mitigate IT risks to ensure business continuity."
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

export default function ITConsultingPage() {
  return (
    <div className="bg-gray-100 min-h-screen flex flex-col">
      <Navbar />

      {/* Hero Section */}
      <header className="relative w-full bg-cover bg-center h-[500px]" style={{ backgroundImage: "url('/images/it-consulting-banner.jpg')" }}>
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="relative z-10 flex flex-col items-center justify-center h-full text-white text-center px-6">
          <h1 className="text-5xl font-bold">IT Consulting & Strategy</h1>
          <p className="mt-4 text-lg max-w-2xl">
            Drive innovation, optimize IT infrastructure, and ensure your business stays ahead in the digital era.
          </p>
          <a href="/contact" className="mt-6 inline-block bg-blue-600 text-white px-6 py-3 rounded-full text-lg font-semibold hover:bg-blue-700 transition">
            Get a Consultation
          </a>
        </div>
      </header>

      {/* Services Section */}
      <main className="container mx-auto py-16 px-6 text-center">
        <h2 className="text-4xl font-bold text-gray-800">Our IT Consulting Services</h2>
        <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
          We provide strategic IT guidance to help businesses navigate digital transformation and technology advancements.
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
          {services.map((service, index) => (
            <ServiceCard key={index} {...service} />
          ))}
        </div>
      </main>

      {/* Call to Action */}
      <section className="bg-blue-600 text-white text-center py-16">
        <h2 className="text-3xl font-bold">Transform Your IT Strategy Today</h2>
        <p className="mt-4 text-lg max-w-2xl mx-auto">
          Partner with our experts to optimize your IT infrastructure and drive business growth.
        </p>
        <a href="/contact" className="mt-6 inline-block bg-white text-blue-600 px-6 py-3 rounded-full text-lg font-semibold hover:bg-gray-200 transition">
          Contact Us
        </a>
      </section>

      <Footer />
    </div>
  );
}

