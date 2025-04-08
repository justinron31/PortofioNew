import AOS from "aos";
import { useEffect } from "react";
import PropTypes from "prop-types";

// Reusable components with prop-types
const ProjectTools = ({ tools }) => (
  <div className="project-tools" data-aos="fade-right">
    {tools.map((tool, index) => (
      <div key={index} className="tools">
        {tool}
      </div>
    ))}
  </div>
);

ProjectTools.propTypes = {
  tools: PropTypes.arrayOf(PropTypes.string).isRequired,
};

const ProjectLinks = ({ links }) => (
  <div className="project-link" data-aos="fade-left">
    {links.map((link, index) => (
      <a
        key={index}
        href={link.url}
        target="_blank"
        rel="noopener noreferrer"
        className="project-link-button"
      >
        <i className={link.icon}></i>
      </a>
    ))}
  </div>
);

ProjectLinks.propTypes = {
  links: PropTypes.arrayOf(
    PropTypes.shape({
      icon: PropTypes.string.isRequired,
      url: PropTypes.string.isRequired,
    })
  ).isRequired,
};

// Experience item component
const ExperienceItem = ({ experience }) => (
  <div className="project-box">
    <div className="project-block">
      <div className="project-left">
        <div className="project-name" data-aos="fade-right">
          <div className="date-header">
            <p className="xp-date">{experience.date}</p> <hr />
          </div>

          <h1>
            {experience.title} <span className="nameAt">@ </span>
            <a
              href={experience.companyUrl}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: "inline-flex",
                alignItems: "center",
              }}
            >
              <span className="company">{experience.company}</span>
              <i className="bx bx-right-arrow-alt diagonal-arrow"></i>
            </a>
          </h1>
        </div>
        <div className="project-description" data-aos="fade-right">
          <p>{experience.description}</p>
        </div>
      </div>
    </div>
    <ProjectTools tools={experience.tools} />
  </div>
);

ExperienceItem.propTypes = {
  experience: PropTypes.shape({
    id: PropTypes.number.isRequired,
    date: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    company: PropTypes.string.isRequired,
    companyUrl: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    tools: PropTypes.arrayOf(PropTypes.string).isRequired,
  }).isRequired,
};

// Academic project item component
const AcademicProjectItem = ({ project }) => (
  <div className="project-box">
    <div className="project-block">
      <div className="project-left">
        <div className="project-name" data-aos="fade-right">
          <div className="date-header">
            <p className="xp-date">{project.date}</p> <hr />
          </div>

          <h1 className="project-title">{project.title}</h1>
          <div className="project-subtitle">
            <p>{project.subtitle}</p>
            <p className="small-text">
              <i>{project.role}</i>
            </p>
          </div>
        </div>
        <div className="project-description" data-aos="fade-right">
          <p>{project.description}</p>
        </div>
      </div>
    </div>
    <div className="project-footer">
      <ProjectTools tools={project.tools} />
      <ProjectLinks links={project.links} />
    </div>
  </div>
);

AcademicProjectItem.propTypes = {
  project: PropTypes.shape({
    id: PropTypes.number.isRequired,
    date: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    subtitle: PropTypes.string.isRequired,
    role: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    tools: PropTypes.arrayOf(PropTypes.string).isRequired,
    links: PropTypes.arrayOf(
      PropTypes.shape({
        icon: PropTypes.string.isRequired,
        url: PropTypes.string.isRequired,
      })
    ).isRequired,
  }).isRequired,
};

// Side project item component
const SideProjectItem = ({ project }) => (
  <div className="project-box">
    <div className="project-block">
      <div className="project-left">
        <div className="project-name" data-aos="fade-right">
          <div className="date-header">
            <p className="xp-date">{project.date}</p> <hr />
          </div>

          <h1 className="project-title">{project.title}</h1>
          <div className="project-subtitle">
            <p className="small-text">
              <i>{project.role}</i>
            </p>
          </div>
        </div>
        <div className="project-description" data-aos="fade-right">
          <p>{project.description}</p>
        </div>
      </div>
    </div>
    <div className="project-footer">
      <ProjectTools tools={project.tools} />
      <ProjectLinks links={project.links} />
    </div>
  </div>
);

SideProjectItem.propTypes = {
  project: PropTypes.shape({
    id: PropTypes.number.isRequired,
    date: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    role: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    tools: PropTypes.arrayOf(PropTypes.string).isRequired,
    links: PropTypes.arrayOf(
      PropTypes.shape({
        icon: PropTypes.string.isRequired,
        url: PropTypes.string.isRequired,
      })
    ).isRequired,
  }).isRequired,
};

