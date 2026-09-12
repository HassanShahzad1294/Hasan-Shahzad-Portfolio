const interests = [
  {
    number: "01",
    title: "Technology & Innovation",
    text: "Exploring modern technologies, software development and new digital ideas."
  },
  {
    number: "02",
    title: "Automotive Engineering",
    text: "Interested in advanced automotive design, engineering and performance."
  },
  {
    number: "03",
    title: "Space & Aerospace",
    text: "Interested in space technology, aerospace research and Pakistan's space program."
  },
  {
    number: "04",
    title: "Business & Entrepreneurship",
    text: "Interested in business ideas, digital products and building practical solutions."
  }
];

function Interests() {
  return (
    <section className="interests-section" id="interests">

      <div className="section-container">

        <div className="section-top">
          <span className="section-number">08</span>
          <span className="section-label">INTERESTS</span>
        </div>

        <div className="section-heading-row">

          <div>
            <p className="eyebrow">
              BEYOND CODE
            </p>

            <h2>
              Things that
              <br />
              <em>inspire me.</em>
            </h2>
          </div>

        </div>

        <div className="interests-grid">

          {interests.map((interest) => (

            <article
              className="interest-card"
              key={interest.number}
            >

              <span className="interest-number">
                {interest.number}
              </span>

              <h3>
                {interest.title}
              </h3>

              <p>
                {interest.text}
              </p>

            </article>

          ))}

        </div>

        <div className="interest-names">

          <span>Bill Gates</span>
          <span>Pagani Automobili</span>
          <span>Rimac Automobili</span>
          <span>SUPARCO</span>

        </div>

      </div>

    </section>
  );
}

export default Interests;