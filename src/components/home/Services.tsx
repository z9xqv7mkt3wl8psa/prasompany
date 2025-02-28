"use client";
import { motion } from "framer-motion";

const services = [
  {
    title: "Software Development",
    image: "/ssoftware.jpeg",
    description:
      "Custom software development, web and mobile application development, enterprise solutions, and SaaS platforms.",
  },
  {
    title: "IT Consulting & Strategy",
    image: "/sITconsulting.jpeg",
    description:
      "Expert consulting for IT infrastructure, digital transformation, automation, and project management.",
  },
  {
    title: "Web Development & Design",
    image: "/swebDesign.jpeg",
    description:
      "Comprehensive website development, UI/UX design, e-commerce solutions, and CMS platforms like WordPress and Shopify.",
  },
  {
    title: "Cloud Services",
    image: "/scloudservices.jpeg",
    description:
      "Cloud migration, computing solutions on AWS, Azure, and Google Cloud, along with storage and backup solutions.",
  },
  {
    title: "Cybersecurity Services",
    image: "/scybersecurity.jpeg",
    description:
      "Protect your business with network security, data encryption, vulnerability assessments, and risk management.",
  },
  {
    title: "IT Support & Maintenance",
    image: "/sitsupport.jpeg",
    description:
      "Reliable IT support, including help desk services, remote troubleshooting, server maintenance, and hardware support.",
  },
  {
    title: "Data Services",
    image: "/sdataservices.jpeg",
    description:
      "Database management, data analytics, migration, and big data solutions for intelligent decision-making.",
  },
  {
    title: "Networking & Infrastructure",
    image: "/snetwork.jpeg",
    description:
      "Efficient network setup and management, VPN configurations, VoIP services, and wireless networking.",
  },
  {
    title: "AI & Machine Learning",
    image: "/sai.jpeg",
    description:
      "Harness AI for automation, chatbot development, and machine learning models tailored to your business needs.",
  },
  {
    title: "Internet of Things (IoT)",
    image: "/siot.jpeg",
    description:
      "Smart device integration, IoT analytics, and industrial IoT solutions to drive innovation.",
  },
  {
    title: "ERP & CRM Solutions",
    image: "/serp.jpeg",
    description:
      "Optimize business processes with Enterprise Resource Planning (ERP) and Customer Relationship Management (CRM) solutions.",
  },
  {
    title: "Blockchain & Web3 Solutions",
    image: "/sblockchain.jpeg",
    description:
      "Leading-edge blockchain development, smart contracts, NFT platforms, and cryptocurrency solutions.",
  },
];

const Services = () => {
  return (
    <section id="services" className="py-20 bg-gray-100">
      <div className="container mx-auto px-10 text-center">
        <h2 className="text-5xl font-bold mb-6 bg-gradient-to-r from-purple-600 to-pink-500 text-transparent bg-clip-text">
          Services
        </h2>
        <h3 className="text-3xl font-semibold mb-12">
          Transform your business with advanced technologies
        </h3>

        {/* Responsive Grid Layout */}
        <div className="grid gap-8 lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-1">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="relative group overflow-hidden rounded-lg shadow-lg transition-transform transform hover:scale-105 bg-white min-h-[400px] flex flex-col"
            >
              {/* Background Image */}
              <div
                className="shadow-xl absolute inset-0 bg-cover bg-center transition-transform duration-700 ease-out group-hover:scale-110 rounded-lg"
                style={{ backgroundImage: `url(${service.image})` }}
              ></div>

              {/* Overlay */}
              <div className="absolute inset-0 bg-black opacity-50 transition-opacity duration-300 ease-in-out rounded-lg"></div>

              {/* Content Section */}
              <div className="relative z-10 flex flex-col justify-end h-full p-6 text-left text-white">
                <h4 className="text-xl font-bold text-white mb-4 text-center">
                  {service.title}
                </h4>
                <p className="text-sm opacity-90">{service.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
