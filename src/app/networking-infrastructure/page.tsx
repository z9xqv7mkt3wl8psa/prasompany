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
    title: "Network Setup & Management", 
    image: "/network-setup.jpg", 
    description: "Efficiently design, deploy, and manage network infrastructures for seamless connectivity." 
  },
  { 
    title: "VPN & Secure Access", 
    image: "/vpn-security.jpg", 
    description: "Enable secure remote work with Virtual Private Network (VPN) solutions and access control." 
  },
  { 
    title: "VoIP Services", 
    image: "/voip.jpg", 
    description: "Implement Voice over IP (VoIP) solutions for cost-effective and efficient business communication." 
  },
  { 
    title: "Wireless Networking", 
    image: "/wireless-networking.jpg", 
    description: "Set up fast and secure wireless networks for offices, campuses, and industrial setups." 
  },
  { 
    title: "Server Infrastructure", 
    image: "/server-infrastructure.jpg", 
    description: "Optimize performance and security with scalable server infrastructure solutions." 
  },
  { 
    title: "Cloud Networking", 
    image: "/cloud-networking.jpg", 
    description: "Leverage cloud-based networking solutions for enhanced flexibility and scalability." 
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

export default function NetworkingInfrastructurePage() {
  return (
    <div className="bg-gray-100 min-h-screen flex flex-col">
      <Navbar />

      {/* Hero Section */}
      <header className="relative w-full bg-cover bg-center h-[500px]" style={{ backgroundImage: "url('/images/networking-banner.jpg')" }}>
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="relative z-10 flex flex-col items-center justify-center h-full text-white text-center px-6">
          <h1 className="text-5xl font-bold">Networking & Infrastructure</h1>
          <p className="mt-4 text-lg max-w-2xl">
            Efficient network setup, management, and security solutions to keep your business connected.
          </p>
          <a href="/contact" className="mt-6 inline-block bg-blue-600 text-white px-6 py-3 rounded-full text-lg font-semibold hover:bg-blue-700 transition">
            Get a Consultation
          </a>
        </div>
      </header>

      {/* Services Section */}
      <main className="container mx-auto py-16 px-6 text-center">
        <h2 className="text-4xl font-bold text-gray-800">Our Networking & Infrastructure Services</h2>
        <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
          Empower your business with robust, scalable, and secure networking solutions.
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
          {services.map((service, index) => (
            <ServiceCard key={index} {...service} />
          ))}
        </div>
      </main>

      {/* Call to Action */}
      <section className="bg-blue-600 text-white text-center py-16">
        <h2 className="text-3xl font-bold">Optimize Your Network Infrastructure</h2>
        <p className="mt-4 text-lg max-w-2xl mx-auto">
          Get expert solutions for secure and efficient networking.
        </p>
        <a href="/contact" className="mt-6 inline-block bg-white text-blue-600 px-6 py-3 rounded-full text-lg font-semibold hover:bg-gray-200 transition">
          Contact Us
        </a>
      </section>

      <Footer />
    </div>
  );
}

