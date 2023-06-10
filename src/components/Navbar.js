import React from "react";
import PropTypes from "prop-types";
// import { Link } from "react-router-dom/cjs/react-router-dom.min";

export default function Navbar(prop) {
  return (
    <>
      <nav
        className={`navbar navbar-expand-lg navbar-${prop.mode === 'green' ? 'green' : prop.mode} bg-${prop.mode}`}
        style={prop.mode === 'green' ? { backgroundColor: 'rgb(73 106 79)' } : prop.mode === 'blue' ? { backgroundColor: '#1b1b30' } : {}}
      >
        <div className="container-fluid">
          {/* <Link className={` navbar-brand ${prop.mode === 'blue' ? 'text-light' : ''}`} to="/">
            {prop.title}
          </Link> */}
          <a className={` navbar-brand ${prop.mode === 'blue' ? 'text-light' : ''}`} href="">
            {prop.title}
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className={`nav-link active ${prop.mode === 'blue' ? 'text-light' : ''}`} aria-current="page" href="">
                  Home
                </a>
                {/* <Link className={`nav-link active ${prop.mode === 'blue' ? 'text-light' : ''}`} aria-current="page" to="/">
                  Home
                </Link> */}
              </li>
              <li className="nav-item">
                {/* <a className={`nav-link ${prop.mode === 'blue' ? 'text-light' : ''}`} href="/about">
                  About
                </a> */}
                {/* <Link className={`nav-link ${prop.mode === 'blue' ? 'text-light' : ''}`} to="/about">
                  About
                </Link> */}
              </li>
            </ul>
            <form className="d-flex" role="search">
              <input
                className="form-control me-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
              <button className={`btn btn-outline-${prop.mode === 'green' ? 'white' : 'primary'}`} type="submit" style={prop.mode === 'green' ? { color: 'black' } : {}}>

                Search
              </button>
            </form>
            
            <div className="form-check form-switch">
              <input
                className="form-check-input mx-2"
                type="checkbox"
                role="switch"
                id="flexSwitchCheckDefault"
                onClick={prop.toggleSwitchGreen}
              />
              <label
                className={`form-check-label text-${
                  prop.mode === "light" ? "dark" : "light"
                }`}
                htmlFor="flexSwitchCheckDefault"
              >
                GreenMode
              </label>
            </div>

            <div className="form-check form-switch">
              <input
                className="form-check-input mx-2"
                type="checkbox"
                role="switch"
                id="flexSwitchCheckDefault"
                onClick={prop.toggleSwitchBlue}
              />
              <label
                className={`form-check-label text-${
                  prop.mode === "light" ? "dark" : "light"
                }`}
                htmlFor="flexSwitchCheckDefault"
              >
                BlueMode
              </label>
            </div>

            <div className="form-check form-switch">
              <input
                className="form-check-input mx-2"
                type="checkbox"
                role="switch"
                id="flexSwitchCheckDefault"
                onClick={prop.toggleSwitchDark}
              />
              <label
                className={`form-check-label text-${
                  prop.mode === "light" ? "dark" : "light"
                }`}
                htmlFor="flexSwitchCheckDefault"
              >
                Enable DarkMode
              </label>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}

Navbar.propTypes = {
  title: PropTypes.string,
};
