import TokyoJobFair from "../assets/moments/Tokyo-Job-Fair-2025.jpeg";
import N5Class from "../assets/moments/n5-class.webp";
import N5Batch from "../assets/moments/n5-batch.jpeg";

const moments = [
  {
    src: N5Class,
    title: "Japanese Materials",
    desc: "Studied using textbooks and online resources at Hanami Japanese Learning Institute.",
  },
  {
    src: N5Batch,
    title: "N5 Batch - Hanami Japanese Language Institute",
    desc: "Completed JLPT N5 preparatory course and participated in interactive sessions and events.",
  },
  {
    src: TokyoJobFair,
    title: "Tokyo Job Fair 2025, Radisson Blu - MG Road Delhi",
    desc: "Explored career opportunities and networked with Japanese companies while learning cultural nuances.",
  },
];

const Pursuit = () => {
  return (
    <section className="mb-10">
      <h2
        className="text-sm font-medium uppercase tracking-widest mb-4"
        style={{ color: "var(--color-text-muted)" }}
      >
        Pursuit
      </h2>

      <p
        className="text-[0.9375rem] leading-relaxed mb-6"
        style={{ color: "var(--color-text-light)" }}
      >
        My Japanese learning journey combines structured study, cultural
        immersion, and participation in language-focused events. This pursuit
        reflects my commitment to personal and professional growth beyond
        technology, exploring new languages and cultures to broaden my
        perspective.
      </p>

      {/* Masonry Column Layout */}
      <div className="columns-1 sm:columns-2 lg:columns-3 gap-4 space-y-4">
        {moments.map((item, index) => (
          <div
            key={index}
            className="break-inside-avoid relative overflow-hidden rounded-xl border border-(--color-border-light) bg-[rgba(255,255,255,0.03)] transition-all duration-300 hover:border-(--color-border-hover)"
          >
            <img
              src={item.src}
              alt={item.title}
              className="w-full h-auto object-cover transition-transform duration-500 hover:scale-105"
            />

            {/* Overlay */}
            <div className="absolute inset-0 bg-[rgba(15,15,30,0.75)] opacity-0 hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-4">
              <h4 className="text-sm font-semibold text-white">{item.title}</h4>
              <p className="text-xs text-gray-300">{item.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Pursuit;
