import { useState } from "react";
import experiences from "../data/experience";

const Experience = () => {
  const [activeIndex, setActiveIndex] = useState(0); // first item open by default

  const toggleExperience = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };
  return (
    // <section className="mb-8 w-full text-left">
    //   <h2
    //     className="text-sm font-medium uppercase tracking-widest mb-4"
    //     style={{ color: "var(--color-text-muted)" }}
    //   >
    //     Experience
    //   </h2>

    //   <div className="flex flex-col gap-5">
    //     {experiences.map((exp, idx) => (
    //       <div
    //         key={idx}
    //         className="p-5 rounded-xl border border-(--color-border-lighter) bg-[rgba(255,255,255,0.02)] transition-all duration-300 hover:bg-[rgba(255,255,255,0.04)] hover:border-(--color-border-hover) hover:-translate-y-0.5"
    //       >
    //         <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-2 mb-2">
    //           <h3
    //             className="text-[1.0625rem] font-semibold"
    //             style={{ color: "var(--color-text-primary)" }}
    //           >
    //             {exp.role}
    //           </h3>
    //           <span
    //             className="text-sm font-medium whitespace-nowrap"
    //             style={{ color: "var(--color-text-muted)" }}
    //           >
    //             {exp.date}
    //           </span>
    //         </div>
    //         <p
    //           className="text-[0.9375rem] font-medium mb-2"
    //           style={{ color: "var(--color-text-secondary)" }}
    //         >
    //           {exp.company}
    //         </p>
    //         <ul
    //           className="list-disc pl-5 space-y-1 text-[0.875rem]"
    //           style={{ color: "var(--color-text-secondary)" }}
    //         >
    //           {exp.description.map((point, index) => (
    //             <li key={index} className="leading-relaxed">
    //               {point}
    //             </li>
    //           ))}
    //         </ul>
    //       </div>
    //     ))}
    //   </div>
    // </section>

    <section className="mb-8 w-full text-left">
      <h2
        className="text-sm font-medium uppercase tracking-widest mb-4"
        style={{ color: "var(--color-text-muted)" }}
      >
        Experience
      </h2>

      <div className="flex flex-col gap-3">
        {experiences.map((exp, idx) => (
          <div
            key={idx}
            // className="rounded-xl border border-(--color-border-lighter) bg-[rgba(255,255,255,0.02)] overflow-hidden transition-all duration-300"
            className={`rounded-xl border transition-all duration-300 ${
              activeIndex === idx
                ? "border-(--color-border-hover) bg-[rgba(255,255,255,0.03)]"
                : "border-(--color-border-hover)"
            }`}
          >
            {/* Header */}
            <button
              onClick={() => toggleExperience(idx)}
              className="w-full p-5 text-left flex justify-between items-center cursor-pointer"
            >
              <div>
                <h3
                  className="text-[1.0625rem]"
                  style={{ color: "var(--color-text-primary)" }}
                >
                  {exp.role}
                </h3>

                <p
                  className="text-sm mt-1"
                  style={{ color: "var(--color-text-muted)" }}
                >
                  {exp.company}
                </p>
              </div>

              <span
                className={`transition-transform duration-300 ${
                  activeIndex === idx ? "rotate-180" : ""
                }`}
                style={{ color: "var(--color-text-muted)" }}
              >
                ▼
              </span>
            </button>

            {/* Content */}
            <div
              className={`transition-all duration-300 ease-in-out overflow-hidden ${
                activeIndex === idx
                  ? "max-h-[500px] opacity-100"
                  : "max-h-0 opacity-0"
              }`}
            >
              <div className="px-5 pb-5">
                <p
                  className="text-sm mb-3"
                  style={{ color: "var(--color-text-muted)" }}
                >
                  {exp.date}
                </p>

                <ul
                  className="list-disc pl-5 space-y-2 text-[0.875rem]"
                  style={{ color: "var(--color-text-secondary)" }}
                >
                  {exp.description.map((point, index) => (
                    <li key={index}>{point}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Experience;
