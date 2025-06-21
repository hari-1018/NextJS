import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import AboutSection from "@/components/Projects";
import About from "@/components/Projects";
import HowItWorks from "@/components/HowWorks";

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

        
        
      </div>
    </main>
  );
}
