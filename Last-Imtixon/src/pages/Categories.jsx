import React from "react";
import { products } from "../data";

const Categories = () => {
  return (
    <div className="categories-layout container">
      <aside className="sidebar">
        <div className="sidebar-title">
          <h3 className="sidebar-heading">The Curator's Filter</h3>
          <span className="sidebar-subheading">Refine by category</span>
        </div>

        <ul className="sidebar-nav">
          <li className="sidebar-nav-item">
            <svg
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <rect x="3" y="3" width="7" height="7"></rect>
              <rect x="14" y="3" width="7" height="7"></rect>
              <rect x="14" y="14" width="7" height="7"></rect>
              <rect x="3" y="14" width="7" height="7"></rect>
            </svg>
            All Collections
          </li>
          <li className="sidebar-nav-item active">
            <svg
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
            </svg>
            Ceramics
          </li>
          <li className="sidebar-nav-item">
            <svg
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <line x1="4" y1="9" x2="20" y2="9"></line>
              <line x1="4" y1="15" x2="20" y2="15"></line>
              <line x1="10" y1="3" x2="8" y2="21"></line>
              <line x1="16" y1="3" x2="14" y2="21"></line>
            </svg>
            Textiles
          </li>
          <li className="sidebar-nav-item">
            <svg
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <rect x="4" y="4" width="16" height="16" rx="2" ry="2"></rect>
              <rect x="9" y="9" width="6" height="6"></rect>
              <line x1="9" y1="1" x2="9" y2="4"></line>
              <line x1="15" y1="1" x2="15" y2="4"></line>
              <line x1="9" y1="20" x2="9" y2="23"></line>
              <line x1="15" y1="20" x2="15" y2="23"></line>
              <line x1="20" y1="9" x2="23" y2="9"></line>
              <line x1="20" y1="14" x2="23" y2="14"></line>
              <line x1="1" y1="9" x2="4" y2="9"></line>
              <line x1="1" y1="14" x2="4" y2="14"></line>
            </svg>
            Furniture
          </li>
          <li className="sidebar-nav-item">
            <svg
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <circle cx="12" cy="12" r="10"></circle>
              <line x1="12" y1="16" x2="12" y2="12"></line>
              <line x1="12" y1="8" x2="12.01" y2="8"></line>
            </svg>
            Apothecary
          </li>
        </ul>

        <button className="btn-primary sidebar-btn">Apply Filters</button>
      </aside>

      <main className="categories-main">
        <header className="categories-header">
          <div className="categories-subtitle">CURATED EXHIBITS</div>
          <h1 className="categories-title">Ceramics</h1>
        </header>

        <div className="categories-grid">
          {products.slice(0, 6).map((product) => (
            <article className="product-card" key={product.id}>
              <div className="product-image-wrapper categories-img-wrapper">
                {product.isNew && (
                  <span className="badge-new">NEW ARRIVAL</span>
                )}
                <img
                  src={product.img}
                  alt={product.title}
                  className="product-image"
                  loading="lazy"
                />
              </div>
              <div className="category-product-info">
                <h3 className="category-product-title">{product.title}</h3>
                <p className="category-product-desc">
                  {product.description.split(".")[0]}
                </p>
                <div className="category-product-price">{product.price}</div>
              </div>
            </article>
          ))}
        </div>
      </main>
    </div>
  );
};

export default Categories;
