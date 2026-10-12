import "./styles/About.css";
import { config } from "../config";

const About = () => {
  return (
    <div className="about-section" id="about">
      <div className="about-wrapper">
        {/* Left Column: Executive Developer Profile Card */}
        <div className="about-card-col">
          <div className="about-profile-card">
            <div className="about-card-glow"></div>

            <div className="about-avatar-wrap">
              <img
                src="/picture.png"
                alt="Rabi Paul"
                className="about-avatar-img"
              />
              <div className="avatar-status-badge">
                <span className="avatar-beacon"></span>
                <span>ONLINE</span>
              </div>
            </div>

            <div className="about-card-info">
              <h3 className="about-card-name">{config.developer.fullName}</h3>
              <div className="about-card-role">Software Development Intern</div>
              <div className="about-card-company">@ Simpsoft Solutions</div>

              <div className="about-card-edu">
                <span className="edu-icon">🎓</span>
                <span>B.Tech in CSE (2023–2027) • SurTech (MAKAUT)</span>
              </div>

              <div className="about-card-loc">
                <span className="loc-icon">📍</span>
                <span>Kolkata, West Bengal, India</span>
              </div>
            </div>

            <div className="about-card-stats">
              <div className="stat-box">
                <span className="stat-number">23</span>
                <span className="stat-label">Cities Modeled</span>
              </div>
              <div className="stat-box">
                <span className="stat-number">7.00</span>
                <span className="stat-label">B.Tech CGPA</span>
              </div>
              <div className="stat-box">
                <span className="stat-number">11+</span>
                <span className="stat-label">Projects & Certs</span>
              </div>
            </div>

            <div className="about-card-links">
              <a
                href="/resume.pdf"
                target="_blank"
                rel="noreferrer"
                className="card-link-btn primary"
              >
                <span>View Full Resume</span>
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                  <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                  <polyline points="15 3 21 3 21 9"></polyline>
                  <line x1="10" y1="14" x2="21" y2="3"></line>
                </svg>
              </a>
              <div className="card-social-row">
                <a
                  href={config.contact.github}
                  target="_blank"
                  rel="noreferrer"
                  className="card-link-btn secondary"
                >
                  GitHub
                </a>
                <a
                  href={config.contact.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  className="card-link-btn secondary"
                >
                  LinkedIn
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column: Professional Engineering Story */}
        <div className="about-content-col">
          <div className="about-eyebrow">EXECUTIVE PROFILE</div>
          <h2 className="about-headline">
            Engineering scalable systems, algorithmic optimization, and production software.
          </h2>

          <div className="about-paragraphs">
            <p className="about-lead">
              I am a Computer Science & Engineering student and Software Engineer based in Kolkata, India. Driven by a passion for scalable computing, I transform complex algorithmic logic into high-efficiency software solutions.
            </p>
            <p className="about-text">
              Currently contributing as a <strong>Software Development Intern at Simpsoft Solutions</strong>, I build scalable backend services, develop clean REST APIs, optimize relational database queries, and adhere to production-grade Git workflows and architectural best practices.
            </p>
            <p className="about-text">
              My flagship algorithmic engineering work includes <strong>RouteRanker</strong>, an intelligent transit route optimization engine modeling metropolitan transit networks across <strong>23 Indian cities</strong>. It ingests raw GTFS feeds, computes Jaccard similarity matrices to eliminate corridor overlap, and predicts route efficiency with XGBoost machine learning.
            </p>
          </div>

          <div className="about-competencies">
            <div className="comp-title">CORE COMPETENCIES & DOMAINS:</div>
            <div className="comp-grid">
              <span className="comp-tag">⚡ Backend & RESTful APIs</span>
              <span className="comp-tag">🧠 Algorithmic Optimization (RouteRanker)</span>
              <span className="comp-tag">☕ Java & Spring Boot</span>
              <span className="comp-tag">🐍 Python, FastAPI & XGBoost</span>
              <span className="comp-tag">🗄️ SQL & Schema Optimization</span>
              <span className="comp-tag">🌐 React, TypeScript & WebGL</span>
              <span className="comp-tag">🧩 Data Structures & Graph Theory</span>
              <span className="comp-tag">🚀 Clean Production Architecture</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;

