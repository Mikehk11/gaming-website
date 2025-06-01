const Header = () => {
  return (
    <header>
      <div style={{ display: "flex", alignItems: "center", gap: "1rem" }}>
        <img src="/images/logo.png" alt="Logo" style={{ height: "40px" }} />
      </div>

      <div style={{ display: "flex", gap: "1rem" }}>
        <button>Play Now</button>
        <button style={{ backgroundColor: "gray" }}>More Info</button>
      </div>
    </header>
  );
};

export default Header;