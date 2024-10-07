import React, { useEffect, useRef, useState } from "react";
import LandingHeader from "./LandingHeader";
import Hero from "./Hero";
import Section1 from "./Section1";
import Section2 from "./Section2";
import Section3 from "./Section3";
import Section4 from "./Section4";
import Footer from "./Footer";

const LandingHome = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const container = useRef(null);

  useEffect(() => {
    const currentContainer = container.current;

    const handleScroll = () => {
      if (currentContainer) {
        const scrollTop = currentContainer.scrollTop;

        setIsScrolled(scrollTop > 10);
      }
    };

    if (currentContainer) {
      currentContainer.addEventListener("scroll", handleScroll);
    }

    return () => {
      if (currentContainer) {
        currentContainer.removeEventListener("scroll", handleScroll); // Clean up the event listener
      }
    };
  }, []);

  return (
    <div className="landing" ref={container}>
      <LandingHeader scrolled={isScrolled} mainRef={container} />
      <Hero />
      <Section1 />
      <Section2 />
      <Section3 />
      <Section4 />
      <Footer />
    </div>
  );
};

export default LandingHome;
