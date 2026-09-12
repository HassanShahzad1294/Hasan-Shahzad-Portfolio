const educationData = [
  {
    number: "01",
    institutionLabel: "INSTITUTE",
    institute: "Aptech MSG, Karachi",
    degree: "Higher Diploma in Software Engineering [HDSE]",
    field: "Software Engineering",
    startMonth: "August",
    startYear: "2023",
    endMonth: "August",
    endYear: "2026",
    grade: "Distinction",
    activities: "Software Development & Technical Projects",
    description:
      "Completed a three-year Higher Diploma in Software Engineering with practical exposure to programming, web development, databases and software projects."
  },

  {
    number: "02",
    institutionLabel: "Sindh Board of Teachnical Education [SBTE]",
    institute: "Aptech MSG",
    degree: "Intermediate",
    field: "Computer Science",
    startMonth: "September",
    startYear: "2025",
    endMonth: "September",
    endYear: "2026",
    grade: "Result Awaited",
    activities:
      "Applied Mathematics, Physics, Chemistry & Oracle ERP",
    description:
      "Completed technical intermediate education in Computer Science under the Sindh Technical Education Board (SBTE), with a focus on technical and computer-related studies."
  },

  {
    number: "03",
    institutionLabel: "COLLEGE",
    institute: "Government Boys College",
    degree: "Intermediate",
    field: "Commerce",
    startMonth: "March",
    startYear: "2023",
    endMonth: "March",
    endYear: "2024",
    grade: "Completed",
    activities: "Commerce & Business Studies",
    description:
      "Studied commerce-related subjects including business, accounting and commercial practices."
  },

  {
    number: "04",
    institutionLabel: "SCHOOL",
    institute: "Al-Hamd English School",
    degree: "Matriculation",
    field: "Science — Biology Group",
    startMonth: "March",
    startYear: "2022",
    endMonth: "March",
    endYear: "2023",
    grade: "A One Grade",
    activities: "Science & Biology Activities",
    description:
      "Completed secondary education with a focus on Science and Biology, developing a strong academic foundation."
  }
];

function DateBox({ label, month, year }) {
  return (
    <div className="date-group">

      <span className="date-label">{label}</span>

      <div className="date-boxes">

        <div className="date-box">
          {month}
        </div>

        <div className="date-box year-box">
          {year}
        </div>

      </div>

    </div>
  );
}

function Education() {
  return (
    <section className="education-section" id="education">

      <div className="section-container">

        <div className="section-top">

          <span className="section-number">
            03
          </span>

          <span className="section-label">
            EDUCATION
          </span>

        </div>

        <div className="section-heading-row">

          <div>

            <p className="eyebrow">
              ACADEMIC JOURNEY
            </p>

            <h2>
              Education &
              <br />
              <em>learning.</em>
            </h2>

          </div>

          <p className="section-intro">
            From foundational education to software engineering and
            practical technology-focused learning.
          </p>

        </div>

        <div className="education-list">

          {educationData.map((education) => (

            <article
              className="education-card"
              key={education.number}
            >

              <div className="education-card-top">

                <span className="education-number">
                  {education.number}
                </span>

                <span className="education-type">
                  EDUCATION
                </span>

              </div>

              <div className="education-main">

                <div className="education-field">

                  <span className="field-label">
                    {education.institutionLabel}
                  </span>

                  <h3>
                    {education.institute}
                  </h3>

                </div>

                <div className="education-field">

                  <span className="field-label">
                    DEGREE
                  </span>

                  <p>
                    {education.degree}
                  </p>

                </div>

                <div className="education-field">

                  <span className="field-label">
                    FIELD OF STUDY
                  </span>

                  <p>
                    {education.field}
                  </p>

                </div>

              </div>

              <div className="education-dates">

                <DateBox
                  label="START DATE"
                  month={education.startMonth}
                  year={education.startYear}
                />

                <DateBox
                  label="END DATE / EXPECTED"
                  month={education.endMonth}
                  year={education.endYear}
                />

              </div>

              <div className="education-details">

                <div className="education-field">

                  <span className="field-label">
                    GRADE
                  </span>

                  <p>
                    {education.grade}
                  </p>

                </div>

                <div className="education-field">

                  <span className="field-label">
                    ACTIVITIES & SOCIETIES
                  </span>

                  <p>
                    {education.activities}
                  </p>

                </div>

              </div>

              <div className="education-description">

                <span className="field-label">
                  DESCRIPTION
                </span>

                <div className="description-box">

                  <p>
                    {education.description}
                  </p>

                </div>

              </div>

            </article>

          ))}

        </div>

      </div>

    </section>
  );
}

export default Education;