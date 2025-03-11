"use client";

import React, { useState } from "react";

const faqData = [
  {
    question: "Who is Prasunet Pvt. Ltd. company?",
    answer:
      "Prasunet Pvt. Ltd. is a global technology company specializing in software development, IT consulting, and digital transformation solutions. With expertise in AI, cloud computing, cybersecurity, and enterprise solutions, Prasunet empowers businesses with cutting-edge technology. Headquartered in India, the company serves clients worldwide, delivering innovative and scalable IT services tailored to modern business needs.",
  },
  {
    question: "How can Prasunet help businesses with digital transformation?",
    answer:
      "We offer IT strategy consulting, automation solutions, and cloud migration services to streamline business processes and enhance efficiency.",
  },
  {
    question: "Does Prasunet provide custom software development?",
    answer:
      "Yes, we specialize in developing custom software, enterprise applications, and SaaS platforms tailored to business needs.",
  },
  {
    question: "What industries does Prasunet cater to?",
    answer:
      "We serve various industries, including healthcare, finance, e-commerce, manufacturing, and logistics.",
  },
  {
    question: "How does Prasunet ensure cybersecurity for its clients?",
    answer:
      "Our cybersecurity services include network security, data encryption, risk assessment, and vulnerability management to protect businesses.",
  },
];

const Faq = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
};


  return (
    <div className="bg-white py-16 flex justify-center px-4 md:px-0">
      <div className="max-w-4xl w-full p-8 rounded-xl shadow-2xl bg-gradient-to-b from-[#cbe6ff] to-[#e0f2ff]">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-6">
          Frequently Asked Questions
        </h2>
        <div className="space-y-4">
          {faqData.map((faq, index) => (
            <div
              key={index}
              className="border border-gray-200 rounded-lg p-5 cursor-pointer transition-all duration-300 bg-white shadow-md"
              onClick={() => toggleFAQ(index)}
            >
              <div className="flex justify-between items-center">
                <h3 className="text-lg font-medium text-gray-600">{faq.question}</h3>
                <span
                  className={`text-xl font-bold transition-transform duration-300 ${
                    openIndex === index ? "rotate-180" : "rotate-0"
                  }`}
                >
                  ⌄
                </span>
              </div>
              <div
                className={`transition-all duration-500 overflow-hidden ${
                  openIndex === index ? "max-h-96 opacity-100 mt-2" : "max-h-0 opacity-0"
                }`}
              >
                <p className="text-gray-500 mt-2 leading-relaxed">{faq.answer}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Faq;
