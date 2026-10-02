import type { Project, ProjectStatus } from "@/data/portfolio";

const statusLabels: Record<ProjectStatus, string> = {
  planned: "Planned",
  "in-progress": "In progress",
  completed: "Completed",
  prototype: "Prototype",
};

export function ProjectList({ projects }: { projects: Project[] }) {
  if (projects.length === 0) return null;
  return (
    <ul className="projects-list">
      {projects.map((project, index) => (
        <li key={project.slug}>
          <article
            className="project-card"
            aria-labelledby={`project-${project.slug}`}
          >
            <div className="project-overview">
              <div className="project-topline mono">
                <span>PROJECT / 0{index + 1}</span>
                <span className="project-status">
                  {project.year ? `${project.year} · ` : ""}
                  {statusLabels[project.status]}
                </span>
              </div>
              <h3 id={`project-${project.slug}`}>{project.title}</h3>
              {project.subtitle ? (
                <p className="project-subtitle">{project.subtitle}</p>
              ) : null}
              <p className="project-summary">{project.summary}</p>
              <ul className="tag-list" aria-label="Project technologies">
                {project.technologies.map((technology) => (
                  <li key={technology}>{technology}</li>
                ))}
              </ul>
              {project.repositoryUrl || project.demoUrl ? (
                <div className="project-links">
                  {project.repositoryUrl ? (
                    <a
                      className="text-link"
                      href={project.repositoryUrl}
                      target="_blank"
                      rel="noreferrer"
                    >
                      View on GitHub <span aria-hidden="true">{"\u2197\uFE0E"}</span>
                    </a>
                  ) : null}
                  {project.demoUrl ? (
                    <a
                      className="text-link"
                      href={project.demoUrl}
                      target="_blank"
                      rel="noreferrer"
                    >
                      Live demo <span aria-hidden="true">{"\u2197\uFE0E"}</span>
                    </a>
                  ) : null}
                </div>
              ) : null}
            </div>
            {project.architecture?.length ? (
              <div className="project-architecture">
                <p className="mono architecture-heading">SYSTEM ARCHITECTURE</p>
                <ol>
                  {project.architecture.map((stage, stageIndex, stages) => (
                    <li key={stage.label}>
                      <span className="architecture-index mono">
                        0{stageIndex + 1}
                      </span>
                      <div>
                        <strong>{stage.label}</strong>
                        <span className="mono">{stage.detail}</span>
                      </div>
                      {stageIndex < stages.length - 1 ? (
                        <span className="architecture-arrow" aria-hidden="true">
                          ↓
                        </span>
                      ) : null}
                    </li>
                  ))}
                </ol>
                <p className="mono architecture-note">
                  DESKTOP APPLICATION / PYTHON
                </p>
              </div>
            ) : null}
            {project.problem || project.approach || project.results?.length ? (
              <details className="project-details">
                <summary>
                  <span>Explore the engineering</span>
                  <span className="expand-indicator" aria-hidden="true">
                    +
                  </span>
                </summary>
                <div className="project-detail-grid">
                  {project.problem ? (
                    <div>
                      <h4 className="eyebrow">The problem</h4>
                      <p>{project.problem}</p>
                    </div>
                  ) : null}
                  {project.approach ? (
                    <div>
                      <h4 className="eyebrow">The approach</h4>
                      <p>{project.approach}</p>
                    </div>
                  ) : null}
                  {project.results?.length ? (
                    <div>
                      <h4 className="eyebrow">Implemented capabilities</h4>
                      <ul>
                        {project.results.map((result) => (
                          <li key={result}>{result}</li>
                        ))}
                      </ul>
                    </div>
                  ) : null}
                </div>
                {project.sourceNote ? (
                  <p className="project-note">{project.sourceNote}</p>
                ) : null}
              </details>
            ) : null}
          </article>
        </li>
      ))}
    </ul>
  );
}
