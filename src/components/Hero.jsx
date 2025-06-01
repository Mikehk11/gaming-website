const Hero = () => {
  return (
    <main
      style={{
        position: "relative",
        width: "100%",
        minHeight: "100vh",
        overflow: "hidden",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        background: "transparent",   // ✅ ensure main is transparent
        zIndex: 0
      }}
    >
      {/* Background video */}
      <video
        src="/videos/hero.mp4"
        autoPlay
        muted
        loop
        playsInline
        style={{
          position: "absolute",         // ✅ always behind
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          objectFit: "cover",
          zIndex: -1,
        }}
      />

      {/* Centered content */}
      <div
        style={{
          position: "relative",
          textAlign: "center",
          color: "white",
          zIndex: 1,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "1rem",
        }}
      >
        <img
          src="/images/hero-text.png"
          alt="Hero Text"
          style={{
            maxWidth: "80%",
            height: "auto",
            objectFit: "contain",
          }}
          onError={(e) => {
            e.target.style.display = "none";
          }}
        />
        <h1 style={{ fontSize: "2rem", fontWeight: "bold" }}>
          Explore. Capture. Conquer.
        </h1>
        <div
          style={{
            height: "1px",
            background: "#aaa",
            width: "60%",
            margin: "0 auto",
          }}
        ></div>
        <button
          style={{
            background: "purple",
            color: "white",
            padding: "10px 32px",
            border: "none",
            borderRadius: "10px",
            fontSize: "1rem",
            cursor: "pointer",
          }}
        >
          Play Now
        </button>
      </div>

      {/* Scroll down indicator */}
      <div
        style={{
          position: "absolute",
          bottom: "40px",
          right: "24px",
          animation: "bounce 2s infinite",
          display: "inline-block",
        }}
      >
        <div
          style={{
            width: "32px",
            height: "48px",
            border: "2px solid violet",
            borderRadius: "999px",
            display: "flex",
            justifyContent: "center",
            paddingTop: "6px",
          }}
        >
          <div
            style={{
              width: "6px",
              height: "12px",
              backgroundColor: "violet",
              borderRadius: "999px",
              animation: "pulse 1.5s infinite",
            }}
          />
        </div>
        <p
          style={{
            color: "violet",
            marginTop: "8px",
            textAlign: "center",
            fontSize: "0.9rem",
          }}
        >
          Scroll down
        </p>
      </div>
    </main>
  );
};

export default Hero;