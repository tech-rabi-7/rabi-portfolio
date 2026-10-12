import React, { useState } from "react";
import { config } from "../config";
import "./styles/CallToAction.css";

const CallToAction = () => {
  const [copied, setCopied] = useState(false);

  const handleHireClick = (e: React.MouseEvent) => {
    e.preventDefault();

    const email = config.contact.email;
    const subject = encodeURIComponent("Software Engineer Opportunity - Rabi Paul");
    const body = encodeURIComponent(
      "Hi Rabi,\n\nI came across your portfolio and would like to discuss a software engineering opportunity with you.\n\nBest regards,"
    );

    // 1. Copy email to clipboard immediately
    if (navigator.clipboard) {
      navigator.clipboard.writeText(email).catch(() => {});
    }

    setCopied(true);
    setTimeout(() => setCopied(false), 4500);

    // 2. Open Gmail web composer directly in new tab (guaranteed to work in any browser)
    const gmailUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=${email}&su=${subject}&body=${body}`;
    window.open(gmailUrl, "_blank", "noopener,noreferrer");

    // 3. Fallback: also trigger system mailto for users with native mail apps
    setTimeout(() => {
      window.location.href = `mailto:${email}?subject=${subject}&body=${body}`;
    }, 400);
  };

  return (
    <div className="cta-section" id="hire-me">
      <div className="cta-container">
        <h3 className="cta-heading">Ready to build something exceptional?</h3>
        <p className="cta-sub">
          Currently open to high-impact software engineering roles, internships, and collaborative backend & distributed projects.
        </p>

        <div className="cta-buttons">
          <button
            onClick={handleHireClick}
            className={`cta-btn cta-btn-hire ${copied ? "copied" : ""}`}
            data-cursor="disable"
            type="button"
          >
            <span>{copied ? "✓ Email Copied! Opening Mail..." : "Hire Me →"}</span>
          </button>

          <a
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="cta-btn cta-btn-resume"
            data-cursor="disable"
          >
            View Resume ↗
          </a>
        </div>

        {copied && (
          <div className="cta-toast">
            <span className="toast-dot"></span>
            <span>
              Copied email: <strong>{config.contact.email}</strong> • Opening Gmail composer...
            </span>
          </div>
        )}
      </div>
    </div>
  );
};

export default CallToAction;
