function About() {
  return (
    <section className="about-section" id="about">

      <div className="section-container">

        <div className="section-top">
          <span className="section-number">02</span>
          <span className="section-label">ABOUT ME</span>
        </div>

        <div className="about-grid">

          <div className="about-image-area">

            <div className="about-image-frame">

              <img
                src="/images/hasan.s.jpg"
                alt="Hassan Shahzad"
              />

              <div className="about-image-label">
                <span>02</span>
                <span>HASAN SHAHZAD</span>
              </div>
 
            </div>
  
          </div>

          <div className="about-content">

            <p className="eyebrow">
              A LITTLE ABOUT
            </p>

            <h2>
              Building with
              <br />
              <em>purpose.</em>
            </h2>

            <p>
              I’m a Software Engineering graduate and Full Stack Developer
              with hands-on experience in React.js, JavaScript, Node.js,
              Express.js, MongoDB, PHP, and Laravel. I enjoy building
              responsive web applications, solving technical problems,
              and turning ideas into practical solutions.
            </p>

            <p>
              Alongside software development, I’m also gaining practical
              experience in both Software Engineering and Service
              Engineering within the pharmaceutical industry. This is
              helping me develop my skills in coding, troubleshooting,
              technical support, and real-world problem-solving.
            </p>

            <p>
              I’m currently looking to grow further in Software Development
              and Full Stack Development, while bringing a practical mindset
              and strong problem-solving approach to my work.
            </p>

            <div className="about-signature">
              <span>Always curious, always building,</span>
              <strong>and always growing.</strong>
            </div>

          </div>

        </div>

      </div>

    </section>
  );
}

export default About;