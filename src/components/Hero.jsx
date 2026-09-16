function Hero() {
  return (
    <section className="hero" id="home">

      <div className="hero-container">

        <div className="hero-content">

          <div className="hero-label">
            <span></span>
            FULL STACK DEVELOPER · KARACHI
          </div> 
          <h1>
            Hasan
            <br />
            <em>Shahzad.</em>
          </h1>

          <h2 className="professional-headline">
            Full Stack Developer | MERN Stack | React.js | Node.js |
            Express.js | MongoDB | Bridging Software & Pharma Service Engineering
          </h2>

          <p>
            I’m a Software Engineering graduate and Full Stack Developer
            with hands-on experience in React.js, JavaScript, Node.js,
            Express.js, MongoDB, PHP, and Laravel. I enjoy building
            responsive web applications, solving technical problems,
            and turning ideas into practical solutions.
          </p>

          <div className="hero-buttons">

            <a href="#projects" className="btn-primary">
              View Projects
            </a>

            <a
              href="/Hasan Shahzad 01.pdf"
              download="Hasan Shahzad 01.pdf"
              className="btn-secondary"
            >
              Download CV
            </a>

           <a
  href="https://wa.me/923333372204"
  target="_blank"
  rel="noopener noreferrer"
  className="btn-whatsapp"
>
  WhatsApp Me
</a>

          </div>

          <div className="hero-meta">

            <div>
              <small>BASED IN</small>
              <strong>KARACHI, PAKISTAN</strong>
            </div>

            <div>
              <small>FOCUS</small>
              <strong>WEB & SOFTWARE</strong>
            </div>

            <div>
              <small>AVAILABLE FOR</small>
              <strong>DEVELOPMENT OPPORTUNITIES</strong>
            </div>

          </div>

        </div>

        <div className="hero-image-wrapper">

          <div className="hero-image-frame">

            <img
              src="/images/hassan-profile.jpg"
              alt="Hassan Shahzad"
            />

            <div className="image-caption">
              <span>01</span>
              <span>SOFTWARE ENGINEER</span>
            </div>

          </div>

          <div className="hero-decoration">
            H · S
          </div>

        </div>

      </div>

      <div className="hero-bottom">
        <span>SCROLL TO EXPLORE</span>
        <span className="scroll-line"></span>
      </div>

    </section>
  );
}

export default Hero;