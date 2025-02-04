import AOS from "aos";

function ProjectSection() {
  AOS.init();

  return (
    <>
      {/* Projects Section */}
      <section id="projects">
        <div className="project-wrapper">
          <div className="project-container">
            <div className="project-content">
              <div className="project-date" data-aos="fade-right">
                <h1>Experience</h1>
              </div>
              <div className="project-box">
                <div className="project-block">
                  <div className="project-left">
                    <div className="project-name" data-aos="fade-right">
                      <h1>
                        Software Engineer Intern{" "}
                        <span className="nameAt">@ </span>
                        <a
                          href="https://www.concentrix.com/"
                          target="_blank"
                          rel="noopener noreferrer"
                          style={{
                            display: "inline-flex",
                            alignItems: "center",
                          }}
                        >
                          <span className="company">Concentrix Global</span>
                          <i className="bx bx-right-arrow-alt diagonal-arrow"></i>
                        </a>
                      </h1>
                      <p>2023 -2024</p>
                    </div>
                    <div className="project-description" data-aos="fade-right">
                      <p>
                        During my internship, I built and maintained a web-based
                        incentive management platform that enabled employees to
                        effortlessly review their monthly performance metrics. I
                        engineered a dynamic and engaging UI/UX, transforming
                        routine score checks into a refreshing, stress-free
                        experience. Collaborating closely with cross-functional
                        teams, I integrated seamless data management to ensure
                        the platform consistently delivered an intuitive and
                        enjoyable user experience.
                      </p>
                    </div>
                  </div>

                  {/* <div className="project-button-container" data-aos="fade-left">
                  <div className="project-right" onClick={toggleModal}>
                    <div className="right-icon">
                      <i className="bx bxs-left-arrow"></i>
                    </div>
                  </div>
                </div> */}
                </div>
                <div className="project-tools" data-aos="fade-right">
                  <div className="tools">ASP.NET Razor</div>
                  <div className="tools">HTML & CSS</div>
                  <div className="tools">JavaScript</div>
                  <div className="tools">C#</div>
                  <div className="tools">MySQL Workbench</div>
                  <div className="tools">Figma</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* <div className="project-header" data-aos="fade-down">
          <p>What I&apos;ve done so far</p>
          <h1> Projects.</h1>
        </div> */}
      </section>
    </>
  );
}

export default ProjectSection;
