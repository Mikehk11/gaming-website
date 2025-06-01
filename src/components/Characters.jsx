import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Spline from "@splinetool/react-spline";

const Characters = () => {
  const avatars = {
    VICKI: {
      name: "VICKI",
      power: 80,
      stable: 65,
      penetrate: 70,
      portable: 50,
      stars: 3,
      img: "/images/vicki.png",
      spline: "https://prod.spline.design/WcXyrWgBzPqTUJ2r/scene.splinecode",
    },
    EVA: {
      name: "EVA",
      power: 60,
      stable: 85,
      penetrate: 75,
      portable: 90,
      stars: 4,
      img: "/images/eva.png",
      spline: "https://prod.spline.design/DF7t1lqhEH-zNQrv/scene.splinecode",
    },
  };

  const [selected, setSelected] = useState("VICKI");
  const current = avatars[selected];

  const renderStat = (label, value) => (
    <div style={{ display: "flex", alignItems: "center", marginBottom: "6px" }}>
      <span style={{ width: "80px", fontSize: "0.85rem" }}>{label}</span>
      <div style={{ flex: 1, background: "#333", height: "8px", borderRadius: "4px", overflow: "hidden", marginRight: "8px" }}>
        <div style={{
          width: `${value}%`,
          height: "100%",
          background: "linear-gradient(to right, violet, white)"
        }}></div>
      </div>
      <span style={{ fontSize: "0.85rem" }}>{value}</span>
    </div>
  );

  const renderStars = (count) => (
    <div style={{ display: "flex", gap: "4px" }}>
      {Array.from({ length: count }).map((_, i) => (
        <span key={i} style={{ color: "violet", fontSize: "16px" }}>★</span>
      ))}
    </div>
  );

  return (
    <section style={{ padding: "80px 24px", backgroundColor: "#111", color: "white" }}>
      <h2 style={{ textAlign: "center", fontSize: "2rem", marginBottom: "32px" }}>Fighters</h2>

      <div style={{ display: "flex", flexWrap: "wrap", gap: "40px", justifyContent: "center" }}>
        {/* Info Card */}
        <div style={{
          width: "300px",
          background: "#1a1a1a",
          borderRadius: "12px",
          padding: "20px",
          boxShadow: "0 0 10px rgba(255, 0, 255, 0.2)",
        }}>
          <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "12px" }}>
            <img src="/images/illoo-logo.png" alt="logo" style={{ height: "36px" }} />
            <h3 style={{ fontSize: "1rem", margin: 0 }}>{current.name}</h3>
          </div>
          <AnimatePresence mode="wait">
            <motion.img
              key={current.name}
              src={current.img}
              alt={current.name}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.4 }}
              style={{
                width: "100%",
                borderRadius: "10px",
                marginBottom: "12px",
              }}
            />
          </AnimatePresence>
          <div style={{ marginBottom: "8px" }}>
            {renderStat("Power", current.power)}
            {renderStat("Stable", current.stable)}
            {renderStat("Penetrate", current.penetrate)}
            {renderStat("Portable", current.portable)}
          </div>
          {renderStars(current.stars)}
        </div>

        {/* 3D Spline View */}
        <div style={{
          width: "400px",
          height: "400px",
          borderRadius: "16px",
          overflow: "hidden",
          border: "2px solid #222",
          backgroundColor: "#000",
        }}>
          <Spline scene={current.spline} />
        </div>

        {/* Select Cards */}
        <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
          {Object.keys(avatars).map((key) => (
            <div
              key={key}
              onClick={() => setSelected(key)}
              style={{
                cursor: "pointer",
                width: "180px",
                background: selected === key ? "#2a0a36" : "#1a1a1a",
                border: selected === key ? "2px solid violet" : "1px solid #333",
                borderRadius: "10px",
                padding: "12px",
                textAlign: "center",
                transition: "0.3s",
              }}
            >
              <img
                src={avatars[key].img}
                alt={key}
                style={{
                  width: "100%",
                  borderRadius: "8px",
                  marginBottom: "10px"
                }}
              />
              <h4 style={{ fontSize: "0.9rem", marginBottom: "6px" }}>{avatars[key].name}</h4>
              {renderStars(avatars[key].stars)}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Characters;