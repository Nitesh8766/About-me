import { useEffect, useState, useCallback } from "react";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import SkillsSection from "@/components/SkillsSection";
import CTFSection from "@/components/CTFSection";
import EducationSection from "@/components/EducationSection";
import WriteupsSection from "@/components/WriteupsSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import MatrixRain from "@/components/MatrixRain";
import BackToTop from "@/components/BackToTop";
import BootScreen from "@/components/BootScreen";
import CustomCursor from "@/components/CustomCursor";

export default function App() {
  const [booted, setBooted] = useState(false);
  const handleBoot = useCallback(() => setBooted(true), []);

  useEffect(() => {
    if (!booted) return;
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) entry.target.classList.add("visible");
        });
      },
      { threshold: 0.08 }
    );
    document.querySelectorAll(".fade-in").forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, [booted]);

  return (
    <>
      <CustomCursor />
      {!booted && <BootScreen onDone={handleBoot} />}
      <div
        className="relative"
        style={{
          opacity: booted ? 1 : 0,
          transition: "opacity 0.6s ease",
        }}
      >
        <MatrixRain />
        <Navbar />
        <main>
          <HeroSection />
          <div className="section-divider" />
          <AboutSection />
          <div className="section-divider" />
          <SkillsSection />
          <div className="section-divider" />
          <CTFSection />
          <div className="section-divider" />
          <EducationSection />
          <div className="section-divider" />
          <WriteupsSection />
          <div className="section-divider" />
          <ContactSection />
        </main>
        <Footer />
        <BackToTop />
      </div>
    </>
  );
}
