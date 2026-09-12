function Navbar() {
  return (
    <header className="navbar">
      <div className="nav-container">

        <a href="#home" className="logo">
          HASAN <span>SHAHZAD</span>
        </a>

        <nav>
          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#education">Education</a>
          <a href="#experience">Experience</a>
          <a href="#skills">Skills</a>
          <a href="#projects">Projects</a>
          <a href="#services">Services</a>
          <a href="#interests">Interests</a>
          <a href="#contact">Contact</a>
        </nav>

        <a href="#contact" className="nav-contact">
          Let's Talk
        </a>

      </div>
    </header>
  );
}

export default Navbar;