import React from "react";
import { Routes, Route, Link, NavLink } from "react-router-dom";
import "./index.css";
import Home from "./pages/Home";
import Categories from "./pages/Categories";

const App = () => {
  return (
    <>
      <nav className="navbar container">
        <Link
          to="/"
          className="brand-logo"
          style={{ textDecoration: "none", color: "inherit" }}
        >
          The Ethereal Marketplace
        </Link>
        <ul className="nav-links">
          <li>
            <NavLink
              to="/"
              className={({ isActive }) => (isActive ? "active" : "")}
            >
              Curation
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/categories"
              className={({ isActive }) => (isActive ? "active" : "")}
            >
              Living
            </NavLink>
          </li>
          <li>Apparel</li>
          <li>Artisans</li>
        </ul>
        <div className="nav-right">
          <input
            type="text"
            placeholder="Search the collection..."
            className="search-input"
          />
          <svg
            style={{ width: "20px", height: "20px", cursor: "pointer" }}
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
            />
          </svg>
          <svg
            style={{ width: "20px", height: "20px", cursor: "pointer" }}
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
            />
          </svg>
        </div>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/categories" element={<Categories />} />
      </Routes>

      <footer className="footer">
        <div className="container footer-content">
          <div className="footer-left">
            <div className="footer-brand">The Ethereal Marketplace</div>
            <div className="footer-copyright">
              © 2024 THE ETHEREAL MARKETPLACE. CURATED WITH INTENTION.
            </div>
          </div>
          <ul className="footer-links">
            <li>SUSTAINABILITY</li>
            <li>SHIPPING</li>
            <li>RETURNS</li>
            <li>PRIVACY</li>
            <li>JOURNAL</li>
          </ul>
        </div>
      </footer>
    </>
  );
};

export default App;
