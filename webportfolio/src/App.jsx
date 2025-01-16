import { useState, useEffect } from "react";
import "./App.css";

function App() {
  const [showInfoCard, setShowInfoCard] = useState(false);
  const [showLoader, setShowLoader] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowLoader(false); // Hide the loader
      setShowInfoCard(true); // Show the information card
    }, 1700); // Matches the duration of the animation

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {/* Spinning loader */}
      {showLoader && (
        <div className="main-card">
          <svg
            className="spinning-loader"
            fill="#000000"
            width="800px"
            height="800px"
            viewBox="0 -2 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M12.7361611,0.063952038 C13.2551391,0.263360331 13.5227261,0.869148905 13.3338336,1.41701869 L8.54555162,15.3051026 C8.35665911,15.8529724 7.78281676,16.1354563 7.26383885,15.936048 C6.74486095,15.7366397 6.47727387,15.1308511 6.66616638,14.5829813 L11.4544484,0.694897379 C11.6433409,0.147027596 12.2171832,-0.135456255 12.7361611,0.063952038 Z M2.41421356,8.25614867 L5.94974747,11.9885083 C6.34027176,12.4007734 6.34027176,13.0691871 5.94974747,13.4814522 C5.55922318,13.8937173 4.9260582,13.8937173 4.53553391,13.4814522 L0.292893219,9.0026206 C-0.0976310729,8.59035554 -0.0976310729,7.9219418 0.292893219,7.50967674 L4.53553391,3.03084515 C4.9260582,2.61858008 5.55922318,2.61858008 5.94974747,3.03084515 C6.34027176,3.44311021 6.34027176,4.11152395 5.94974747,4.52378901 L2.41421356,8.25614867 Z M17.5857864,8.25614867 L14.0502525,4.52378901 C13.6597282,4.11152395 13.6597282,3.44311021 14.0502525,3.03084515 C14.4407768,2.61858008 15.0739418,2.61858008 15.4644661,3.03084515 L19.7071068,7.50967674 C20.0976311,7.9219418 20.0976311,8.59035554 19.7071068,9.0026206 L15.4644661,13.4814522 C15.0739418,13.8937173 14.4407768,13.8937173 14.0502525,13.4814522 C13.6597282,13.0691871 13.6597282,12.4007734 14.0502525,11.9885083 L17.5857864,8.25614867 Z" />
          </svg>
        </div>
      )}

      {/* Information card */}
      {showInfoCard && (
        <section
          className="information-card"
          style={{ display: showInfoCard ? "flex" : "none" }}
        >
          <div className="wrapper">
            <div className="content">
              <h1>justin ron.</h1>
              <p>Web Developer</p>

              {/* Contact Section */}
              <div className="contact">
                <a
                  href="https://www.linkedin.com/in/justinron/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <div className="icon">
                    <i className="bx bxl-linkedin"></i>
                  </div>
                </a>

                <a href="mailto:justingalangzxc31@gmail.com">
                  <div className="icon">
                    <i className="bx bxs-envelope"></i>
                    <p>Contact me</p>
                  </div>
                </a>
              </div>

              {/* Career Highlights Section */}
              <div className="portfolio-button-wrapper">
                <a href="#projects">
                  <div className="portfolio-button">
                    <i className="bx bxs-down-arrow"></i>
                    <p>My Porfolio</p>
                  </div>
                </a>
              </div>
            </div>
          </div>

          <section id="projects">
            <h1>test project section</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore
              mollitia excepturi aliquam explicabo quo, aperiam unde obcaecati
              nisi, perspiciatis odio incidunt dolorum illo nulla provident
              fugiat laborum est amet doloremque!
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore
              mollitia excepturi aliquam explicabo quo, aperiam unde obcaecati
              nisi, perspiciatis odio incidunt dolorum illo nulla provident
              fugiat laborum est amet doloremque!
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore
              mollitia excepturi aliquam explicabo quo, aperiam unde obcaecati
              nisi, perspiciatis odio incidunt dolorum illo nulla provident
              fugiat laborum est amet doloremque!
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore
              mollitia excepturi aliquam explicabo quo, aperiam unde obcaecati
              nisi, perspiciatis odio incidunt dolorum illo nulla provident
              fugiat laborum est amet doloremque!
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore
              mollitia excepturi aliquam explicabo quo, aperiam unde obcaecati
              nisi, perspiciatis odio incidunt dolorum illo nulla provident
              fugiat laborum est amet doloremque!
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore
              mollitia excepturi aliquam explicabo quo, aperiam unde obcaecati
              nisi, perspiciatis odio incidunt dolorum illo nulla provident
              fugiat laborum est amet doloremque!
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore
              mollitia excepturi aliquam explicabo quo, aperiam unde obcaecati
              nisi, perspiciatis odio incidunt dolorum illo nulla provident
              fugiat laborum est amet doloremque!
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore
              mollitia excepturi aliquam explicabo quo, aperiam unde obcaecati
              nisi, perspiciatis odio incidunt dolorum illo nulla provident
              fugiat laborum est amet doloremque!
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore
              mollitia excepturi aliquam explicabo quo, aperiam unde obcaecati
              nisi, perspiciatis odio incidunt dolorum illo nulla provident
              fugiat laborum est amet doloremque!
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore
              mollitia excepturi aliquam explicabo quo, aperiam unde obcaecati
              nisi, perspiciatis odio incidunt dolorum illo nulla provident
              fugiat laborum est amet doloremque!
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore
              mollitia excepturi aliquam explicabo quo, aperiam unde obcaecati
              nisi, perspiciatis odio incidunt dolorum illo nulla provident
              fugiat laborum est amet doloremque!
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore
              mollitia excepturi aliquam explicabo quo, aperiam unde obcaecati
              nisi, perspiciatis odio incidunt dolorum illo nulla provident
              fugiat laborum est amet doloremque!
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore
              mollitia excepturi aliquam explicabo quo, aperiam unde obcaecati
              nisi, perspiciatis odio incidunt dolorum illo nulla provident
              fugiat laborum est amet doloremque!
            </p>
          </section>
        </section>
      )}
    </>
  );
}

export default App;
