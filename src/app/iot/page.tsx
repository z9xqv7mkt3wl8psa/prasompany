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
    title: "Smart Device Integration", 
    image: "/iot-devices.jpg", 
    description: "Connect and manage IoT devices for seamless automation and remote control." 
  },
  { 
    title: "Industrial IoT Solutions", 
    image: "/industrial-iot.jpg", 
    description: "Leverage IoT for predictive maintenance, process optimization, and real-time monitoring." 
  },
  { 
    title: "IoT Analytics & Big Data", 
    image: "/iot-analytics.jpg", 
    description: "Collect and analyze IoT-generated data to drive intelligent decision-making." 
  },
  { 
    title: "Smart Home & Building Automation", 
    image: "/smart-home.jpg", 
    description: "Develop smart home and office solutions for energy efficiency, security, and convenience." 
  },
  { 
    title: "IoT Security & Compliance", 
    image: "/iot-security.jpg", 
    description: "Protect IoT networks with robust security measures and regulatory compliance." 
  },
  { 
    title: "Edge Computing & AI in IoT", 
    image: "/edge-computing.jpg", 
    description: "Implement edge computing and AI to enhance real-time IoT data processing and automation." 
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

export default function IoTPage() {
  return (
    <div className="bg-gray-100 min-h-screen flex flex-col">
      <Navbar />

      {/* Hero Section */}
      <header className="relative w-full bg-cover bg-center h-[500px]" style={{ backgroundImage: "url('/images/iot-banner.jpg')" }}>
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="relative z-10 flex flex-col items-center justify-center h-full text-white text-center px-6">
          <h1 className="text-5xl font-bold">Internet of Things (IoT) Solutions</h1>
          <p className="mt-4 text-lg max-w-2xl">
            Transform your business with cutting-edge IoT technology, enabling connectivity, automation, and real-time insights.
          </p>
          <a href="/contact" className="mt-6 inline-block bg-blue-600 text-white px-6 py-3 rounded-full text-lg font-semibold hover:bg-blue-700 transition">
            Get a Consultation
          </a>
        </div>
      </header>

      {/* Services Section */}
      <main className="container mx-auto py-16 px-6 text-center">
        <h2 className="text-4xl font-bold text-gray-800">Our IoT Services</h2>
        <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
          From smart devices to industrial automation, we deliver robust IoT solutions tailored to your business needs.
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
          {services.map((service, index) => (
            <ServiceCard key={index} {...service} />
          ))}
        </div>
      </main>

      {/* Call to Action */}
      <section className="bg-blue-600 text-white text-center py-16">
        <h2 className="text-3xl font-bold">Connect Your Business with IoT</h2>
        <p className="mt-4 text-lg max-w-2xl mx-auto">
          Unlock new possibilities with smart IoT solutions for automation, monitoring, and data-driven insights.
        </p>
        <a href="/contact" className="mt-6 inline-block bg-white text-blue-600 px-6 py-3 rounded-full text-lg font-semibold hover:bg-gray-200 transition">
          Contact Us
        </a>
      </section>

      <Footer />
    </div>
  );
}
