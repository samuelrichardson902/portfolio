"use client";

import { useEffect } from "react";
import Navbar from "./components/navbar";
import Hero from "./components/hero";
import About from "./components/about";
import ProjectsSection from "./components/projects-section";
import ContactSection from "./components/contact-section";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center bg-content-100">
      <Navbar />
      <Hero />
      <About />
      <ProjectsSection />
      <ContactSection />
    </div>
  );
}
