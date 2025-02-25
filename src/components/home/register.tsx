"use client";

import { useRouter } from "next/navigation";

const RegisterSection = () => {
  const router = useRouter();

  return (
    <section
      className="relative w-full h-[400px] flex items-center justify-center bg-fixed bg-center bg-cover"
      style={{ backgroundImage: "url('/reg.jpg')" }} // Replace with actual image
    >
      {/* Dark Overlay for better readability */}
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>

      {/* Text & Button */}
      <div className="relative text-center text-white px-6">
        <h2 className="text-4xl font-bold mb-6">
          Grow Your Business With Us
        </h2>
        <button
          onClick={() => router.push("/business")}
          className="px-6 py-3 text-lg font-semibold bg-white text-blue-600 rounded-full shadow-md hover:bg-blue-100 transition duration-300"
        >
          Register Here
        </button>
      </div>
    </section>
  );
};

export default RegisterSection;
