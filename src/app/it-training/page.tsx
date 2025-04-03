"use client";

import Navbar from "@/components/home/header/navbar";
import Footer from "@/components/home/footer-section";

export default function ITTrainingPage() {
  return (
    <div className="bg-gray-100 min-h-screen flex flex-col">
      <Navbar />

      {/* Hero Section */}
      <header
        className="relative w-full bg-cover bg-center h-[500px]"
        style={{ backgroundImage: "url('/straining.jpg')" }}
      >
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="relative z-10 flex flex-col items-center justify-center h-full text-white text-center px-6">
          <h1 className="text-5xl font-bold">IT Training & Skill Development</h1>
          <p className="mt-4 text-lg max-w-2xl">
            Empower your workforce with IT skill development and professional training programs.
          </p>
          <a
            href="/contact"
            className="mt-6 inline-block bg-blue-600 text-white px-6 py-3 rounded-full text-lg font-semibold hover:bg-blue-700 transition"
          >
            Get Started
          </a>
        </div>
      </header>

      {/* Content Section */}
      <main className="container mx-auto py-16 px-6 text-center">
        <h2 className="text-4xl font-bold text-gray-800">Why Choose Our IT Training?</h2>
        <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
          Our comprehensive training programs are designed to equip professionals with the latest skills in IT,
          cybersecurity, cloud computing, programming, and more.
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
          {[
            {
              title: "Software Development Training",
              description: "Learn full-stack development, Python, Java, and more.",
              image: "/software-training.jpg",
            },
            {
              title: "Cybersecurity Certification",
              description: "Get trained in ethical hacking, network security, and compliance.",
              image: "/cybersecurity-training.jpg",
            },
            {
              title: "Cloud & DevOps Training",
              description: "Master AWS, Azure, Google Cloud, and CI/CD practices.",
              image: "/cloud-training.jpg",
            },
          ].map((course, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-md text-center transition hover:shadow-lg">
              <img src={course.image} alt={course.title} className="w-full h-48 object-cover rounded-md mb-4" />
              <h3 className="text-xl font-semibold text-gray-800">{course.title}</h3>
              <p className="text-gray-600 mt-2">{course.description}</p>
            </div>
          ))}
        </div>
      </main>

      {/* Call to Action */}
      <section className="bg-blue-600 text-white text-center py-16">
        <h2 className="text-3xl font-bold">Enhance Your IT Skills Today</h2>
        <p className="mt-4 text-lg max-w-2xl mx-auto">
          Join our IT training programs and boost your career with hands-on learning and expert mentorship.
        </p>
        <a
          href="/contact"
          className="mt-6 inline-block bg-white text-blue-600 px-6 py-3 rounded-full text-lg font-semibold hover:bg-gray-200 transition"
        >
          Enroll Now
        </a>
      </section>

      <Footer />
    </div>
  );
}
