const experiences = [
  {
    number: "01",
    title: "Admin & Inventory Coordinator",
    organization: "J.(Junaid Jamshed) Pvt. Ltd. — (Textile)",
    location: "Industrial Area, Karachi, Pakistan",
    type: "Full-time",
    startMonth: "March",
    startYear: "2022",
    endMonth: "March",
    endYear: "2023",
    highlights:
      "Managed inventory records and maintained accurate data for daily operations. Assisted in monitoring stock levels and ensuring proper inventory organization. Collaborated effectively with team members to achieve daily operational targets. Developed strong communication, teamwork, and problem-solving skills while working in a fast-paced environment."
  },
  {
    number: "02",
    title: "Software & Service Engineering",
    organization: "4D Technologies",
    location: "Gulistan-e-Johar, Karachi, Pakistan",
    type: "Full-time",
    startMonth: "August",
    startYear: "2026",
    endMonth: "Present",
    endYear: "present",
    highlights:
      "Practical exposure to software and service engineering, technical troubleshooting, problem-solving, technical support and real-world engineering workflows."
  }
];

function Experience() {
  return (
    <section className="experience-section" id="experience">

      <div className="section-container">

        <div className="section-top">
          <span className="section-number">04</span>
          <span className="section-label">EXPERIENCE</span>
        </div>

        <div className="section-heading-row">

          <div>
            <p className="eyebrow">
              PROFESSIONAL JOURNEY
            </p>

            <h2>
              Experience &
              <br />
              <em>practice.</em>
            </h2>
          </div>

          <p className="section-intro">
            Practical experience across administration, inventory,
            software development and technical service engineering.
          </p>

        </div>

        <div className="experience-list">

          {experiences.map((experience) => (

            <article
              className="experience-card"
              key={experience.number}
            >

              <div className="experience-top">

                <span className="experience-number">
                  {experience.number}
                </span>

                <span className="experience-type">
                  EXPERIENCE
                </span>

              </div>

              <div className="experience-main">

                <div className="experience-field">
                  <span className="field-label">
                    JOB TITLE
                  </span>

                  <h3>{experience.title}</h3>
                </div>

                <div className="experience-field">
                  <span className="field-label">
                    ORGANIZATION
                  </span>

                  <p>{experience.organization}</p>
                </div>

                <div className="experience-field">
                  <span className="field-label">
                    LOCATION
                  </span>

                  <p>{experience.location}</p>
                </div>

                <div className="experience-field">
                  <span className="field-label">
                    EMPLOYMENT TYPE
                  </span>

                  <p>{experience.type}</p>
                </div>

              </div>

              <div className="experience-dates">

                <div className="date-group">
                  <span className="date-label">
                    START DATE
                  </span>

                  <div className="date-boxes">
                    <div className="date-box">
                      {experience.startMonth}
                    </div>

                    <div className="date-box year-box">
                      {experience.startYear}
                    </div>
                  </div>
                </div>

                <div className="date-group">
                  <span className="date-label">
                    END DATE / PRESENT
                  </span>

                  <div className="date-boxes">
                    <div className="date-box">
                      {experience.endMonth}
                    </div>

                    <div className="date-box year-box">
                      {experience.endYear}
                    </div>
                  </div>
                </div>

              </div>

              <div className="experience-highlights">

                <span className="field-label">
                  HIGHLIGHTS
                </span>

                <div className="description-box">
                  <p>{experience.highlights}</p>
                </div>

              </div>

            </article>

          ))}

        </div>

      </div>

    </section>
  );
}

export default Experience;