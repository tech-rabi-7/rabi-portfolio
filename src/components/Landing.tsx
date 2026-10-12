import { PropsWithChildren } from "react";
import "./styles/Landing.css";

const Landing = ({ children }: PropsWithChildren) => {
  return (
    <>
      <div className="landing-section" id="landingDiv">
        <div className="landing-container">
          {/* Left Column: Intro, Identity & Quick Action */}
          <div className="landing-intro">
            <div className="hero-status-pill">
              <span className="status-dot"></span>
              <span className="status-text">Intern @ Simpsoft Solutions • B.Tech CSE '27</span>
            </div>

            <h2 className="hero-greeting">Hello! I'm</h2>
            <h1 className="hero-name">
              RABI <span className="hero-name-accent">PAUL</span>
            </h1>

            <p className="hero-tagline">
              Computer Science Engineer building scalable backend architectures, transit optimization engines, and high-performance software.
            </p>

            <div className="hero-actions">
              <a href="#work" className="hero-btn hero-btn-primary">
                <span>Explore Work</span>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="12" y1="5" x2="12" y2="19"></line>
                  <polyline points="19 12 12 19 5 12"></polyline>
                </svg>
              </a>
              <a href="#contact" className="hero-btn hero-btn-secondary">
                <span>Get In Touch</span>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="5" y1="12" x2="19" y2="12"></line>
                  <polyline points="12 5 19 12 12 19"></polyline>
                </svg>
              </a>
            </div>

            <div className="hero-metrics-strip">
              <div className="metric-chip">
                <span className="metric-val">23</span>
                <span className="metric-lbl">Cities Modeled</span>
              </div>
              <div className="metric-sep">•</div>
              <div className="metric-chip">
                <span className="metric-val">11+</span>
                <span className="metric-lbl">Projects & Certs</span>
              </div>
              <div className="metric-sep">•</div>
              <div className="metric-chip">
                <span className="metric-val">Kolkata</span>
                <span className="metric-lbl">India</span>
              </div>
            </div>
          </div>

          {/* Right Column: Specialization & Capabilities */}
          <div className="landing-info">
            <div className="hero-spec-tag">CORE DISCIPLINE</div>
            <h2 className="landing-info-h2">
              <div className="landing-h2-1">SOFTWARE</div>
              <div className="landing-h2-2">ENGINEER</div>
            </h2>

            {/* Futuristic terminal spec snippet */}
            <div className="hero-console-card">
              <div className="console-header">
                <div className="console-lights">
                  <span className="light red"></span>
                  <span className="light yellow"></span>
                  <span className="light green"></span>
                </div>
                <span className="console-title">stack_spec.json</span>
              </div>
              <div className="console-code">
                <div className="code-line">
                  <span className="code-k">"backend":</span> <span className="code-v">["Java", "Python", "REST APIs", "SQL"]</span>,
                </div>
                <div className="code-line">
                  <span className="code-k">"engines":</span> <span className="code-v">["RouteRanker", "DSA", "XGBoost"]</span>,
                </div>
                <div className="code-line">
                  <span className="code-k">"frontend":</span> <span className="code-v">["React", "TypeScript", "Three.js"]</span>
                </div>
              </div>
            </div>

            {/* Quick skill pills */}
            <div className="hero-pills">
              <span className="pill">Java</span>
              <span className="pill">Python</span>
              <span className="pill">C++</span>
              <span className="pill">DSA</span>
              <span className="pill">React</span>
              <span className="pill">PostgreSQL</span>
            </div>
          </div>

          {/* Mobile photo - shows only on mobile when 3D character is hidden */}
          <div className="mobile-photo">
            <img
              src="/picture.png"
              alt="Rabi Paul"
              loading="eager"
              fetchPriority="high"
              decoding="async"
            />
          </div>
        </div>
        {children}
      </div>
    </>
  );
};

export default Landing;

