import useScrollWatcher from "../hooks/useScrollWatcher";
import Me from "../assets/me.jpg";
import CV from "../assets/files/Ron_Galang - Resume_WD.pdf";
import AOS from "aos";
import { useState } from "react";

//icons
import { MysqlDark } from "./icons/MysqlDark";
import { ReactDark } from "./icons/ReactDark";
import { AngularDark } from "./icons/AngularDark";
import { JavascriptDark } from "./icons/JavascriptDark";
import { TypescriptDark } from "./icons/TypescriptDark";
import { NodeDark } from "./icons/NodeDark";
import { PhpDark } from "./icons/PhpDark";
import { TailwindDark } from "./icons/TailwindDark";
import { MongodbDark } from "./icons/MongodbDark";
import { FigmaDark } from "./icons/FigmaDark";
import { IllustratorDark } from "./icons/IllustratorDark";
import ProjectSection from "./ProjectSection";

function InfoCard() {
  AOS.init();
  useScrollWatcher();

  //animation connect click
  const [animateHello, setAnimateHello] = useState(false);

  const handleConnectClick = (e) => {
    e.preventDefault();
    const infoSection = document.getElementById("info-section");

    infoSection.scrollIntoView({ behavior: "smooth" });

    setTimeout(() => {
      setAnimateHello(true);

      setTimeout(() => {
        setAnimateHello(false);
      }, 2000);
    }, 800);
  };

  return (
    <>
      <div className="scroll-indicator"></div>
      <section
        id="info-section"
        className="information-card"
        style={{ display: "flex" }}
      >
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
                  <p className="animate__animated animate__bounceInRight">
                    Web Developer
                  </p>
                  <div className="tooltip slide-right">About me</div>
                </div>
              </a>
            </div>

            {/* Contact Section */}
            <div className="animate__animated animate__bounceInUp">
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
                <a href="mailto:jrrongalang@gmail.com">
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

      {/* Project Section */}
      <ProjectSection />

      {/* Contact Me Section */}
      <section id="about-me">
        <div className="section-wrapper">
          <div data-aos="fade-down" className="section-header">
            <h1>About me.</h1>
          </div>

          <div className="section-content">
            <div className="intro">
              <a>
                <div
                  className="avatar"
                  data-aos="fade-right"
                  data-aos-anchor="#about-me"
                  data-aos-offset="500"
                  data-aos-duration="500"
                >
                  <img src={Me} alt="Ron Galang" />
                </div>
              </a>

              <p
                data-aos="fade-left"
                data-aos-anchor="#about-me"
                data-aos-offset="500"
                data-aos-duration="500"
              >
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

            <div data-aos="fade-down">
              {" "}
              <div className="qoutes-container">
                <span className="qoute-font">&ldquo;</span>
                <div className="qoutes">
                  <p>
                    There&apos;s a seat waiting for you, at the tables you
                    haven&apos;t seen yet.{" "}
                  </p>

                  {/* <p className="author">-Mackie</p> */}
                </div>
                <span className="qoute-font">&rdquo;</span>
              </div>
            </div>

            <div data-aos="flip-up" className="techstack-container">
              <div className="skills">
                <h1>Technologies.</h1>
              </div>
            </div>

            <div data-aos="zoom-in" className="techstack">
              <div className="techstack-item ">
                <p className="techstack-text">React</p>
                <div className="logo-container">
                  <ReactDark />
                </div>
              </div>

              <div className="techstack-item">
                <p className="techstack-text">Angular</p>
                <div className="logo-container">
                  <AngularDark />
                </div>
              </div>

              <div className="techstack-item">
                <p className="techstack-text">JavaScript</p>
                <div className="logo-container">
                  <JavascriptDark />
                </div>
              </div>

              <div d className="techstack-item">
                <p className="techstack-text">TypeScript</p>
                <div className="logo-container">
                  <TypescriptDark />
                </div>
              </div>

              <div className="techstack-item">
                <p className="techstack-text">Node.js</p>
                <div className="logo-container">
                  <NodeDark />
                </div>
              </div>

              <div className="techstack-item">
                <p className="techstack-text">PHP</p>
                <div className="logo-container">
                  <PhpDark />
                </div>
              </div>

              <div className="techstack-item">
                <p className="techstack-text">Tailwind</p>
                <div className="logo-container">
                  <TailwindDark />
                </div>
              </div>

              <div className="techstack-item">
                <p className="techstack-text">MySQL</p>
                <div className="logo-container">
                  <MysqlDark />
                </div>
              </div>

              <div className="techstack-item">
                <p className="techstack-text">MongoDB</p>
                <div className="logo-container">
                  <MongodbDark />
                </div>
              </div>

              <div className="techstack-item">
                <p className="techstack-text">Figma</p>
                <div className="logo-container">
                  <FigmaDark />
                </div>
              </div>

              <div className="techstack-item">
                <p className="techstack-text">Adobe Illustrator</p>
                <div className="logo-container">
                  <IllustratorDark />
                </div>
              </div>
            </div>

            <div className="bottom-contact">
              <a data-aos="fade-right" href={CV} download>
                <div className="bottom-icon">
                  <i className="bx bx-down-arrow-alt"></i>
                  <p>Download CV</p>
                </div>
              </a>

              <a
                data-aos="fade-left"
                href="#info-section"
                onClick={handleConnectClick}
              >
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
