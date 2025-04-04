"use client";
import React from "react";
import Navbar from "@/components/home/header/navbar";
import Footer from "@/components/home/footer-section";

interface ServiceCardProps {
  image: string;
  title: string;
  description: string;
}

const services: ServiceCardProps[] = [
  {
    image: "/custom-software.jpg",
    title: "Custom Software Development",
    description: "Tailored software solutions to meet your unique business needs.",
  },
  {
    image: "/web-app.jpg",
    title: "Web Application Development",
    description: "Build responsive, scalable, and high-performance web applications.",
  },
  {
    image: "/mobile-app.jpg",
    title: "Mobile App Development",
    description: "Develop user-friendly mobile applications for Android and iOS platforms.",
  },
  {
    image: "/ui-ux.jpg",
    title: "UI/UX Design",
    description: "Create intuitive and visually appealing user experiences for your applications.",
  },
  {
    image: "/qa-testing.jpg",
    title: "Software Testing & QA",
    description: "Ensure high-quality software with comprehensive testing and QA services.",
  },
  {
    image: "/cloud-solutions.jpg",
    title: "Cloud Solutions",
    description: "Leverage cloud technology for scalable and efficient software deployment.",
  },
];

function ServiceCard({ image, title, description }: ServiceCardProps) {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md text-center transition hover:shadow-lg">
      <img src={image} alt={title} className="w-full h-48 object-cover rounded-md mb-4" />
      <h3 className="text-xl font-semibold text-gray-800">{title}</h3>
      <p className="text-gray-600 mt-2">{description}</p>
    </div>
  );
}

export default function SoftwareDevelopmentPage() {
  return (
    <div className="bg-gray-100 min-h-screen flex flex-col">
      <Navbar />

      {/* Hero Section */}
      <header className="relative w-full bg-cover bg-center h-[500px]" style={{ backgroundImage: "url('/images/software-development-banner.jpg')" }}>
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="relative z-10 flex flex-col items-center justify-center h-full text-white text-center px-6">
          <h1 className="text-5xl font-bold">Software Development Services</h1>
          <p className="mt-4 text-lg max-w-2xl">
            Empower your business with innovative software solutions designed for efficiency and scalability.
          </p>
          <a href="/contact" className="mt-6 inline-block bg-blue-600 text-white px-6 py-3 rounded-full text-lg font-semibold hover:bg-blue-700 transition">
            Get a Consultation
          </a>
        </div>
      </header>

      {/* Services Section */}
      <main className="container mx-auto py-16 px-6 text-center">
        <h2 className="text-4xl font-bold text-gray-800">Our Software Development Services</h2>
        <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
          From custom software development to cloud solutions, we provide end-to-end services to bring your ideas to life.
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
          {services.map((service, index) => (
            <ServiceCard key={index} {...service} />
          ))}
        </div>
      </main>

      {/* Call to Action */}
      <section className="bg-blue-600 text-white text-center py-16">
        <h2 className="text-3xl font-bold">Build Your Next Software Solution with Us</h2>
        <p className="mt-4 text-lg max-w-2xl mx-auto">
          Let us collaborate to develop innovative and efficient software solutions for your business.
        </p>
        <a href="/contact" className="mt-6 inline-block bg-white text-blue-600 px-6 py-3 rounded-full text-lg font-semibold hover:bg-gray-200 transition">
          Contact Us
        </a>
      </section>

      <Footer />
    </div>
  );
}
