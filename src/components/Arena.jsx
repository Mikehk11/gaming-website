const arenas = [
  {
    name: "Desert Rift",
    image: "/images/arena/desert.jpg",
  },
  {
    name: "Frozen Core",
    image: "/images/arena/ice.jpg",
  },
  {
    name: "Volcanic Dome",
    image: "/images/arena/volcano.jpg",
  },
  {
    name: "Jungle Depths",
    image: "/images/arena/jungle.jpg",
  },
];

const Arena = () => {
  return (
    <section style={{ padding: "80px 24px", backgroundColor: "#000", color: "white" }}>
      <h2 style={{ textAlign: "center", fontSize: "2rem", marginBottom: "32px" }}>Arenas</h2>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
          gap: "24px",
        }}
      >
        {arenas.map((arena, index) => (
          <div
            key={index}
            className="hover-target"
            style={{
              position: "relative",
              overflow: "hidden",
              borderRadius: "12px",
              cursor: "pointer",
              transition: "transform 0.3s ease",
              boxShadow: "0 0 20px rgba(255, 0, 255, 0.1)",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = "scale(1.03)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = "scale(1)";
            }}
          >
            <img
              src={arena.image}
              alt={arena.name}
              style={{
                width: "100%",
                height: "220px",
                objectFit: "cover",
                filter: "brightness(0.7)",
                borderRadius: "12px",
              }}
            />
            <div
              style={{
                position: "absolute",
                bottom: "16px",
                left: "16px",
                color: "white",
                fontSize: "1.1rem",
                fontWeight: "bold",
              }}
            >
              {arena.name}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Arena;