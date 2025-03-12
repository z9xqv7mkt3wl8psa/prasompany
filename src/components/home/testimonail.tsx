"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import Image from "next/image";

const testimonials = [
  {
    quote:
      "Prasunet seamlessly integrated our acquisitions—faster, better, and cost-effectively—with trust and transparency. ",
    name: "Andy Nallappan",
    position: "Former CTO and Head of Software Business Operations, Broadcom Software",
    image: "/t1.jpg",
  },
  {
    quote:
      "This company provided outstanding service and helped scale our business to new heights. Their expertise and professionalism made the process seamless!",
    name: "Jessica Williams",
    position: "CEO, Tech Innovations",
    image: "/t3.jpg",
  },
  {
    quote:
      "I was impressed with the level of dedication and attention to detail. They truly understand their clients and deliver above expectations!",
    name: "Michael Brown",
    position: "Head of Development, Web Solutions",
    image: "/t2.jpg",
  },
  {
    quote:
      "Absolutely fantastic experience! The team delivered results that exceeded our expectations. Highly recommend their services!",
    name: "Samantha Lee",
    position: "Marketing Director, Creative Agency",
    image: "/t4.jpg",
  },
];

const Testimonials = () => {
  return (
    <section className="py-20 bg-gradient-to-r from-gray-100 to-blue-200">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-5xl font-bold mb-6 text-gray-800">Testimonials</h2>

        {/* Swiper Carousel */}
        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          spaceBetween={30}
          slidesPerView={1}
          navigation
          pagination={{ clickable: true }}
          autoplay={{ delay: 4000 }} // 4 seconds delay
          className="max-w-3xl mx-auto"
        >
          {testimonials.map((testimonial, index) => (
            <SwiperSlide key={index}>
              <div className="bg-white rounded-lg shadow-lg p-8">
                <div className="text-6xl text-gray-800 font-bold mb-4">❝</div>
                <p className="text-gray-700 text-lg italic">{testimonial.quote}</p>
                <div className="mt-6 flex items-center justify-center space-x-4">
                <Image
  src={testimonial.image}
  alt={testimonial.name}
  width={56} // w-14 = 56px
  height={56} // h-14 = 56px
  className="rounded-full border-2 border-gray-300"
/>
                  <div className="text-left">
                    <h4 className="text-xl font-semibold text-gray-800">{testimonial.name}</h4>
                    <p className="text-sm text-gray-600">{testimonial.position}</p>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default Testimonials;
