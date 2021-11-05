import React from "react";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "../components/css/Navbarcss.css";
import Footer from "../components/Footer";

function Navbar() {
  return (
    <div>
      <nav class="navbar navbar-expand-lg navbar-light bg-light navbarbackcolor">
        <Link to="/" className="navbar-brand navLogo">
          餵for me
        </Link>

        <button
          class="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <div class="navbar-nav mr-auto navitems">
            <Link to="/page2" className="navbar-brand">
              類型篩選
            </Link>

            <Link to="/page2" className="navbar-brand">
              縣市篩選
            </Link>

            <Link to="/page1" className="navbar-brand">
              會員登入/註冊
            </Link>
          </div>
        </div>
      </nav>

      {/* <Footer></Footer> */}

    </div>
  );
}

export default Navbar;
