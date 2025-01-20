import useScrollWatcher from "../hooks/useScrollWatcher";
import Me from "../assets/me.jpg";
import CV from "../assets/files/Resume_Galang_WD.pdf";
import AOS from "aos";
import { useState } from "react";

function InfoCard() {
  AOS.init();
  useScrollWatcher();

  const [animateHello, setAnimateHello] = useState(false);

  // Function to handle the "Let's Connect" click
  const handleConnectClick = (e) => {
    e.preventDefault(); // Prevent default behavior of the anchor tag
    const infoSection = document.getElementById("info-section");

    // Scroll to the info section
    infoSection.scrollIntoView({ behavior: "smooth" });

    // Trigger the animation on "Say Hello!" text
    setAnimateHello(true);

    // Reset animation class after the animation duration (1 second)
    setTimeout(() => {
      setAnimateHello(false);
    }, 1000); // Duration of the animation
  };

  return (
    <>
      <section
        id="info-section"
        className="information-card"
        style={{ display: "flex" }}
      >
        <div className="scroll-indicator"></div>
        <div className="wrapper">
          <div className="content">
            <div className="name-logo">
              <div className="animate__animated animate__bounceInDown">
                {" "}
                <a href="#projects">
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
                </a>
              </div>

              <a href="#about-me">
                <div className="name-container">
                  <h1 className="animate__animated animate__bounceInLeft">
                    justin ron
                  </h1>
                  <p className="animate__animated animate__bounceInLeft">
                    Web Developer
                  </p>
                  <div className="tooltip slide-right">About me</div>
                </div>
              </a>
            </div>

            {/* Contact Section */}
            <div className="animate__animated animate__backInUp">
              {" "}
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
                  <div
                    className={
                      animateHello ? "animate__animated animate__swing" : ""
                    }
                  >
                    <div className="icon">
                      <i className="bx bxs-envelope"></i>
                      <p>Say Hello!</p>
                      <div className="tooltip slide-down">
                        Let&apos;s Connect
                      </div>
                    </div>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

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
        <div className="section-wrapper">
          <div data-aos="fade-down" className="section-header">
            <h1>About me.</h1>
          </div>

          <div className="section-content">
            <div className="intro">
              <a>
                <div data-aos="fade-right">
                  <div className="avatar">
                    <img src={Me} alt="Ron Galang" />
                  </div>
                </div>
              </a>

              <p data-aos="fade-left">
                Hey there! I’m Justin Ron Galang. You can call me{" "}
                <span className="highlight-dark">Ron</span>, aspiring{" "}
                <span className="highlight-primary">web developer</span> and
                all-around problem-solver based in <strong>Philippines</strong>.
                I love creating user-friendly web experiences that make life
                easier—whether it’s designing sleek interfaces or building
                systems that just work. When I’m not geeking out over code,
                you’ll probably catch me searching on how to center a div. Let’s
                create something awesome together!
              </p>
            </div>
            <div data-aos="flip-up" className="techstack-container">
              <div className="skills">
                <h1>Technologies.</h1>
              </div>
            </div>
            <div className="techstack">
              <div data-aos="zoom-in" className="techstack-item">
                <p>React</p>
              </div>

              <div data-aos="zoom-in" className="techstack-item">
                <p>Angular</p>
              </div>

              <div data-aos="zoom-in" className="techstack-item">
                <p>JavaScript</p>
              </div>

              <div data-aos="zoom-in" className="techstack-item">
                <p>TypeScript</p>
              </div>

              <div data-aos="zoom-in" className="techstack-item">
                <p>Node.js</p>
              </div>

              <div data-aos="zoom-in" className="techstack-item">
                <p>PHP</p>
              </div>

              <div data-aos="zoom-in" className="techstack-item">
                <p>Tailwind</p>
              </div>

              <div data-aos="zoom-in" className="techstack-item">
                <p>MySQL</p>
              </div>

              <div data-aos="zoom-in" className="techstack-item">
                <p>MongoDB</p>
              </div>

              <div data-aos="zoom-in" className="techstack-item">
                <p>Figma</p>
              </div>

              <div data-aos="zoom-in" className="techstack-item">
                <p>Adobe Illustrator</p>
              </div>
            </div>

            <div data-aos="fade-up" className="bottom-contact">
              <a href={CV} download>
                <div className="bottom-icon">
                  <i className="bx bx-file"></i>
                  <p>Download CV</p>
                </div>
              </a>

              <a href="#info-section" onClick={handleConnectClick}>
                <div className="bottom-icon">
                  <i className="bx bx-code-alt"></i>
                  <p>Let&apos;s Connect</p>
                </div>
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default InfoCard;
