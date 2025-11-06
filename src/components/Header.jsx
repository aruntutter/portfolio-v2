import Logo from "../assets/logo.svg";

const LANGUAGES = ["Tamil", "Hindi", "English", "Japanese"];

const Header = () => {
  return (
    <div className="flex flex-col md:flex-row md:justify-between w-full relative">
      <div className="flex flex-col items-start gap-4 md:gap-2">
        <img
          src={Logo}
          alt="Arun Kumar R"
          className="w-32 h-32 md:w-40 md:h-40 object-cover"
        />
        <div className="w-full text-left">
          <h1
            className="text-2xl md:text-3xl font-bold tracking-tight text-left"
            style={{ color: "var(--color-text-primary)" }}
          >
            Hi, I'm Arun
          </h1>

          <div
            className="flex items-center gap-1 text-sm mt-1"
            style={{ color: "var(--color-text-secondary)" }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 24 24"
              className="w-4 h-4"
            >
              <path d="M12 2C8.1 2 5 5.1 5 9c0 5.2 7 13 7 13s7-7.8 7-13c0-3.9-3.1-7-7-7zm0 9.5c-1.4 0-2.5-1.1-2.5-2.5S10.6 6.5 12 6.5s2.5 1.1 2.5 2.5S13.4 11.5 12 11.5z" />
            </svg>
            <span>Delhi, India</span>
          </div>

          <p
            className="text-sm leading-relaxed"
            style={{ color: "var(--color-text-secondary)" }}
          >
            Frontend Web Developer | Building Interactive Web Experiences |
            Pursuing JLPT N5
          </p>
        </div>

        <div className="flex flex-wrap gap-3">
          {" "}
          {/* Container for the language tags */}
          {LANGUAGES.map((language, index) => (
            <span
              key={index}
              className="shrink-0 sm:px-4 sm:py-2 rounded-full sm:text-[0.875rem] font-medium transition-all duration-300 px-3 py-1.5 text-[0.75rem]"
              style={{
                color: "var(--color-text-accent)",
                background: "rgba(79, 70, 229, 0.12)",
                border: "1px solid rgba(79, 70, 229, 0.2)",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = "rgba(79, 70, 229, 0.2)";
                e.currentTarget.style.border =
                  "1px solid rgba(79, 70, 229, 0.3)";
                e.currentTarget.style.transform = "translateY(-2px)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = "rgba(79, 70, 229, 0.12)";
                e.currentTarget.style.border =
                  "1px solid rgba(79, 70, 229, 0.2)";
                e.currentTarget.style.transform = "translateY(0)";
              }}
            >
              {language}
            </span>
          ))}
        </div>
      </div>

      {/* Download Resume Button */}
      <div className="mt-4 md:mt-0 md:absolute md:right-4 md:top-7">
        <a
          href="https://drive.google.com/uc?export=download&id=1F61dBCd2WQPdVzqED0MkaddrQ2pVdvfJ"
          download
          className="flex items-center gap-2 px-5 py-3 rounded-xl border border-(--color-border-light) bg-[rgba(255,255,255,0.03)] text-(--color-text-light) text-sm font-medium transition-all duration-300 hover:bg-[rgba(255,255,255,0.06)] hover:border-(--color-border-hover) hover:text-(--color-text-primary) hover:-translate-y-0.5"
        >
          <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
            <path d="M19 9h-4V3H9v6H5l7 7 7-7zM5 18v2h14v-2H5z" />
          </svg>
          Download Resume
        </a>
      </div>
    </div>
  );
};

export default Header;
