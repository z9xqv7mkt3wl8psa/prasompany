const services = [
  {
    title: "Web Development",
    image: "/s1.jpg",
    description:
      "From front-end to back-end development, our custom web development services cover it all. Whether it's enhancing an existing app or architecting an enterprise solution, our developers are ready to tackle any challenge.",
  },
  {
    title: "App Development",
    image: "/s2.jpg",
    description:
      "Expertise in crafting multi-platform mobile app solutions for Android and iOS devices. With technologies like PhoneGap, Xamarin, and React Native, we deliver custom apps that run seamlessly across various platforms.",
  },
  {
    title: "Digital Marketing",
    image: "/s3.jpg",
    description:
      "Elevate your online presence with our captivating digital marketing solutions, tailored to your needs. Our services empower clients to enhance visibility, driving meaningful customer engagement on the digital platform.",
  },
];

const Services = () => {
  return (
    <section id="services" className="py-20 bg-gray-100">
      <div className="container mx-auto px-10 text-center">
        {/* Section Title */}
        <h2 className="text-5xl font-bold mb-6 bg-gradient-to-r from-purple-600 to-pink-500 text-transparent bg-clip-text">
           Services
        </h2>
        <h3 className="text-3xl font-semibold mb-12">
          Transform your business with advanced technologies
         </h3>


        {/* Services Grid */}
        <div className="grid gap-8 lg:grid-cols-3 sm:grid-cols-1 justify-center items-center px-4">
          {services.map((service, index) => (
            <div
              key={index}
              className="relative group overflow-hidden rounded-lg shadow-lg transition-transform transform hover:scale-105 bg-white h-[450px] mx-4"
            >
              {/* Background Image */}
              <div
                className="shadow-xl absolute inset-0 bg-cover bg-center transition-transform duration-700 ease-out group-hover:scale-110 rounded-lg"
                style={{ backgroundImage: `url(${service.image})` }}
              ></div>

              {/* Overlay */}
              <div className="absolute inset-0 bg-black opacity-50 transition-opacity duration-100 ease-in-out rounded-lg"></div>

              {/* Title and Description */}
              <div className="relative z-10 flex flex-col justify-end h-full p-6 text-left text-white">
                <p className="font-stretch-ultra-expanded font-serif text-lg mb-auto leading-relaxed opacity-0 group-hover:opacity-100 transition-opacity duration-100 ease-in-out">
                  {service.description}
                </p>
                <h4 className="font-mono text-3xl font-bold mb-4 text-center w-full">
                  {service.title}
                </h4>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
