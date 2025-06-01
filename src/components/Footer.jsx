const Footer = () => {
  return (
    <footer
      style={{
        backgroundColor: "#111",
        color: "white",
        textAlign: "center",
        padding: "40px 24px",
        borderTop: "1px solid #333",
        fontSize: "0.9rem",
      }}
    >
      <div style={{ marginBottom: "16px" }}>
        <img
          src="/images/illoo-logo.png"
          alt="Logo"
          style={{ height: "40px", marginBottom: "12px" }}
        />
        <div style={{ display: "flex", justifyContent: "center", gap: "24px" }}>
          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            style={{ color: "violet", textDecoration: "none" }}
          >
            GitHub
          </a>
          <a
            href="https://youtube.com"
            target="_blank"
            rel="noopener noreferrer"
            style={{ color: "violet", textDecoration: "none" }}
          >
            YouTube
          </a>
          <a
            href="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
            style={{ color: "violet", textDecoration: "none" }}
          >
            Twitter
          </a>
        </div>
      </div>
      <div style={{ color: "#666" }}>
        &copy; {new Date().getFullYear()} MikeKanyatsi. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;