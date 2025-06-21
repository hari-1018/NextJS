import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import AboutSection from "@/components/Projects";
import About from "@/components/Projects";

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white">
      {/* Hero Section with Background */}
      <div
        className="bg-contain bg-top bg-no-repeat min-h-screen flex flex-col"
        style={{ backgroundImage: "url('/hero-bg.jpg')",
          backgroundColor: '#000000'
        }}
      >
      <Navbar />
      <Hero />
      <About />
      
        
        
      </div>
    </main>
  );
}
