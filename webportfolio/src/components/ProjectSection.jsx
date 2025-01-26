function ProjectSection() {
  return (
    <>
      {/* Projects Section */}
      <section id="projects">
        <div className="project-wrapper">
          <div className="project-header">
            <p>What I&apos;ve done so far</p>
            <h1> Projects.</h1>
          </div>

          {/* first project */}
          <div className="project-container">
            <div className="project-content">
              <div className="project-date">
                <h1>2024</h1>
              </div>

              <div className="project-block">
                <div className="project-left">
                  <div className="project-name">
                    <h1> STARhub - Incentives Management Solution</h1>
                    <p>
                      <i>Concentrix Global</i>
                    </p>
                  </div>
                  <div className="project-description">
                    <p>
                      STARhub is a web-based incentive management solution that
                      allows employees to view their monthly incentives in an
                      engaging and enjoyable way. With its dynamic and fun UI/UX
                      design, STARhub transforms the process of checking
                      performance scores into an experience that feels far
                      removed from the typical work environment. The application
                      creates an atmosphere where users can access their data
                      without the usual work-related stress, making it a
                      refreshing and delightful experience every time they open
                      the app.
                    </p>
                  </div>
                </div>

                <div className="project-right">
                  <div className="right-icon">
                    <i className="bx bxs-left-arrow"></i>
                  </div>
                </div>
              </div>
              <div className="project-tools">
                <div className="tools">ASP.NET Razor</div>
                <div className="tools">C#</div>
                <div className="tools">MySQL Workbench</div>
                <div className="tools">Figma</div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default ProjectSection;
