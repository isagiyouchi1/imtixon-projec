import React from "react";

const SecondSection = () => {
  const features = [
    {
      id: 1,
      title: "Real-time Monitoring",
      desc: "Track progress and analytics instantly with our lightning fast data pipeline.",
      icon: "⚡",
    },
    {
      id: 2,
      title: "Advanced Security",
      desc: "Enterprise-grade protection ensuring all test data remains strictly confidential.",
      icon: "🔒",
    },
    {
      id: 3,
      title: "Mobile Optimized",
      desc: "Take exams anywhere, anytime. Our layout perfectly adapts to any screen size.",
      icon: "📱",
    },
  ];

  return (
    <section className="second-section">
      <h2 className="section-title">Core Features & Capabilities</h2>
      <div className="features-grid">
        {features.map((item) => (
          <div key={item.id} className="feature-card glass-panel">
            <div className="feature-icon">{item.icon}</div>
            <h3 className="feature-title">{item.title}</h3>
            <p className="feature-desc">{item.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default SecondSection;
