import { useState } from "react";
import { Link } from "react-router-dom";
import { config, ProjectItem } from "../config";
import "./MyWorks.css";

const MyWorks = () => {
  const [activeFilter, setActiveFilter] = useState<"all" | "project" | "certificate">("all");

  const filteredItems = config.projects.filter((item: ProjectItem) => {
    if (activeFilter === "all") return true;
    return item.type === activeFilter;
  });

  const projectsCount = config.projects.filter(p => p.type === "project").length;
  const certsCount = config.projects.filter(p => p.type === "certificate").length;

  return (
    <div className="myworks-page">
      <div className="myworks-header">
        <Link to="/" className="back-button" data-cursor="disable">
          ← Back to Home
        </Link>
        <h1>
          Engineering <span>Works</span> & Credentials
        </h1>
        <p>Software engineering projects, system prototypes, and verified technical credentials</p>

        {/* Filter Tabs */}
        <div className="myworks-filters">
          <button
            className={`filter-btn ${activeFilter === "all" ? "active" : ""}`}
            onClick={() => setActiveFilter("all")}
            data-cursor="disable"
          >
            All ({config.projects.length})
          </button>
          <button
            className={`filter-btn ${activeFilter === "project" ? "active" : ""}`}
            onClick={() => setActiveFilter("project")}
            data-cursor="disable"
          >
            Software Projects ({projectsCount})
          </button>
          <button
            className={`filter-btn ${activeFilter === "certificate" ? "active" : ""}`}
            onClick={() => setActiveFilter("certificate")}
            data-cursor="disable"
          >
            Certificates & Credentials ({certsCount})
          </button>
        </div>
      </div>

      <div className="myworks-grid">
        {filteredItems.map((project: ProjectItem, index: number) => {
          const isStaticFile = Boolean(
            project.link && (
              project.link.endsWith(".pdf") ||
              project.link.endsWith(".png") ||
              project.link.endsWith(".jpg") ||
              project.link.endsWith(".jpeg")
            )
          );
          const isInternalRoute = Boolean(project.link?.startsWith("/") && !isStaticFile);

          const cardContent = (
            <>
              <div className="myworks-card-top">
                <div className="myworks-card-number">0{index + 1}</div>
                <div className={`myworks-badge ${project.type === "certificate" ? "badge-cert" : "badge-proj"}`}>
                  {project.type === "certificate" ? "Credential ↗" : "Project ↗"}
                </div>
              </div>
              <div className="myworks-card-image">
                <img src={project.image} alt={project.title} loading="lazy" decoding="async" />
              </div>
              <div className="myworks-card-info">
                <h3>{project.title}</h3>
                <p className="myworks-card-category">{project.category}</p>
                <p className="myworks-card-description">{project.description}</p>
                <p className="myworks-card-tech">{project.technologies}</p>
              </div>
            </>
          );

          if (isInternalRoute && project.link) {
            return (
              <Link
                className="myworks-card"
                key={project.id}
                data-cursor="disable"
                to={project.link}
              >
                {cardContent}
              </Link>
            );
          }

          return (
            <a
              className="myworks-card"
              key={project.id}
              data-cursor="disable"
              href={project.link || undefined}
              target={project.link ? "_blank" : undefined}
              rel={project.link ? "noopener noreferrer" : undefined}
            >
              {cardContent}
            </a>
          );
        })}
      </div>
    </div>
  );
};

export default MyWorks;
