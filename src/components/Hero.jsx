function Hero() {
  return (
    <section className="hero section" id="home">
      <div className="hero-small-text">
        <span className="dot"></span>
        GEN AI ENGINEER
      </div>

      <div className="hero-content">
        <h1>
          I BUILD
          <br />
          <span>INTELLIGENT</span>
          <br />
          AI SOLUTIONS.
        </h1>

        <div className="hero-bottom">
          <p>
            I design and develop intelligent AI solutions using Generative AI, RAG,
            LLMs, Python, and AWS to solve real-world problems.
          </p>

          <div className="hero-buttons">
            {/* View Work */}
            <a href="#work" className="circle-button">
              <span>VIEW</span>
              <span>WORK ↗</span>
            </a>

            {/* Resume */}
            <a
              href="/guruprakash-portfolio/Guru_GenAi_Resume-01.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="resume-button"
            >
              VIEW RESUME ↗
            </a>
          </div>
        </div>
      </div>

      <div className="scroll-indicator">
        <span>SCROLL DOWN</span>
        <div></div>
      </div>
    </section>
  );
}

export default Hero;