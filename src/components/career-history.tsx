import type { Education, Experience } from "@/data/portfolio";

export function ExperienceList({ experience }: { experience: Experience[] }) {
  return (
    <ol className="career-timeline">
      {experience.map((item, index) => (
        <li key={`${item.company}-${item.role}`}>
          <details className="career-entry" open={index === 0}>
            <summary>
              <span className="career-number mono">0{index + 1}</span>
              <span className="career-title">
                <span className="career-role">{item.role}</span>
                <span className="career-company">{item.company}</span>
              </span>
              <span className="career-dates mono">
                {item.startDate} — {item.endDate}
              </span>
              <span className="expand-indicator" aria-hidden="true">
                +
              </span>
            </summary>
            <ul className="career-highlights">
              {item.highlights.map((highlight) => (
                <li key={highlight}>{highlight}</li>
              ))}
            </ul>
          </details>
        </li>
      ))}
    </ol>
  );
}

export function EducationList({ education }: { education: Education[] }) {
  return (
    <ul className="education-list">
      {education.map((item) => (
        <li key={`${item.institution}-${item.degree}`}>
          <span className="mono education-year">
            {item.startYear} — {item.endYear}
          </span>
          <h4>{item.degree}</h4>
          <p>{item.institution}</p>
        </li>
      ))}
    </ul>
  );
}
