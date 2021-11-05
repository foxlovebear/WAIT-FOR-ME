import React from "react";
import { Link, NavDropdown, Nav } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "../components/css/Navbarcss.css";
import "../components/css/dropdown.css";
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


            {/* <nav class="nav_bar">
              <ul class="nav_middle">

                <li>
                  <a href="#food_type" class="nav_menu">美食類型</a>
                  <ul class="nav_menu_items">
                    <li><a href="https://www.instagram.com/syuaneat/?hl=zh-tw" target="_blank">台式美食</a></li>
                    <li><a href="https://www.instagram.com/syuaneat/?hl=zh-tw" target="_blank">日式美食</a></li>
                    <li><a href="https://www.instagram.com/syuaneat/?hl=zh-tw" target="_blank">義式美食</a></li>
                    <li><a href="https://www.instagram.com/syuaneat/?hl=zh-tw" target="_blank">咖啡廳</a></li>
                  </ul>
                </li>
                <li>
                  <a href="#food_section" class="nav_menu">地區美食</a>
                  <ul class="nav_menu_items">
                    <li class="nav_menu2">
                      <a href="https://www.instagram.com" target="_blank">北部美食</a>
                      <ul class="nav_menu3">
                        <li><a href="">基隆</a></li>
                        <li><a href="">台北</a></li>
                        <li><a href="">新北</a></li>
                        <li><a href="">桃園</a></li>
                        <li><a href="">新竹</a></li>
                        <li><a href="">宜蘭</a></li>
                      </ul>
                    </li>
                  </ul>
                </li>
              </ul>
            </nav> */}


          </div>
        </div>
      </nav>

      {/* <Footer></Footer> */}

    </div>
  );
}

export default Navbar;
