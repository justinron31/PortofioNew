import useScrollWatcher from "../hooks/useScrollWatcher";
import Me from "../assets/me.jpg";
import CV from "../assets/files/Justin Ron Galang - Resume - SE.pdf";
import AOS from "aos";
import ProjectSection from "./ProjectSection";
import QuotesSection from "./QuotesSection";
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
import { NextjsDark } from "./icons/NextjsDark";
import { SupabaseDark } from "./icons/SupabaseDark";

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

  //download cv
  const handleDownload = (e) => {
    e.preventDefault();
    const link = document.createElement("a");
    link.href = CV;
    link.download = "Justin Ron Galang - Resume - SE.pdf";
    link.click();
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
                    <div className="tooltip">Experiences</div>
                  </div>
                </a>
              </div>

              <a href="#about-me">
                <div className="name-container">
                  <h1 className="animate__animated animate__bounceInLeft">
                    justin ron
                  </h1>
                  <p className="animate__animated animate__bounceInRight">
                    Software Engineer
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

                <a
                  href="https://github.com/justinron31"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <div className="icon">
                    <i className="bx bxl-github"></i>
                    <div className="tooltip slide-down">Github Profile</div>
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
                Hey there! I’m Justin Ron Galang—though most people call me{" "}
                <span className="highlight-primary">Ron</span>. I&apos;m a fresh
                graduate with a passion for turning ideas into engaging digital
                experiences. I love building clean, user-friendly web solutions
                that simplify everyday tasks. I&apos;ve had the chance to work
                on projects that allowed me to explore how thoughtful design can
                truly change the way people interact with digital tools. When
                I&apos;m not coding, you&apos;ll likely find me exploring new
                ideas or experimenting with{" "}
                <a
                  href="https://www.behance.net/justingalang1"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span className="behance">UI designs</span>
                </a>{" "}
                . I&apos;m excited to keep learning and growing—let&apos;s
                create something awesome together!
              </p>
            </div>

            <div data-aos="fade-down">
              {" "}
              <QuotesSection />
            </div>

            <div data-aos="flip-up" className="techstack-container">
              <div className="skills">
                <h1>Working knowledge.</h1>
              </div>
            </div>

            <div data-aos="zoom-in" className="techstack">
              <div className="techstack-item ">
                <div className="logo-container">
                  <ReactDark />
                </div>
              </div>

              <div className="techstack-item">
                <div className="logo-container">
                  <NextjsDark />
                </div>
              </div>

              <div className="techstack-item">
                <div className="logo-container">
                  <AngularDark />
                </div>
              </div>

              <div className="techstack-item">
                <div className="logo-container">
                  <JavascriptDark />
                </div>
              </div>

              <div d className="techstack-item">
                <div className="logo-container">
                  <TypescriptDark />
                </div>
              </div>

              <div className="techstack-item">
                <div className="logo-container">
                  <NodeDark />
                </div>
              </div>

              <div className="techstack-item">
                <div className="logo-container">
                  <PhpDark />
                </div>
              </div>

              <div className="techstack-item">
                <div className="logo-container">
                  <TailwindDark />
                </div>
              </div>

              <div className="techstack-item">
                <div className="logo-container">
                  <MysqlDark />
                </div>
              </div>

              <div className="techstack-item">
                <div className="logo-container">
                  <MongodbDark />
                </div>
              </div>

              <div className="techstack-item">
                <div className="logo-container">
                  <SupabaseDark />
                </div>
              </div>

              <div className="techstack-item">
                <div className="logo-container">
                  <FigmaDark />
                </div>
              </div>

              <div className="techstack-item">
                <div className="logo-container">
                  <IllustratorDark />
                </div>
              </div>
            </div>

            <div className="bottom-contact">
              <a data-aos="fade-up" onClick={handleDownload} download>
                <button className="bottom-icon">
                  <i className="bx bx-down-arrow-alt"></i>
                  <p>Download CV</p>
                </button>
              </a>

              <a
                data-aos="fade-up"
                href="#info-section"
                onClick={handleConnectClick}
              >
                <button className="bottom-icon">
                  <i className="bx bx-code-alt"></i>
                  <p>Let&apos;s Connect</p>
                </button>
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default InfoCard;
