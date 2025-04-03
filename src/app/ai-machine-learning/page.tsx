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
    title: "AI-Powered Automation", 
    image: "/ai-automation.jpg", 
    description: "Automate workflows, business processes, and customer interactions using AI-driven solutions." 
  },
  { 
    title: "Machine Learning Models", 
    image: "/ml-models.jpg", 
    description: "Develop and deploy custom machine learning models for data analysis, predictions, and insights." 
  },
  { 
    title: "Chatbot & Virtual Assistants", 
    image: "/chatbot.jpg", 
    description: "Enhance customer engagement with AI-powered chatbots and voice assistants." 
  },
  { 
    title: "Computer Vision Solutions", 
    image: "/computer-vision.jpg", 
    description: "Leverage AI for image recognition, object detection, and facial recognition applications." 
  },
  { 
    title: "Natural Language Processing (NLP)", 
    image: "/nlp.jpg", 
    description: "Enable intelligent text processing, sentiment analysis, and language translation with NLP technology." 
  },
  { 
    title: "AI in Business Intelligence", 
    image: "/ai-bi.jpg", 
    description: "Integrate AI with business intelligence tools to unlock valuable insights and enhance decision-making." 
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

export default function AIMachineLearningPage() {
  return (
    <div className="bg-gray-100 min-h-screen flex flex-col">
      <Navbar />

      {/* Hero Section */}
      <header className="relative w-full bg-cover bg-center h-[500px]" style={{ backgroundImage: "url('/images/ai-banner.jpg')" }}>
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="relative z-10 flex flex-col items-center justify-center h-full text-white text-center px-6">
          <h1 className="text-5xl font-bold">AI & Machine Learning Solutions</h1>
          <p className="mt-4 text-lg max-w-2xl">
            Unlock the power of artificial intelligence to drive innovation, automation, and data-driven decision-making.
          </p>
          <a href="/contact" className="mt-6 inline-block bg-blue-600 text-white px-6 py-3 rounded-full text-lg font-semibold hover:bg-blue-700 transition">
            Get a Consultation
          </a>
        </div>
      </header>

      {/* Services Section */}
      <main className="container mx-auto py-16 px-6 text-center">
        <h2 className="text-4xl font-bold text-gray-800">Our AI & Machine Learning Services</h2>
        <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
          From predictive analytics to intelligent automation, our AI-driven solutions transform businesses.
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
          {services.map((service, index) => (
            <ServiceCard key={index} {...service} />
          ))}
        </div>
      </main>

      {/* Call to Action */}
      <section className="bg-blue-600 text-white text-center py-16">
        <h2 className="text-3xl font-bold">Transform Your Business with AI</h2>
        <p className="mt-4 text-lg max-w-2xl mx-auto">
          Leverage artificial intelligence to enhance efficiency, automation, and innovation.
        </p>
        <a href="/contact" className="mt-6 inline-block bg-white text-blue-600 px-6 py-3 rounded-full text-lg font-semibold hover:bg-gray-200 transition">
          Contact Us
        </a>
      </section>

      <Footer />
    </div>
  );
}

