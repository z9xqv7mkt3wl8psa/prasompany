import React from "react";
import Navbar from "@/components/home/header/navbar";
import Footer from "@/components/home/footer-section";

export default function RPA() {
  return (
    <div className="bg-gray-100 min-h-screen flex flex-col">
      <Navbar />
      
      {/* Hero Section */}
      <header className="relative w-full bg-cover bg-center h-[500px]" style={{ backgroundImage: "url('/srpa.jpg')" }}>
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="relative z-10 flex flex-col items-center justify-center h-full text-white text-center px-6">
          <h1 className="text-5xl font-bold">Robotic Process Automation (RPA)</h1>
          <p className="mt-4 text-lg max-w-2xl">
            Automate repetitive business tasks with advanced RPA technologies to improve efficiency and reduce errors.
          </p>
        </div>
      </header>

      {/* About RPA */}
      <main className="container mx-auto py-16 px-6 text-center">
        <h2 className="text-4xl font-bold text-gray-800">Why Choose RPA?</h2>
        <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
          Implementing RPA solutions helps businesses reduce costs, increase accuracy, and enhance productivity by automating manual tasks.
        </p>
      </main>

      {/* Features Section */}
      <section className="container mx-auto py-16 px-6 grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {[
          { title: "Efficiency", desc: "Automate repetitive processes to save time and resources." },
          { title: "Accuracy", desc: "Reduce human errors with intelligent automation." },
          { title: "Scalability", desc: "Easily scale RPA solutions to match business growth." },
          { title: "Cost Savings", desc: "Lower operational costs by minimizing manual labor." },
          { title: "Compliance", desc: "Ensure regulatory compliance with automated workflows." },
          { title: "Integration", desc: "Seamlessly integrate with existing business systems." },
        ].map((feature, index) => (
          <div key={index} className="bg-white p-6 rounded-lg shadow-md text-center">
            <h3 className="text-xl font-semibold text-gray-800">{feature.title}</h3>
            <p className="text-gray-600 mt-2">{feature.desc}</p>
          </div>
        ))}
      </section>

      {/* Call to Action */}
      <section className="bg-blue-600 text-white text-center py-16">
        <h2 className="text-3xl font-bold">Get Started with RPA</h2>
        <p className="mt-4 text-lg max-w-2xl mx-auto">
          Enhance your business operations with our cutting-edge RPA solutions.
        </p>
        <a href="/contact" className="mt-6 inline-block bg-white text-blue-600 px-6 py-3 rounded-full text-lg font-semibold hover:bg-gray-200 transition">
          Contact Us
        </a>
      </section>

      <Footer />
    </div>
  );
}