// Data arrays for different project sections
const experienceData = [
  {
    id: 2,
    date: "Feb 2025 - April 2025",
    title: "Junior Web Developer",
    company: "Sta. Clara International Corp.",
    companyUrl: "https://staclara.com.ph/",
    description:
      "I co-developed BAC Software from scratch using Next.js, React, Mantine UI, and Supabase (PostgreSQL DB) through pair programming, focusing on building core procurement features that established a streamlined workflow foundation. Through thorough pull request reviews on GitHub and continued pair programming sessions, I ensured high code quality for BAC Software while promoting maintainable code practices and knowledge sharing across the team. Additionally, I managed the BAC Software deployment pipeline on Vercel, implementing CI/CD processes that accelerated development cycles and created an efficient feedback loop for internal testing.",
    tools: [
      "Next.Js",
      "React",
      "HTML/CSS",
      "Mantine UI",
      "Supabase",
      "PostgreSQL",
      "Figma",
    ],
  },
  {
    id: 1,
    date: "Nov 2023 - Nov 2024",
    title: "Software Engineer Intern",
    company: "Concentrix Global",
    companyUrl: "https://www.concentrix.com/",
    description:
      "During my internship, I built and maintained a web-based incentive management platform that enabled employees to effortlessly review their monthly performance metrics. I engineered a dynamic and engaging UI/UX, transforming routine score checks into a refreshing, stress-free experience. Collaborating closely with cross-functional teams, I integrated seamless data management to ensure the platform consistently delivered an intuitive and enjoyable user experience.",
    tools: [
      "ASP.NET Razor",
      "HTML & CSS",
      "JavaScript",
      "C#",
      "MySQL Workbench",
      "Figma",
    ],
  },
];

const academicProjectsData = [
  {
    id: 1,
    date: "Jan 2024 - Jul 2024",
    title: "Web-based record management and issuance system",
    subtitle: "Barangay Makiling",
    role: "Web Developer",
    description:
      "This capstone project is a web-based record management and issuance system designed to streamline online document requests for Barangay Makiling. It allows residents to request and receive documents without needing to visit in person. The system features a full-featured CRUD application supported by a streamlined database, significantly improving efficiency and user convenience.",
    tools: ["HTML & CSS", "JavaScript", "PHP", "phpMyAdmin", "Figma"],
    links: [
      {
        icon: "bx bxl-github",
        url: "https://github.com/justinron31/WEB-BASED-RECORD-MANAGEMENT-AND-ISSUANCE-SYSTEM-FOR-BARANGAY-MAKILING",
      },
      {
        icon: "bx bxl-figma",
        url: "https://www.figma.com/design/LJpjIlrCQdPTR1p0gzeYAQ/Barangay-Record-Management-System",
      },
    ],
  },
  {
    id: 2,
    date: "July 2023 - Aug 2023",
    title: "Online Enrollment System - User Interface Design",
    subtitle: "LPU - Laguna",
    role: "UI/UX Designer",
    description:
      "This project focused on redesigning and expanding the existing LPU-Laguna portal to deliver a modern, user-friendly experience for students and staff. As a UI/UX Designer, I collaborated with a dedicated team to revamp the interface, streamline the enrollment process, and enhance overall usability. By reimagining the portal's design, we created a more intuitive and engaging experience that not only refreshed the look and feel but also improved efficiency and functionality across the system.",
    tools: ["Canva", "Adobe Illustrator", "Figma"],
    links: [
      {
        icon: "bx bxl-figma",
        url: "https://www.figma.com/design/TtxkXkg6jRUREzsJlg73Hl/Enrollment-UI?node-id=0-1&t=uATiHlDA11HmMp5l-1",
      },
      {
        icon: "bx bx-play",
        url: "https://www.figma.com/proto/TtxkXkg6jRUREzsJlg73Hl/Enrollment-UI?page-id=0%3A1&node-id=466-3366&p=f&viewport=1174%2C425%2C0.03&t=T5IQ0vvbVn1zSPtF-1&scaling=scale-down&content-scaling=fixed&starting-point-node-id=466%3A3366",
      },
    ],
  },
];

