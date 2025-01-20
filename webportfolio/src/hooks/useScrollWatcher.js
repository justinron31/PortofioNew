import { useEffect } from "react";

const useScrollWatcher = () => {
  useEffect(() => {
    const indicator = document.querySelector(".scroll-indicator");

    const handleScroll = () => {
      const sections = document.querySelectorAll("section");
      let currentSection = null;

      // Loop through each section to find which one is in view
      sections.forEach((section) => {
        const rect = section.getBoundingClientRect();
        if (rect.top <= 0 && rect.bottom >= 0) {
          currentSection = section;
        }
      });

      // Change the scroll indicator's background based on the active section
      if (currentSection) {
        if (currentSection.id === "info-section") {
          indicator.style.backgroundColor = "var(--dark)"; // Background for info-section
        } else if (currentSection.id === "projects") {
          indicator.style.backgroundColor = "var(--light)"; // Background for projects section
        } else if (currentSection.id === "about-me") {
          indicator.style.backgroundColor = "var(--dark)"; // Background for contactme section
        }
      }
    };

    window.addEventListener("scroll", handleScroll);

    // Cleanup event listener on component unmount
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
};

export default useScrollWatcher;
