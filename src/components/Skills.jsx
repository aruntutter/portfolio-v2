import skills from "../data/skills";

const SkillsSection = () => {
  return (
    <section className="mb-8">
      <h2
        className="text-sm font-medium uppercase tracking-widest mb-4"
        style={{ color: "var(--color-text-muted)" }}
      >
        Skills
      </h2>
      <div className="flex flex-wrap gap-2">
        {skills.map((skill, index) => (
          <span
            key={index}
            className="sm:px-4 sm:py-2 rounded-full sm:text-[0.875rem] font-medium transition-all duration-300 px-3 py-1.5 text-[0.75rem]"
            style={{
              color: "var(--color-text-accent)",
              background: "rgba(79, 70, 229, 0.12)",
              border: "1px solid rgba(79, 70, 229, 0.2)",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = "rgba(79, 70, 229, 0.2)";
              e.currentTarget.style.border = "1px solid rgba(79, 70, 229, 0.3)";
              e.currentTarget.style.transform = "translateY(-2px)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = "rgba(79, 70, 229, 0.12)";
              e.currentTarget.style.border = "1px solid rgba(79, 70, 229, 0.2)";
              e.currentTarget.style.transform = "translateY(0)";
            }}
          >
            {skill}
          </span>
        ))}
      </div>
    </section>
  );
};

export default SkillsSection;
