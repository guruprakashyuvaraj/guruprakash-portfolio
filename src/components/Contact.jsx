function Contact() {
  const email = "guruprakashyuvaraj2003@gmail.com";

  return (
    <section className="contact section" id="contact">
      <div className="section-label">
        <span>04</span>
        CONTACT
      </div>

      <div className="contact-content">
        <p className="contact-small">
          HAVE AN AI PROJECT IN MIND?
        </p>

        <h2>
          LET'S BUILD
          <br />
          SOMETHING <span>INTELLIGENT.</span>
        </h2>

        <a
          href={`mailto:${email}`}
          className="contact-button"
        >
          SEND ME AN EMAIL ↗
        </a>

        <div className="social-links">
          <a href={`mailto:${email}`}>
            {email} ↗
          </a>

          <a
            href="https://github.com/guruprakashyuvaraj"
            target="_blank"
            rel="noreferrer"
          >
            GitHub ↗
          </a>

          <a
            href="https://www.linkedin.com/in/guruprakash-y-1740b3258"
            target="_blank"
            rel="noreferrer"
          >
            LinkedIn ↗
          </a>
        </div>
      </div>
    </section>
  );
}

export default Contact;