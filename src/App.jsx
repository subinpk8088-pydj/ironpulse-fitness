import { useRef, useState, useCallback } from "react";
import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";
import WhatsAppButton from "./components/common/WhatsAppButton";
import Toast from "./components/common/Toast";
import Hero from "./components/sections/Hero";
import Programs from "./components/sections/Programs";
import Pricing from "./components/sections/Pricing";
import Gallery from "./components/sections/Gallery";
import WhyUs from "./components/sections/WhyUs";
import Testimonials from "./components/sections/Testimonials";
import Booking from "./components/sections/Booking";
import useActiveSection from "./hooks/useActiveSection";

const SECTION_IDS = ["home", "programs", "pricing", "gallery", "testimonials", "booking"];

export default function App() {
  const containerRef = useRef(null);
  const { activeId, registerSection } = useActiveSection(SECTION_IDS, containerRef);
  const [toast, setToast] = useState(null);

  const showToast = useCallback((message) => {
    setToast({ id: Date.now(), message });
    setTimeout(() => setToast(null), 2800);
  }, []);

  return (
    <>
      <Navbar activeId={activeId} containerRef={containerRef} />
      <div ref={containerRef} className="snap-container">
        <section id="home" ref={registerSection("home")} className="snap-section">
          <Hero />
        </section>
        <section id="programs" ref={registerSection("programs")} className="snap-section">
          <Programs />
        </section>
        <section id="pricing" ref={registerSection("pricing")} className="snap-section">
          <Pricing />
        </section>
        <section id="gallery" ref={registerSection("gallery")} className="snap-section">
          <Gallery />
        </section>
        <div className="snap-section">
          <WhyUs />
        </div>
        <section id="testimonials" ref={registerSection("testimonials")} className="snap-section">
          <Testimonials />
        </section>
        <section id="booking" ref={registerSection("booking")} className="snap-section">
          <Booking onToast={showToast} />
        </section>
        <Footer />
      </div>
      <WhatsAppButton />
      <Toast toast={toast} />
    </>
  );
}
