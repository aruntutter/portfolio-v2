const Footer = () => {
  return (
    <footer
      className="w-full text-center mt-12 pt-8 border-t text-sm font-light relative overflow-hidden"
      style={{
        borderImage: "var(--gradient-divider) 1",
        color: "var(--color-text-muted)",
      }}
    >
      <div
        className="absolute top-0 left-1/2 transform -translate-x-1/2 w-3/4 h-px"
        style={{
          background: "var(--gradient-divider)",
        }}
      ></div>

      <p className="mb-2 text-(--color-text-secondary) tracking-wide">
        アルン・クマール・アール
      </p>
      <p className="text-[14px] text-(--color-text-muted) mb-1">
        静かな人ほど、深い海を持つ — Shizukana hito hodo, fukai umi o motsu
      </p>
      <p className="text-xs italic text-(--color-text-muted) mb-3">
        “The quieter the person, the deeper the sea within.”
      </p>
    </footer>
  );
};

export default Footer;
