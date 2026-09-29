import type { SkillGroup } from "@/data/portfolio";

export function SkillGroups({ groups }: { groups: SkillGroup[] }) {
  return (
    <div className="skills-grid">
      {groups.map((group, index) => {
        const id = `skill-${group.category.toLowerCase().replace(/[^a-z0-9]+/g, "-")}`;
        return (
          <section
            className="skill-group"
            aria-labelledby={id}
            key={group.category}
          >
            <div className="skill-group-top">
              <span className="mono">0{index + 1}</span>
              <span aria-hidden="true">↗</span>
            </div>
            <h3 id={id}>{group.category}</h3>
            <ul className="tag-list">
              {group.skills.map((skill) => (
                <li key={skill}>{skill}</li>
              ))}
            </ul>
          </section>
        );
      })}
    </div>
  );
}
