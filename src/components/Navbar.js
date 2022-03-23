import React, { useEffect, useState } from "react";
import "../styles/Navbar.scss";
import logo from "../assets/netflix-logo.png";
import avatar from "../assets/avatar.png";

function Navbar() {
  const [show, handleShow] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 100) {
        handleShow(true);
      } else handleShow(false);
    });

    return () => {
      window.removeEventListener("scroll");
    };
  }, []);

  return (
    <div className={`navbar ${show && "navbar__black"}`}>
      <div className='navdiv'>
        <a href='/'>
          <img src={logo} alt='Netflix Logo' className='nav__logo' />
        </a>
        <img src={avatar} alt='Avatar' className='nav__avatar' />
      </div>
    </div>
  );
}

export default Navbar;
