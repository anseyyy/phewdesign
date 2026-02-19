import React from "react";
import "../App.css";

function Navbar() {
  return (
    <div className="container-fluid py-3 px-4">

      <div className="d-flex justify-content-between align-items-center flex-wrap">

        {/* LOGO */}
        <div>
          <a  href="/"  className="text-decoration-none" style={{fontSize: "24px",fontWeight: "bold",color: "#24286B", fontFamily: '"Jersey 25", sans-serif' }}>
            LOGO
          </a>
        </div>

        {/* MENU + BUTTON */}
        <div className="d-flex align-items-center gap-4 flex-wrap">

          {/* NAV LINKS */}
          <ul className="d-flex gap-4 list-unstyled mb-0 flex-wrap text-center">
            <li><a className="nav-link-custom text-dark" href="#">HOME</a></li>
            <li><a className="nav-link-custom text-dark" href="#">ABOUT US</a></li>
            <li><a className="nav-link-custom text-dark" href="#">OUR SERVICES</a></li>
            <li><a className="nav-link-custom text-dark" href="#">OUR PROJECTS</a></li>
            <li><a className="nav-link-custom text-dark" href="#">TESTIMONIALS</a></li>
          </ul>

          {/* CONTACT BUTTON */}
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
