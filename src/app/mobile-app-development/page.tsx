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
    title: "iOS App Development", 
    image: "/ios-development.jpg", 
    description: "Create stunning and high-performance iPhone and iPad applications using Swift and Objective-C." 
  },
  { 
    title: "Android App Development", 
    image: "/android-development.jpg", 
    description: "Build scalable and robust Android applications using Kotlin and Java." 
  },
  { 
    title: "Cross-Platform Development", 
    image: "/cross-platform.jpg", 
    description: "Develop apps that run seamlessly on both iOS and Android using React Native and Flutter." 
  },
  { 
    title: "UI/UX Design & Prototyping", 
    image: "/mobile-uiux.jpg", 
    description: "Design intuitive and engaging user experiences for mobile applications." 
  },
  { 
    title: "App Testing & QA", 
    image: "/mobile-testing.jpg", 
    description: "Ensure app reliability and performance with rigorous testing methodologies." 
  },
  { 
    title: "App Maintenance & Support", 
    image: "/app-maintenance.jpg", 
    description: "Keep your mobile applications updated, secure, and optimized for performance." 
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

export default function MobileAppDevelopmentPage() {
  return (
    <div className="bg-gray-100 min-h-screen flex flex-col">
      <Navbar />

      {/* Hero Section */}
      <header className="relative w-full bg-cover bg-center h-[500px]" style={{ backgroundImage: "url('/images/mobile-app-banner.jpg')" }}>
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="relative z-10 flex flex-col items-center justify-center h-full text-white text-center px-6">
          <h1 className="text-5xl font-bold">Mobile App Development</h1>
          <p className="mt-4 text-lg max-w-2xl">
            Build powerful, user-friendly apps tailored for iOS and Android platforms with cutting-edge technology.
          </p>
          <a href="/contact" className="mt-6 inline-block bg-blue-600 text-white px-6 py-3 rounded-full text-lg font-semibold hover:bg-blue-700 transition">
            Get a Free Consultation
          </a>
        </div>
      </header>

      {/* Services Section */}
      <main className="container mx-auto py-16 px-6 text-center">
        <h2 className="text-4xl font-bold text-gray-800">Our Mobile App Development Services</h2>
        <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
          From design to deployment, we craft seamless mobile experiences for iOS and Android users.
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
          {services.map((service, index) => (
            <ServiceCard key={index} {...service} />
          ))}
        </div>
      </main>

      {/* Call to Action */}
      <section className="bg-blue-600 text-white text-center py-16">
        <h2 className="text-3xl font-bold">Bring Your App Idea to Life</h2>
        <p className="mt-4 text-lg max-w-2xl mx-auto">
          Partner with us to create high-quality, scalable mobile apps for your business.
        </p>
        <a href="/contact" className="mt-6 inline-block bg-white text-blue-600 px-6 py-3 rounded-full text-lg font-semibold hover:bg-gray-200 transition">
          Contact Us
        </a>
      </section>

      <Footer />
    </div>
  );
}
