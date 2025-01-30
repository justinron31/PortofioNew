import { useState, useEffect } from "react";
import Modal from "./StarHubModal";
import AOS from "aos";

function ProjectSection() {
  AOS.init();
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Function to toggle modal visibility
  const toggleModal = () => setIsModalOpen((prev) => !prev);

  // Disable scrolling when the modal is open
  useEffect(() => {
    if (isModalOpen) {
      // Disable scrolling
      document.body.style.overflow = "hidden";
    } else {
      // Restore scrolling
      document.body.style.overflow = "auto";
    }

    // Clean up on unmount or when modal is closed
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isModalOpen]);

  return (
    <>
      {/* Projects Section */}
      <section id="projects">
        <div className="project-wrapper">
          <div className="project-header" data-aos="fade-down">
            <p>What I&apos;ve done so far</p>
            <h1> Projects.</h1>
          </div>

          {/* first project */}
          <div className="project-container">
            <div className="project-content">
              <div className="project-date" data-aos="fade-right">
                <h1>2024</h1>
              </div>

              <div className="project-block">
                <div className="project-left">
                  <div className="project-name" data-aos="fade-right">
                    <h1> STARHub - Incentives Management Solution</h1>
                    <p>
                      <i>Concentrix Global</i>
                    </p>
                  </div>
                  <div className="project-description" data-aos="fade-right">
                    <p>
                      STARHub is a web-based incentive management solution that
                      allows employees to view their monthly incentives in an
                      engaging and enjoyable way. With its dynamic and fun UI/UX
                      design, STARHub transforms the process of checking
                      performance scores into an experience that feels far
                      removed from the typical work environment. The application
                      creates an atmosphere where users can access their data
                      without the usual work-related stress, making it a
                      refreshing and delightful experience every time they open
                      the app.
                    </p>
                  </div>
                </div>

                <div
                  className="project-right"
                  onClick={toggleModal}
                  data-aos="fade-left"
                >
                  <div className="right-icon">
                    <i className="bx bxs-left-arrow"></i>
                  </div>
                </div>
              </div>
              <div className="project-tools" data-aos="fade-right">
                <div className="tools">ASP.NET Razor</div>
                <div className="tools">HTML</div>
                <div className="tools">CSS</div>
                <div className="tools">JavaScript</div>
                <div className="tools">C#</div>
                <div className="tools">MySQL Workbench</div>
                <div className="tools">Figma</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Modal component */}
      <Modal isOpen={isModalOpen} onClose={toggleModal} />
    </>
  );
}

export default ProjectSection;
