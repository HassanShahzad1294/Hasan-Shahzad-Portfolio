const services = [
  {
    number: "01",
    title: "Web Development",
    description:
      "Responsive and professional websites built with modern technologies and a practical approach."
  },
  {
    number: "02",
    title: "UX / UI Design",
    description:
      "Clean, intuitive and visually balanced interfaces designed to provide a smooth user experience."
  },
  {
    number: "03",
    title: "Software & Technical Solutions",
    description:
      "Practical software solutions, troubleshooting and technical support focused on real-world requirements."
  }
];

function Services({ onRequest }) {
  return (
    <section className="services-section" id="services">

      <div className="section-container">

        <div className="section-top">
          <span className="section-number">07</span>
          <span className="section-label">SERVICES</span>
        </div>

        <div className="section-heading-row">

          <div>
            <p className="eyebrow">
              WHAT I CAN DO
            </p>

            <h2>
              Services &
              <br />
              <em>solutions.</em>
            </h2>
          </div>

          <p className="section-intro">
            Focused services designed around practical business,
            software and digital requirements.
          </p>

        </div>

        <div className="services-grid">

          {services.map((service) => (

            <article
              className="service-card"
              key={service.number}
            >

              <div className="service-top">
                <span>{service.number}</span>
                <span>SERVICE</span>
              </div>

              <h3>{service.title}</h3>

              <p>{service.description}</p>

              <button onClick={onRequest}>
                Request Service <span>↗</span>
              </button>

            </article>

          ))}

        </div>

      </div>

    </section>
  );
}

export default Services;