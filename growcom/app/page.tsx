import Hero from "./components/Hero";
import About from "./components/About";
import CalendlySection from "./components/CalendlySection";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-white text-gray-900 selection:bg-blue-500 selection:text-white">
      <Hero />
      <About />
      <CalendlySection />
      <Footer />
    </main>
  );
}
