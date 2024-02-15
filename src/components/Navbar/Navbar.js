import React, { useState } from "react";
import "./Navbar.css";
import { Link } from "react-scroll";
import logo from "../../assets/Logos/logoBackground.png";
import textBox from "../../assets/assets/txtBox.png";
import hamburgerMenu from "../../assets/assets/hamMenu.png";

function Navbar() {
  const [showHamMenu, setShowHamMenu] = useState(false);
  return (
    <nav className="navbar">
      <img src={logo} alt="Logo" className="logo" />
      <div className="menu">
        <Link
          activeClass="active"
          to="home"
          spy={true}
          smooth={true}
          offset={-100}
          duration={500}
          className="menuListItem"
        >
          Home
        </Link>
        <Link
          activeClass="active"
          to="about"
          spy={true}
          smooth={true}
          offset={-50}
          duration={500}
          className="menuListItem"
        >
          About Me
        </Link>
        <Link
          activeClass="active"
          to="portfolio"
          spy={true}
          smooth={true}
          offset={-50}
          duration={500}
          className="menuListItem"
        >
          Portfolio
        </Link>
      </div>
      <button
        className="menuButton"
        onClick={() => {
          document
            .getElementById("contact")
            .scrollIntoView({ behavior: "smooth" });
        }}
      >
        <img src={textBox} alt="" className="menuImgButton" /> Contact Me
      </button>

      <img
        src={hamburgerMenu}
        alt="MobMenu"
        className="mobileMenu"
        onClick={() => setShowHamMenu(!showHamMenu)}
      />
      <div
        className="navigationMenu"
        style={{ display: showHamMenu ? "flex" : "none" }}
      >
        <Link
          activeClass="active"
          to="home"
          spy={true}
          smooth={true}
          offset={-100}
          duration={500}
          className="mobileListItem"
          onClick={() => setShowHamMenu(false)}
        >
          Home
        </Link>
        <Link
          activeClass="active"
          to="about"
          spy={true}
          smooth={true}
          offset={-50}
          duration={500}
          className="mobileListItem"
          onClick={() => setShowHamMenu(false)}
        >
          About Me
        </Link>
        <Link
          activeClass="active"
          to="portfolio"
          spy={true}
          smooth={true}
          offset={-50}
          duration={500}
          className="mobileListItem"
          onClick={() => setShowHamMenu(false)}
        >
          Projects
        </Link>
        <Link
          activeClass="active"
          to="contact"
          spy={true}
          smooth={true}
          offset={-50}
          duration={500}
          className="mobileListItem"
          onClick={() => setShowHamMenu(false)}
        >
          Contact Me
        </Link>
      </div>
    </nav>
  );
}

export default Navbar;
