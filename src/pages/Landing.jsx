import React from "react";
import { slide as Menu } from "react-burger-menu";

const Landing = () => {
  const showHurgerSetting = (e) => {
    e.preventDefault();
  };

  return (
    <div >
      <Menu right>
        <a id="home" className="menu-item" href="/">
          Home
        </a>
        <a id="about" className="menu-item" href="/about">
          About
        </a>
        <a id="contact" className="menu-item" href="/contact">
          Contact
        </a>
        <a onClick={showHurgerSetting} className="menu-item--small" href="">
          Settings
        </a>
      </Menu>
    </div>
  );
};

export default Landing;
