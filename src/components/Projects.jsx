import projectData from "../data/projectData";

const Projects = () => {
  return (
    <section className="mb-8 w-full text-left">
      <h2
        className="text-sm font-medium uppercase tracking-widest mb-4"
        style={{ color: "var(--color-text-muted)" }}
      >
        Projects
      </h2>

      <div className="flex flex-col gap-5">
        {projectData.map((project, index) => (
          <div
            key={index}
            className="p-5 rounded-xl border border-(--color-border-lighter) bg-[rgba(255,255,255,0.02)] transition-all duration-300 hover:bg-[rgba(255,255,255,0.04)] hover:border-(--color-border-hover) hover:-translate-y-0.5"
          >
            <h3
              className="text-[1.0625rem] font-semibold mb-2"
              style={{ color: "var(--color-text-primary)" }}
            >
              {project.title}
            </h3>

            <p
              className="text-[0.875rem] leading-relaxed mb-3"
              style={{ color: "var(--color-text-secondary)" }}
            >
              {project.description}
            </p>

            <div className="flex flex-wrap gap-2 mt-2">
              {project.tags.map((tag, i) => (
                <span
                  key={i}
                  className="px-3 py-1 rounded-full text-xs font-medium border border-[rgba(59,130,246,0.2)] bg-[rgba(59,130,246,0.1)] text-[rgba(147,197,253,1)]"
                >
                  {tag}
                </span>
              ))}
            </div>

            <div className="flex flex-wrap gap-3 mt-4">
              {project.links.map((link, i) => (
                <a
                  key={i}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center px-4 py-2 rounded-lg text-[0.875rem] font-medium text-(--color-text-light) border border-(--color-border-light) bg-[rgba(255,255,255,0.04)] hover:bg-[rgba(255,255,255,0.08)] hover:border-(--color-border-hover) hover:text-(--color-text-primary) transition-all duration-300 hover:-translate-y-0.5"
                >
                  {link.icon}
                  {link.name}
                </a>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
