import { useState } from "react";
import emailjs from "@emailjs/browser";

function Contact() {
  const [sending, setSending] = useState(false);

  async function handleSubmit(e) {
    e.preventDefault();
    setSending(true);

    try {
      await emailjs.sendForm(
        "service_o9r8z3j",
        "template_gdlco6t",
        e.target,
        "NOiobnRwLFUpFN5Zz"
      );

      alert("Thank you. I’ll be in touch");
      e.target.reset();

    } catch (error) {
      console.error("EmailJS Error:", error);
      alert("Sorry, your message could not be sent. Please try again.");

    } finally {
      setSending(false);
    }
  }

  return (
    <section className="contact-section" id="contact">

      <div className="section-container">

        <div className="section-top">
          <span className="section-number">09</span>
          <span className="section-label">CONTACT</span>
        </div>

        <div className="contact-grid">

          <div className="contact-heading">

            <p className="eyebrow">
              LET'S CONNECT
            </p>

            <h2>
              Have an idea?
              <br />
              <em>Let's talk.</em>
            </h2>

            <p>
              Whether you have a project in mind, a development
              opportunity, or simply want to connect, feel free to reach out.
            </p>

            <div className="contact-links">

              <a href="mailto:hassanshahzad32225@gmail.com">
                <span>EMAIL</span>
                <strong>hassanshahzad32225@gmail.com</strong>
              </a>

              <a href="tel:+923333372204">
                <span>PHONE</span>
                <strong>0333-3372204</strong>
              </a>

              <a
                href="https://www.linkedin.com/in/hasan-shahzad-08b384432/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span>LINKEDIN</span>
                <strong>LinkedIn Profile ↗</strong>
              </a>

              <a
                href="https://github.com/HassanShahzad1294"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span>GITHUB</span>
                <strong>HassanShahzad1294 ↗</strong>
              </a>

            </div>

          </div>

          <form
            className="contact-form"
            onSubmit={handleSubmit}
          >

            <div className="form-field">

              <label htmlFor="name">
                YOUR NAME
              </label>

              <input
                id="name"
                type="text"
                name="name"
                placeholder="Enter your name"
                required
              />

            </div>

            <div className="form-field">

              <label htmlFor="email">
                EMAIL ADDRESS
              </label>

              <input
                id="email"
                type="email"
                name="email"
                placeholder="Enter your email"
                required
              />

            </div>

            <div className="form-field">

              <label htmlFor="message">
                MESSAGE
              </label>

              <textarea
                id="message"
                name="message"
                placeholder="Tell me about your project..."
                rows="6"
                required
              ></textarea>

            </div>

            <button
              type="submit"
              disabled={sending}
            >
              {sending ? "Sending..." : "Send Message →"}
            </button>

          </form>

        </div>

      </div>

    </section>
  );
}

export default Contact;