const sideProjectsData = [
  {
    id: 1,
    date: "Feb 2025",
    title: "PassPalette Gen",
    role: "Web Developer",
    description:
      "Animated Password Generator is my side project where I'm exploring new frameworks and honing my skills with modern development tools. This interactive app creates secure passwords with a visual twist: each character is animated with a random placeholder before settling into its final form, making the process both secure and engaging. The tool features a toggle for dark/light modes, an option to show or hide the password, and a copy-to-clipboard button for convenience. Built with React, JavaScript, and Tailwind CSS, the app is fully responsive, offering a sleek user experience across devices while serving as a playground for experimenting with new technologies.",
    tools: ["React", "Vite", "Javascript", "Tailwind CSS", "Vercel"],
    links: [
      {
        icon: "bx bxl-github",
        url: "https://github.com/justinron31/PasswordGen/tree/main",
      },
      {
        icon: "bx bx-play",
        url: "https://psswrdgnrtr-topaz.vercel.app/",
      },
    ],
  },
  {
    id: 2,
    date: "Sep 2024",
    title: "WIKHAIN - Mobile Application",
    role: "Freelance - UI/UX Desginer",
    description:
      "WIKHAIN is a mobile UI project I designed as a Freelance UI/UX Designer. Working with a team member, we developed a hi-fidelity prototype that reimagines the mobile experience. The interface features speech recognition, translation (speech-to-text and text-to-speech), and image-to-text conversion, along with easy onboarding via sign-up and social logins, personalized profiles, in-app purchases, a help center, robust security, and multi-language support.",
    tools: ["Canva", "Adobe Illustrator", "Figma"],
    links: [
      {
        icon: "bx bxl-behance",
        url: "https://www.behance.net/gallery/212495929/WIKHAIN-Mobile-UI",
      },
      {
        icon: "bx bxl-figma",
        url: "https://www.figma.com/design/tzJ2iz79VxypgRwU4OUoun/WIKHAIN?node-id=0-1&p=f",
      },
      {
        icon: "bx bx-play",
        url: "https://www.figma.com/proto/tzJ2iz79VxypgRwU4OUoun/WIKHAIN?page-id=0%3A1&node-id=3-274&p=f&viewport=873%2C103%2C0.2&t=pf8K3X012EYy6JPO-1&scaling=min-zoom&content-scaling=fixed",
      },
    ],
  },
  {
    id: 3,
    date: "Aug 2024",
    title: "PAMILIJUAN - Mobile Application",
    role: "Freelance - UI/UX Desginer",
    description:
      "PamiliJuan's mobile UI is a user-friendly platform designed for local MSMEs to easily sell products online and connect with investors. In this project, I teamed up with a colleague to create a hi-fidelity prototype that features a simple marketplace for showcasing goods, an investment hub for entrepreneurs to pitch ideas, and educational resources on technology, business, and sustainability—all aimed at boosting local economies and tourism.",
    tools: ["Canva", "Adobe Illustrator", "Figma"],
    links: [
      {
        icon: "bx bxl-behance",
        url: "https://www.behance.net/gallery/212494479/PamiliJuan-Mobile-UI",
      },
      {
        icon: "bx bxl-figma",
        url: "https://www.figma.com/design/S0ccbcigNNTMjgoA4Jh9vG/PamiliJuan",
      },
      {
        icon: "bx bx-play",
        url: "https://www.figma.com/proto/S0ccbcigNNTMjgoA4Jh9vG/PamiliJuan?page-id=0%3A1&node-id=121-17&p=f&viewport=753%2C551%2C0.06&t=ZOeGZrqtPQHoQBRt-1&scaling=scale-down&content-scaling=fixed&starting-point-node-id=121%3A15",
      },
    ],
  },
];

function ProjectSection() {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <>
      <section id="projects" data-aos="fade-up">
        <div className="project-wrapper">
          <div className="project-container">
            <div className="project-content">
              <div className="project-date" data-aos="fade-right">
                <h1>Experience</h1>
              </div>
              {experienceData.map((experience) => (
                <ExperienceItem key={experience.id} experience={experience} />
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="project-section" data-aos="fade-up">
        <div className="project-wrapper">
          <div className="project-container">
            <div className="project-content">
              <div className="project-date" data-aos="fade-right">
                <h1>Academic projects</h1>
              </div>
              {academicProjectsData.map((project) => (
                <AcademicProjectItem key={project.id} project={project} />
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="project-section" data-aos="fade-up">
        <div className="project-wrapper">
          <div className="project-container">
            <div className="project-content">
              <div className="project-date" data-aos="fade-right">
                <h1>Side projects</h1>
              </div>
              {sideProjectsData.map((project) => (
                <SideProjectItem key={project.id} project={project} />
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default ProjectSection;
