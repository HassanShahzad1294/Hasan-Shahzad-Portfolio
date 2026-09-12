const projects = [
  {
    number: "01",
    title: "LuxuryStay HMS",
    category: "MERN STACK · HOTEL MANAGEMENT",
    description:
      "A full-stack hotel management system built with MongoDB, Express.js, React.js and Node.js.",
    github:
      "https://github.com/HassanShahzad1294/MERN-Hotel_Management_System",
    live: "https://mern-hotel-management-system.vercel.app/"
  },
  {
    number: "02",
    title: "Business Analytics Dashboard",
    category: "REACT.JS · DASHBOARD",
    description:
      "A modern business analytics dashboard designed to present business data through a clean and practical interface.",
    github:
    "https://github.com/HassanShahzad1294/business-analytics-dashboard",
  live:
    "https://business-analytics-dashboard-seven.vercel.app/"
  },
  {
    number: "03",
    title: "Quiz Game",
    category: "JAVASCRIPT · WEB APPLICATION",
    description:
      "An interactive quiz application designed with a simple interface and engaging user experience.",
    github: "",
    live: "https://quiz-game-a4tv.onrender.com/"
  },
  {
    number: "04",
    title: "NEXORA AI & Digital Solutions",
    category: "REACT.JS · NODE.JS · MONGODB",
    description:
      "A modern digital solutions website with a React frontend and backend integration.",
     github:
    "https://github.com/HassanShahzad1294/Nexora-AI-Digital-Solutions",
  live:
    "https://nexora-ai-digital-solutions.vercel.app/"
  },
  {
    number: "05",
    title: "BMW Website",
    category: "HTML · CSS · REACT.JS",
    description:
      "A premium automotive website concept converted from a static HTML/CSS design into React.",
    github: "",
    live: ""
  }
];

function Projects() {
  return (
    <section className="projects-section" id="projects">

      <div className="section-container">

        <div className="section-top">
          <span className="section-number">06</span>
          <span className="section-label">PROJECTS</span>
        </div>

        <div className="section-heading-row">

          <div>
            <p className="eyebrow">
              SELECTED WORK
            </p>

            <h2>
              Things I’ve
              <br />
              <em>built.</em>
            </h2>
          </div>

          <p className="section-intro">
            Selected development projects demonstrating my approach to
            design, functionality and practical software development.
          </p>

        </div>

        <div className="projects-list">

          {projects.map((project) => (

            <article
              className="project-card"
              key={project.number}
            >

              <div className="project-number">
                {project.number}
              </div>

              <div className="project-content">

                <span className="project-category">
                  {project.category}
                </span>

                <h3>{project.title}</h3>

                <p>{project.description}</p>

                <div className="project-links">

                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      GitHub ↗
                    </a>
                  )}

                  {project.live && (
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Live Demo ↗
                    </a>
                  )}

                </div>

              </div>

              <div className="project-arrow">
                ↗
              </div>

            </article>

          ))}

        </div>

      </div>

    </section>
  );
}

export default Projects;