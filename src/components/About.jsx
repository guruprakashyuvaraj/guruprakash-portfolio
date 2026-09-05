import image from "../assets/ai-logo.png"
function About() {
  return (
    <section className="about section" id="about">
      <div className="section-label">
        <span>01</span>
        ABOUT ME
      </div>

      <div className="about-grid">

        <div className="about-left">
          <div className="about-image">
            <img src={image} alt="Profile" />
          </div>

          <h2>
            BUILDING INTELLIGENT
            <br />
            <span>SOLUTIONS</span>
            <br />
            WITH GENERATIVE AI
          </h2>
        </div>

        <div className="about-content">
          <p className="large-text">
            I'm a Generative AI Engineer focused on building intelligent,
            scalable, and real-world AI applications.
          </p>

          <p>
           I specialize in RAG, LLMs, prompt engineering, embeddings, and vector
           databases, using Python and AWS to develop reliable AI-powered solutions
           that solve real-world business problems.
          </p>

          <div className="stats">
            <div>
              <strong>01</strong>
              <span>YEARS EXPERIENCE</span>
            </div>

            <div>
              <strong>3</strong>
              <span>PROJECTS</span>
            </div>

            <div>
              <strong>15+</strong>
              <span>AI &amp; TECHNOLOGIES</span>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}

export default About;