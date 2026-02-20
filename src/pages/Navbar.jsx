import React from "react";
import "../App.css";

function Navbar() {
  return (
    <div className="container-fluid py-3 px-4">

      <div className="d-flex justify-content-between align-items-center flex-wrap position-relative">

        {/* LOGO */}
        <div>
          <a href="/" className="text-decoration-none" style={{ fontSize: "24px", fontWeight: "bold", color: "#24286B", fontFamily: '"Jersey 25", sans-serif' }}>
            LOGO
          </a>
        </div>

        
        <input type="checkbox" id="nav-toggle" className="d-none" />
        <label htmlFor="nav-toggle" className="d-lg-none nav-toggle-label cursor-pointer p-2">
          <svg width="28" height="28" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M3 12H21M3 6H21M3 18H21" stroke="#24286B" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </label>

        {/* MENU and BUTTON */}
        <div className="nav-menu d-flex align-items-center gap-4 flex-wrap">

          {/* LINKS */}
          <ul className="d-flex gap-4 list-unstyled mb-0 flex-wrap text-center">
            <li><a className="nav-link-custom text-dark" href="#">HOME</a></li>
            <li><a className="nav-link-custom text-dark" href="#">ABOUT US</a></li>
            <li><a className="nav-link-custom text-dark" href="#">OUR SERVICES</a></li>
            <li><a className="nav-link-custom text-dark" href="#">OUR PROJECTS</a></li>
            <li><a className="nav-link-custom text-dark" href="#">TESTIMONIALS</a></li>
          </ul>

          {/*BUTTON */}
          <button
            className="btn rounded-5 text-light"
            style={{ backgroundColor: "#24286B" }}
          >
            CONTACT US
          </button>

        </div>

      </div>

    </div>
  );
}

export default Navbar;
