import { EducationList, ExperienceList } from "@/components/career-history";
import { ProjectList } from "@/components/project-list";
import { SectionHeading } from "@/components/section-heading";
import { SiteHeader } from "@/components/site-header";
import { SkillGroups } from "@/components/skill-groups";
import { WorkflowExplorer } from "@/components/workflow-explorer";
import { portfolio, projects, workflowStages } from "@/data/portfolio";

export default function Home() {
  const navigation = portfolio.navigation.filter(
    (item) => item.href !== "#projects" || projects.length > 0,
  );
  return (
    <div id="top">
      <a className="skip-link" href="#main-content">
        Skip to content
      </a>
      <SiteHeader
        initials={portfolio.profile.initials}
        navigation={navigation}
      />
      <main id="main-content" className="site-shell">
        <section className="hero" aria-labelledby="intro-heading">
          <div className="hero-copy">
            <p className="eyebrow hero-eyebrow">
              <span className="status-dot" /> {portfolio.profile.role}{" "}
              <span className="eyebrow-divider">/</span> PORTFOLIO
            </p>
            <h1 id="intro-heading">
              Intelligent systems.
              <br />
              <span>Thoughtfully built.</span>
            </h1>
            <p className="hero-name">I’m {portfolio.profile.name}.</p>
            <p className="hero-description">{portfolio.profile.introduction}</p>
            <div className="hero-actions">
              <a
                className="button button-primary"
                href={portfolio.contact.resumeUrl}
                download="Osman_SE.pdf"
              >
                Download résumé <span aria-hidden="true">↓</span>
              </a>
              <a className="button button-secondary" href="#contact">
                Let’s connect <span aria-hidden="true">↗</span>
              </a>
            </div>
            <div className="hero-specialties mono">
              <span>AI / ML</span>
              <span>BACKEND SYSTEMS</span>
              <span>GEN AI</span>
            </div>
          </div>
          <WorkflowExplorer stages={workflowStages} />
          <div className="hero-bottom mono">
            <span>ENGINEERING WITH INTENTION.</span>
            <a href="#about">
              SCROLL TO EXPLORE <span aria-hidden="true">↓</span>
            </a>
          </div>
        </section>
        <section
          id="about"
          className="page-section about-section"
          aria-labelledby="about-heading"
        >
          <SectionHeading
            id="about-heading"
            eyebrow="01 / A little context"
            title="Curiosity meets implementation."
          />
          <div className="about-copy">
            <p>{portfolio.about.biography}</p>
            <div className="about-principles">
              <span>
                <span aria-hidden="true">↗</span> From data to application
              </span>
              <span>
                <span aria-hidden="true">↗</span> Built with reliability in
                mind
              </span>
            </div>
          </div>
        </section>
        <section
          id="experience"
          className="page-section"
          aria-labelledby="experience-heading"
        >
          <div className="section-heading-row">
            <SectionHeading
              id="experience-heading"
              eyebrow="02 / The journey"
              title="Experience in practice."
            />
            <p className="section-aside">
              Building, learning and shipping
              <br />
              along the way.
            </p>
          </div>
          <ExperienceList experience={portfolio.experience} />
          <section
            className="education-section"
            aria-labelledby="education-heading"
          >
            <h3 id="education-heading" className="eyebrow">
              The foundation / Education
            </h3>
            <EducationList education={portfolio.education} />
          </section>
        </section>
        <section
          id="skills"
          className="page-section"
          aria-labelledby="skills-heading"
        >
          <div className="section-heading-row">
            <SectionHeading
              id="skills-heading"
              eyebrow="03 / The toolkit"
              title="The tools behind the work."
            />
            <p className="section-aside">
              A connected stack.
              <br />
              From preparation to production.
            </p>
          </div>
          <SkillGroups groups={portfolio.skillGroups} />
        </section>
        {projects.length > 0 ? (
          <section
            id="projects"
            className="page-section"
            aria-labelledby="projects-heading"
          >
            <div className="section-heading-row">
              <SectionHeading
                id="projects-heading"
                eyebrow="04 / Selected work"
                title="Ideas made tangible."
              />
              <p className="section-aside">
                A closer look at the code
                <br />
                and the thinking behind it.
              </p>
            </div>
            <ProjectList projects={projects} />
          </section>
        ) : null}
        <section
          id="contact"
          className="contact-section"
          aria-labelledby="contact-heading"
        >
          <div>
            <p className="eyebrow">
              {projects.length > 0 ? "05" : "04"} / Start a conversation
            </p>
            <h2 id="contact-heading">
              Good things start
              <br />
              with <span>“hello.”</span>
            </h2>
            <p>{portfolio.contact.message}</p>
          </div>
          <div className="contact-actions">
            <a
              className="contact-email"
              href={`mailto:${portfolio.contact.email}`}
            >
              {portfolio.contact.email}
              <span aria-hidden="true">↗</span>
            </a>
            <div className="contact-secondary">
              <a
                className="text-link"
                href={portfolio.contact.linkedInUrl}
                target="_blank"
                rel="noreferrer"
              >
                LinkedIn <span aria-hidden="true">↗</span>
              </a>
              <a
                className="text-link"
                href={portfolio.contact.resumeUrl}
                download="Osman_SE.pdf"
              >
                Résumé <span aria-hidden="true">↓</span>
              </a>
            </div>
          </div>
        </section>
      </main>
      <footer className="site-shell site-footer">
        <span className="mono">
          © {new Date().getFullYear()} {portfolio.profile.name}
        </span>
        <a className="mono" href="#top">
          BACK TO TOP <span aria-hidden="true">↑</span>
        </a>
      </footer>
    </div>
  );
}
