import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import HowItWorks from "@/components/HowWorks";
import Projects from "@/components/Projects";
import Benefits from "@/components/Benefits";
import Services from "@/components/Services";
import Pricing from "@/components/Pricing";
import FAQ from "@/components/FAQ";
import Testimonials from "@/components/Testimonials";
import Footer from "@/components/Footer";





export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white">
      <div
        className="bg-contain bg-top bg-no-repeat flex flex-col"
        style={{ backgroundImage: "url('/hero-bg.jpg')",
          backgroundColor: '#000000'
        }}
      >
      <Navbar />
      <Hero />
      <About />
      <HowItWorks />
      <Projects />
      <Benefits />
      <Services />
      <Pricing />
      <FAQ />
      <Testimonials />
      <Footer />
        
        
      </div>
    </main>
  );
}
