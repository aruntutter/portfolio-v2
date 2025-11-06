import experiences from "../data/experience";

const Experience = () => {
  return (
    <section className="mb-8 w-full text-left">
      <h2
        className="text-sm font-medium uppercase tracking-widest mb-4"
        style={{ color: "var(--color-text-muted)" }}
      >
        Experience
      </h2>

      <div className="flex flex-col gap-5">
        {experiences.map((exp, idx) => (
          <div
            key={idx}
            className="p-5 rounded-xl border border-(--color-border-lighter) bg-[rgba(255,255,255,0.02)] transition-all duration-300 hover:bg-[rgba(255,255,255,0.04)] hover:border-(--color-border-hover) hover:-translate-y-0.5"
          >
            <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-2 mb-2">
              <h3
                className="text-[1.0625rem] font-semibold"
                style={{ color: "var(--color-text-primary)" }}
              >
                {exp.role}
              </h3>
              <span
                className="text-sm font-medium whitespace-nowrap"
                style={{ color: "var(--color-text-muted)" }}
              >
                {exp.date}
              </span>
            </div>
            <p
              className="text-[0.9375rem] font-medium mb-2"
              style={{ color: "var(--color-text-secondary)" }}
            >
              {exp.company}
            </p>
            <p
              className="text-[0.875rem] leading-relaxed"
              style={{ color: "var(--color-text-secondary)" }}
            >
              {exp.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Experience;
