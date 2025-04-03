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
    title: "Custom Website Development", 
    image: "/custom-web.jpg", 
    description: "Build high-performance, scalable websites tailored to your business needs." 
  },
  { 
    title: "UI/UX Design", 
    image: "/uiux-design.jpg", 
    description: "Create intuitive and visually appealing user interfaces for optimal engagement." 
  },
  { 
    title: "E-Commerce Solutions", 
    image: "/ecommerce.jpg", 
    description: "Develop secure and feature-rich online stores with seamless shopping experiences." 
  },
  { 
    title: "CMS Development", 
    image: "/cms.jpg", 
    description: "Leverage platforms like WordPress and Shopify for easy content management." 
  },
  { 
    title: "Web Application Development", 
    image: "/web-app.jpg", 
    description: "Develop interactive web applications with modern frameworks and technologies." 
  },
  { 
    title: "Website Maintenance & Support", 
    image: "/web-maintenance.jpg", 
    description: "Ensure smooth operation with regular updates, security checks, and optimizations." 
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

export default function WebDevelopmentPage() {
  return (
    <div className="bg-gray-100 min-h-screen flex flex-col">
      <Navbar />

      {/* Hero Section */}
      <header className="relative w-full bg-cover bg-center h-[500px]" style={{ backgroundImage: "url('/images/web-dev-banner.jpg')" }}>
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="relative z-10 flex flex-col items-center justify-center h-full text-white text-center px-6">
          <h1 className="text-5xl font-bold">Web Development & Design</h1>
          <p className="mt-4 text-lg max-w-2xl">
            Comprehensive website development, UI/UX design, e-commerce solutions, and CMS platforms like WordPress and Shopify.
          </p>
          <a href="/contact" className="mt-6 inline-block bg-blue-600 text-white px-6 py-3 rounded-full text-lg font-semibold hover:bg-blue-700 transition">
            Get a Free Consultation
          </a>
        </div>
      </header>

      {/* Services Section */}
      <main className="container mx-auto py-16 px-6 text-center">
        <h2 className="text-4xl font-bold text-gray-800">Our Web Development & Design Services</h2>
        <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
          We provide full-stack web development and design solutions to enhance your online presence.
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
          {services.map((service, index) => (
            <ServiceCard key={index} {...service} />
          ))}
        </div>
      </main>

      {/* Call to Action */}
      <section className="bg-blue-600 text-white text-center py-16">
        <h2 className="text-3xl font-bold">Let’s Build Your Digital Presence</h2>
        <p className="mt-4 text-lg max-w-2xl mx-auto">
          Whether you need a website, e-commerce store, or custom web application, we’ve got you covered.
        </p>
        <a href="/contact" className="mt-6 inline-block bg-white text-blue-600 px-6 py-3 rounded-full text-lg font-semibold hover:bg-gray-200 transition">
          Contact Us
        </a>
      </section>

      <Footer />
    </div>
  );
}
