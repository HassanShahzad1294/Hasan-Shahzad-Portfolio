const skillGroups = [
  {
    number: "01",
    title: "DEVELOPMENT",
    skills: [
      "HTML",
      "CSS",
      "JavaScript",
      "php",
      "Python",
      
    ]
  },
  {
    number: "02",
    title: "FRAMEWORKS & LIBRARIES",
    skills: [
      "React.js",
      "Node.js",
      "Express.js",
      "Laravel"
    ]
  },
  {
    number: "03",
    title: "DATABASES",
    skills: [
      "MongoDB",
      "MySQL"
    ]
  },
  {
    number: "04",
    title: "TOOLS",
    skills: [
      "GitHub",
      "VS Code",
      "MS Office",
      "Canva",
      "Adobe XD",
    ]
  },
  {
    number: "05",
    title: "OTHER",
    skills: [
      "Responsive Web Development",
      "Problem Solving",
      "Technical Support",
    ]
  },
{
  number: "05",
  title: "PERSONAL SKILLS",
  skills: [
    "Thoughtful Decision-Making",
    "Critical Thinking",
    "Time Management",
    "Clear Communication",
    "Quick Learner",
    "Attention to Detail"
  ]
}
];

function Skills() {
  return (
    <section className="skills-section" id="skills">

      <div className="section-container">

        <div className="section-top">
          <span className="section-number">05</span>
          <span className="section-label">SKILLS</span>
        </div>

        <div className="section-heading-row">

          <div>
            <p className="eyebrow">
              WHAT I WORK WITH
            </p>

            <h2>
              Skills &
              <br />
              <em>tools.</em>
            </h2>
          </div>

          <p className="section-intro">
            A practical technology stack focused on building responsive
            applications and solving real-world technical problems.
          </p>

        </div>

        <div className="skills-grid">

          {skillGroups.map((group) => (

            <div className="skill-group" key={group.number}>

              <div className="skill-group-top">

                <span>{group.number}</span>

                <span>{group.title}</span>

              </div>

              <div className="skill-items">

                {group.skills.map((skill) => (
                  <span className="skill-item" key={skill}>
                    {skill}
                  </span>
                ))}

              </div>

            </div>

          ))}

        </div>

      </div>
      

            
              
           
          
    </section>
  );
}

export default Skills;