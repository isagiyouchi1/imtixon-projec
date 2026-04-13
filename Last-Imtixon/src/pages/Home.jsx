import React from "react";
import { products } from "../data";

const Home = () => {
  return (
    <>
      <header className="hero">
        <div className="hero-content container">
          <div className="hero-subtitle">Volume II : The Spring Edit</div>
          <h1 className="hero-title">
            Curated Living for the <br />
            Modern Home
          </h1>
          <div className="hero-buttons">
            <button className="btn-primary">Explore Collections</button>
            <button className="btn-secondary">The Artisan Story</button>
          </div>
        </div>
      </header>

      <section className="new-arrivals container">
        <div className="section-header">
          <div>
            <div className="section-subtitle">Editor's Choice</div>
            <h2 className="section-title">New Arrivals</h2>
          </div>
          <div style={{ fontSize: "0.8rem", color: "var(--text-muted)" }}>
            Showing 12 of 23 curated pieces.
          </div>
        </div>

        <div className="product-grid">
          {products.map((product) => (
            <article className="product-card" key={product.id}>
              <div className="product-image-wrapper">
                {product.isNew && <span className="badge-new">New</span>}
                <img
                  src={product.img}
                  alt={product.title}
                  className="product-image"
                  loading="lazy"
                />
              </div>
              <div className="product-info-header">
                <h3 className="product-title">{product.title}</h3>
                <span className="product-price">{product.price}</span>
              </div>
              <p className="product-desc">{product.description}</p>
              <a
                href="#"
                className="view-details"
                onClick={(e) => e.preventDefault()}
              >
                View Details
              </a>
            </article>
          ))}
        </div>

        <div className="load-more-container">
          <button className="btn-secondary">Discover More Creations</button>
        </div>
      </section>

      <section className="newsletter">
        <div className="newsletter-badge">Newsletter</div>
        <h2 className="newsletter-title">Join The Curation</h2>
        <p className="newsletter-desc">
          Receive bi-monthly journals on minimalist living, artisan profiles,
          and early access to new collections.
        </p>
        <form className="newsletter-form" onSubmit={(e) => e.preventDefault()}>
          <input
            type="email"
            placeholder="Enter your email"
            className="newsletter-input"
            required
          />
          <button type="submit" className="btn-primary">
            Subscribe
          </button>
        </form>
        <div className="footer-text">INSPIRED BY INTENTION. NEVER SPAM.</div>
      </section>
    </>
  );
};

export default Home;
