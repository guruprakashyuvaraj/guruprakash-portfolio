const projects = [
  {
    number: "01",
    title: "AI-Powered Financial Document Q&A System",
    description:
      "A RAG-powered application that enables intelligent question answering over financial PDF documents using LLMs, semantic search, and vector databases",
    tech: "PYTHON / LANGCHAIN / RAG / FAISS / PINECONE / AWS BEDROCK",
  },
  {
    number: "02",
    title: "Agentic AI Research Assistant",
    description:
      "An Agentic AI application that automates multi-step research using LangGraph, LLM tool calling, RAG, and state-based workflow orchestration.",
    tech: "PYTHON / LANGCHAIN / LANGGRAPH / RAG / LLM TOOL CALLING",
  },
  {
    number: "03",
    title: "Online Payment Fraud Detection System",
    description:
      "A machine learning solution for detecting fraudulent online payment transactions using data preprocessing, feature engineering, and classification models for risk assessment.",
    tech: "PYTHON / MACHINE LEARNING / SCIKIT-LEARN / PANDAS / NUMPY",
  },
];

function Projects() {
  return (
    <section className="projects section" id="work">
      <div className="section-label">
        <span>03</span>
        FEATURED PROJECTS
      </div>

      <div className="projects-title">
        <h2>
          SOME OF MY
          <br />
          <span>RECENT AI PROJECTS.</span>
        </h2>
      </div>

      <div className="project-list">
        {projects.map((project) => (
          <article className="project-card" key={project.number}>
            <div className="project-image">
              <div className="image-placeholder">
                <span>{project.number}</span>
              </div>
            </div>

            <div className="project-info">
              <span className="project-number">
                {project.number}
              </span>

              <h2>{project.title}</h2>   

              <p>{project.description}</p>

              <div className="project-bottom">
                <span>{project.tech}</span>

                <button>VIEW PROJECT ↗</button>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

export default Projects;