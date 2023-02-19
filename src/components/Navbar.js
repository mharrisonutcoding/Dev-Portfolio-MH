import React from "react";
import { Link } from "react-router-dom";

import "../App.css";

export default function Navbar() {
  return (
    <header className="Navbar-header">
      <nav className="navbar sticky-top navbar-expand-md" id="navbar">
        <div className="container-fluid">
          <a className="navbar-brand" href="*">
            Michael Harrison
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavDropdown"
            aria-controls="navbarNavDropdown"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon icon-color-white"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavDropdown">
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link className="nav-link" aria-current="page" to="/">
                  About Me
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" aria-current="page" to="/projects">
                  Projects
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" aria-current="page" to="/contact">
                  Contact Me
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" aria-current="page" to="/resume">
                  Resume
                </Link>
              </li>
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  href="*"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Social Links
                </a>
                <ul className="dropdown-menu" id="drop-links">
                  <li>
                    <a
                      className="dropdown-item"
                      href="https://www.instagram.com/maharrison10/"
                      target="_blank"
                      rel="noreferrer"
                    >
                      Instagram
                    </a>
                  </li>
                  <li>
                    <a
                      className="dropdown-item"
                      href="https://www.facebook.com/michael.a.harrison.79/"
                      target="_blank"
                      rel="noreferrer"
                    >
                      Facebook
                    </a>
                  </li>
                  <li>
                    <a
                      className="dropdown-item"
                      href="https://www.linkedin.com/in/michael-harrison-58b034243/"
                      target="_blank"
                      rel="noreferrer"
                    >
                      LinkedIn 
                    </a>
                  </li>
                </ul>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
}
