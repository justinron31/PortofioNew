import { useEffect } from "react";

const useScrollWatcher = () => {
  useEffect(() => {
    const indicator = document.querySelector(".scroll-indicator");
    // const portfolioButton = document.querySelector(".portfolio-button-wrapper");

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

      // // Hide or show the portfolio button based on scroll position
      // if (window.scrollY > 0) {
      //   // If the user has scrolled down, hide the button
      //   portfolioButton.style.opacity = "0";
      //   portfolioButton.style.pointerEvents = "none";
      // } else {
      //   // If the user is at the top of the page, show the button
      //   portfolioButton.style.opacity = "1";
      //   portfolioButton.style.pointerEvents = "auto";
      // }
    };

    window.addEventListener("scroll", handleScroll);

    // Cleanup event listener on component unmount
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
};

export default useScrollWatcher;
