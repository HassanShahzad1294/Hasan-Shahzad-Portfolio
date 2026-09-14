import { useState } from "react";

import Chatbot from "./components/Chatbot";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Education from "./components/Education";
import Experience from "./components/Experience";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Services from "./components/Services";
import ServiceWizard from "./components/ServiceWizard";
import Interests from "./components/Interests";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  const [showWizard, setShowWizard] = useState(false);

  return (
    <>
      <Navbar />

      <main>
        <Hero />
        <About />
        <Education />
        <Experience />
        <Skills />
        <Projects />

        <Services
          onRequest={() => setShowWizard(true)}
        />

        <Interests />
        <Contact />
      </main>

      <Footer />

      {showWizard && (
        <ServiceWizard
          onClose={() => setShowWizard(false)}
        />
      )}

      <Chatbot />
    </>
  );
}

export default App;