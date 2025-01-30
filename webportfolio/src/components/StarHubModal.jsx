import PropTypes from "prop-types";
import s1 from "../assets/images/starhub.png";
import s2 from "../assets/images/starhub2.png";
import s3 from "../assets/images/starhub3.png";
import s4 from "../assets/images/starhub4.png";

import AOS from "aos";

const Modal = ({ isOpen, onClose }) => {
  AOS.init();

  if (!isOpen) return null;

  return (
    <div className="modal-overlay">
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <div className="modal-header">
          <h1>STARHub</h1>
          <i onClick={onClose} className="bx bxs-x-circle"></i>
        </div>
        <div className="project-Mwrapper">
          <div className="project-Mcontent">
            <div className="project-Mheader" data-aos="fade-down">
              <h2>Objectives.</h2>
            </div>

            <div className="project-Mcontent" data-aos="fade-up">
              <p>
                <strong>
                  Easily access past and current performance data{" "}
                </strong>
                with just a few clicks, removing the need for tedious manual
                calculations.
              </p>
              <p>
                <strong>Engage with a fun, user-friendly design</strong> that
                transforms viewing performance into an enjoyable experience,
                ensuring users don’t feel like they are working while
                interacting with the app.
              </p>
              <p>
                <strong>Stay motivated</strong> through a design that’s not only
                functional but also visually exciting, helping employees feel
                positive and engaged with their performance.
              </p>
            </div>

            <div className="project-Mheader" data-aos="fade-down">
              <h2>How it works? </h2>
            </div>

            <div className="project-Mcontent" data-aos="fade-up">
              <p>
                <strong>Interactive Dashboard:</strong> Navigate through the
                dynamic and intuitive dashboard where employees can see their
                monthly incentives, performance data, and more, all in a fun and
                engaging way.
              </p>
              <p>
                <strong>Stress-Free Data Access:</strong> Designed to reduce the
                usual work-related stress, STARhub offers an easy-to-use
                interface where users can check their stats without feeling
                overwhelmed.
              </p>
              <p>
                <strong>Engaging UI/UX Design:</strong> The vibrant and lively
                design of STARhub transforms incentive checking into a
                delightful experience, helping employees stay motivated and
                engaged.
              </p>
            </div>

            <div className="project-Mheader" data-aos="fade-down">
              <h2>Technologies used. </h2>
            </div>

            <div className="project-Mcontent" data-aos="fade-up">
              <p>
                <strong>Front-end:</strong> ASP.NET Razor Pages (HTML, CSS,
                JavaScript) – Powering the dynamic and responsive user
                interface.
              </p>
              <p>
                <strong>Back-end: </strong> C# for backend logic, providing a
                robust and scalable platform.
              </p>
              <p>
                <strong>Database:</strong> MySQL Workbench – Efficiently
                managing user data, performance metrics, and incentive records.
              </p>
              <p>
                <strong>UI/UX Design:</strong> Figma – Used to design a visually
                appealing and user-friendly interface, ensuring a seamless
                experience for users.
              </p>
            </div>

            <div className="project-Mheader" data-aos="fade-down">
              <h2>Project snippet.</h2>
            </div>

            <div className="project-Mcontent" data-aos="fade-up">
              <img className="project-image" src={s1} alt="Project Image" />
              <img className="project-image" src={s2} alt="Project Image" />
              <img className="project-image" src={s3} alt="Project Image" />
              <img className="project-image" src={s4} alt="Project Image" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// Prop validation
Modal.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
};

export default Modal;
