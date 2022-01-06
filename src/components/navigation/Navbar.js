import SolWeedLogo from "../../assets/solweedlogo.png";

import "./Navbar.css";

function Navbar() {
  return (
    <div className="nav sticky-top">
      <div className="nav_items container-fluid pt-2 pb-2">
        <div className="nav_items_logo">
          <img src={SolWeedLogo} alt="SolWeedPunk" />
        </div>
        <div className="nav_items_menus">
          <a href="#home">HOME</a>
          <a href="#about">ABOUT</a>
          <a href="#roadmap">ROADMAP</a>
          <a href="#team">TEAM</a>
          <a href="#links">OFFICIAL LINKS</a>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
