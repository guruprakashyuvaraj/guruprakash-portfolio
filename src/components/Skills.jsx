const skills = [
  "Python",
  "Generative AI",
  "RAG",
  "LLMs",
  "LangChain",
  "LangGraph",
  "AWS Bedrock",
  "Prompt Engineering",
  "Embeddings",
  "Pinecone",
  "FAISS",
  "ChromaDB",
  "FastAPI",
  "Hugging Face",
  "Docker",
  "Git & GitHub",
];

function Skills() {
  return (
    <section className="skills section" id="skills">
      <div className="section-label">
        <span>02</span>
        MY SKILLS
      </div>

      <div className="skills-header">
        <h2>
          TECHNOLOGIES I USE TO
          <br />
          BUILD <span>INTELLIGENT AI SOLUTIONS.</span>
        </h2>

        <p>
          A collection of technologies and tools I use to build Generative AI,
          RAG, LLM-powered applications, and scalable AI solutions.
        </p>
      </div>

      <div className="skills-list">
        {skills.map((skill, index) => (
          <div className="skill-item" key={skill}>
            <span>0{index + 1}</span>
            <h3>{skill}</h3>
            <span className="arrow">↗</span>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Skills;