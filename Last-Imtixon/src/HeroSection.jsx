import React from "react";

const HeroSection = () => {
  return (
    <section className="hero-section">
      <div className="hero-content">
        <div className="hero-text">
          <h1 className="hero-title">Welcome to Imtixon</h1>
          <p className="hero-subtitle">
            The ultimate platform for seamless, secure, and modern educational
            examinations. Elevate your testing experience today.
          </p>
          <button className="cta-button">Get Started Now</button>
        </div>

        <div className="hero-visual">
          <div className="mock-card glass-panel">
            <h2>Interactive Dashboard</h2>
            <p style={{ color: "var(--text-muted)", marginTop: "1rem" }}>
              Real-time analytics and beautiful UI components built right in.
            </p>
            <div
              style={{
                marginTop: "2rem",
                display: "flex",
                gap: "1rem",
                justifyContent: "center",
              }}
            >
              <span
                style={{
                  width: "40px",
                  height: "40px",
                  borderRadius: "50%",
                  background: "rgba(99, 102, 241, 0.5)",
                }}
              ></span>
              <span
                style={{
                  width: "40px",
                  height: "40px",
                  borderRadius: "50%",
                  background: "rgba(236, 72, 153, 0.5)",
                }}
              ></span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
