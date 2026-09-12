function Footer() {
  return (
    <footer className="footer">

      <div className="footer-container">

        <div className="footer-brand">

          <a href="#home" className="footer-logo">
            HASAN <span>SHAHZAD</span>
          </a>

          <p>
            Full Stack Developer
          </p>

          <small>
            Always curious, always building, and always growing.
          </small>

        </div>

        <div className="footer-links">

          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#projects">Projects</a>
          <a href="#contact">Contact</a>

        </div>

      </div>

      <div className="footer-bottom">

        <span>
  Designed & Developed by Hasan Shahzad
</span>

        <span>
          Karachi, Pakistan
        </span>

      </div>

    </footer>
  );
}

export default Footer;