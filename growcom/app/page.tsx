import Hero from "./components/Hero";
import Partners from "./components/Partners";
import About from "./components/About";
import CalendlySection from "./components/CalendlySection";

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white selection:bg-blue-500 selection:text-white">
      <Hero />
      <Partners />
      <About />
      <CalendlySection />
    </main>
  );
}
