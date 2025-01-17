import useScrollWatcher from "../hooks/useScrollWatcher"; // Import the custom hook

function InfoCard() {
  useScrollWatcher(); // Call the hook

  return (
    <section
      id="info-section"
      className="information-card"
      style={{ display: "flex" }}
    >
      <div className="scroll-indicator"></div>

      <div className="wrapper">
        <div className="content">
          <div className="name-logo">
            <div className="svg-container">
              <svg
                version="1.1"
                id="laptop"
                className="svg-logo"
                width="100px"
                height="100px"
                viewBox="0 0 100 100"
                title="Projects"
              >
                <g>
                  <path
                    fill="#162642"
                    d="M14.022,67.699h71.957c2.747,0,4.976-2.229,4.976-4.977V18.628c0-2.75-2.229-4.976-4.976-4.976H14.022
        c-2.747,0-4.976,2.226-4.976,4.976v44.094C9.045,65.47,11.274,67.699,14.022,67.699z M18.998,23.604h62.005v34.142H18.998V23.604z"
                  />
                  <path
                    fill="#162642"
                    d="M95.325,72.686H4.675c-1.267,0-2.294,1.027-2.294,2.294v5.555c0,0.58,0.218,1.135,0.609,1.559l3.25,3.518
        c0.433,0.466,1.045,0.735,1.684,0.735h83.915c0.612,0,1.198-0.245,1.631-0.681l3.485-3.519c0.424-0.43,0.664-1.01,0.664-1.613
        V74.98C97.619,73.714,96.591,72.686,95.325,72.686z M58.669,80.655c0,0.28-0.185,0.507-0.415,0.507H41.746
        c-0.23,0-0.415-0.227-0.415-0.507v-2.264c0-0.28,0.185-0.504,0.415-0.504h16.508c0.23,0,0.415,0.224,0.415,0.504V80.655z"
                  />
                </g>
              </svg>
              <div className="tooltip">Projects</div>
            </div>
            <div className="name-container">
              <h1>justin ron</h1>
              <p>Web Developer</p>
              <div className="tooltip slide-right">About Me</div>
            </div>
          </div>

          {/* Contact Section */}
          <div className="contact">
            <a
              href="https://www.linkedin.com/in/justinron/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="icon">
                <i className="bx bxl-linkedin"></i>
                <div className="tooltip slide-down">LinkedIn Profile</div>
              </div>
            </a>
            <a href="mailto:justingalangzxc31@gmail.com">
              <div className="icon">
                <i className="bx bxs-envelope"></i>
                <p>Contact me</p>
                <div className="tooltip slide-down">Let&apos;s Connect</div>
              </div>
            </a>
          </div>
        </div>

        {/* Career Highlights Section */}
        {/* <div className="portfolio-button-wrapper">
          <a href="#projects">
            <div className="portfolio-button">
              <i className="bx bxs-down-arrow"></i>
              <p>My Porfolio</p>
            </div>
          </a>
        </div> */}
      </div>

      {/* Projects Section */}
      <section id="projects">
        <h1>Projects</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore
          mollitia excepturi aliquam explicabo quo, aperiam unde obcaecati nisi,
          perspiciatis odio incidunt dolorum illo nulla provident fugiat laborum
          est amet doloremque!
        </p>
      </section>

      {/* Contact Me Section */}
      <section id="about-me">
        <h1>About Me</h1>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Corporis,
          quaerat modi corrupti nulla tempora nihil debitis fugit quia harum
          repudiandae ullam delectus doloremque quae dolor consequuntur aut
          mollitia vel illum?
        </p>
      </section>
    </section>
  );
}

export default InfoCard;
