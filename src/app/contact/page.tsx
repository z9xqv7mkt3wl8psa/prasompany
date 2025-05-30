import ContactForm from "@/components/home/Cont";
import Navbar from "@/components/home/header/navbar";
import Footer from "@/components/home/footer-section";

export default function ContactPage() {
  return (
    <>
      <Navbar />
      <div className="container mx-auto p-8">
        <h1 className="text-3xl font-bold mb-4">Contact Us</h1>
        <ContactForm />
         <Footer />
      </div>
    </>
  );
}

