import React, { useState } from "react";
import SolWeedLogo from "../../assets/solweedlogo.png";

import { BiMenuAltRight } from "react-icons/bi";
import { IoCloseOutline } from "react-icons/io5";

import "./Navbar.css";

function Navbar() {
  return (
    <div className="nav sticky-top">
      <div className="nav_items container pt-2 pb-2">
        <div className="nav_items_logo">
          <img src={SolWeedLogo} alt="SolWeedPunk" />
        </div>
        <div className="nav_items_menus">
          <a href="#home">HOME</a>
          <a href="#rarity">RARITY</a>
          <a href="#about">ABOUT</a>
          <a href="#roadmap">ROADMAP</a>
          <a href="#team">TEAM</a>
          <a href="#faq">FAQ</a>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
