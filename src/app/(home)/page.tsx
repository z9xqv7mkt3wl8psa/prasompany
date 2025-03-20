import CareerSection from "@/components/home/careerS";
import ClientSection from "@/components/home/client";
import ContactForm from "@/components/home/Cont";
import Footer from "@/components/home/footer-section";
import Navbar from "@/components/home/header/navbar";
import HeroSection from "@/components/home/hero-section";
import InternshipSection from "@/components/home/Intern";
import FAQ from "@/components/home/faq";
import Project from "@/components/home/project";
import RegisterSection from "@/components/home/register";
import Services from "@/components/home/Services";
import Stats from "@/components/home/stat";
import Testimonials from "@/components/home/testimonail";
import Industries from "@/components/home/Industries";

export default function Home() {
  return (
    <div>
      <Navbar />
      <HeroSection />

    <section className="relative w-full py-20 bg-white">
        {/* Content Wrapper */}
        <div className="relative z-10 max-w-3xl mx-auto text-center px-6">
          {/* Main Motto */}
          <h3 className="text-3xl md:text-5xl font-bold text-gray-800 mb-4">
            We make creativity work for your brand!
          </h3>

          {/* Description with Line Breaks */}
          <p className="text-xl text-gray-700 leading-relaxed">
            <span className="bg-gradient-to-r from-purple-600 to-pink-500 bg-clip-text text-transparent font-bold">
              We&apos;re a team of creatives constantly brainstorming great ideas.
            </span>{" "}
            <br />
            All the time with our combined skills, we&apos;re capable of fulfilling all your brand&apos;s needs.
          </p>
        </div>
      </section>
      
      <Services />
      <Stats />
      
      <Project />
      <InternshipSection />
      <Testimonials />
     
      <CareerSection />
      <Industries/>
      <ClientSection />
      <RegisterSection />
      <FAQ />
      <ContactForm />
      <Footer />
    </div>
  );
}
