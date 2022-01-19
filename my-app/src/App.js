import React from "react";
import About from "./components/About";
import Contact from "./components/Contact";
import Projects from "./components/Projects";
import Footer from "./components/Footer";
import Navigation from "./components/Navigation";
import Skills from "./components/Skills";
//import Resume from "./components/Resume";

export default function App() {
  return (
    <main className="text-gray-400 bg-gray-900 body-font">
      <Navigation />
      <About />
      <Projects />
      <Skills />
      <Contact />
      <Footer />
    </main>
  );
}
